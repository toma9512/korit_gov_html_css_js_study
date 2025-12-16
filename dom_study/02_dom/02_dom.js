const inputButton = document.querySelector(".input_button");

inputButton.onclick = () => {
    // console.log("클릭됨")
    const input = document.querySelector(".inputs");
    const ul = document.querySelector(".data_list");

    if (!input.value) {
        alert("빈칸");
        return;
    }

    ul.innerHTML += `<li>${input.value}</li>`;

    input.value = "";
}