const { Character } = require("../db");
const Sequelize = require("sequelize");
const { default: axios } = require("axios");


const getAllCharacters = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      const apiRequest = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((c) => ({
          id: c.id,
          name: c.name,
          status: c.status,
          specie: c.species,
          gender: c.gender,
          location: c.location.name,
          image: c.image,
          episode: info.episode?.map((el) => el),
        }));
        console.log("soy la data:", filterResponse);
        res.status(200).json(filterResponse);
      }
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      const apiRequest = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((c) => ({
          id: c.id,
          name: c.name,
          status: c.status,
          specie: c.species,
          gender: c.gender,
          location: c.location.name,
          image: c.image,
          episode: info.episode?.map((el) => el),
        }));
        console.log("soy la data:", filterResponse);
        res.status(200).json(filterResponse);
      }
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
    let urlApi = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await axios.get(urlApi);
    const info = response.data;
    //console.log(info)
    const data = {
      id: info.id,
      name: info.name,
      status: info.status,
      specie: info.species,
      gender: info.gender,
      location: info.location.name,
      image: info.image,
      episode: info.episode?.map((el) => el),
    };
    //console.log('soy la data:', data)
    return res.status(200).json(data);
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




/* const getAllCharacters = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let urlApi = `https://rickandmortyapi.com/api/character/?name=${name}`;
      await fetch(urlApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results)
          const charact = data.results;
          let newResult = charact.map((c) => ({
            id: c.id,
            name: c.name,
            status: c.status,
            specie: c.species,
            gender: c.gender,
            location: c.location.name,
            image: c.image,
            //episode: c.episode.map((el) => el),
          }));

          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let urlApi = "https://rickandmortyapi.com/api/character";
      await fetch(urlApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results)
          const charact = data.results;
          let newResult = charact.map((c) => ({
            id: c.id,
            name: c.name,
            status: c.status,
            specie: c.species,
            gender: c.gender,
            location: c.location.name,
            image: c.image,
            // episode: c.episode.map((el) => el),
          }));

          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
 */