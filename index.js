const { Composer, log, session } = require('micro-bot')

const fortune = require('fortune-teller')

const bot = new Composer()

bot.use(log())
bot.use(session())

bot.start(({ reply }) => reply('Welcome, ask me for fortunes with the /fortune command.'))
bot.help(({ reply }) => reply('Help message'))
bot.settings(({ reply }) => reply('Bot settings'))

bot.command('date', ({ reply }) => reply(`Server time: ${Date()}`))
bot.command('fortune', ({ reply }) => reply(`${fortune.fortune()}`))

module.exports = bot
