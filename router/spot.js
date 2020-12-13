const express = require('express');
const router = express.Router();

const spotCtrl = require('../controllers/spot');
const auth = require('../middleware/auth.js');

router.post('/', auth.isAuth, spotCtrl.createSpot);
router.put('/:id', auth.isAuth, auth.isOwner, spotCtrl.modifySpot);
router.delete('/:id', auth.isAuth, auth.isOwner, spotCtrl.deleteSpot);
router.get('/:id', spotCtrl.getOneSpot);
router.get('/',spotCtrl.getAllSpots);

module.exports = router;