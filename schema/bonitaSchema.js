const Joi = require('@hapi/joi');

module.exports.instatiateSchema = Joi.object().keys({
});

//Schema execute task bonita
module.exports.executebyidtaskSchema = Joi.object().keys({
  age: Joi.number().required(),
  attorney: Joi.boolean().required(),
  cell_phone_number: Joi.string().required(),
  citizenship_card: Joi.string().required(),
  company: Joi.string().required(),
  comptroller: Joi.boolean().required(),
  court_record: Joi.boolean().required(),
  crm_approved: Joi.boolean().required(),
  decisive_company_position: Joi.boolean().required(),
  demand: Joi.boolean().required(),
  email: Joi.string().required(),
  last_name: Joi.string().required(),
  name: Joi.string().required(),
  sarlaft_approve: Joi.boolean().required(),
  sarlaft_url: Joi.string().required().allow(null).allow(""),
  valid: Joi.boolean().required(),
  citizenship_card: Joi.string().required(),
  sarlaft_url: Joi.string().required(),
  annual_revenue: Joi.string().required(),
  number_of_employees: Joi.string().required(),
  saleforce_send: Joi.string().required(),
  salesforce_receipt: Joi.string().required(),
  opportunity_description: Joi.string().required(),
});

//Schema execute task bonita
module.exports.executebyidcaseSchema = Joi.object().keys({
  age: Joi.number().required(),
  attorney: Joi.boolean().required(),
  cell_phone_number: Joi.string().required(),
  citizenship_card: Joi.string().required(),
  company: Joi.string().required(),
  comptroller: Joi.boolean().required(),
  court_record: Joi.boolean().required(),
  crm_approved: Joi.boolean().required(),
  decisive_company_position: Joi.boolean().required(),
  demand: Joi.boolean().required(),
  email: Joi.string().required(),
  last_name: Joi.string().required(),
  name: Joi.string().required(),
  sarlaft_approve: Joi.boolean().required(),
  sarlaft_url: Joi.string().required().allow(null).allow(""),
  valid: Joi.boolean().required(),
  citizenship_card: Joi.string().required(),
  sarlaft_url: Joi.string().required(),
  annual_revenue: Joi.string().required(),
  number_of_employees: Joi.string().required(),
  saleforce_send: Joi.string().required(),
  salesforce_receipt: Joi.string().required(),
  opportunity_description: Joi.string().required(),
});

module.exports.updateContractLeadSchema = Joi.object().keys({
  age: Joi.number().required(),
  attorney: Joi.boolean().required(),
  cell_phone_number: Joi.string().required(),
  citizenship_card: Joi.string().required(),
  company: Joi.string().required(),
  comptroller: Joi.boolean().required(),
  court_record: Joi.boolean().required(),
  crm_approved: Joi.boolean().required(),
  decisive_company_position: Joi.boolean().required(),
  demand: Joi.boolean().required(),
  email: Joi.string().required(),
  last_name: Joi.string().required(),
  name: Joi.string().required(),
  persistenceversion: Joi.number().required(),
  sarlaft_approve: Joi.boolean().required(),
  sarlaft_url: Joi.string().required(),
  valid: Joi.boolean().required(),
  user: Joi.string().required(),
  password: Joi.string().required()
});

module.exports.updateContractOrderPurchaseSchema = Joi.object().keys({
  ammount: Joi.number().required(),
  ammount_approve: Joi.boolean().required(),
  buying_interest: Joi.boolean().required(),
  client_interest: Joi.string().required(),
  description: Joi.string().required(),
  offer_url: Joi.boolean().required(),
  offer_aprove: Joi.boolean().required(),
  order_url: Joi.boolean().required(),
  persistenceversion: Joi.number().required(),
  products_approve: Joi.boolean().required(),
  sign_invoice: Joi.string().required(),
  client_qualification: Joi.number().required()
});

module.exports.getContractByTaskSchema = Joi.object().keys({
  idtask: Joi.number().required()
});


