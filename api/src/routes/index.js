/* const { Router } = require('express');
const characterRoutes = require('./characterRoutes');
const episodeRoutes = require('./episodeRoutes');
const locatationRoutes = require('./LocationRoutes');

const router = Router();

router.use("/characters", characterRoutes);
router.use("/charbystatus", characterRoutes)
router.use("/episodes", episodeRoutes);
router.use("/locations", locatationRoutes);

module.exports = router; */

const { Router } = require('express');
const nodeCache= require('../middleware/cacheNode')
const { getAllCharacters, getAllCharactersByStatus, getAllCharactersByGender, getCharacterById} = require('../controllers/CharacterController');
const { getLocations, getLocationByType } = require('../controllers/LocationController');
const { getEpisodes, getEpisodeByName } = require('../controllers/EpisodeController');

const router = Router();



router.get("/characters", nodeCache.verifyCacheChars, getAllCharacters);
router.get("/charbystatus", nodeCache.verifyCacheByStatus, getAllCharactersByStatus);
router.get("/charbygender",  nodeCache.verifyCacheByGender, getAllCharactersByGender);
router.get("/characters/:id", getCharacterById);
router.get("/locations", getLocations);
router.get("/locbytype", getLocationByType)
router.get("/episodes", getEpisodes);
router.get("/epibyname", getEpisodeByName)


module.exports = router;




