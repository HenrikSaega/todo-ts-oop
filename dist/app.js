"use strict";
const express = require('express');
const app = express();
app.listen(3011, () => {
    console.log('Server is started at http://localhost:3011');
});
