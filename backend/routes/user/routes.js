const express = require('express');
const router = express.Router();
const _ = require('lodash');
const userHelper = require('../../middleware/user-helper');

const signup = require('./signup');
const signin = require('./signin');
const myProfile = require('./myProfile');

router.post('/signup', [], (req, res) => {
    signup(req.body.email, req.body.password, req.body.confirmPassword)
        .then(() => {
            res.status(201).json({});
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

router.post('/signin', [], (req, res) => {
    signin(_.get(req, 'body.email'), _.get(req, 'body.password'))
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            return res.status(_.get(err, 'httpCode', 500)).json(err);
        });
});

router.get('/my-profile', [userHelper.checkAuthentication], (req, res) => {
    myProfile(req.authenticatedUser._id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(_.get(err, 'httpCode', 500)).json(err);
        })
});

module.exports = router;
