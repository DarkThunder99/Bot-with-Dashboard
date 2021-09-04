const Discord = require("discord.js");
const chalk = require("chalk");
const config = require("../../config");
const gradient = require("gradient-string");

module.exports = (client) => {
 try {
  function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
  setInterval(() => {
   const emojis = ["😆", "😄", "😎", "😂", "🥳", "😘", "😜", "😁", "😉", "🥰", "😍", "🤯", "🤩", "😇", "😊", "☺️", "😌", "😋", "😳", "😚", "😏", "😱", "🥵", "😶‍🌫️", "🤕", "😴", "( ͡° ͜ʖ ͡°)"]; // Smirk is here becase Luna_CatArt#4514 idea XD
   const emoji = emojis[Math.floor(Math.random() * emojis.length)];
   var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
   const discordbday = new Date().getFullYear() + "/05/13";
   const statuslist = [];
   if (date == discordbday) {
    statuslist.push(
     `🎉 ${client.guilds.cache.size} servers 🎉`, // Prettier
     `🎉 ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members 🎉`, // Prettier
     `🎉 ${process.env.PREFIX} help 🎉`
    );
   } else {
    statuslist.push(
     `${emoji} | ${client.guilds.cache.size} servers!`, // Prettier
     `${emoji} | ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, // Prettier
     `${emoji} | ${process.env.PREFIX} help`, // Prettier
     `${emoji} | Waiting for verification! (${client.guilds.cache.size} guilds 🥰)`
    );
   }
   const random = Math.floor(Math.random() * (statuslist.length - 1) + 1);
   client.user.setActivity(statuslist[random], {
    type: "LISTENING",
   });
  }, 10000);
  client.user.setStatus("online");
  const datelog = new Date();
  currentDate = datelog.getDate();
  month = datelog.getMonth() + 1;
  year = datelog.getFullYear();
  hour = datelog.getHours();
  min = datelog.getMinutes();
  sec = datelog.getSeconds();
  console.log(chalk.bold(chalk.blue.bold("[BOLT]")) + chalk.bold.cyan(" Generated at: " + chalk.blue.bold.underline(currentDate + "/" + month + "/" + year + " | " + hour + ":" + min + "." + sec)));
  console.log(chalk.bold(chalk.blue.bold("[BOLT]")) + chalk.bold.cyan(" Client connected! Logged to Discord as ") + chalk.bold.blue.underline(client.user.tag) + chalk.bold.cyan(" (ID: ") + chalk.bold.blue.underline(client.user.id) + chalk.bold.cyan(")!"));
  /* Status Webhook */
  if (!process.env.STATUS_WEBHOOK_ID) throw new Error("[HOST] You need to provide Discord Status Webhook ID in .env - STATUS_WEBHOOK_ID=YOUR_WEBHOOK_ID");
  if (!process.env.STATUS_WEBHOOK_TOKEN) throw new Error("[HOST] You need to provide Discord Status Webhook Token in .env - STATUS_WEBHOOK_TOKEN=YOUR_WEBHOOK_TOKEN");
  const statuswebhook = new Discord.WebhookClient(process.env.STATUS_WEBHOOK_ID, process.env.STATUS_WEBHOOK_TOKEN);
  const status = new Discord.MessageEmbed() // Prettier
   .setColor("#18A64E")
   .setTimestamp()
   .setAuthor(`${capitalize(client.user.username)} is online!`)
   .setThumbnail(client.user.displayAvatarURL()) // Prettier
   .setDescription(`• Guilds: \`${client.guilds.cache.size}\`
   • Members: \`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`
   • Logged at: \`${datelog}\``);
  statuswebhook.send({
   // Prettier
   username: capitalize(client.user.username) + " Status",
   avatarURL: client.user.displayAvatarURL(),
   embeds: [status],
  });

  /* Slash command */
  client.ws.on("INTERACTION_CREATE", async (interaction) => {
   try {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;
    if (command == "BOLT") {
     const embed = new Discord.MessageEmbed() // Prettier
      .setDescription(`Hello, ${client.user.username} unfortunately **do not support slash commands**. And we do not currently plan to add them either. We apologize ;-; If you want use my normal commands please check \`${process.env.PREFIX} help\`!`)
      .setTitle(
       `<:success:860884617820110909> Hi ${interaction.member.user.username}! I'm ${client.user.username}`,
       client.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       })
      )
      .setColor("RANDOM")
      .addField("Join support server", config.support_server)
      .addField("Invite me", `[Click this link to invite me!](https://discord.com/oauth2/authorize/?permissions=${config.permissions}&scope=${config.scopes}&client_id=${client.user.id}) **__[Recomended!]__**\nOr [click this link to invite me __as root__](https://discord.com/oauth2/authorize/?permissions=8&scope=${config.scopes}&client_id=${client.user.id}) [Not recomended!]`)
      .setFooter(
       "Requested by: " + interaction.member.user.username,
       client.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       })
      );
     //client.api.interactions(interaction.id, interaction.token).callback.post({
     // data: {
     //  type: 4,
     //  data: await createAPIMessage(interaction, embed),
     // },
     //});
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
       type: 4,
       data: {
        flags: 64,
        content: embed,
       },
      },
     });
    }
   } catch (err) {
    return;
   }
  });
  async function createAPIMessage(interaction, content) {
   const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content).resolveData().resolveFiles();
   return {
    ...apiMessage.data,
    files: apiMessage.files,
   };
  }
  /* --- */
 } catch (err) {
  console.log(err);
 }
};
