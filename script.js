'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let buttonContent = document.getElementsByClassName("button")[0];
buttonContent.addEventListener("click",goback);
function goback(){
    window.location.href = "index.html";
}
