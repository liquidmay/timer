const inputMinutes = document.getElementById("minuteSet");
const inputSeconds = document.getElementById("secondSet");
const subBtn = document.querySelector(".btn");
let actualRslt = document.querySelector(".result");
let intv; // setInterval 핸들러 변수

function updateResult() {
  let minuteValue = parseInt(inputMinutes.value, 10); // 입력값을 정수로 변환
  let secondValue = parseInt(inputSeconds.value, 10); // 입력값을 정수로 변환

  // 입력값이 유효한 범위인지 확인
  if (isNaN(minuteValue) || minuteValue < 0 || minuteValue > 60) {
    minuteValue = 0; // 유효하지 않으면 기본값으로 설정
  }
  if (isNaN(secondValue) || secondValue < 0 || secondValue > 60) {
    secondValue = 0; // 유효하지 않으면 기본값으로 설정
  }

  actualRslt.textContent = `${minuteValue
    .toString()
    .padStart(2, "0")} : ${secondValue.toString().padStart(2, "0")}`;

  // 기존에 실행 중인 setInterval을 중지
  clearInterval(intv);

  // 새로운 setInterval 설정
  intv = setInterval(function () {
    if (secondValue > 0) {
      secondValue--;
    } else {
      if (minuteValue > 0) {
        minuteValue--;
        secondValue = 59;
      } else {
        clearInterval(intv); // 타이머 중지
        alert("타이머가 종료되었습니다."); // 예시로 경고 메시지 추가
      }
    }
    actualRslt.textContent = `${minuteValue
      .toString()
      .padStart(2, "0")} : ${secondValue.toString().padStart(2, "0")}`;
  }, 1000);
}

subBtn.addEventListener("click", updateResult);
