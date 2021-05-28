const title:any = document.getElementById("title"),
  description:any = document.getElementById("description"),
  save:any = document.getElementById("save"),
  preTitle:any = document.querySelector(".preTitle"),
  preDescription:any = document.querySelector(".preDescription");

function paint():void {
  // 입력이 들어오면 localStorage에 저장
  localStorage.setItem("localTitle", title.value);
  localStorage.setItem("localDescription", description.value);

  // 화면에 출력
  preTitle.innerText = `${title.value}`;
  preDescription.innerText = `${description.value}`;
  
}

function init_text():void {
  const localTitle:any = localStorage.getItem("localTitle");
  const localDescription:any = localStorage.getItem("localDescription");
  // localStorage에 저장되어 있으면 바로 화면에 출력
  if (localTitle) { preTitle.innerText = `${localTitle}`; }
  if (localDescription) { preDescription.innerText = `${localDescription}`; }

  // (임시 저장) 버튼을 누르면 textarea에 작성한 내용 출력
  save.addEventListener("click", paint);
}
// sort 기능을 추가해야 함

init_text();