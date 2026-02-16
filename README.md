# E-learning Platform - Nuxt.js

A full-stack e-learning platform built with Nuxt.js.

## Features

- Course creation and management
- Lesson organization
- Student enrollment
- Progress tracking
- Instructor dashboard

## Installation

```bash
npm install
```

## Configuration

Set up your database:

```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/elearning"
npx prisma migrate dev
```

## Running

```bash
# Development
npm run dev

# Production
npm run build
npm run preview
```

## Tech Stack

- Nuxt.js 3
- Vue 3
- Prisma
- PostgreSQL
- Tailwind CSS
