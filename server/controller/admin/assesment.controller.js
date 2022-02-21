const db = require('../../database');

const questionsAdminGet = async (req, res) => {
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
	res.json([physics, chemistry, maths, biology, computer]);
};

const questionsAdminPost = async (req, res) => {
	const subject = req.query.subject;

	await db.query(`INSERT INTO ${subject} SET ?`, req.body.subject);
};

module.exports = { questionsClientGet, questionsAdminGet, questionsAdminPost };
