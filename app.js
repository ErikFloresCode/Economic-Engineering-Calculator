const express = require('express');
const path = require('path');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes'); // Importar las rutas

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/simple-interest', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formSimpleInterest.html'));
});

app.get('/compound-interest', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formCompoundInterest.html'));
});

app.use('/api/calculator', calculatorRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
