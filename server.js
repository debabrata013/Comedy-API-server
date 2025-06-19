const express = require('express');
const app = express();
const PORT = 3100;

// Middleware
app.use(express.json());

// Arrays of funny content
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? He was outstanding in his field!",
  "I used to hate facial hair, but then it grew on me.",
  "What do you call a fake noodle? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I'm terrified of elevators, so I'll start taking steps to avoid them.",
  "What's the best thing about Switzerland? I don't know, but the flag is a big plus!","Why did the math book look sad? Because it had too many problems.",
"What’s orange and sounds like a parrot? A carrot.",
"Why did the chicken join a band? Because it had the drumsticks!",
"I used to play piano by ear, but now I use my hands.",
"Parallel lines have so much in common… it’s a shame they’ll never meet.",
"I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
"Why don’t oysters donate to charity? Because they are shellfish.",
"I told my computer I needed a break, and now it won’t stop sending me vacation ads.",
"Why did the golfer bring two pairs of pants? In case he got a hole in one.",
"My dog used to chase people on a bike. It got so bad I had to take his bike away."

];

const thoughts = [
  "If you think nobody cares about you, try missing a couple of payments.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If at first you don't succeed, then skydiving definitely isn't for you.",
  "Money can't buy happiness, but it's more comfortable to cry in a Mercedes than on a bicycle.",
  "I haven't slept for ten days, because that would be too long.",
  "The problem with trouble shooting is that trouble shoots back.",
  "I'm not lazy, I'm just on energy saving mode.",
  "Life is short. Smile while you still have teeth.",
  "I'm not arguing, I'm just explaining why I'm right.",
  "Common sense is like deodorant. The people who need it most never use it.","Light travels faster than sound. That’s why some people appear bright until you hear them speak.",
"If you think education is expensive, try ignorance.",
"The road to success is always under construction.",
"Artificial intelligence is no match for natural stupidity.",
"Before you criticize someone, walk a mile in their shoes. That way you’re a mile away and you have their shoes.",
"Some people graduate with honors, I am just honored to graduate.",
"The more you weigh, the harder you are to kidnap. Stay safe, eat cake.",
"My wallet is like an onion, opening it makes me cry.",
"I dream of a better tomorrow, where chickens can cross the road without their motives being questioned.",
"Why do we press harder on the remote when the batteries are dying?"

];

const puns = [
  "I wondered why the baseball kept getting bigger. Then it hit me.",
  "A bicycle can't stand on its own because it's two-tired.",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
  "I'm reading a book on the history of glue – can't put it down.",
  "Did you hear about the guy who invented the knock-knock joke? He won the 'No-bell' prize.",
  "I used to be a banker, but I lost interest.",
  "Broken pencils are pointless.",
  "What do you call a bear with no teeth? A gummy bear!",
  "I'm friends with 25 letters of the alphabet. I don't know Y.",
  "Why did the coffee file a police report? It got mugged!","Time flies like an arrow. Fruit flies like a banana.",
"A boiled egg in the morning is hard to beat.",
"Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
"I’m reading a horror story in Braille. Something bad is going to happen, I can feel it.",
"I don’t trust stairs because they’re always up to something.",
"I once got into a fight with a broken elevator. I took it to another level.",
"I’d tell you a chemistry joke, but I know I wouldn’t get a reaction.",
"I stayed up all night wondering where the sun went. Then it dawned on me.",
"I named my dog ‘5 miles’ so I can say I walk 5 miles every day.",
"Claustrophobic people are more productive thinking outside the box."

];

const dadJokes = [
  "Hi hungry, I'm Dad!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm afraid for the calendar. Its days are numbered.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "How do you organize a space party? You planet.",
  "Want to hear a joke about construction? I'm still working on it.",
  "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire.",
  "How does a penguin build its house? Igloos it together.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "What did the ocean say to the beach? Nothing, it just waved.",
  "Why can't your nose be 12 inches long? Because then it would be a foot.",
"I only know 25 letters of the alphabet. I don't know y.",
"I used to be addicted to soap, but I’m clean now.",
"I don’t trust those trees. They seem kind of shady.",
"What do you call cheese that isn’t yours? Nacho cheese.",
"I asked my dog what's two minus two. He said nothing.",
"Why did the man fall down the well? Because he couldn’t see that well.",
"I would avoid the sushi if I were you. It’s a little fishy.",
"How do you make holy water? You boil the hell out of it.",
"I used to run a dating service for chickens. But I was struggling to make hens meet."

];

// Helper function to get random item from array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Routes

// Home route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Comedy API! 🎭",
    description: "Your one-stop shop for laughs and giggles!",
    endpoints: {
      "/joke": "Get a random joke",
      "/thought": "Get a random funny thought",
      "/pun": "Get a random pun",
      "/dad-joke": "Get a classic dad joke"
    },
    tip: "Laughter is the best medicine, but if you laugh for no reason, you need medicine! 😄"
  });
});

// Random joke route
app.get('/joke', (req, res) => {
  const randomJoke = getRandomItem(jokes);
  res.json({
    type: "joke",
    content: randomJoke,
    timestamp: new Date().toISOString(),
    laughLevel: Math.floor(Math.random() * 10) + 1,
    message: "Hope this made you smile! 😊"
  });
});

// Random funny thought route
app.get('/thought', (req, res) => {
  const randomThought = getRandomItem(thoughts);
  res.json({
    type: "funny thought",
    content: randomThought,
    timestamp: new Date().toISOString(),
    wisdomLevel: Math.floor(Math.random() * 10) + 1,
    message: "Deep thoughts... or maybe not so deep! 🤔"
  });
});

// Random pun route
app.get('/pun', (req, res) => {
  const randomPun = getRandomItem(puns);
  res.json({
    type: "pun",
    content: randomPun,
    timestamp: new Date().toISOString(),
    groanLevel: Math.floor(Math.random() * 10) + 1,
    message: "Warning: Puns may cause excessive eye-rolling! 🙄"
  });
});

// Dad jokes route
app.get('/dad-joke', (req, res) => {
  const randomDadJoke = getRandomItem(dadJokes);
  res.json({
    type: "dad joke",
    content: randomDadJoke,
    timestamp: new Date().toISOString(),
    dadLevel: 11, // Always maximum dad level!
    message: "Classic dad humor at its finest! 👨‍👧‍👦"
  });
});

// 404 handler with humor
app.use('*', (req, res) => {
  res.status(404).json({
    error: "Route not found! 🤷‍♂️",
    message: "Looks like you're lost! But hey, at least you found our 404 page!",
    suggestion: "Try visiting our home page at '/' for available routes",
    joke: "Why did the HTTP request go to therapy? Because it had too many issues! (Error 404: Humor not found)"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎭 Comedy API Server is running on port ${PORT}`);
  console.log(`🌐 Visit http://localhost:${PORT} to get started`);
  console.log(`😄 Ready to serve some laughs!`);
});

module.exports = app;
