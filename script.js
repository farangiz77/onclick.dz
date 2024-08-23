const btn = document.querySelector("#btn")
const body = document.querySelector("body")
const btn1 = document.querySelector("#btn1")
const img = document.querySelector("img")
const h2 = document.querySelector("h2")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")











btn.onclick = () => {
    body.classList.toggle("black")

}

btn1.onclick = () => {
    img.classList.toggle("openorclose")

}


btn2.onclick = () => {
    h2.classList.toggle("openorclose")

}

btn3.onclick = () => {
    h2.classList.toggle("blue")

}

