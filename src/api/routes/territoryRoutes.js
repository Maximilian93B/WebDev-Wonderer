const express = require('express');
const router = express.Router();
const {getTerritoryData, addUserTerritoryAccess} = require('../controllers/TerritoryController');



// Get Data associated with Territory ID 
router.get('/:territoryId/data', getTerritoryData);







/// POST 

router.post ('/access', addUserTerritoryAccess);


module.exports = router; 



















module.exports = router; 