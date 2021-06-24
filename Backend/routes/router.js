//const { response, request } = require("express");
const SignupTemplateCopy = require("../models/signupModel");
const express = require("express");

const router = express.Router();

router.post("/signup", (request, response) => {
  const signedUpUser = new SignupTemplateCopy({
    fname: request.body.fname,
    lname: request.body.lname,
    email: request.body.email,
    password: request.body.password,
    date: request.body.date
  });
  signedUpUser.save()
  .then((data) => {
    response.json(data);
  })
  .catch((error)=>{
    response.json(error)
  })
});

router.get("/users", (request, response) => {
  const signedUpUser = new SignupTemplateCopy({
    fname: request.body.fname,
    lname: request.body.lname,
    email: request.body.email,
    password: request.body.password,
    date: request.body.date
  });
  signedUpUser.save()
  .then((data) => {
    response.json(data);
  })
  .catch((error)=>{
    response.json(error)
  })
});

module.exports = router;
