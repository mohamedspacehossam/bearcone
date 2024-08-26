const iceCream = document.querySelector('.ice-cream');

iceCream.addEventListener('mouseover', () => {
    iceCream.style.transform = 'scale(1.1)';
});

iceCream.addEventListener('mouseout', () => {
    iceCream.style.transform = 'scale(1)';
});