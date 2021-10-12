const closeBtn = document.querySelector(".fa-times")
const sidebar = document.querySelector(".sidebar")
const barBtn = document.querySelector(".fa-bars")
const toggler = document.querySelector(".toggler-container")
const colors = document.querySelectorAll(".color")

closeBtn.onclick = function () {
  sidebar.classList.remove("active")
}
barBtn.onclick = function () {
  sidebar.classList.add("active")
}

toggler.onclick = function () {
  toggler.classList.toggle("active")

  if (toggler.classList.contains("active")) {
    document.body.classList.add("active")
  } else {
    document.body.classList.remove("active")
  }
}

colors.forEach((color) => {
  color.onclick = function () {
    const selectedColor = color.style.background
    document.querySelector("button").style.background = selectedColor
    sidebar.classList.remove("active")
  }
})
