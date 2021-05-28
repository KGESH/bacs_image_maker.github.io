"use strict";
var fruitIcon_left = document.getElementById("fruitIcon__left"), fruitIcon_middle = document.getElementById("fruitIcon__middle"), fruitIcon_right = document.getElementById("fruitIcon__right"), imgBox = document.querySelector(".imgBox");
function handle_left(event) {
    // 이미지를 클릭하면 hidden 팝업창 open
    if (imgBox.classList.contains("hidden")) {
        imgBox.classList.remove("hidden");
    }
    else {
        // 이미 팝업창이 출력중이였다면 close
        imgBox.classList.add("hidden");
    }
}
function handle_middle(event) {
    if (imgBox.classList.contains("hidden")) {
        imgBox.classList.remove("hidden");
    }
    else {
        imgBox.classList.add("hidden");
    }
}
function handle_right(event) {
    if (imgBox.classList.contains("hidden")) {
        imgBox.classList.remove("hidden");
    }
    else {
        imgBox.classList.add("hidden");
    }
}
function init_icon() {
    // 각각의 버튼 구성
    fruitIcon_left.addEventListener("click", handle_left);
    fruitIcon_middle.addEventListener("click", handle_middle);
    fruitIcon_right.addEventListener("click", handle_right);
}
init_icon();
