const addButton = document.querySelector(".add_button");
let index = 1;

addButton.onclick = () => {
    const nameInput = document.querySelector(".name_input");
    const ageInput = document.querySelector(".age_input");
    const addressInput = document.querySelector(".address_input");
    const tbody = document.querySelector(".student_table > tbody");

    if (!nameInput.value || !ageInput.value || !addressInput.value) {
        alert("빈 값이 있습니다.");
        return;
    }

    tbody.innerHTML = `
    <tr>
        <td>${index++}</td>
        <td>${nameInput.value}</td>
        <td>${ageInput.value}</td>
        <td>${addressInput.value}</td>
    </tr>
    ` + tbody.innerHTML;

    nameInput.value = "";
    ageInput.value = "";
    addressInput.value = "";
}