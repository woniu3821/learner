const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const pathLib = require('path');
const db = mysql.createPool({ user: 'root', password: '1234', host: 'localhost', database: 'learner', port: 3308 });
module.exports = function() {
    var router = express.Router();
    router.get('/', (req, res) => {
        res.send('我是blogs页面').end();
    });
    return router;
}