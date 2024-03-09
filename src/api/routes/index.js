// agregate route file 
const express = require('express');
const router = express.Router();



//Import other routes here 
const userRoutes = require('./userRoutes');



// Mount router here 
router.use('/users', userRoutes);




module.exports = router;