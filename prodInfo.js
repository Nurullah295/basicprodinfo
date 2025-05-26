

    // Function to handle search input and show/hide clear button
    function handleSearchInput() {
        const searchBox = document.getElementById('searchBox');
        const clearButton = document.querySelector('.clear-search');

        filterData(); // Filter the list

        // Show clear button if there's text, hide if empty
        if (searchBox.value.length > 0) {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    }

    // Function to clear search and reset list
    function clearSearch() {
        const searchBox = document.getElementById('searchBox');
        searchBox.value = '';
        document.querySelector('.clear-search').style.display = 'none';
        filterData(); // Reset the list
    }

    // Function to filter data based on search input
    function filterData() {
        const input = document.getElementById('searchBox').value.toUpperCase();
        const dataList = document.getElementById('dataList');
        const items = dataList.getElementsByTagName('li');

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.textContent.toUpperCase().indexOf(input) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    }



