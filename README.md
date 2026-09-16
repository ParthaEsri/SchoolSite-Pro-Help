# SchoolSite Pro Documentation

Static documentation website for SchoolSite Pro, including documentation, toolkit search, release notes, and installer downloads.

## New release procedure

1. Create and upload the signed installer to a GitHub release.
2. Open `js/data.js` and update only these values in `window.SCHOOL_SITE_RELEASE`:

```js
version: "1.9.8",
releaseDate: "New release date",
downloadUrl: "New installer URL"
```

3. Add the new release notes object at the top of `window.SCHOOL_SITE_RELEASE_NOTES`. Keep all older entries unchanged.
4. Run the checks:

```powershell
node --check .\js\data.js
git diff --check
```

5. Open `index.html#download` and verify the version, date, and installer link. Also check the overview button navigates to the download page.
6. Commit and push the updated files.

The header, footer, overview build labels, download page, installer link, and GitHub link read from the central release configuration automatically.
