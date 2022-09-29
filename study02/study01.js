// 산술 연산자 es6에서 추가된 것 ** (제곱연산)
//연결 연산자  문자열과 다른 데이터 타입 + 연결 시 모두 문자열이 된다.

console.log('================연산자')

a = 10;
b = 3;
console.log("원본 변수 ")
console.log("a+b =" + (a + b));
console.log("a+b =" + (a - b));
console.log("a+b =" + a * b);
console.log("a+b =" + a / b);
console.log("a+b =" + a % b);
//es6 ver 추가
console.log("a+b =" + a ** b);
console.log(" a++" + a);
a++;
console.log(" a--" + a);
a--;
console.log("a=100;" + (a = 100));
console.log("a=100;" + (a += 10));
console.log("a=100;" + (a -= 10));
console.log("a=100;" + (a *= 2));
console.log("a=100;" + (a /= 2));
console.log("a=100;" + (a %= 3));
console.log("a=100;" + (a **= 2));

console.log("==============================")

c = "문자열" + " 연결" + "연산자";
console.log('"문자열" + " 연결" + "연산자"' + c);
console.log("=============================")

console.log("10 == 5 :" + (10 == 5));
console.log("10 > 5 :" + (10 > 5));
console.log("10 >= 5 :" + (10 >= 5));
console.log("10 < 5 :" + (10 < 5));
console.log("10 <= 5 :" + (10 <= 5));
console.log("10 != 5 :" + (10 != 5));

console.log("=================================")

// js에서는 간소화된 문법을 사용하기 때문에 문자열 데이터 타입의 숫자와 숫자 데이터 타입의 숫자의 비교 연산이 가능
//==, !=, ===.!==의 차이점은 ==,!=은 데이터 타입을 확인하지 않고 비교 연산만 진행하며
//===,!==은 값, 데이터 타입을 모두 확인해 비교 연산을 진행한다.
console.log("'5' == 5 :" + ('5' == 5));
console.log("'5' === 5 :" + ('5' === 5));
console.log("'5' != 5 :" + ('5' != 5));
console.log("'5' !== 5 :" + ('5' !== 5));

console.log("=====================================")
console.log("10 > 5 && '5' === 5 :" + (10 > 5 && '5' === 5));
console.log("10 > 5 || '5' === 5 :" + (10 > 5 || '5' === 5));
console.log("!('5' != 5) : " + (!('5' != 5)));

console.log("=================================")
//typeof :  지정한 변수의 데이터 타입 확인
//instance of : 지정 변수가 지정한 클래스의 객체인지 확인해줌
console.log("type of : " +(typeof a));
a="javascript";
console.log("type of : " +(typeof a));
let time = new Date();
console.log("instance of : " + (time instanceof Date));

console.log("===============================")

// 연산자의 우선순위
//1. () : 괄호
//2. . :객체 멤버 \  [] : 멤버 \ ?. : 선택적 체이닝 \ () : 함수호출
//3. new
//4. ++, -- , ! , ~ , typeof, void, delete
//5. ** , * , / , %
//6. + , -
//7. << , >> , >>> ,
//8. in , instanceof , < , <= , > , >= , == , === , != , !==
//9. & , ^ , |
//10. && , || , ?
//11. = , += , -= , *= \ = , %= ,**=