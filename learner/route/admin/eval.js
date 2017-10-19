const express = require('express');
const mysql = require('mysql');
const pathLib = require('path');
const fs = require('fs');
const db = mysql.createPool({ host: 'localhost', user: 'root', password: '1234', database: 'learner', port: 3308 });
module.exports = function() {
    var router = express.Router();
    router.get('/', (req, res) => {
        switch (req.query.act) {
            case 'del':
                db.query(`SELECT * FROM eval_table WHERE ID='${req.query.id}'`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        if (data.length == 0) {
                            res.status(404).send('can not find this data').end();
                        } else {
                            fs.unlink('static/upload/' + data[0].href, (err) => {
                                if (err) {
                                    res.status(500).send('file opration error').end();
                                } else {
                                    db.query(`DELETE FROM eval_table WHERE ID='${req.query.id}'`, (err, data) => {
                                        if (err) {
                                            res.status(500).send('database error').end();
                                        } else {
                                            res.redirect('/admin/eval');
                                        }
                                    })
                                }
                            })

                        }
                    }
                })
                break;
            case 'mod':
                db.query(`SELECT * FROM eval_table WHERE ID='${req.query.id}'`, (err, data) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else if (data.length == 0) {
                        res.status(404).send('data not found').end();
                    } else {
                        db.query(`SELECT * FROM eval_table`, (err, evals) => {
                            if (err) {
                                res.status(500).send('database error').end();
                            } else {
                                res.render('admin/eval.ejs', { evals, mod_data: data[0] });
                            }
                        })
                    }
                })
                break;
            default:
                db.query(`SELECT * FROM eval_table`, (err, evals) => {
                    if (err) {
                        res.status(500).send('database error').end();
                    } else {
                        res.render('admin/eval.ejs', { evals });
                    }
                })
                break;
        }

    })
    router.post('/', (req, res) => {
        var title = req.body.title;
        var eval = req.body.eval;
        var ext = pathLib.parse(req.files[0].originalname).ext;
        var oldPath = req.files[0].path;
        var newPath = oldPath + ext;
        var newFileName = req.files[0].filename + ext;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.status(500).send('server error').end();
            } else {
                if (!title || !eval) {
                    res.status(400).send('arg error').end();
                } else {
                    if (req.body.mod_id) {
                        db.query(`UPDATE eval_table SET title='${title}',eval='${eval}' WHERE ID='${req.body.mod_id}'`, (err, data) => {
                            if (err) {
                                res.send(500).send('database error').end();
                            } else {
                                res.redirect('/admin/eval');
                            }
                        })
                    } else {
                        db.query(`INSERT INTO eval_table (title,eval,href) VALUE ('${title}','${eval}','${newFileName}')`, (err) => {
                            if (err) {
                                res.send(500).send('database error').end();
                            } else {
                                res.redirect('/admin/eval');
                            }
                        });
                    }
                }
            }
        })

    })
    return router;
}