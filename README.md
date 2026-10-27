# PD Freelancer — Software Studio & Freelance Portfolio

A production-grade, high-conversion freelance software engineering website engineered for **Parmeshwar Durgist**, operating under the brand **PD Freelancer — Software Development & Digital Solutions**.

Built with **React.js, TypeScript, Vite, Tailwind CSS, and Framer Motion**, this website is designed to establish authority, present verified technical capabilities, showcase real case studies, and convert visitors into paying clients.

---

## 🚀 Key Features

- **Studio Aesthetic**: Editorial typography, dark/light theme persistence, refined borders, and glassmorphism.
- **Interactive Code Element**: Hero code window with tab switching, syntax highlighting, and snippet copying.
- **Filterable Case Studies**: Real projects including **Manyyata Foods** (E-commerce) and **ASK Compaire** (B2B Machinery) with problem-solution breakdowns.
- **Detailed Service Catalog**: 10 comprehensive software engineering offerings detailing client problems, solutions, features, and deliverables.
- **Conversion-Optimized Inquiry Form**: React Hook Form with Zod validation, budget range selectors, project scopes, direct WhatsApp shortcut, and copy-email tools.
- **Transparent Process & Pricing**: Milestone-backed 6-stage development timeline and honest scope-based investment guidance.
- **SEO & Core Web Vitals Ready**: Semantic HTML5 hierarchy, OpenGraph metadata, robots.txt, and optimized asset delivery.
- **Vercel Ready**: Client-side routing rewrite rules configured in `vercel.json`.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Build** | React 18, Vite 5, TypeScript 5 |
| **Styling** | Tailwind CSS 3, PostCSS, Custom CSS Variables |
| **Routing** | React Router DOM v6 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **Form Management** | React Hook Form, Zod Resolver |
| **Inquiry Forwarding** | EmailJS Browser Integration + Configurable WhatsApp Shortcut |
| **Deployment Target** | Vercel (Edge-optimized) |

---

## 📁 Project Architecture

```
1.FLC_WEB/
├── public/
│   ├── favicon.svg             # SVG brand icon
│   └── robots.txt              # Search engine crawler instructions
├── src/
│   ├── assets/                 # Static media and brand assets
│   ├── components/
│   │   ├── forms/              # ContactForm with Zod validation
│   │   ├── layout/             # Navbar, Footer, Layout wrapper
│   │   └── ui/                 # Button, Badge, SectionHeading, CodeWindow,
│   │                           # ProjectCard, ServiceCard, ProcessTimeline,
│   │                           # FAQAccordion, PricingCard
│   ├── context/                # ThemeContext (Dark/Light mode persistence)
│   ├── data/                   # Verified data stores (projects, services, process, pricing, faqs, skills)
│   ├── lib/                    # Utilities (clsx + tailwind-merge)
│   ├── pages/                  # Home, About, Services, Portfolio, CaseStudy,
│   │                           # Process, Pricing, Contact, FAQ, Legal, 404
│   ├── styles/                 # index.css design tokens and utilities
│   ├── types/                  # Strict TypeScript interfaces
│   ├── App.tsx                 # Route mapping & theme wrapper
│   └── main.tsx                # React DOM entry point
├── .env.example                # Safe environment variable template
├── .gitignore                  # Git exclusions
├── package.json                # Dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Design tokens and theme extensions
├── tsconfig.json               # TypeScript compiler rules
├── tsconfig.node.json          # Node TypeScript config
├── vercel.json                 # Vercel SPA routing rewrites
└── README.md                   # Documentation & setup guide
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
This executes `tsc` for complete type-checking followed by `vite build` into `/dist`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service identifier | `service_xxxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template identifier | `template_xxxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public API key | `publicKey_xxxx` |
| `VITE_WHATSAPP_NUMBER` | Contact phone in international format without + or spaces | `919876543210` |
| `VITE_CONTACT_EMAIL` | Direct developer contact email | `durgistparmeshwar@gmail.com` |

> **Note:** If EmailJS credentials are not provided, the contact form automatically falls back to an interactive local demo state with feedback so visitors can test the form without errors.

---

## 🌐 Deploying to GitHub & Vercel

### Step 1: Initialize Git Repository
In your terminal inside `1.FLC_WEB`:
```bash
git init
git add .
git commit -m "feat: complete PD Technologies freelance software studio website"
```

### Step 2: Push to GitHub
1. Create a new repository on your GitHub account: `https://github.com/new` (e.g. `pd-technologies-portfolio`).
2. Run the following commands:
```bash
git branch -M main
git remote add origin https://github.com/parmeshwar-durgist/pd-technologies-portfolio.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New Project** and select `pd-technologies-portfolio`.
3. In the project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add any keys from your `.env` (such as `VITE_EMAILJS_PUBLIC_KEY`, `VITE_WHATSAPP_NUMBER`).
5. Click **Deploy**. Vercel will build and deploy your site with global CDN caching and SSL.

### Step 4: Configure Custom Domain (Optional)
1. Go to your project dashboard on Vercel > **Settings** > **Domains**.
2. Enter your custom domain (e.g., `pdtechnologies.dev` or `parmeshwardurgist.com`).
3. Add the provided `CNAME` or `A` records to your DNS provider.

---

## 📋 Quality & Verification Checklist

- [x] **Zero TypeScript Errors**: Passed strict compilation (`tsc`).
- [x] **Production Bundle Built**: Zero dead links or unresolved imports.
- [x] **Responsive Layout**: Fluid breakpoints across mobile (360px+), tablet, and desktop (1280px+).
- [x] **Light/Dark Mode**: Persisted in `localStorage` with smooth transitions.
- [x] **Authentic Credentials**: Real experience (~2+ years), genuine verified projects (Manyyata Foods, ASK Compaire), and honest capabilities.
- [x] **Single-Page Application Routing**: Configured with `vercel.json` rewrite fallback.

---

## 👤 Developer Profile

- **Name**: Parmeshwar Durgist
- **Brand**: PD Freelancer — Software Development & Digital Solutions
- **Title**: Freelance Software Engineer & Full-Stack Developer
- **Mobile & WhatsApp**: [+91 9657847967](tel:9657847967) / [Chat on WhatsApp](https://wa.me/919657847967)
- **Email**: [durgistparmeshwar@gmail.com](mailto:durgistparmeshwar@gmail.com)
- **GitHub**: [github.com/parmeshwar-durgist](https://github.com/parmeshwar-durgist)
- **Portfolio**: [parmeshwar-the-series.vercel.app](https://parmeshwar-the-series.vercel.app/)
