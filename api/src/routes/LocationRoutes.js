const { Router } = require('express');
const { getLocations } = require('../controllers/LocationController');

const router = Router();


router.get("/", getLocations)


module.exports = router;