const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("test");
  res.render("index", { text: "World" || "Default" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
