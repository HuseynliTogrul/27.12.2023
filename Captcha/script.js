"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// DOM elements
const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let chars = [];
let captcha = "";

const getRandomChars = () => {
    const mixedChars = numbers + upperCaseLetters + lowerCaseLetters;
    return mixedChars[Math.floor(Math.random() * mixedChars.length)];
}

const generateRandomChars = () => {
    for (let i = 1; i < 7; i++) {
        captcha += getRandomChars();
    }

    captchaText.textContent = captcha;
    
}

generateRandomChars()

input.addEventListener("input",(e) => {
    const inputValue = e.target.value;
    
    if(inputValue === captcha){
        input.classList.add("ring-green-600")
        btn.classList.add("bg-green-500", "cursor-pointer")
    }else{
        input.classList.remove("ring-green-600")
        btn.classList.remove("bg-green-500", "cursor-pointer")
    }

    if(inputValue !== captcha && inputValue.length === 6){
        input.classList.add("ring-red-600")
    }else{
        input.classList.remove("ring-red-600")
    }
});

input.addEventListener("keypress",(e) => {
    const inputValue = e.target.value;

    if(inputValue.length === 6){
        e.preventDefault();
    }
});