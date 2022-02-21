const db = require('../database');

const questionsClientGet = async (req, res) => {
	const { extraSubject, jeeMark, boardMark } = req.query;
	let category;

	if (boardMark < 50) {
		return res.json('You are not eligible for this test');
	} else {
		if (jeeMark >= 80) {
			category = 'advanced';
		} else if (jeeMark <= 80) {
			category = 'basic';
		}
	}
	const physics = null;
	await db.query(
		`SELECT * FROM Physics WHERE category = ${category}`,
		(request, responses) => {
			responses &&
				responses.forEach((response) => {
					physics.push(response);
				});
		}
	);

	const chemistry = null;
	await db.query(
		`SELECT * FROM Chemistry WHERE category = ${category}`,
		(request, responses) => {
			responses &&
				responses.forEach((response) => {
					chemistry.push(response);
				});
		}
	);

	const maths = null;
	await db.query(
		`SELECT * FROM Maths WHERE category = ${category}`,
		(request, responses) => {
			responses &&
				responses.forEach((response) => {
					maths.push(response);
				});
		}
	);

	const biology = null;
	await db.query(
		`SELECT * FROM Biology WHERE category = ${category}`,
		(request, responses) => {
			responses &&
				responses.forEach((response) => {
					biology.push(response);
				});
		}
	);

	const computer = null;
	await db.query(
		`SELECT * FROM Computer WHERE category = ${category}`,
		(request, responses) => {
			responses &&
				responses.forEach((response) => {
					computer.push(response);
				});
		}
	);
	if (physics >= 15 && chemistry >= 15 && maths >= 15) {
		res.json([
			physics,
			chemistry,
			maths,
			extraSubject == 'biology' ? biology : computer
		]);
	} else {
		res.json('Not enough questions');
	}
};

module.exports = { questionsClientGet };
