const FruitIcon = () => {
  const iconFileList = document.getElementsByClassName("taste_file_selector__input");
  const iconEnglishNameList = document.getElementsByClassName("taste_icon_english_name__input");
  const iconKoreanNameList = document.getElementsByClassName("taste_icon_korean_name__input");
  const imageList = document.getElementsByClassName("preview_icon");
  const preIconEnglishName = document.getElementsByClassName("icon_text_english__input");
  const preIconKoreanName = document.getElementsByClassName("icon_text_korean__input");

  const attachFileSelectListener = () => {
    for (let i = 0; i < iconFileList.length; i++) {
      iconFileList[i].addEventListener("change", (event: Event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const fileList: FileList | null = target.files;
        const reader: FileReader = new FileReader();
        const image: HTMLImageElement = imageList[i] as HTMLImageElement;

        reader.addEventListener("load", () => {
          image.src = <string>reader.result;
        });

        if (fileList !== null) {
          reader.readAsDataURL(fileList[0]);
        }
      });

      iconEnglishNameList[i].addEventListener("change", (event: Event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const iconName = preIconEnglishName[i] as HTMLInputElement;
        iconName.innerText = target.value;
      });

      iconKoreanNameList[i].addEventListener("change", (event: Event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const iconName = preIconKoreanName[i] as HTMLInputElement;
        iconName.innerText = target.value;
      });
    }
  };

  attachFileSelectListener();
};

export default FruitIcon;
