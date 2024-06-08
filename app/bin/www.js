"use strict";

// ../ -> 상위폴더
const {app, port} = require("../app");


app.listen(port, () => {
    console.log("서버가동");
});