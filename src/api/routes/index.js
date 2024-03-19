// agregate route file 
const express = require('express');
const router = express.Router();



//Import other routes here 
const userRoutes = require('./userRoutes');
const territoryRoutes = require('./territoryRoutes');
const challengeRoutes = require('./challengeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const mainRoute = require('./mainRoutes');
// Mount router here 
router.use('/', mainRoute);
router.use('/users', userRoutes);
router.use('/territories', territoryRoutes);
router.use('/challenge', challengeRoutes);
router.use('/dashboard',dashboardRoutes);


module.exports = router;