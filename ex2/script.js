const input = document.querySelector("#input-name")
const button = document.querySelector("#btn-save")
const nameUser = document.querySelector("#name")

nameUser.textContent  = localStorage.getItem("welcome")

button.addEventListener("click", () => {
   
    nameUser.textContent = input.value 
    localStorage.setItem("welcome", input.value)
})
