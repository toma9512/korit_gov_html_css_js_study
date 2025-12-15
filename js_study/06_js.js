// 단축 평가 논리 연산
// && ||

const name = "홍길동";
console.log(!!name && !!"홍길동");

// 앞의 값이 true일 때 뒤의 값을 리턴
// 앞의 값이 false일 때 false를 리턴
console.log(true && 10); // 10
console.log(false && 10); // false

const data = [1, 2, 3];
console.log(data.length != 0 && "출력");

// 앞의 값이 true일 때 true를 리턴
// 앞의 값이 false일 때 뒤의 값을 리턴
console.log(true || 10); // true
console.log(false || 10); // 10

// ?? : 앞의 값이 null 또는 undefinded가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(false ?? 100);
console.log(0 ?? 100);
console.log("" ?? 100);
