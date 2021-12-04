require("dotenv").config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [
  new SlashCommandBuilder()
    .setName("goodkingmogglemog")
    .setDescription("What do you decree?"),
  new SlashCommandBuilder()
    .setName("kupo")
    .setDescription("Ack! I'm bad at this, kupo..."),
].map((command) => command.toJSON());

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

function deploy(global = false) {
  console.log(`Registering commands ${global ? "globally" : "to guild"}...`);
  const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

  const applicationCommands = global
    ? Routes.applicationCommands(clientId)
    : Routes.applicationGuildCommands(clientId, guildId);

  rest
    .put(applicationCommands, { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
}

deploy(process.env.GLOBAL === "true");
