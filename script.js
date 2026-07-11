// База данных мест для путешествий (включает как минимум два пляжа, как просит задание)
const travelData = [
    {
        name: "Copacabana Beach",
        type: "beach",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500",
        description: "A world-famous magnificent beach located in Rio de Janeiro, Brazil."
    },
    {
        name: "Maldives Beaches",
        type: "beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
        description: "White sand and crystal clear turquoise waters in the Indian Ocean."
    },
    {
        name: "Tokyo City",
        type: "city",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500",
        description: "A bustling dynamic metropolis combining ultra-modern trends with ancient temples."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    function performSearch() {
        const keyword = searchInput.value.toLowerCase().trim();
        resultsDiv.innerHTML = ''; // Очищаем старые результаты

        if (keyword === '') {
            resultsDiv.innerHTML = '<p>Please enter a keyword to search.</p>';
            return;
        }

        // Фильтруем данные по ключевому слову (например, beach)
        const filteredDestinations = travelData.filter(destination => 
            destination.type.includes(keyword) || destination.name.toLowerCase().includes(keyword)
        );

        if (filteredDestinations.length === 0) {
            resultsDiv.innerHTML = '<p>No matching destinations found. Try "beach".</p>';
            return;
        }

        // Отрисовываем карточки мест с картинками
        filteredDestinations.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            resultsDiv.appendChild(card);
        });
    }

    searchBtn.addEventListener('click', performSearch);
    
    // Поиск по нажатию Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Кнопка очистки
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        resultsDiv.innerHTML = '';
    });
});
