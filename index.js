var express = require("express");
var app = express();
const { connect } = require("http2");
let port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.render("mainindex");
});

app.get("/preparation", function (req, res) {
  res.render("preparation");
});

app.get("/data", function (req, res) {
  res.render("data");
});

app.get("/production", function (req, res) {
  res.render("production");
});

app.get("/cost", function (req, res) {
  res.render("cost");
});

app.get("/quality", function (req, res) {
  res.render("quality");
});

app.get("/automation", function (req, res) {
  res.render("automation");
});

app.get("/sowing", function (req, res) {
  res.render("sowing");
});

app.get("/irrigation", function (req, res) {
  res.render("irrigation");
});

app.get("/manure", function (req, res) {
  res.render("manure");
});

app.get("/protecting", function (req, res) {
  res.render("protecting");
});

app.get("/storage", function (req, res) {
  res.render("storage");
});

app.get("/weedmanagement", function (req, res) {
  res.render("weedmanagement");
});

app.get("/pest", function (req, res) {
  res.render("pest");
});

app.get("/plantdisease", function (req, res) {
  res.render("plantdisease");
});

app.get("/threshing", function (req, res) {
  res.render("threshing");
});

app.get("/winnowing", function (req, res) {
  res.render("winnowing");
});

app.listen(port, function () {
  console.log("Server Online ...");
});
