import '../css/homepage.css';

const content = document.querySelector('#content');

export default function load() {
    content.classList.add('homepage-content');

    // Create headline section
    const headline = document.createElement('div');
    headline.classList.add('headline');

    const headerName = document.createElement('h2');
    headerName.textContent = "Biggie John's Pizzeria";
    headline.appendChild(headerName);

    const subHeader = document.createElement('h3');
    subHeader.textContent = 'a family experience';
    headline.appendChild(subHeader);

    // Create footer section
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent =
        "Biggie John's is the home of the first pizza to exist!" +
        " That's right, don't believe Italy's slander that the pizza belongs to them." +
        " It's been my life achievement since the dawn of time!";

    footer.appendChild(footerText);

    // Append headline and footer to content
    content.appendChild(headline);
    content.appendChild(footer);

    const homeTab = document.querySelector('#home');
    homeTab.classList.add('active');
}
