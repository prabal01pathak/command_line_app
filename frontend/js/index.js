url = "http://127.0.0.1:8000/";
submit = () => {
    const submitBtn = document.querySelector("#submit");
    console.log("Dom content loaded");
    submitBtn.addEventListener("click", () => {
        const input_no = document.querySelector("#no");
        const file = document.querySelector("#files");
        // console.log(getData(url).then(data => console.log(data)));
        data = {
            "message": input_no.value,
            "file": file.files[0]
        };
        let response = postData(url, data)
        console.log(response.then(data => console.log(data)))
    })
};

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

async function postData(url, data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    });
    return response.json()
}

window.addEventListener('DOMContentLoaded', submit);
