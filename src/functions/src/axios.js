const axios = require('axios');

module.exports = {
	ping: async (url, callback) => {
		try {
			await axios.get(url, {
				headers: {
					Accept: 'application/vnd.github.v3+json',
					'User-Agent': 'Firebase Functions'
				}
			});
		} catch (error) {
			await callback(error);
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
