const player = document.querySelector(".player");
const audio = document.querySelector("#audio-player");
const playerTitle = document.querySelector("#player-title");
const closePlayer = document.querySelector(".close-player");
const memories = document.querySelector("#memories");
const siteFooter = document.querySelector("#site-footer");
const kidSelectors = document.querySelectorAll(".kid-selector button");
const pageSections = document.querySelectorAll(".page-section");
const backButtons = document.querySelectorAll(".back-button");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

const playSong = (song, title) => {
  player.hidden = false;
  audio.src = song;
  playerTitle.textContent = title;

  audio.play().catch(() => {
    playerTitle.textContent = `${title} - press play`;
  });
};

const showKid = (kidId) => {
  document.body.classList.add("is-page-open");
  memories.hidden = false;
  siteFooter.hidden = false;

  pageSections.forEach((section) => {
    section.hidden = section.id !== kidId;
  });

  kidSelectors.forEach((selector) => {
    selector.classList.toggle("is-active", selector.dataset.target === kidId);
  });

  document.querySelector(`#${kidId}`).scrollIntoView({ behavior: "smooth", block: "start" });
};

kidSelectors.forEach((button) => {
  button.addEventListener("click", () => {
    showKid(button.dataset.target);

    if (button.dataset.song) {
      playSong(button.dataset.song, button.dataset.title);
    }
  });
});

audio.addEventListener("error", () => {
  const activeButton = [...kidSelectors].find((button) => button.dataset.song === audio.getAttribute("src"));

  if (activeButton) {
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

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    player.hidden = true;
    memories.hidden = true;
    siteFooter.hidden = true;
    document.body.classList.remove("is-page-open");

    pageSections.forEach((section) => {
      section.hidden = true;
    });

    kidSelectors.forEach((selector) => {
      selector.classList.remove("is-active");
    });

    document.querySelector("#top").scrollIntoView({ behavior: "smooth", block: "start" });
  });
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
