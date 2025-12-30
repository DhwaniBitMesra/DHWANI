
import { GraphQLClient, gql } from 'graphql-request';
import { teamMembers, events, newsItems, galleryImages, musicItems } from '../src/data/fallback';

// Client for Content API
const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT!, {
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
});

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


async function uploadAsset(url: string) {
    try {
        const mutation = gql`
      mutation UploadAsset($url: String!) {
        createAsset(data: { uploadUrl: $url }) {
          id
        }
      }
    `;
        const data: any = await client.request(mutation, { url });
        const id = data.createAsset.id;
        console.log(`Uploaded asset: ${id} from ${url}`);

        // Retry publishing up to 5 times
        for (let i = 0; i < 5; i++) {
            await wait(2000); // Wait 2s initial/between retries
            try {
                const publishMutation = gql`
            mutation PublishAsset($id: ID!) {
                publishAsset(where: { id: $id }, to: PUBLISHED) {
                id
                }
            }
            `;
                await client.request(publishMutation, { id });
                console.log(`Published asset: ${id}`);
                return id;
            } catch (e: any) {
                if (JSON.stringify(e).includes("non complete asset")) {
                    console.log(`Asset ${id} processing... retrying (${i + 1}/5)`);
                    continue;
                }
                throw e;
            }
        }
        console.warn(`Could not publish asset ${id} after retries.`);
        return id; // Return ID anyway, just won't be published
    } catch (error) {
        console.error(`Failed to upload asset from ${url}:`, error);
        return null;
    }
}

async function seedTeam() {
    console.log('Seeding Team Members (Sequentially)...');
    for (const member of teamMembers) {
        try {
            let imageId = null;
            if (member.image) {
                console.log(`Uploading avatar for ${member.name}...`);
                imageId = await uploadAsset(member.image);
            }

            const data: any = {
                name: member.name,
                role: member.role,
                bio: member.bio,
                slug: member.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                skills: member.skills,
                categories: member.categories,
                instagramUrl: member.socialMedia?.instagram,
                linkedinUrl: member.socialMedia?.linkedin,
                githubUrl: member.socialMedia?.github,
                email: member.socialMedia?.email
            };

            if (imageId) {
                data.image = { connect: { id: imageId } };
            }

            const mutation = gql`
        mutation CreateTeamMember($data: TeamMemberCreateInput!) {
          createTeamMember(data: $data) { id }
        }
      `;

            const res: any = await client.request(mutation, { data });
            const id = res.createTeamMember.id;

            await client.request(
                gql`mutation PublishTeamMember($id: ID!) { publishTeamMember(where: { id: $id }, to: PUBLISHED) { id } }`,
                { id }
            );
            console.log(`Created & Published member: ${member.name}`);
            await wait(500);
        } catch (e: any) {
            if (JSON.stringify(e).includes("UniqueConstraint")) {
                console.log(`Skipping ${member.name} (Already exists)`);
            } else {
                console.error(`Failed to create team member ${member.name}:`, e.message || e);
            }
        }
    }
}

async function seedEvents() {
    console.log('Seeding Events (Sequentially)...');
    for (const event of events) {
        try {
            const data: any = {
                title: event.title,
                slug: event.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                description: event.description,
                date: new Date().toISOString(),
                location: event.date.split('•')[1]?.trim() || "TBA",
                category: event.category,
                iconName: event.iconName,
                gradientFrom: event.gradientFrom,
                gradientTo: event.gradientTo
            };

            const mutation = gql`
        mutation CreateEvent($data: EventCreateInput!) {
          createEvent(data: $data) { id }
        }
      `;

            const res: any = await client.request(mutation, { data });
            const id = res.createEvent.id;

            await client.request(
                gql`mutation PublishEvent($id: ID!) { publishEvent(where: { id: $id }, to: PUBLISHED) { id } }`,
                { id }
            );
            console.log(`Created & Published event: ${event.title}`);
            await wait(500);
        } catch (e: any) {
            if (JSON.stringify(e).includes("UniqueConstraint")) {
                console.log(`Skipping ${event.title} (Already exists)`);
            } else {
                console.error(`Failed to create event ${event.title}:`, e.message || e);
            }
        }
    }
}

async function seedPosts() {
    console.log('Seeding News (Sequentially)...');
    for (const post of newsItems) {
        try {
            let imageId = null;
            if (post.coverImage) {
                imageId = await uploadAsset(post.coverImage);
            }

            const data: any = {
                title: post.title,
                slug: post.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                excerpt: post.excerpt,
                category: post.category,
                date: new Date().toISOString()
            };

            if (imageId) {
                data.coverImage = { connect: { id: imageId } };
            }

            const mutation = gql`
            mutation CreatePost($data: PostCreateInput!) {
                createPost(data: $data) { id }
            }
        `;
            const res: any = await client.request(mutation, { data });
            const id = res.createPost.id;

            await client.request(
                gql`mutation PublishPost($id: ID!) { publishPost(where: { id: $id }, to: PUBLISHED) { id } }`,
                { id }
            );
            console.log(`Created & Published news: ${post.title}`);
            await wait(500);
        } catch (e: any) {
            if (JSON.stringify(e).includes("UniqueConstraint")) {
                console.log(`Skipping ${post.title} (Already exists)`);
            } else {
                console.error(`Failed to create news ${post.title}:`, e.message || e);
            }
        }
    }
}

async function seedGallery() {
    console.log('Seeding Gallery (Sequentially)...');
    for (const item of galleryImages) {
        try {
            let imageId = null;
            if (item.src) { // Correct property from fallback.ts
                imageId = await uploadAsset(item.src);
            }

            const colSpanStr = item.span?.match(/span-(\d)/);
            const colSpan = colSpanStr ? parseInt(colSpanStr[1]) : 1;

            const data: any = {
                title: item.alt, // Correct property from fallback.ts
                colSpan: colSpan,
            };
            if (imageId) {
                data.image = { connect: { id: imageId } };
            }

            const mutation = gql`
        mutation CreateGalleryImage($data: GalleryImageCreateInput!) {
            createGalleryImage(data: $data) { id }
        }
      `;
            const res: any = await client.request(mutation, { data });
            const id = res.createGalleryImage.id;

            await client.request(
                gql`mutation PublishGalleryImage($id: ID!) { publishGalleryImage(where: { id: $id }, to: PUBLISHED) { id } }`,
                { id }
            );
            console.log(`Created & Published gallery image: ${item.title}`);
            await wait(500);
        } catch (e: any) {
            console.error(`Failed to create gallery image ${item.title}:`, e.message || e);
        }
    }
}

async function seedMusic() {
    console.log('Seeding Music (Sequentially)...');
    for (const track of musicItems) {
        try {
            const mutation = gql`
        mutation CreateMusicTrack($data: MusicTrackCreateInput!) {
            createMusicTrack(data: $data) { id }
        }
      `;
            const res: any = await client.request(mutation, { data: track });
            const id = res.createMusicTrack.id;

            await client.request(
                gql`mutation PublishMusicTrack($id: ID!) { publishMusicTrack(where: { id: $id }, to: PUBLISHED) { id } }`,
                { id }
            );
            console.log(`Created & Published music track: ${track.title}`);
            await wait(500);
        } catch (e: any) {
            console.error(`Failed to create music track ${track.title}:`, e.message || e);
        }
    }
}

async function main() {
    await seedTeam();
    await seedEvents();
    await seedPosts();
    await seedGallery();
    await seedMusic();
    console.log('Seeding complete!');
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
