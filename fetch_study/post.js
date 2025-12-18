const postIdDiv = document.querySelector("#post_id_div")
const userIdDiv = document.querySelector("#user_id_div")
const postTitle = document.querySelector("#post_title")
const contentBox = document.querySelector("#content_box");
const backBtn = document.querySelector("#back_btn")

window.onload = async () => {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    const postId = urlParams.get("postId");
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
        alert("서버에 문제가 발생했습니다.");
        return;
    }
    
    const data = await response.json();

    postIdDiv.innerHTML = `게시물ID:${data.id}`
    userIdDiv.innerHTML = `유저ID:${data.userId}`
    postTitle.innerHTML = data.title;
    contentBox.innerHTML = data.body;
};

backBtn.onclick = () => {
    window.location.replace("list.html");
}
