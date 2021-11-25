const { Episode } = require("../db");
const Sequelize = require("sequelize");
const { default: axios } = require("axios");

const getEpisodeByName = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      const apiRequest = await axios.get(
        `https://rickandmortyapi.com/api/episode/?name=${name}`
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((e) => ({
          id: e.id,
          name: e.name,
          episode: e.episode,
          airDate: e.air_date,
          charactrs: e.characters?.map((el) => el),
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
        "https://rickandmortyapi.com/api/episode"
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((e) => ({
            id: e.id,
            name: e.name,
            episode: e.episode,
            airDate: e.air_date,
            charactrs: e.characters?.map((el) => el),
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

module.exports = {
  getEpisodeByName,
};

/* const getEpisodeByName = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let urlApi = (`https://rickandmortyapi.com/api/episode/?name=${name}`);
      await fetch(urlApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results)
          const episodes = data.results;
          let newResult = episodes.map((e) => ({
            id: e.id,
            name: e.name,
            episode: e.episode,
            airDate: e.air_date,
            charactrs: e.characters?.map((el) => el),
          }));
          //console.log('soy episode:', episodes)
          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let urlApi = "https://rickandmortyapi.com/api/episode";
      await fetch(urlApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results)
          const episodes = data.results;
          let newResult = episodes.map((e) => ({
            id: e.id,
            name: e.name,
            episode: e.episode,
            airDate: e.air_date,
            charactrs: e.characters?.map((el) => el),
          }));
          //console.log('soy episode:', episodes)
          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
 */
