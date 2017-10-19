const express = require('express');
module.exports = function() {
    var router = express.Router();
    //检查登陆状态
    router.use((req, res, next) => {
        if (!req.session['admin_id'] && req.url != '/login') {
            res.redirect('/admin/login');
        } else {
            next();
        }
    })
    router.get('/', (req, res) => {
            res.render('admin/index.ejs', {});
        })
        //登陆部分
    router.use('/login', require('./login')());
    //banner图部分
    router.use('/banners', require('./banners')());
    //用户评价eval部分
    router.use('/eval', require('./eval')());
    //blogs博客部分
    router.use('/blogs', require('./blog')());
    return router;
};