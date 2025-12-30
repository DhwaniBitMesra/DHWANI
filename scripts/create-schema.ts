import { Client, SimpleFieldType } from '@hygraph/management-sdk';

const client = new Client({
    authToken: process.env.HYGRAPH_TOKEN!,
    endpoint: 'https://management-ap-south-1.hygraph.com/graphql',
});

const run = async () => {
    console.log("Starting Schema Migration...");

    try {
        // 1. TeamMember
        console.log("Creating TeamMember model...");
        try {
            client.createModel({
                apiId: 'TeamMember',
                apiIdPlural: 'TeamMembers',
                displayName: 'Team Member',
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'name',
                displayName: 'Name',
                isTitle: true,
                isRequired: true,
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'role',
                displayName: 'Role',
                isRequired: true,
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'bio',
                displayName: 'Bio',
                isList: false,
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'slug',
                displayName: 'Slug',
                isRequired: true,
                isUnique: true,
            });
            client.createRelationalField({
                parentApiId: 'TeamMember',
                apiId: 'image',
                displayName: 'Image',
                relatedModelApiId: 'Asset',
                reverseFieldApiId: 'teamMemberImage',
                reverseFieldDisplayName: 'Team Member',
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'skills',
                displayName: 'Skills',
                isList: true,
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'categories',
                displayName: 'Categories',
                isList: true,
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'instagramUrl',
                displayName: 'Instagram URL',
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'linkedinUrl',
                displayName: 'LinkedIn URL',
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'githubUrl',
                displayName: 'GitHub URL',
            });
            client.createSimpleField({
                parentApiId: 'TeamMember',
                type: SimpleFieldType.String,
                apiId: 'email',
                displayName: 'Email',
            });
        } catch (e) {
            console.log("TeamMember setup step failed (might exist):", e);
        }

        // 2. Event
        console.log("Creating Event model...");
        try {
            client.createModel({
                apiId: 'Event',
                apiIdPlural: 'Events',
                displayName: 'Event',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'title',
                displayName: 'Title',
                isTitle: true,
                isRequired: true,
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'slug',
                displayName: 'Slug',
                isRequired: true,
                isUnique: true,
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'description',
                displayName: 'Description',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.DateTime,
                apiId: 'date',
                displayName: 'Date',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'location',
                displayName: 'Location',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'iconName',
                displayName: 'Icon Name',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'category',
                displayName: 'Category',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'gradientFrom',
                displayName: 'Gradient From',
            });
            client.createSimpleField({
                parentApiId: 'Event',
                type: SimpleFieldType.String,
                apiId: 'gradientTo',
                displayName: 'Gradient To',
            });
        } catch (e) {
            console.log("Event setup step failed (might exist):", e);
        }

        // 3. Post (News)
        console.log("Creating Post model...");
        try {
            client.createModel({
                apiId: 'Post',
                apiIdPlural: 'Posts',
                displayName: 'Post',
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.String,
                apiId: 'title',
                displayName: 'Title',
                isTitle: true,
                isRequired: true,
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.String,
                apiId: 'slug',
                displayName: 'Slug',
                isRequired: true,
                isUnique: true,
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.String,
                apiId: 'excerpt',
                displayName: 'Excerpt',
                isRequired: true,
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.String,
                apiId: 'content',
                displayName: 'Content',
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.Date,
                apiId: 'date',
                displayName: 'Date',
            });
            client.createSimpleField({
                parentApiId: 'Post',
                type: SimpleFieldType.String,
                apiId: 'category',
                displayName: 'Category',
            });
            client.createRelationalField({
                parentApiId: 'Post',
                apiId: 'coverImage',
                displayName: 'Cover Image',
                relatedModelApiId: 'Asset',
                reverseFieldApiId: 'postCoverImage',
                reverseFieldDisplayName: 'Post Cover Image',
            });
        } catch (e) {
            console.log("Post setup step failed (might exist):", e);
        }

        // 4. GalleryImage
        console.log("Creating GalleryImage model...");
        try {
            client.createModel({
                apiId: 'GalleryImage',
                apiIdPlural: 'GalleryImages',
                displayName: 'Gallery Image',
            });
            client.createSimpleField({
                parentApiId: 'GalleryImage',
                type: SimpleFieldType.String,
                apiId: 'title',
                displayName: 'Title',
                isTitle: true,
            });
            client.createRelationalField({
                parentApiId: 'GalleryImage',
                apiId: 'image',
                displayName: 'Image',
                relatedModelApiId: 'Asset',
                reverseFieldApiId: 'galleryImageRef',
                reverseFieldDisplayName: 'Gallery Image Ref',
            });
            client.createSimpleField({
                parentApiId: 'GalleryImage',
                type: SimpleFieldType.Int,
                apiId: 'colSpan',
                displayName: 'Column Span',
            });
        } catch (e) {
            console.log("GalleryImage setup step failed (might exist):", e);
        }

        // 5. MusicTrack
        console.log("Creating MusicTrack model...");
        try {
            client.createModel({
                apiId: 'MusicTrack',
                apiIdPlural: 'MusicTracks',
                displayName: 'Music Track',
            });
            client.createSimpleField({
                parentApiId: 'MusicTrack',
                type: SimpleFieldType.String,
                apiId: 'title',
                displayName: 'Title',
                isTitle: true,
            });
            client.createSimpleField({
                parentApiId: 'MusicTrack',
                type: SimpleFieldType.String,
                apiId: 'embedUrl',
                displayName: 'Embed URL',
            });
            client.createSimpleField({
                parentApiId: 'MusicTrack',
                type: SimpleFieldType.String,
                apiId: 'description',
                displayName: 'Description',
            });
        } catch (e) {
            console.log("MusicTrack setup step failed (might exist):", e);
        }

        // EXECUTE
        console.log("Executing migration...");
        await client.run();
        console.log("Migration executed successfully!");

    } catch (error: any) {
        console.error("Migration fatal error:", error);
        if (error.response) {
            console.error("Response Errors:", JSON.stringify(error.response.errors, null, 2));
        }
    }
};

run();
