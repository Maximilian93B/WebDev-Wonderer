const express = require('express');
const router = express.Router();
const {getDashboard} = require('../controllers/dashboardController');
const {ensureAuthentication} = require('../../utils/tools');

/*
// Route to serve dashboard after log in 
router.get('/', ensureAuthentication, getDashboard);
*/



module.exports = router; 