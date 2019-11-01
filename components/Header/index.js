// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

const create = e => document.createElement(e);

classCreate = e => classList.add(e);

 // setting up new elements

 let newHeader = create('div');
 let headerDate = create('span');
 let headerTitle = create('h1');
 let headerTemp = create('span');

// appending elements

newHeader.appendChild(headerDate);
newHeader.appendChild(headerTitle);
newHeader.appendChild(headerTemp);

// setting up classes

newHeader.classCreate('header');
headerDate.classCreate('date');
headerTemp.classCreate('temp');


return newHeader
}
