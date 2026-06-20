const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("memory-garden.db");

db.run("CREATE TABLE IF NOT EXISTS memories (id INTEGER PRIMARY KEY AUTOINCREMENT, x REAL, y REAL, text TEXT, photo TEXT)"); 

app.get("/memories", (req, res) => { 
	db.all("SELECT * FROM memories", (err, rows) => { 
		res.json(rows);
	});
});

app.post("/memories", (req, res) => {
	const memory = req.body;

	db.run(
		"INSERT INTO memories (x, y, text, photo) VALUES (?, ?, ?, ?)",
		[memory.x, memory.y, memory.text, memory.photo],
		function () {
			memory.id = this.lastID;
			res.json(memory);
		}
	);
});

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});