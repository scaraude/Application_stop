const express = require('express');
const router = express.Router();

const spotCtrl = require('../controllers/spot');
// const auth = require('../middleware/auth');

router.post('/', spotCtrl.createSpot);    //auth, spotCtrl.createSpot);
router.put('/:id', spotCtrl.modifySpot);  //auth, spotCtrl.modifySpot);
router.delete('/:id', spotCtrl.deleteSpot);   //auth, spotCtrl.deleteSpot);
router.get('/:id', spotCtrl.getOneSpot);  //auth, spotCtrl.getOneSpot);
router.get('/', spotCtrl.getAllSpots);     //auth, spotCtrl.getAllSpots);

module.exports = router;