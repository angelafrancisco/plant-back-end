const express = require('express');
const router = express();
const Item = require('../models/item');

// index - get
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.send({
            // if good send sucessful request with the items, react needs to know if response is good or bad
            success: true,
            data: items
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// create - post
router.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        // we want new item to get added to state - update database, update state
        const newItem = await Item.create(req.body);
        res.send({
            success: true,
            data: newItem
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// show one - get
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            throw new Error("No item by that id here!")
        }
        res.send({
            success: true,
            data: item
        });
    } catch (err) {
        console.log(err)
        res.send({
            success: false,
            data: err.message
        });
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: item
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

// update - put
router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({
            success: true,
            data: item
        });
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        });
    }
});

module.exports = router;