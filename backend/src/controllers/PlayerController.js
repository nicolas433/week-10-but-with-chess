const axios = require("axios");
//Dev -> Player
const Player = require("../models/Player");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const player = await Player.find();
    return res.json(player);
  },

  async store(req, res) {
    //github_username -> chess_username, rip(techs)
    const { chess_username, latitude, longitude } = req.body;

    let player = await Player.findOne({ chess_username });

    if (!player) {
      const response = await axios.get(
        `https://api.chess.com/pub/player/${chess_username}`
      );
      let { name = login, avatar, title } = response.data;
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
      player = await Player.create({
        chess_username,
        name,
        avatar,
        title,
        location
      });
      
    }
    return res.json(player);
  }
};
