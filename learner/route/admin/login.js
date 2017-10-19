const express = require('express');
const mysql = require('mysql');
const common = require('../../libs/common');
const db = mysql.createPool({ host: 'localhost', user: 'root', password: '1234', database: 'learner', port: 3308 });
module.exports = function() {
    var router = express.Router();
    router.get('/', (req, res) => {
        res.render('admin/login.ejs', {});
    })
    router.post('/', (req, res) => {
        var user = req.body.user;
        var pass = common.md5(req.body.pass + common.MD5_LOCK);
        db.query(`SELECT * FROM admin_table WHERE user='${user}'`, (err, data) => {
            if (err) {
                res.status(500).send('database error').end();
            } else {
                if (data.length == 0) {
                    res.status(400).send('User does not exist').end();
                } else {
                    if (data[0].pass == pass) {
                        //登陆成功
                        req.session['admin_id'] = data[0].ID; //是req不是res!!!!!
                        res.redirect('/admin');

                    } else {
                        res.status(400).send('wrong user name or password').end();
                    }
                }
            }
        })
    })
    return router;
}