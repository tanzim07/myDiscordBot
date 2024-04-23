import { REST } from '@discordjs/rest';
import { Client, GatewayIntentBits, Routes } from 'discord.js';

import dotenv from 'dotenv';
import nameCommand from './commands/name.command.js';
dotenv.config();

const TOKEN = process.env.CLIENT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const rest = new REST({ version: '10' }).setToken(TOKEN);

// Get the token from the .env file

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

/**
 * @description When the client is ready (logged in), this code will run
 * @param {Client} cli The client
 */
// client.on('ready', (cli) => {
//   console.log(`${cli.user.displayName} is online!`);
// });

// client.on('messageCreate', (msg) => {
//   const author = msg.author;
//   const { globalName, tag } = author;
//   console.log(`${globalName} || ${tag} send a message : ${msg.content}`);
// });

// Login to Discord with your bot's token
// client.login(token);

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    console.log('Chat Command');
    const name = interaction.options.get('name').value;
    const age = interaction.options.get('age')?.value || 'unknown';
    const msg = `Hello ${name}! You are ${age} years old.`;
    interaction.reply({ content: msg });
  }
});

async function main() {
  const commands = [nameCommand];

  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
