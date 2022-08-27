const express = require('express');
const router = express.Router();

const StreamingController = require('../api/streaming-controller');

router.post('/keygen',StreamingController.generateKey);
router.post('/key',StreamingController.getStreamKey);
router.get('/live',StreamingController.getIsOn);

module.exports = router;