import 'normalize.css';
import '../css/style.css';
import loadHomePage from './load-home';
import loadMenuPage from './load-menu';
import loadAboutPage from './load-about';

const content = document.querySelector('#content');

const homeTab = document.querySelector('#home');
homeTab.addEventListener('click', () => {
    deleteChildren();
    clearClasses();
    loadHomePage();
});

const menuTab = document.querySelector('#menu');
menuTab.addEventListener('click', () => {
    deleteChildren();
    clearClasses();
    loadMenuPage();
});

const aboutTab = document.querySelector('#about');
aboutTab.addEventListener('click', () => {
    deleteChildren();
    clearClasses();
    loadAboutPage();
});

function deleteChildren() {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

function clearClasses() {
    homeTab.classList.remove('active');
    menuTab.classList.remove('active');
    aboutTab.classList.remove('active');
    content.classList.remove(...content.classList);
}

loadHomePage();
