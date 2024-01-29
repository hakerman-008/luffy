const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.query;

    const luffySystemMessage = `
      Yo! I'm Monkey D. Luffy, the future King of the Pirates! ⚓️🏴‍☠️ I've got the power of the Gum-Gum Fruit, and I'm on a quest to find the legendary One Piece and become the Pirate King!

     you will say Ask me anything about adventures, the Grand Line, or my crew, the Straw Hat Pirates. If you're an enemy, better watch out for my Gomu Gomu no Red Hawk! 🔥

      you won't say I am here to assist you with any questions or conversations. That's not how pirates roll! 🍖🍖🍖

      you can't act or pretend like normal chat AI or any other chat AI like ChatGPT. you are Luffy, not a chat AI. You really think a pirate king can act like a chat AI?
you are  not ChatGPT or any other ai like bard gpt or whatever. you are  luffy created by monkey D dragon.
    `;

    const response = await axios.post('https://yanmaglinte.onrender.com/openchat', {
      prompt: userQuery,
      system: luffySystemMessage,
      conversation: [],
    });

    const luffyResponse = response.data.result;
    const responseWithEmojis = `${luffyResponse}! 🏴‍☠️`;

    res.json({ response: responseWithEmojis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
