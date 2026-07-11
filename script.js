// Функция для переключения вкладок (Home, About Us, Contact Us)
function switchPage(pageId) {
    // Находим все элементы с классом 'page' и скрываем их
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Показываем выбранную страницу
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

// Добавляем интерактивность на Главную страницу с помощью JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('js-demo-btn');
    const message = document.getElementById('demo-message');

    if (button && message) {
        button.addEventListener('click', () => {
            message.textContent = 'Ура! JavaScript код успешно работает на этой странице!';
        });
    }
});