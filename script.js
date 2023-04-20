/** constants and varibles */
const FRUITS = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'zBilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// DOM variables
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


/** helper functions */
const search = str => FRUITS.filter(elm => elm.toLowerCase().indexOf(str.toLowerCase())!== -1);

/** event handlers */
function searchHandler(e) {
	let searchWord = input.value;
	let searchResults = search(searchWord);
	showSuggestions(searchResults);
}

function showSuggestions(results) {
	suggestions.innerHTML="";
	for(let result of results){
		let newLi = document.createElement("li");
		newLi.innerText = result;
		suggestions.append(newLi);
	}
}

function useSuggestion(e) {
	let target = e.target;
	input.value = target.innerText;
	suggestions.innerHTML="";
}

/** event listener */
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);