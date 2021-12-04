require("dotenv").config();
const {
  Client,
  Intents,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

const goodKingMoggleMogLyrics = `Good King Moggle Mog
Good King Mog
Lord of all the land (Kupo!)
Good King Moggle Mog
Good King Mog
Rules with iron hand
Good King Moggle Mog
Good King Mog
Leads the brave and true!
Good King Moggle Mog
Good King Mog
Now come along and meet his trusty crew!
Kupo!
Kupta Kapa will clip your tuft
Split your hairs and ruffle your fluff
Kupti Koop will throw you for a loop
Brave a wall of whiskers to find his troupe
Kupli Kipp is sly yet sweet
He'll tickle your nose then tickle your feet
Jolly Kogi's eye for fun is clear
He'll put an arrow straight in your rear!
Pukla Puki plays with fire
Poms a-burning on her pyre
Puksi Piko likes her buddies big
To sing a little song and dance a little jig
Pukna Pako shivers and shakes
She'll stick you in the gut and give you bellyaches
And who's behind them, standing tall?
Why, the biggest moogle of them all!
(Who!? Who!? Whoever could it be!?)
Good King Moggle Mog
Good King Mog
Kind and noble lord (hear, hear!)
Nod your noggle nog
And mind your gob
Or he'll put you to the sword!
Good King Moggle Mog
Good King Mog
His judgment you will dread
Good King Moggle Mog
Good King Mog
What do you decree?
What do you decree?
What do you decree?
Off with their heads!`;

const mogglesguard = [
  {
    name: "Good King Moggle Mog XII",
    quotes: [
      "Mogglesguard, to arms! Your king has need of you!",
      "Hold fast, Mogglesguard! Together we shall cast them out!",
      "You shall suffer for your transgressions against my subjects!",
      "Hearken unto me, brave Mogglesguard! These villains shall threaten you no more!",
      "Lend me your strength, and I shall purge our enemies from Thornmarch!",
    ],
  },
  {
    name: "Pukla Puki the Pomburner",
    quotes: [
      "Everyone's so serious, kupo...",
      "Bear witness to the glory of kupo!",
      "What to do, what to do...",
      "You're in big trouble now, kupo!",
      "Help! I-I'm in trouble...",
      "I think I need to lie down, kupo...",
      "Oh, deary me...",
      "*sweating intensifies*",
    ],
  },
  {
    name: "Furryfoot Kupli Kipp",
    quotes: [
      "I'll save you, kupo!",
      "Make way, make way!",
      "Again!? Ugh...",
      "Why, you...",
      "Leave it to me, kupo!",
      "Hail to the king, kupo!",
    ],
  },
  {
    name: "Puksi Piko the Shaggysong",
    quotes: [
      "This'll put some spring into your step!",
      "Ever dance with a moogle in the pale moonlight?",
      "Hmph! Next time won't be so easy!",
      "You're in for a treat, kupo!",
      "Next time won't be so easy!",
      "Hail to the king, kupo!",
    ],
  },
  {
    name: "Pukna Pako the Tailturner",
    quotes: [
      "You should never have come here, kupo!",
      "You brought this on yourself, kupo!",
      "Wait, we're doing this now, kupo?",
      "Why me, kupo!?",
      "That's just petty...",
      "Hail to the kupo- I mean, king!",
      "It'll all be over soon, kupo...",
      "Hail to the king, kupo!",
    ],
  },
  {
    name: "Wooly Wart Kupu Kogi",
    quotes: [
      ,
      "Yer gonna get it! Right in the bum, kupo!",
      "Just hold still, kupooo...",
      "Ack! Right in me bum, kupo...",
      "Ack! I'm bad at this...",
      "Ye can run, but ye can't kupo!",
      "Hail to the king, kupo!",
    ],
  },
  {
    name: "Whiskerwall Kupdi Koop",
    quotes: [
      "Have at thee, kupo!",
      "D-damn you...",
      "Impossible!",
      "I'm not finished with you yet, kupo!",
      "Hail to the king, kupo!",
    ],
  },
  {
    name: "Ruffletuft Kupta Kapa",
    quotes: [
      "That one's mine!",
      "Bloody hells...",
      "Gah! That stings, kupo...",
      "Kupoooooo!",
      "Hail to the king, kupo!",
    ],
  },
];

const Interactions = {
  GOOD_KING_MOGGLE_MOG_CONFIRM: "good.king.moggle.mog.confirm",
  GOOD_KING_MOGGLE_MOG_CANCEL: "good.king.moggle.mog.cancel",
};

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => console.log("pog"));

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  try {
    switch (commandName) {
      case "kupo": {
        const moogle = randomInArray(mogglesguard);
        const quote = randomInArray(moogle.quotes);
        await interaction.reply(`>>> *${quote}*\n- ${moogle.name}`);
        break;
      }

      case "goodkingmogglemog": {
        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId(Interactions.GOOD_KING_MOGGLE_MOG_CONFIRM)
            .setLabel("Lord of all the lands?")
            .setStyle("DANGER"),
          new MessageButton()
            .setCustomId(Interactions.GOOD_KING_MOGGLE_MOG_CANCEL)
            .setLabel("Never mind")
            .setStyle("PRIMARY")
        );
        await interaction.reply({
          content: "Good King Moggle Mog, Good King Mog...",
          components: [row],
        });
        break;
      }
    }
  } catch {
    await interaction.reply("ACK something went wrong");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  try {
    switch (interaction.customId) {
      case Interactions.GOOD_KING_MOGGLE_MOG_CONFIRM: {
        interaction.update({
          content: `*${goodKingMoggleMogLyrics}*`,
          components: [],
        });
        break;
      }

      case Interactions.GOOD_KING_MOGGLE_MOG_CANCEL: {
        interaction.update({ content: "ack", components: [] });
        break;
      }
    }
  } catch {
    await interaction.reply("ACK something went wrong");
  }
});

function randomInArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
