const student = {
    name: "홍길동",
    age: 27,
    address: "부산광역시",
    phone: "010-1234-5678",
};

const { name, address } = student;
console.log(name, address);

// REST 문법(...)
const { age, phone, ...other } = student;
console.log(age);
console.log(phone);
console.log(other);

const numbers = [1, 2, 3, 4];

const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// Spread 문법
// 기존 객체의 모든 속성을 새로운 객체에 복사하거나,
// 새로운 속성을 추가할 때 사용

const newStudent = {
    ...student,
    gender: "male",
};

console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
    names = [...names, name];
} // push와 동일

addName("홍길동");
addName("김길동");
addName("박길동");
addName("장길동");

console.log(names);

let obj = {
    data1: "data1",
    data2: "data2",
};

function addData(data) {
    obj = {
        ...obj,
        ...data,
    };
}

addData({ data3: "data3", data4: "data4" });
console.log(obj);

let book = {
    title: "해리포터",
    author: "J.K 롤링",
    publisherYear: 1997,
};

console.log(book.title);
console.log(book["author"]);

book.getAge = () => {
    return new Date().getFullYear() - book.publisherYear;
};

console.log(book.getAge());

book.genre = "판타지";

book.publisherYear = 2000;
console.log(book);

// --------------------------------------
const products = [
    { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
    { id: 2, name: "티셔츠", price: 25000, category: "의류" },
    { id: 3, name: "모니터", price: 300000, category: "전자제품" },
    { id: 4, name: "청바지", price: 50000, category: "의류" },
    { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];

// 1.
const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);

// 2.
const productNamesPrices = products.map((product) => ({
    name: product.name,
    price: product.price,
}));
console.log(productNamesPrices);

// 3.
const discountProducts = products
    .filter((product) => product.category == "전자제품")
    .map((product) => ({ name: product.name, price: product.price * 0.9 }));
console.log(discountProducts);

// =========================================================================================

// const [value, setValue] = useState("");
// value: 현재 상태, setValue: value를 바꿔주는 함수

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set");
            dataState.data = d;
        },
    };

    return [dataState.data, dataState.setData];
};

const [value, setValue] = useState(10); // value: 10으로 시작
console.log(value);
setValue(20);
console.log(value);
