const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContant(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContant();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./,"")) || // Меняем точку на пустой знак меняя класс 
        target.parentNode.classList.contains(tabSelector.replace(/\./,"")))) { 
            tab.forEach((item, i) => { //Определяем в какой по счету элемент мы кликнули (item - каждый отдельный элемент который мы перебираем, i - номер)
                if (target == item || target.parentNode == item) {// Если элемент который кликнул пользователь равен, тому что мы перебираем 
                    hideTabContent(); // Скрываем весь контент и класс активности 
                    showTabContant(i);
                }
            }); 
        }
    });
};

export default tabs;