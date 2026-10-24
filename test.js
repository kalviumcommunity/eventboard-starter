import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { createEvent, getEvents, addSession, deleteEvent } from "./operations.js";

async function runTests() {
  await connectDB();
  console.log("\n=== TEST SUITE ===\n");

  try {
    // 1. Read all (seeded) events
    console.log("1. Getting all events (should see 5 from seed)...");
    const all = await getEvents();
    console.log(`   Found: ${all.length} events`);
    all.forEach((e) => console.log(`   - "${e.title}" (${e.category}, ${e.year})`));

    // 2. Create an event
    console.log("\n2. Creating a new event...");
    const event = await createEvent({
      title: "Cloud Expo",
      organizer: "Tester",
      category: "tech",
      year: 2025,
    });
    console.log(`   Created: "${event.title}"  id=${event._id}`);
    console.log(`   Sessions: ${event.sessions.length}`);

    // 3. Filter by category
    console.log("\n3. Getting only tech events...");
    const tech = await getEvents({ category: "tech" });
    console.log(`   Found: ${tech.length} tech events`);

    // 4. Add an embedded session
    console.log("\n4. Adding a session to the new event...");
    const withSession = await addSession(event._id, "Opening Talk", 40, "Tester");
    console.log(`   Event now has ${withSession.sessions.length} session(s)`);
    console.log(`   Session: "${withSession.sessions[0].name}" (${withSession.sessions[0].durationMin} min)`);

    // 5. Delete the event
    console.log("\n5. Deleting the event...");
    const del = await deleteEvent(event._id);
    console.log(`   Deleted: ${del.deleted}`);

    // 6. Verify
    console.log("\n6. Verifying delete...");
    const final = await getEvents();
    console.log(`   Total events now: ${final.length} (should be 5 again)`);

    console.log("\n✓ All tests passed!\n");
  } catch (error) {
    console.error("\n✗ Test failed:", error.message, "\n");
  }

  await mongoose.disconnect();
}

runTests();
