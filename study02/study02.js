console.log("==========객체타입 object type ==========")

//원래 객체 타입은 js의 클래스라 생각하면 된다. 함수와 변수를 모두 가지고 잇는 데이터 타입의 형태
//위에서 말하는 객체 타입은 배열과 같은 형태로 사용하는 객체 타입을 말한다.
//이를 object type 이라고 이야기 한다.
//배열처럼 하나의 변수명으로 여러개의 데이터를 저장할 수 있는 데이터 타입
//index가 없고 key 데이터를 구분하기 위해 key 사용함 key와 value 값이 1:1로 연동되어 있는 형태의 데이터 타입
//사용 기호는 {}, key와 value는 :으로 구분하고 각각 데이터는 ,로 구분
//key를 설정시 문자열로 입력하고 ",'는 생략해도 된다.

// key
// 사용법 : 사용(변수명.key// 출력)
// 변수명.key = 데이터 //저장
// 변수명["key"]
// 변수명["key"] = 데이터//저장

// obj = {name: '홍길동', 'age': 30, "gender": '남자'};
//
// console.log("이름 : " + obj.name);
// console.log("나이 : " + obj.age);
// console.log("성별 : " + obj['gender']);
//
// obj.name = "iu"
// obj['gener'];
//
// console.log("이름 : " + obj.name);
// console.log("나이 : " + obj.age);
// console.log("성별 : " + obj['gender']);
// obj.jab = "가수"
// console.log("직업 : " +obj["jab"]);