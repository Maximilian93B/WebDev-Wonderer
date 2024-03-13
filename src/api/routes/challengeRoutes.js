const express = require('express');
const router = express.Router();
const { markChallengeComplete } = require('../controllers/challengeController');


// POST route - mark challenge complete 

router.post('/complete-challenge', markChallengeComplete);














module.exports = router;