# SchoolSite Pro Documentation

Static documentation website for SchoolSite Pro, including documentation, toolkit search, release notes, and installer downloads.

## Page structure

The site has four user-facing entry points:

- `overview.html` renders the product and planning workflow.
- `docs.html` renders the documentation topics.
- `toolkit.html` renders the tool groups and descriptions.
- `download.html` renders the current installer and release notes.

These files are intentionally shells. `js/page.js` is the one shared renderer for these four pages; it generates their visible content from `js/docs.js` and `js/data.js`, so maintainers do not need to edit HTML or CSS when adding documentation, tools, or a release. It is intentionally kept separate from the main application renderer because these pages are separate entry URLs.

The interactive application and these entry pages require JavaScript to render data-driven content. This keeps maintenance simple, but no JavaScript-based site can guarantee that every external AI crawler executes every script. For maximum crawler coverage, publish a prerendered build generated from the same two data files; do not manually edit the generated HTML.

The interactive `index.html` remains the application shell for search, filters, article rendering, and the visual tour. When adding application behavior, keep the order in `index.html` as: route state, shared shell/sidebar rendering, page rendering, content rendering helpers, search/filter behavior, then small utility functions. Keep release configuration in `js/data.js`, article content in `js/docs.js`, and shared entry-page rendering in `js/page.js`.

## Stylesheet structure

- `css/styles.css` contains shared reset, typography, navigation, sidebar, buttons, search overlay, footer, and responsive shell rules.
- `css/overview.css` contains the overview hero, application preview, tour, workflow, cards, and callout styles.
- `css/docs.css` contains documentation lists, article layout, tables, images, and release-note styles.
- `css/toolkit.css` contains toolkit cards, categories, grids, and modal styles.
- `css/download.css` contains installer layout, release card, metadata, and installation-step styles.

Each page loads the shared stylesheet plus only its own page stylesheet. Keep new visual rules in the file that owns the page or component; do not add page-specific rules back to `styles.css`.

## New release procedure

1. Create and upload the signed installer to a GitHub release.
2. Open `js/data.js` and update only these values in `window.SCHOOL_SITE_RELEASE`:

```js
version: "1.9.8",
releaseDate: "New release date",
downloadUrl: "New installer URL"
```

3. Add the new release notes object at the top of `window.SCHOOL_SITE_RELEASE_NOTES`. Keep all older entries unchanged.

Use this format so the release notes page automatically displays the new release as a separate entry:

```js
{
	version: "1.9.8",
	date: "October 2026",
	description: "Short summary of the release.",
	features: [
		"One feature or fix.",
		"Another feature or fix."
	]
},
```

Put each feature or fix in its own `features` item. Do not add release text to the legacy `Release Notes` document body in `js/data.js`.
4. Run the checks:

```powershell
node --check .\js\data.js
git diff --check
```

5. Open `index.html#download` and verify the version, date, and installer link. Also check the overview button navigates to the download page.
6. Commit and push the updated files.

The header, footer, overview build labels, download page, installer link, and GitHub link read from the central release configuration automatically.


## Document structure and creation standards

Keep all article content in `js/docs.js` instead of `js/data.js`. This keeps the release metadata, app logic, and documentation content separate, which makes future edits easier to review and reduces accidental confusion between configuration code and article content.

### Required document object format

Each document entry must follow this shape:

```js
{
  id: 'doc-slug',
  section: 'Start here',
  title: 'Document Title',
  summary: 'A short summary shown in search and list views.',
  image: {
    src: 'https://example.com/path/to/image.png',
    alt: 'Accessible description of the image',
    caption: 'Optional caption shown beneath the image.'
  },
  body: [
    [
      'Section Heading',
      [
        { type: 'paragraph', text: 'This is a paragraph.' },
        { type: 'image', src: 'https://example.com/example.png', alt: 'Example', caption: 'Optional caption.' },
        { type: 'list', items: [
          'First bullet item',
          { text: 'Linked item', href: '#doc/another-doc', onClick: "event.preventDefault(); route('doc', 'another-doc');" }
        ] }
      ]
    ],
    [
      'Another Section',
      {
        type: 'table',
        headers: ['Field', 'Description'],
        rows: [
          ['Study Areas', 'Defines the district planning geography.'],
          ['Schools', 'Represents the district campuses.']
        ]
      }
    ]
  ]
}
```

### Supported block types

Use these standard content block patterns:

- `paragraph`: `{ type: 'paragraph', text: '...' }`
- `image`: `{ type: 'image', src: '...', alt: '...', caption: '...' }`
- `list`: `{ type: 'list', items: [...] }` for bullets
- `ordered`: `{ type: 'ordered', items: [...] }` for numbered lists
- `table`: `{ type: 'table', headers: [...], rows: [[...], [...]] }`
- `section`: for nested groups inside a page, using `blocks: [...]`
- plain strings for simple text-only blocks when the content is intentionally minimal

### Content authoring pattern

Every article body is structured as a series of sections. Each section uses this pattern:

