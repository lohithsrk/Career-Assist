if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const { questionsDB, db } = require('./database');

const registerRoute = require('./route/register.route');
const assessmentClientRoute = require('./route/assessmentClient.route');
const assessmentAdminRoute = require('./route/admin/assessmentAdmin.route');
const reviewRoute = require('./route/review.route');
const contactRoute = require('./route/contact.route');

questionsDB.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Questions DB connected');
	}
});

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Database connected');
	}
});

app.use('/', registerRoute);
app.use('/assessment/client/', assessmentClientRoute);
app.use('/assessment/admin/', assessmentAdminRoute);
app.use('/review/', reviewRoute);
app.use('/contact/', contactRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
