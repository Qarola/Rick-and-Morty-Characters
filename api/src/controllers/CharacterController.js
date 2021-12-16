const { Character } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600})

const getAllCharacters = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      cache.set(name)
      let charDb = await Character.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
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

const getAllCharactersByStatus = async (req, res) => {
  let { status } = req.query;
  console.log(status, "this is a query");
  if (status ) {
    try {
      cache.set(status)
      let urlApi = `https://rickandmortyapi.com/api/character?status=${status}`
      axios.get(urlApi)
      .then((resp) => {
        let response = resp.data.results.map((c) => ({ 
          id: c.id,
          image: c.image,
          name: c.name,
          status: c.status,
          specie: c.species,
          type: c.type,
          gender: c.gender,
          location: c.location.name,
          episode: c.episode.length
        }))
      // console.log(response)
       return res.send(response);
      })
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  }
}

const getAllCharactersByGender = async (req, res) => {
  let { gender } = req.query;
  console.log( gender, "this is a query");
  if (gender) {
    try {
      cache.set(gender)
      let urlApi = `https://rickandmortyapi.com/api/character?gender=${gender}` 
      axios.get(urlApi)
      .then((resp) => {
        let response = resp.data.results.map((c) => ({ 
          id: c.id,
          image: c.image,
          name: c.name,
          status: c.status,
          specie: c.species,
          type: c.type,
          gender: c.gender,
          location: c.location,
          episode: c.episode.length
        }))
       //console.log(response)
        return res.status(200).json(response);
         
      })
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  }
}


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
  getAllCharactersByStatus,
  getAllCharactersByGender,
  getCharacterById,
};

