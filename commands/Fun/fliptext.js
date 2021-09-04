const Discord = require("discord.js");
const flip = require("flip-text");

module.exports = {
 name: "fliptext",
 aliases: [],
 description: "Flip some text",
 category: "Fun",
 usage: "fliptext <text>",
 run: async (client, message, args) => {
  try {
   if (!args[0]) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: `${client.bot_emojis.error} | You must provide a text!\n\n**Usage:** \`${process.env.PREFIX} fliptext <text>\``,
     },
    });
   }
   if (args.lenght > 50)
    return message.lineReply({
     embed: {
      color: 16734039,
      description: `${client.bot_emojis.error} | The text can't be longer than 50 characters!`,
     },
    });
   var flipped = [];
   args.forEach((arg) => {
    flipped.push(flip(arg));
   });
   const embed = new Discord.MessageEmbed() // Prettier
    .setColor("RANDOM")
    .addField(`${client.bot_emojis.reverse_motherfucker} | Flipped text`, "```" + flipped.join(" ") + "```")
    .setFooter(
     `Requested by ${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    )
    .setTimestamp();
   await message.lineReply(embed);
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: `Something went wrong... ${client.bot_emojis.sadness}`,
    },
   });
  }
 },
};
