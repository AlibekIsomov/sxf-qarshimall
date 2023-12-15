document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
});

function createSnowflakes() {
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    document.querySelector('.snow').appendChild(snowflake);

    const sizeVariation = Math.random() * 0.5 + 0.5; // Random size between 0.5 and 1
    snowflake.style.width = `${sizeVariation}em`;
    snowflake.style.height = `${sizeVariation}em`;

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * window.innerHeight;

    snowflake.style.left = `${startPositionX}px`;
    snowflake.style.top = `${startPositionY}px`;

    const animationDuration = Math.random() * 3 + 2;
    snowflake.style.animationDuration = `${animationDuration}s`;

    snowflake.addEventListener('animationiteration', () => {
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.top = `${-sizeVariation}em`; // Move above the viewport

    });
}