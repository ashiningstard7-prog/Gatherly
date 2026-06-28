# Gatherly

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Express](https://img.shields.io/badge/Express-5-green?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=flat-square&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)

**Discover and book real-life experiences with creators, professionals, experts, and local hosts.**

Gatherly is a marketplace MVP combining Airbnb Experiences, ClassPass, Meetup, and the Creator Economy — with a unique **Farm Weekends** category for authentic rural experiences.

> **Author:** [ashiningstard7-prog](https://github.com/ashiningstard7-prog) · Full-stack startup MVP · Built for portfolio & investor demos

## Live Demo (Local)

| Page | URL |
|------|-----|
| Landing Page | http://localhost:3000 |
| Host Dashboard | http://localhost:3000/host/dashboard |
| Farmer Dashboard | http://localhost:3000/farmer/dashboard |
| Admin Panel | http://localhost:3000/admin/dashboard |
| API Health | http://localhost:4000/health |

## Screenshots

_Add screenshots after running locally — landing page, dashboards, experience detail._

## Quick Start

### Prerequisites

- Node.js 20+
- Docker Desktop (for PostgreSQL & Redis)
- npm 10+

### Setup

```bash
# Clone and install
cd Desktop/Gatherly
npm install

# Start database services
npm run docker:up

# Configure environment
cp .env.example .env

# Setup database
npm run db:generate
npm run db:migrate
npm run db:seed

# Start development servers
npm run dev
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Health check:** http://localhost:4000/health

## Project Structure

```
Gatherly/
├── frontend/          # Next.js 16 + React 19 + Tailwind CSS 4
├── backend/           # Express 5 + Prisma + PostgreSQL
├── database/          # SQL schemas & ER diagrams
├── docs/              # Documentation
├── docker/            # Docker configurations
└── .github/           # CI/CD workflows
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js, React, TypeScript, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express, Prisma ORM |
| Database | PostgreSQL, Redis |
| Auth | Clerk (JWT/OAuth ready) |
| Payments | Stripe, Razorpay |
| Storage | Cloudinary |
| Maps | Google Maps API |
| Deploy | Vercel, Docker, Railway |

## Key Features

- Premium landing page with all investor-ready sections
- Experience marketplace with search, filters, and categories
- **Farm Weekends** — unique rural experience category
- Host, Farmer, and Admin dashboards
- REST API with role-based access control
- Scalable PostgreSQL schema (40+ models)
- Dark/Light mode, responsive design
- Security: Helmet, rate limiting, input validation

## Documentation

- [Project Overview](docs/PROJECT_OVERVIEW.md)
- [System Architecture](docs/SYSTEM_ARCHITECTURE.md)
- [Database](docs/DATABASE.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Security](docs/SECURITY.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Roadmap](docs/ROADMAP.md)

## License

MIT — see [LICENSE](LICENSE)
