const express = require('express');
const router = express.Router();
const { registerUser, searchUsers, listAllUsers, getUserById } = require('../controllers/userController'); // add controllers here as needed 
const isAdmin =require('../../utils/isAdmin');
//const isAdmin = require('../../utils/isAdmin');




router.get('/:id', getUserById);

// GET routes
router.get('/users', (req, res, next) => {
    searchUsers(req, res).catch(next);
});

// Search Users for Users 
router.post('/search', searchUsers);
// POST routes 

router.post('/register', registerUser);


// Admin Routes 
router.get('/all', isAdmin, listAllUsers); 



module.exports = router; 