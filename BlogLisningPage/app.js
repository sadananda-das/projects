const express = require("express");
const path = require("path");
const rootDir = require("./util/pathUtil");
const app = express();
app.set("view engine", "ejs");

app.set("views", "views");
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: true }));
const storeRouter = require("./routes/storeRouter");
app.use("/", storeRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
