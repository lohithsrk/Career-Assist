require('dotenv').config();

const express = require('express');

const app = express();

const db = require('./database');

const assessmentRoute = require('./route/assessment.route');

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Mysql connected');
	}
});

app.use('/assessment', assessmentRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
