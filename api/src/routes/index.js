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
const episodeRoutes = require('./episodeRoutes');
const locatationRoutes = require('./LocationRoutes');
const router = Router();



router.get("/characters", getAllCharacters);
router.get("/charbystatus", getAllCharactersByStatus);
router.get("/charbygender", getAllCharactersByGender);
router.get("/characters/:id", getCharacterById);
router.get("/episodes", episodeRoutes);
router.get("/locations", locatationRoutes);


module.exports = router;




