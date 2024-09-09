document.addEventListener("DOMContentLoaded", () => {
    
    const background = document.querySelector('.background');
    const authBox = document.querySelector('.auth_box');
    const logo = document.querySelector('.logo');

     

    setTimeout(() => {
        background.classList.add('shrink');

        setTimeout(() => {
            logo.classList.add('moved');
        }, 1000);

        setTimeout(() => {
            content.style.display = 'flex'; 
            setTimeout(() => {
                content.classList.add('show-content'); 
            }, 50);
        }, 4000); 
    }, 1000);

    const loginBtn = document.querySelector(".loginBtn");
    const onlineIdInput = document.querySelector("input[placeholder='Online ID']");
    const passwordInput = document.querySelector("input[name='password']");

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const onlineId = onlineIdInput.value.trim();
        const password = passwordInput.value.trim();

        if (onlineId === "" || password === "") {
            alert("Please fill out both Online ID and Password");
            return;
        }


        localStorage.setItem("onlineId", onlineId);

        document.getElementById('container').innerHTML = `Hello, ${onlineId}`
    });
});


