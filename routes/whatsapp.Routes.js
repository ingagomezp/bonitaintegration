const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const whatsappController = require('../controller/whatsapp.Controller');
const whatsappSchema = require('../schema/whatsappSchema');

/**
 * Rutas
 */
router.post('/send',
    joiSchemaValidation.validateBody(whatsappSchema.sendMessageSchema),
    whatsappController.sendMessage
);

module.exports = router;
