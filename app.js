const express = require("express");
const app = express();
app.use(express.json());

// Dataset in json format
const HOK = {
  heroes: [
    {
      id: "h1",
      name: "Zhuge Liang",
      class: "Mage",
      lane: "Mid",
      faction: "Strategists",
    },
    {
      id: "h2",
      name: "Han Xin",
      class: "Assassin",
      lane: "Jungle",
      faction: "Rebel Forces",
    },
    {
      id: "h3",
      name: "Arthur",
      class: "Warrior",
      lane: "Solo",
      faction: "Avalon",
    },
    {
      id: "h4",
      name: "Diao Chan",
      class: "Mage",
      lane: "Mid",
      faction: "Frost Order",
    },
    {
      id: "h5",
      name: "Miyamoto Musashi",
      class: "Fighter",
      lane: "Solo",
      faction: "Ronin Clan",
    },
    {
      id: "h6",
      name: "Mozi",
      class: "Mage",
      lane: "Mid",
      faction: "Magic Council",
    },
    {
      id: "h7",
      name: "Bai Qi",
      class: "Tank",
      lane: "Jungle",
      faction: "Knights of the Round",
    },
    {
      id: "h8",
      name: "Gongsun Li",
      class: "Marksman",
      lane: "Bot",
      faction: "Shadow Sect",
    },
    {
      id: "h9",
      name: "Sun Ce",
      class: "Tank",
      lane: "Jungle",
      faction: "Eastern Seas",
    },
    {
      id: "h10",
      name: "Marco Polo",
      class: "Marksman",
      lane: "Bot",
      faction: "Western Lands",
    }
  ]
};

// 1. Return all heroes
app.get("/hok/heroes", (req, res) => {
  res.send(HOK.heroes);
});

// 2. Return specific hero
app.get("/hok/heroes/:id", (req, res) => {
  const hero = HOK.heroes.find((hero) => hero.id === req.params.id);
  if (!hero) {
    return res.status(404).send("The hero with the given ID was not found.");
  }
  res.send(hero);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});