const { Router } = require('express');
const characterRoutes = require('./characterRoutes');
const episodeRoutes = require('./episodeRoutes');
const locatationRoutes = require('./LocationRoutes');

const router = Router();

router.use("/characters", characterRoutes);
router.use("/episodes", episodeRoutes);
router.use("/locations", locatationRoutes);

module.exports = router;




