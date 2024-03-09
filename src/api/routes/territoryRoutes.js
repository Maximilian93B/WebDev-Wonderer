const express = require('express');
const router = express.Router();
const {getTerritoryData} = require('../controllers/TerritoryController');



// Get Data associated with Territory ID 
router.get('/:territoryId/data', getTerritoryData);



















module.exports = router; 