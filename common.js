const root = document.documentElement;
const darkBackground = '#2b2b2b';
const lightBackground = '#fafafa';
const darkText = '#424242';
const lightText = '#fff';


// document.querySelector('body').addEventListener('click', () => {
//     if (document.body.classList.contains('dark-theme')) {
//         root.style.setProperty('--theme-background', lightBackground);
//         root.style.setProperty('--theme-text', darkText);
//         document.body.classList.remove('dark-theme');
//         document.body.classList.add('light-theme');
//     } else {
//         root.style.setProperty('--theme-background', darkBackground);
//         root.style.setProperty('--theme-text', lightText);
//         document.body.classList.add('dark-theme');
//         document.body.classList.remove('light-theme');
//     }
// });


// video playing

const videoPlay = document.querySelector('.video-contoller--play');
const videoPause = document.querySelector('.video-contoller--pause');
const video = document.querySelector('.video');
const barLine = document.querySelector('.bar__line');

videoPlay.addEventListener('click', () => {
    video.play();
    videoPlay.style.display = 'none';
    videoPause.style.display = 'block';
});

videoPause.addEventListener('click', () => {
    video.pause();
    videoPause.style.display = 'none';
    videoPlay.style.display = 'block';
});

video.ontimeupdate = function() {
    let percentage = (video.currentTime / video.duration) * 100;
    console.log(percentage);

    barLine.style.width = percentage + '%';
};

// menu 
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const body = document.body;

let keys = {
    ESC: 27,
};

menu.inert = true;

let previousActiveElement;

function showMenu() {
    menu.classList.add('menu--showed');
    let padding = window.innerWidth - document.body.offsetWidth;
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${padding}px`;

    previousActiveElement = document.activeElement;

    
    Array.from(body.children).forEach((child) => {
        if (child !== menu) {
            child.inert = true;
        }
    });

    menu.inert = false;

    close.focus();
    

    document.addEventListener('keydown', function(e){
        console.log(e)
        if (e.keyCode == keys.ESC) {
            closeMenu();
        }
    });
}

function closeMenu() {
    menu.classList.remove('menu--showed');
    body.style.overflow = 'initial';
    body.style.paddingRight = `0px`;
    Array.from(body.children).forEach((child) => {
        if (child !== menu) {
            child.inert = false;
        }
    });

    menu.inert = true;

    previousActiveElement.focus();
}

burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);

