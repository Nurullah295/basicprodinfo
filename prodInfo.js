/**
 * Premium Search Interaction
 */

function handleSearchInput() {
    const searchBox = document.getElementById('searchBox');
    const clearButton = document.querySelector('.clear-search');

    const query = searchBox.value.trim().toUpperCase();
    const dataList = document.getElementById('dataList');
    const items = dataList.getElementsByTagName('li');

    // Show/Hide clear button with animation
    if (query.length > 0) {
        clearButton.style.display = 'flex';
    } else {
        clearButton.style.display = 'none';
    }

    // Filter items with a clean animation feel
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;

        if (text.toUpperCase().indexOf(query) > -1) {
            item.style.display = '';
            // Re-trigger animation if needed
            item.style.animation = 'none';
            item.offsetHeight; // trigger reflow
            item.style.animation = null;
        } else {
            item.style.display = 'none';
        }
    }
}

function clearSearch() {
    const searchBox = document.getElementById('searchBox');
    searchBox.value = '';
    handleSearchInput();
    searchBox.focus();
}

// Ensure smooth focus on search box
document.getElementById('searchBox').addEventListener('focus', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
