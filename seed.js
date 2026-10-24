import mongoose from "mongoose";
import { connectDB } from "./db.js";
import Event from "./models/Event.js";

const EVENTS = [
  {
    title: "DevConf",
    organizer: "Ava",
    category: "tech",
    year: 2023,
    sessions: [
      { name: "Keynote", durationMin: 60, speaker: "Leo" },
      { name: "Scaling APIs", durationMin: 45, speaker: "Nara" },
    ],
  },
  {
    title: "City Marathon",
    organizer: "Rohan",
    category: "sports",
    year: 2022,
    sessions: [{ name: "Warm-up", durationMin: 30, speaker: "Coach K" }],
  },
  {
    title: "Startup Summit",
    organizer: "Mia",
    category: "business",
    year: 2021,
    sessions: [],
  },
  {
    title: "AI Meetup",
    organizer: "Kabir",
    category: "tech",
    year: 2024,
    sessions: [{ name: "LLMs 101", durationMin: 50, speaker: "Sara" }],
  },
  {
    title: "Jazz Night",
    organizer: "Ava",
    category: "music",
    year: 2020,
    sessions: [],
  },
];

async function seed() {
  await connectDB();
  await Event.deleteMany({});
  const created = await Event.insertMany(EVENTS);
  console.log(`✓ Seeded ${created.length} events`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("✗ Seed failed:", error.message);
  process.exit(1);
});
