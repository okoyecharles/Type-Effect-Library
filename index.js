import Typed from "./typed.js";

const auto = new Typed('.auto-text', {
  strings: ['Hey, I\'m Charles', 'I Created This Effect', 'This Will', 'Automatically', 'Type-Out', 'Anything', 'You ask It to'],
  loop: true,
  IPColor: 'white'
});

// Initialize Typing Effect
auto.start();