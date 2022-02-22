const { db } = require('../database');

const contactGet = async (req, res) => {
	await db.query('SELECT * FROM contact', (err, result) => {
		if (err) console.log(err);
		res.json(result);
	});
};

const contactPost = async (req, res) => {
	const { name, email, message } = req.body;

	await db.query(
		'INSERT INTO contact SET ?',
		{ name, email, message },
		(err, result) => {
			if (err) console.log(err);
			res.json('Your response has been recorded. You will be contacted soon.');
		}
	);
};

module.exports = { contactGet, contactPost };
