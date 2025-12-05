// header
const lenguageChangerBtn = document.getElementById("lenguageChangeBtn");
const themeToggle = document.getElementById("themeToggle");

// main
const selectorPdf = document.getElementById("selectorPdf");
const selectedFile = document.getElementById("selectedFile");
const checkboxContainer = document.getElementById("checkboxContainer");
const includeDateCheckbox = document.getElementById("includeDateCheckbox");
const checkMalwareCheckbox = document.getElementById("checkMalwareCheckbox");
const renameBtn = document.getElementById("renameBtn");
const statusMessage = document.getElementById("statusMessage");

// aside
const profilesAndListContainer = document.getElementById(
  "profilesAndListContainer"
);
const newProfileBtn = document.getElementById("newProfileBtn");

let profiles = [];
let selectedProfile = null;

function renderProfiles() {
  profilesAndListContainer.innerHTML = "";

  profiles.forEach((profileName) => {
    const button = document.createElement("button");
    button.textContent = profileName;

    button.addEventListener("click", () => {
      selectedProfile = profileName;

      const allButtons = profilesAndListContainer.querySelectorAll("button");
      allButtons.forEach((btn) => btn.classList.remove("profileActive"));

      button.classList.toggle("profileActive");
    });

    profilesAndListContainer.appendChild(button);
  });
}

// El nombre tonga es un ejemplo, porque cuando funcione en el futuro sera con un nombre extraido de una variable
let nombreDeEjemplo = "tonga";

function addNameToList(name) {
  if (typeof name !== "string" || !name.trim()) {
    return console.log("Nombre Invalido");
  } else {
    const nameClean = name.trim();
    profiles.push(nameClean);
    console.log("nombre almasenado ", nameClean);

    renderProfiles();
  }
}

newProfileBtn.addEventListener("click", () => {
  addNameToList(nombreDeEjemplo);
});
