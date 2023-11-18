const Telegraf = require('telegraf').Telegraf;
const app = new Telegraf('6859940290:AAGB3xa3a6V2ij_Uoq1tV7SR77XFm9yNz8Q');
app.hears('hi', ctx => {
  return ctx.reply('Hey!');
});
app.startPolling();