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
const { conn, Episode } = require("./src/db.js");
const fetch = require("node-fetch");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {


  //============ DESCOMENTAR PARA CARGAR LA DB =============//
/* let urlApiEpisode = "https://rickandmortyapi.com/api/episode/?page=1";
  fetch(urlApiEpisode)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data.results)
      const episod = data.results;

      let newResultEp = episod.forEach((c) => {
        Episode.create({
          id: c.id,
          name: c.name,
          episode: c.episode,
          airDate: c.air_date,
          charactrs: c.characters?.map(el => el)
        });
      });
    }); */

  console.log("Connection with DB is correct");
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});


