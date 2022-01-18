const express = require('express');
const router = express.Router();
const _ = require('lodash');
const userHelper = require('../../middleware/user-helper');

const create = require('./create');
const getByOwner = require('./getByOwner');
const list = require('./list');


router.post('/create', [userHelper.checkAuthentication], (req, res) => {
    create(req.body.name, req.authenticatedUser.wallet.privateKey)
        .then(() => {
            res.status(201).json({});
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

router.get('/getByOwner', [userHelper.checkAuthentication], (req, res) => {
    getByOwner(req.query.owner)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

router.get('/list', [userHelper.checkAuthentication], (req, res) => {
    list(req.authenticatedUser.wallet.privateKey)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

module.exports = router;
