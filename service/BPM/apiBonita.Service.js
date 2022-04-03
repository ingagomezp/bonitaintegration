/* eslint-disable space-before-function-paren */
const axiosHelper = require('../../helper/axiosHelper');
const qs = require('qs');

const axiosConfig = {
    headers: {
        'Content-Type': null,
        'Cookie': null,
        "X-Bonita-API-Token": null
    }
};


module.exports.createToken = async (data) => {
    try {
        console.log('--------------start createToken-------------');

        axiosConfig.headers['Content-Type'] = "application/x-www-form-urlencoded";
        axiosConfig.headers.Cookie = null;
        axiosConfig.headers['X-Bonita-API-Token'] = null;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/loginservice`);
        console.log('Data para solicitud del servicio createToken:', data);
        console.log('Headers para solicitud del servicio processGetListByName:', axiosConfig);

        const result = await axiosHelper.post(`${process.env.API_BASE_BONITA}/bonita/loginservice`, qs.stringify(data), axiosConfig);

        console.log('result: ', result.headers['set-cookie']);//.headers['set-cookie'].find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', ''));
        console.log('--------------end createToken-------------');
        return result.headers['set-cookie'];//.find(x => x.includes('X-Bonita-API-Token')).replace('; Path=/bonita; SameSite=Lax', '').replace('X-Bonita-API-Token=', '');

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: createToken', error);
        throw new Error(error);
    }
};

module.exports.processInstatiation = async (data, configuration) => {
    try {
        console.log('--------------start processInstatiation-------------');
        axiosConfig.headers['Content-Type'] = "application/json";
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/process/${data.idprocess}/instantiation`);
        console.log('Data para solicitud del servicio processInstatiation:', data.contract);
        console.log('Headers para solicitud del servicio processGetListByName:', axiosConfig);

        const result = await axiosHelper.post(`${process.env.API_BASE_BONITA}/bonita/API/bpm/process/${data.idprocess}/instantiation`, data.contract, axiosConfig);
        console.log('result: ', result.data);
        console.log('--------------end processInstatiation-------------');
        return result.data;

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: processInstatiation', error.message);
        throw new Error(error);
    }
};

module.exports.taskGetByCaseId = async (data, configuration) => {
    try {
        console.log('--------------start taskGetByCaseId-------------');
        axiosConfig.headers['Content-Type'] = "application/x-www-form-urlencoded";
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/task?c=1&f=caseId=${data}`);
        console.log('Data para solicitud del servicio taskGetByCaseId:', data);
        console.log('Headers para solicitud del servicio taskGetByCaseId:', axiosConfig);


        const result = await axiosHelper.get(`${process.env.API_BASE_BONITA}/bonita/API/bpm/task?c=1&f=caseId=${data}`, axiosConfig);
        console.log('result: ', Object.values(result.data)[0]);
        console.log('--------------end taskGetByCaseId-------------');
        return Object.values(result.data)[0];

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: taskGetByCaseId', error);
        throw new Error(error);
    }
};

module.exports.taskGetById = async (data, configuration) => {
    try {
        console.log('--------------start taskGetById-------------');
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/task/${data}`);
        console.log('Data para solicitud del servicio taskGetById:', data);
        console.log('Headers para solicitud del servicio taskGetById:', axiosConfig);


        const result = await axiosHelper.get(`${process.env.API_BASE_BONITA}/bonita/API/bpm/task/${data}`, axiosConfig);
        console.log('result: ', result.data);
        console.log('--------------end taskGetById-------------');
        return result.data;

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: taskGetById', error);
        throw new Error(error);
    }
};

module.exports.taskGetContext = async (data, configuration) => {
    try {
        console.log('--------------start taskGetContext-------------');
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/userTask/${data}/context`);
        console.log('Data para solicitud del servicio taskGetContext:', data);
        console.log('Headers para solicitud del servicio taskGetContext:', axiosConfig);


        const result = await axiosHelper.get(`${process.env.API_BASE_BONITA}/bonita/API/bpm/userTask/${data}/context`, axiosConfig);
        console.log('result: ', result.data);
        console.log('--------------end taskGetContext-------------');
        return result.data;

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: taskGetContext', error);
        throw new Error(error);
    }
};

module.exports.processGetById = async (data, configuration) => {
    try {
        console.log('--------------start processInstatiation-------------');
        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/process/${data}`);
        console.log('Data para solicitud del servicio processInstatiation:', data);

        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        const result = await axiosHelper.get(`${process.env.API_BASE_BONITA}/bonita/API/bpm/process/${data}`, axiosConfig);
        console.log('result: ', result.data);
        console.log('--------------end processInstatiation-------------');
        return Object.keys(result.data)[0];

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: processInstatiation', error);
        throw new Error(error);
    }
};

module.exports.processGetListByName = async (data, configuration) => {
    try {
        console.log('--------------start processGetListByName-------------');
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/process?n=${data}`);
        console.log('Data para solicitud del servicio processGetListByName:', data);
        console.log('Headers para solicitud del servicio processGetListByName:', axiosConfig);


        const result = await axiosHelper.get(`${process.env.API_BASE_BONITA}/bonita/API/bpm/process?n=${data}`, axiosConfig);
        console.log('result: ', Object.values(result.data)[0]);
        console.log('--------------end processGetListByName-------------');
        return Object.values(result.data)[0];

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: processGetListByName', error);
        throw new Error(error);
    }
};

module.exports.taskExecution = async (data, configuration) => {
    try {
        console.log('--------------start taskExecution-------------');
        axiosConfig.headers['Content-Type'] = "application/json";
        axiosConfig.headers.Cookie = configuration.cookie;
        axiosConfig.headers['X-Bonita-API-Token'] = configuration.token;

        console.log('Url API:', `${process.env.API_BASE_BONITA}/bonita/API/bpm/userTask/${data.idtask}/execution?assign=true`);
        console.log('Data para solicitud del servicio taskExecution:', data);
        console.log('Headers para solicitud del servicio taskExecution:', axiosConfig);

        const result = await axiosHelper.post(`${process.env.API_BASE_BONITA}/bonita/API/bpm/userTask/${data.idtask}/execution?assign=true`, data.contract, axiosConfig);
        console.log('result: ', result.data);
        console.log('--------------end taskExecution-------------');
        return result.data;

    } catch (error) {
        console.log('Something went wrong: apiBonitaService: taskExecution', error);
        throw new Error(error);
    }
};
