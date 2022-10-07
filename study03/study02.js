// 문제 3 - p. 511

// 문제 3) 책 511 페이지의 마무리 문제 2번 풀기

// prompt는 입력받는 것들은 모두 문자다.
let a = prompt("3의 배수 ", "")
let num1 = 0;
for (let i = 1; i <= a; i++) {
    if ((i % 3) == 0) {   // 나머지 연산자(%)가 우선순위가 높기 때문이다.
        console.log(`${i}`)
        num1++;
    }
}
console.log(`${num1} 3의 배수의 갯수`);

// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
//      ex) 커피를 한잔 판매합니다.
//          남은 커피 00 잔

console.log("============================================")
// let cuf = 300; //돈이 수정되기 때문에 고정값인 const를 사용할 수 없다.
// let cufcount = 10;
// let m = prompt("가지고 있는 금액", "");
//
// while (true) { //for문도 가능하나 while이 깔끔해보이니 while사용
//     console.log("order!")
//     if (cufcount > 0) {
//         if (m >= cuf) {
//             console.log("커피를 판매");
//             cufcount--; //커피갯수 줄이기
//             m = (m - cuf); //돈 빼기  돈 -=300;도 가능
//         } else {
//             console.log("소지금액 부족");
//             break;
//         }
//     } else {
//         console.log("sold out ");
//         break;
//     }
// }

// for(;;카운트도 증감식도 조건 없이 ;;만 작성. 무한반복 ){}
// for (let i = 0;true;i++)도 무한반복
//그러나 무한반복은 while문이 가장 편함.


// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

//
// let hi = prompt("메뉴를 입력해주세요", "")
// let putin = prompt("금액을 입력해주세요", "");
// let putconf = 3000; //기존예금
// let putout = 0;

// let inPocket = 0;
// console.log(`안녕하세요, 은행입니다`)
// //
// while (true) {
//     console.log(`메뉴를 입력해 주세요`);
//     console.log(`1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료`)
//     let hi = prompt("선택 :`1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료 ", "")
//
//     if (hi == 1) {
//         let putinMoney = prompt("입금할 금액을 입력해 주세요", "");
//         if (isNaN(putinMoney))
//             console.log("잘못된 입력입니다. 메뉴로 돌아갑니다.");
//         else {
//             putinMoney = Number(putinMoney)
//             inPocket += putinMoney;
//             console.log(`입금한 금액은 ${putinMoney}원 입니다. 입금금액으로 당신의 잔고는 ${inPocket}입니다.`)
//         }
//     } else if (hi == 2) {
//         console.log(`현재 잔고는 ${inPocket} 입니다. `)
//     } else if (hi = 3) {
//         while (true) {
//             let putOut = prompt("출금할 금액을 입력해 주세요", "")
//             if (isNaN(putOut)) {
//                 console.log("잘못된 입력입니다. 메뉴로 돌아갑니다.");
//             } else {
//                 putOut = Number(putOut);
//                 if (putOut > inPocket) {
//                     console.log("출금 금액이 예금 금액보다 많습니다. 모든 예금 금액을 출금합니다. ")
//                     console.log(`출금 금액은 ${inPocket}원 입니다. `);
//                     inPocket = 0;
//                 } else {
//                     inPocket -= putOut;
//                     console.log(`출금 금액은 ${putOut}원이며 남은 금액은 ${inPocket}원 입니다. `)
//                 }
//                 break;
//             }else
//             if (menu == 0) {
//                 console.log('저희 java505 은행을 이용해 주셔서 감사합니다.');
//                 break;
//             } else {
//                 console.log('잘못된 입력입니다.')
//             }
//
//         }
//     }
// }


// 식이 잘못된 곳이 많음. 수정 필요


// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금