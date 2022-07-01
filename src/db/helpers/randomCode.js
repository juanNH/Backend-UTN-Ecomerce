const { v4: uuidv4 } = require('uuid');

const randomCode = () =>{
    return uuidv4();
}
module.exports = randomCode;