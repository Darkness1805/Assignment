const {constants} = require("../constants")
const errorHndler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // default is 500 internal server error code.
  switch(statusCode){
    case constants.Task_missing:
        res.json({ title: "Task_missing",message : err.message, stackTrace : err.stack });
        break;
    case constants.Not_found:
        res.json({ title: "Not_found",message : err.message, stackTrace : err.stack });
        break;
    case constants.UNAUTHORIZED:
        res.json({ title: "UNAUTHORIZED",message : err.message, stackTrace : err.stack });
        break;
    case constants.SERVER_ERROR:
        res.json({ title: "SERVER_ERROR",message : err.message, stackTrace : err.stack });
        break;

    default:
        console.log("no error all good")
        break;

  }
  
  

};

module.exports = errorHndler; 