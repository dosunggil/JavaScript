const keys = ["이름", "주소", "전화번호"];
console.log(keys);

const student = { 이름: "홍길동", 주소: "서울시", 전화번호: "1111111" };

console.log(student);
console.log(student[keys[2]]);

for (let i = 0; i < keys.length; i++) {
  console.log(student[keys[i]]);
}

//JSON Data 인 student 의 이름 속성을 별도로 추출하여
//개별 변수로 선언하기
const { 이름 } = student;
console.log(이름);

//JSON type 데이터를 return 하는 함수
const studentFun = () => {
  return {
    성명: "이몽룡",
    주소: "남원시",
    나이: 20,
  };
};

const { 성명, 나이 } = studentFun();
console.log(성명, 나이);
