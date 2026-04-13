// /* ── SMOOTH SCROLL ──────────────────────────────────────── */

// // Only hide elements for animation if JS is running fine
// document.documentElement.classList.add('js-loaded');
// document.body.classList.add('js-loaded');
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     const target = document.querySelector(this.getAttribute('href'));
//     if (!target) return;
//     e.preventDefault();

//     // Close mobile menu if open
//     document.getElementById('mobileMenu').classList.remove('open');
//     document.getElementById('hamburger').classList.remove('open');

//     const navH = document.getElementById('navbar').offsetHeight;
//     const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;

//     window.scrollTo({ top, behavior: 'smooth' });
//   });
// });

// (function(){
//   emailjs.init("YOUR_PUBLIC_KEY");
// })();

// function sendEmail() {
//   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//     name: document.getElementById("name").value,
//     message: document.getElementById("message").value,
//   }).then(function(response) {
//     alert("Email sent!");
//   }, function(error) {
//     alert("Failed...");
//   });
// }

// /* ── NAVBAR SCROLL FX ───────────────────────────────────── */
// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }

//   updateActiveNav();
// });

// /* ── ACTIVE NAV HIGHLIGHT ───────────────────────────────── */
// function updateActiveNav() {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-links a');
//   const scrollPos = window.scrollY + navbar.offsetHeight + 60;

//   sections.forEach(section => {
//     const top = section.offsetTop;
//     const bottom = top + section.offsetHeight;
//     const id = section.getAttribute('id');

//     if (scrollPos >= top && scrollPos < bottom) {
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// }

// /* ── HAMBURGER MENU ─────────────────────────────────────── */
// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobileMenu');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('open');
//   mobileMenu.classList.toggle('open');
// });

// // Close on mobile link click
// document.querySelectorAll('.mob-link').forEach(link => {
//   link.addEventListener('click', () => {
//     hamburger.classList.remove('open');
//     mobileMenu.classList.remove('open');
//   });
// });

// /* ── SCROLL REVEAL ──────────────────────────────────────── */
// const revealElements = document.querySelectorAll('.reveal');

// const revealObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.05,
//     rootMargin: '0px 0px 0px 0px',
//   }
// );

// revealElements.forEach(el => revealObserver.observe(el));

// /* ── CONTACT FORM VALIDATION ────────────────────────────── */
// const form = document.getElementById('contactForm');

// function setError(inputId, errorId, message) {
//   const input = document.getElementById(inputId);
//   const error = document.getElementById(errorId);
//   if (message) {
//     input.classList.add('error');
//     error.textContent = message;
//     return false;
//   } else {
//     input.classList.remove('error');
//     error.textContent = '';
//     return true;
//   }
// }

// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function validateForm() {
//   const name    = document.getElementById('fname').value.trim();
//   const email   = document.getElementById('femail').value.trim();
//   const subject = document.getElementById('fsubject').value.trim();
//   const message = document.getElementById('fmessage').value.trim();

//   let valid = true;

//   valid = setError('fname', 'nameError', name.length < 2 ? 'Name must be at least 2 characters.' : '') && valid;
//   valid = setError('femail', 'emailError', !validateEmail(email) ? 'Please enter a valid email address.' : '') && valid;
//   valid = setError('fsubject', 'subjectError', subject.length < 3 ? 'Please enter a subject.' : '') && valid;
//   valid = setError('fmessage', 'messageError', message.length < 10 ? 'Message must be at least 10 characters.' : '') && valid;

//   return valid;
// }

// // Live validation on blur
// ['fname', 'femail', 'fsubject', 'fmessage'].forEach(id => {
//   const el = document.getElementById(id);
//   el.addEventListener('blur', () => validateForm());
//   el.addEventListener('input', () => {
//     if (el.classList.contains('error')) validateForm();
//   });
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   const btn = document.getElementById('btnText');
//   const successMsg = document.getElementById('formSuccess');

//   // Simulate sending
//   btn.textContent = 'Sending…';
//   form.querySelector('button[type="submit"]').disabled = true;
//   const
//   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//     name: document.getElementById("fname").value,
//     email: document.getElementById("femail").value,
//     subject: document.getElementById("fsubject").value,
//     message: document.getElementById("fmessage").value,
//   })
//   .then(() => {
//     alert("Message sent successfully!");
//   })
//   .catch(() => {
//     alert("Failed to send message.");
//   });
//   setTimeout(() => {
//     btn.textContent = 'Send Message';
//     form.querySelector('button[type="submit"]').disabled = false;
//     successMsg.classList.add('show');
//     form.reset();

