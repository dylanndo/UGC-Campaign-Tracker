# UGC Campaign Tracker - Product Spec (MVP)

## Problem

As a UGC creator, I run multiple campaigns at once. Each campaign may require posts on TikTok, Instagram, and Youtube, and my pay is often tied to performance (views, saves, etc)

Right now, tracking this is annoying:
- I manually check each platform's analytics
- I track performance and earnings in scattered spreadsheets, if at all
- It's hard to see trends over time or which platform / campaign makes me the most money
- I waste a lot of time context-switching between apps just to get a basic picture of how my content is performing.

## Goal

Build a web app that centralizes UGC campaign tracking:
- Multiple campaigns per user
- Multiple social accounts per campaign (TikTok, Instagram, Youtube)
- Manual entry of post performance initially (views, likes, etc)
- Automatic calculation of estimated earnings per campaign based on agreed rates
- Charts and summaries that show trends over time and across platforms

Deisgn everything so that I can later:
- Connect social accounts via OAuth (TikTok, Youtube, Instagram)
- Automatically pull performance metrics via APIs instead of manual input

## MVP Scope (V1)

### Users & Auth

- Single user (me) for now, with basic auth (login/logout).
- Later: multiuser support so other creators can sign up.

### Core Entities

- **User**
- **Campaign**
    - Name, brand, start/end date, notes
    - Earnings configuration (e.g., flat fee, CPM)
- **PlatformAccount**
    - Platform: TikTok | Instagram | YouTube
    - Handle / channel ID
- **ContentItem**
    - Belongs to a campaign and a platform account
    - Fields: title, URL, post date, views, likes, comments (and maybe watch time later)

### Features

- Create/edit/detele campaigns
- For each campaign:
    - Add one or more platform accounts (e.g. TikTok @handle, IG @handle, YT channel)
    - Add content items with performance metrics (views, likes, comments, saves, shares, etc)
- Earnings:
    - Set up campaign-level earnings configuration:
        - Flat fee – a fixed amount per campaign (optionally per milestone or per period)
        - CPM – 'cpm' field (dollars per 1000 views); earnings per content item = 'views / 1000 * cpm'
        - Custom payout – leave a 'customFormula' or 'notes' field that you don’t implement automatically yet, or treat it as “manual override” for earnings
    - App calculates earnings based on these


### Analytics & UI

- Per-campaign dashboard:
    - Total views over period (default last 30 days)
    - Top 3 performing videos over period
    - Total earnings over period
    - Breakdown by platform
    - Time-series chart of posts/views and earnings over time

## Out-of-Scope for MVP (V2+)
- Oauth login to TikTok / Youtube / Instagram
- Automatic data ingestion via social APIs
- Posting to accounts via current app
- Notifications
- Followers gained over period
- Global dashboard for all campaigns

## Tech Stack

- Frontend & API: Next.js (App Router) with TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Auth: NextAUth/Auth.js (email/password first, later Google/social)
- Charts: Recharts or Chart.js
- Hosting: Vercel + hosted Postgres