require('dotenv').config();
const functions = require('firebase-functions');
const axios = require('./axios');
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.https.onRequest(async (request, response) => {
	const urlJson = process.env.URL_JSON;

	if (!urlJson) {
		return response.send('URL_JSON is not defined');
	}
	// const { author, telegram, urls } = await axios.getUrls(urlJson);
	const data = await axios.getUrls(urlJson);

	console.log(data);

	response.send(data);
});
