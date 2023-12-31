const gifList = [
    'https://raw.githubusercontent.com/Shayan-Nawab/shayan/main/Images/lain_1.gif', 
    'https://raw.githubusercontent.com/Shayan-Nawab/shayan/main/Images/Yume_1.gif'
    // Add more URLs as needed
];

function getRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifList.length);
    return gifList[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('randomGif').src = getRandomGif();
});

let fourPressed = false;
let sPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        window.location.href = 'https://wikipedia.org/';
    } else if (event.key === '5' && event.ctrlKey) {
        window.location.href = 'https://tetris.com/';
    } else if (event.key === '4') {
        fourPressed = true;
    } else if (event.key === 's') {
        sPressed = true;
    } else if (event.key === 'g') {
        if (fourPressed) {
            window.location.href = 'https://openai.com/';
            fourPressed = false; // Reset the flag
        }
    } else if (event.key === 'q') {
        if (sPressed) {
            window.location.href = 'https://courses.torontomu.ca/d2l/home/790896';
            fourPressed = false; // Reset the flag
        }
    } else {
        fourPressed = false; // Reset the flag for any other keys
        sPressed = false;
    }
});
