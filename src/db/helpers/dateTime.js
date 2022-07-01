const dateTime = () =>{
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}
module.exports = dateTime;