import '../css/menu.css';
import menuItem1 from '../img/menu-pizza.jpg';
import menuItem2 from '../img/menu-pasta.jpg';
import menuItem3 from '../img/menu-breadsticks.jpg';

const content = document.querySelector('#content');

// Create menu items
const menuItems = [
    {
        imgSrc: menuItem1,
        imgAlt: 'plain pizza',
        title: 'Hawaiian Pizza',
        description:
            'A complete abomination, we put this item on the menu as a test. If you order this we will have' +
            ' you trespassed, you can eat your filthy pizza on the streets.',
    },
    {
        imgSrc: menuItem2,
        imgAlt: 'chicken alfredo',
        title: 'Pasta La Vista!',
        description:
            'We hear that after this dish that "you\'ll be back". We like to think of this as a compliment to' +
            ' our cooking. Our legal team has advised us this is due to the heart problems from our thick' +
            ' creamy alfredo!',
    },
    {
        imgSrc: menuItem3,
        imgAlt: 'breadsticks',
        title: 'Breadsticks',
        description: 'Freshly stolen from the dumpster of Olive Garden daily!',
    },
];

export default function load() {
    content.classList.add('menu-content');

    menuItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.imgAlt;
        menuItem.appendChild(img);

        const itemDesc = document.createElement('div');
        itemDesc.classList.add('item-desc');

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        itemDesc.appendChild(itemTitle);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDesc.appendChild(itemDescription);

        menuItem.appendChild(itemDesc);
        content.appendChild(menuItem);
    });

    const menuTab = document.querySelector('#menu');
    menuTab.classList.add('active');
}
