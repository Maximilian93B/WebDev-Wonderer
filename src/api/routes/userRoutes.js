const express = require('express');
const router = express.Router();
const { registerUser, listAllUsers, getUserById, getAllUserProgress, getUserProgressByUserId } = require('../controllers/userController'); // add controllers here as needed 
const  passport  = require('passport');
require('../../config/passport')(passport);
//const isAdmin =require('../../utils/isAdmin');

//GET ROUTES

// Admin Routes // Get all Users
router.get('/allusers',listAllUsers,)

// Get All UserProgress Recrods 
router.get('/progress', getAllUserProgress);

//Get User by ID 
router.get('/:id', getUserById);

// Get User Progress by User Id: 
router.get('/:userId/progress', getUserProgressByUserId)

// Register New User
router.post('/register', registerUser);

// User Login 
router.post('/login', passport.authenticate('local', {
    sucessRedirect: '/' ,
    failure: '/login',
    failureFlash: true // 
})); 

module.exports = router; 