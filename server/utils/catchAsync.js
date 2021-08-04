/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

//! Error handler function which wraps all async fuctions and cuts try-catch block, all errors is in next argument
