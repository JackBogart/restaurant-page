/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/load-home.js

const content = document.querySelector('#content');
function load() {
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
  footerText.textContent = "Biggie John's is the home of the first pizza to exist!" + " That's right, don't believe Italy's slander that the pizza belongs to them." + " It's been my life achievement since the dawn of time!";
  footer.appendChild(footerText);

  // Append headline and footer to content
  content.appendChild(headline);
  content.appendChild(footer);
  const homeTab = document.querySelector('#home');
  homeTab.classList.add('active');
}
;// CONCATENATED MODULE: ./src/img/menu-pizza.jpg
const menu_pizza_namespaceObject = __webpack_require__.p + "125f02d5058464f99055.jpg";
;// CONCATENATED MODULE: ./src/img/menu-pasta.jpg
const menu_pasta_namespaceObject = __webpack_require__.p + "d3f40d40a6bb7bb22f06.jpg";
;// CONCATENATED MODULE: ./src/img/menu-breadsticks.jpg
const menu_breadsticks_namespaceObject = __webpack_require__.p + "47a2a9ebc7b72df5ece9.jpg";
;// CONCATENATED MODULE: ./src/js/load-menu.js




const load_menu_content = document.querySelector('#content');

// Create menu items
const menuItems = [{
  imgSrc: menu_pizza_namespaceObject,
  imgAlt: 'plain pizza',
  title: 'Hawaiian Pizza',
  description: 'A complete abomination, we put this item on the menu as a test. If you order this we will have' + ' you trespassed, you can eat your filthy pizza on the streets.'
}, {
  imgSrc: menu_pasta_namespaceObject,
  imgAlt: 'chicken alfredo',
  title: 'Pasta La Vista!',
  description: 'We hear that after this dish that "you\'ll be back". We like to think of this as a compliment to' + ' our cooking. Our legal team has advised us this is due to the heart problems from our thick' + ' creamy alfredo!'
}, {
  imgSrc: menu_breadsticks_namespaceObject,
  imgAlt: 'breadsticks',
  title: 'Breadsticks',
  description: 'Freshly stolen from the dumpster of Olive Garden daily!'
}];
function load_menu_load() {
  load_menu_content.classList.add('menu-content');
  menuItems.forEach(item => {
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
    load_menu_content.appendChild(menuItem);
  });
  const menuTab = document.querySelector('#menu');
  menuTab.classList.add('active');
}
;// CONCATENATED MODULE: ./src/img/about-us-family.jpg
const about_us_family_namespaceObject = __webpack_require__.p + "a5f18afb8fd80055ad15.jpg";
;// CONCATENATED MODULE: ./src/js/load-about.js


const load_about_content = document.querySelector('#content');
function load_about_load() {
  load_about_content.classList.add('about-content');

  // Create and append the heading
  const aboutUsHeading = document.createElement('h2');
  aboutUsHeading.textContent = 'About Us';
  load_about_content.appendChild(aboutUsHeading);

  // Create and append the image
  const aboutUsImage = document.createElement('img');
  aboutUsImage.src = about_us_family_namespaceObject;
  aboutUsImage.alt = 'family';
  load_about_content.appendChild(aboutUsImage);

  // Create and append the paragraph
  const aboutUsParagraph = document.createElement('p');

  // Split the paragraph into parts
  const aboutUsText1 = document.createTextNode("Biggie John's is ");
  const boldItalicText = document.createElement('span');
  boldItalicText.classList.add('bold', 'italic');
  boldItalicText.textContent = 'NOT';
  const aboutUsText2 = document.createTextNode(' a family operated business. "Who\'s family is that' + ' in the photo above?" I hear you asking: I don\'t know! We only put that picture there to make the' + ' restaurant seem welcoming and family friendly! Is that illegal? No. Is it morally wrong? Probably, but' + " who are you to judge! If you really want to know about me, I'm not even italian! That's right, not a" + " single drop of italian blood. I'm just your average drunken irishman, which reminds me I need to finish" + ' writing this so I can head back to the pub.');
  aboutUsParagraph.appendChild(aboutUsText1);
  aboutUsParagraph.appendChild(boldItalicText);
  aboutUsParagraph.appendChild(aboutUsText2);
  load_about_content.appendChild(aboutUsParagraph);
  const aboutTab = document.querySelector('#about');
  aboutTab.classList.add('active');
}
;// CONCATENATED MODULE: ./src/js/index.js





const js_content = document.querySelector('#content');
const homeTab = document.querySelector('#home');
homeTab.addEventListener('click', () => {
  deleteChildren();
  clearClasses();
  load();
});
const menuTab = document.querySelector('#menu');
menuTab.addEventListener('click', () => {
  deleteChildren();
  clearClasses();
  load_menu_load();
});
const aboutTab = document.querySelector('#about');
aboutTab.addEventListener('click', () => {
  deleteChildren();
  clearClasses();
  load_about_load();
});
function deleteChildren() {
  let child = js_content.lastElementChild;
  while (child) {
    js_content.removeChild(child);
    child = js_content.lastElementChild;
  }
}
function clearClasses() {
  homeTab.classList.remove('active');
  menuTab.classList.remove('active');
  aboutTab.classList.remove('active');
  js_content.classList.remove(...js_content.classList);
}
load();
/******/ })()
;
//# sourceMappingURL=main.c64ab312e72d05581910.js.map