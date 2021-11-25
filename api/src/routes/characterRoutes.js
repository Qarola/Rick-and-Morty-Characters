const { Router } = require('express');
const { getAllCharacters, getCharacterById} = require('../controllers/CharacterController');
const router = Router();



router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);

module.exports = router;
