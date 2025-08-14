// Mark all steps as complete visually
document.getElementById('markComplete').addEventListener('click', () => {
    document.querySelectorAll('ol li').forEach(item => {
        item.style.backgroundColor = '#e6f5ec';
        item.style.borderLeft = '4px solid #0e7045';
        item.style.paddingLeft = '10px';
    });
});
