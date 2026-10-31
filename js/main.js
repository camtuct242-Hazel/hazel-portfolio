/**
 * HAZEL'S PERSONAL PORTFOLIO — MAIN APPLICATION CONTROLLER
 * Language management, DOM updating, interactions, and event listeners
 */

(function () {
  'use strict';

  // State
  let currentLang = localStorage.getItem('hazel_portfolio_lang') || 'en';

  // DOM Elements
  const langEnBtns = document.querySelectorAll('.lang-btn-en');
  const langViBtns = document.querySelectorAll('.lang-btn-vi');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  /**
   * Initialize Portfolio
   */
  function init() {
    setLanguage(currentLang, false);
    bindEvents();
    renderDynamicContent();
    initContactForm();
  }

  /**
   * Set Language & Update DOM without changing scroll position
   */
  function setLanguage(lang, preserveScroll = true) {
    currentLang = (lang === 'vi') ? 'vi' : 'en';
    localStorage.setItem('hazel_portfolio_lang', currentLang);
    document.documentElement.lang = currentLang;

    // Toggle active state on buttons
    langEnBtns.forEach(btn => btn.classList.toggle('active', currentLang === 'en'));
    langViBtns.forEach(btn => btn.classList.toggle('active', currentLang === 'vi'));

    // Record scroll position if needed
    const scrollY = preserveScroll ? window.scrollY : null;

    // Update static i18n text
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Update placeholders
    const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.setAttribute('placeholder', translations[currentLang][key]);
      }
    });

    // Update dynamic sections
    renderDynamicContent();

    // Restore scroll position
    if (preserveScroll && scrollY !== null) {
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }

  /**
   * Render Dynamic Lists (Timeline, Skills, Projects preview)
   */
  function renderDynamicContent() {
    renderTimeline();
    renderSkills();
    renderCertifications();
  }

  /**
   * Render Experience & Education Timeline
   */
  function renderTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    if (!timelineContainer || !portfolioData || !portfolioData.experienceEducation) return;

    timelineContainer.innerHTML = '';
    const isVi = currentLang === 'vi';

    portfolioData.experienceEducation.forEach(item => {
      const period = isVi ? item.periodVi : item.periodEn;
      const org = isVi ? item.orgVi : item.orgEn;
      const role = isVi ? item.roleVi : item.roleEn;
      const highlights = isVi ? item.highlightsVi : item.highlightsEn;

      const itemEl = document.createElement('div');
      itemEl.className = 'timeline-item';
      itemEl.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${role}</div>
              <div class="timeline-org">${org}</div>
            </div>
            <span class="timeline-date">${period}</span>
          </div>
          <div class="timeline-body">
            <ul>
              ${highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      timelineContainer.appendChild(itemEl);
    });
  }

  /**
   * Render Skills Grid
   */
  function renderSkills() {
    const skillsBA = document.getElementById('skillsBA');
    const skillsTech = document.getElementById('skillsTech');
    const skillsTools = document.getElementById('skillsTools');

    if (!skillsBA || !portfolioData || !portfolioData.skills) return;

    const isVi = currentLang === 'vi';
    const baList = isVi ? portfolioData.skills.baVi : portfolioData.skills.baEn;
    const techList = isVi ? portfolioData.skills.techVi : portfolioData.skills.techEn;
    const toolsList = isVi ? portfolioData.skills.toolsVi : portfolioData.skills.toolsEn;

    const renderList = (container, list) => {
      container.innerHTML = list.map(item => `
        <div class="skill-item">
          <div class="skill-bullet"></div>
          <div>
            <div class="skill-name">${item.name}</div>
            <div class="skill-subtext">${item.desc}</div>
          </div>
        </div>
      `).join('');
    };

    renderList(skillsBA, baList);
    renderList(skillsTech, techList);
    renderList(skillsTools, toolsList);
  }

  /**
   * Render Certifications
   */
  function renderCertifications() {
    const certsContainer = document.getElementById('certsContainer');
    if (!certsContainer || !portfolioData || !portfolioData.certifications) return;

    const isVi = currentLang === 'vi';
    certsContainer.innerHTML = portfolioData.certifications.map(cert => {
      const title = isVi ? cert.titleVi : cert.titleEn;
      const issuer = isVi ? cert.issuerVi : cert.issuerEn;

      return `
        <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-card" title="Verify credential">
          <div class="cert-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
          </div>
          <div class="cert-details">
            <h4>${title}</h4>
            <div class="cert-issuer">${issuer} ↗</div>
          </div>
        </a>
      `;
    }).join('');
  }

  /**
   * Bind DOM Events
   */
  function bindEvents() {
    // Language Switchers
    langEnBtns.forEach(btn => {
      btn.addEventListener('click', () => setLanguage('en', true));
    });

    langViBtns.forEach(btn => {
      btn.addEventListener('click', () => setLanguage('vi', true));
    });

    // Mobile Navbar Toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
      });

      // Close mobile menu when a nav link is clicked
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', false);
        });
      });
    }

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }
    }, { passive: true });
  }

  /**
   * Contact Form Handling (Netlify Forms via AJAX)
   */
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailAddress');
    const subjectInput = document.getElementById('inquirySubject');
    const messageInput = document.getElementById('messageBody');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    const nameFeedback = document.getElementById('nameFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const subjectFeedback = document.getElementById('subjectFeedback');
    const messageFeedback = document.getElementById('messageFeedback');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
      if (nameFeedback) nameFeedback.textContent = '';
      if (emailFeedback) emailFeedback.textContent = '';
      if (subjectFeedback) subjectFeedback.textContent = '';
      if (messageFeedback) messageFeedback.textContent = '';

      if (nameInput) nameInput.classList.remove('is-invalid');
      if (emailInput) emailInput.classList.remove('is-invalid');
      if (subjectInput) subjectInput.classList.remove('is-invalid');
      if (messageInput) messageInput.classList.remove('is-invalid');

      if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }
    }

    const fieldMap = [
      { input: nameInput, feedback: nameFeedback },
      { input: emailInput, feedback: emailFeedback },
      { input: subjectInput, feedback: subjectFeedback },
      { input: messageInput, feedback: messageFeedback }
    ];

    fieldMap.forEach(item => {
      if (item.input) {
        item.input.addEventListener('input', () => {
          item.input.classList.remove('is-invalid');
          if (item.feedback) item.feedback.textContent = '';
        });
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const t = translations[currentLang] || translations.en;
      let hasError = false;

      // Validate Name
      if (!nameInput || !nameInput.value.trim()) {
        if (nameFeedback) nameFeedback.textContent = t.formValidationName;
        if (nameInput) nameInput.classList.add('is-invalid');
        hasError = true;
      }

      // Validate Email
      if (!emailInput || !emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        if (emailFeedback) emailFeedback.textContent = t.formValidationEmail;
        if (emailInput) emailInput.classList.add('is-invalid');
        hasError = true;
      }

      // Validate Subject
      if (!subjectInput || !subjectInput.value.trim()) {
        if (subjectFeedback) subjectFeedback.textContent = t.formValidationSubject;
        if (subjectInput) subjectInput.classList.add('is-invalid');
        hasError = true;
      }

      // Validate Message
      if (!messageInput || !messageInput.value.trim()) {
        if (messageFeedback) messageFeedback.textContent = t.formValidationMessage;
        if (messageInput) messageInput.classList.add('is-invalid');
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Bot-field honeypot
      const botField = contactForm.querySelector('input[name="bot-field"]');
      if (botField && botField.value) {
        if (formStatus) {
          formStatus.className = 'form-status form-status-success';
          formStatus.textContent = t.formSuccess;
        }
        contactForm.reset();
        return;
      }

      // Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        const btnTextEl = submitBtn.querySelector('.btn-text');
        if (btnTextEl) btnTextEl.textContent = t.formSubmitting;
      }

      const formData = new FormData(contactForm);
      if (!formData.has('form-name')) {
        formData.append('form-name', 'portfolio-contact');
      }
      const urlEncodedBody = new URLSearchParams(formData).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncodedBody
      })
      .then(response => {
        if (response.ok) {
          if (formStatus) {
            formStatus.className = 'form-status form-status-success';
            formStatus.textContent = t.formSuccess;
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission failed with status ' + response.status);
        }
      })
      .catch(error => {
        if (formStatus) {
          formStatus.className = 'form-status form-status-error';
          formStatus.textContent = t.formError;
        }
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          const currentT = translations[currentLang] || translations.en;
          const btnTextEl = submitBtn.querySelector('.btn-text');
          if (btnTextEl) btnTextEl.textContent = currentT.formSubmitButton;
        }
      });
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
