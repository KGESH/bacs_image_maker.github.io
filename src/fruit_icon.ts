let imgBox:any = document.querySelector(".imgBox");

const fruitIcon = document.getElementsByClassName("tasteBtn__btn");


const handleImageButton = () => {
  for (let i = 0; i < fruitIcon.length; i++) {
    fruitIcon[i].addEventListener('change', (event: any) => {
      const file = event.target.files[0]; //File의 URL
      const img: any = document.getElementsByClassName('preImg');
      console.log(file);
      const reader = new FileReader();
  
      reader.onload = () => {
        img[i].src = reader.result;
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }
}

handleImageButton();