const ColorHandler = () => {
  const LOCAL_STORAGE_BACKGROUND_COLOR_KEY = "backgroundColor";
  const LOCAL_STORAGE_FONT_COLOR_KEY = "fontColor";

  const colorPicker = document.getElementsByClassName("colorPicker");
  const previewButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("preview_load__button")
  const previewContentWrapper: HTMLDivElement = <HTMLDivElement>(document.getElementsByClassName("preview_content_wrapper")[0]);

  const changeBackgroundColor = (): void => {
    const newBackgroundColor: string = (colorPicker[0] as HTMLInputElement).value;
    previewContentWrapper.style.backgroundColor = newBackgroundColor;
    localStorage.setItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY, newBackgroundColor);
  }

  const changeFontColor = (): void => {
    const newFontColor: string = (colorPicker[1] as HTMLInputElement).value;
    previewContentWrapper.style.color = newFontColor;
    localStorage.setItem(LOCAL_STORAGE_FONT_COLOR_KEY, newFontColor);
  }

  const init = (): void => {
    const prevBackgroundColor: string | null = localStorage.getItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY);
    const prevFontColor: string | null = localStorage.getItem(LOCAL_STORAGE_FONT_COLOR_KEY);

    if (prevBackgroundColor !== null) {
      previewContentWrapper.style.backgroundColor = prevBackgroundColor;
      colorPicker[0].nodeValue = prevBackgroundColor;
    }

    if (prevFontColor !== null) {
      previewContentWrapper.style.color = prevFontColor;
      colorPicker[1].nodeValue = prevFontColor;
    }
  }

  const handleShowPreview = ():void => {
    changeBackgroundColor();
    changeFontColor();
  }

  previewButton.addEventListener('click', handleShowPreview);
  init();
}

export default ColorHandler;