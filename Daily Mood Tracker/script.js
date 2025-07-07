function happyBtn(){
    document.querySelector(".popup").style.display = "flex"
    document.getElementById("happy").style.display = "block"
    document.getElementById("weird").style.display = "none"
    document.getElementById("stoic").style.display = "none"
    document.getElementById("sad").style.display = "none"
}

function weirdBtn(){
    document.querySelector(".popup").style.display = "flex"
    document.getElementById("weird").style.display = "block"
    document.getElementById("happy").style.display = "none"
    document.getElementById("stoic").style.display = "none"
    document.getElementById("sad").style.display = "none"
}

function stoicBtn(){
    document.querySelector(".popup").style.display = "flex"
    document.getElementById("stoic").style.display = "block"
    document.getElementById("happy").style.display = "none"
    document.getElementById("weird").style.display = "none"
    document.getElementById("sad").style.display = "none"
}

function sadBtn(){
    document.querySelector(".popup").style.display = "flex"
    document.getElementById("sad").style.display = "block"
    document.getElementById("happy").style.display = "none"
    document.getElementById("stoic").style.display = "none"
    document.getElementById("weird").style.display = "none"
}

function exitBtn(){
    document.querySelector(".popup").style.display = "none"
}

document.querySelector(".happy").addEventListener("click", happyBtn)
document.querySelector(".weird").addEventListener("click", weirdBtn)
document.querySelector(".stoic").addEventListener("click", stoicBtn)
document.querySelector(".sad").addEventListener("click", sadBtn)

document.querySelectorAll(".exit").forEach(button => {
    button.addEventListener("click", exitBtn);
});