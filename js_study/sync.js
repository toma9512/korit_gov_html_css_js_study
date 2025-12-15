// JavaScript는 기본적으로 동기적 수행을 한다.
// : 싱글스레드 언어이기 때문이다

console.log("작업 1")
print();
console.log("작업 3")

function print() {
    console.log("작업 2")
}

// JavaScript는 실행 전 함수나 변수들을 미리 메모리에 올려놓는다.
// 호이스팅 => 변수와 함수를 코드의 최상단으로 끌어올린다

// 동기적 실행방식에는 block이라는 현상이 발생할 수 있다
// block: 이전 작업이 완료되지 않으면 다음 작업이 수행되지 않는 현상
