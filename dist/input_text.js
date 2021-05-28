"use strict";
var title = document.getElementById("title"), description = document.getElementById("description"), save = document.getElementById("save"), preTitle = document.querySelector(".preTitle"), preDescription = document.querySelector(".preDescription");
function paint() {
    // 입력이 들어오면 localStorage에 저장
    localStorage.setItem("localTitle", title.value);
    localStorage.setItem("localDescription", description.value);
    // 화면에 출력
    preTitle.innerText = "" + title.value;
    preDescription.innerText = "" + description.value;
}
function init_text() {
    var localTitle = localStorage.getItem("localTitle");
    var localDescription = localStorage.getItem("localDescription");
    // localStorage에 저장되어 있으면 바로 화면에 출력
    if (localTitle) {
        preTitle.innerText = "" + localTitle;
    }
    if (localDescription) {
        preDescription.innerText = "" + localDescription;
    }
    // (임시 저장) 버튼을 누르면 textarea에 작성한 내용 출력
    save.addEventListener("click", paint);
}
// sort 기능을 추가해야 함
init_text();
