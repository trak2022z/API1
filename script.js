console.clear();

//Using JSON.parse()
let myJSON = '{"species":"Dog","breed":"Labrador Retriever","age":6,"traits":{"eyeColor":"brown","coatColor":"yellow","weight":"137lbs"}}';

let myNewJSON = JSON.parse(myJSON);

// logs a JavaScript object, not a string
console.log(myNewJSON);


//
console.log(myNewJSON.species); // "Dog"
console.log(myNewJSON.breed); // "Labrador Retriever"
console.log(myNewJSON.age); // 6



//Using JavaScript to Manipulate JSON
let myJSON2 = '{"species":"Dog","breed":"Labrador Retriever","age":6,"traits":{"eyeColor":"brown","coatColor":"yellow","weight":"137lbs"}}';

// JSON.parse() takes an optional argument that can alter the object
let myNewJSON2 = JSON.parse(myJSON2, function (name, value) {
  if (name === "species") {
    value = "Cat";
  }
  return value;
});

// logs a JavaScript object, not a string
console.log(myNewJSON2);


//
myNewJSON2.age = 7;
delete myNewJSON2.traits.weight;
myNewJSON2.traits.cuddly = true;

console.log(myNewJSON2);


//This code creates a <script> element, adds a specified URL as the src attribute, then appends the script to the document. In this case, I’m accessing a specific user’s data on GitHub (my own data, actually), using GitHub’s API.
function doJSONP(result) {
  console.log(result.data);
}

let script = document.createElement('script');
script.src = 'https://api.github.com/users/trak2022z?callback=doJSONP'

document.getElementsByTagName('body')[0].appendChild(script);