"use strict";
// 1行目に記載している "use strict" は削除しないでください

const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", function() {
  const placeBtn = document.querySelector('input[type="radio"]:checked')
  if (placeBtn === null) {
    alert("会場を選択してください")
    return;
  }
  localStorage.setItem("key", placeBtn.value); 
  window.location.href = "ticket.html";
})