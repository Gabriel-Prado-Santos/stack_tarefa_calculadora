import { Calculator } from "./Calculator.js";


const domElements = {
    powerBtn: window.document.querySelector("[data-power]")
}


const calculator = new Calculator();

console.log(domElements.powerBtn)