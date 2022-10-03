// function 함수명(매개편수){
//     소스코드
//     return;
// } js는 접근제한자가 전혀 없어 간편함.


console.log("====================함수 사용  ========================")

function sum(num1, num2) {
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`)
}

// sum();

sum(30, 50);
// 함수의 4가지 형태
// 1. 매개변수 x, 반환값 x
// 2. 매개변수 o, 반환값 x
// 3. 매개변수 x, 반환값 o
// 4. 매개변수 o, 반환값 o


function add1() {
    const a = 10;
    const b = 10;
    const c = a + b;
    console.log(`두 수의 합은 ${c}이다. `)
}

function add2(a, b) {
//    데이터타입 함수에서 안써도 되는 이유는 js는 모든 변수를 다 받아서;;
    const c = a + b
    console.log(`두 수의 합은 ${c}다.`)
}

function add3() {
    const a = 10;
    const b = 10;
    const c = a + b
    return c;
}

function add4(a, b) {
    const c = a + b
    return c;
}

// 익명함수 function():호출 불가, 매개변수로 함수 사용시에 사용한다. 매개변수로 사용했을 시에 콜백함수라고 부른다. 이벤트 동작에
// 사용하기 위해 쓰인다.
//  변수에 익명함수를 대입하여 변수명으로 익명 함수를 호출할 수 있다.
const noname = function () {
    const a = 10;
    const b = 10;
    console.log(`두 수의 합은 ${a + b}`)
};
noname();
console.log("======================");
// 즉시실행함수 : 일회용함수.딱 한번만 사용하고 사용할 일이 없는 함수 로그램 실행시에 단 한번만 사용할
// 부분을 실행하기 위해서 사용한다.
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());
//함수로 선언했으나 실행과 동시에 불러냄.


//  문제 6 ) Q3의 소스코드를 함수 사용하는 방식으로 수정하기
//  1. 사용자 입력부분을 함수로 생성 quiz3_input
//  2. 3의 배수를 계산하는 부분을 함수로 생성 quiz3_cal

function quiz3_input() {
    let a = prompt("3의 배수 ", "")
    a = Number(a);
    return a;
}

function quiz3_cal(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if ((i % 3) == 0) {   // 나머지 연산자(%)가 우선순위가 높기 때문이다.
            console.log(`${i}`)
            count++;
        }
    }
    console.log(`${a} 까지의 3의 배수 개수 : ${count}`)
}

let a = quiz3_input;

quiz3_input(a);

//  문제7 문제 4의 소스코드를 함수를 사용하는 방식으로 수정
//  1. money, caffee, price 의 초기값을 설정하는 함수 생성 quiz7Setup
//  2. 커피 판매부분을 함수로 생성하기 quiz7CoffeeSale

// 문제8 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 입금 부분을 함수로 생성 quiz8InputMoney
// 2. 예금 확인 부분을 함수로 생성 quiz8CheckMoeny
// 3. 출금 부분을 함수로 생성 quiz8OutputMoney

