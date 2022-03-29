const express = require('express');
const router = express();
const Plant = require('../models/plant');
// ___________________
// 7 Restful Routes
// ___________________
// INDEX  : GET    '/plants'          1/7
// SHOW   : GET    '/plants/:id'      2/7
// NEW    : GET    '/plants/new'      3/7
// CREATE : POST   '/plants'          4/7
// EDIT   : GET    '/plants/:id/edit' 5/7
// UPDATE : PUT    '/plants/:id'      6/7
// DELETE : DELETE '/plants/:id'      7/7

// INDEX  : GET    '/plants'          1/7
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

// SHOW   : GET    '/plants/:id'      2/7
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

// NEW    : GET    '/plants/new'      3/7


// CREATE : POST   '/plants'          4/7
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

// EDIT   : GET    '/plants/:id/edit' 5/7


// UPDATE : PUT    '/plants/:id'      6/7
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

// DELETE : DELETE '/plants/:id'      7/7
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

module.exports = router;