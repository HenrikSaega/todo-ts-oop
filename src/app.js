"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.listen(3011, function () {
    console.log('Server is started at http://localhost:3011');
});