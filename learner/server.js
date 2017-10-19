const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const path = require('path');
const multer = require('multer');
var server = express();
server.listen(8080);

//1.获取请求
server.use(bodyParser.urlencoded({
    extended: false
}))
var objMulter = multer({ dest: './static/upload' });
server.use(objMulter.any())

//2.cookie、session
server.use(cookieParser());
(function() {
    var keys = [];
    for (var i = 0; i < 100000; i++) {
        keys[i] = 'c_' + Math.random();
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 600 * 1000
    }))
})();
//3.模板
server.set('view engine', 'html');
server.set('views', './template');
server.engine('html', consolidate.ejs);
//4.router
server.use('/admin/', require('./route/admin/index')());
//5.default：static
// server.use(express.static(path.join(__dirname, '/static')));
// server.use(express.static(__dirname + '/static'));
server.use(express.static('static'));