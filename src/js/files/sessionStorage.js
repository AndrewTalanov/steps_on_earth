// хранение данных в СЕССИОН стораге

let links = document.querySelectorAll('.search__nav ul li a');

links.forEach((item, id) => {
    item.addEventListener("click", () => {
        sessionStorage.setItem('key-nav', id);
    })
});

// получение, номера контента что отображать на странице определений
let idNav = sessionStorage.getItem('key-nav');

// функционал
let contentDefinitions = document.querySelectorAll('.content-ids');

if (idNav != null) {
    if (contentDefinitions[idNav] != undefined || contentDefinitions[0] != null) {
        contentDefinitions[idNav].style.display = 'block';
    }
} else {
    if (contentDefinitions[0] != undefined || contentDefinitions[0] != null) {
        contentDefinitions[0].style.display = 'block';
    }
}