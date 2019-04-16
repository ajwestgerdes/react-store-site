//This file contains all the post, get, and delete functions between the server and mongodb database

const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get All Items
//@access public
router.get('/', (req, res) => {

})

//@route POST api/items
//@desc Create A Item
//@access public
router.post('/', (req, res) => {

});

//@route DELETE api/items
//@desc Create A Post
//@access public
router.delete('/:id', (req, res) => {

});


module.exports = router;