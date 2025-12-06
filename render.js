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
const profilesAndListContainer = document.getElementById("profilesAndListContainer");
const newProfileBtn = document.getElementById("newProfileBtn");

// input para agregar nombre
const containerInputNewProfile = document.getElementById('containerInputNewProfile')
const newProfileInput = document.getElementById('newProfileInput')
const addProfileBtn = document.getElementById('addProfileBtn')

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

      button.classList.add("profileActive");
    });

    profilesAndListContainer.appendChild(button);
  });
}

function addNameToList(name) {
  if (typeof name !== "string" || !name.trim()) {
    return console.log("Nombre Invalido");
  }

  const nameClean = name.trim();
  const nameToComparate = nameClean.toLocaleLowerCase()

  if(profiles.some(p => p.toLocaleLowerCase() === nameToComparate)) {
    return console.log('nombre repetido ', nameToComparate)
  }

  profiles.push(nameClean);
  console.log("nombre almasenado ", nameClean);
  containerInputNewProfile.classList.add('hidden')
  renderProfiles();
  
}

// ------------------------------------------------------------------------------------------------

newProfileBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  containerInputNewProfile.classList.remove('hidden')
  newProfileInput.focus()
})

document.addEventListener("click", (e) => {
  if (!containerInputNewProfile.contains(e.target)) {
    containerInputNewProfile.classList.add('hidden')
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    containerInputNewProfile.classList.add('hidden')
  }
})

addProfileBtn.addEventListener('click', () => {
  const newProfile = newProfileInput.value
  addNameToList(newProfile)
  newProfileInput.value = ""
})