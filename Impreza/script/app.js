window.onscroll = function (e) {
    e.preventDefault();
    const nav = document.querySelector('#nav');
    let scroll = window.scrollY;
    if (scroll > 105) {
        nav.classList.add('nav__bg');
    } else {
        nav.classList.remove('nav__bg');
    }
}