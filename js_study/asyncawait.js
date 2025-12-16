/*
async - 비동기 함수 정의 키워드
await - 비동기 함수 동기 호출 키워드

이때, await는 async 함수 내부에서만 사용가능
*/

// const promise = new Promise((resolve) => resolve("홍길동"));

// 비동기 함수로 만들기(async) -> Promise를 반환함
// async function getData() {
//     return "홍길동";
// }

// const user = getData();
// user.then((name) => console.log(name));
// user에 promise 객체가 들어있으므로 then 사용 가능

// 해당 함수 자체는 동기지만 비동기적 수행을 하기위한 트리거로 작동되므로, 비동기적으로 작동된다
function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("사용자 데이터 받아옴");
            resolve({ name: "홍길동", age: 31 });
        }, 2000);
    });
}

function getTodoReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("TODO 데이터 받아옴");
            resolve({ todoId: 1, title: "잠자기" });
        }, 3000);
    });
}

// async function getData() {
//     getUserReq();
//     await getUserReq(); // 비동기적 수행이 다 실행되고 난 후에 다음 작업이 시작됨 (동기적 수행으로 변경)
//     getUserReq();
//     return "서버2";
// }

// const data = getData();
// data.then((data) => {
//     console.log(data);
// });

async function getData() {
    const user = await getUserReq();
    const todo = await getTodoReq();
    console.log(`${user.name}의 할 일: ${todo.title}`)
} ß

getData();
