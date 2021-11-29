const { Location, Character } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");

/* const getLocations = async (req, res) => {
  try {
    const locationDB = await Location.findAll({
      include: Character
    });
    return res.status(200).json(locationDB);
  } catch (error) {
    console.log(error);
    res.status(500);
    return;
  }
};
 */
const getLocations = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let locationDb = await Location.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
         // include: Episode
        },
      });
      return res.status(200).json(locationDb);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      return await Location.findAll().then((data) => {
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
  getLocations,
};
