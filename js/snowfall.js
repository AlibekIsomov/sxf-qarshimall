document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
});

function createSnowflakes() {
    const numberOfSnowflakes = 10; // Increase for more flowers

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    document.querySelector('.snow').appendChild(snowflake);

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * window.innerHeight;

    snowflake.style.transform = `translate(${startPositionX}px, ${startPositionY}px)`; // Use transform for positioning

    const windStrength = Math.random() * 30 - 10; // Random wind strength
    const gravity = 0.5; // Gravity force

    const animationDuration = Math.random() * 3 + 2;
    snowflake.style.animationDuration = `${animationDuration}s`;
}