const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth.js');

router.post('/:spotId', auth.isAuth, commentCtrl.createComment);    
router.put('/:id', auth.isAuth, auth.isOwner, commentCtrl.modifyComment); 
router.delete('/:id', auth.isAuth, auth.isOwner, commentCtrl.deleteComment);  
router.get('/one/:id', commentCtrl.getOneComment); 
router.get('/:spotId', commentCtrl.getAllCommentsOneSpot);    
router.get('/', commentCtrl.getAllComments);    //amené a être supp

module.exports = router;