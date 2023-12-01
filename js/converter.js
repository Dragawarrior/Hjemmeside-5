let inputElement = document.querySelector("#input")
let outputElement = document.querySelector("#output-meter")

let feet = 0;

function handleChange() {
    feet = inputElement.value
        let meter = convertFeetToMeter(feet)
    outputElement.textContent = meter
}

inputElement.addEventListener("change", handleChange)

function convertFeetToMeter(feet) {
    let meter = feet * 0.348
    return meter
}