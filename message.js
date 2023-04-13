'use strict';
//htmlで設定したIDをJSに呼び起こして使えるようにする
const dayWeMetInput = document.getElementById("date_input");
const nameInput = document.getElementById("name");
const firstMomentInput = document.getElementById("firstMoment");
const bestMemoryInput = document.getElementById("bestMemory");
const likeInput = document.getElementById("like")
const myFeelingInput = document.getElementById("myFeeling");
const sakuseiButton = document.getElementById("sakusei");
const resultArea = document.getElementById("result-area");
const fromYearInput = document.getElementById("from_year");
const fromMonthInput = document.getElementById("from_month");
const fromDayInput = document.getElementById("from_day");

//ボタンが押された時の操作
sakuseiButton.onclick = function(){
  //文字列を扱えるようにvalueをつける
  const namee = nameInput.value;
  const firstMomentt = firstMomentInput.value;
  const bestMemoryy = bestMemoryInput.value;
  const likee = likeInput.value;
  const myFeelingg = myFeelingInput.value;

    // 選択された日付を取得
    const selectedDate = new Date(document.getElementById('date-input').value);
  
    // 現在の日付を取得
    const currentDate = new Date();
  
    // 24時間単位の差を計算し、日数に変換
    const differenceInTime = currentDate.getTime() - selectedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
  //以下resultAreaに結果を出力する
  resultArea.innerText='';
  //createElementでHTMLにタグを作る
  const header = document.createElement('h3');
  const h4 = document.createElement('h4');
  if(differenceInDays<=0||namee.length===0||firstMomentt.length===0||bestMemoryy.length===0||likee.length===0||myFeelingg.length===0){
    h4.innerText = `正しくすべての項目を入力してください`;
    resultArea.appendChild(h4);
  } else{
  h4.innerText = `${namee}へ。誕生日おめでとう！！出会った時のこと覚えている？実は私たちが出会ってから${differenceInDays}日経ったんだよ！信じられないね！初めて${namee}と出会った時、${firstMomentt}と思ったんだよ。それから月日が経って${namee}と過ごしていく中で、自分にとって${namee}は本当に大切な存在になっていったんだよ。たくさんの時間を${namee}と過ごしてきたけれど、${namee}との一番の思い出はやっぱり${bestMemoryy}かな！これからも${namee}とは仲良くしてきたいよ。だって${namee}の${likee}が大好きだから！${myFeelingg}。`;
  resultArea.appendChild(h4);
  }
};
