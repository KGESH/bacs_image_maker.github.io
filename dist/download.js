$(function(){
    $("#download").on("click", function(){
        // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
        html2canvas(document.querySelector("#preview_container"))
        .then(canvas => {
            console.log(canvas);
                saveAs(canvas.toDataURL('image/png'), "capture-test.png");
			});
    });
    function saveAs(uri, filename) { 
			// 캡쳐된 파일을 이미지 파일로 내보낸다.
    var link = document.createElement('a'); 
    if (typeof link.download === 'string') { 
        link.href = uri; 
        link.download = filename; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
    } else { 
        window.open(uri); 
    } 
    }
});

function remove_local() {
    localStorage.removeItem("localTitle");
    localStorage.removeItem("localDescription");
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("fontColor");
}

function init_download() {
    const downloadBtn = document.getElementById("download");
    downloadBtn.addEventListener("click", remove_local);
}

init_download();