// Animation email
let email = document.querySelector('#email');

function onEmailFocus(e) {
    document.getElementById('path3785').style.display="none";
    document.getElementById('bouche').style.display="block";

    document.getElementById('bouche').animate([
        { transform: 'translate(285px, 290px) scale(1.2, 0.8)' },
        { transform: 'translate(285px, 290px) scale(1, 0.8)' },
        { transform: 'translate(305px, 290px) scale(0.8, 0.8)' }
    ], {
        duration: 100,
        fill: "forwards",
    }); 
}

function onEmailBlur(e) {
    document.getElementById('path3785').style.display="block";
    document.getElementById('bouche').style.display="none";
}

email.addEventListener('focus', onEmailFocus);
email.addEventListener('blur', onEmailBlur);


// Animation password

let password = document.querySelector('#password');

function onPasswordFocus(e) {
    document.getElementById('rightHand').animate([
        { transform: 'rotate(10deg) translate(25px, -120px)' }
    ], {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
    });
    document.getElementById('rect3821').animate([
        { transform: 'rotate(52deg)' }
    ], {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
    });

    document.getElementById('leftHand').animate([
        { transform: 'rotate(-10deg) translate(-30px, -120px)' }
    ], {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
    });
    document.getElementById('rect3821-5').animate([
        { transform: 'rotate(-52deg)' }
    ], {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out"
    });
}

function onPasswordBlur(e) {
    document.getElementById('rightHand').animate([
        { transform: 'rotate(-40deg) translate(14px, -25px)' }
    ], {
        duration: 100,
        fill: "forwards"
    });
    document.getElementById('rect3821').animate([
        { transform: 'translateX(-14px)' }
    ], {
        duration: 100,
        fill: "forwards"
    });

    document.getElementById('leftHand').animate([
        { transform: 'rotate(40deg) translate(-25px, -15px)' }
    ], {
        duration: 100,
        fill: "forwards"
    });
    document.getElementById('rect3821-5').animate([
        { transform: 'translate(-6px)' }
    ], {
        duration: 100,
        fill: "forwards"
    });
}


password.addEventListener('focus', onPasswordFocus);
password.addEventListener('blur', onPasswordBlur);