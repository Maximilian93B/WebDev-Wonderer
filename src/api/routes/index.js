// agregate route file 
const express = require('express');
const router = express.Router();



//Import other routes here 
const userRoutes = require('./userRoutes');
const territoryRoutes = require('./territoryRoutes');
const challengeRoutes = require('./challengeRoutes');

// Mount router here 
router.use('/users', userRoutes);
router.use('/territories', territoryRoutes);
router.use('/challenge', challengeRoutes);


module.exports = router;