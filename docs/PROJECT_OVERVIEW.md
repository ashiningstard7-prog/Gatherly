# Project Overview — Gatherly

## Vision

Gatherly is a marketplace where people book **real-life experiences** with creators, professionals, experts, communities, athletes, artists, and local hosts — including farmers offering **Farm Weekends**.

## Problem

People want authentic, in-person experiences beyond generic event listings. Creators, trainers, farmers, and experts lack a unified platform to monetize their time, skills, and local knowledge.

## Solution

A premium two-sided marketplace with:

1. **Discovery** — AI recommendations, maps, categories, filters
2. **Booking** — Secure payments, QR tickets, calendar sync
3. **Hosting** — Dashboards for hosts, farmers, and businesses
4. **Trust** — KYC verification, reviews, GPS/QR check-in, SOS

## Target Users

| Role | Description |
|------|-------------|
| Guest | Browse without account |
| User | Book experiences, reviews, wallet |
| Creator/Host | List and manage experiences |
| Farmer | Farm-specific dashboard & activities |
| Admin | Platform management & approvals |

## Unique Differentiator: Farm Weekends

Farmers host experiences like weekend farming, fruit picking, cow feeding, village walks, farm camping, and harvest festivals. Visitors take home crops they harvest — creating win-win rural tourism.

## Business Model

- Platform fee (3–5% based on subscription tier)
- Host subscription plans (Free, Pro, Enterprise)
- Featured listing promotions
- Payment processing margin

## MVP Scope (Current)

- [x] Premium landing page (all sections)
- [x] PostgreSQL schema with 40+ models
- [x] REST API foundation
- [x] Host / Farmer / Admin dashboards
- [x] Experience detail pages
- [x] Become a Host flow
- [x] Seed data with demo content
- [ ] Clerk authentication integration
- [ ] Stripe/Razorpay payment flows
- [ ] Real-time chat
- [ ] AI recommendation engine

## Branding

The name "Gatherly" is modular — update `frontend/src/config/brand.ts` and `backend/src/config/env.ts` to rebrand without code changes elsewhere.
