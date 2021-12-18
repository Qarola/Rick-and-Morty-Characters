const { Location, Character } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");



const getLocations= async (req, res) => {
  let { type } = req.query;
  console.log( type, "this is a query");
  if (type) {
    try {
      let urlApi = `https://rickandmortyapi.com/api/location?type=${type}` 
      axios.get(urlApi)
      .then((resp) => {
        let response = resp.data.results.map((c) => ({ 
          id: c.id,
          name: c.name,
          type: c.type,
          dimension: c.dimension,
         residents: c.residents.length
        }))
       //console.log(response)
        return res.status(200).json(response);
         
      })
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      let urlApi = 'https://rickandmortyapi.com/api/location' 
      axios.get(urlApi)
      .then((resp) => {
        let response = resp.data.results.map((c) => ({ 
          id: c.id,
          name: c.name,
          type: c.type,
          dimension: c.dimension,
         residents: c.residents.length
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

module.exports = {
  getLocations,

};
