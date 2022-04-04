const Joi = require('@hapi/joi');

module.exports.sendMessageSchema = Joi.object().keys({
    phone: Joi.number().required(),
    message: Joi.string().required(),
});