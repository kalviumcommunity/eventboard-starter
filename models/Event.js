import mongoose from "mongoose";

// ---- TASK 1: define sessionSchema (embedded subdocument) ----
// Fields:
//   - name        (String, required)
//   - durationMin (Number, required, min 1)
//   - speaker     (String)
//
// const sessionSchema = new mongoose.Schema({ ... });

// ---- TASK 1: define eventSchema ----
// Fields:
//   - title     (String, required, trim)
//   - organizer (String, required)
//   - category  (String, enum ["tech", "music", "sports", "business", "other"], default "other")
//   - year      (Number, min 0)
//   - sessions  (array of sessionSchema — embedded)
//   - createdAt (Date, default Date.now)
//
// const eventSchema = new mongoose.Schema({ ... });

// ---- TASK 1: compile and export the model ----
// const Event = mongoose.model("Event", eventSchema);
// export default Event;

export default null; // TODO: replace with the compiled Event model
