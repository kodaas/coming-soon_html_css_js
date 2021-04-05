let emailDOM = document.querySelector('#email');
let errMsg = document.querySelector('#err-msg');
let border = document.querySelector('.news-letter');


function submit() {
    let email = document.querySelector('#email').value;
    let containAt = email.includes('@', 0);

    if (email === '' || !containAt){
        border.style.border = '2px solid var(--dark-red)';
        errMsg.style.display = 'block';
        emailDOM.style.backgroundImage = 'url("images/icon-error.svg")';
    } else {
        border.style.border = '2px solid var(--light-pink)';
        errMsg.style.display = 'block';
        errMsg.style.color = 'green';
        errMsg.innerHTML = 'Thanks for Subscribing';
        emailDOM.style.backgroundImage = ''
    }
}
