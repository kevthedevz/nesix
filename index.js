require('dotenv').config()
const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")

const db = new ForgeDB({
  events: ["connect"],
  type: "better-sqlite3",
})
//test
const client = new ForgeClient({
  intents: ["GuildMessages", "Guilds", "MessageContent", "GuildMembers", "GuildPresences"],
  events: ["messageCreate", "clientReady", "interactionCreate", "presenceUpdate"],
  extensions: [db],
  prefixes: ["!", "$getservervar[önek]"],
})

db.variables({
  önek: "!",
  nakit: 0,
  banka: 0
})

client.functions.load('./fonksiyonlar')
client.commands.load("./komutlar")
client.login(process.env.TOKEN)