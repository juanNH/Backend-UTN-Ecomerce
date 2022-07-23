const { v4: uuidv4 } = require('uuid');

export const randomCode = () =>{
    const code = uuidv4();
    console.log(code)
    return code;
}