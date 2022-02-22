const axios = require('axios');

export const fileUpload = async (csv) => {
    console.log(csv,'axios');
    return await axios.post('http://localhost:8080/fileupload',{
        csv:csv
    })
}

