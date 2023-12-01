console.log(10 + 20)

function darkButton() {
    let element = document.body
    let mode = document.getElementById("dark")
    element.classList.toggle("themeDark")
    if (mode.innerHTML === "Dark Mode") {
        mode.innerHTML = "Light Mode"
        console.clear();
        console.log("Dark Mode ON")
    }   else {
        mode.innerHTML = "Dark Mode";
        console.clear();
        console.log("Dark Mode OFF")
    }
}

let buttonDark = document.querySelector("#dark")
buttonDark.addEventListener("click", darkButton)

let navBar = document.getElementById("navBar");
let stackButton = document.getElementById("stackButton")

stackButton.addEventListener("click", () => {
    navBar.classList.toggle("stackButton");
    console.log("clicked?");
})