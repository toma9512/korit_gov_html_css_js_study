// 변수 선언 : let, const (변수, 상수)
let name = "홍길동";
console.log(name);
name = "김길동";
console.log(name);

const age = 27;
console.log(age);
// age = 18;
// console.log(age);

// 연산자
let data1 = 10;
let data2 = "10";

// 동등 연산자
let result = data1 == data2; // 내용물 비교 (값 비교)
console.log(result);

// 일치 연산자
let result2 = data1 === data2; // 객체 비교 (값과 타입 모두 비교)
console.log(result2);

// 타입을 확인
console.log(typeof data1, typeof data2);

console.log("1" + "2");
console.log(1, 2);

// !not 연산자
console.log(!1); // false
console.log(!0); // true
console.log(!"a"); // false
console.log(!""); // true
console.log(!null); // true
console.log(!!null) // false 
// !! : 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("abc".length); // 3
console.log("abc".length > "ab".length); // true
console.log(!!"" === false); // true

// 객체(Object)
let data = {
    name: "홍길동",
    age: 24
};

if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name === "김길동" && data.age === 27) {
    console.log("사용자 이름과 나이가 모두 일치합니다.");
}else if (data.name === "김길동") {
    console.log("사용자 이름이 일치합니다.");
} else if (data.age === 24) {
    console.log("사용자 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log(data);
}

for (let i=0; i<10; i++) {
    console.log(i);
}