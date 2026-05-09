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
- `meg/song.mp3`
- `curt/What a Wonderful World.m4a`
- `nick/song.mp3`
- `cam/Thought You Should Know.mp4`

If a song uses another format or filename, update that child's `data-song` path in `index.html`. Filename capitalization and spacing matter on GitHub Pages.

## Change Pictures

The visible galleries currently use photos from:

- `pictures/bryan`
- `pictures/meg`
- `pictures/curt`
- `pictures/nick`
- `pictures/cam`
- `thank you`

Each child section has a `<div class="gallery">` in `index.html`. Add or remove `<img>` lines there, and keep the paths relative, like `pictures/bryan/photo-name.JPG`.

The Thank You section has its own folder named `thank you`. Add photos there, then add matching `<img>` lines to the `thank-you` section in `index.html`.

## Publish On GitHub Pages

Upload these files and the picture folders to a GitHub repository, then enable Pages from the repository settings. Use the branch root as the Pages source.
