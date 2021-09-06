const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({disableEveryone: true, allowedMentions: {repliedUser: false})
const chalk = require("chalk");
const logs = require("discord-logs");
const sql = require("./utilities/database");
const emojis = require("./emojis_config");
const config = require("./config");
let command_count = 0;
let message_count = 0;
client.config = config;
client.bot_emojis = emojis;
client.message_count = message_count;
client.command_count = command_count;
logs(client);
require("./utilities/inline_reply");
require("discord-buttons")(client);

sql.query("CREATE TABLE IF NOT EXISTS `logs` (`guildid` VARCHAR(32) NOT NULL, `channelid` VARCHAR(32) NOT NULL, UNIQUE(`guildid`));", function (error, results, fields) {
 if (error) throw new Error(error);
 console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Fetched table `logs`! Status: Success"));
});
sql.query("CREATE TABLE IF NOT EXISTS `welcome` (`guildid` VARCHAR(32) NOT NULL, `channelid` VARCHAR(32) NOT NULL, UNIQUE(`guildid`));", function (error) {
 if (error) throw new Error(error);
 console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Fetched table `welcome`! Status: Success"));
});
sql.query("CREATE TABLE IF NOT EXISTS `reputation` (`memberid` VARCHAR(32) NOT NULL, `rep` BIGINT NOT NULL, UNIQUE(`memberid`));", function (error) {
 if (error) throw new Error(error);
 console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Fetched table `reputation`! Status: Success"));
});
sql.query("CREATE TABLE IF NOT EXISTS `leave` (`guildid` VARCHAR(32) NOT NULL, `channelid` VARCHAR(32) NOT NULL, UNIQUE(`guildid`));", function (error) {
 if (error) throw new Error(error);
 console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Fetched table `leave`! Status: Success"));
});
sql.query("CREATE TABLE IF NOT EXISTS `stats` (`messages` BIGINT, `commands` BIGINT);", function (error) {
 if (error) throw new Error(error);
 console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Fetched table `stats`! Status: Success"));
});

/* Stats */
setInterval(() => {
 const total_messages_sql = "SELECT messages AS res FROM `stats`";
 sql.query(total_messages_sql, function (error, results, fields) {
  if (error) return console.log(error);
  if (results[0]) {
   const sum = parseInt(Object.values(JSON.parse(JSON.stringify(results[0])))) + client.message_count;
   const update = `UPDATE stats SET messages = ${sum}`;
   sql.query(update, function (error, results, fields) {
    if (error) return console.log(error);
    if (client.config.advanved_logging == true) console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(` Client total messages stats updated! [${sum}]`));
   });
  } else {
   const update = "INSERT INTO `stats` (`messages`) VALUES (" + client.message_count + ")";
   sql.query(update, function (error, results, fields) {
    if (error) return console.log(error);
    if (client.config.advanved_logging == true) console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(" Client total messages stats added!"));
   });
  }
 });
 const total_commands_sql = "SELECT commands AS res FROM `stats`";
 sql.query(total_commands_sql, function (error, results, fields) {
  if (error) return console.log(error);
  if (results[0]) {
   const sum = parseInt(Object.values(JSON.parse(JSON.stringify(results[0])))) + client.command_count;
   const update = `UPDATE stats SET commands = ${sum}`;
   sql.query(update, function (error, results, fields) {
    if (error) return console.log(error);
    if (client.config.advanved_logging == true) console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(` Client total commands stats updated! [${sum}]`));
   });
  } else {
   const update = "INSERT INTO `stats` (`commands`) VALUES (" + client.command_count + ")";
   sql.query(update, function (error, results, fields) {
    if (error) return console.log(error);
    if (client.config.advanved_logging == true) console.log(chalk.bold(chalk.blue.bold("[SQL]")) + chalk.cyan.bold(` Client total messages stats added! [${client.command_count}]`));
   });
  }
 });
}, 60000);

/* Login and Commands */
if (process.env.TOKEN) {
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 client.snipes = new Discord.Collection();
 client.queue = new Map();
 require("events").EventEmitter.prototype._maxListeners = 70;
 require("events").defaultMaxListeners = 70;
 ["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
 });
 client.login(process.env.TOKEN);
} else {
 throw new Error("[BOLT] Bot token is not provided! To give your bot life, you need to enter token value in the .env file - TOKEN=Your_Bot_Token");
}
/* ---- */
