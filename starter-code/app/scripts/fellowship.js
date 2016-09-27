console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
var middleEarth = document.createElement('section')
middleEarth.id = 'middle-earth'
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  for(var i = 0, len = lands.length; i < len; i++){
    var land = document.createElement('article');
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
         middleEarth.appendChild(land);
}
body.appendChild(middleEarth)

}
makeMiddleEarth();


// Part 2

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var hobbitList = document.createElement('ul');
for (var i = 0, len = hobbits.length; i<len; i++) {
  var hobbit = document.createElement('li');
  hobbit.className = 'hobbit';
  hobbit.innerText = hobbits[i];
  hobbitList.appendChild(hobbit);

}

theShire.appendChild(hobbitList);

}
makeHobbits();

var frodo = body.querySelectorAll('li')[0];


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo


}


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var aside = document.createElement('aside');
var buddyList = document.createElement('ul');
for (var i =0, len = buddies.length; i< len; i++) {
var buddy = document.createElement ('li');
buddy.textContent = buddies[i];
buddyList.appendChild(buddy);
}
aside.appendChild(buddyList);
rivendell.appendChild(aside);

}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
strider.textContent = 'Aragon';

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
rivendell.appendChild(hobbits);

}

leaveTheShire();

// Part 7

var fellowshipMembers = rivendell.querySelector('li');
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var theFellowship = document.createElement('div');
theFellowship.setAttribute('id', 'the-fellowship');
for (var i = 0, len = fellowshipMembers.length; i < len; i++) {
  theFellowship.appendChild(fellowshipMembers[i])
  alert(fellowshipMembers[i].textContent + ' has joined the Fellowship!')
}
rivendell.appendChild(theFellowship);
}


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
var theFellowship = document.querySelector('#the-fellowship')
var gandalfTheWhite = theFellowship.querySelector('li:nth-child(5)')
gandalfTheWhite.textContent = 'Gandalf the White'

gandalfTheWhite.style.backgroundColor ='white'
gandalfTheWhite.style.border = '3px solid grey'

}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
alert('the horn of gondor has blown');

boromir.style.textDecoration = 'line-through';

boromir.parentNode.removeChild(boromir);

}


// Part 10

var sam = fellowshipMembers[6];
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
mordor.appendChild(frodo);
mordor.appendChild(sam);
var mountDoom = document.createElement('div');
mountDoom.setAttribute('id', 'mount-doom');
mordor.appendChild(mountDoom);
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
}
