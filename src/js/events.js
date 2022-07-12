let languageInput = document.querySelector(".page-head__language-input");
let languageLabel = document.querySelector(".page-head__language-label");
let languageText = document.querySelector(".page-head__language-text");
let nav = document.querySelector(".page-head__nav");
let navDropArticle = document.querySelector(".js-articles");
let navDropBlogs = document.querySelector(".js-blogs");
let navDropResearch = document.querySelector(".js-research");
let navDropNews = document.querySelector(".js-news");
let navContactBlock = document.querySelector(".page-head__adapt-wrap");
let articleInput1 = document.querySelector("#articles-first");
let articleInput2 = document.querySelector("#articles-second");
let articleInput3 = document.querySelector("#articles-third");
let articleInput4 = document.querySelector("#articles-four");
let inputArray = document.querySelectorAll(".tab-array");
let eventInput1 = document.querySelector("#events-first");
let eventInput2 = document.querySelector("#events-second");
let closeModalArr = document.querySelectorAll(".js-close-modal");
let tabLink = document.querySelectorAll(".js-tab-link");
let fileDoc = document.querySelector(".window-box__file-doc");
let fileImg = document.querySelector(".window-box__file-img");
let aboutProjectLink = document.querySelector(".js-adaptive-href");
let footerMap = document.querySelector(".js-footer-map");
let beetrootText = document.querySelector(".js-beetroot-text");
let gdsText = document.querySelector(".js-gds-text");
let searchButton = document.querySelector(".js-search-button");
let searchInput = document.querySelector(".page-head__input-search");
let burgerWrap = document.querySelector(".js-burger-wrap");
let burgerContent = document.querySelector(".js-burger-content");
let burgerDrop = document.querySelector(".js-burger-dropmenu");
let burgetItems = document.querySelectorAll(".js-burger-link");
let burgerDropContent = document.querySelector(".page-head__inner-menu-wrap");
let modalShadow = document.querySelector(".window-box");
let modalNewsInnerList = document.querySelector(
  ".window-box__news-label-inner-list"
);
let modalInputBorders = document.querySelectorAll(".js-modal-input");
let modalSubscriLabel = document.querySelector(".window-box__news-label");
let modalSubscribeCheckbox = document.querySelectorAll(
  ".window-box__news-label-inner-input"
);
let modalOpenerMap = document.querySelector(".page-foot__interactive-map-wrap");
let modalOpenerRequest = document.querySelector(
  ".request-block__info-box-holder"
);
let interactiveMapList = document.querySelector(
  ".interactive-map__content-list"
);
let interactiveMapButton = document.querySelector(
  ".interactive-map__list-button"
);
let interactiveMapAllItems = document.querySelectorAll(
  "ul.interactive-map__content-list > li"
);
let interactiveMapModalAllItems = document.querySelectorAll(
  "ul.window-box__map-content-list > li"
);
let interactiveMapModalList = document.querySelector(
  ".window-box__map-content-list"
);
let interactiveMapClose = document.querySelector(
  ".interactive-map__button-close"
);
let currWidth = document.body.clientWidth;
let modalIsActive;
let currentModal;
let navIsActive;
let dropMenuActive;

languageInput.addEventListener("click", languageSwap);
searchButton.addEventListener("click", toggleSearch);
burgerWrap.addEventListener("click", burgerChanger);
burgerDrop.addEventListener("click", dropMenuStarter);
document.body.addEventListener("click", modalIsActiveCheck);
window.addEventListener("resize", adaptiveContent);
modalOpenerRequest.addEventListener("click", openModal);
modalOpenerMap.addEventListener("click", openModal);
modalShadow.addEventListener("click", closeModal);
interactiveMapButton.addEventListener("click", interactiveMapListToggler);
interactiveMapList.addEventListener("click", interactiveMapItemOpener);
interactiveMapModalList.addEventListener("click", interactiveMapItemOpener);
fileDoc.addEventListener("change", showLoadStatus);
fileImg.addEventListener("change", showLoadStatus);
[].forEach.call(closeModalArr, (el) => {
  el.addEventListener("click", closeModal);
});
[].forEach.call(tabLink, (el) => {
  el.addEventListener("click", tabSwitcher);
});
[].forEach.call(burgetItems, (el) => {
  el.addEventListener("click", burgerChanger);
});
[].forEach.call(modalInputBorders, (el) => {
  el.addEventListener("input", recolorBorder);
});
[].forEach.call(modalSubscribeCheckbox, (el) => {
  el.addEventListener("change", anyCheckboxes);
});

function anyCheckboxes() {
  let subscribeCheckbox = [];
  modalSubscribeCheckbox.forEach((el) => {
    subscribeCheckbox.push(el.checked);
    if (subscribeCheckbox.some((key) => key === true)) {
      modalSubscriLabel.classList.add("orange-border");
      modalNewsInnerList.classList.add("orange-border");
    } else {
      modalSubscriLabel.classList.remove("orange-border");
      modalNewsInnerList.classList.remove("orange-border");
    }
  });
  subscribeCheckbox = [];
}

function recolorBorder(e) {
  e.target.value
    ? e.target.classList.add("orange-border")
    : e.target.classList.remove("orange-border");
}

