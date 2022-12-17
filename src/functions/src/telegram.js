require('dotenv').config();
const { Telegraf } = require('telegraf');

module.exports = new class BotTelegram {
	constructor () {
		this.bot = new Telegraf(process.env.BOT_TOKEN);
		this.CHAT_ID = process.env.CHAT_ID;
		this.bot.start((ctx) => ctx.reply('Welcome!'));

		this.bot.launch();
	}

	async sendAlert (author, app, status) {
		this.bot.telegram.sendMessage(this.CHAT_ID, `${author} -> *${app} *: ${status}`);
	};
}();
