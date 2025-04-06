const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Webhook handler for Vercel
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body, res);
    } catch (err) {
      console.error('Error handling update', err);
      res.status(500).send('Error');
    }
  } else {
    res.status(200).send('Bot is running');
  }
};

// WebApp Stream button
bot.command('watch', (ctx) => {
  const streamUrl = 'https://stream-noob.vercel.app/stream?url=https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  ctx.reply('Click below to stream the video:', Markup.inlineKeyboard([
    Markup.button.webApp('▶️ Watch Now', streamUrl)
  ]));
});
