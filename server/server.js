if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const db = require('./database');

const assessmentClientRoute = require('./route/assessmentClient.route');
const assessmentAdminRoute = require('./route/admin/assessmentAdmin.route');

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Mysql connected');
	}
});

app.use('/assessment', assessmentClientRoute);
app.use('/assessment/admin/', assessmentAdminRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
