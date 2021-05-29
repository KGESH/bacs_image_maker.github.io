"use strict";
var imgBox = document.querySelector(".imgBox");
var fruitIcon = document.getElementsByClassName("tasteBtn__btn");
var handleImageButton = function () {
    var _loop_1 = function (i) {
        fruitIcon[i].addEventListener('change', function (event) {
            var file = event.target.files[0]; //File의 URL
            var img = document.getElementsByClassName('preImg');
            console.log(file);
            var reader = new FileReader();
            reader.onload = function () {
                img[i].src = reader.result;
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    };
    for (var i = 0; i < fruitIcon.length; i++) {
        _loop_1(i);
    }
};
handleImageButton();
