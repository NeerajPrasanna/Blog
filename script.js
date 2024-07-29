document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const noResultsDiv = document.getElementById('no');
    noResultsDiv.style.display = 'none';
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase().trim();
        let found = false;

        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            const cardId = card.id.toLowerCase();
            if (cardTitle.includes(searchText) || cardId.includes(searchText)) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
            if (searchText === '') {
                noResultsDiv.style.display = 'none';
                cards.forEach(card => {
                    card.style.display = 'block';
                });
                return; }
        });
        if (!found) {
            noResultsDiv.style.display = 'block';
        } else {
            noResultsDiv.style.display = 'none';
        }
    });
});
