const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.post('/', characterController.create);
router.get('/:userId', characterController.getAllByUser);
router.put('/:id', characterController.update);

module.exports = router;
