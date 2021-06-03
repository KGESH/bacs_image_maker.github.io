let colorPicker:any = document.getElementsByClassName("colorPicker"),
  saveColorBtn:any = document.getElementById("save"),
  currColor:any = document.querySelector(".preTitle_color");

function changeBackgroundColor():void { // 배경색상 변경 & (변경한 색상을)localstorage에 추가
  let newBackgroundColor = colorPicker[0].value;
  currColor.style.backgroundColor = newBackgroundColor
  localStorage.setItem("backgroundColor", newBackgroundColor);
}

function changeFontColor():void { // 폰트색상 변경 & (변경한 색상을)localstorage에 추가
  let newFontColor = colorPicker[1].value;
  currColor.style.color = newFontColor;
  localStorage.setItem("fontColor", newFontColor);
}

function handler():void {
  changeBackgroundColor();
  changeFontColor();
}

function init_color():void {
  // localstorage에 배경 색상이 저장되있으면 불러오기
  let pastBackgroundColor = localStorage.getItem("backgroundColor");
  if (pastBackgroundColor != null){
    currColor.style.backgroundColor = pastBackgroundColor;  // style에 입히기
    colorPicker[0].value = pastBackgroundColor;
  }
  
  // localstorage에 폰트 색상이 저장되있으면 불러오기
  let pastFontColor = localStorage.getItem("fontColor");
  if (pastFontColor != null){
    currColor.style.color = pastFontColor;  // style에 입히기
    colorPicker[1].value = pastFontColor;
  }
  
  // 임시 저장 버튼을 누르면 미리보기 색상을 설정한 색상으로 변경
  saveColorBtn.addEventListener("click", handler);
}

init_color();