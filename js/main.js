// === Navigation ===

const navbar = document.getElementById("navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Hamburger toggle
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// Close menu on link click (mobile)
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight current section on scroll
const sections = document.querySelectorAll(".section[id]");

function updateActiveNav() {
  const scrollY = window.scrollY + 80;
  let current = "";

  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.id;
    }
  });

  navItems.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

// === Render Projects ===

const ROLE_LABELS = {
  "pi": "PI",
  "chalmers-pi": "Chalmers PI",
  "participating": "Participant"
};

function renderProjects() {
  const container = document.getElementById("projects-container");

  // Group by domain, preserving order of first appearance
  const domainOrder = [];
  const byDomain = {};
  projects.forEach(p => {
    if (!byDomain[p.domain]) {
      byDomain[p.domain] = [];
      domainOrder.push(p.domain);
    }
    byDomain[p.domain].push(p);
  });

  domainOrder.forEach(domain => {
    const heading = document.createElement("h3");
    heading.textContent = domain;
    container.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "projects-grid";
    container.appendChild(grid);

    byDomain[domain].forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";

      // Build tag pills
      const tags = [];

      // Status tag
      if (p.status === "active") {
        tags.push('<span class="project-tag project-tag--active">Active</span>');
      } else {
        tags.push('<span class="project-tag project-tag--completed">Completed</span>');
      }

      // Role tag
      const roleLabel = ROLE_LABELS[p.role];
      if (roleLabel) {
        tags.push(`<span class="project-tag project-tag--${escapeHTML(p.role)}">${escapeHTML(roleLabel)}</span>`);
      }

      // Hiring tag
      if (p.hiring) {
        tags.push('<span class="project-tag project-tag--hiring">Hiring</span>');
      }

      card.innerHTML = `
        <h4>${escapeHTML(p.title)}</h4>
        <div class="project-meta">
          <span class="project-years">${escapeHTML(p.years)}</span>
          ${p.funder ? `<span class="project-funder">${escapeHTML(p.funder)}</span>` : ""}
        </div>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <div class="project-tags">${tags.join("")}</div>
      `;
      grid.appendChild(card);
    });
  });
}

// === Render Publications ===

let activeTypeFilter = "all";
let activeTopicFilter = "all";
let activeDomainFilter = "all";

const TYPE_LABELS = {
  "journal": "Journal",
  "conference": "Conference",
  "preprint": "Preprint",
  "book-chapter": "Book Chapter"
};

function rerender() {
  renderPublications(pubSearch.value, activeTypeFilter, activeTopicFilter, activeDomainFilter);
}

function renderPublications(filter, typeFilter, topicFilter, domainFilter) {
  const container = document.getElementById("pub-list");
  container.innerHTML = "";

  const query = (filter || "").toLowerCase();
  const type = typeFilter || activeTypeFilter;
  const topic = topicFilter || activeTopicFilter;
  const domain = domainFilter || activeDomainFilter;

  const filtered = publications.filter(p => {
    if (type !== "all" && p.type !== type) return false;
    if (topic !== "all" && !(p.tags || []).includes(topic)) return false;
    if (domain !== "all" && !(p.domain || []).includes(domain)) return false;
    if (query) {
      const allTags = (p.tags || []).concat(p.domain || []).join(" ").toLowerCase();
      return (
        p.title.toLowerCase().includes(query) ||
        p.authors.toLowerCase().includes(query) ||
        p.venue.toLowerCase().includes(query) ||
        String(p.year).includes(query) ||
        allTags.includes(query)
      );
    }
    return true;
  });

  // Group by year
  const byYear = {};
  filtered.forEach(p => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });

  const TYPE_ORDER = { "journal": 0, "conference": 1, "book-chapter": 2, "preprint": 3 };
  const years = Object.keys(byYear).sort((a, b) => b - a);

  years.forEach(year => {
    const heading = document.createElement("div");
    heading.className = "pub-year-heading";
    heading.textContent = year;
    container.appendChild(heading);

    byYear[year].sort((a, b) => (TYPE_ORDER[a.type] || 99) - (TYPE_ORDER[b.type] || 99));

    byYear[year].forEach(p => {
      const entry = document.createElement("div");
      entry.className = "pub-entry";

      let venue = escapeHTML(p.venue);
      if (p.volume) venue += ", " + escapeHTML(p.volume);
      if (p.pages) venue += ", pp. " + escapeHTML(p.pages);

      const link = p.doi ? `https://doi.org/${encodeURIComponent(p.doi)}` : p.url;
      const titleHTML = link
        ? `<a class="pub-title" href="${link}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a>`
        : `<span class="pub-title">${escapeHTML(p.title)}</span>`;

      const badgeClass = "pub-type-badge pub-type-badge--" + escapeHTML(p.type);
      const badgeLabel = TYPE_LABELS[p.type] || p.type;

      const tagsHTML = (p.tags || []).map(t =>
        `<span class="pub-tag">${escapeHTML(t)}</span>`
      ).join("");

      const domainHTML = (p.domain || []).map(d =>
        `<span class="pub-domain-tag">${escapeHTML(d)}</span>`
      ).join("");

      entry.innerHTML = `
        <span class="${badgeClass}">${escapeHTML(badgeLabel)}</span>
        <span class="pub-authors">${escapeHTML(p.authors)}</span>
        ${titleHTML}.
        <span class="pub-venue">${venue}</span>, ${escapeHTML(String(p.year))}.
        <span class="pub-tags">${tagsHTML}${domainHTML}</span>
      `;
      container.appendChild(entry);
    });
  });
}

// Publication type filter buttons
const filterContainer = document.getElementById("pub-filters");
filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".pub-filter-btn");
  if (!btn) return;
  filterContainer.querySelectorAll(".pub-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeTypeFilter = btn.dataset.type;
  rerender();
});

// Build dynamic filter buttons for topics and domains
function buildFilterRow(containerId, dataKey, allLabel, btnClass) {
  const container = document.getElementById(containerId);
  const counts = {};
  publications.forEach(p => {
    (p[dataKey] || []).forEach(t => { counts[t] = (counts[t] || 0) + 1; });
  });
  const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  const allBtn = document.createElement("button");
  allBtn.className = "pub-filter-btn " + btnClass + " active";
  allBtn.dataset.value = "all";
  allBtn.textContent = allLabel;
  container.appendChild(allBtn);

  sorted.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "pub-filter-btn " + btnClass;
    btn.dataset.value = tag;
    btn.textContent = tag;
    container.appendChild(btn);
  });

  return container;
}

const topicContainer = buildFilterRow("pub-topic-filters", "tags", "All Topics", "pub-topic-btn");
topicContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".pub-topic-btn");
  if (!btn) return;
  topicContainer.querySelectorAll(".pub-topic-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeTopicFilter = btn.dataset.value;
  rerender();
});

const domainContainer = buildFilterRow("pub-domain-filters", "domain", "All Domains", "pub-domain-btn");
domainContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".pub-domain-btn");
  if (!btn) return;
  domainContainer.querySelectorAll(".pub-domain-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeDomainFilter = btn.dataset.value;
  rerender();
});

// Publication search
const pubSearch = document.getElementById("pub-search");
let searchTimeout;
pubSearch.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(rerender, 200);
});

// === Utilities ===

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// === Init ===

renderProjects();
renderPublications("", "all");
