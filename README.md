# Hazel's Personal Portfolio Website

This repository contains the source code and static web assets for the personal portfolio of **Nguyễn Đăng Cẩm Tú (Hazel)** — Business Analyst.

## 1. Aesthetic & Design System

- **Design Philosophy:** Balletcore Professional (soft feminine identity combined with rigorous analytical architecture).
- **Color Tokens:**
  - `Petal Frost` (`#FFD1DC`): Brand accents and micro-highlights
  - `Coffee Bean` (`#1B1110`): High-contrast typography and prominent headings
  - `Vanilla Cream` (`#FFF8F5`): Warm, airy, readable canvas
  - `Dusty Rose` (`#DFA6B5`): Secondary interactive accent, active pills, borders
  - `Warm Ballet Beige` (`#EADFD9`): Elevated surfaces, cards, and subtle dividers
  - `Muted Mauve` (`#8B7778`): Metadata and secondary information
- **Typography:** `Nunito Sans` (Body & Interface) and `Nunito` (Display headings).

---

## 2. Directory Structure

```text
outputs/
│
├── index.html                  # Homepage (Hero, About, Timeline, Projects, Skills, Certs, Contact)
│
├── projects/
│   ├── partner-wise.html       # Case Study: PartnerWise (B2B SaaS / Web3 SBT)
│   └── smart-parking.html      # Case Study: Smart Parking (Two-Product Ecosystem)
│
├── assets/
│   ├── images/
│   │   └── Profile_Avatar.jpg  # Verified portrait
│   └── cv/
│       └── Nguyen Dang Cam Tu - Business Analyst.pdf # Verified downloadable CV
│
├── css/
│   ├── styles.css              # Design tokens, reset, typography, base layout
│   ├── components.css          # Balletcore UI components (pills, cards, timeline, badges)
│   └── responsive.css          # Breakpoints (Mobile <=480px, Tablet <=768px, Desktop <=1024px)
│
├── js/
│   ├── translations.js         # Complete EN / VI bilingual dictionary
│   ├── content.js              # Centralized profile, education, experience & skills data
│   ├── projects.js             # Detailed case study content & verified deliverable links
│   └── main.js                 # Language switching, DOM rendering, and interaction logic
│
├── content_audit.md            # Complete evidence registry & owner clarifications
└── README.md                   # This documentation file
```

---

## 3. Maintenance Guide: How to Customize Content

All text and personal information are separated from complex HTML structures.

### Updating Personal Information or Contact Channels
Open `js/content.js` and modify the `portfolioData.profile` object:
```javascript
profile: {
  fullName: "Nguyễn Đăng Cẩm Tú",
  preferredName: "Hazel",
  roleTitle: "Business Analyst",
  email: "your-new-email@gmail.com",
  phone: "0915 998 517",
  ...
}
```

### Updating Work Experience or Education
Edit the `portfolioData.experienceEducation` array in `js/content.js`. Provide both English (`periodEn`, `roleEn`, `highlightsEn`) and Vietnamese (`periodVi`, `roleVi`, `highlightsVi`) versions.

### Updating or Adding Project Case Studies
Edit `js/projects.js`:
- Each project has its own key (e.g., `"partner-wise"`, `"smart-parking"`).
- Business rules and deliverables are represented as standard JavaScript objects with verified URLs.

### Updating Translations
Open `js/translations.js` to modify interface labels, section titles, button copy, or footer text in both `en` and `vi`.

### Replacing Portrait Photo or CV PDF
- Overwrite `assets/images/Profile_Avatar.jpg` with your new photo (keep the same filename, or update the path in `js/content.js`).
- Overwrite `assets/cv/Nguyen Dang Cam Tu - Business Analyst.pdf` with your updated CV.

---

## 4. Deployment Instructions

This website is a zero-dependency static site and can be deployed anywhere with zero build configuration.

