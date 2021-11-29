const { Character, Episode } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");

const getAllCharacters = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let charDb = await Character.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
         // include: Episode
        },
      });
      return res.status(200).json(charDb);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      return await Character.findAll().then((data) => {
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

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  console.log(id, "this is an id");
  try {
    let character = await Character.findOne({
      where: {
        id: id,
      },
      include: {
        model: Episode,
      },
    });
    return res.status(200).json(character);
  } catch (error) {
    console.log(error);
    res.status(500);
    return;
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
};

