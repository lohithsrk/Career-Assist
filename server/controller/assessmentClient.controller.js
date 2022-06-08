const { questionsDB } = require('../database');

const questionsClientGet = async (req, res) => {
	const { extraSubject, jeeMark, boardMark } = req.query;

	class Marks {
		constructor(jeeMark, boardMark) {
			this.jeeMark = jeeMark;
			this.boardMark = boardMark;
		}
	}

	await questionsDB.query(`SELECT * FROM mark`, async (err, result) => {
		const marks = new Marks(result[0].jee, result[0].board);

		let category;

		if (jeeMark >= marks.jee) {
			category = 'advance';
		} else {
			if (boardMark >= marks.board) {
				category = 'advance';
			} else {
				category = 'basic';
			}
		}
		const physics = null;
		await questionsDB.query(
			`SELECT * FROM Physics WHERE category = ${category}`,
			(request, responses) => {
				responses &&
					responses.forEach((response) => {
						physics.push(response);
					});
			}
		);

		const chemistry = null;
		await questionsDB.query(
			`SELECT * FROM Chemistry WHERE category = ${category}`,
			(request, responses) => {
				responses &&
					responses.forEach((response) => {
						chemistry.push(response);
					});
			}
		);

		const maths = null;
		await questionsDB.query(
			`SELECT * FROM Maths WHERE category = ${category}`,
			(request, responses) => {
				responses &&
					responses.forEach((response) => {
						maths.push(response);
					});
			}
		);

		const biology = null;
		await questionsDB.query(
			`SELECT * FROM Biology WHERE category = ${category}`,
			(request, responses) => {
				responses &&
					responses.forEach((response) => {
						biology.push(response);
					});
			}
		);

		const computer = null;
		await questionsDB.query(
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
	});
};

const questionsClientPost = async (req, res) => {
	const { physics, chemistry, maths, extraSubject, softskill, userID } =
		req.body;

	await questionsDB.query(
		`INSERT INTO assessmentMark SET ?`,
		{ physics, chemistry, maths, extraSubject, softskill, userID },
		(err, result) => {
			if (err) console.log(err);
			res.json(result);
		}
	);
};

module.exports = { questionsClientGet, questionsClientPost };
