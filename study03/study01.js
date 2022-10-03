console.log("======================")

let count = 1;
// 카운트 변수 선언
// while (조건식) {
//     반복 실행 될 소스 코드
//     카운트 변수의 증감식
// }
while (count < 11) {
    console.log(count);
    count++;
}

dan = 5;
count = 1;

while (count < 10) {
    console.log(`${dan}*${count} = ${dan * count}`)
    count++;
}

// 문제1 구구단 전체 출력을 while문을 사용해 출력

// let i = 2;
// let j = i
// while (i < 10) {
//     console.log(`==${i}* ${j} = ${i * j}`)j++}
//
//
// }


console.log("for문 사용하기 ");

let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum = i + sum
    console.log(sum);
}


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//문제 2 배열 arr1 이용해 1~10까지 총합 구하는 프로그램 for문으로 작성하기
sum = 0;
for (let i = 0; i < arr1.length; i++) {
    // sum += arr1[i];
    sum = sum + arr1[i];
    console.log(`총 합은 ${sum}`);
}

console.log("========================================\n")

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break; // 자신과 제일 가까운 for 문 하나만 정지시킨다.
    } else {
        console.log(`현재 ${i}의 값`)
    }
}
console.log("\t")
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    } else {
        console.log(`현재 ${i}의 값`)
    }
}

for (let i = 2; i < 10; i++) {
    if (i == 5) {
        break;
    }
    for (let j = 1; j < 10; j++) {
        if (i == 5) {
            break;
        }console.log (`${i}*${j} = ${i * j}`)

    }

}
console.log("========================================\n")
