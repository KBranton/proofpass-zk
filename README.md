# ProofPass-ZK

## Development Setup

### Install dependencies
```bash
npm install
```

### Run the app (dev)
```bash
npm run dev
```

### Healthcheck
Visit [http://localhost:3000/health](http://localhost:3000/health) or run:
```bash
curl http://localhost:3000/health
```
Expected response:
```json
{ "status": "ok", "app": "proofpass" }
```

### Environment Variables
See `.env.sample` for required variables. The app will use safe defaults if `.env` is missing.

### Run tests
```bash
npm test
```

### CI
GitHub Actions will run install, build, and test on every PR to `main`.

---

## Follow-ups
- Integrate real prover/verifier logic
- Add more endpoints and tests
- Document circuit usage

