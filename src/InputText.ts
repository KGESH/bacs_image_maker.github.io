
const InputText = () => {
  const LOCAL_STORAGE_TITLE_KEY: string = "localTitle";
  const LOCAL_STORAGE_DESCRIPTION_KEY: string = "localDescription";

  const title: HTMLInputElement = <HTMLInputElement>document.getElementById("title__textarea");
  const description: HTMLInputElement = <HTMLInputElement>document.getElementById("description__textarea");
  const previewButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("preview_load__button");
  const preTitle: HTMLElement = <HTMLElement>document.getElementsByClassName("preview_title")[0];
  const preDescription: HTMLElement= <HTMLElement>document.getElementsByClassName("preview_description")[0];


  const sort = ():void => {
    const alignButtonList = document.getElementsByClassName("preview_content_align__radio_button");

    for (let i = 0; i < alignButtonList.length; i++) {
      const alignButton: HTMLInputElement = <HTMLInputElement>alignButtonList[i];
      if (alignButton.checked === true) {
        preTitle.style.textAlign = alignButton.value;
        preDescription.style.textAlign = alignButton.value;
      }
    }
  }

  const load = (): void => {
    const localTitle: string | null = localStorage.getItem(LOCAL_STORAGE_TITLE_KEY);
    const localDescription: string | null = localStorage.getItem(LOCAL_STORAGE_DESCRIPTION_KEY);

    if (localTitle !== null) {
      title.innerText = localTitle;
      preTitle.innerText = localTitle;
    }

    if (localDescription !== null) {
      description.innerText = localDescription;
      preDescription.innerText = localDescription;
    }
  }

  const paint = (): void => {
    localStorage.setItem(LOCAL_STORAGE_TITLE_KEY, title.value);
    localStorage.setItem(LOCAL_STORAGE_DESCRIPTION_KEY, description.value);

    sort();
    preTitle.innerText = title.value;
    preDescription.innerText = description.value;
  }
  

  load();
  previewButton.addEventListener("click", paint);


}

export default InputText;

