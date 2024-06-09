import '../css/about.css';
import Family from '../img/about-us-family.jpg';

const content = document.querySelector('#content');

export default function load() {
    content.classList.add('about-content');

    // Create and append the heading
    const aboutUsHeading = document.createElement('h2');
    aboutUsHeading.textContent = 'About Us';
    content.appendChild(aboutUsHeading);

    // Create and append the image
    const aboutUsImage = document.createElement('img');
    aboutUsImage.src = Family;
    aboutUsImage.alt = 'family';
    content.appendChild(aboutUsImage);

    // Create and append the paragraph
    const aboutUsParagraph = document.createElement('p');

    // Split the paragraph into parts
    const aboutUsText1 = document.createTextNode("Biggie John's is ");

    const boldItalicText = document.createElement('span');
    boldItalicText.classList.add('bold', 'italic');
    boldItalicText.textContent = 'NOT';

    const aboutUsText2 = document.createTextNode(
        ' a family operated business. "Who\'s family is that' +
            ' in the photo above?" I hear you asking: I don\'t know! We only put that picture there to make the' +
            ' restaurant seem welcoming and family friendly! Is that illegal? No. Is it morally wrong? Probably, but' +
            " who are you to judge! If you really want to know about me, I'm not even italian! That's right, not a" +
            " single drop of italian blood. I'm just your average drunken irishman, which reminds me I need to finish" +
            ' writing this so I can head back to the pub.'
    );

    aboutUsParagraph.appendChild(aboutUsText1);
    aboutUsParagraph.appendChild(boldItalicText);
    aboutUsParagraph.appendChild(aboutUsText2);

    content.appendChild(aboutUsParagraph);

    const aboutTab = document.querySelector('#about');
    aboutTab.classList.add('active');
}
