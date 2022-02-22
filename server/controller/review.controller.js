const { db } = require('../database');

const reviewGet = async (req, res) => {
	await db.query('SELECT * FROM review', (err, result) => {
		if (err) console.log(err);
		res.json(result);
	});
};

const reviewPost = async (req, res) => {
	const { id, rating, review } = req.body;
	await db.query(
		'INSERT INTO review SET ?',
		{ userID: id, rating, review, date: new Date() },
		(err, result) => {
			if (err) console.log(err);
			res.json('Thank you for your feedback!');
		}
	);
};
module.exports = { reviewGet, reviewPost };
