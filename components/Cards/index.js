// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





const cardEntryPoint = document.querySelector('.cards-container'); // entry point for HTML
function GetArticle(object) {


const create = e => document.createElement(e);

// setting up new elements

let newCard = create('div');
let cardHeadline = create('div');
let cardAuthor = create('div');
let cardImageDiv = create('div'); // append this to cardAuthor
let cardImage = create('img'); // append this to cardImageDiv
let cardAuthorName = create('span');

// appending elements

newCard.appendChild(cardHeadline);
newCard.appendChild(cardAuthor);
newCard.appendChild(cardImageDiv);
cardAuthor.appendChild(cardImageDiv);
cardImageDiv.appendChild(cardImage);
newCard.appendChild(cardAuthorName);


// setting up classes

newCard.classList.add('card');
cardHeadline.classList.add('headline');
cardAuthor.classList.add('author');
cardImageDiv.classList.add('img-container');
cardEntryPoint.appendChild(newCard);


// set content

cardImage.src = object.authorPhoto;
cardHeadline.textContent = object.headline;
cardAuthorName.textContent = object.authorName;

return newCard;
}

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then((dataResponse => { // we get a response from ^
console.log(dataResponse);
dataResponse.data.articles.javascript.forEach(item => GetArticle(item));
dataResponse.data.articles.bootstrap.forEach(item => GetArticle(item));
dataResponse.data.articles.technology.forEach(item => GetArticle(item));
dataResponse.data.articles.jquery.forEach(item => GetArticle(item));
dataResponse.data.articles.node.forEach(item => GetArticle(item));

}))