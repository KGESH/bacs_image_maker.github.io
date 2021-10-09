var InputText = function () {
    var LOCAL_STORAGE_TITLE_KEY = "localTitle";
    var LOCAL_STORAGE_DESCRIPTION_KEY = "localDescription";
    var title = document.getElementById("title__textarea");
    var description = document.getElementById("description__textarea");
    var previewButton = document.getElementById("preview_load__button");
    var preTitle = document.getElementsByClassName("preview_title")[0];
    var preDescription = document.getElementsByClassName("preview_description")[0];
    var sort = function () {
        var alignButtonList = document.getElementsByClassName("preview_content_align__radio_button");
        for (var i = 0; i < alignButtonList.length; i++) {
            var alignButton = alignButtonList[i];
            if (alignButton.checked === true) {
                preTitle.style.textAlign = alignButton.value;
                preDescription.style.textAlign = alignButton.value;
            }
        }
    };
    var load = function () {
        var localTitle = localStorage.getItem(LOCAL_STORAGE_TITLE_KEY);
        var localDescription = localStorage.getItem(LOCAL_STORAGE_DESCRIPTION_KEY);
        if (localTitle !== null) {
            title.innerText = localTitle;
            preTitle.innerText = localTitle;
        }
        if (localDescription !== null) {
            description.innerText = localDescription;
            preDescription.innerText = localDescription;
        }
    };
    var paint = function () {
        localStorage.setItem(LOCAL_STORAGE_TITLE_KEY, title.value);
        localStorage.setItem(LOCAL_STORAGE_DESCRIPTION_KEY, description.value);
        sort();
        preTitle.innerText = title.value;
        preDescription.innerText = description.value;
    };
    load();
    previewButton.addEventListener("click", paint);
};
export default InputText;
