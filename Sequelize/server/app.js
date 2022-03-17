const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const db = require("./util/database");
const Blog = require("./models/blog");
const Author = require("./models/author");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 9000;
Author.hasMany(Blog);
/*
sequelize
  .sync({ force: true })
  .then((result) => {
    return Author.create({
      firstName: "Adarsh",
      lastName: "Moradiya",
      email: "adarshmoradiya@gmail.com",
    });
  })
  .then((author) => {
    return author.createBlog({
      title: "My first Blog",
      technology: "Blockchain,Solidity,JavaScript",
      description:
        "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
    });
  })
  .then((blog) => {
    console.log("Author:", blog);
  })
  .catch((err) => console.log(err));
  */
db.authenticate()
  .then(() => console.log("Database Connected.."))
  .catch((err) => console.log("err", err));

app.use("/blogs", require("./routes/blogs"));
app.use("/addblog", require("./routes/blogs"));
app.listen(PORT, console.log("Server running @ ", { PORT }));