

# Daky AI Analytics — Elite Vitrine Website

## Overview
A single-page, conversion-focused landing site for an AI sports betting bot. Deep space black theme with neon emerald (#10b981) and gold accents, glassmorphism effects, and scroll animations.

## Sections (Top to Bottom)

### 1. Navigation Bar
- Sticky glassmorphism navbar with logo "Daky AI" and nav links (Features, Dashboard, Pricing)
- CTA button in nav: "Jwenn Aksè VIP"

### 2. Hero Section
- Full-viewport dark gradient background with subtle mesh/radial gradient orbs (emerald + gold)
- Large bold headline and sub-headline (Haitian Creole copy as provided)
- Pulsating glow CTA button with lightning bolt icon
- Floating particle/glow effects in background

### 3. Stats Ticker Ribbon
- Horizontally scrolling/animated ribbon showing win rate, daily profit, active members
- Emerald accent background strip

### 4. "Why Us" Feature Cards (3 cards)
- Glassmorphism cards with Lucide icons (BarChart3, Bell, Shield)
- Staggered fade-in on scroll using CSS animations
- Hover lift/glow effects

### 5. Dashboard Preview
- Floating glassmorphism card with mock "Live Betting Analytics" table
- Mini green profit chart using Recharts
- Tilted/3D perspective with shadow, animated entry on scroll

### 6. Pricing Section
- Two pricing cards: Free and Elite
- Elite card highlighted with emerald border glow
- Feature comparison lists with check/x icons

### 7. Footer
- Dark footer with "Join the 1%" tagline
- Social links and copyright

## Design System
- Background: Near-black (#030712)
- Primary accent: Emerald (#10b981)
- Secondary accent: Gold (#f59e0b)
- Glassmorphism: white/5 background + backdrop-blur
- All animations via CSS keyframes + Tailwind animate utilities (no Framer Motion needed — we'll use intersection observer + CSS for scroll reveals to avoid adding dependencies)

## Technical Approach
- Single Index page with section components
- Fully responsive mobile-first layout
- Custom CSS animations for scroll reveal, ticker, and pulsating glow
- Recharts for the mini profit chart in dashboard preview
- All Lucide icons for iconography

