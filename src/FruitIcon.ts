const FruitIcon = () => {
  const fruitIcons = document.getElementsByClassName("tasteBtn__btn");
  const imgs = document.getElementsByClassName("preImg");

  const handleImageButton = () => {
    for (let i = 0; i < fruitIcons.length; i++) {
      fruitIcons[i].addEventListener('change', (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        const img = imgs[i] as HTMLImageElement;
        
        reader.addEventListener('load', () => {
          img.src = <string>reader.result;
        });

        if (file) {
          reader.readAsDataURL(file);
        }
      });
    }
  }

}

export default FruitIcon;