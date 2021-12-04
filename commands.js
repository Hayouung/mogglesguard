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

const [argOption, argGlobal] = process.argv.slice(2);
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const global = argGlobal === "global";

if (argOption === "clear") {
  return clear();
}

if (argOption === "deploy") {
  return deploy();
}

function deploy() {
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

function clear() {
  console.log(`Clearing commands ${global ? "globally" : "from guild"}...`);
  const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

  const applicationCommands = global
    ? Routes.applicationCommands(clientId)
    : Routes.applicationGuildCommands(clientId, guildId);

  rest
    .put(applicationCommands, { body: [] })
    .then(() => console.log("Successfully cleared application commands."))
    .catch(console.error);
}
