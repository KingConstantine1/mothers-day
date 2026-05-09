const player = document.querySelector(".player");
const audio = document.querySelector("#audio-player");
const playerTitle = document.querySelector("#player-title");
const closePlayer = document.querySelector(".close-player");
const songButtons = document.querySelectorAll(".song-button");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

songButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("is-missing")) {
      return;
    }

    const song = button.dataset.song;
    const title = button.dataset.title;

    player.hidden = false;
    audio.src = song;
    playerTitle.textContent = title;

    audio.play().catch(() => {
      playerTitle.textContent = `${title} - press play`;
    });
  });
});

audio.addEventListener("error", () => {
  const activeButton = [...songButtons].find((button) => button.dataset.song === audio.getAttribute("src"));

  if (activeButton) {
    activeButton.textContent = "Add Song";
    activeButton.classList.add("is-missing");
    activeButton.setAttribute("aria-label", `${activeButton.dataset.title} is not added yet`);
  }

  playerTitle.textContent = "Song file not found yet";
});

closePlayer.addEventListener("click", () => {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  player.hidden = true;
});

document.querySelectorAll(".gallery img").forEach((image) => {
  image.tabIndex = 0;

  const openPhoto = () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  };

  image.addEventListener("click", openPhoto);
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPhoto();
    }
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
