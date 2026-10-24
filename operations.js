import Event from "./models/Event.js";

// ---- TASK 2: create an event ----
// createEvent(data) — data is { title, organizer, category, year }.
// Create the event with an empty sessions array and return the saved document.
//   e.g. return Event.create({ ...data, sessions: [] });
export async function createEvent(data) {
  // TODO
}

// ---- TASK 2: read events, newest first, with an optional filter ----
// getEvents(filter) — return all events matching `filter` (or all if none),
// sorted by createdAt descending.
//   e.g. return Event.find(filter).sort({ createdAt: -1 });
export async function getEvents(filter = {}) {
  // TODO
}

// ---- TASK 3: add an embedded session ----
// addSession(eventId, name, durationMin, speaker) — find the event by id, push the
// session onto its `sessions` array, save (so validators run), and return the event.
//   Use Event.findById(...), .sessions.push(...), await event.save().
export async function addSession(eventId, name, durationMin, speaker) {
  // TODO
}

// ---- TASK 3: delete an event ----
// deleteEvent(eventId) — delete by id.
//   Return { deleted: true } on success, or { deleted: false } if none was found.
export async function deleteEvent(eventId) {
  // TODO
}
