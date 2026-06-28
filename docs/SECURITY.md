# Security — Gatherly

## Authentication
- Clerk for production OAuth (Google, GitHub, Apple)
- JWT fallback with secure secret rotation
- Role-based access control (9 roles)

## API Security
- **Helmet** — Security headers (CSP, HSTS, X-Frame-Options)
- **Rate Limiting** — 100 req/15min per IP
- **CORS** — Restricted to APP_URL origin
- **Input Validation** — Zod schemas on all endpoints
- **SQL Injection** — Prisma parameterized queries

## Data Protection
- Password hashing via bcryptjs
- Environment variables for all secrets
- HTTPS enforced in production
- Secure cookie settings (HttpOnly, SameSite)

## User Safety
- Identity verification (KYC) for hosts/farmers
- GPS check-in and QR ticket validation
- Incident reporting system
- Emergency contact storage
- Audit logging for admin actions

## OWASP Top 10 Coverage
- [x] Broken Access Control → RBAC middleware
- [x] Cryptographic Failures → bcrypt, HTTPS
- [x] Injection → Prisma ORM + Zod validation
- [x] Insecure Design → Escrow payments architecture
- [x] Security Misconfiguration → Helmet defaults
- [x] Vulnerable Components → npm audit in CI
- [x] Authentication Failures → Clerk + JWT
- [x] Software Integrity → GitHub Actions CI
- [x] Logging Failures → Morgan + AuditLog model
- [x] SSRF → No user-controlled URL fetching

## Reporting

Report security issues to: security@gatherly.app
