
const fakeMainMenuBtn = document.querySelector('.fake-main-menu__btn')
const body = document.querySelector('body');
let isGameRunned = false;
fakeMainMenuBtn.addEventListener('click', () => {
    const fakeGame = document.querySelector('.fake-game')
    const fakeGameplay = document.querySelector('.fake-gameplay')
    fakeGame.style.display = 'block'
    fakeGameplay.play()

    const mainEvent = window.addEventListener("keydown", (event) => {
        const rickroll = document.querySelector('.rickroll')
        const rickrollVideo = document.querySelector('.rickroll-video')
        let k = event.keyCode;
        setTimeout(() => {
            if ((k == 37 || k == 65 || k == 38 || k == 87 || k == 39 || k == 68 || k == 40 || k == 83) && !isGameRunned) {
                rickroll.style.display = 'block'
                rickrollVideo.play()
                fakeGameplay.pause();
                fakeGame.style.display = 'none'
            } else if (k == 80) {
                isGameRunned = true
                const gameCentralizer = document.querySelector('.centralizer')
                const fake = document.querySelector('.fake')
                gameCentralizer.style.display = 'flex'
                fake.style.display = 'none'
                fakeGameplay.pause()
                body.classList.toggle('fake-background');
                body.classList.toggle('real-background');
            }
            window.removeEventListener('keydown', mainEvent)
        }, 1);
    });
})

