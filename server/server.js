require('dotenv').config();

const express = require('express');

const app = express();

const assessmentRoute = require('./route/assessment.route');

app.use('/assessment', assessmentRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
