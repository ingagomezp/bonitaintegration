const leadModel = (sequelize, type) =>
  sequelize.define(
    'lead',
    {
      persistenceid: {
        type: type.INTEGER,
        primaryKey: true
      },
      age: type.INTEGER,
      attorney: type.BOOLEAN,
      cell_phone_number: type.STRING,
      citizenship_card: type.STRING,
      company: type.STRING,
      comptroller: type.BOOLEAN,
      court_record: type.BOOLEAN,
      crm_approved: type.BOOLEAN,
      decisive_company_position: type.BOOLEAN,
      demand: type.BOOLEAN,
      email: type.STRING,
      last_name: type.STRING,
      name: type.STRING,
      persistenceversion: type.INTEGER,
      sarlaft_approve: type.BOOLEAN,
      sarlaft_url: type.STRING,
      valid: type.BOOLEAN,
      //v2
      citizenship_card: type.STRING,
      sarlaft_url: type.STRING,
      annual_revenue: type.STRING,
      number_of_employees: type.STRING,
      saleforce_send: type.STRING,
      salesforce_receipt: type.STRING,
      opportunity_description: type.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

const purchaseorderModel = (sequelize, type) =>
  sequelize.define(
    'purchaseorder',
    {
      persistenceid: {
        type: type.INTEGER,
        primaryKey: true
      },
      ammount: type.INTEGER,
      ammount_approve: type.BOOLEAN,
      buying_interest: type.BOOLEAN,
      client_feedback: type.STRING,
      description: type.STRING,
      offer_approve: type.BOOLEAN,
      order_url: type.BOOLEAN,
      persistenceversion: type.INTEGER,
      products_approve: type.BOOLEAN,
      sign_invoice: type.STRING,
      assigned_commercial: type.STRING,
      client_qualification: type.STRING,
      supplier_order_description: type.STRING,
      client_id_pid: type.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

module.exports = {
  leadModel: leadModel,
  purchaseorderModel: purchaseorderModel
};
