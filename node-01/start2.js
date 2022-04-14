/* 
변수의 선언 키워드: var, const, let
var : java 에서의 static
const : 불변 변수 java 에서의 final
let : 일반적인 변수, js에서는 변수의 타입을 지정하지 않는다.
 = 변수에 대한 문제가 발생할 수 있다.
 = 동적 type 변수 ( java 는 정적 type 변수)

*/
var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

var num = "KOREA";
// let num1 = "REREQW";

console.log(num1);

intNum = 100;
console.log(intNum);

for (let i = 0; i < 10; i++) {}
//let 키워드로 선언된 변수는 {} 를 벗어나면 소멸된다.
// console.log(i);

//var 키워드로 선언된 변수는 static 이고, for 가 끝나도 생존해있다.
for (var j = 0; j < 10; j++) {}
console.log(j);

//변수값을 이후에 변경해야 하는 경우에는 cosnt를 사용하면 안된다.
//for (const n = 0; n < 10; n++) {}
