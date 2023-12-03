const { Telegraf, session, Stage, Scenes, Markup, Composer } = require('telegraf')
const composer = new Composer()

module.exports = new Scenes.WizardScene(
    "sc_1",
    (ctx) => {
ctx.reply('UJUJUJ')


        return ctx.scene.leave();
    })

    