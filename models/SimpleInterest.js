class SimpleInterest {
    constructor({ presentValue = null, futureValue = null, interest = null, interestRate = null, periods = null }) {
        this.presentValue = presentValue;   // Valor presente (PV)
        this.futureValue = futureValue;     // Valor futuro (FV)
        this.interest = interest;           // Interés (I)
        this.interestRate = interestRate;   // Tasa de interés (R)
        this.periods = periods;             // Número de periodos (N)
    }

    calculatePresentValue() {
        if (this.futureValue !== null && this.interestRate !== null && this.periods !== null) {
            return this.futureValue / (1 + this.interestRate * this.periods);
        } else if (this.futureValue !== null && this.interest !== null) {
            return this.futureValue - this.interest;
        } else {
            throw new Error('Datos insuficientes para calcular el valor presente.');
        }
    }

    calculateFutureValue() {
        if (this.presentValue !== null && this.interestRate !== null && this.periods !== null) {
            return this.presentValue * (1 + this.interestRate * this.periods);
        } else if (this.presentValue !== null && this.interest !== null) {
            return this.presentValue + this.interest;
        } else {
            throw new Error('Datos insuficientes para calcular el valor futuro.');
        }
    }

    calculateInterest() {
        if (this.presentValue !== null && this.interestRate !== null && this.periods !== null) {
            return this.presentValue * this.interestRate * this.periods;
        } else if (this.futureValue !== null && this.presentValue !== null) {
            return this.futureValue - this.presentValue;
        } else {
            throw new Error('Datos insuficientes para calcular el interés.');
        }
    }

    calculateInterestRate() {
        if (this.presentValue !== null && this.interest !== null && this.periods !== null) {
            return this.interest / (this.presentValue * this.periods);
        } else if (this.futureValue !== null && this.presentValue !== null && this.periods !== null) {
            return (this.futureValue - this.presentValue) / (this.presentValue * this.periods);
        } else {
            throw new Error('Datos insuficientes para calcular la tasa de interés.');
        }
    }

    calculatePeriods() {
        if (this.presentValue !== null && this.interestRate !== null && this.interest !== null) {
            return this.interest / (this.presentValue * this.interestRate);
        } else if (this.futureValue !== null && this.presentValue !== null && this.interestRate !== null) {
            return (this.futureValue - this.presentValue) / (this.presentValue * this.interestRate);
        } else {
            throw new Error('Datos insuficientes para calcular los periodos.');
        }
    }

    calculate() {
        if (this.presentValue === null) {
            return this.calculatePresentValue();
        } else if (this.futureValue === null) {
            return this.calculateFutureValue();
        } else if (this.interest === null) {
            return this.calculateInterest();
        } else if (this.interestRate === null) {
            return this.calculateInterestRate();
        } else if (this.periods === null) {
            return this.calculatePeriods();
        } else {
            throw new Error('No hay suficiente información para realizar el cálculo.');
        }
    }
}

module.exports = SimpleInterest;
