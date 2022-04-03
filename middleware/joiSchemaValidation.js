const constants = require('../constants');

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data);
  console.log(result); // , { convert: false }
  if (result.error) {
    const errorDetails = result.error.details.map((value) => ({
      error: value.message,
      path: value.path
    }));
    return errorDetails;
  }
  return null;
};

module.exports.validateBody = (schema) => (req, res, next) => {
  const response = { ...constants.defaultServerResponse };
  const error = validateObjectSchema(req.body, schema);
  if (error) {
    response.body = error;
    response.message = constants.requestValidationMessage.BAD_REQUEST;
    return res.status(response.status).send(response);
  }
  return next();
};

module.exports.validateQueryParams = (schema) => (req, res, next) => {
  const response = { ...constants.defaultServerResponse };
  // console.log('req.query', req.query);
  const error = validateObjectSchema(req.query, schema);
  if (error) {
    response.body = error;
    response.message = constants.requestValidationMessage.BAD_REQUEST;
    return res.status(response.status).send(response);
  }
  return next();
};

module.exports.validateParams = (schema) => (req, res, next) => {
  const response = { ...constants.defaultServerResponse };
  // console.log('req.params', req.params);
  const error = validateObjectSchema(req.params, schema);
  if (error) {
    response.body = error;
    response.message = constants.requestValidationMessage.BAD_REQUEST;
    return res.status(response.status).send(response);
  }
  return next();
};
