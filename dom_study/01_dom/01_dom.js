const title1 = document.getElementById("title");
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName("title");
console.log(titles);

const h3 = document.getElementsByTagName("h3");
console.log(h3);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log({ d1 });

const title2 = document.querySelector("#title"); // 단일 선택
const titles2 = document.querySelectorAll(".title"); // 다중 선택

// const div1 = document.querySelector("#d1");
// const div2 = div1.querySelector("#d2");

const div2 = document.querySelector("#d1 > div");
console.log(div2);

div2.innerHTML = "<p>innerHtml입니다</p>"; // 태그 인식함
// div2.innerText = "<p>innerHtml입니다</p>" // 태그 처리가 안됨

const students = [
    { name: "홍길동", age: 31, address: "부산" },
    { name: "김길동", age: 23, address: "창원" },
    { name: "장길동", age: 27, address: "남해" },
];

const tbody = document.querySelector(".student_table > tbody");

const trs = students.map((student, index) => {
    return `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
    </tr>`;
});

tbody.innerHTML = trs.join("");

const tdList = document.querySelectorAll("td");
tdList.forEach((td) => (td.style = "border: 1px solid black"));

const studentTable = document.querySelector(".student_table");
studentTable.id = "table_id"; // id 할당
studentTable.classList.remove("student"); // 클래스 제거
studentTable.classList.add("student_class"); // 클래스 추가