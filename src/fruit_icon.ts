let fruitIcon_left:any = document.getElementById("fruitIcon__left"),
  fruitIcon_middle:any = document.getElementById("fruitIcon__middle"),
  fruitIcon_right:any = document.getElementById("fruitIcon__right"),
  imgBox:any = document.querySelector(".imgBox");

function handle_left(event:any):void {  // 죄측 이미지 버튼
  // 이미지를 클릭하면 hidden 팝업창 open
  if (imgBox.classList.contains("hidden")){
    imgBox.classList.remove("hidden");
  } else {
    // 이미 팝업창이 출력중이였다면 close
    imgBox.classList.add("hidden");
  }

}
function handle_middle(event:any):void {  // 가운데 이미지 버튼, 위와 같음
  if (imgBox.classList.contains("hidden")){
    imgBox.classList.remove("hidden");
  } else {
    imgBox.classList.add("hidden");
  }
}
function handle_right(event:any):void { // 우측 이미지 버튼, 위와 같음
  if (imgBox.classList.contains("hidden")){
    imgBox.classList.remove("hidden");
  } else {
    imgBox.classList.add("hidden");
  }

}

function init_icon():void {
  // 각각의 버튼 구성
  fruitIcon_left.addEventListener("click", handle_left);
  fruitIcon_middle.addEventListener("click", handle_middle);
  fruitIcon_right.addEventListener("click", handle_right);
}

init_icon();