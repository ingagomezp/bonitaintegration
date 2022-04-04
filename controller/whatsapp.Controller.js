const leadService = require('../service/BDM/lead.Service');
const purchaseService = require('../service/BDM/purchaseOrder.Service');
const apiBonitaService = require('../service/BPM/apiBonita.Service');
const constants = require('../constants');
const { cookie } = require('express/lib/response');

module.exports.sendMessage = async (req, res) => {
    const response = { ...constants.defaultServerResponse };

    const accountSid = 'AC51874ac6e14fb520d565949ea38bc03d';
    const authToken = '73285283fa365d641e6e80ba29f24356';
    const client = require('twilio')(accountSid, authToken);
    try {
        const result = await client.messages.create({
            body: `${req.body.message}`,
            from: `whatsapp:+14155238886`,
            to: `whatsapp:+${req.body.phone}`
        })
        console.log('result.sid::', result.sid);
        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = result.sid;
    } catch (error) {
        console.log('Something went wrong: whatsapp.Controller: sendMessage', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
