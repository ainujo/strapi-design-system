
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Stack.production.js");
  } else {
    module.exports = require("./Stack.development.js");
  }
  