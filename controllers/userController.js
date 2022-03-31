const express = require('express');
require("dotenv").config();
const router = express();
const User = require('../models/user');
const Plant = require('../models/plant');
// const bcrypt = require("bcryptjs");

// CREATE : POST   '/user'          1/4
// READ   : GET    '/user'          2/4 (INDEX)
// UPDATE : PUT    '/user/:id'      3/4
// DELETE : DELETE '/user/:id'      4/4

// SHOW   : GET    '/user/:id'      
// EDIT   : GET    '/user/:id/edit' 

// CREATE : POST   '/user'          1/4
router.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        const newUser = await User.create(req.body);
        res.send({
            success: true,
            data: newUser
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// READ  : GET    '/user'          2/4 (INDEX)
router.get('/', async (req, res) => {
    try {
        // const currentUser = req.session.isLoggedIn
        const user = await User.find();
        res.send({
            success: true,
            data: user
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// UPDATE : PUT    '/user/:id'      3/4
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({
            success: true,
            data: user
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// DELETE : DELETE '/user/:id'      4/4
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: user
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// SHOW   : GET    '/user/:id'
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new Error("No user by that id here!")
        }
        res.send({
            success: true,
            data: user
        });
    } catch (err) {
        console.log(err)
        res.send({
            success: false,
            data: err.message
        });
    }
});

module.exports = router;