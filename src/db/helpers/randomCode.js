const { v4: uuidv4 } = require('uuid');

const randomCode = () =>{
    const code = uuidv4();
    console.log(code)
    return code;
}
module.exports = randomCode;