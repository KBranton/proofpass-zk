
# ProofPass-ZK: ZK Age Verification MVP

[![CI](https://github.com/KBranton/proofpass-zk/actions/workflows/ci.yml/badge.svg)](https://github.com/KBranton/proofpass-zk/actions/workflows/ci.yml)

## Quick Start

Install dependencies:
```bash
npm install
```

Run the app:
```bash
npm run dev
```

## Endpoints

### GET /health
```bash
curl http://localhost:3000/health
# Response: { "status": "ok", "app": "proofpass" }
```

### POST /prove-age
```bash
curl -X POST http://localhost:3000/prove-age -H 'Content-Type: application/json' -d '{"age":18}'
# Response: { "proof": "dummy-proof", "age": 18, "valid": true }
```

### POST /verify-age
```bash
curl -X POST http://localhost:3000/verify-age -H 'Content-Type: application/json' -d '{"proof":"dummy-proof"}'
# Response: { "verified": true, "age": 18 }
```

## Constraints
- No raw DOB logging; all errors sanitized
- Self-contained: no external repo dependencies
- Circom/SnarkJS logic is stubbed for MVP

## Run Tests
```bash
npm test
```

## Test Summary
All endpoints covered by Jest + Supertest:

```
 PASS  src/index.test.js
	GET /health
		✓ should return 200 and correct JSON
	POST /prove-age
		✓ should return dummy proof response
		✓ should return error for invalid age
	POST /verify-age
		✓ should return dummy verify response
		✓ should return error for invalid proof

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

## CI
GitHub Actions runs install, build, and test on every PR to `main`.

