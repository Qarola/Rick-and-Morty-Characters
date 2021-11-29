const { Episode, Character } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");

/* const getEpisodes = async (req, res) => {
  try {
    const episodeDB = await Episode.findAll({
      include: Character
    });
    return res.status(200).json(episodeDB);
  } catch (error) {
    console.log(error);
    res.status(500);
    return;
  }
};
 */
const getEpisodes = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let episodeDb = await Episode.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
         // include: Episode
        },
      });
      return res.status(200).json(episodeDb);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      return await Episode.findAll().then((data) => {
        if (data !== null) {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  }
};
module.exports = {
  getEpisodes,
};

