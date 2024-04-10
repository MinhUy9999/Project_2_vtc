const sign_in_btn = document.getElementById('sign-in-btn');
const sign_up_btn = document.getElementById('sign-up-btn');
const container_login = document.querySelector('.container-login');

sign_up_btn.addEventListener('click', () => {
    container_login.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container_login.classList.remove('sign-up-mode');
});
