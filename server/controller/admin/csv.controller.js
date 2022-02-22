const db = require("../../database");
var validator = require("validator");
const errorData = [];
//validator
const emailValidator = (data) => {
    if(validator.isEmail(data["email"])) {
        phoneValidator(data);
        return true;
    } else {
        
        errorData.push(data);
        
        return false;
    }
};

const phoneValidator = (data) => {
    
    if(validator.isMobilePhone(data["phone"],'en-IN')) {
        
        nameValidator(data);
        return true;
    } else {
        
        errorData.push(data);
        
        return false;
    }
};

const nameValidator = (data) => {
    if(validator.isNumeric(data["name"])) {
        
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
        
        if(validator.isLength(name,phone,email)) {
           


            errorData.push(data);

           

            
        } else {
            
            (emailValidator(data))
          
            
        
        }
    } catch (err) {
        console.log('exception',err);
    }
  });
  console.log(errorData);
  csv.filter((data) => {
    data == errorData;

    console.log(csv);
  })
};
