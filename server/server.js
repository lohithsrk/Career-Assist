if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

const db = require('./database');

const registerRoute = require('./route/register.route');
const csvRoute = require('./route/admin/csv.route');
const assessmentClientRoute = require('./route/assessmentClient.route');
const assessmentAdminRoute = require('./route/admin/assessmentAdmin.route');

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Mysql connected');
	}
});


app.use('/',registerRoute);
app.use('/',csvRoute);
app.use('/assessment', assessmentClientRoute);
app.use('/', registerRoute);
app.use('/assessment/client/', assessmentClientRoute);
app.use('/assessment/admin/', assessmentAdminRoute);

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
