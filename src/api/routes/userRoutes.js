const express = require('express');
const router = express.Router();
const { registerUser, listAllUsers, getUserById, getAllUserProgress, getUserProgressByUserId } = require('../controllers/userController'); // add controllers here as needed 
//const isAdmin =require('../../utils/isAdmin');

//GET ROUTES

// Admin Routes // Get all Users
router.get('/allusers',listAllUsers,)

//Get User by ID 
router.get('/:id', getUserById);

// Get All UserProgress Recrods 
router.get('/progress', getAllUserProgress);

// Get User Progress by User Id: 
router.get('/:userId/progress', getUserProgressByUserId)

// Register New User
router.post('/register', registerUser);








module.exports = router; 