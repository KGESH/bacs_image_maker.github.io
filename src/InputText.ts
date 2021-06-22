
const InputText = () => {
  const LOCAL_STORAGE_TITLE_KEY = "localTitle";
  const LOCAL_STORAGE_DESCRIPTION_KEY = "localDescription";

  const title: HTMLInputElement = <HTMLInputElement>document.getElementById("title");
  const description: HTMLInputElement = <HTMLInputElement>document.getElementById("description");
  const save: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
  const preTitle: HTMLElement = document.querySelector(".preTitle");
  const preDescription: HTMLElement = document.querySelector(".preDescription");


  const sort = ():void => {
    const alignButtons = document.getElementsByClassName("textAlign");

    for (let i = 0; i < alignButtons.length; i++) {
      const alignButton = alignButtons[i] as HTMLInputElement;
      if (alignButton.checked === true) {
        preTitle.style.textAlign = alignButton.value;
        preDescription.style.textAlign = alignButton.value;
      }
    }
  }

  const load = (): void => {
    const localTitle: string = localStorage.getItem(LOCAL_STORAGE_TITLE_KEY);
    const localDescription: string = localStorage.getItem(LOCAL_STORAGE_DESCRIPTION_KEY);

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
}

export default InputText;