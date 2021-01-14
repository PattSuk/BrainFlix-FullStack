const express = require('express');
const router = express.Router();
const productControl = require('../controller/videoControl');

router.get('/', productControl.getAllVideos);

router.post('/', productControl.createNewVideo);

router.get('/:id', productControl.getVideoById);

router.post('/:id/comments', productControl.createNewComment);
  
module.exports = router;