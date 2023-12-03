

const { Telegraf, session, Stage, Scenes, Markup } = require('telegraf')
const { Composer } = require('telegraf');
const bot = new Telegraf('1461593525:AAFdgxguTArkH38jBugP5oWavgHUFhhS0BE');

bot.use(require('./composers/comands/start'))
bot.use(require('./composers/comands/keyboards/buttons_1'))
const stage = new Scenes.Stage();
stage.register(sc_1);

bot.use(session());
bot.use(stage.middleware());

bot.command("sc_1",function (ctx) {
        return ctx.scene.enter("cs_1");
    })

bot.launch().then(() => {
        console.log("Внимание! Работает ТелеграмБот...")
    });


