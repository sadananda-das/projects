const path = require("path");
const express = require("express");

const storeRouter = express.Router();
const {
  getHome,
  getBlogs,
  getContent,
} = require("../controller/storeController");
storeRouter.get("/", getHome);
storeRouter.get("/blogs", getBlogs);
storeRouter.get("/blogs/:id", getContent);

module.exports = storeRouter;
