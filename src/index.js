require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'proofpass' });
});

app.post('/prove-age', (req, res) => {
  // Circom/SnarkJS stub: do not log raw DOB
  try {
    const { age } = req.body;
    if (typeof age !== 'number' || age < 0) {
      return res.status(400).json({ error: 'Invalid age' });
    }
    // Stub: always return dummy proof
    res.json({ proof: 'dummy-proof', age, valid: age >= 18 });
  } catch (err) {
    res.status(500).json({ error: 'Sanitized error' });
  }
});

app.post('/verify-age', (req, res) => {
  // Circom/SnarkJS stub: do not log raw proof
  try {
    const { proof } = req.body;
    if (typeof proof !== 'string') {
      return res.status(400).json({ error: 'Invalid proof' });
    }
    // Stub: always return verified true
    res.json({ verified: true, age: 18 });
  } catch (err) {
    res.status(500).json({ error: 'Sanitized error' });
  }
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`ProofPass app listening on port ${PORT}`);
  });
}
module.exports = app;