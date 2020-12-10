var express = require('express');
var router = express.Router();

//@route POST api/order
// @desc Create a order
// @access Public
router.post('/', token({ required: true }), (req, res, next) => {
    
})

module.exports = router;