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
let modalMap = document.querySelector(".page-foot__interactive-map-wrap");
let footerMap = document.querySelector(".js-footer-map");
let beetrootText = document.querySelector(".js-beetroot-text");
let gdsText = document.querySelector(".js-gds-text");
let projPhotoBig = document.querySelector(".js-proj-photo-big");
let projPhoto1 = document.querySelector(".js-proj-photo-1");
let projPhoto2 = document.querySelector(".js-proj-photo-2");
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
let activeModal;
let currWidth = document.body.clientWidth;
//////////////////////////////////////
console.log(currWidth);

if (768 <= currWidth && currWidth <= 1024) {
  footerMap.src = "src/img/interactive-map-big.png";
  beetrootText.textContent =
    "За пітдримки “Бітрут-Академії” була створенна Веб-розробка";
  gdsText.textContent = "Дизайн виконав: G.D.S Desing";
  projPhotoBig.src = "src/img/projBigPhotoTablet.png";
  projPhoto1.src = "src/img/projPhoto1Tablet.png";
  projPhoto2.src = "src/img/projPhoto2Tablet.png";
} else {
  footerMap.src = "src/img/interactive-map-small.png";
  beetrootText.textContent = "Веб-розробка: “Бітрут-Академія”";
  gdsText.textContent = "Дизайн: G.D.S Desing";
  projPhotoBig.src = "src/img/projBigPhoto.png";
  projPhoto1.src = "src/img/projPhoto1.png";
  projPhoto2.src = "src/img/projPhoto2.png";
}

window.addEventListener("resize", adaptiveChanger);

function adaptiveChanger() {
  currWidth = document.body.clientWidth;
  if (768 <= currWidth && currWidth <= 1024) {
    footerMap.src = "src/img/interactive-map-big.png";
    beetrootText.textContent =
      "За пітдримки “Бітрут-Академії” була створенна Веб-розробка";
    gdsText.textContent = "Дизайн виконав: G.D.S Desing";
    projPhotoBig.src = "src/img/projBigPhotoTablet.png";
    projPhoto1.src = "src/img/projPhoto1Tablet.png";
    projPhoto2.src = "src/img/projPhoto2Tablet.png";
  } else {
    footerMap.src = "src/img/interactive-map-small.png";
    beetrootText.textContent = "Веб-розробка: “Бітрут-Академія”";
    gdsText.textContent = "Дизайн: G.D.S Desing";
    projPhotoBig.src = "src/img/projBigPhoto.png";
    projPhoto1.src = "src/img/projPhoto1.png";
    projPhoto2.src = "src/img/projPhoto2.png";
  }
}
/////////////////////////////////////

[].forEach.call(modalCloser, (el) => {
  el.addEventListener("click", modalClose);
});

if (modalIsActive) {
  document.body.style.overflow = "hidden";
}

document.body.addEventListener("click", () => {
  modalIsActive = document.querySelector(".visible-modal");
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
  modalMap.addEventListener("click", openModal);
  shadowModal.addEventListener("click", modalClose);
}
listenerAdder();

function openModal(e) {
  if (e.target.classList.contains("request-block__button")) {
    shadowModal.classList.remove("hide-modal-shadow");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "20px";

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
  } else if (e.target.closest(".page-foot__interactive-map-wrap")) {
    shadowModal.classList.remove("hide-modal-shadow");
    let curr = document.querySelector(".window-box__map");
    curr.classList.add("visible-modal");
    activeModal = document.querySelector(".visible-modal");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "20px";
  } else return;
}

function modalClose(e) {
  if (
    e.target == shadowModal ||
    e.target.classList.contains("js-close-modal")
  ) {
    activeModal.classList.remove("visible-modal");
    shadowModal.classList.add("hide-modal-shadow");
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
