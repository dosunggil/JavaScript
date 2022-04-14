const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(sum);

const student = {
  이름: "홍길동",
  주소: "서울시",
  전화번화: "123412341",
  나이: 33,
};

console.table(student);

const intKor = [30, 40, 50, 60, 1323, 123];

console.table(intKor);

const intEng = Array();

intEng[0] = 100;
intEng[1] = 300;
console.table(intEng);

const intMath = Array();
for (let i = 0; i < 10; i++) {
  intMath[i] = Math.floor(Math.random() * (100 - 50) + 50);
}

console.table(intMath);

student.이름 = "이몽룡";
student.국적 = "힌ㄱㄱ";

console.table(student);
