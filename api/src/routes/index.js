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
const { getAllCharacters, getAllCharactersByStatus, getAllCharactersByGender, getCharacterById} = require('../controllers/CharacterController');
const { getLocations } = require('../controllers/LocationController');
const { getEpisodes } = require('../controllers/EpisodeController');
const { getNextPageCharacter, getNextPageEpisode, getNextPageLocation } = require('../controllers/Pagination')

const router = Router();

router.get("/characters", getAllCharacters);
router.get("/charbystatus", getAllCharactersByStatus);
router.get("/charbygender",  getAllCharactersByGender);
router.get("/characters/:id", getCharacterById);
router.get("/locations", getLocations);
router.get("/episodes", getEpisodes);
router.get("/nextChar", getNextPageCharacter);
router.get("/nextEpi", getNextPageEpisode);
router.get("/nextLoc", getNextPageLocation)


module.exports = router;




