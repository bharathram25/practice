const Designation = require('../models').designation;
const Role = require('../models').role;
const Employee = require('../models').employee;
const Register=require('../models').register;

const getEmployees = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findAll({
    include: [
      { model: Role },
      { model: Designation }
    ]
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;



const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employee] = await to(Employee.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employee });
}
module.exports.createEmployee = createEmployee;


const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;

const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;

const deleteEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, deleteEmp] = await to(Employee.destroy({
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteEmp });
}
module.exports.deleteEmployee = deleteEmployee;

const getEmployee = async function (req, res) {
  let err;
  [err, employeeDetails] = await to(Employee.findOne({
    where: {
      id: req.body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.getEmployee = getEmployee;

const updateEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employeeDetails] = await to(Employee.update(body, {
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.updateEmployee = updateEmployee;

const checkEmail = async function (req, res) {
  let body = req.body;
  let email, err;
  [err, email] = await to(Employee.findOne({
    where: { email: body.email }
  }));
  if (err) ReE(res, err, 422);
  if (body.id && email && email.id === body.id) {
    email = null;
  }
  return ReS(res, { emailExist: email ? true : false });
}
module.exports.checkEmail = checkEmail;


// ----------------- REGISTER TABLE -------------------
//------------------------------------------------------
const getUsers = async function (req, res) {
  let err;
  [err, response] = await to(Register.findAll({
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getUsers = getUsers;

//update user

const updateUser = async function (req, res) {
  let err;
  let body = req.body;
  [err, RegisterDetails] = await to(Register.update(body, {
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { RegisterDetails });
}
module.exports.updateUser = updateUser;

//delete user
const deleteUser = async function (req, res) {
  let err;
  let body = req.body;
  console.log(body);
  [err, deleteEmp] = await to(Register.destroy({
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteEmp });
}
module.exports.deleteUser = deleteUser;

//getUser
const getUser = async function (req, res) {
  let err;
  [err, userDetails] = await to(Register.findOne({
    where: {
      id: req.body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { userDetails });
}
module.exports.getUser = getUser;

const createUser = async function (req, res) {
  let err;
  console.log(req);
  let body = req.body;
  console.log(body);
  [err, user] = await to(Register.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { user });
}
module.exports.createUser = createUser;

//------------------------------------------------------

