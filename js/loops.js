// data to have fun with
const myTestarray = ['array tiger', 'array elefant', 'array edderkop', 'array koala'];
const myTestObject = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs.' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: 'en flot tiger' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Mexican red knee tarantula spider Brahipelma Smitti on coconut substrate shortly after molting' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'nice fellow' },
    shark: { name: 'haj', picture: '/img/_WW236934.jpg', description: 'not a nice fellow' },
};


// the app lives here
const myApp = document.getElementById('app');





// for loop
for (let i = 0; i < 5; i++) {
    console.log('step ' + i);
}



// while loop remember to make the expression get to false otherwise the browser crashes.
let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}


/* // for in loop used with arrays
for (let myIndex in myTestarray) {
    console.log(myTestarray[myIndex]);
    testCard(myTestarray[myIndex], 'app')
}


// for loop to use with objects and keys

for (let myIndex in myTestObject) {
    console.log(myTestObject[myIndex].name);
    testCard(myTestObject[myIndex].name, 'app')
} */





// debug functions ----------------------------------------------------------------------------
//  creates a simple headline with the textmsg in a h2 in the supplied id
// testCard('weee', 'app');
function testCard(textMsg, myId, clearContainer) {
    let myParent = document.getElementById(myId);

    // clear if clearContainer is set
    if (clearContainer) {
        myParent.innerHTML = '';
    }

    // create elements
    let myHeadline = document.createElement('h2');
    myHeadline.innerText = textMsg;
    myParent.appendChild(myHeadline);

}