"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);
router.get('/register', ctrl.output.register);
router.post('/register', ctrl.process.register);




// 라우터를 외부파일에서 사용할 수 있도록 던져줌
module.exports = router;