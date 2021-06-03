"use strict";
var colorPicker = document.getElementsByClassName("colorPicker"), save_Btn = document.getElementById("save");
var currColor = document.querySelector(".preTitle_color");
function changeBackgroundColor() {
    var newBackgroundColor = colorPicker[0].value;
    currColor.style.backgroundColor = newBackgroundColor;
}
function changeFontColor() {
    var newFontColor = colorPicker[1].value;
    currColor.style.color = newFontColor;
}
function handle_color() {
    changeBackgroundColor();
    changeFontColor();
}
function init_color() {
    save_Btn.addEventListener("click", handle_color);
}
init_color();
