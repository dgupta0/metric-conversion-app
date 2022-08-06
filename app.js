let num;
const btnEl = document.getElementById("btn");
const inputVal = document.getElementById("num-el")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")
const resetEl = document.getElementById("btn2");

btnEl.addEventListener("click", function () {
    num = Number(inputVal.value);
    console.log(num)
    lenEl.textContent = `${num} meters = ${(3.281 * num).toFixed(2)} feet  
     |   ${num} feet = ${(num / 3.281).toFixed(2)} meters. `

    volEl.textContent = `${num} liters = ${(0.264 * num).toFixed(2)} gallons  
     |   ${num} gallons = ${(num / 0.264).toFixed(2)} liters.  `

    massEl.textContent = `${num} kilograms = ${(2.204 * num).toFixed(2)} pounds  
     |   ${num} pounds = ${(num / 2.204).toFixed(2)} kilograms.  `
})

resetEl.addEventListener("click", function () {

    inputVal.value = "";
    lenEl.textContent = ""
    volEl.textContent = ""
    massEl.textContent = ""
})