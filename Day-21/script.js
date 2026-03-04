// TEMP settings (no localStorage – playground safe)
let settings = {
  theme: "light",
  language: "en"
};

const title = document.getElementById("title");
const themeLabel = document.getElementById("themeLabel");
const langLabel = document.getElementById("langLabel");
const themeBtn = document.getElementById("themeBtn");
const langSelect = document.getElementById("langSelect");

const translations = {
  en: { title: "Settings Manager", theme: "Theme", lang: "Language" },
  te: { title: "సెట్టింగ్స్ మేనేజర్", theme: "థీమ్", lang: "భాష" },
  hi: { title: "सेटिंग्स मैनेजर", theme: "थीम", lang: "भाषा" }
};

function applySettings() {
  document.body.classList.toggle("dark", settings.theme === "dark");

  const t = translations[settings.language];
  title.textContent = t.title;
  themeLabel.textContent = t.theme;
  langLabel.textContent = t.lang;

  themeBtn.textContent =
    settings.theme === "dark" ? "Switch to Light" : "Switch to Dark";

  langSelect.value = settings.language;
}

themeBtn.onclick = () => {
  settings.theme = settings.theme === "light" ? "dark" : "light";
  applySettings();
};

langSelect.onchange = (e) => {
  settings.language = e.target.value;
  applySettings();
};

applySettings();