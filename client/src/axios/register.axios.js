const axios = require("axios");

export const registerAxios = async (username, email, phoneNumber) => {
    return axios
        .post("http://localhost:8080/register", {
            name: username,
            email: email,
            phone: phoneNumber,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
