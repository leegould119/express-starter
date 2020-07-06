const express = require("express");
// https://expressjs.com/
// https://www.npmjs.com/package/nodemon
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
// middleware
app.use("/users", require("./routes/user-routes"));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