function modalIsActiveCheck() {
  modalIsActive = document.querySelector(".visible-modal");
  navIsActive = document.querySelector(".page-head__nav_active");
}

function dropMenuStarter() {
  if (currWidth < 1280) {
    burgerDrop.classList.toggle("page-head__item-link_revert");
    burgerDropContent.classList.toggle("page-head__inner-menu-wrap_active");
    dropMenuActive = document.querySelector(".page-head__item-link_revert");
  }
}

function burgerChanger() {
  if (currWidth < 1280) {
    burgerWrap.classList.toggle("page-head__burger-wrap_active");
    burgerContent.classList.toggle("page-head__burger-button_active");
    navContactBlock.classList.toggle("page-head__adapt-wrap_active");
    nav.classList.toggle("page-head__nav_active");

    navIsActive
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");

    dropMenuActive ? dropMenuStarter() : null;
  }
}

function tabSwitcher(element) {
  let currentTarget = element.target;
  currentTarget.classList.contains("js-articles")
    ? remSetChecked(articleInput1)
    : currentTarget.classList.contains("js-blogs")
    ? remSetChecked(articleInput2)
    : currentTarget.classList.contains("js-research")
    ? remSetChecked(articleInput3)
    : currentTarget.classList.contains("js-news")
    ? remSetChecked(articleInput4)
    : currentTarget.classList.contains("js-releases")
    ? remSetChecked(eventInput1)
    : currentTarget.classList.contains("js-announces")
    ? remSetChecked(eventInput2)
    : null;

  currWidth < 1280 && currentTarget.classList.contains("page-head__inner-link")
    ? burgerChanger
    : null;
}

function remSetChecked(currentInput) {
  inputArray.forEach((input) => {
    input.removeAttribute("checked");
  });
  currentInput.checked = true;
}

function adaptiveContent() {
  currWidth = document.body.clientWidth;

  if (320 <= currWidth && currWidth < 1280) {
    aboutProjectLink.href = "#about-project";
    beetrootText.textContent =
      "За пітдримки “Бітрут-Академії” була створенна Веб-розробка";
    gdsText.textContent = "Дизайн виконав: G.D.S Desing";
  } else {
    beetrootText.textContent = "Веб-розробка: “Бітрут-Академія”";
    gdsText.textContent = "Дизайн: G.D.S Desing";
    aboutProjectLink.removeAttribute("href");
  }
}
adaptiveContent();

function showLoadStatus() {
  if (fileDoc.files.length > 0) {
    fileDoc.classList.remove("window-box__file-doc_hidden");
  } else if (fileImg.files.length > 0) {
    fileImg.classList.remove("window-box__file-img_hidden");
  } else {
    fileDoc.classList.add("window-box__file-doc_hidden");
    fileImg.classList.add("window-box__file-img_hidden");
  }
}
showLoadStatus();

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

function closeModal(e) {
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

function toggleSearch() {
  searchButton.classList.toggle("page-head__search-opener-active");
  searchInput.classList.toggle("page-head__input-search-active");
}

function languageSwap() {
  if (languageInput.checked) {
    languageLabel.classList.add("page-head__language-label_swapped");
    languageText.textContent = "EN";
  } else {
    languageLabel.classList.remove("page-head__language-label_swapped");
    languageText.textContent = "Укр";
  }
}

function interactiveMapListToggler() {
  interactiveMapButton.classList.toggle("interactive-map__list-button-back");
  interactiveMapList.classList.toggle("interactive-map__content-list_blocker");
  for (let key of interactiveMapAllItems) {
    key.classList.remove("interactive-map__content-item_open");
  }
}

function interactiveMapItemOpener(e) {
  let mainPageMapLi = e.target.closest("li");
  let mainPageMapBtn = e.target.closest("button");

  if (
    (mainPageMapLi
      ? mainPageMapLi.classList.contains("interactive-map__content-item")
      : false) ||
    (mainPageMapBtn
      ? mainPageMapBtn.classList.contains("interactive-map__button-close")
      : false)
  ) {
    if (mainPageMapLi && !mainPageMapBtn) {
      for (let key of interactiveMapAllItems) {
        key.classList.remove("interactive-map__content-item_open");
      }
      interactiveMapButton.classList.add("interactive-map__list-button-back");
      interactiveMapList.classList.add("interactive-map__content-list_blocker");
      mainPageMapLi.classList.add("interactive-map__content-item_open");
    } else {
      for (let key of interactiveMapAllItems) {
        key.classList.remove("interactive-map__content-item_open");
      }
      interactiveMapListToggler();
    }
  } else if (
    (mainPageMapLi
      ? mainPageMapLi.classList.contains("window-box__map-content-item")
      : false) ||
    (mainPageMapBtn
      ? mainPageMapBtn.classList.contains("window-box__map-button-close")
      : false)
  ) {
    if (mainPageMapLi && !mainPageMapBtn) {
      for (let key of interactiveMapModalAllItems) {
        key.classList.remove("window-box__map-content-item_open");
      }
      mainPageMapLi.classList.add("window-box__map-content-item_open");
    } else {
      for (let key of interactiveMapModalAllItems) {
        key.classList.remove("window-box__map-content-item_open");
      }
    }
  }
}
