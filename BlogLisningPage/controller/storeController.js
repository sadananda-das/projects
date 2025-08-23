exports.getHome = (req, res, next) => {
  const usedata = require("./data.json");
  // console.log("usedata", usedata);
  res.render("../views/store/home", { blogs: usedata });
};

exports.getBlogs = (req, res, next) => {
  const usedata = require("./data.json");
  // console.log("usedata", usedata);
  res.render("../views/store/myBlogs", {
    blogs: usedata,
    currentPage: "blogs",
  });
};

exports.getContent = async (req, res) => {
  const blogId = req.params.id;
  const userData = require("./data.json");
  // console.log("usedata", usedata);
  console.log(typeof parseInt(blogId));
  console.log("data", typeof userData[0].id);
  const findData = userData.find((blog) => blog.id === parseInt(blogId));
  if (findData) {
    console.log("findData", findData.id);
  }
  if (!findData) {
    return res.status(404).render("../views/store/404", {
      pageTitle: "Blog Not Found",
      currentPage: "content",
    });
  }

  res.render("../views/store/content", {
    blogs: findData,
    currentPage: "content",
  });
};
