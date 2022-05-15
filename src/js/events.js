let languageSwither = document.querySelector(".page-head__button-wrap");
let navItemArrowL = document.querySelector(".page-head__item_arrow-left");
let navItemArrowR = document.querySelector(".page-head__item_arrow-right");
let navHiddenMenuL = document.querySelector(".page-head__inner-list_left");
let navHiddenMenuR = document.querySelector(".page-head__inner-list_right");
let languageSwitherBall = document.querySelector(".page-head__language-ball");
let languageSwitherText = document.querySelector(".page-head__language");
let modalCloser = document.querySelectorAll(".js-close-modal");
let shadowModal = document.querySelector(".window-box");
let modalStarts = document.querySelector(".request-block__info-box-holder");
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
let activeModal;

[].forEach.call(modalCloser, (el) => {
  el.addEventListener("click", modalClose);
});

function listenerAdder() {
  languageSwither.addEventListener("click", languageSwitherClick);
  navItemArrowL.addEventListener("mouseenter", navMenuLeft);
  navItemArrowL.addEventListener("mouseleave", navMenuLeft);
  navItemArrowR.addEventListener("mouseenter", navMenuRight);
  navItemArrowR.addEventListener("mouseleave", navMenuRight);
  interactiveMapButton.addEventListener("click", interactiveMapListToggler);
  interactiveMapList.addEventListener("click", interactiveMapItemOpener);
  modalStarts.addEventListener("click", openModal);
  shadowModal.addEventListener("click", modalClose);
}
listenerAdder();

function openModal(e) {
  if (e.target.classList.contains("request-block__button")) {
    shadowModal.classList.remove("hide-modal-shadow");

    if (e.target.classList.contains("request-block__button_help")) {
      let curr = document.querySelector(".window-box__help");
      curr.classList.add("visible-modal");
      activeModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_add-point")) {
      let curr = document.querySelector(".window-box__add-point");
      curr.classList.add("visible-modal");
      activeModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_add-info")) {
      let curr = document.querySelector(".window-box__add-info");
      curr.classList.add("visible-modal");
      activeModal = document.querySelector(".visible-modal");
    } else if (e.target.classList.contains("request-block__button_subscribe")) {
      let curr = document.querySelector(".window-box__news");
      curr.classList.add("visible-modal");
      activeModal = document.querySelector(".visible-modal");
    }
  } else return;
}

function modalClose(e) {
  if (
    e.target == shadowModal ||
    e.target.classList.contains("js-close-modal")
  ) {
    activeModal.classList.remove("visible-modal");
    shadowModal.classList.add("hide-modal-shadow");
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
  let interactiveMapButtonHehe = e.target.closest("button");

  if (interactiveMapLi && !interactiveMapButtonHehe) {
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

function navMenuLeft() {
  if (navHiddenMenuL.classList.contains("hidden")) {
    navHiddenMenuL.classList.toggle("hidden");
  } else setTimeout(() => navHiddenMenuL.classList.toggle("hidden"), 500);
}

function navMenuRight() {
  if (navHiddenMenuR.classList.contains("hidden")) {
    navHiddenMenuR.classList.toggle("hidden");
  } else setTimeout(() => navHiddenMenuR.classList.toggle("hidden"), 500);
}
