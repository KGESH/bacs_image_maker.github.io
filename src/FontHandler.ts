const FontHandler = () => {
  const fontSizeInputField = document.getElementsByClassName("theme_font_size__input");
  const preTitle: HTMLElement = <HTMLElement>document.getElementsByClassName("preview_title")[0];
  const preDescription: HTMLElement= <HTMLElement>document.getElementsByClassName("preview_description")[0];

  const attachFontSizeChangeListener = () => {
    // Preview Title
    fontSizeInputField[0].addEventListener('change', (event: Event) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      const fontSize: string = `${target.value}pt`;
      preTitle.style.fontSize = fontSize;
    });

    // Preview Description
    fontSizeInputField[1].addEventListener('change', (event: Event) => {
      
      const target: HTMLInputElement = event.target as HTMLInputElement;
      const fontSize: string = `${target.value}pt`;
      preDescription.style.fontSize = fontSize;
    });
  };

  attachFontSizeChangeListener();
}

export default FontHandler;