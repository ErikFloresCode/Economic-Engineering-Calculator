const express = require('express');
const router = express.Router();
const CalculatorController = require('../controllers/CalculatorController');

router.post('/calculate-simple-interest', CalculatorController.calculateSimpleInterest);
router.post('/calculate-compound-interest', CalculatorController.calculateCompoundInterest);

module.exports = router;
