var ColorHandler = function () {
    var LOCAL_STORAGE_BACKGROUND_COLOR_KEY = "backgroundColor";
    var LOCAL_STORAGE_FONT_COLOR_KEY = "fontColor";
    var colorPicker = document.getElementsByClassName("colorPicker");
    var tasteFontColorPicker = document.getElementsByClassName("taste_text_color_picker");
    var previewButton = document.getElementById("preview_load__button");
    var previewContentWrapper = (document.getElementsByClassName("preview_content_wrapper")[0]);
    var previewIconText = document.getElementsByClassName("preview_icon_text");
    var changeBackgroundColor = function () {
        var newBackgroundColor = colorPicker[0].value;
        previewContentWrapper.style.backgroundColor = newBackgroundColor;
        localStorage.setItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY, newBackgroundColor);
    };
    var changeFontColor = function () {
        var newFontColor = colorPicker[1].value;
        previewContentWrapper.style.color = newFontColor;
        localStorage.setItem(LOCAL_STORAGE_FONT_COLOR_KEY, newFontColor);
    };
    var changeTasteFontColor = function () {
        var _loop_1 = function (i) {
            tasteFontColorPicker[i].addEventListener("change", function (event) {
                var newFontColor = tasteFontColorPicker[i].value;
                var iconText = previewIconText[i];
                iconText.style.color = newFontColor;
            });
        };
        for (var i = 0; i < tasteFontColorPicker.length; i++) {
            _loop_1(i);
        }
    };
    var init = function () {
        var prevBackgroundColor = localStorage.getItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY);
        var prevFontColor = localStorage.getItem(LOCAL_STORAGE_FONT_COLOR_KEY);
        if (prevBackgroundColor !== null) {
            previewContentWrapper.style.backgroundColor = prevBackgroundColor;
            colorPicker[0].nodeValue = prevBackgroundColor;
        }
        if (prevFontColor !== null) {
            previewContentWrapper.style.color = prevFontColor;
            colorPicker[1].nodeValue = prevFontColor;
        }
    };
    var handleShowPreview = function () {
        changeBackgroundColor();
        changeFontColor();
    };
    changeTasteFontColor();
    previewButton.addEventListener("click", handleShowPreview);
    init();
};
export default ColorHandler;
