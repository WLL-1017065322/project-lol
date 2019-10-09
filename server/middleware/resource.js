module.exports = options => {
    
  return async (req, res, next) => {
    console.log("req.params.resource:", req.params.resource);

    const modelName = require("inflection").classify(req.params.resource);
    console.log("modelName:", modelName);

    req.Model = require(`../models/${modelName}`);
    next();
  };
};
