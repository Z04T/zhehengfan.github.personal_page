const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const content = window.siteContent;
const themeStorageKey = "zheheng-theme";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeLabel) {
    themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  }
  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  }
}

applyTheme(getInitialTheme());

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) {
    element.textContent = value;
  }
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) {
    element.setAttribute(attribute, value);
  }
}

function clearAndRender(selector, items, renderItem) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.replaceChildren(...items.map(renderItem));
}

function makeLink(item, className) {
  const link = document.createElement("a");
  link.href = item.href || "#";
  link.textContent = item.label || item.title;
  if (className) link.className = className;
  if (link.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}

function renderContent() {
  if (!content) return;

  document.title = content.profile.title;
  setAttribute("[data-page-description]", "content", content.profile.description);
  setAttribute("[data-hero-image]", "src", content.profile.heroImage);
  setAttribute("[data-hero-preload]", "href", content.profile.heroImage);

  setText("[data-brand-mark]", content.profile.initials);
  setText("[data-brand-name]", content.profile.name);
  setText("[data-hero-name]", content.profile.name);
  setText("[data-profile-subtitle]", content.profile.subtitle);
  setText("[data-profile-keywords]", content.profile.keywords);
  setText("[data-footer-name]", content.profile.name);
  setText("[data-footer-note]", content.profile.footerNote);

  setText("[data-hero-eyebrow]", content.hero.eyebrow);
  setText("[data-hero-tagline]", content.hero.tagline);
  clearAndRender("[data-hero-actions]", content.hero.actions, (action) =>
    makeLink(action, `button ${action.style || "secondary"}`)
  );

  setText("[data-about-kicker]", content.about.kicker);
  setText("[data-about-heading]", content.about.heading);
  setAttribute("[data-about-photo]", "src", content.about.photo);
  setAttribute("[data-about-photo]", "alt", content.about.photoAlt);
  clearAndRender("[data-about-body]", content.about.paragraphs, (paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  });

  setText("[data-education-kicker]", content.education.kicker);
  setText("[data-education-heading]", content.education.heading);
  clearAndRender("[data-education-items]", content.education.items, (item, index) => {
    const article = document.createElement("article");
    const marker = document.createElement("div");
    const body = document.createElement("div");
    const meta = document.createElement("p");
    const title = document.createElement("h3");
    const institution = document.createElement("p");
    const summary = document.createElement("p");
    const chips = document.createElement("div");
    article.className = "education-card";
    marker.className = "education-marker";
    body.className = "education-body";
    meta.className = "education-meta";
    institution.className = "education-institution";
    summary.className = "education-summary";
    chips.className = "education-chips";
    marker.textContent = String(index + 1).padStart(2, "0");
    meta.textContent = `${item.years} · ${item.status}`;
    title.textContent = item.degree;
    institution.textContent = `${item.institution} · ${item.location}`;
    summary.textContent = item.summary;
    chips.append(
      ...item.highlights.map((highlight) => {
        const chip = document.createElement("span");
        chip.textContent = highlight;
        return chip;
      })
    );
    body.append(meta, title, institution, summary, chips);
    article.append(marker, body);
    return article;
  });

  setText("[data-focus-kicker]", content.focus.kicker);
  setText("[data-focus-heading]", content.focus.heading);
  clearAndRender("[data-focus-items]", content.focus.items, renderResearchProjectCard);

  setText("[data-methods-kicker]", content.methods.kicker);
  setText("[data-methods-heading]", content.methods.heading);
  clearAndRender("[data-methods-items]", content.methods.items, (item) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const chips = document.createElement("div");
    article.className = "skill-card";
    chips.className = "skill-chips";
    title.textContent = item.title;
    chips.append(
      ...item.skills.map((skill) => {
        const chip = document.createElement("span");
        chip.textContent = skill;
        return chip;
      })
    );
    article.append(title, chips);
    return article;
  });

  setText("[data-works-kicker]", content.works.kicker);
  setText("[data-works-heading]", content.works.heading);
  renderWorks();

  setText("[data-contact-kicker]", content.contact.kicker);
  setText("[data-contact-heading]", content.contact.heading);
  setText("[data-contact-body]", content.contact.text);
  clearAndRender("[data-contact-links]", content.contact.links, renderContactLink);

  renderResearchProjectPage();
  renderSingleResearchProject();
}

