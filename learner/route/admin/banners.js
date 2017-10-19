const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({ host: 'localhost', user: 'root', password: '1234', database: 'learner', port: 3308 });
module.exports = function() {
    var router = express.Router();
    router.get('/', (req, res) => {
        switch (req.query.act) {
            case 'mod':
                db.query(`SELECT * FROM banner_table WHERE ID='${req.query.id}'`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else if (data.length == 0) {
                        res.status(404).send('data not found').end();
                    } else {
                        db.query(`SELECT * FROM banner_table`, (err, banners) => {
                            if (err) {
                                res.status(500).send('database error').end();
                            } else {
                                res.render('admin/banners.ejs', { banners, mod_data: data[0] });
                            }
                        })
                    }
                })
                break;
            case 'del':
                db.query(`DELETE FROM banner_table WHERE ID='${req.query.id}'`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        res.redirect('/admin/banners')
                    }
                })
                break;
            default:
                db.query(`SELECT * FROM banner_table`, (err, banners) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        res.render('admin/banners.ejs', { banners });
                    }
                })

                break;
        }
    })
    router.post('/', (req, res) => {
        var title = req.body.title;
        var descript = req.body.descript;
        var href = req.body.href;

        if (!title || !descript || !href) {
            res.status(400).send('arg error').end();
        } else {
            if (req.body.mod_id) {
                db.query(`UPDATE banner_table SET title='${title}',smalltext='${descript}',href='${href}' WHERE ID='${req.body.mod_id}'`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        res.redirect('/admin/banners');
                    }
                })
            } else {
                db.query(`INSERT INTO banner_table (title,smalltext,href) VALUE('${title}','${descript}','${href}')`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        res.redirect('/admin/banners');
                    }
                })
            }
        }
    })
    return router;
}