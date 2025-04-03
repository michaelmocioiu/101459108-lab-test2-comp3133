const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const characterIds = await fetch('https://hp-api.onrender.com/api/characters') 
    .then(response => response.json())
    .then(data => data.map(character => ({ id: character.id })));

  res.status(200).json({
    paths: characterIds.map(character => ({
      params: { id: character.id },
    })),
  });
};