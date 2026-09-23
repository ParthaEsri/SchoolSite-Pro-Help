/*
 * Shared entry-page renderer.
 *
 * The four public page files are intentionally thin shells. Maintainers update
 * only js/docs.js and js/data.js; this file turns that content into each page.
 */
(function () {
  const page = document.body.dataset.page || 'overview';
  const release = window.SCHOOL_SITE_RELEASE;
  const docs = window.SCHOOL_SITE_DOCS || [];
  const tools = window.SCHOOL_SITE_TOOLS || [];
  const linkFor = id => `index.html#doc/${id}`;
  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  const pageLinks = [
    ['overview', 'Overview', 'overview.html'],
    ['docs', 'Documentation', 'docs.html'],
    ['toolkit', 'Toolkit', 'toolkit.html'],
    ['download', 'Download', 'download.html']
  ];

  // Render the shared navigation and footer used by every entry page.
  function renderShell() {
    document.querySelector('[data-page-nav]').innerHTML = pageLinks.map(([id, label, href]) =>
      `<a class="${page === id ? 'active' : ''}" href="${href}">${label}</a>`
    ).join('');
    document.querySelector('[data-page-footer]').innerHTML = `
      <strong>${escapeHtml(release.productName)}</strong>
      <div class="footer-links">${pageLinks.map(([, label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>`;
  }

  // Turn one document record into a linked item for the documentation page.
  function documentLink(doc) {
    return `<li><a href="${linkFor(doc.id)}">${escapeHtml(doc.title)}</a>${doc.summary ? `: ${escapeHtml(doc.summary)}` : ''}</li>`;
  }

  // Build the overview from the available document sections.
  function renderOverview() {
    const sections = [...new Set(docs.map(doc => doc.section))];
    return `
      <header class="page-head"><span class="eyebrow">${escapeHtml(release.productName)}</span><h1>Plan smarter. See the whole picture.</h1><p>Documentation, tools, and downloads for school planning, redistricting, forecasting, reports, and GIS analysis.</p></header>
      <section><h2>Explore the documentation</h2><ul>${sections.map(section => {
        const doc = docs.find(item => item.section === section);
        return doc ? `<li><a href="${linkFor(doc.id)}">${escapeHtml(section)}</a>: ${escapeHtml(doc.summary || doc.title)}</li>` : '';
      }).join('')}</ul></section>
      <section><h2>Planning workflow</h2><ol><li>Prepare and validate district data.</li><li>Create a redistricting plan or forecast.</li><li>Analyze boundaries, students, capacity, and reports.</li><li>Export results for planning and stakeholder review.</li></ol></section>`;
  }

  // Group every document by its configured section.
  function renderDocs() {
    const groups = [...new Set(docs.map(doc => doc.section))];
    return `<header class="page-head"><span class="eyebrow">DOCUMENTATION</span><h1>${escapeHtml(release.productName)} documentation</h1><p>Step-by-step guidance generated from the local document library.</p></header>${groups.map(section => `<section><h2>${escapeHtml(section)}</h2><ul>${docs.filter(doc => doc.section === section).map(documentLink).join('')}</ul></section>`).join('')}<p><a class="primary" href="index.html#docs">Open searchable documentation</a></p>`;
  }

  // Group every toolkit item by its configured category.
  function renderToolkit() {
    const categories = [...new Set(tools.map(tool => tool.category || 'Other'))];
    return `<header class="page-head"><span class="eyebrow">TOOLKIT</span><h1>Find the right ${escapeHtml(release.productName)} tool</h1><p>Tool descriptions and prerequisites are generated from the local toolkit data.</p></header>${categories.map(category => `<section><h2>${escapeHtml(category)}</h2><ul>${tools.filter(tool => (tool.category || 'Other') === category).map(tool => `<li><strong>${escapeHtml(tool.name)}</strong>: ${escapeHtml(tool.desc || '')}</li>`).join('')}</ul></section>`).join('')}<p><a class="primary" href="index.html#toolkit">Open searchable toolkit</a></p>`;
  }

  // Render the current release and the latest release-note entry.
  function renderDownload() {
    const latest = (window.SCHOOL_SITE_RELEASE_NOTES || [])[0];
    return `<header class="page-head"><span class="eyebrow">DOWNLOADS</span><h1>Download ${escapeHtml(release.productName)}</h1><p>Install the current release and review the latest changes.</p></header><section><h2>Current release: ${escapeHtml(release.version)}</h2><p>Released ${escapeHtml(release.releaseDate)}. Requires ${escapeHtml(release.requirements)}.</p><p><a class="primary" href="${escapeHtml(release.downloadUrl)}">Download ${escapeHtml(release.productName)} ${escapeHtml(release.version)}</a></p></section>${latest ? `<section><h2>Latest release notes</h2><p>${escapeHtml(latest.description)}</p><ul>${latest.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join('')}</ul></section>` : ''}<p><a href="index.html#doc/release-notes">Read all release notes</a></p>`;
  }

  // Select the page renderer and place its output in the shell.
  function renderPage() {
    renderShell();
    const renderers = { overview: renderOverview, docs: renderDocs, toolkit: renderToolkit, download: renderDownload };
    document.querySelector('[data-page-content]').innerHTML = renderers[page] ? renderers[page]() : renderOverview();
  }

  renderPage();
})();
