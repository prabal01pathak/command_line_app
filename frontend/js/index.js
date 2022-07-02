url = "http://127.0.0.1:8000";
submit = () => {
    const submitBtn = document.querySelector("#submit");
    console.log("Dom content loaded");
    submitBtn.addEventListener("click", () => {
        const input_no = document.querySelector("#no");
        console.log(getData(url).then(data => console.log(data)));
    })
};

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}


window.addEventListener('DOMContentLoaded', submit);
