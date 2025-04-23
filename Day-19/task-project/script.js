let tabsContainer = document.querySelector(".tabs");
let tabHeader = document.querySelector(".tab-headers");
let tabContent = document.querySelector(".tab-contents");

tabHeader.addEventListener("click", (e) => {
  e.preventDefault();

  // get the target element
  let eventTarget = e.target;
  if (eventTarget === tabHeader) return;

  // add active class for the target tab
  [...tabHeader.children].forEach((el) => {
    if (el === eventTarget) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // loop each element and find the correponding content
  [...tabContent.children].forEach((el) => {
    if (el.dataset.tab === eventTarget.dataset.tab) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

// my custom event
function switchToTab(keyNum) {
  const myEvent = new CustomEvent("customTabSwitch", {
    detail: { keyNum },
  });
  document.dispatchEvent(myEvent);
}

// listen my custom event
document.addEventListener("customTabSwitch", (e) => {
  let keyNumber = String(e.detail.keyNum);

  [...tabHeader.children].forEach((el) => {
    if (el.dataset.tab === keyNumber) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  [...tabContent.children].forEach((el) => {
    if (el.dataset.tab === keyNumber) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

// 
document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab(1);
  if (e.key === "2") switchToTab(2);
  if (e.key === "3") switchToTab(3);
});
