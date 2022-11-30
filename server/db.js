const mongoose = require("mongoose");
const AllUser = require("./models/*****.model");
const Role = require("./models/********.model");
const MailContent = require("./models/***********.model");
require('dotenv').config();





module.exports = () => {
   mongoose.connect(*********, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => { console.log(`MongoDB '${process.env.MONGODB_URL}' connected`); initial() })
      .catch(err => { console.log("MongoDB connect failed, error:" + err); process.exit() });
};


function initial() {

   *****.estimatedDocumentCount((err, count) => {
         *******
         new *******().save()
            .then(data => {***********})
            .catch(err =>************* )
      }
   });
}