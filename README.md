# Gopinath S — Java Full-Stack Developer Portfolio

A responsive, recruiter-aligned personal portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**. Grounded strictly in verified academic credentials, practical internship experience at Pumo Technovation, and active Java Full Stack training at Tap Academy.

---

## 🌟 Key Highlights & Design Identity

- **Visual Direction**: Contemporary SaaS/developer aesthetic featuring a deep navy palette (`#080c16`), electric blue accents (`#38bdf8`), off-white typography, and balanced layouts.
- **Interactive Java IDE Terminal**: Hero visual featuring a simulated JDK 17 environment with realistic Java class code, tab switching, and code execution.
- **Accurate Resume Reflection**:
  - **Degree**: B.E. Computer Science & Engineering, Alpha College of Engineering (8.03/10 CGPA, 2022–2026).
  - **Training**: Java Full Stack Development, Tap Academy (July 2026 – Ongoing).
  - **Internship**: Full Stack Web Development Intern, Pumo Technovation (July 2025 – August 2025).
  - **Core Skills**: Java, SQL, JavaScript, Python, HTML5, CSS3, React JS, Object-Oriented Programming, DBMS, Data Structures.
- **Featured Project Case Studies**:
  - *Personal Finance Advisor Using Chatbot (2026)*: Interactive simulation with JavaScript-based expense classification and chatbot intent-matching.
  - *Online Food Stall — E-Commerce Website (2025)*: Structured responsive food catalog layout.
- **Interactive Modals**: Dedicated case study modals with architecture breakdowns and live sandbox widgets.
- **Recruiter Tools**:
  - Interactive formatted Resume Viewer with in-browser preview and direct PDF download.
  - One-click copy for email (`vishalgopi02@gmail.com`) and phone (`+91 88071 92893`) with instant toast alerts.
  - Validated contact form that generates clean `mailto:` drafts without fake backend submissions.
- **Accessibility & Themes**: Clean Dark & Light theme toggle, active scroll spy, mobile drawer navigation, keyboard accessibility (Esc/Tab support), and reduced-motion support.

---

## 📂 Project Structure

```
d:\Gopinath-Portfolio\
├── public/
│   ├── favicon.svg             # Custom <GS/> monogram favicon
│   ├── resume.pdf              # Downloadable resume PDF
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive nav, active section spy, mobile drawer, theme toggle
│   │   ├── Hero.jsx            # Headline, CTAs, interactive Java IDE/terminal widget
│   │   ├── About.jsx           # Two-column narrative & key credential highlight cards
│   │   ├── Skills.jsx          # Domain-categorized skill cards with filter tabs
│   │   ├── Experience.jsx      # Pumo Technovation internship timeline & verified contributions
│   │   ├── Projects.jsx        # Project cards with simulated UI previews & quick actions
│   │   ├── ProjectModal.jsx    # Deep-dive case study modal (Overview, Architecture, Live Demo)
│   │   ├── Education.jsx       # Alpha College degree & Tap Academy training cards
│   │   ├── Certifications.jsx  # 3 verified resume certifications
│   │   ├── Contact.jsx         # Direct channels, copy email toast, and validated contact form
│   │   ├── ResumeModal.jsx     # In-browser formatted resume viewer & print/download actions
│   │   ├── Footer.jsx          # Dynamic copyright year, back-to-top button, social links
│   │   └── Icons.jsx           # Clean SVG brand icons (LinkedIn, GitHub)
│   ├── context/
│   │   └── ThemeContext.jsx    # Light / Dark theme state with local storage persistence
│   ├── data/
│   │   └── portfolioData.js    # Single centralized configuration for all resume data & URLs
│   ├── index.css               # Tailwind CSS v4 setup, custom scrollbar & grid pattern
│   ├── App.jsx                 # Main application layout, toast notifications, modal state
│   └── main.jsx
├── index.html                  # SEO metadata, Open Graph tags, Google Fonts
├── vite.config.js              # Vite 8 + @tailwindcss/vite config
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation & Run

1. **Clone or open the repository**:
   ```bash
   cd d:\Gopinath-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🛠️ How to Customize Your Links & Information

All resume data, social links, and project repositories are centralized in **[`src/data/portfolioData.js`](file:///d:/Gopinath-Portfolio/src/data/portfolioData.js)**.

### 1. Update GitHub Profile URL
In `src/data/portfolioData.js`, edit the `socialLinks` object:
```javascript
socialLinks: {
  linkedin: "https://www.linkedin.com/in/gopinath-s-bio",
  github: "https://github.com/YOUR_GITHUB_USERNAME", // <-- Update here
  email: "mailto:vishalgopi02@gmail.com",
  portfolioLive: "https://personal-portfolio-ten-mu-19.vercel.app"
}
```

### 2. Update Project GitHub & Live Demo Links
In `src/data/portfolioData.js`, locate the `projects` array and replace `null` with your actual URLs:
```javascript
{
  id: "personal-finance-advisor",
  title: "Personal Finance Advisor Using Chatbot",
  // ...
  githubUrl: "https://github.com/YOUR_USERNAME/personal-finance-advisor", // <-- Add repo link
  demoUrl: "https://your-finance-app.vercel.app"                          // <-- Add live demo
}
```
*Note: If `githubUrl` or `demoUrl` is left as `null`, the project cards and modal automatically display an honest placeholder stating that the link is configurable, ensuring no fake URLs appear.*

### 3. Replace the Resume PDF File
1. Name your actual resume PDF file **`resume.pdf`**.
2. Place it in the `public/` directory, replacing the existing file:
   ```
   d:\Gopinath-Portfolio\public\resume.pdf
   ```
3. The "Download Resume" buttons and the in-browser Resume Modal will automatically download and serve your new PDF file without needing any code changes.

---

## ☁️ Deployment Instructions for Vercel

The portfolio is fully optimized for one-click deployment on **Vercel**:

### Option A: Via GitHub (Recommended)
1. Push your code to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium Java Full-Stack Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gopinath-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your `gopinath-portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your portfolio will be live in ~30 seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📋 Quality & Testing Checklist

- [x] **Navigation**: All navbar links (Home, About, Skills, Experience, Projects, Education, Certifications, Contact) smooth-scroll to their respective sections.
- [x] **Active Scroll Spy**: Navbar highlights the currently visible section as you scroll down the page.
- [x] **Mobile Menu**: Mobile drawer opens cleanly, supports touch/tap navigation, and closes on item click or Esc key.
- [x] **Resume Download**: Header and Hero "Download Resume" triggers download of `/resume.pdf`, and the Resume Modal enables full in-browser reading & printing.
- [x] **Contact Channels**: Email link and copy actions point to `vishalgopi02@gmail.com`; phone link and copy actions point to `+91 88071 92893`.
- [x] **Form Validation**: Contact form validates name, valid email format, subject, and message length before opening user's mail client.
- [x] **Case Studies**: Both projects have working "View Case Study" modals with tabs for Overview, Architecture, Interactive Demo, and Links.
- [x] **Theme Switcher**: Dark mode (deep navy) and light mode toggle seamlessly with persistent local storage.
- [x] **No Fake Metrics**: No invented years of experience, fake skill percentages, or fabricated repository links.
- [x] **Production Build**: Verified with `npm run build` (zero errors or bundle warnings).
