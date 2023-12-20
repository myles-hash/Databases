import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    name TEXT,
    content TEXT
)
`);

db.prepare(`INSERT INTO messages (name, content) VALUES (?, ?)`).run(
    "Spongebob",
    "Hello world"
  );
  
  const insertStatement = db.prepare(
    `INSERT INTO messages (name, content) VALUES (?, ?)`
  );

  insertStatement.run("Bingus","Meow");
  insertStatement.run("Jeff","My name Jeff");
  insertStatement.run("Me","I so happy!");
  insertStatement.run("Caveman","UG");
  insertStatement.run("Police","I am mean :(");
  insertStatement.run("test","testy testy");