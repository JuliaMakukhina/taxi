const { Telegraf } = require('telegraf')
const bot = new Telegraf('1633970699:AAGWLE13BQB0Wgxlq-wM9CVcOyTyp5S3VSw') //сюда помещается токен, который дал botFather
console.log(bot);

bot.start((ctx) => ctx.reply('Welcome1')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('I help you to find a taxi')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('ищи', (ctx) => ctx.reply('уже в процессе')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота

console.log('Hello world!');