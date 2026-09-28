"use strict";
// 1行目に記載している "use strict" は削除しないでください

//選択した会場名が表示される
const place = localStorage.getItem("key");
document.getElementById("stadium-name").textContent = place;


const scanBtn = document.getElementById("scan-btn");
const scanMessage = document.getElementById("scan-message");

scanBtn.addEventListener("click", function () {
  scanMessage.textContent = "スキャン中...";
  setTimeout(function () {
    window.location.href = "seat.html";
  }, 4000);
});