//     // Clear error states
//     ['fname', 'femail', 'fsubject', 'fmessage'].forEach(id => {
//       document.getElementById(id).classList.remove('error');
//     });
//     ['nameError', 'emailError', 'subjectError', 'messageError'].forEach(id => {
//       document.getElementById(id).textContent = '';
//     });

//     // Hide success after 5s
//     setTimeout(() => successMsg.classList.remove('show'), 5000);
//   }, 1200);
// });

// /* ── CURSOR GLOW (desktop only) ─────────────────────────── */
// if (window.matchMedia('(pointer:fine)').matches) {
//   const glow = document.createElement('div');
//   glow.style.cssText = `
//     position: fixed; pointer-events: none; z-index: 9999;
//     width: 300px; height: 300px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%);
//     transform: translate(-50%, -50%);
//     transition: left 0.15s ease, top 0.15s ease;
//     left: -999px; top: -999px;
//   `;
//   document.body.appendChild(glow);

//   document.addEventListener('mousemove', e => {
//     glow.style.left = e.clientX + 'px';
//     glow.style.top  = e.clientY + 'px';
//   });
// }

// /* ── INIT ───────────────────────────────────────────────── */
// updateActiveNav();

document.addEventListener("DOMContentLoaded", () => {

  /* ── INIT EMAILJS ───────────────────────────── */
  emailjs.init("D55n7eoLNHF20_b76");

  /* ── SMOOTH SCROLL ─────────────────────────── */
  document.documentElement.classList.add('js-loaded');
  document.body.classList.add('js-loaded');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.getElementById('hamburger');

      if (mobileMenu && hamburger) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
      }

      const navbar = document.getElementById('navbar');
      const navH = navbar ? navbar.offsetHeight : 0;

      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── NAVBAR SCROLL FX ───────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    updateActiveNav();
  }

  window.addEventListener('scroll', handleScroll);

  /* ── ACTIVE NAV HIGHLIGHT ───────────────────── */
  function updateActiveNav() {
    if (!navbar) return;

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollPos = window.scrollY + navbar.offsetHeight + 60;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ── HAMBURGER MENU ─────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  });

  /* ── SCROLL REVEAL ─────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ── FORM VALIDATION ───────────────────────── */
  const form = document.getElementById('contactForm');

  function setError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (!input || !error) return false;

    if (message) {
      input.classList.add('error');
      error.textContent = message;
      return false;
    } else {
      input.classList.remove('error');
      error.textContent = '';
      return true;
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    const name    = document.getElementById('fname')?.value.trim() || '';
    const email   = document.getElementById('femail')?.value.trim() || '';
    const subject = document.getElementById('fsubject')?.value.trim() || '';
    const message = document.getElementById('fmessage')?.value.trim() || '';

    let valid = true;

    valid = setError('fname', 'nameError', name.length < 2 ? 'Name must be at least 2 characters.' : '') && valid;
    valid = setError('femail', 'emailError', !validateEmail(email) ? 'Enter a valid email.' : '') && valid;
    valid = setError('fsubject', 'subjectError', subject.length < 3 ? 'Enter subject.' : '') && valid;
    valid = setError('fmessage', 'messageError', message.length < 10 ? 'Min 10 characters required.' : '') && valid;

    return valid;
  }

  if (form) {

    ['fname', 'femail', 'fsubject', 'fmessage'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      el.addEventListener('blur', validateForm);
      el.addEventListener('input', () => {
        if (el.classList.contains('error')) validateForm();
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      const btn = document.getElementById('btnText');
      const successMsg = document.getElementById('formSuccess');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (btn) btn.textContent = 'Sending…';
      if (submitBtn) submitBtn.disabled = true;

      emailjs.send("service_e4wqtom", "template_9k2ukxj", {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        subject: document.getElementById("fsubject").value,
        message: document.getElementById("fmessage").value,
      })
      .then(() => {
        if (btn) btn.textContent = 'Send Message';
        if (submitBtn) submitBtn.disabled = false;
        if (successMsg) successMsg.classList.add('show');

        form.reset();
      })
      .catch(() => {
        if (btn) btn.textContent = 'Send Message';
        if (submitBtn) submitBtn.disabled = false;
        alert("Failed to send message.");
      });
    });
  }

  /* ── CURSOR GLOW ───────────────────────────── */
  if (window.matchMedia('(pointer:fine)').matches) {
    const glow = document.createElement('div');

    glow.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.15s ease, top 0.15s ease;
      left: -999px;
      top: -999px;
    `;

    document.body.appendChild(glow);

    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
  }

  /* ── INIT CALL ─────────────────────────────── */
  updateActiveNav();

});