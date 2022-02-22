const mysql = require('mysql');

const questionsDB = mysql.createConnection({
	host: process.env.QUESTIONS_HOST,
	port: 3306,
	database: process.env.QUESTIONS_DATABASE,
	user: process.env.QUESTIONS_USER,
	password: process.env.QUESTIONS_PASSWORD
});

const db = mysql.createConnection({
	host: process.env.HOST,
	port: 3306,
	database: process.env.DATABASE,
	user: process.env.USER,
	password: process.env.PASSWORD
});

module.exports = { questionsDB, db };
