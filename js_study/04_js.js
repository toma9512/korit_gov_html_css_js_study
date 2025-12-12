// 배열
const arr1 = []; // 빈 배열
const arr2 = new Array(); // 빈 배열

// push
// 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 == arr2);
console.log(arr1 === arr2);

const json1 = JSON.stringify(arr1); // json 형식의 문자열로 만들어줌
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json1 == json2);
console.log(json1 === json2);

const arr3 = JSON.parse(json1);
console.log(arr3);

const names = ["홍길동", "김길동", "장길동"];
names.push("방길동");

// 요소 제거 : pop
// 마지막 요소 제거 후 반환
console.log(names.pop());
console.log(names.pop());

// 요소 수정, 삽입, 제거 -> splice(삽입 될 인덱스, 제거 할 갯수, 추가할 요소 ..)
names.splice(1, 0, "이길동");
console.log(names);

names.splice(1, 1);
console.log(names);

names[0] = "길동";
console.log(names);

// 요소 찾기 -> 주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환
const findFx = (str) => str === "길d동";
const foundName = names.find(findFx);
console.log(foundName);
console.log(names.find((name) => name === "길동"));

const students = [
    { name: "홍길동", age: 28 },
    { name: "김길동", age: 31 },
    { name: "박길동", age: 23 },
    { name: "정길동", age: 18 },
];
console.log(students.find((obj) => obj.name === "김길동" && obj.age == 31));