const Discord = require("discord.js");
const trainAI = require("../Training/trainAI.js");
const Session = require("../Training/Session.js");

module.exports = {
    names: ["tftrain"],
    async execute(Env) {
        const message = Env.message;

        if (message.author.id != "1163565264063959102") {
            const ErrorEmbed = new Discord.MessageEmbed()
                .setTitle("**Insufficient Permission**")
                .setDescription("No");
            return message.channel.send(ErrorEmbed);
        }
        message.channel.send("Please wait... Model is being trained");
        var Model = await trainAI();
        Model.save("..Model");
        Session.addModel(Model);
        message.channel.send("AI Succcessfully trained");
    }
}