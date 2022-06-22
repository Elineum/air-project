let languageSwither = document.querySelector(".page-head__button-wrap");
let languageSwitherBall = document.querySelector(".page-head__language-ball");
let languageSwitherText = document.querySelector(".page-head__language");
let nav = document.querySelector(".page-head__nav");
let navItemArrowL = document.querySelector(".page-head__item_arrow-left");
let navItemArrowR = document.querySelector(".page-head__item_arrow-right");
let navHiddenMenuL = document.querySelector(".page-head__inner-list_left");
let navHiddenMenuR = document.querySelector(".page-head__inner-list_right");
let navContactBlock = document.querySelector(".page-head__adapt-wrap");
let modalCloser = document.querySelectorAll(".js-close-modal");
let burgerLink = document.querySelectorAll(".js");
let modalShadow = document.querySelector(".window-box");
let modalOpenerRequest = document.querySelector(
  ".request-block__info-box-holder"
);
let modalOpenerMap = document.querySelector(".page-foot__interactive-map-wrap");
let footerMap = document.querySelector(".js-footer-map");
let beetrootText = document.querySelector(".js-beetroot-text");
let gdsText = document.querySelector(".js-gds-text");
let searchButton = document.querySelector(".js-search-button");
let searchInput = document.querySelector(".page-head__input-search");
let burgerWrap = document.querySelector(".js-burger-wrap");
let burgerContent = document.querySelector(".js-burger-content");
let interactiveMapList = document.querySelector(
  ".interactive-map__content-list"
);
let interactiveMapButton = document.querySelector(
  ".interactive-map__list-button"
);
let interactiveMapAllItems = document.querySelectorAll(
  "ul.interactive-map__content-list > li"
);
let interactiveMapClose = document.querySelector(
  ".interactive-map__button-close"
);
let modalIsActive;
let currentModal;
let navIsActive;
let currWidth = document.body.clientWidth;

[].forEach.call(modalCloser, (el) => {
  el.addEventListener("click", modalClose);
});

[].forEach.call(burgerLink, (el) => {
  el.addEventListener("click", burgerChanger);
});

languageSwither.addEventListener("click", languageSwitherClick);
interactiveMapButton.addEventListener("click", interactiveMapListToggler);
interactiveMapList.addEventListener("click", interactiveMapItemOpener);
modalOpenerRequest.addEventListener("click", openModal);
modalOpenerMap.addEventListener("click", openModal);
modalShadow.addEventListener("click", modalClose);
searchButton.addEventListener("click", toggleSearch);
burgerWrap.addEventListener("click", burgerChanger);
document.body.addEventListener("click", () => {
  modalIsActive = document.querySelector(".visible-modal");
  navIsActive = document.querySelector(".page-head__nav_active");
});
window.addEventListener("resize", adaptiveChanger);

function burgerChanger() {
  if (currWidth < 1280) {
    burgerWrap.classList.toggle("page-head__burger-wrap_active");
    burgerContent.classList.toggle("page-head__burger-button_active");
    navContactBlock.classList.toggle("page-head__adapt-wrap_active");
    nav.classList.toggle("page-head__nav_active");

    navIsActive
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  } else {
    return;
  }
}

function adaptiveChanger() {
  currWidth = document.body.clientWidth;

  if (320 <= currWidth && currWidth <= 1280) {
    beetrootText.textContent =
      "За пітдримки “Бітрут-Академії” була створенна Веб-розробка";
    gdsText.textContent = "Дизайн виконав: G.D.S Desing";
  } else {
    beetrootText.textContent = "Веб-розробка: “Бітрут-Академія”";
    gdsText.textContent = "Дизайн: G.D.S Desing";
  }
}

function openModal(e) {
  if (e.target.classList.contains("request-block__button")) {
    modalShadow.classList.remove("hide-modal-shadow");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "20px";

    if (e.target.classList.contains("request-block__button_help")) {
      let curr = document.querySelector(".window-box__help");
      curr.classList.add("visible-modal");
      currentModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_add-point")) {
      let curr = document.querySelector(".window-box__add-point");
      curr.classList.add("visible-modal");
      currentModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_add-info")) {
      let curr = document.querySelector(".window-box__add-info");
      curr.classList.add("visible-modal");
      currentModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_subscribe")) {
      let curr = document.querySelector(".window-box__news");
      curr.classList.add("visible-modal");
      currentModal = document.querySelector(".visible-modal");
    }
  } else if (e.target.closest(".page-foot__interactive-map-wrap")) {
    modalShadow.classList.remove("hide-modal-shadow");
    let curr = document.querySelector(".window-box__map");
    curr.classList.add("visible-modal");
    currentModal = document.querySelector(".visible-modal");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "20px";
  } else return;
}

function toggleSearch() {
  searchButton.classList.toggle("page-head__search-opener-active");
  searchInput.classList.toggle("page-head__input-search-active");
}

function modalClose(e) {
  if (
    e.target == modalShadow ||
    e.target.classList.contains("js-close-modal")
  ) {
    currentModal.classList.remove("visible-modal");
    modalShadow.classList.add("hide-modal-shadow");
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
  }
}

function languageSwitherClick() {
  languageSwither.classList.toggle("page-head__button-wrap_orange-bg");
  languageSwitherBall.classList.toggle("page-head__language-ball_EN");
  languageSwitherText.classList.toggle("page-head__language_EN");
  languageSwither.classList.contains("page-head__button-wrap_orange-bg")
    ? (languageSwitherText.textContent = "EN")
    : (languageSwitherText.textContent = "Укр");
}

function interactiveMapListToggler() {
  interactiveMapButton.classList.toggle("interactive-map__list-button-back");
  interactiveMapList.classList.toggle("interactive-map__content-list_blocker");
  for (let key of interactiveMapAllItems) {
    key.classList.remove("interactive-map__content-item_open");
  }
}

function interactiveMapItemOpener(e) {
  let interactiveMapLi = e.target.closest("li");
  let interactiveMapButton = e.target.closest("button");

  if (interactiveMapLi && !interactiveMapButton) {
    for (let key of interactiveMapAllItems) {
      key.classList.remove("interactive-map__content-item_open");
    }
    interactiveMapLi.classList.add("interactive-map__content-item_open");
  } else {
    for (let key of interactiveMapAllItems) {
      key.classList.remove("interactive-map__content-item_open");
    }
  }
}
