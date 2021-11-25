const { Router } = require('express');
const { getLocationByType } = require('../controllers/LocationController');

const router = Router();


router.get("/", getLocationByType)


module.exports = router;