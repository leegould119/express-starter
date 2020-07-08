const router = require("express").Router();

router.post("/login", (req, res, next) => {
  let userData = req.body;
  console.log(userData);
  res.send({ userData, token: "3243450234523784952395fdsdfksfdsa" });
  next();
});
module.exports = router;
