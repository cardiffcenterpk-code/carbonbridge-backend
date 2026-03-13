// carbonbridge-backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MOCK DATABASE: In a real app, this would be a real database or blockchain
let transactions = [
  { id: 101, user: "GreenFund", type: "BUY", amount: 30, project: "Amazon Reforestation", date: "2026-01-05" },
  { id: 102, user: "EcoCorp", type: "RETIRE", amount: 20, project: "Mangrove Restoration", date: "2026-01-12" },
  { id: 103, user: "User_Alpha", type: "BUY", amount: 15, project: "Amazon Reforestation", date: "2026-01-18" },
  
  // February (Total: 59)
  { id: 104, user: "ClimateDAO", type: "BUY", amount: 25, project: "Wind Farm Project", date: "2026-02-03" },
  { id: 105, user: "User_Beta", type: "RETIRE", amount: 20, project: "Solar Initiative", date: "2026-02-10" },
  { id: 106, user: "CarbonOffsetLtd", type: "BUY", amount: 14, project: "Forest Conservation", date: "2026-02-22" },
  
  // March (Total: 80)
  { id: 107, user: "NetZeroInc", type: "RETIRE", amount: 35, project: "Clean Water Project", date: "2026-03-02" },
  { id: 108, user: "GreenFund", type: "BUY", amount: 25, project: "Amazon Reforestation", date: "2026-03-11" },
  { id: 109, user: "EcoCorp", type: "BUY", amount: 20, project: "Mangrove Restoration", date: "2026-03-19" },
  
  // April (Total: 81)
  { id: 110, user: "User_Alpha", type: "BUY", amount: 30, project: "Amazon Reforestation", date: "2026-04-04" },
  { id: 111, user: "ClimateDAO", type: "RETIRE", amount: 26, project: "Wind Farm Project", date: "2026-04-13" },
  { id: 112, user: "CarbonOffsetLtd", type: "BUY", amount: 25, project: "Forest Conservation", date: "2026-04-21" },
  
  // May (Total: 56)
  { id: 113, user: "User_Beta", type: "RETIRE", amount: 22, project: "Solar Initiative", date: "2026-05-07" },
  { id: 114, user: "NetZeroInc", type: "BUY", amount: 18, project: "Clean Water Project", date: "2026-05-15" },
  { id: 115, user: "GreenFund", type: "BUY", amount: 16, project: "Amazon Reforestation", date: "2026-05-24" },
  
  // June (Total: 55)
  { id: 116, user: "EcoCorp", type: "RETIRE", amount: 25, project: "Mangrove Restoration", date: "2026-06-06" },
  { id: 117, user: "ClimateDAO", type: "BUY", amount: 18, project: "Wind Farm Project", date: "2026-06-14" },
  { id: 118, user: "User_Alpha", type: "BUY", amount: 12, project: "Amazon Reforestation", date: "2026-06-23" },
  
  // July (Total: 40)
  { id: 119, user: "CarbonOffsetLtd", type: "RETIRE", amount: 15, project: "Forest Conservation", date: "2026-07-02" },
  { id: 120, user: "User_Beta", type: "BUY", amount: 13, project: "Solar Initiative", date: "2026-07-11" },
  { id: 121, user: "NetZeroInc", type: "BUY", amount: 12, project: "Clean Water Project", date: "2026-07-20" }
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