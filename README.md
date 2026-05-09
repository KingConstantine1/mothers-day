# Mother's Day Website

This is a static GitHub Pages site. Open `index.html` in a browser to preview it.

## Edit The Letter

Open `index.html` and replace the paragraphs inside:

```html
<article class="letter">
```

## Add Songs

Current song paths:

- `bryan/Coming Home.mp3`
- `meg/YTDown_YouTube_Trace-Adkins-You-re-gonna-miss-this-with_Media_igm2iGvo-us_001_480p.mp4`
- `curt/What a Wonderful World.m4a`
- `nick/Then They Do.mp4`
- `cam/Thought You Should Know.mp4`

If a song uses another format or filename, update that child's `data-song` path in `index.html`. Filename capitalization and spacing matter on GitHub Pages.

## Change Pictures

The visible galleries currently use photos from:

- `bryan`
- `meg`
- `curt`
- `nick`
- `cam`
- `future`

Each child section has a `<div class="gallery hex-gallery">` in `index.html`. Add or remove `<img>` lines there, and keep the paths relative, like `bryan/photo-name.JPG`.

The hex layout expects six outside photos and one center photo named `Middle` when available. If a kid does not have a `Middle` photo yet, the page shows an "Add Middle photo" placeholder.

The Future section has its own folder named `future`. Add photos there, then add matching `<img>` lines to the `future` section in `index.html`.

## Publish On GitHub Pages

Upload these files and the picture folders to a GitHub repository, then enable Pages from the repository settings. Use the branch root as the Pages source.
