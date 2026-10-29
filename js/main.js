/* ===========================================================
   Shared site behavior: mobile nav, scroll reveal, contact form,
   footer year.
   =========================================================== */

// --- Mobile navigation toggle ---
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  // close menu when a link is tapped
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// --- Reveal elements on scroll (with stagger within each group) ---
const revealEls = document.querySelectorAll(".reveal");
// Give siblings in the same container a cascading delay for a polished feel.
revealEls.forEach((el) => {
  const siblings = Array.from(el.parentElement.children).filter((c) =>
    c.classList.contains("reveal")
  );
  const idx = siblings.indexOf(el);
  if (idx > 0) el.style.transitionDelay = Math.min(idx * 90, 450) + "ms";
});

if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// --- Count-up animation for stat numbers ---
// Uses data-count (target number) and optional data-suffix (e.g. "+", "L+").
const stats = document.querySelectorAll(".stat__num[data-count]");
if ("IntersectionObserver" in window && stats.length) {
  const countUp = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const val = target * eased;
      el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          countUp(e.target);
          statIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  stats.forEach((el) => statIO.observe(el));
}

// --- Current year in footer ---
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Contact form ---
// The form posts natively to FormSubmit (see contact.html action). FormSubmit
// emails each enquiry to alttioradevelopers@gmail.com and redirects to
// thankyou.html. One-time: the first real submission sends an "Activate" email
// to that inbox — click it once and all future enquiries arrive automatically.
// (No JS interception here so activation works reliably.)
const form = document.getElementById("contact-form");
if (form) {
  const btn = form.querySelector('button[type="submit"]');
  form.addEventListener("submit", () => {
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
  });
}
