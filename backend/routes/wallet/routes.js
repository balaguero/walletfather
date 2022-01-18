const express = require('express');
const router = express.Router();
const _ = require('lodash');
const userHelper = require('../../middleware/user-helper');

const create = require('./create');
const list = require('./list');
const getBalance = require('./getBalance');

router.post('/create', [userHelper.checkAuthentication], (req, res) => {
    create(req.authenticatedUser.wallet.privateKey)
        .then(() => {
            res.status(201).json({});
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

router.get('/balance', [userHelper.checkAuthentication], (req, res) => {
    getBalance(req.query.address)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

module.exports = router;
