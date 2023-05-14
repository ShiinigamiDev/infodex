const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const imgButtonTheme = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  const darkThemeActivated = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme");

  if (darkThemeActivated) {
    imgButtonTheme.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imgButtonTheme.setAttribute("src", "./src/imagens/moon.png");
  }
});