```js
[
  'Section Heading',
  [
    { type: 'paragraph', text: 'This is a paragraph.' },
    { type: 'image', src: 'https://example.com/image.png', alt: 'Example', caption: 'Example caption.' },
    { type: 'list', items: [
      'First bullet item',
      'Second bullet item',
      { text: 'Linked item', href: '#doc/another-doc', onClick: "event.preventDefault(); route('doc', 'another-doc');" }
    ] }
  ]
]
```

This is the standard format for a single section in the article body. The heading is the first item in the array, and the second item contains the actual content blocks.

### Heading, bold text, and paragraph examples

Use plain text for a heading-like block, and use `**` around words or phrases to create bold inline emphasis:

```js
{ type: 'paragraph', text: 'This is a normal paragraph.' }
{ type: 'paragraph', text: '**Please Note:** This line is bolded.' }
{ type: 'paragraph', text: 'Maturation Student Yield Factors' }
```

If you want the content to read like a section label, keep it short and avoid ending it with a period. The renderer will treat a short, non-sentence value as a stronger heading-style block.

### Bullet list and nested list examples

```js
{ type: 'list', items: [
  'Top-level bullet item',
  {
    text: 'Parent item with subitems',
    subitems: [
      'Child bullet one',
      'Child bullet two'
    ]
  }
] }
```

Use `subitems` for child bullets that belong under a parent item. This is the preferred pattern when the legacy source uses parent/child lists.

### Ordered list / step examples

```js
{ type: 'ordered', items: [
  'Open the Forecasting ribbon.',
  'Click Forecast Reports.',
  'Choose the study areas to display.'
] }
```

Use `ordered` when the source content is a numbered process. If the source text includes a list of steps, keep the order exactly as written.

### Table examples

```js
{
  type: 'table',
  headers: ['Field', 'Description'],
  rows: [
    ['Study Areas', 'Defines the planning geography.'],
    ['Schools', 'Represents district campuses.'],
    ['Students', 'Stores geocoded resident data.']
  ]
}
```

Tables should be used only when the source page contains a real comparison or data table. Keep headers and row values complete and readable.

### Image examples

```js
{ type: 'image', src: 'https://example.com/path/to/image.png', alt: 'Accessible description', caption: 'Optional image caption.' }
```

Use a short but descriptive `alt` value. Captions are optional but useful when the source page includes an explanatory figure or screenshot.

### Link and routing conventions

- Internal documentation links should use the `route()` pattern:
  ```js
  { text: 'Create Study Areas', href: '#doc/create-study-areas', onClick: "event.preventDefault(); route('doc', 'create-study-areas');" }
  ```
- Avoid raw external URLs in the docs content unless the source intentionally requires them.
- Preserve original wording from the legacy help pages when migrating content.

### Writing guidelines

- Keep the document slug stable and lowercase, using kebab-case values such as `create-study-areas`.
- Match the source structure and maintain heading order from the old documentation.
- Use `title` and `summary` to keep the listing pages readable.
- Keep image paths local or source-based; prefer image assets in the repo when available.
- Use tables only when the legacy source uses a table, and keep row content complete and readable.
- Use nested `subitems` for bullet hierarchies when the legacy content has parent and child bullets.
- Keep formatting consistent: headings, bold fields, and quotations should stay close to the source wording.
- Preserve exact wording from the legacy source unless the project explicitly requires a minor internal-link update.
- Do not add old HTML help URLs into the new docs unless the external source page is intentionally required.

### Quick template to copy

```js
{
  id: 'new-doc-slug',
  section: 'Forecasts',
  title: 'Document Title',
  summary: 'Short summary for the listing and search results.',
  image: {
    src: 'https://example.com/image.png',
    alt: 'Brief description of image',
    caption: 'Optional figure caption.'
  },
  body: [
    [
      'Overview',
      [
        { type: 'paragraph', text: 'Intro paragraph text.' },
        { type: 'paragraph', text: '**Please Note:** This is bold inline text.' }
      ]
    ],
    [
      'How to do it',
      {
        type: 'ordered',
        items: [
          'Step one.',
          'Step two.',
          'Step three.'
        ]
      }
    ],
    [
      'Key points',
      {
        type: 'list',
        items: [
          'Bullet one',
          {
            text: 'Parent bullet',
            subitems: [
              'Child bullet one',
              'Child bullet two'
            ]
          }
        ]
      }
    ],
    [
      'Reference table',
      {
        type: 'table',
        headers: ['Column', 'Value'],
        rows: [
          ['Example', 'Value']
        ]
      }
    ],
    [
      'Example image',
      [
        { type: 'image', src: 'https://example.com/example.png', alt: 'Example image', caption: 'Example caption.' }
      ]
    ]
  ]
}
```

### Validation before committing

```powershell
node --check .\js\data.js
node --check .\js\docs.js
git diff --check
```

The documentation content should live in `js/docs.js`, while release metadata and app configuration stay in `js/data.js`.
