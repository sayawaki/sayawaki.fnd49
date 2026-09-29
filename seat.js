"use strict";
// 1行目に記載している "use strict" は削除しないでください


const result = document.getElementById("today-seat")

const floor = ["アリーナ", "下段スタンド", "下段スタンド", "上段スタンド", "上段スタンド"];

const row = Math.floor(Math.random() * 55 + 1);
const number = Math.floor(Math.random() * 250 + 1);

const randomFloor = floor[Math.floor(Math.random() * floor.length)];

result.textContent = `${randomFloor}\n${row}列 ${number}番`;





const comment = document.getElementById("today-comment")

if (randomFloor === "アリーナ"){
    comment.textContent = "🎉キターー！引けました！！最高の一日になりそう😍"
} else if (randomFloor === "下段スタンド") {
    comment.textContent = "😑当たりでも外れでもない微妙な席です..."
} else {
    comment.textContent = "😭あまりにも遠すぎます...双眼鏡必須の座席です👀"
}





const studyBtn = document.getElementsByClassName("study")[0];


studyBtn.addEventListener("click", function (){
    window.location.href = "study.html";
})



