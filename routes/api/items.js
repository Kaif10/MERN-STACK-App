const express = require('express');
const router= express.Router();

// Item Model

const Item = require('../../models/Item');


// @route GET api/items
// @desc GET All items
// Access
router.get('/', (req, res) => {

	Item.find()
	.sort({date: -1})
	.then(items => res.json(items));
});

// @route POST api/items
// @desc Create A POST
// Access
router.delete('/', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.json({success: true})))

  .catch(err => res.status(404).json({success: false }));

  })





module.exports = router;
