export function setInitialTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export function toggleTheme() {
  const theme = getTheme();
  const nextTheme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  return nextTheme;
}

export function getTheme() {
  return document.documentElement.getAttribute("data-theme") as
    | "light"
    | "dark";
}
