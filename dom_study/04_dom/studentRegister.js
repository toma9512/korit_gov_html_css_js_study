let autoIncrement = 1;

let studentInputValue = {
    id: 0,
    name: "",
    age: "",
    address: "",
};

function handleRegisterOnkeyup(e) {
    // console.log("value:", e.target.value);
    // console.log("name:", e.target.name);
    studentInputValue = {
        ...studentInputValue,
        [e.target.name]: e.target.value,
    };
}

const handleRegisterOnclick = () => {
    const newStudent = {
        ...studentInputValue,
        id: autoIncrement++,
    };

    studentList = [...studentList, newStudent];

    loadStudentList();
};

function studentRegister() {
    return `
        <div>
            ${studentRegisterInput({
                type: "text",
                name: "name",
                onkeyup: "handleRegisterOnkeyup",
                placeholder: "이름",
            })}
            ${studentRegisterInput({
                type: "text",
                name: "age",
                onkeyup: "handleRegisterOnkeyup",
                placeholder: "나이",
            })}
            ${studentRegisterInput({
                type: "text",
                name: "address",
                onkeyup: "handleRegisterOnkeyup",
                placeholder: "주소",
            })}
            <div>
                <button onclick=handleRegisterOnclick()>등록</button>
            </div>
        </div>
    `;
}
