const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const Dark_Theme = "dark";
const Light_Theme = "light";

//Dark or Light İmages

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0/ 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode(Dark_Theme) : imageMode(Light_Theme);
}

//Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", Dark_Theme);
    localStorage.setItem("theme", Dark_Theme);
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", Light_Theme);
    localStorage.setItem("theme", Light_Theme);
    toggleDarkLightMode(false);
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check Local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === Dark_Theme) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
