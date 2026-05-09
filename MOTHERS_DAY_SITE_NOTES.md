# Mother's Day Website Notes

I want to make a static GitHub Pages website for Mother's Day.

The site should be simple HTML/CSS/JS, with no build tools required, so it can be uploaded directly to GitHub Pages.

## Main Requirements

1. Create a homepage for Mother's Day addressed to Mom.
2. Include a "Mom" section where I can write a personal letter to her.
3. Include separate sections for each of her kids:
   - Bryan
   - Meg
   - Curt
   - Nick
   - Cam
4. Each kid section should include:
   - The kid's name as the section title.
   - A photo gallery using pictures from that kid's folder.
   - A button/audio player for that kid's song.
5. The songs may be files the kids made for her or their mother/son song.
6. Audio files can be `.mp3` or `.m4a`.
7. Curt's song is an `.m4a` file called "What a Wonderful World", and the site should expect it at:

   ```text
   curt/What a Wonderful World.m4a
   ```

8. The site should work locally by opening `index.html`, and it should also work when uploaded to GitHub Pages.
9. Use relative paths only, because GitHub Pages needs them.
10. Do not overwrite or delete existing picture folders.
11. Make it warm, personal, and polished, but easy to edit later.

## Expected Child Folders

The child folders are expected to be named exactly:

```text
bryan
meg
curt
nick
cam
```

## Expected Files To Create

```text
index.html
styles.css
script.js
README.md
```

## README Should Explain

- Where to edit the Mom letter.
- Where to put each kid's song file.
- How to add or remove pictures.
- How to publish it on GitHub Pages.

## Song Path Notes

Default song paths can be:

```text
bryan/song.mp3
meg/song.mp3
curt/What a Wonderful World.m4a
nick/song.mp3
cam/song.mp3
```

If a song is `.m4a`, update that child's `data-song` path in `index.html` to use the `.m4a` filename exactly.

Filename capitalization and spacing matter on GitHub Pages, so paths should match the real files exactly.
