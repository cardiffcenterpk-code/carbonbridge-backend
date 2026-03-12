// carbonbridge-backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MOCK DATABASE: In a real app, this would be a real database or blockchain
let transactions = [
  { id: 101, user: "User_Alpha", type: "BUY", amount: 10, project: "Amazon Reforestation", date: "2026-03-12" },
  { id: 102, user: "User_Beta", type: "RETIRE", amount: 5, project: "Solar Initiative", date: "2026-03-11" }
];

// 1. Endpoint to see all transactions (The "On-Chain" Ledger Simulation)
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

// 2. Endpoint to "Buy" or "Retire" (The Admin Logic)
app.post('/api/transactions', (req, res) => {
  const newTx = {
    id: transactions.length + 101,
    ...req.body,
    date: new Date().toISOString().split('T')
  };
  transactions.push(newTx);
  res.status(201).json(newTx);
});

app.listen(PORT, () => {
  console.log(`CarbonBRIDGE Brain running at http://localhost:${PORT}`);
});