const leadService = require('../service/BDM/lead.Service');
const purchaseService = require('../service/BDM/purchaseOrder.Service');
const apiBonitaService = require('../service/BPM/apiBonita.Service');
const constants = require('../constants');
const { cookie } = require('express/lib/response');

module.exports.instatiate = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const configuration = { cookie: null, token: null };

        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');
        // consulta la informacion del proceso
        const responseDataProcess = await apiBonitaService.processGetListByName("Proceso", configuration);
        // con el id del proceso genera una nueva instancia 'task'
        const responseInstantiateProcess = await apiBonitaService.processInstatiation({ idprocess: responseDataProcess.id, contract: { leadInput: req.body } }, configuration);

        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = responseInstantiateProcess;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: instatiate', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.executebyidcase = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        let configuration = { cookie: null, token: null };

        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        //console.log("+*****", await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', ''));
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

        // obtiene la tarea creada para el id de tarea recibido
        const responseTaskData = await apiBonitaService.taskGetByCaseId(req.params.idcase, configuration);

        // // obtiene el contexto de la tarea, el cual se requeire para sacar el id de persistencia de la data
        // const responseTaskContextData = await apiBonitaService.taskGetContext( responseTaskData.id, configuration);

        // ejecuta la tarea y pasa los parametros
        const data = { idtask: responseTaskData.id, contract: { leadInput: req.body } };
        const responseTaskExecutionData = await apiBonitaService.taskExecution(data, configuration);


        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = responseTaskExecutionData;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: execute', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.executeWithAllContractByIdCase = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        let configuration = { cookie: null, token: null };

        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        //console.log("+*****", await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', ''));
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

        // obtiene la tarea creada para el id de tarea recibido
        const responseTaskData = await apiBonitaService.taskGetByCaseId(req.params.idcase, configuration);

        // // obtiene el contexto de la tarea, el cual se requeire para sacar el id de persistencia de la data
        // const responseTaskContextData = await apiBonitaService.taskGetContext( responseTaskData.id, configuration);

        // ejecuta la tarea y pasa los parametros
        const data = { idtask: responseTaskData.id, contract: req.body.purchaseOrderInput };
        const responseTaskExecutionData = await apiBonitaService.taskExecution(data, configuration);


        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = responseTaskExecutionData;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: execute', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.executebyidtask = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const configuration = { cookie: null, token: null };

        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

        // obtiene la tarea creada para el id de tarea recibido
        const responseTaskData = await apiBonitaService.taskGetById(req.params.idtask, configuration);

        // ejecuta la tarea y pasa los parametros
        const data = { idtask: responseTaskData.id, contract: { leadInput: req.body } };
        const responseTaskExecutionData = await apiBonitaService.taskExecution(data, configuration);

        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = responseTaskExecutionData;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: execute', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getContractLead = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const configuration = { cookie: null, token: null };
        let responseTaskContext;
        let responseTaskContractLead;
        let responseTaskData;
        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

        // obtiene la tarea creada para el id de tarea recibido
        responseTaskData = await apiBonitaService.taskGetByCaseId(req.params.idcase, configuration);
        if (responseTaskData) {
            responseTaskContext = await apiBonitaService.taskGetContext(responseTaskData.id, configuration);
            if (responseTaskContext) {
                // busca los datos con el id
                console.log('Inicia busqueda de datos del lead');
                responseTaskContractLead = await leadService.getOne({ id: responseTaskContext.lead_ref.storageId });
                response.ok = true;
            }
        }
        response.status = 200;
        response.message = 'SUCCESS';
        if (responseTaskContractLead) {
            console.log('Inicia conversion de number_of_employees');
            responseTaskContractLead.number_of_employees = responseTaskContractLead.number_of_employees.toString();
        }
        response.body = responseTaskContractLead;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: execute', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getContractPurchaseOrder = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const configuration = { cookie: null, token: null };
        let responseTaskContext;
        let responseTaskData;
        let responseTaskContractPurchaseOrder;
        // Obtiene el token para las transaciones siguientes
        configuration.cookie = await apiBonitaService.createToken({ username: "mkt_hd", password: "123" });
        configuration.token = await configuration.cookie.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

        // obtiene la tarea creada para el id de tarea recibido
        responseTaskData = await apiBonitaService.taskGetByCaseId(req.params.idcase, configuration);
        if (responseTaskData) {
            responseTaskContext = await apiBonitaService.taskGetContext(responseTaskData.id, configuration);
            if (responseTaskContext) {
                // busca los datos con el id
                // console.log('data:', await purchaseService.getAll());
                responseTaskContractPurchaseOrder = await purchaseService.getOne({ id: responseTaskContext.purchaseOrder_ref.storageId });
                response.ok = true;
            }
        }

        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        response.body = responseTaskContractPurchaseOrder;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: execute', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// TODO: por terminar integración
module.exports.updateContractLeadSchema = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        // const responseFromService = await clientsService.createClients(req.body);
        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        // response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: updateContractLeadSchema', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// TODO: por terminar integración
module.exports.updateContractOrderPurchaseSchema = async (req, res) => {
    const response = { ...constants.defaultServerResponse };
    try {
        // const responseFromService = await clientsService.createClients(req.body);
        response.status = 200;
        response.ok = true;
        response.message = 'SUCCESS';
        // response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: bonita.Controller: updateContractOrderPurchaseSchema', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
