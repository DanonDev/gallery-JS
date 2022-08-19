// gallery main section hentes here
const mainApp = document.getElementById('app');

// data for the site
const mainData = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs.' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: 'en flot tiger' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Mexican red knee tarantula spider Brahipelma Smitti on coconut substrate shortly after molting' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'nice fellow' },
};

// ==========================================================================================
// here make a funktion for gallerys cards 
createGallery ();

function createGallery() {

    for ( let myIndex in mainData) {

        let myName = mainData[myIndex].name;
        let myUrl = mainData[myIndex].picture;
        let myDescription = mainData[myIndex].description;

        createCard(myName, myUrl, myDescription);
    }

}

// ==========================================================================================
function createCard(myHeadline, myUrl, myDescription, clearParent) {

    if(clearParent) {
        mainApp.innerHTML = '';
    }
// here making cards 
    const myCard = document.createElement('figure');
    const mainHeadline = document.createElement('h2');
    const mainImage = document.createElement('img');
    const mainDescription = document.createElement('p');

    mainHeadline.innerText = myHeadline; 
    mainImage.src = myUrl; 
    mainDescription.innerText = myDescription; 

    myCard.appendChild(mainHeadline);
    myCard.appendChild(mainImage);
    myCard.appendChild(mainDescription);

    mainApp.appendChild(myCard);

    // myCard.classlist.add("cardStyle");
}










