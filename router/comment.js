const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
// const auth = require('../middleware/auth');

router.post('/:spotId', commentCtrl.createComment);    //auth, commentCtrl.createComment);
router.put('/:id', commentCtrl.modifyComment);  //auth, commentCtrl.modifyComment);
router.delete('/:id', commentCtrl.deleteComment);   //auth, commentCtrl.deleteComment);
router.get('/one/:id', commentCtrl.getOneComment);  //auth, commentCtrl.getOneComment);
router.get('/:spotId', commentCtrl.getAllCommentsOneSpot);     //auth, commentCtrl.getAllComments);
router.get('/', commentCtrl.getAllComments);    //amener à être supp //auth, commentCtrl.getAllComments);

module.exports = router;