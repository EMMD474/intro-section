const menuOpen = document.getElementsByClassName("menu")[0];
const menuClose = document.getElementsByClassName("menu-close")[0];
const menu = document.getElementsByClassName("display")[0];
const nana = document.getElementsByClassName("try")[0];

menuOpen.addEventListener("click", ()=> {
    menu.classList.add("active")
    menuClose.style.display = "block"
    menuOpen.style.display = "none"
    nana.classList.add("active");
})

menuClose.addEventListener("click", ()=> {
    menu.classList.remove("active")
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
    nana.classList.remove("active");

})

const hoverButtons = document.getElementsByClassName("hover");
const imgButtons = document.getElementsByClassName("img");

for (let i = 0; i < hoverButtons.length; i++) {
  let hoverButton = hoverButtons[i];
  let imgButton = imgButtons[i];

  hoverButton.addEventListener("mouseover", () => {
    imgButton.src = "images/icon-arrow-up.svg";
  });

  hoverButton.addEventListener("mouseout", () => {
    imgButton.src = "images/icon-arrow-down.svg";
  });
}

const clickButtons = document.getElementsByClassName("btn");
const imageButtons = document.getElementsByClassName("image");

for (let i = 0; i < clickButtons.length; i++) {
  let clickButton = clickButtons[i];
  let imageButton = imageButtons[i];

  clickButton.addEventListener("click", () => {
    imageButton.src = "images/icon-arrow-up.svg";
  });

  clickButton.addEventListener("mouseout", () => {
    imageButton.src = "images/icon-arrow-down.svg";
  });
}

