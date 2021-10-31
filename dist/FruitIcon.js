var FruitIcon = function () {
    var iconFileList = document.getElementsByClassName("  q");
    var iconEnglishNameList = document.getElementsByClassName("taste_icon_english_name__input");
    var iconKoreanNameList = document.getElementsByClassName("taste_icon_korean_name__input");
    var imageList = document.getElementsByClassName("preview_icon");
    var preIconEnglishName = document.getElementsByClassName("icon_text_english__input");
    var preIconKoreanName = document.getElementsByClassName("icon_text_korean__input");
    var attachFileSelectListener = function () {
        var _loop_1 = function (i) {
            iconFileList[i].addEventListener("change", function (event) {
                var target = event.target;
                var fileList = target.files;
                var reader = new FileReader();
                var image = imageList[i];
                reader.addEventListener("load", function () {
                    image.src = reader.result;
                });
                if (fileList !== null) {
                    reader.readAsDataURL(fileList[0]);
                }
            });
            iconEnglishNameList[i].addEventListener("change", function (event) {
                var target = event.target;
                var iconName = preIconEnglishName[i];
                iconName.innerText = target.value;
            });
            iconKoreanNameList[i].addEventListener("change", function (event) {
                var target = event.target;
                var iconName = preIconKoreanName[i];
                iconName.innerText = target.value;
            });
        };
        for (var i = 0; i < iconFileList.length; i++) {
            _loop_1(i);
        }
    };
    attachFileSelectListener();
};
export default FruitIcon;
