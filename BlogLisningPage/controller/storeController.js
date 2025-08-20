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

// exports.getContent = async (req, res) => {
//   const blogId = req.params.id;
//   const usedata = require("./data.json");
//   // console.log("usedata", usedata);
//   console.log(blogId);

//   res.render("../views/store/content", {
//     blogs: usedata,
//     currentPage: "content",
//     blogId: blogId,
//   });
// };