function renderContactLink(item) {
  const link = makeLink(item);
  const label = document.createElement("span");
  const logo = item.label === "LinkedIn" ? createLinkedInLogo() : createContactIcon(item.label);
  if (!logo) return link;

  link.classList.add("contact-icon-link");
  if (item.label === "LinkedIn") link.classList.add("linkedin-logo-link");
  label.className = "sr-only";
  label.textContent = item.label;
  link.textContent = "";
  link.setAttribute("aria-label", item.label);
  link.title = item.label;
  link.append(logo, label);
  return link;
}

function createLinkedInLogo() {
  const logo = document.createElement("span");
  logo.className = "contact-logo linkedin-logo";
  logo.setAttribute("aria-hidden", "true");
  logo.textContent = "in";
  return logo;
}

function createContactIcon(label) {
  const icons = {
    Email: [
      ["path", { d: "M4 6h16v12H4z" }],
      ["path", { d: "m4 7 8 6 8-6" }]
    ],
    CV: [
      ["path", { d: "M7 3h7l4 4v14H7z" }],
      ["path", { d: "M14 3v5h5" }],
      ["path", { d: "M10 12h6" }],
      ["path", { d: "M10 16h6" }]
    ]
  };
  if (!icons[label]) return null;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("contact-svg-icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  icons[label].forEach(([name, attributes]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    svg.append(element);
  });
  return svg;
}

function renderWorks() {
  const container = document.querySelector("[data-works-items]");
  if (!container || !content.works) return;

  const groups = content.works.groups || [{ title: "", items: content.works.items || [] }];
  container.replaceChildren(
    ...groups.map((group) => {
      const section = document.createElement("section");
      const grid = document.createElement("div");
      section.className = "work-group";
      grid.className = "works-grid";

      if (group.title) {
        const title = document.createElement("h3");
        title.className = "work-group-title";
        title.textContent = group.title;
        section.append(title);
      }

      grid.append(...group.items.map(renderWorkCard));
      section.append(grid);
      return section;
    })
  );
}

function renderWorkCard(item) {
  const article = document.createElement("article");
  const type = document.createElement("p");
  const title = document.createElement("h3");
  const meta = document.createElement("p");
  const text = document.createElement("p");
  const link = makeLink(item);
  article.className = "work-card";
  type.className = "project-type";
  meta.className = "work-meta";
  link.className = "work-link";
  type.textContent = item.type;
  title.textContent = item.title;
  meta.textContent = item.meta;
  text.textContent = item.text;
  link.setAttribute("aria-label", `${item.label || "Open"} ${item.title}`);
  article.append(type, title, meta, text, link);
  return article;
}

function renderSimpleItem(item) {
  const link = makeLink(item);
  const title = document.createElement("span");
  const meta = document.createElement("small");
  link.textContent = "";
  title.textContent = item.title;
  meta.textContent = item.meta;
  link.append(title, meta);
  return link;
}

function slugFromHref(href) {
  return href ? href.split("#")[1] : "";
}

function renderResearchProjectPage() {
  const container = document.querySelector("[data-research-projects]");
  if (!container || !content.focus) return;

  setText("[data-research-page-kicker]", content.focus.kicker);
  setText("[data-research-page-heading]", content.focus.heading);

  container.classList.add("research-project-index");
  container.replaceChildren(...content.focus.items.map(renderResearchProjectCard));
}

