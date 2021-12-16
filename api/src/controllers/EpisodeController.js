const { Episode, Character } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { default: axios } = require("axios");

 const getEpisodes = async (req, res) => {
  try {
    const episodeDB = await Episode.findAll();
    return res.status(200).json(episodeDB);
  } catch (error) {
    console.log(error);
    res.status(500);
    return;
  }
};
 
const getEpisodeByName = async (req, res) => {
  let { name } = req.query;
  console.log( name, "this is a query");
  if (name) {
    try {
      let urlApi = `https://rickandmortyapi.com/api/episode?name=${name}` 
      axios.get(urlApi)
      .then((resp) => {
        let response = resp.data.results.map((c) => ({ 
          id: c.id,
          name: c.name,
          airDate: c.air_date,
          episode: c.episode,
          caharactrs: c.characters.length
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
  getEpisodes,
  getEpisodeByName
};

