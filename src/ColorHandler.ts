const ColorHandler = () => {
  const LOCAL_STORAGE_BACKGROUND_COLOR_KEY = "backgroundColor";
  const LOCAL_STORAGE_FONT_COLOR_KEY = "fontColor";

  const colorPicker = document.getElementsByClassName("colorPicker");
  const previewButton: HTMLButtonElement = document.getElementById("save") as HTMLButtonElement;
  const currentColor: HTMLDivElement = document.querySelector(".preTitle_color");

  const changeBackgroundColor = (): void => {
    const newBackgroundColor: string = (colorPicker[0] as HTMLInputElement).value;
    currentColor.style.backgroundColor = newBackgroundColor;
    localStorage.setItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY, newBackgroundColor);
  }

  const changeFontColor = (): void => {
    const newFontColor: string = (colorPicker[1] as HTMLInputElement).value;
    currentColor.style.color = newFontColor;
    localStorage.setItem(LOCAL_STORAGE_FONT_COLOR_KEY, newFontColor);
  }

  const init = (): void => {
    const prevBackgroundColor: string = localStorage.getItem(LOCAL_STORAGE_BACKGROUND_COLOR_KEY);
    const prevFontColor: string = localStorage.getItem(LOCAL_STORAGE_FONT_COLOR_KEY);

    if (prevBackgroundColor !== null) {
      currentColor.style.backgroundColor = prevBackgroundColor;
      colorPicker[0].nodeValue = prevBackgroundColor;
    }

    if (prevFontColor !== null) {
      currentColor.style.color = prevFontColor;
      colorPicker[1].nodeValue = prevFontColor;
    }
  }

  const handleShowPreview = (event):void => {
    changeBackgroundColor();
    changeFontColor();
  }

  previewButton.addEventListener('click', handleShowPreview);
  init();
}

export default ColorHandler;