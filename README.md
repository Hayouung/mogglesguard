# Mogglesguard

> Hearken unto me, brave Mogglesguard! These villains shall threaten you no more!

This is a Discord bot made with [discord.js](https://discord.js.org/#/).

## Getting started

### Prepare the bot for kupoing

Install Node.js if you don't have it already and run `npm install` to install dependencies.

Then in `example.env`, change the tokens and IDs then rename the file to `.env`.
Read [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html) if you don't know how to get those.

Then run

    npm start

If you see, `pog` in the console, then the bot is up and running and ready to kupo.

### Deploy commands

Before you can start kupoing though, you gotta deploy slash commands to Discord.

Do this to just your server (useful for testing/dev) with
    
    npm run deploy

... or globally with

    npm run deploy:global

Now you will see the commands available on Discord when you start typing `/` in chat.

# Usage

- `/kupo` - random quote from the Mogglesguard
- `/goodkingmogglemog` - Good King Moggle Mog, Good King Mog...

# FAQ that nobody actually asked

> how clear commands?

In case you decide to be a monster and want to remove the kupos, you can clear commands the same way you deploy but instead of `deploy`, you use `clear`

    npm run clear
    npm run clear:global
    
