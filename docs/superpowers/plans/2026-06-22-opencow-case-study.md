# OpenCow Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a stronger `opencow` project entry to the portfolio homepage and create a dedicated `opencow.html` case study page that balances design showcase and feature explanation.

**Architecture:** Keep the site as static HTML/CSS/JS, extend the existing shared visual system in `styles.css`, and add one dedicated case study page that reuses the same animation script. Update the homepage so `opencow` becomes the primary web/full-stack project entry without bloating the landing page.

**Canonical reference:** `docs/superpowers/specs/personal-showcase-guide.md`

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, GSAP ScrollTrigger

---

### Task 1: Replace the homepage web/full-stack placeholder with an OpenCow entry

**Files:**
- Modify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/index.html`

- [ ] Update the category link and project directory card so the web/full-stack slot points to `opencow.html`.
- [ ] Add a concise product-oriented description, highlight tags, and direct actions for the OpenCow project.
- [ ] Keep the rest of the homepage structure intact so the landing page remains clean.

### Task 2: Create the standalone OpenCow case study page

**Files:**
- Create: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/opencow.html`

- [ ] Build a complete standalone page with hero, product overview, design showcase, feature explanation, engineering notes, and closing CTA.
- [ ] Base the content on confirmed OpenCow capabilities already visible in the repository: workbench layout, chat flow, search/RAG, persistence, permissions/rollback, and local capability management.
- [ ] Use section composition instead of repetitive card stacks so the page feels like a polished case study rather than a generic portfolio template.

### Task 3: Extend shared styling for homepage entry and case study sections

**Files:**
- Modify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/styles.css`

- [ ] Add reusable styles for project tags, stronger project cards, case study layouts, feature rails, showcase panels, metrics, and responsive behavior.
- [ ] Keep the existing homepage visual language, but make the OpenCow case study feel more product-driven and information-dense.
- [ ] Preserve mobile readability with explicit small-screen fallbacks for every multi-column section.

### Task 4: Keep motion behavior working across the new page

**Files:**
- Modify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/script.js`

- [ ] Make sure the existing reveal and ambient animations still work for both pages without assuming homepage-only selectors.
- [ ] Avoid runtime errors if certain page-specific elements do not exist on one page.

### Task 5: Verify static output

**Files:**
- Verify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/index.html`
- Verify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/opencow.html`
- Verify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/styles.css`
- Verify: `/Users/apple/Desktop/2026/个人资料/tangshuang631.github.io/script.js`

- [ ] Run a static sanity check to confirm the new page links resolve and the HTML structure is valid enough to serve.
- [ ] Start a local static server and fetch both pages to confirm HTTP 200 responses.
- [ ] Report verification based on command output instead of assumption.
