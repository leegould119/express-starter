const router = require("express").Router();
// read more about http requests here
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
router.get("/", (req, res, next) => {
  // return data to the frontend
  // TODO get user data from the databse and return it to the frontend
  res.send({
    userData: {
      firstName: "Lee",
      lastName: "Gould",
      userId: "dfgdf3456356467",
    },
  });
  next();
});

router.get("/user/:id", (req, res, next) => {
  let id = req.params.id;
  console.log("user id : " + id);
  res.send("user id is :" + id);
  //   find a particular user and send their data back to the fronend
  next();
});

router.post("/post", (req, res, next) => {
  // console log the request body
  //   console.log(req.body);
  console.log(req.body.address);
  // todo add to database
  res.send({
    body: req.body,
    type: "POST",
    message: "this is a post request",
  });
  //   post a new record
  next();
});

router.delete("/delete", (req, res, next) => {
  // console the request
  console.log(req.body);
  res.send({
    body: req.body,
    type: "DELETE",
    message: "this is a delete request",
  });
  //   delete a record {mogodb , mysql}
});

router.put("/put", (req, res, next) => {
  res.send({
    type: "PUT",
    message: "this is a put request",
  });
});

module.exports = router;
