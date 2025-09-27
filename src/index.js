require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'proofpass' });
});

// Stub endpoint for /prove-age
app.post('/prove-age', (req, res) => {
  // Dummy response for proof generation
  res.json({ proof: 'dummy-proof', age: 18, valid: true });
});

// Stub endpoint for /verify-age
app.post('/verify-age', (req, res) => {
  // Dummy response for proof verification
  res.json({ verified: true, age: 18 });
});

app.listen(PORT, () => {
  console.log(`ProofPass app listening on port ${PORT}`);
});
