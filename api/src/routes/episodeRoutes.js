const { Router } = require('express');
const { getEpisodeByName } = require('../controllers/EpisodeController');

const router = Router();


router.get("/", getEpisodeByName)


module.exports = router;