function renderResearchProjectCard(item, index) {
  const article = item.href ? document.createElement("a") : document.createElement("article");
  article.className = item.href ? "focus-card focus-link" : "focus-card";
  if (item.href) {
    article.href = item.href;
  }
  article.innerHTML = `
    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
    <h3></h3>
    <p></p>
    ${item.href ? '<span class="card-action">Open project page</span>' : ""}
  `;
  article.querySelector("h3").textContent = item.title;
  article.querySelector("p").textContent = item.text;
  return article;
}

function renderSingleResearchProject() {
  const container = document.querySelector("[data-research-project-detail]");
  if (!container || !content.focus) return;

  const slug = document.body.dataset.projectSlug;
  const item = content.focus.items.find((project) => project.slug === slug);
  if (!item) return;

  const detail = Array.isArray(item.detail) ? item.detail : [item.text];
  document.title = `${item.title} | ${content.profile.name}`;
  setText("[data-project-detail-kicker]", content.focus.kicker);
  setText("[data-project-detail-title]", item.title);
  setText("[data-project-detail-summary]", item.text);

  const elements = [];

  if (item.lab || item.company || item.pi || item.logo) {
    const meta = document.createElement("aside");
    meta.className = "project-meta-panel";

    if (item.logo) {
      const logoWrap = document.createElement("div");
      const logo = document.createElement("img");
      logoWrap.className = "project-meta-logo";
      logo.src = item.logo;
      logo.alt = item.logoAlt || "";
      logo.loading = "lazy";
      logoWrap.append(logo);
      meta.append(logoWrap);
    }

    if (item.lab) {
      const lab = document.createElement("p");
      const labText = item.labHref ? document.createElement("a") : document.createTextNode(item.lab);
      lab.innerHTML = "<strong>Lab</strong>";
      if (item.labHref) {
        labText.href = item.labHref;
        labText.textContent = item.lab;
        labText.target = "_blank";
        labText.rel = "noreferrer";
      }
      lab.append(" ", labText);
      meta.append(lab);
    }

    if (item.company) {
      const company = document.createElement("p");
      const companyText = item.companyHref ? document.createElement("a") : document.createTextNode(item.company);
      company.innerHTML = "<strong>Company</strong>";
      if (item.companyHref) {
        companyText.href = item.companyHref;
        companyText.textContent = item.company;
        companyText.target = "_blank";
        companyText.rel = "noreferrer";
      }
      company.append(" ", companyText);
      meta.append(company);
    }

    if (item.pi) {
      const pi = document.createElement("p");
      const piText = item.piHref ? document.createElement("a") : document.createTextNode(item.pi);
      pi.innerHTML = "<strong>Principal Investigator</strong>";
      if (item.piHref) {
        piText.href = item.piHref;
        piText.textContent = item.pi;
        piText.target = "_blank";
        piText.rel = "noreferrer";
      }
      pi.append(" ", piText);
      meta.append(pi);
    }

    elements.push(meta);
  }

  elements.push(
    ...detail.map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );

  if (item.workflow && item.workflow.image) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    figure.className = "project-workflow";
    image.src = item.workflow.image;
    image.alt = item.workflow.alt || `${item.title} workflow`;
    image.loading = "lazy";
    figure.append(image);

    if (item.workflow.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = item.workflow.caption;
      figure.append(caption);
    }

    elements.push(figure);
  }

  if (Array.isArray(item.figures) && item.figures.length > 0) {
    const figureGrid = document.createElement("div");
    figureGrid.className = "project-figure-grid";
    figureGrid.append(
      ...item.figures.map((figureItem) => {
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        figure.className = "project-workflow";
        image.src = figureItem.image;
        image.alt = figureItem.alt || `${item.title} figure`;
        image.loading = "lazy";
        figure.append(image);

        if (figureItem.caption) {
          const caption = document.createElement("figcaption");
          caption.textContent = figureItem.caption;
          figure.append(caption);
        }

        return figure;
      })
    );
    elements.push(figureGrid);
  }

  container.replaceChildren(...elements);
}

function syncHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

if (year) {
  year.textContent = new Date().getFullYear();
}

renderContent();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    window.localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

if (header) {
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
