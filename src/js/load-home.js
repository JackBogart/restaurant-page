const content = document.querySelector('#content');

export default function load() {
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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Reiciendis, laudantium sed totam libero aperiam eos ab mollitia quis impedit tempore quam perferendis nemo!' +
        ' Expedita officiis pariatur praesentium provident dolore numquam?';

    footer.appendChild(footerText);

    // Append headline and footer to content
    content.appendChild(headline);
    content.appendChild(footer);
}
