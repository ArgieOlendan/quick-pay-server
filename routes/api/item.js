var express = require('express');
var router = express.Router();
var item_service = require('../../services/item_service');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', async (req, res) => {
    await item_service.get_all()
    .then(items => res.json(items))
    .catch(err => res.status(500).json({ message: err }));
});

// @route POST api/items
// @desc Create a Item
// @access Public
// router.post('/', (req, res) => {
//     var newItem = new Item({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         tax: req.body.tax,
//         company_name: req.body.company_name
//     });

//     newItem.save().then(item => res.json(item));
// });

// @route GET api/items/:id
// @desc Get a Item
// @access Public
router.get('/:id', async (req, res) => {
    await item_service.find_by_id(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ message: err }));
})

// @route DELETE api/items/:id
// @desc Delete a Item
// @access Public
router.delete('/:id', (req, res) => {
    await item_service.find_by_id(req.params.id)
    .then(item => 
        item.remove()
        .then(() => res.json({ success: true })))
    .catch(err => res.status(500).json({ success: false, message: err }));
})

module.exports = router;