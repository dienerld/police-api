const axios = require('axios');

module.exports = {
	ping: async (url) => {
		try {
			const { status } = await axios.get(url, {
				headers: {
					Accept: 'application/vnd.github.v3+json',
					'User-Agent': 'Firebase Functions'
				}
			});
			console.log(`${url} - ${status}`);
		} catch (error) {
			console.error(`${url} - ${error}`);
		}
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
