let lastKeyPressed = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        window.location.href = 'https://wikipedia.org/';
    } else if (event.key === '4') {
        if (event.ctrlKey) {
            window.open('https://tetris.com/', '_blank');
        } else {
            lastKeyPressed = '4';
        }
    } else if (event.key === 'g' && lastKeyPressed === '4') {
        window.open('https://openai.com/', '_blank');
        lastKeyPressed = ''; // Reset the last key pressed
    } else {
        lastKeyPressed = ''; // Reset the last key pressed for any other keys
    }
});

