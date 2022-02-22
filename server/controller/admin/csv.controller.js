const { db }= require("../../database");
var validator = require("validator");
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
exports.csvParse = async (req, res) => {
  const { csv } = req.body;

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
  // errorData.forEach((ed) => {
  //   csv.forEach((c) => {
  //     if (
  //       c["email"] !== ed["email"] &&
  //       c["phone"] !== ed["phone"] &&
  //       c["name"] !== ed["name"]
  //     ) {
  //       newcsv.push(c);
  //     }
  //   });
  // });
  newcsv = csv.filter((c) => {
    return !errorData.some((ed) => {
      return (
        c["email"] === ed["email"] &&
        c["phone"] === ed["phone"] &&
        c["name"] === ed["name"]
      );
    });
  });

  console.log(csv, "csv");
  console.log(newcsv, "newcsv");
  var json = JSON.stringify(newcsv);
  db.query(
    "INSERT INTO BulkEmailRegistration SET ?",
    {userid:0, date: Date.now(), userdata: json },
    (err, results) => {
      if(err)
      {
        console.log(err);
      }  else {
        console.log(results);
        res.json({
          message: "csv added successfully"
          // results: results.insertId,
        });
      }
    }
  );
};
