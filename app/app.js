"use strict";

// 모듈
const express = require('express');
const app = express();

const port = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);  // use는 미들웨어를 등록해주는 메소드

module.exports = {
    app,
    port,
};

