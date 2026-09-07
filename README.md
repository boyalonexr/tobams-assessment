# Tobams Group Frontend Assessment

A responsive frontend implementation of the Tobams Group website, developed as part of a frontend development assessment.

The project focuses on accurately reproducing the provided design while maintaining responsive behavior across desktop, tablet, and mobile screen sizes.

## Live Demo

🔗 [View Live Website](https://tobams-assessmentvictor.netlify.app)

## Project Overview

This project is a responsive website implementation for Tobams Group, a consultancy firm focused on technology talent development, training, recruitment, and digital solutions.

The implementation includes:

- Responsive navigation
- Hero section
- Learning and Development section
- Learning Management System section
- Corporate Trainings section
- Personalised Individual Training section
- Capacity Development section
- Call-to-action sections
- Testimonials carousel/section
- Responsive footer
- Social media links
- Contact information
- Registered office information

## Tech Stack

- **Next.js** – React framework for the application
- **React** – Component-based UI development
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Responsive styling and layout
- **Lucide React** – UI icons
- **React Icons** – Social and interface icons
- **Next/Image** – Optimized image handling
- **Netlify** – Deployment and hosting

## Features

### Responsive Design

The website is optimized for:

- Mobile devices
- Tablets
- Desktop screens

The layout adapts at different breakpoints to maintain usability and visual consistency.

### Responsive Navigation

The header contains:

- Tobams Group logo
- Desktop navigation
- Account button
- Take Assessment button
- Mobile hamburger menu
- Mobile navigation drawer
- Responsive navigation actions

The mobile navigation is constrained to the viewport to prevent unwanted horizontal scrolling.

### Learning & Development

The main content presents different learning and development services, including:

- Learning Management System
- Corporate Trainings
- Personalised Individual Training
- Capacity Development

Each section contains supporting content, imagery, and responsive layouts.

### Testimonials

A testimonial section showcases client feedback with:

- Client images
- Names
- Job positions
- Testimonial content
- Responsive layout

### Call-to-Action

The website includes CTA sections encouraging visitors to:

- Book a consultation
- Get in touch
- Explore Tobams Group services

### Responsive Footer

The footer contains:

- Tobams Group information
- Social media icons
- What We Do links
- Company links
- Solution links
- Registered offices
- Contact information
- Privacy Policy
- Cookies Policy
- Terms and Conditions
- Copyright information

The footer was specifically structured to adapt across screen sizes:

**Mobile**
- Single-column layout
- Stacked content
- Stacked registered office information

**Tablet**
- Two-column navigation layout

**Desktop**
- Four-column navigation layout
- United Kingdom and Nigeria offices displayed side-by-side
- Contact Information positioned on the far right
- Vertical divider separating office and contact information

## Accessibility

Accessibility considerations were included throughout the implementation.

Examples include:

- Descriptive `alt` text for images
- `aria-label` attributes for icon buttons
- `aria-expanded` for the mobile navigation
- `aria-controls` connecting the menu button to the mobile navigation
- Keyboard focus states
- Semantic navigation elements
- Proper button elements for interactive controls

## Project Structure

The project follows a component-based structure to keep the UI modular and maintainable.

Example structure:

```text
.
├── app/
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FooterCta.tsx
│   ├── Testimonials.tsx
│   ├── ContentSection.tsx
│   ├── CtaBanner.tsx
│   └── ...
│
├── public/
│   ├── tobams-logo
│   ├── images
│   ├── instagram.png
│   ├── linkedin.png
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md