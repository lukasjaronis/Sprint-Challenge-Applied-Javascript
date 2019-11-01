// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



entryPoint = document.querySelector('.topics');
function TabCreator(e) { // e is just the items/elements we will pass in from the api through our function

const create = e => document.createElement(e);

// setting up new elements

let newTab = create('div');

// setting up classes

newTab.classList.add('tab');

// appending

entryPoint.appendChild(newTab); // we are adding the newTab div to the HTML entry point 

// set content

newTab.textContent = e; // the text for the newTab will be passed into the data (our data is .topics)


return entryPoint;
}

axios
.get("https://lambda-times-backend.herokuapp.com/topics")
.then((dataResponse => { // we get a response from ^
    console.log(dataResponse);
    dataResponse.data.topics.forEach(item => TabCreator(item));
    // 1. we see the response from the herouapp.
    // 2. we look through the data
    // 3. we look at the topics
    // 4. we itterate through the topics and get the 'tabs', then pass each one into our function constructor. 
}))