// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
// Initialize dotenv thus allowing the use of process.env
const dotenv = require('dotenv');
dotenv.config();

// Get the token from the .env file
const token = process.env.CLIENT_TOKEN;

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

/**
 * @description When the client is ready (logged in), this code will run
 * @param {Client} cli The client
 */
client.on('ready', (cli) => {
  console.log(`${cli.user.displayName} is online!`);
});

client.on('messageCreate', (msg) => {
  const author = msg.author;
  const { globalName, tag } = author;
  console.log(`${globalName} || ${tag} send a message : ${msg.content}`);
});

// Login to Discord with your bot's token
client.login(token);
