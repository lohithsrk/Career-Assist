const { db } = require("../../database");
var validator = require("validator");
const nodemailer = require("nodemailer");


exports.csvParse = async (req, res) => {
  const { csv } = req.body;
  const errorData = [];
  //validator
  const emailValidator = (data) => {
    if (validator.isEmail(data["email"])) {
      phoneValidator(data);
      return true;
    } else {
      errorData.push(data);

      return false;
    }
  };

  const phoneValidator = (data) => {
    if (validator.isMobilePhone(data["phone"], "en-IN")) {
      nameValidator(data);
      return true;
    } else {
      errorData.push(data);

      return false;
    }
  };

  const nameValidator = (data) => {
    if (validator.isNumeric(data["name"])) {
      errorData.push(data);
      
      return false;

    } else {

      return true;

    }
  };
  csv.forEach((data) => {
    var email = data["email"];
    var phone = data["phone"];
    var name = data["name"];
    try {
      if (validator.isLength(name, phone, email)) {
        errorData.push(data);
      } else {
        emailValidator(data);
      }
    } catch (err) {
      console.log("exception", err);
    }
  });
  var newcsv = [];
  newcsv = csv.filter((c) => {
    return !errorData.some((ed) => {
      return (
        c["email"] === ed["email"] &&
        c["phone"] === ed["phone"] &&
        c["name"] === ed["name"]
      );
    });
  });

  console.log(newcsv, "newcsv");
  var json = JSON.stringify(newcsv);
  db.query(
    "INSERT INTO BulkEmailRegistration SET ?",
    { userid: 0, date: new Date(), userdata: json },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        res.json({
          message: "csv added successfully",
          results: results.insertId,
        });
      }
    }
  );
};
exports.bulkEmail = async (req, res) => {
  // const { id } = req.body;
  db.query('SELECT userdata from BulkEmailRegistration WHERE id = ?',[5], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      var data = JSON.parse(results[0].userdata);
      var emails = [];
      data.forEach((d) => {
        emails.push(d["email"]);
      });
      console.log(data,emails);

      async function main() {
        console.log('main');
        
        let transporter = nodemailer.createTransport({
 
          service: 'gmail',
          auth: {
            user: process.env.MAILNAME, // generated ethereal user
            pass: process.env.MAILPASS, // generated ethereal password
          },
        });
        
        
        console.log(...emails);
        let info = await transporter.sendMail({
          from: process.env.MAILNAME,
          to: "a@gmail.com", 
          subject: "Hello ✔", 
          text: "Hello world?", 
          html: "<b>Hello world?</b>",
        });
      
        console.log("Message sent: %s", info);
      }
      
      main().catch(console.error);
      
    }
  })
};