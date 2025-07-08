const db = require("./db");
const Duck = require("./duck");
const User = require("./user");
const Student = require("./students");
const Campus = require("./campuses");

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Duck,
  User,
  Student,
  Campus,
};
