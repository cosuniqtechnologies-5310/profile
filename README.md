# Gowtham Selvaraj - Senior Polyglot Software Engineer & Solutions Architect

> Modern, responsive client portfolio and interactive dossier built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- **Executive Client Showcase:** Tailored for prospective enterprise clients, partners, and high-impact consulting engagements.
- **Case Studies & Products:** Deep dive into 3+ independent products (ERP-Integrated Real-Time Bus Tracker, Custom CRM, High-Concurrency Go Microservices).
- **Interactive Tech Arsenal:** Filterable categories across Languages, Frontend Frameworks, Backend/Microservices, Cloud/Databases, and Design.
- **Client Pitch Center (Modal):** 1-click copy for elevator pitches, proposal bios, and engagement models.
- **Print & PDF Export:** Integrated `@media print` stylesheets optimized for creating clean, professional multi-page PDF dossiers.

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** Lucide React
- **Fonts:** Inter & JetBrains Mono (Next.js Google Fonts)

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📄 File Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind & print styles
│   │   ├── layout.tsx          # Root layout & SEO metadata
│   │   └── page.tsx            # Main portfolio page
│   ├── components/
│   │   ├── Navbar.tsx          # Header navigation & actions
│   │   ├── Hero.tsx            # Headline & core value proposition
│   │   ├── StatsBanner.tsx     # Quantified metrics banner
│   │   ├── ValueProps.tsx      # Business value for clients
│   │   ├── ProjectsSection.tsx # Architectural case studies
│   │   ├── SkillsSection.tsx   # Interactive tech stack filter
│   │   ├── ExperienceSection.tsx # 7.5+ years career timeline
│   │   ├── CertificationsSection.tsx # Verified credentials & education
│   │   ├── ClientPitchModal.tsx # Pre-formatted pitches for sharing
│   │   └── Footer.tsx          # Footer
│   └── data/
│       └── profile.ts          # Centralized data model
├── Gowtham_Selvaraj_Client_Profile.md # Standalone markdown client summary
├── index.html                  # Standalone zero-dependency HTML backup
└── package.json
```

