const { Location } = require("../db");
const Sequelize = require("sequelize");
const { default: axios } = require("axios");


const getLocationByType = async (req, res) => {
  let { type } = req.query;
  console.log(type, "this is a query");
  if (type) {
    try {
      const apiRequest = await axios.get(
        `https://rickandmortyapi.com/api/location/?type=${type}`
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((e) => ({
          id: e.id,
          name: e.name,
          type: e.type,
          dimension: e.dimension,
          residents: e.residents?.map((el) => el),
        }));
        //console.log("soy la data:", filterResponse);
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
        "https://rickandmortyapi.com/api/location"
      );
      const responseApi = apiRequest.data.results;
      let filterResponse;
      if (responseApi.length > 0) {
        filterResponse = responseApi.map((e) => ({
          id: e.id,
          name: e.name,
          type: e.type,
          dimension: e.dimension,
          residents: e.residents?.map((el) => el),
        }));
        //console.log("soy la data:", filterResponse);
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
  getLocationByType,
};


/* const getLocationByType = async (req, res) => {
  let { type } = req.query;
  console.log(type, "this is a query");
  if (type) {
    try {
      let urlApi = `https://rickandmortyapi.com/api/location/?type=${type}`;
      await fetch(urlApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results)
          const location = data.results;
          let newResult = location.map((e) => ({
            id: e.id,
            name: e.name,
            type: e.type,
            dimension: e.dimension,
            residents: e.residents?.map((el) => el),
          }));
          //console.log('soy episode:', episodes)
          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let urlApi = "https://rickandmortyapi.com/api/location";
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
            type: e.type,
            dimension: e.dimension,
            residents: e.residents?.map((el) => el),
          }));
          //console.log('soy episode:', episodes)
          res.status(200).json(newResult);
        });
    } catch (error) {
      console.log(error);
    }
  }
}; */
