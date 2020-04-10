const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  employeeName: String,
  employeeId: String,
  password: String,
  location: String,
  department: String,
  phone: Number
});
module.exports = mongoose.model("user", userSchema, "users");
