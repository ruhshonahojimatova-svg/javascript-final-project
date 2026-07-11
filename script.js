// База данных рекомендаций с изображениями
const travelData = {
    beach: [
        {
            name: "Bora Bora, French Polynesia",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
            description: "A breathtaking tropical paradise with crystal clear turquoise water, pristine sandy beaches, and luxurious overwater bungalows."
        },
        {
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80",
            description: "Famous for its vibrant coral reefs, beautiful blue lagoons, and unmatched peaceful coastal beauty."
        }
    ],
    temple: [
        {
            name: "Angkor Wat, Cambodia",
            image: "https://images.unsplash.com/photo-1600513525401-4bb24ee07dfd?auto=format&fit=crop&w=500&q=80",
            description: "The largest religious structure in the world, filled with incredible ancient history and stunning stone architecture."
        },
        {
            name: "Kyoto Temples, Japan",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80",
            description: "Beautiful and serene historic Buddhist temples surrounded by magnificent traditional Japanese gardens."
        }
    ],
    country: [
        {
            name: "Italy",
            image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80",
            description: "Explore the cradle of the Renaissance, magnificent historical cities, incredible art, and world-class cuisine."
        },
        {
            name: "Australia",
            image: "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&w=500&q=80",
            description: "A diverse destination known for its rugged outback, unique wildlife, and famous iconic landmarks like the Sydney Opera House."
        }
    ]
};

// Получение элементов DOM
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

// Функция поиска
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = ''; // Очистка старых результатов

    if (query === '') {
        resultsContainer.innerHTML = '<p style="color:red; font-weight:bold;">Please enter a keyword to search!</p>';
        return;
    }

    // Проверяем, совпадает ли запрос с ключами в нашей базе данных
    if (travelData[query]) {
        travelData[query].forEach(item => {
            // Создание карточки места
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = '<p>No recommendations found. Try typing: <strong>beach</strong>, <strong>temple</strong>, or <strong>country</strong>.</p>';
    }
}

// Функция очистки
function handleClear() {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
}

// Слушатели событий
searchBtn.addEventListener('click', handleSearch);
clearBtn.addEventListener('click', handleClear);

// Поиск по нажатию клавиши Enter
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
