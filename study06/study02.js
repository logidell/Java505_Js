console.log("============= Date 객체 ============")

// let now = new Date();
// console.log(now);
// console.log(now.toLocaleString());
// console.log(now.toString());
//
// console.log(now.getFullYear());
// console.log(now.getUTCFullYear());
// console.log(now.getMonth());
// console.log(now.getUTCMonth());
// console.log(now.getDate());
// console.log(now.getUTCDate());
//
//
// console.log(`현재의 시간은 :${now.getHours()}`);
// console.log(`현재의 UTC시간은 : ${now.getUTCHours()}`);
// console.log(`현재의 분 ${now.getMinutes()}`);
// console.log(`${now.getUTCMinutes()}`);
// console.log(`${now.getSeconds()}`);

console.log("================ Math 객체 ====================")

console.log(`PI : ${Math.PI} `);
let result = 10 / 3;
console.log(`10/3을 그대로 출력시: ${result}`);
console.log(`10/3의 소수점 올리기 : ${Math.ceil(result)}`);
console.log(`10/3 소수점 버리기 : ${Math.floor(result)}`);
console.log(`5.5에 대한 반올림 : ${Math.round(5.5)}`);
console.log(`5.5에 대한 반올림 : ${Math.round(5.4)}`);
console.log(`매개변수 중 최대 값 선택 : ${Math.max(10, 20, 30)}`);
console.log(`매개변수 중 최소 값 선택 : ${Math.min(10, 20, 30)}`);


//0.0~0/9 까지의 숫자를 밸생
console.log(`랜덤숫자 발생 : ${Math.random()}`);

// 문제1 )  Math.random ()사용해 로또 번호 생성 프로그램 작성
//(Math.round(math.random *) *45)+1

let lotto =[];

for (let i = 0; i <6; i++ ) {
    const rnd = (((Math.random) * 45) + 1);

let j=0;
do{
    if(rnd==lotto[j]){
        i--;
        break;
    }
    lotto[i]=rnd;
    j++;
}while (j < i);
for (let j = 0; j < lotto.length; j++) {
        if (rnd == lotto[j]) {
            i--;
            break
        }
        lotto[i] = rnd;
    }
}