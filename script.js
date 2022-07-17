/* Theme Toggle */
const toggles = document.querySelectorAll(".toggle");
const btns = document.querySelectorAll(".num");
const val = document.querySelector(".value");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
val.textContent = "";
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    document.body.classList = "";
    toggles.forEach((tog) => tog.classList.remove("toggle-background"));
    toggle.classList.add("toggle-background");
    if (toggle.classList.contains("one")) {
      document.body.classList = "theme-1";
      localStorage.setItem("theme", "theme-1");
    } else if (toggle.classList.contains("two")) {
      document.body.classList = "theme-2";
      localStorage.setItem("theme", "theme-2");
    } else if (toggle.classList.contains("three")) {
      document.body.classList = "theme-3";
      localStorage.setItem("theme", "theme-3");
    }
    toggle.classList.add("toggle-background");
  });
});

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme != null) {
    document.body.classList = localStorageTheme;
    toggles.forEach((tog) => tog.classList.remove("toggle-background"));
    if (localStorageTheme == "theme-1") one.classList.add("toggle-background");
    else if (localStorageTheme == "theme-2")
      two.classList.add("toggle-background");
    else if (localStorageTheme == "theme-3")
      three.classList.add("toggle-background");
  }
}
window.onload = checkTheme();
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (val.textContent == "ERROR") val.textContent = "";
    switch (btn.textContent) {
      case "DEL":
        val.textContent = val.textContent.slice(0, -1);
        break;
      case "x":
        val.textContent += "*";
        break;
      case "RESET":
        val.textContent = "";
        break;
      case "=":
        try {
          val.textContent = eval(val.textContent);
          if (
            val.textContent == "NaN" ||
            val.textContent == "undefined" ||
            val.textContent == "Infinity"
          )
            val.textContent = "ERROR";
        } catch {
          val.textContent = "ERROR";
        }
        break;
      default:
        val.textContent += btn.textContent;
    }
  });
});