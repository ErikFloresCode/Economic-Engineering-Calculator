const SimpleInterest = require('../models/SimpleInterest');
const CompoundInterest = require('../models/CompoundInterest');

class CalculatorController {
    calculateSimpleInterest(req, res) {
        const { presentValue, futureValue, interest, interestRate, periods } = req.body;
        try {
            const simpleInterest = new SimpleInterest({
                presentValue: presentValue || null,
                futureValue: futureValue || null,
                interest: interest || null,
                interestRate: interestRate || null,
                periods: periods || null
            });
            const result = simpleInterest.calculate();
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    calculateCompoundInterest(req, res) {
        const { presentValue, futureValue, interest, interestRate, periods, compoundingFrequency } = req.body;
        try {
            const compoundInterest = new CompoundInterest({
                presentValue: presentValue || null,
                futureValue: futureValue || null,
                interest: interest || null,
                interestRate: interestRate || null,
                periods: periods || null,
                compoundingFrequency: compoundingFrequency || 1
            });
            const result = compoundInterest.calculateFutureValue();
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CalculatorController();
