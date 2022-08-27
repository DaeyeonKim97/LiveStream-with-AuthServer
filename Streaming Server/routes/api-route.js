const express = require('express');
const router = express.Router();

const StreamingController = require('../api/streaming-controller');

router.post('/key',StreamingController.generateKey);

module.exports = router;