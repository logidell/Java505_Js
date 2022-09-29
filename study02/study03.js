console.log("===========문자열 함수============")
//문자열
//문자열  변수 사용시 선언 방법
let str1 = " 일반적 = 을 사용한 방법"
let str2 = new String('new 키워드 사용 방법');

console.log(str1);
console.log(str2);


str1 = "test";
st2 = new String("test");
console.log(str1);
console.log(str2);
console.log("str1 == str2 : " + (str1 == str2));
console.log("str1 === str2 : " + (str1 === str2));

str3 = "test";
str4 = "test";

console.log("str1 == str2 : " + (str3 == str4));
console.log("str1 === str2 : " + (str3 === str4));

str5 = new String("test");
str6 = new String("test");
console.log("str5 == str6 : " + (str5 == str6));
console.log("str5 === str6 : " + (str5 === str6));

console.log("===================slice=================")
console.log("\t")
// length : 문자열의 길이 출력
// slice() : 문자열의 일부를 추출. 원본은 그대로 새 문자열 반환 , 끝 index 포함치 않음 -값을 뒤에서부터 가져온다.
//      사용법 : 변수명.slice (시작 index , 끝 index);
//      사용법 : 변수명.slice (시작 index);
const str7 = "사과, 바나나, 파인애플";

console.log("원본 문자열 : " + str7);
let str8 = str7.slice(4);
console.log("자른 문자열 : " + str8 )
str8 = str7.slice(4, 7);
console.log("자른 (4,7)문자열 : " + str8 )
//-값을 사용할 수 있음.
console.log(" ============ -값을 사용하기 ")
str8 = str7.slice(-9, -6);
console.log("자른 (-9, -6)문자열 : " + str8 )
str8 = str7.slice(-9);
console.log("자른 (-9)문자열 : " + str8 )
// 양수일 경우 처음부터 count , 음수일 경우 뒤에서부터 count
console.log("=============substring===============")
console.log("\t")
// substring() : slice() 와 비슷한 기능, 원본은 그대로 두고 새 문자열을 반환한다.
// 가장 작은 값이 0이기 때문에 음수를  사용할 시 가장 작은 값인 0으로 반환하여 문자열을 가져온다.
//      사용법 : 변수명.substring (시작 index , 끝 index);
//      사용법 : 변수명.substring (시작 index);
console.log("원본 문자열 : " + str7);
str8 = str7.substring(4);
console.log("substring(4)로 가져온 문자열 : " + str8);
str8 = str7.substring(4,7);
console.log("substring(4,7)로 가져온 문자열 : " + str8);
//양수 값만 사용할 수 있다.
console.log("================== -값 사용할 경우 ")
str8 = str7.substring(-9);
console.log("substring(-9)로 가져온 문자열 : " + str8); //-> 인식이 안되고 0으로 동작
console.log("\n");


console.log("========substr==== 곧 삭제될 예정이라 함. =============")
console.log("\n")
// substr() : slice와 비슷한 기능, 2번째 매개변수가 추출할 문자열의 길이를 뜻한다. (2번부터 가져오라)
// 두번째 매개변수가 없을 경우 문자열의 끝까지 가져온다.
//      사용법 : 변수명.substr (시작 index , 길이(또는 글자수));
//      사용법 : 변수명.substr (시작 index);
console.log("원본 문자열 : " + str7);
str8 = str7.substr(4,3);
console.log("substr(4,3)로 가져온 문자열 : "+ str8)
str8=str7.substr(4);
console.log("substr(4)로 가져온 문자열 : "+ str8)
console.log("\n");


console.log("================replace======================")
console.log("\n");
// replace() : 검색한 문자를 지정한 문자로 변환, 검색된 첫번째 문자열만 변경, 검색된 모든 문자열을
// 변경하려면 정규표현식을 사용해야 한다. 원본은 그대로 두고 새 문자열을 반환한다.
//      사용법 : 변수명.replace ( 검색할 문자열 , 변경할 문자열 );
console.log("원본 문자열 : " + str7);
let str9 = str7.replace("바나나", "몽키바나나");
console.log("replace() 사용 후 : "+ str9);
str9=str7.replace(","," ");
console.log("replace()로 문자 삭제 : " + str9);
str9=str7.replace(/,/g,""); // /,정규표현식의 시작 /g 정규표현식 끝
console.log("replace()와 정규표현식으로 검색되는 모든 문자 변경 : " + str9);
console.log("\n");


console.log("==================toUpperCase================")
console.log("\n");
// toUpperCase() : 영문자를 모두 대문자로 변경
//      사용법 : 새 변수 = 변수명.toUpperCase ();
let str10 = "Hello World!"
console.log("원본 문자열 : " + str10);
let str11 = str10.toUpperCase();
console.log("toUpperCase() 사용 후 : " + str11);

console.log("===========toLowerCase===================")
// toLowerCase() : 영문자를 모두 소문자로 변경
//      사용법 : 새 변수 = 변수명.toUpperCase ();
str10 = "Hello World!"
console.log("원본 문자열 : " + str10);
str11 = str10.toLowerCase();
console.log("toLowerCase() 사용 후 : " + str11);
console.log("\n");

