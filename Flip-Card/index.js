
const flipcard = document.querySelector(".flip_container")
// let boxes=document.querySelectorAll(".flip-card")
// let flipinner=document.querySelectorAll(".flip-card-inner")
let flipfrontImage = document.querySelectorAll(".flip-card-front img")
let flipback = document.querySelectorAll(".flip-card-back")
let startButton = document.querySelector("#start")
let timerDiv = document.querySelector("#timmer")
let Thanks = document.querySelector("#thanks")
let gameOver=document.querySelector("#gameover")


const images = [
    'assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg', 'assets/image4.jpg', 'assets/image5.jpg', 'assets/image6.jpg',
];

let ActualImg = [...images, ...images]
let imageStore = [];
let noRepeatImage = [];
let openImage = 0;
let counter = 0
let clickCount=0;
let timmer = 60;



creatBackImages()
startButton.addEventListener("click", function () {
    startButton.style.display = "none"
    flipcard.style.display = "flex"

})

flipfrontImage.forEach(frontImage => {
    frontImage.addEventListener("click", function () {
        clickCount++
        openImage++
        frontImage.parentElement.parentElement.classList.add("backSide")
        imageStore.push(frontImage.parentElement.nextElementSibling.children[0])

        if (openImage > 1) {
            if (imageStore[0].src === imageStore[1].src) {
                openImage = 0;
                imageStore.length = 0
                counter++

            }
            else {
                setTimeout(() => {

                    imageStore.forEach((item) => {
                        item.parentElement.parentElement.classList.remove("backSide")
                    })
                    openImage = 0;
                    imageStore.length = 0;
                }, 1000);
            }
        }

    })


});

function creatBackImages() {
    for (let i = 0; i < ActualImg.length; i++) {
        const backImage = document.createElement("img")
        backImage.src = ActualImg[RandomImage()]
        flipback[i].append(backImage)

    }
}

function RandomImage() {
    let RandomIndex = Math.floor(Math.random() * ActualImg.length)
    if (noRepeatImage.includes(RandomIndex)) return RandomImage()
    else {
        noRepeatImage.push(RandomIndex)
        return RandomIndex
    }
}
timeCount()


function timeCount() {
    let time = setInterval(() => {
        timerDiv.innerHTML = timmer 
         timmer--
        if (timmer === 0 || counter == 6) {
            flipcard.style.display = "none"
            timerDiv.style.display = "none"
            Thanks.style.display="block"
            gameOver.style.display="block"
            let play = document.createElement("h2")
            play.innerHTML = `Clicked ${clickCount} Times And Your Matching is ${counter}` 
            Thanks.append(play)

            clearInterval(time)
        }

    }, 1000);
}
