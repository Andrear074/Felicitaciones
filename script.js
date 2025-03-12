// script.js
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Has seleccionado uno: ${item.dataset.content}`);
    });
});

