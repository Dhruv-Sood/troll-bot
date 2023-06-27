// import jokes from './jokes';

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "I used to play piano by ear, but now I use my hands.",
    "How does a penguin build its house? Igloos it together!",
    "Why did the bicycle fall over? It was two-tired.",
    "Why don't seagulls fly over the bay? Because then they would be bagels.",
    "Why don't eggs tell jokes? Because they might crack up.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you get if you cross a snowman and a vampire? Frostbite.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What's the best time to go to the dentist? Tooth-hurty.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't eggs tell jokes? Because they might crack up.",
    "What do you call fake spaghetti? An impasta.",
    "How do you organize a space party? You planet.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
];

let time = new Date();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
    ],
});

const TOKEN = "";

client.on("messageCreate", (message) => {
    console.log(message.author.username + " wrote " + `'${message.content}'`);

    if (message.author.bot) return;

    // throwJoke
    if (message.content === "throwJoke") {
        let randomIndex = Math.floor(Math.random() * jokes.length);
        message.reply(jokes[randomIndex]);
    }

    // whatTime command
    if (message.content === "whatTime") {
        message.reply(
            `The time is ${time.getHours() - 12 < 0 ? time.getHours() : time.getHours() - 12}:${time.getMinutes()}:${time.getSeconds()}`
        );
    }
});

client.login(TOKEN);
