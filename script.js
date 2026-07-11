// Полная база данных, которая исправит ошибку поиска
const travelData = {
    beach: [
        {
            name: "Bora Bora, French Polynesia",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
            description: "A breathtaking tropical paradise with crystal clear turquoise water."
        },
        {
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80",
            description: "Famous for its vibrant coral reefs and beautiful blue lagoons."
        }
    ],
    temple: [
        {
            name: "Angkor Wat, Cambodia",
            image: "https://images.unsplash.com/photo-1600513525401-4bb24ee07dfd?auto=format&fit=crop&w=500&q=80",
            description: "The largest religious structure in the world, filled with ancient history."
        },
        {
            name: "Kyoto Temples, Japan",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80",
            description: "Beautiful and serene historic Buddhist temples surrounded by gardens."
        }
    ],
    country: [
        {
            name: "Italy",
            image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80",
            description: "Explore the cradle of the Renaissance, historic cities, and world-class cuisine."
        },
        {
            name: "Australia",
            image: "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&w=500&q=80",
            description: "A diverse destination known for its rugged outback and unique wildlife."
        }
    ]
};

const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = ''; 

    if (query === '') {
        resultsContainer.innerHTML = '<p style="color:red; font-weight:bold;">Please enter a keyword!</p>';
        return;
    }

    // Если слово найдено в базе данных (beach, temple или country)
    if (travelData[query]) {
        travelData[query].forEach(item => {
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
        resultsContainer.innerHTML = '<p>No matching destinations found. Try "beach", "temple", or "country".</p>';
    }
}

function handleClear() {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
}

searchBtn.addEventListener('click', handleSearch);
clearBtn.addEventListener('click', handleClear);
searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
