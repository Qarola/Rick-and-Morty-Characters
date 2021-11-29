//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Character, Episode, Location } = require("./src/db.js");
const { default: axios } = require("axios");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  //=================>> DESCOMENTAR PARA CARGAR LA DB <<<=========================//

/*  
  axios.get("https://rickandmortyapi.com/api/character) // /?page=2")
  .then((res) => {
    let response = res.data.results.map((c) => {
      Character.create({
        id: c.id,
        name: c.name,
        status: c.status,
        specie: c.species,
        gender: c.gender,
        location: c.location.name,
        image: c.image,
        episode: c.episode.length, //c.episode?.map((el) => el), 
      });
    });
  });   */

    //=================>>DESPUÉS DESCOMENTAR PARA CARGAR LA DB <<<=========================//


/*   axios.get("https://rickandmortyapi.com/api/episode) // /?page=2")
  .then((res) => {
    let response = res.data.results.map((c) => {
      Episode.create({
        id: c.id,
        name: c.name,
        episode: c.episode,
        airDate: c.air_date,
        charactrs: c.characters.length, //c.characters?.map((el) => el), 
      });
    });
  }); 
 */

    //=================>> LUEGO DESCOMENTAR PARA CARGAR LA DB <<<=========================//

 /* axios.get("https://rickandmortyapi.com/api/location") // /?page=2
    .then((res) => {
      let response = res.data.results.map((c) => {
        Location.create({
          id: c.id,
          name: c.name,
          type: c.type,
          dimension: c.dimension,
          residents: c.residents.length, //c.residents?.map((el) => el), 
        });
      });
    }); 
 */
  console.log("Connection with DB is correct");
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});


