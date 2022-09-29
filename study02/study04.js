console.log("=============문자열 템플릿, es6에서 추가가 됨. =")
//문자열 템플릿 : 문자열을 표현하기 위해 '',""를 사용하지 않고 ``(억음부호, 백틱)을 사용할 경우 문자열 내에서
// ${...}에 변수를 사용할 수 있다. (react, 파이썬 사용시 자주 사용함.)

console.log("일반적 문자열 사용")
console.log(`백틱을 사용한 문자열 출력`)

//``억음부호 사용해 문자열을 표현시 '',"" 를 이스케이프 문자 없이 바로 사용이 가능하다.
console.log(" 작은 '따옴표'문자열로 표시1 ");
console.log(" 작은 \'따옴표\'문자열로 표시2 ");
console.log('큰 "따옴표" 문자열로 표시1 ');
console.log("큰 \'따옴표\' 문자열로 표시2 ");
console.log(`억음부호 사용시 "큰 따옴표", '작은따옴표' 마음대로 사용이 가능하다. `);

//여러줄 입력을 지원한다.
let txt1 = "문자열을 여러줄로" +
    "입력하려고 하면" +
    "이런 식으로 입력하면 " +
    "쌉가능 ^&^퍞퍄 " //입력해도 한줄로 내보낸다.

let txt2 = `문자열을 여러줄 입력하려면
    이런식으로 입력하면 쌉가능이쥐
    ^&^` // 입력한 줄 그대로

let txt2_1 =
    `    둔둔둔                 둔둔둔
             둔둔둔         둔둔둔 
                  둔둔두루둔
              `

console.log(txt1);
console.log(txt2);
console.log(txt2_1);
console.log("\n")
console.log("================================================")
console.log("\n")
//역따옴표 사용한 문자열 내에 ${}사용시 변수 대입되어 출력된다.
//${} 내부에 간단한 연산식을 사용할 수 있다.
let name = "선아현";
let age = "??"
let txt3 = `이름은 ${name}이고, 나이는${age}입니다.`;
console.log(txt3);

console.log("\n")
console.log("=======${} 내부에 간단한 연산식 쓰기===============")
console.log("\n")
let price =1000;
let vat = 0.25;
let total = `total : ${(price*(1+vat )).toFixed(2)}`;
console.log(total);
console.log(`10+20=${10+20}`); // 직관적이고 쓰기 편해진다.
console.log("10+20 : "+(10+20));
console.log("\n")
console.log("=======${} 내부에 간단한 연산식 쓰기===============")
console.log("\n")