const express = require('express');
const router = express.Router();
const { registerUser, listAllUsers, getUserById, getAllUserProgress, getUserProgressByUserId, userLogin } = require('../controllers/userController'); // add controllers here as needed 
const  passport  = require('passport');
require('../../config/passport')(passport);
const path = require('path')
//const isAdmin =require('../../utils/isAdmin');


//GET ROUTES

// Route to serve login page
router.get('/login', (req,res) =>{
res.sendFile(path.join(__dirname, '../../../public/loginPage.html'));
});

// Admin Routes // Get all Users
router.get('/allusers',listAllUsers)

// Get All UserProgress Recrods 
router.get('/progress', getAllUserProgress);

//Get User by ID 
router.get('/:id', getUserById);

// Get User Progress by User Id: 
router.get('/:userId/progress', getUserProgressByUserId);

// Register New User
router.post('/register', registerUser);

// User Login 
router.post('/login', userLogin); 


module.exports = router; 