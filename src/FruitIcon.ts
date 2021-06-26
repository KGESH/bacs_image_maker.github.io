const FruitIcon = () => {
  const fruitIconList = document.getElementsByClassName("taste_file_selector__input");
  const imageList = document.getElementsByClassName("preview_icon");

  const attachFileSelectListener = () => {
    for (let i = 0; i < fruitIconList.length; i++) {
      fruitIconList[i].addEventListener('change', (event: Event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const fileList: FileList | null = target.files;
        const reader: FileReader = new FileReader();
        const image: HTMLImageElement = imageList[i] as HTMLImageElement;
        
        reader.addEventListener('load', () => {
          image.src = <string>reader.result;
        });

        if (fileList !== null) {
          reader.readAsDataURL(fileList[0]);
        }
      });
    }
  }

  attachFileSelectListener();
}

export default FruitIcon;