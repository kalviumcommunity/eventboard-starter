# EventBoard — Model and Query an Event Schedule with Mongoose

A tiny Node.js + Mongoose starter. The database connection, seed data, and test script are
already wired up. Your job is to **define the Mongoose schema** and **implement four data
operations**, then prove they work by running the test script.

You edit only two files: `models/Event.js` and `operations.js`. Every place you need to fill in
is marked with a `TODO` comment.

> Do not change `db.js`, `seed.js`, or `test.js`. Do not rename files.

## Setup & run
```bash
npm install
cp .env.example .env      # set MONGODB_URI (Atlas or local MongoDB)
npm run seed              # inserts 5 starter events (needs your schema)
npm run test              # runs your operations end to end
```

## What you edit
- `models/Event.js` — the embedded `sessionSchema` + the `eventSchema` (Task 1)
- `operations.js` — `createEvent`, `getEvents`, `addSession`, `deleteEvent` (Tasks 2–3)
