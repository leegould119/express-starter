const router = require("express").Router();

router.post("/login", (req, res, next) => {
  let userData = req.body;
  console.log(userData);
  res.send({ userData });
  next();
});

router.get("/user-data", (req, res, next) => {
  let userData = {
    userName: "Jim",
    userPassword: "ReactIsCool123",
    userPasswordVerify: "ReactIsCool123",
    gender: "male",
    termsAndConditions: true,
    rememberMe: true,
    selectedCity: { value: "Sundsvall", label: "Sundsvall" }
  };
  res.send(userData);
  next();
});
module.exports = router;
