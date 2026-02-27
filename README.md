# Real Estate Tracker

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Not%20specified-lightgrey)](#license)

A modern real-estate portfolio dashboard for landlords and property owners.
Track properties, tenants, and managers in one place, with document upload and secure document viewing powered by Supabase.

## Why this project

Real Estate Tracker helps you centralize day-to-day portfolio operations:

- Property records (name, address, rent, mortgage)
- Tenant records and contract end dates
- Manager contact/company information
- Insurance and contract document links
- Financial overview with totals and net income

## Features

- Authentication (signup, login, logout) via Supabase Auth
- Auth-aware UI (Hero page for guests, dashboard for authenticated users)
- Property CRUD flow (add/edit core property fields)
- Tenant and manager creation + listing
- File upload support for property documents
- Signed URLs for time-limited document access
- Responsive UI built with Tailwind CSS 4

## Safety & Security Features

This app already includes several practical safety controls:

- **Session-based auth state** using a centralized `nanostores` auth store
- **Write guards** in services that block data changes when no user is authenticated
- **Per-user data filtering** in fetch hooks (e.g. by `user_id` / `owner_id`)
- **Scoped storage paths** generated with `user.id` in file paths
- **Signed URLs** (`createSignedUrl`) to avoid exposing public file links
- **Secrets in env vars** via Vite env (`VITE_...`) instead of hardcoding

### Recommended production hardening

- Enable/verify Supabase **RLS policies** on all tables and storage buckets
- Add stricter **input validation** schemas for all form submissions
- Replace `alert(...)`-based error surfaces with structured UI notifications/logging
- Add audit-ready error handling around file upload + update transactions

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Supabase (Auth, Postgres, Storage)
- TanStack Router
- TanStack Form + React Hook Form (currently both present)
- Nanostores

## Project Structure

```text
src/
  app/
    routes/                 # TanStack Router setup
  common/
    components/             # Shared UI (Header, Sidebar, Layout)
    hooks/                  # Reusable hooks (fetching, signed URL, slugify)
    utils/                  # Utilities (e.g. generate file paths)
  pages/
    Dashboard/              # Main authenticated dashboard
    HeroPage/               # Marketing/landing page for guests
  services/
    SupabaseServices/       # Data access, auth, upload, signed links
  stores/
    AuthStore.ts            # Global auth session state
  types/                    # Centralized TS types
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_or_publishable_key
```

### 3) Run locally

```bash
npm run dev
```

Open `http://127.0.0.1:5173`.

## Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — TypeScript build + Vite production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Data Model Notes

Current code references these Supabase resources:

- Tables: `Property`, `tenants`, `property_managers`
- RPC: `get_user_financials(search_user_id)`
- Storage bucket: `PropertyContracts`

If you are onboarding this project to a new Supabase instance, ensure these resources and policies exist.

## UX Overview

- Unauthenticated users see a full Hero/Landing page
- Authenticated users see the dashboard with cards for:
  - Properties
  - Financial overview
  - Managers
  - Tenants
- Document links open via short-lived signed URLs

## Known Notes

- `react-hook-form` and `@tanstack/react-form` are both installed/used in different places
- `@tanstack/react-query` is installed but currently not wired in app root

## Contributing

1. Create a feature branch
2. Keep changes scoped and typed
3. Run `npm run lint` and `npm run build` before opening PR
4. Include screenshots/GIFs for UI changes when possible

## License

No license file is currently included in this repository.
