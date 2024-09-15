const SimpleInterest = require('./SimpleInterest');

class CompoundInterest extends SimpleInterest {
    constructor({ presentValue = null, futureValue = null, interest = null, interestRate = null, periods = null, compoundingFrequency = 1 }) {
        super({ presentValue, futureValue, interest, interestRate, periods });
        this.compoundingFrequency = compoundingFrequency;
    }

    calculateFutureValue() {
        if (this.presentValue && this.interestRate && this.periods && this.compoundingFrequency) {
            return this.presentValue * Math.pow(1 + this.interestRate / this.compoundingFrequency, this.compoundingFrequency * this.periods);
        } else {
            throw new Error('Insufficient data to calculate future value with compound interest.');
        }
    }

    calculatePresentValue() {
        if (this.futureValue && this.interestRate && this.periods && this.compoundingFrequency) {
            return this.futureValue / Math.pow(1 + this.interestRate / this.compoundingFrequency, this.compoundingFrequency * this.periods);
        } else {
            throw new Error('Insufficient data to calculate present value with compound interest.');
        }
    }
}

module.exports = CompoundInterest;
