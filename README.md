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

### Deploying to Netlify (with Working Contact Form)

#### Implementation & Verification Status Matrix
- **Implemented in source code:** Complete static form markup with Netlify Forms detection attributes (`data-netlify="true"`, `data-netlify-honeypot="bot-field"`), hidden `form-name` (`portfolio-contact`), hidden notification `subject`, accessible client-side validation, Honeypot spam defense, URL-encoded AJAX submission, and bilingual status feedback.
- **Ready for deployment:** Zero-build static architecture; all assets in `outputs/` are self-contained and ready to publish.
- **Requires Netlify configuration:** Email notification forwarding to `camtuct242@gmail.com` must be configured inside the Netlify Dashboard under **Site configuration > Forms > Submission notifications** once the site is deployed.
- **Not yet verified through a real submission:** Live email delivery to `camtuct242@gmail.com` cannot be tested locally and requires an actual post-deployment submission on the published Netlify domain.

1. Push the contents of `outputs/` to your GitHub repository (e.g. `camtuct242-Hazel/portfolio`) or deploy directly via Netlify CLI / Web app.
2. In the Netlify site settings:
   - Connect your repository and select the target branch.
   - Set the publish directory to `outputs` (or root if repository root).
3. **Netlify Forms Detection**:
   - The form is named `portfolio-contact` and is pre-rendered in static HTML (`index.html`) with `data-netlify="true"` and `data-netlify-honeypot="bot-field"`.
   - Netlify will automatically detect `portfolio-contact` during deployment.
4. **Configuring Email Notifications to `camtuct242@gmail.com`**:
   - In the Netlify dashboard, open the site and navigate to **Site configuration > Forms** (or the **Forms** tab).
   - Verify that `portfolio-contact` appears in the list of active forms.
   - Under **Forms > Submission notifications**, click **Add notification** and choose **Email notification**.
   - Set the recipient email to: `camtuct242@gmail.com`.
   - Select notification event: *New form submission*.
   - Save the notification.
5. **Live Verification**:
   - Visit the deployed website, submit a real test message, and verify that the notification arrives in your inbox at `camtuct242@gmail.com`.

### Deploying to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or connect your GitHub repository directly at [vercel.com](https://vercel.com).
2. Set the Root Directory to `outputs` (if deploying the subfolder) or the repo root.
3. Deploy — Vercel will immediately serve `index.html`.

### Deploying to GitHub Pages
1. Push the contents of `outputs/` to your GitHub repository (e.g. `camtuct242-Hazel/portfolio`).
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `gh-pages`) and root folder `/` (or `/docs`).
4. Save — your website will be live at `https://camtuct242-hazel.github.io/portfolio/`.
