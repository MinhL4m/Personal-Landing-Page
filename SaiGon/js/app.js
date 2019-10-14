//=====Fail Attemp=========

//- Try to change color when click when the navbar don't have bg

// const navbarToggler = document.querySelector('.navbar-toggler');
// const nav = document.querySelector('.navbar');

// change bg color on scroll
// window.onscroll = function (e) {
//     e.preventDefault();

//     let scroll = window.scrollY;
//     if (scroll > 20) {
//         nav.classList.add('navbar-bg--black');
//     } else {
//         nav.classList.remove('navbar-bg--black');
//     }
// }


//change bg color when click 
// apply when navbar don't have bg
// navbarToggler.addEventListener('click', () => {
//     if (nav.classList.contains('navbar-bg--black') && window.scrollY < 20) {
//         // nav.classList.remove('navbar-bg--black');
//     } else if (!nav.classList.contains('navbar-bg--black') && window.scrollY < 20) {
//         nav.classList.add('navbar-bg--black');
//     }
// });


//======WayPoint===========


// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })


$('#whysaigon').waypoint(function () {
    $('#whysaigon .animate').addClass('animated');
    

}, {
    offset: '50%'
});

$('#people').waypoint(function () {
    $('#people .animate').addClass('animated');


}, {
    offset: '50%'
});


$('#food').waypoint(function () {
    $('#food .animate').addClass('animated');


}, {
    offset: '50%'
});

$('#culture').waypoint(function () {
    $('#culture .animate').addClass('animated');


}, {
    offset: '50%'
});