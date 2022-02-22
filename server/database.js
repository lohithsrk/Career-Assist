const mysql = require('mysql');

const db = mysql.createConnection({
	host: process.env.QUESTIONS_HOST,
	port: 3306,
	database: process.env.QUESTIONS_DATABASE,
	user: process.env.QUESTIONS_USER,
	password: process.env.QUESTIONS_PASSWORD
});

module.exports = db;
