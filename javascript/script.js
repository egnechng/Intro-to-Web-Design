window.onload = function(){
var head = document.getElementById("head");
var img = document.getElementById("hidden");
var btn = document.getElementById("btn");

if (img != null){
    img.style.filter = "blur(4px)";
    img.addEventListener('mouseover', unblur);
    img.addEventListener('mouseout', blur);
}
if (btn != null){
    btn.addEventListener('click', showInfo);
}
var d = new Date();

if (d.getDay() == 0){
    head.style.color = "yellow";
}
if (d.getDay() == 1){
    head.style.color = "red";
}
if (d.getDay() == 2){
    head.style.color = "green";
}
if (d.getDay() == 3){
    head.style.color = "blue";
}
if (d.getDay() == 4){
    head.style.color = "orange";
}
if (d.getDay() == 5){
    head.style.color = "black";
}
if (d.getDay() == 6){
    head.style.color = "violet";
}
}

function showInfo(){
    document.getElementById("info").innerHTML = "I completed this research project during my senior year of high school. I worked with my friend Jacob and professor Julia Valla from UCONN. This project was started while my school was still remote (online), so unfortunately, we were unable to get the most out of the project. Nonetheless, here, I have provided all the results we managed to find given our restrictions. Thanks for reading!"
}

function unblur(){
    this.style.filter = "blur(0)";
}

function blur(){
    this.style.filter = "blur(4px)";
}
