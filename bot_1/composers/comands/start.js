const { Telegraf } = require('telegraf');
const { Composer, Markup } = require('telegraf');

const composer = new Composer()

function loggerMiddleware(ctx, next) {
    const id = "ID chat: " + ctx.update.message.chat.id
    const date = "Дата и время: " + new Date().toLocaleString()
    const text = "Текст: " + ctx.update.message.text
    console.log(id, date, text)
    next()
}
 var detal = new Array(Markup.button.callback(["Кнопка", "0"] ))

composer.command('start', (ctx) => {
     ctx.reply('Привет ! Как у тебя дела?', 
      Markup.inlineKeyboard([[Markup.button.callback('Хорошо','g_1')], [Markup.button.callback('Плохо','b_1')]])
     )

})

composer.action('g_1', (ctx) => {
  ctx.reply("Всё хорошо!")
})
composer.action('b_1', (ctx) => {
  ctx.reply("Да ладно тебе...Всё наладиться!")
})

module.exports = composer