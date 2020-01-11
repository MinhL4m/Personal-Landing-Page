(function mouseMove() {
    function eyes(event) {
        const right = document.querySelector('#eyeball-right');
        const left = document.querySelector('#eyeball-left');

        let x = event.clientX * 100 / window.innerWidth / 10;
        let y = event.clientY * 100 / window.innerHeight / 10;

        right.style.transform = `translate(${x}px, ${y}px)`;
        left.style.transform = `translate(${x}px, ${y}px)`;
    };


    window.addEventListener('mousemove', (e) => {
        eyes(e);
    })
})();


(function focusPass() {
    const right = document.querySelector('#eye-right');
    const rightClose = document.querySelector('#eye-right-close');
    const left = document.querySelector('#eye-left');
    const leftClose = document.querySelector('#eye-left-close');
    const mouth = document.querySelector('#mouth-open');
    const mouthClose = document.querySelector('#mouth-close');
    const password = document.querySelector('#password');
    password.addEventListener('focus', () => {
        right.style.display = 'none';
        left.style.display = 'none';
        rightClose.style.display = 'block';
        leftClose.style.display = 'block';
        mouth.style.display = 'none';
        mouthClose.style.display = 'block';
    });
    password.addEventListener('blur', () => {
        console.log('ok');
        right.style.display = 'block';
        left.style.display = 'block';
        rightClose.style.display = 'none';
        leftClose.style.display = 'none';
        mouth.style.display = 'block';
        mouthClose.style.display = 'none';
    });

})();