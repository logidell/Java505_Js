console.log("전역/ 지역변수")

//전역 변수  : 프로그램 전체에서 접근이 가능한변수
//지역 변수 : 코드블럭 내에세 선언되고 사용되고 삭제되는 변수

console.log("전역변수를 함수 안에서 사용하는 것은 문제가 없다. ")
let gValue =100;
console.log(`전역변수 ${gValue}`);
// 어떠한 코드 내에 들어가지 않아서 전역변수

console.log("========")

console.log("지역변수는 함수(코드블럭)안에서 선언하고 사용하는 것은 문제가 없다.")
function func1(){
    console.log(`함수 func1에서 사용한 gValue =  ${gValue}`);
}
func1();

//지역변수 내 전역변수는 사용 가능
console.log("지역변수를 함수(코드블럭)밖에서 호출하는 것은 불가능 지역변수는 해당 함수의 실행이 종료되면 메모리에서 삭제됨. ")
function func2(){
    let lValue = 10;
    console.log(`함수 func2에서 사용한 lValue ${lValue}`);

// console.log(`함수 밖에서 사용한 lValue${lValue}`) 사용 불가능
console.log("함수 안에서 지역변수 선언시 전역변수외 동일한 이름을 사용하면 지역변수가 우선순위를 가진다. .")
console.log("====================")
function func3(){
    let lValue=10;
    let gValue = 10;
    console.log(`함수 func3에서 사용한 lValue : ${lValue}`)
    //전역변수와 같은 이름의 지역변순 선언해서 전역변수보다 우선순위가 높은 지역변수를 호출해 사용
    console.log(`함수 func3에서 사용한 gValue : ${gValue}`)
}}
func1();
func2();

func3();
//특정 함수 안에서 전역변수와 같은 이름의 지역변수를 선언했더라도 해당 함수 밖에서는 지역변수 사용할 수 없으니 전역변수가 사용되었다.
console.log(`함수 밖에서 사용한  gValue : ${gValue}`)