console.log("===================자바스크립트의 제어문=================== ")

// 자바의 제어문과 동일,
//if, if~else, else if, swithc~case

//prompt는 웹페이지에서만 동작하니 js파일 로딩해 실행하세요.
let userNumber = prompt("숫자를 입력하세요");
if (userNumber !== null) {
    if (userNumber % 3 == 0) {
        alert(`3의 배수입니다. `);
    } else {
        alert(`3의 배수가 아닙니다. `);
    }
} else {
    alert(`입력이 취소되었습니다. `);
}

const score = prompt(`점수를 입력해주세요`);
if (score >= 90) {
    console.log(`점수:${score}\n등급 : A 입니다.`)

} else if (score >= 80) {
    console.log(`점수:${score}\n등급 : B 입니다.`)

} else if (score >= 70) {
    console.log(`점수:${score}\n등급 : C 입니다.`)

} else if (score >= 60) {
    console.log(`점수:${score}\n등급 : D 입니다.`)
} else {
    console.log(`점수:${score}\n등급 : E 입니다.`)
}

let day = new Date().getDay(); // new date 날짜 가져옴
switch (day) {
    case 0:
        console.log("일요일")
        break;
    case 1:
        console.log("월요일")
        break;
    case 2:
        console.log("화요일")
        break;
    case 3:
        console.log("수요일")
        break;
    case 4:
        console.log("목요일")
        break;
    case 5:
        console.log("금요일")
        break;
    case 6:
        console.log("토요일")
        break;
}

//while 사용법이 java와 같음

let count = 0;
while (count < 10) {
    console.log(`count의 값${count}`)
    count++;
}