export type EventDetails = {
  overview: string;
  rules: string[];
  regulations: string[];
  rounds: string[];
  prizes: string[];
  teamSize: string;
  eligibility: string;
  contact: string;
};

export type NaadEvent = {
  id: number;
  slug: string;
  day: "day1" | "day2" | "day3";
  title: string;
  subtitle: string;
  type: string;
  time: string;
  location: string;
  description: string;
  img: string;
  sponsor: string;
  accent: string;
  isHighlight?: boolean;
  details: EventDetails;
};

export const EVENTS: NaadEvent[] = [
  {
    id: 1,
    slug: "shadaj",
    day: "day1",
    title: "Shadaj",
    subtitle: "The Genesis",
    type: "Opening Night",
    time: "5:30 PM — 8:30 PM",
    location: "CAT Hall",
    description:
      "The grand opening ceremony of NAAD'26. Witness the ceremonial lighting of the lamp followed by a classical fusion showcase that sets the spiritual tone for the days to come.",
    img: "/Shadaj.jpg?q=80&w=1200",
    sponsor: "Coke Studio",
    accent: "from-orange-500/20 to-red-500/20",
    details: {
      overview:
        "A ceremonial opening with curated performances blending classical and contemporary soundscapes.",
      rules: [
        "All performers must report 45 minutes before stage time.",
        "Only registered participants are allowed backstage.",
        "Stage time is fixed and cannot be extended."
      ],
      regulations: [
        "No open flames or pyrotechnics on stage.",
        "Backline gear changes must stay within 5 minutes.",
        "Respect the emcee cues and stage manager instructions."
      ],
      rounds: ["Opening invocation", "Classical fusion showcase"],
      prizes: ["Best Ensemble Trophy", "Audience Choice Memento"],
      teamSize: "Group performances only",
      eligibility: "Open to invited ensembles and NAAD core performers.",
      contact: "naad.production@dhwani.in"
    }
  },
  {
    id: 2,
    slug: "dhun",
    day: "day2",
    title: "Dhun",
    subtitle: "Strings & Keys",
    type: "Solo Instrumental",
    time: "9:00 AM — 12:00 PM",
    location: "CAT Hall",
    description:
      "A battle of dexterity and soul. Guitarists, violinists, and percussionists take the stage to weave stories without words.",
    img: "/dhun.jpg?q=80&w=1200",
    sponsor: "Yamaha",
    accent: "from-blue-500/20 to-cyan-500/20",
    details: {
      overview:
        "Showcase your instrumental mastery with a short set that balances technique and musicality.",
      rules: [
        "Team Size: Solo.",
        "Time Limit: 8 minutes (including stage entry and exit).",
        "Instruments: All instruments (including beatboxing) are allowed.",
        "Genre: All genres are allowed.",
        "Judging Criteria: Technique, Rhythm, Accuracy of Notes, Dynamics, and Originality."
      ],
      regulations: [
        "Participants can perform solo or be accompanied by up to two accompanists.",
        "Judgment will be based solely on the participant's performance.",
        "Participants are not allowed to use a backing track.",
        "A tanpura or metronome may be used if desired.",
        "The decision of the judges and the organizing team shall be final and binding."
      ],
      rounds: ["Prelims", "Finals"],
      prizes: ["Winner: INR 10,000", "Runner-up: INR 5,000"],
      teamSize: "Solo",
      eligibility: "Open to all college students with valid ID.",
      contact: "dhun@dhwani.in"
    }
  },
  {
    id: 3,
    slug: "alankar",
    day: "day2",
    title: "Alankar",
    subtitle: "Eastern Vocals",
    type: "Solo Singing",
    time: "9:00 AM — 12:00 PM",
    location: "Lecture Hall 1",
    description:
      "The purity of raga meets contemporary style. A competition celebrating the rich heritage of Eastern vocal traditions.",
    img: "/Alankaar.jpg?q=80&w=1200",
    sponsor: "T-Series",
    accent: "from-emerald-500/20 to-teal-500/20",
    details: {
      overview:
        "Bring a raga-based composition that highlights improvisation, control, and emotive delivery.",
      rules: [
        "Team Size: Solo.",
        "Time Limit: 5 minutes.",
        "Judging Criteria: Pitch, Rhythm, Voice Modulation, Overall Impact of the Song.",
        "Songs must be in Hindi.",
        "Participants may accompany themselves on an instrument, perform with one accompanist, or sing over a karaoke track."
      ],
      regulations: [
        "Purely classical songs are not permitted; however, classical elements or refrains within a song are allowed.",
        "Rap portions or refrains are not allowed.",
        "Participants must strictly adhere to the time limit. Exceeding it will result in heavy penalties.",
        "Any form of obscenity will result in immediate disqualification.",
        "The organizers' decision regarding the final lineup is absolute."
      ],
      rounds: ["Audition", "Finals"],
      prizes: ["Winner: INR 8,000", "Runner-up: INR 4,000"],
      teamSize: "Solo",
      eligibility: "Open to all college students with valid ID.",
      contact: "alankar@dhwani.in"
    }
  },
  {
    id: 5,
    slug: "mandra-mayhem",
    day: "day2",
    title: "Mandra Mayhem",
    subtitle: "Battle of Bands",
    type: "Flagship Event",
    time: "12:00 PM — 5:30 PM",
    location: "CAT Hall",
    description:
      "THE MAIN EVENT. High-gain amps, thundering drums, and raw energy. The best bands in the circuit clash for the ultimate title.",
    img: "/MandraMayhem.jpg?q=80&w=1200",
    isHighlight: true,
    sponsor: "Gibson",
    accent: "from-red-600/20 to-orange-600/20",
    details: {
      overview:
        "Bands bring a 15-minute set to impress the jury on originality, tightness, and stage presence.",
      rules: [
        "Team Size: 3-8 members.",
        "Time Limit: 15 minutes on stage (including performance, setup, and soundcheck).",
        "Each band must have at least two instrumentalists, with at least one percussion instrument being mandatory.",
        "Judging Criteria: Technique, Tightness, Overall Sync, Creativity, and Overall Impact (including stage presence, etc.).",
        "A member can perform in a maximum of two bands. Exceeding this limit will result in disqualification."
      ],
      regulations: [
        "Purely classical performances are not allowed.",
        "Extra points will be awarded for original compositions.",
        "Any form of obscenity, as determined by the judges, will lead to immediate disqualification.",
        "Bands must strictly adhere to the allotted time. Exceeding the limit will result in penalties at the judges' discretion.",
        "The organizers' decision regarding the final lineup is absolute."
      ],
      rounds: ["Showcase round", "Finals"],
      prizes: ["Winner: INR 40,000", "Runner-up: INR 20,000"],
      teamSize: "Band (3-8 members)",
      eligibility: "Open to college and independent bands.",
      contact: "mandra@dhwani.in"
    }
  },
  {
    id: 4,
    slug: "raageshri",
    day: "day2",
    title: "Raageshri",
    subtitle: "Classical Vocals",
    type: "Solo Classical",
    time: "12:00 PM — 3:00 PM",
    location: "Lecture Hall 1",
    description:
      "A test of patience, pitch, and perfection. Strictly classical, strictly sublime.",
    img: "/Rageshree.jpg?q=80&w=1200",
    sponsor: "Sangeet Natak",
    accent: "from-yellow-500/20 to-amber-500/20",
    details: {
      overview:
        "A pure classical competition focusing on raga development, alaap, and taan clarity.",
      rules: [
        "Team Size: Solo.",
        "Time Limit: 15 minutes.",
        "Participants may perform any composition based on a Raag of their choice.",
        "The performance can be original or in the form of Thumri, Tarana, Hori/Kajri, or Bandish.",
        "Judging Criteria: Accuracy of notes, Rhythm, Creativity, Emotions, and Overall Impact."
      ],
      regulations: [
        "Allowed instruments include Harmonium, Tanpura, Tabla, or any other classical instrument.",
        "Participants may perform solo or bring a maximum of three accompanists.",
        "Folk and film music are not permitted.",
        "Participants must strictly adhere to the time limit; exceeding it will result in severe penalties.",
        "The judges' and organizers' decisions will be final and binding."
      ],
      rounds: ["Audition", "Finals"],
      prizes: ["Winner: INR 9,000", "Runner-up: INR 4,500"],
      teamSize: "Solo",
      eligibility: "Open to all college students with valid ID.",
      contact: "raageshri@dhwani.in"
    }
  },
  {
    id: 6,
    slug: "karaoke",
    day: "day2",
    title: "Karaoke",
    subtitle: "Open Mic",
    type: "Informal",
    time: "5:30 PM — 7:30 PM",
    location: "I.C. Arena",
    description: "No judges, no pressure. Just you, the mic, and a crowd ready to sing along.",
    img: "/karoke.jpg?q=80&w=1200",
    sponsor: "Smule",
    accent: "from-pink-500/20 to-rose-500/20",
    details: {
      overview:
        "Open mic karaoke with a rotating list of tracks and audience participation.",
      rules: [
        "First come, first served slots.",
        "One song per participant.",
        "Time limit: 4 minutes."
      ],
      regulations: [
        "No explicit lyrics.",
        "Respect the lineup and emcee instructions.",
        "Microphones must be returned after the set."
      ],
      rounds: ["Single open round"],
      prizes: ["Most Entertaining Set Memento"],
      teamSize: "Solo or duo",
      eligibility: "Open to all festival attendees.",
      contact: "karaoke@dhwani.in"
    }
  },
  {
    id: 7,
    slug: "euphony",
    day: "day3",
    title: "Euphony",
    subtitle: "Western Vocals",
    type: "Solo Singing",
    time: "9:00 AM — 1:00 PM",
    location: "CAT Hall",
    description:
      "From Jazz standards to Pop anthems. A showcase of vocal range and stage presence in Western genres.",
    img: "/euphony.jpg?q=80&w=1200",
    sponsor: "Spotify",
    accent: "from-green-500/20 to-emerald-500/20",
    details: {
      overview:
        "A western vocal showdown focused on tone, stage craft, and musical storytelling.",
      rules: [
        "Team Size: Solo.",
        "Time Limit: 8 minutes.",
        "Language: Songs must be in English.",
        "Judging Criteria: Rhythm, Pitch, Intonation, Vocal Dynamics, and Tone."
      ],
      regulations: [
        "Participants may use a backing track if they wish.",
        "Participants can perform solo or bring up to two accompanists, but judgment will be based solely on vocal performance.",
        "Obscene or inappropriate lyrics (as determined by the judges) are strictly prohibited and will result in immediate disqualification.",
        "Autotune and pitch correction are strictly prohibited.",
        "The decision of the judges and the organizing team is final and binding."
      ],
      rounds: ["Prelims", "Finals"],
      prizes: ["Winner: INR 9,000", "Runner-up: INR 4,000"],
      teamSize: "Solo",
      eligibility: "Open to all college students with valid ID.",
      contact: "euphony@dhwani.in"
    }
  },
  {
    id: 8,
    slug: "spitfire",
    day: "day3",
    title: "Spitfire",
    subtitle: "Rap Battle",
    type: "Hip Hop",
    time: "12:00 PM — 4:00 PM",
    location: "I.C. Arena",
    description: "Bars, flow, and delivery. Rappers go head-to-head in a test of lyrical wit and rhythm.",
    img: "/Spitfire.jpg?q=80&w=1200",
    sponsor: "RedBull",
    accent: "from-purple-500/20 to-indigo-500/20",
    details: {
      overview: "A head-to-head rap battle with timed rounds and prompt words.",
      rules: [
        "Open to all college students with a valid ID.",
        "1v1 battle, single round format.",
        "Each rapper gets 90 seconds to perform.",
        "Rap can be in Hindi, English, or bilingual."
      ],
      regulations: [
        "Performances can be a cappella or on beats provided by organizers.",
        "No backing tracks or pre-recorded vocals.",
        "No phones or reading material during performance.",
        "Disqualification for hate speech, personal attacks, or explicit content.",
        "Respect your opponent - Any violation leads to immediate disqualification."
      ],
      rounds: ["Bracket battles", "Finals"],
      prizes: ["Winner: INR 7,000", "Runner-up: INR 3,000"],
      teamSize: "Solo",
      eligibility: "Open to all college students with valid ID.",
      contact: "spitfire@dhwani.in"
    }
  },
  {
    id: 9,
    slug: "antakshari",
    day: "day3",
    title: "Antakshari",
    subtitle: "Musical Game",
    type: "Informal",
    time: "1:00 PM — 4:00 PM",
    location: "Lecture Hall 1",
    description: "The classic game of songs. Gather your team and test your Bollywood memory.",
    img: "/Antakshari.jpeg?q=80&w=1200",
    sponsor: "Saregama",
    accent: "from-teal-500/20 to-cyan-500/20",
    details: {
      overview: "Team-based Bollywood antakshari with timed prompts and bonus rounds.",
      rules: [
        "Team size: 3 to 5.",
        "Each song must start with the correct syllable.",
        "Time limit: 20 seconds to respond."
      ],
      regulations: [
        "Use of phones is prohibited.",
        "Teams must stay within the marked zone.",
        "Emcee decisions are final."
      ],
      rounds: ["Qualifier", "Rapid-fire round", "Finals"],
      prizes: ["Winner: INR 5,000", "Runner-up: INR 2,500"],
      teamSize: "Team (3-5 members)",
      eligibility: "Open to all festival attendees.",
      contact: "antakshari@dhwani.in"
    }
  },
  {
    id: 10,
    slug: "nishaad",
    day: "day3",
    title: "Nishaad",
    subtitle: "Grand Finale",
    type: "Closing Ceremony",
    time: "4:30 PM — 8:30 PM",
    location: "CAT Hall",
    description:
      "The final showdown. Winners of all solo categories compete for the title of 'Voice of NAAD'.",
    img: "/nishaad.jpg?q=80&w=1200",
    isHighlight: true,
    sponsor: "Dhwani",
    accent: "from-amber-500/20 to-yellow-500/20",
    details: {
      overview:
        "A closing showcase featuring the top performers from each category and a grand announcement.",
      rules: [
        "Only winners from solo categories may participate.",
        "Time limit: 8 minutes.",
        "No backing tracks unless pre-approved."
      ],
      regulations: [
        "Dress code: formal concert attire.",
        "Rehearsal slot is mandatory.",
        "Judges decisions are final."
      ],
      rounds: ["Showcase", "Awards"],
      prizes: ["Voice of NAAD Trophy", "Special Jury Prize"],
      teamSize: "Solo",
      eligibility: "By invitation only for category winners.",
      contact: "nishaad@dhwani.in"
    }
  }
];

export const SCHEDULE_DATA: Record<"day1" | "day2" | "day3", NaadEvent[]> = {
  day1: EVENTS.filter((event) => event.day === "day1"),
  day2: EVENTS.filter((event) => event.day === "day2"),
  day3: EVENTS.filter((event) => event.day === "day3")
};

export const EVENT_DETAILS: Record<string, NaadEvent> = Object.fromEntries(
  EVENTS.map((event) => [event.slug, event])
);