console.log("==================concat================")
console.log("\n");
// concat() : 2개 이상의 문자열을 하나의 긴 문자열로 변환, 원본은 그대로 두고 새 문자열로 반환한다.
//      사용법 : 새 변수 = 문자열1.concat(문자열2...);
console.log("원본 문자열 str10 : " + str10 + "\tstr11 : " + str11);
let str12 = str10.concat(str11);
console.log("concat 사용 후 : " + str12);
str12=str10+""+str11;
console.log("str10+' '+str11 : " +str12);
console.log("\n");
console.log("==================trim================")
console.log("\n");
// trim() : 문자열에 포함된 앞, 뒤의 공백을 삭제해준다. (start trim / end trim 추가됨.)
//      사용법 : 새 변수 = 문자열.trim();
const str13 = "          공백이 이만큼이나 있다굿?          "
console.log("원본 문자열 str13 : " +str13);
let str14 = str13.trim();
console.log("trim 사용후 str14 : " +str14);
console.log("\n");

console.log("==================charAt================")
console.log("\n");
// charAt() : 지정한 index에 있는 문자를 반환한다.
//      사용법 : 새 변수 = 문자열.charAt(index);
str13
console.log("원본 문자열 str13 : " +str13);
str14=str13.charAt(10);
console.log("charAt(10)으로 가져온 문자 : " +str14);
//이걸 원하는 문자 검색하려고 가져오려면 반복문 써야함.
console.log("\n");

console.log("=================split================")
console.log("\n");
// split() : 문자열을 지정한 문자를 기준으로 전부 잘라내어 배열로 반환한다.
//      사용법 : 새 배열 = 문자열.split(문자열);
const str15 = "문대,아현,세진,유진,청우,세진";
console.log("원본 문자열 str15 : " +str15);
console.log(typeof (str15));
let arr1 = str15.split(",");
console.log("split 사용후 : " );
console.log(arr1); //-> 잘린 뒤 배열로 바뀜
console.log(typeof (arr1)) // output : object. 배열도 결국 object이기 때문.

console.log("==================== 검색에 관련된 함수 =========================")
console.log("=================indexOf================")
console.log("\n");
const str16 = "문자열 내에서 지정한나난ㄴ난ㄴ나 검색어를 검색해 해당 인덱스 번호를 반환한다바난나나"
console.log("원본 문자열 str16 : " +str16);
let index = str16.indexOf("나")
console.log("indexOf('나') 의 위치: " + index );
index = str16.indexOf("",16);
console.log("indexOf('', 16) 의 위치: " + index )

// indexOf() : 문자열 내에서 지정한 검색어를 검색해 해당 인덱스 번호를 반환한다.
//      사용법 : 변수 = 문자열.indexOf(검색어);
//      사용법 : 변수 = 문자열.indexOf(검색어, 검색 위치);

console.log("=================lastIndexOf================")
// lastIndexOf() : 문자열 내에서 지정한 검색어를 뒤에서부터 검색해 해당 인덱스 번호를 반환한다.
//      사용법 : 변수 = 문자열.lastIndexOf(검색어);
//      사용법 : 변수 = 문자열.lastIndexOf(검색어, 검색 위치);console.log("\n");
console.log("원본 문자열 str16 : " +str16);
index = str16.lastIndexOf("나")
console.log("indexOf('나') 의 위치: " + index );
index = str16.lastIndexOf("",30);
console.log("lastIndexOf('', 30) 의 위치: " + index )
console.log("\n");

console.log("=================================")
console.log("\n");
// search() : indexOf와 비슷한 기능을 가지고 있다. 정규표현식에서 사용할 수 있다. indexof와 달리 두번째 매개변수가 없다.
//      사용법 : 변수 = 문자열.search(검색어);
const str17 = "사과, 배, 감, 귤, 복숭아, 포도, 사과, 배, 감, 귤, 복숭아, 포도"
console.log("원본 문자열 str17 : " +str17);
index =str17.search("감");
console.log("search('감')으로 검색한 위치 : " + index);
console.log("\n");

console.log("=================================")
console.log("\n");
// match() :  indexOf와 비슷한 기능을 가지고 있다. 정규표현식에서 사용할 수 있다. 검색된 내용을 배열로 반환한다.
//      사용법 : 변수 = 문자열.match(검색어);
console.log("원본 문자열 str17 : " +str17);
arr1 = str17.match(/귤/g)
console.log("match /귤/g 로 검색 : ")
console.log(arr1);
console.log("\n");

console.log("=================================")
console.log("\n");
// includes() : 지정한 문자열이 존재하는지 아닌지 확인한다. es6에서 사용한다.

console.log("원본 문자열 str17 : " +str17);
let bVal = str17.includes("귤");
console.log("include('귤') 로 확인 : " + bVal );
bVal = str17.includes("한라봉");
console.log("\"include('한라봉') : " + bVal );
index=str17.indexOf("한라봉");
console.log("include('한라봉')로 확인" + index);
// 0보다 작으면 검색되는 것이 없고 0보다 크면 검색되는 것이 있다고 예전엔 그렇게 판단했다 함.
console.log("\n");

console.log("=================================")
console.log("\n");
// startWith() : 지정한 문자열로 시작하면 t, 아니면 f
//      사용법 : 변수 = 문자열.startWith(문자열);
console.log("원본 문자열 str17 : " +str17);
bVal = str17.startsWith("사과");
console.log("startsWith('사과')로 확인 : " + bVal);
bVal = str17.startsWith("바나나");
console.log("startsWith('바나나')로 확인 : " + bVal);

console.log("=====================")
// endWith() :  지정한 문자열로 종료하면 t, 아니면 f
//      사용법 : 변수 = 문자열.endWith(문자열);
console.log("원본 문자열 str17 : " +str17);
bVal = str17.endsWith("사과");
console.log("endWith('사과')로 확인 : " + bVal);
bVal = str17.endsWith("포도");
console.log("endWith('포도')로 확인 : " + bVal);


