<p align="center">
  <img src="https://placehold.co/120x120?text=Logo" alt="DeepRecruit Logo" width="120"/>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
  <a href="#"><img src="https://img.shields.io/badge/coverage-100%25-success" alt="Coverage"></a>
  <a href="#"><img src="https://img.shields.io/badge/api-mock-lightgrey" alt="Mock API"></a>
</p>

# DeepRecruit Backend Showcase

DeepRecruit is a demonstration backend for an AI-powered recruitment platform. This repository is designed to showcase advanced backend engineering, AI algorithm design, API architecture, automation, and code quality. All logic, data, and endpoints are mock implementations for demonstration purposes.

---

## 🚀 Key Features
- **AI Resume Analysis**: Automated scoring, parsing, and skill extraction from resumes.
- **Interview Simulation**: AI-powered Q&A and feedback analysis.
- **Smart Matching**: Candidate-job matching and ranking algorithms.
- **Analytics Engine**: Real-time recruitment analytics.
- **Automation**: Batch scoring, scheduled analytics, and candidate notification scripts.
- **API-First Design**: All endpoints documented in OpenAPI 3.0 (see [`api/openapi.yaml`](./api/openapi.yaml)).
- **Comprehensive Testing**: Unit tests for all core logic and API handlers.
- **CI/CD**: GitHub Actions workflow for lint, build, test, and deploy (mocked).

---

## 📁 Directory Structure
```
lib/         # Core AI logic, data, and utilities
api/         # API endpoint handlers and OpenAPI spec
tests/       # Unit tests for AI and API
scripts/     # Automation scripts (batch, scheduled, notification)
workflows/   # CI/CD workflow (GitHub Actions)
package.json # Backend dependencies and scripts
tsconfig.json# TypeScript config
README.md    # Project documentation
```

---

## 🛠️ API Endpoints
All endpoints are mock handlers. See full schema and examples in [`api/openapi.yaml`](./api/openapi.yaml).

| Endpoint                       | Description                                 |
|--------------------------------|---------------------------------------------|
| `/ai-resume-score`             | AI-generated resume score and analysis       |
| `/interview-qa`                | AI-powered interview Q&A                    |
| `/job-matching`                | AI job matching results                     |
| `/analytics`                   | Recruitment analytics data                  |
| `/automation`                  | Automation workflow status                  |
| `/parse-resume`                | Parse raw resume text                       |
| `/extract-skills`              | Extract skills from a resume                |
| `/predict-salary`              | Predict expected salary for a candidate     |
| `/rank-candidates`             | Rank candidates for a job                   |
| `/analyze-interview-feedback`   | Analyze interview feedback text             |

---

## 📦 Usage Examples

### Run an Automation Script
```bash
pnpm install
npx ts-node scripts/batchScoreResumes.ts
```

### Run Unit Tests
```bash
npx jest
```

### Example: Use an API Handler in Node.js
```ts
import { handler as scoreHandler } from './api/ai-resume-score';
const result = scoreHandler();
console.log(result);
```

---

## 📖 API Documentation
- Full OpenAPI 3.0 spec: [`api/openapi.yaml`](./api/openapi.yaml)
- Example schema:
```yaml
/ai-resume-score:
  get:
    summary: Get AI-generated resume score and analysis
    responses:
      '200':
        description: Resume score result
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ResumeScoreResult'
```

---

## 🧪 Testing
- All core AI logic and API handlers are covered by Jest-style unit tests in `tests/`.
- To run tests:
  ```bash
  npx jest
  ```

---

## ⚙️ CI/CD
- Automated workflow with GitHub Actions: install, lint, build, test, deploy (mocked).

---

## 📄 License
MIT