const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

function robot(content){
	fethContentFromWiki(content)
	// sanitizeContent(content)
	// breakContentIntoSentences(content)	

	/*
	 1. authentication
	 2. defines the algorithm
	 3. execute
	 4. capture value
	*/
	function fethContentFromWiki(content){
		const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
		const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
		const wikipediaResponse = wikipediaAlgorithm.pipe(content.searchTerm)
		const wikipediaContent = wikipediaResponse.get()

		console.log(wikipediaContent)

	}
	
	// function sanitizeContent(content){}
	// function breakContentIntoSentences(content){}
}

module.exports = robot