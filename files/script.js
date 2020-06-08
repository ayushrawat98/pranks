// Getting the json data

/*
const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET', requestUrl);

request.responseType = 'json';
request.send();

request.onload = function() {
	const superHeroes = request.response;
	populateHeader(superHeroes);
	showHeroes(superHeroes);
}
*/

//Using fetch method 

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
	.then(response => { return response.json()})
	.then(superHeroes => {
		populateHeader(superHeroes);
		showHeroes(superHeroes);
	});

//Creating variables

const header = document.querySelector('header');
const section = document.querySelector('section');


// Populating the header

function populateHeader(jsonobj) {
	const h1 = document.createElement('h1');
	h1.textContent = jsonobj.squadName;
	header.appendChild(h1);

	const p = document.createElement('p');
	p.textContent = `HomeTown : ${jsonobj.homeTown} // formed : ${jsonobj.formed}`;	
	header.appendChild(p);
}

// Creating superhero cards

function showHeroes(jsonobj) {
	const heroes = jsonobj.members;

	for(let i = 0; i < heroes.length; i++) {
		const article = document.createElement('article');
		const h2 = document.createElement('h2');
		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const p3 = document.createElement('p');
		const ul = document.createElement('ul');

		h2.textContent = heroes[i].name;
		p1.textContent = `Secret Identity : ${heroes[i].secretIdentity}`;
		p2.textContent = `Age : ${heroes[i].age}`;
		p3.textContent = `Superpowers:`;

		const superpowers = heroes[i].powers;	
		for (let j = 0; j < superpowers.length; j++) {
			const lli = document.createElement('li');
			lli.textContent = superpowers[j];
			ul.appendChild(lli);
		}


	    article.appendChild(h2);
	    article.appendChild(p1);
	    article.appendChild(p2);
	    article.appendChild(p3);
	    article.appendChild(ul);

	    section.appendChild(article);

	}

}