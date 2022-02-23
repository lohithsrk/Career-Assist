const db = require("../database");


exports.userRegister = async (req, res) => {
    const {name, email, phone} = req.body;
    db.query("INSERT INTO users SET ?", {name, email, phone}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error");
        } else {
            console.log(result);
            res.status(200).send("Success");
        }
    });
};
