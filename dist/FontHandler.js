var FontHandler = function () {
    var fontSizeInputField = document.getElementsByClassName("theme_font_size__input");
    var preTitle = document.getElementsByClassName("preview_title")[0];
    var preDescription = document.getElementsByClassName("preview_description")[0];
    var attachFontSizeChangeListener = function () {
        // Preview Title
        fontSizeInputField[0].addEventListener("change", function (event) {
            var target = event.target;
            var fontSize = target.value + "pt";
            preTitle.style.fontSize = fontSize;
        });
        // Preview Description
        fontSizeInputField[1].addEventListener("change", function (event) {
            var target = event.target;
            var fontSize = target.value + "pt";
            preDescription.style.fontSize = fontSize;
        });
    };
    attachFontSizeChangeListener();
};
export default FontHandler;
