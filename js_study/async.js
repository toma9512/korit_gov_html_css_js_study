// block 현상을 해결하기 위해 탄생한 것이 비동기

setTimeout(() => {
    console.log("작업 2");
}, 3000);

console.log("작업 1");

// JavaScript는 싱글스레드지만,
// web api라는 엔진이 따로 존재하는데 여기서 비동기 처리를 도와줌
