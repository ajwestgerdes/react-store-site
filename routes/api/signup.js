//This file contains all the post, get, and delete functions between the server and mongodb database using Info schema
const express = require('express');
const router = express.Router();

//Item Model
const Signup = require('../../models/Signup');

//@route GET api/items (route endpoint)
//@desc Get All Signup Info
//@access public
router.get('/', (req, res) => {
    Signup.find()
        .then(signup => res.json(signup))
})

//@route POST api/items
//@desc Create Users Singup Info
//@access public
router.post('/', (req, res) => {
    const newSignup = new Signup({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
    newSignup.save().then(signup => res.json(signup))
});

// //@route DELETE api/items
// //@desc Create A Post
// //@access public
// router.delete('/:id', (req, res) => {

// });


module.exports = router;