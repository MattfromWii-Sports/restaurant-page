import './styles.css';
import loadInitialPage from './initial-page.js';
import loadHome from './home.js';
import loadMenu from './menu.js';

const content = document.querySelector('#content');

const home = document.querySelector('#home-btn');
const order = document.querySelector('#order-btn');
const contact = document.querySelector('#contact-btn');

home.addEventListener('click', () => {
    clearContent();
    home.classList.add('selected');
    loadHome();
})
order.addEventListener('click', () => {
    clearContent();
    order.classList.add('selected');
    loadMenu();
})
contact.addEventListener('click', () => {
    clearContent();
    contact.classList.add('selected');
    //
})

function clearContent() {
    home.classList.remove('selected');
    order.classList.remove('selected');
    contact.classList.remove('selected');
    content.innerHTML = '';
}

loadInitialPage();
home.classList.add('selected');
loadHome();