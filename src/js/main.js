import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => { // Глобальный обр.событий (скрипты начинают выполняться тогда, когда DOM струткура на странице готова)
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active'); // Точку перед классом active не ставим, скрипт знает что это класс
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
});