const axios = require('axios');

module.exports = {
	ping: (url) => {
		axios.get(url, {
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': 'Firebase Functions'
			}
		}).then((response) => {
			console.log(response.data);
		}).catch((error) => {
			console.error(error);
		});
	},

	getUrls: async (urlJson) => {
		const response = await axios.get(urlJson, {
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': 'Firebase Functions'
			}
		});

		return response.data;
	}
};
