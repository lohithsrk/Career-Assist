const db = require('../database');
const questionsClientGet = async (req, res) => {
	const extraSubject = req.params.extraSubject;

	const physics = [];
	await db.query('SELECT * FROM Physics', (request, responses) => {
		responses.forEach((response) => {
			physics.push(response);
		});
	});

	const chemistry = [];
	await db.query('SELECT * FROM Chemistry', (request, responses) => {
		responses.forEach((response) => {
			chemistry.push(response);
		});
	});

	const maths = [];
	await db.query('SELECT * FROM Maths', (request, responses) => {
		responses.forEach((response) => {
			maths.push(response);
		});
	});

	const biology = [];
	await db.query('SELECT * FROM Biology', (request, responses) => {
		responses.forEach((response) => {
			biology.push(response);
		});
	});

	const computer = [];
	await db.query('SELECT * FROM Computer', (request, responses) => {
		responses.forEach((response) => {
			computer.push(response);
		});
	});
	res.json([
		physics,
		chemistry,
		maths,
		extraSubject == 'biology' ? biology : computer
	]);
};

module.exports = { questionsClientGet };
