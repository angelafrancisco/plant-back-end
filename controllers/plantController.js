const express = require('express');
const router = express();
const Plant = require('../models/plant');
const User = require('../models/user');

// CREATE : POST   '/plants'          1/4
// READ   : GET    '/plants'          2/4 (INDEX)
// UPDATE : PUT    '/plants/:id'      3/4
// DELETE : DELETE '/plants/:id'      4/4

// SHOW   : GET    '/plants/:id'      
// EDIT   : GET    '/plants/:id/edit' 

// CREATE : POST   '/plants'          1/4
router.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        const newPlant = await Plant.create(req.body);
        res.send({
            success: true,
            data: newPlant
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// READ  : GET    '/plants'          2/4 (INDEX)
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.send({
            success: true,
            data: plants
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// UPDATE : PUT    '/plants/:id'      3/4
router.put('/:id', async (req, res) => {
    try {
        const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({
            success: true,
            data: plant
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// DELETE : DELETE '/plants/:id'      4/4
router.delete('/:id', async (req, res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: plant
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// SHOW   : GET    '/plants/:id'
router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            throw new Error("No plant by that id here!")
        }
        res.send({
            success: true,
            data: plant
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