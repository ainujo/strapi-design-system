
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Popover.production.js");
  } else {
    module.exports = require("./Popover.development.js");
  }
  