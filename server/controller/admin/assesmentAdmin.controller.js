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
	const { subject } = req.query;

	const {
		question,
		image,
		option1,
		option2,
		option3,
		option4,
		category,
		topic,
		answer,
		description
	} = req.body;

	await db.query(
		`INSERT INTO ${subject} SET ?`,
		{
			question,
			image,
			option1,
			option2,
			option3,
			option4,
			category,
			topic,
			answer,
			description
		},
		(err, result) => {
			if (err) {
				return console.log(err);
			}
			console.log(result);
		}
	);
};

const questionsAdminPut = async (req, res) => {
	const { subject } = req.query;

	const {
		question,
		image,
		option1,
		option2,
		option3,
		option4,
		category,
		topic,
		answer,
		description
	} = req.body;

	await db.query(
		`Update ${subject} SET ?`,
		{
			question,
			image,
			option1,
			option2,
			option3,
			option4,
			category,
			topic,
			answer,
			description
		},
		(err, result) => {
			if (err) {
				return console.log(err);
			}
			console.log(result);
		}
	);
};

const questionsAdminDelete = async (req, res) => {
	const { subject, id } = req.query;
	await db.query(`DELETE FROM ${subject} WHERE id = ${id}`, (err, result) => {
		if (err) {
			return console.log(err);
		}
		console.log(result);
	});
};

module.exports = {
	questionsAdminGet,
	questionsAdminPost,
	questionsAdminPut,
	questionsAdminDelete
};
