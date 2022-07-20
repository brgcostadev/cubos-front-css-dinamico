const body = document.querySelector("body")
const divs = document.querySelectorAll(".square")

divs.forEach(div => {
    div.addEventListener("click", (event) => {
        body.style.setProperty("--primary-color", event.target.id)
    })
})