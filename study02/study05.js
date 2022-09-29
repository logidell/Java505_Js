console.log("====================숫자 관련 함수 ========================");


console.log("=======toString()===============")
console.log("\n")
// toString() : 숫자 데이터를 문자열 데이터로 변환해준다.
//      사용법 : 변수 = 숫자데이터.toString();

let num1 = 123;
console.log("원본 데이터 : ");
console.log(num1);
console.log("toString() 변환" + num1.toString());
console.log(`toString() 변환 ${(100 + 200).toString()}`);
console.log("\n")

console.log("=======toExponential()===============")
console.log("\n")

// toExponential() : 숫자 데이터를 지수표기법으로 변환, 반올림으로 동작한다.
//      사용법 : 숫자데이터.toExponential(표시할 자리수);
let num2 = 9.654;
console.log(`원본 데이터 : ${num2}`);
console.log(`toExponential() 사용 후 ${num2.toExponential()}`);
console.log(`toExponential(2) 사용 후 ${num2.toExponential(2)}`);
console.log(`toExponential(2) 사용 후 ${num2.toExponential(4)}`);
console.log("\n")

console.log("=======toFixed()===============")
console.log("\n")
// toFixed() : 소수점 자리를 지정한 크기만큼 표현, 반올림 효과를 받을 수 있다.
//      사용법 : 숫자.toFixed(소수점자리);
console.log(`원본 데이터 : ${num2}`);
console.log(`toFixed() 사용  ${num2.toFixed(0)}`); // 반올림, output: 10
console.log(`toFixed() 사용  ${num2.toFixed(2)}`);
console.log(`toFixed() 사용  ${num2.toFixed(4)}`);
console.log("\n")

console.log("===========NaN / isNaN===========")
console.log("\n")
// NaN : Not a Number
// isNaN() : 지정한데이터가 숫자인지 아진지 확인하는 명령어. 숫자가 아니면 t 숫자이면 f
//      사용법 : 변수 = inNaN.(데이터);
const num3 = "1234";
const num4 = "일,2,삼,4"
console.log(`원본 데이터 num3 : ${num3} \tnum4 : ${num4}`);
console.log(`isNaN(num3)사용  ${isNaN(num3)}`);
console.log(`isNaN(num3)사용  ${isNaN(num4)}`);
console.log("\n")

console.log("===========Number===========")
console.log("\n")
// Number() : 문자열 데x이터 타입 숫자를 숫자형 데이터 타입으로 변환. 변환이 불가능할 경우 NaN(Not a Number)으로 데이터 타입 변환
//      사용법 : 변수 =Number(데이터);
console.log(`Number(true) : ${Number(true)}`);   //output: 1
console.log(`Number(false) : ${Number(false)}`);  //output: 0
console.log(`Number("10") : ${Number("10")}`);  //output: 10
console.log(`Number("   10") : ${Number("   10")}`);  //output: 10
console.log(`Number("10   ") : ${Number("10   ")}`);  //output: 10
console.log(`Number("   10  ") : ${Number("   10  ")}`);  //output: 10
console.log(`Number("10.33") : ${Number("10.33")}`);  //output: 10.33
console.log(`Number("10,33) : ${Number("10,33")}`);  //output: NaN
console.log(`Number("10 33") : ${Number("10 33")}`);  //output: NaN
console.log(`Number("javascript") : ${Number("javascript")}`);  //output: NaN

console.log("\n")

console.log("===========parseInt===========")
console.log("\n")
// parseInt() : 문자열 데이터 타입 숫자를 숫자 (정수데이터)로 변환한다.
//      사용법 : 변수 = parseInt(데이터);

console.log(`parseInt(-10) : ${parseInt("-10")}`);  //output: -10
console.log(`parseInt(-10.33) : ${parseInt("-10.33")}`);  //output: -10
console.log(`parseInt("10.33") : ${parseInt("10.33")}`);  //output: 10
console.log(`parseInt("10 20 30") : ${parseInt("10 20 30")}`);  //output: 10
console.log(`parseInt("10year") : ${parseInt("10year")}`);  //output: 10
console.log(`parseInt("year10") : ${parseInt("year10")}`);  //output: NaN
// parseFloat() : 문자열 데이터 타잆 숫자를 숫자 (실수 데이터)로 변환한다.
//      사용법 : 변수 = parseFloat(데이터);

console.log("\n")

console.log("===========parseFloat===========")
console.log("\n")
console.log(`parseFloat(-10) : ${parseFloat("10")}`);  // output : 10
console.log(`parseFloat(-10.33) : ${parseFloat("10.33")}`);  // output : 10.33
console.log(`parseFloat("10 20 30") : ${parseFloat("10 20 30")}`);  // output : 10
console.log(`parseFloat("10year") : ${parseFloat("10year")}`);  // output : 10
console.log(`parseFloat("year10") : ${parseFloat("year10")}`);  // output : NaN


// MAX_VALUE
console.log(`숫자 데이터의 가장 큰 수 : ${Number.MAX_VALUE}`);   //output: 1.7976931348623157e+308
// MIN_VALUE
console.log(`숫자 데이터의 가장 작은 수 : ${Number.MIN_VALUE}`);  //output: 5e-324
