# 📄 Sparsh Singh &mdash; Resume & CI/CD PDF Pipeline

> **Automated ATS-Optimized Markdown & Printable HTML Resume with GitHub Actions Headless PDF Compilation.**

[![Build & Release Resume PDF](https://github.com/sparsh101sparsh/resume/actions/workflows/build-pdf.yml/badge.svg)](https://github.com/sparsh101sparsh/resume/actions/workflows/build-pdf.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-sparsh101sparsh-181717?style=flat&logo=github)](https://github.com/sparsh101sparsh)

---

## 📑 Artifacts

- **[RESUME.md](./RESUME.md)**: Clean, plain-text Markdown formatted strictly for ATS (Applicant Tracking Systems) parsers.
- **[resume.html](./resume.html)**: Clean, single-page responsive layout styled with typography (Inter & JetBrains Mono) and dedicated `@media print` rules.
- **`sparsh_singh_resume.pdf`**: Headless Chrome-compiled PDF artifact generated automatically on every push by GitHub Actions.

---

## 🚀 Local Usage

### 1. View in Browser
You can open `resume.html` directly in any web browser:
```bash
open resume.html
```

### 2. Compile PDF Locally
Requires Node.js 18+:
```bash
npm install
npm run build:pdf
```
This launches a headless Chromium instance via Puppeteer to compile pixel-perfect A4 PDF pages with background graphics and print styling enabled.

---

## 🤖 Continuous Integration

Every push to `main` triggering modifications to `resume.html` or `RESUME.md`:
1. Launches an Ubuntu runner in GitHub Actions.
2. Compiles `sparsh_singh_resume.pdf` using Puppeteer.
3. Uploads the generated PDF as an artifact.
4. Automatically commits the fresh PDF back to the repository.

---

## 👤 Author

**Sparsh Singh**  
- Email: [0workwithsparsh@gmail.com](mailto:0workwithsparsh@gmail.com)
- GitHub: [@sparsh101sparsh](https://github.com/sparsh101sparsh)
- LinkedIn: [sparsh-singh](https://www.linkedin.com/in/sparsh-singh-00a339271/)
- Portfolio: [sparsh](https://github.com/sparsh101sparsh/sparsh)
