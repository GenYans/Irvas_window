const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
    
        trigger.forEach(item => { // Метод forEach только с querySelectorAll
            item.addEventListener('click', (e) => { // Добовляем аргумент е чтобы отменить стандартное поведение браузера (т.к. один из кликов ссылка(при стандартном поведение перезагружает страницу))
                if (e.target) { // Проверка на то, что существует элемент на который кликнул пользователь 
                    e.preventDefault();
                }
    
                modal.style.display = 'block',
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open'); // Вариант с подключенной библиотекой Bootstrap
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open'); 
        });

        modal.addEventListener('click', (e) => { // Навешиваем обработчик который дает возможность скрывать модальное окно при клике на пустые поля 
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open'); 
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time); 
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    showModalByTime('.popup', 3000);
};

export default modals;