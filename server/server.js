if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

const { questionsDB, db } = require('./database');

const registerRoute = require('./route/register.route');
const csvRoute = require('./route/admin/csv.route');
const assessmentClientRoute = require('./route/assessmentClient.route');
const assessmentAdminRoute = require('./route/admin/assessmentAdmin.route');

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


app.use('/',registerRoute);
app.use('/',csvRoute);
app.use('/assessment', assessmentClientRoute);
app.use('/assessment/client/', assessmentClientRoute);
app.use('/assessment/admin/', assessmentAdminRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
