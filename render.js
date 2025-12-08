// header
const lenguageChangerBtn = document.getElementById("lenguageChangeBtn")
const themeToggle = document.getElementById("themeToggle")

// main
const selectorPdf = document.getElementById("selectorPdf")
const pdfFileInput = document.getElementById("pdfFileInput")
const selectedFile = document.getElementById("selectedFile")
const checkboxContainer = document.getElementById("checkboxContainer")
const includeDateCheckbox = document.getElementById("includeDateCheckbox")
const checkMalwareCheckbox = document.getElementById("checkMalwareCheckbox")
const renameBtn = document.getElementById("renameBtn")
const statusMessage = document.getElementById("statusMessage")

// aside
const profilesAndListContainer = document.getElementById("profilesAndListContainer")
const newProfileBtn = document.getElementById("newProfileBtn")

// input para agregar nombre
const containerInputNewProfile = document.getElementById('containerInputNewProfile')
const newProfileInput = document.getElementById('newProfileInput')
const addProfileBtn = document.getElementById('addProfileBtn')

let profiles = []
let selectedProfile = null
let selectedFilePath = null

function renderProfiles() {
  profilesAndListContainer.innerHTML = ""

  profiles.forEach((profileName) => {
    const button = document.createElement("button");
    button.textContent = profileName;

    button.addEventListener("click", () => {
      selectedProfile = profileName

      const allButtons = profilesAndListContainer.querySelectorAll("button")
      allButtons.forEach((btn) => btn.classList.remove("profileActive"))

      button.classList.add("profileActive")
    });

    profilesAndListContainer.appendChild(button)
  });
}

function addNameToList(name) {
  if (typeof name !== "string" || !name.trim()) {
    return console.log("Nombre Invalido")
  }

  const nameClean = name.trim()
  const nameToComparate = nameClean.toLowerCase()

  if(profiles.some(p => p.toLowerCase() === nameToComparate)) {
    return console.log('nombre repetido ', nameToComparate)
  }

  profiles.push(nameClean)
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

// ------------------------------------------------------------------------------------------------

selectorPdf.addEventListener("click", (e) => {
  pdfFileInput.click()
})

pdfFileInput.addEventListener("change", (e) => {
  const file = pdfFileInput.files[0]

  if (!file){return console.log('no se selecciono file')}

  handleFile(file)
})

// -------------------------

selectorPdf.addEventListener('dragover', (e) => {
  e.preventDefault()

  e.dataTransfer.dropEffect = 'copy'
  selectorPdf.classList.add('dragover')
})

selectorPdf.addEventListener('dragleave', (e) => {
  selectorPdf.classList.remove('dragover')
})

selectorPdf.addEventListener('drop', (e) => {
  e.preventDefault()
  selectorPdf.classList.remove('dragover')

  const file = e.dataTransfer.files[0]

  if (!file) {
    return console.log('no se solto ningun archivo')
  }

  handleFile(file)
})

// -------------------------

function handleFile (file) {

  const isPdf = file.type === 'application/pdf'
  if (!isPdf) {return console.log('el archivo no es PDF')}

  selectedFilePath = file.name
  console.log('el path es ', selectedFilePath)
  
  selectedFile.textContent = `El nombre del archivo es: ${file.name}`

}