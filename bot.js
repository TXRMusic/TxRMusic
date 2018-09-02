var prefix = "!"
client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("485829287203569676").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });





client.login(process.env.BOT_TOKEN);
