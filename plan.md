# Implementation Plan: MBINGI AGENCIES Corporate Website

Building a modern, premium, mobile-first corporate website for MBINGI AGENCIES with a focus on glassmorphism, smooth animations, and comprehensive service listings.

## Scope & Non-Goals
- **Scope**: Single-page React application (with smooth scrolling) or a small multi-page setup if required, featuring sections for Hero, About, Services, Why Choose Us, Portfolio, Stats, Testimonials, and Contact.
- **Data Persistence**: Client-side only. Contact form will simulate submission or use `mailto`/WhatsApp links.
- **Non-Goals**: No backend database, no real user authentication, no actual file storage for portfolio (use placeholder/representative images).

## Assumptions & Open Questions
- **Animations**: Using `framer-motion` for smooth entry animations and hover effects.
- **Icons**: Using `lucide-react`.
- **Styling**: Tailwind CSS with custom theme colors for Teal Green (#00A99D) and Secondary Orange (#F58220).

## Affected Areas
- **Frontend**: All UI components, landing page layout, responsive design, animations.
- **Assets**: Favicon, Logo (CSS-based or SVG), Placeholder images for portfolio.

## Phase 1: Foundation & Theme (quick_fix_engineer)
- Update `tailwind.config.ts` or `index.css` with the brand colors:
  - Primary: `#00A99D`
  - Secondary: `#F58220`
- Configure typography (Sans-serif, premium look).
- Set up the main layout structure in `App.tsx`.

## Phase 2: Core Components & Hero (frontend_engineer)
- Create a Navigation component with Glassmorphism effect.
- Build the **Hero Section**:
  - Animated Logo placeholder.
  - Headlines and subheadlines in Swahili as requested.
  - "WhatsApp Now", "Call Now", "View Services" buttons.
  - Background with digital/tech graphics (CSS/SVG).

## Phase 3: Content Sections (frontend_engineer)
- **About Us**: Mission and Vision cards.
- **Services**: Implement a categorised grid for the 7 categories:
  - IT & Graphics
  - Stickers & Branding
  - T-Shirt Printing
  - Business Registration
  - NIDA & Documentation
  - Mobile Money
  - Social Media Growth
- **Why Choose Us**: Feature cards with icons.
- **Statistics**: Animated counters using `framer-motion`.

## Phase 4: Visuals & Interactive (frontend_engineer)
- **Portfolio**: Modern image gallery with hover animations.
- **Testimonials**: Review slider or grid.
- **WhatsApp Channel**: QR code section and "Join Channel" button.
- **Floating Action Button**: Persistent WhatsApp button.

## Phase 5: Contact & Footer (quick_fix_engineer)
- **Contact Section**: Form layout (Frontend only), Google Maps placeholder, contact details.
- **Footer**: Quick links, Social media icons, and copyright.
- Final polish: SEO meta tags in `index.html`, responsive check on all screen sizes.

## Downstream Owner Assignments
1. **quick_fix_engineer**: Initial theme setup (Phase 1) and Final Polish (Phase 5).
2. **frontend_engineer**: Major UI development (Phases 2, 3, 4).
