async function getSynonyms() { 
	let query = document.getElementById('search').value// zufriff zu input feld
	let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;//url al text

	let response = await fetch(url); // zugriff zu Url
	let responseAsJson = await response.json();// umwandeln auf json
	let synsets = responseAsJson['synsets'] // zugriff zu synsets
	rendersynonyme(synsets)
}

function rendersynonyme(synsets) { 
	let conteiner = document.getElementById('container');// html
	conteiner.innerHTML = `<div>es wurden ${synsets.length} synsets geladen</div>`// wir fragen wie lang is die synsets

	for (let i = 0; i < synsets.length; i++) { // durch forschleife auf synset, wir greifen auf terms
		const synset = synsets[i];
		let terms = synset['terms']

		conteiner.innerHTML += `<div><h2>Synonym set mit Id ${synset['id']}</h2>  </div>`

		for (let k = 0; k < terms.length; k++) {// durch forschleife auf terms, wir greifen auf term
			const term = terms[k];
			conteiner.innerHTML += `<div>term: ${term['term']} </div>`
		}
	}
}