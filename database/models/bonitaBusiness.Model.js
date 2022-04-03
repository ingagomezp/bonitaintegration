const leadModel = (sequelize, type) =>
  sequelize.define(
    'Lead',
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
      valid: type.BOOLEAN
    },
    {
      timestamps: true,
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
      client_interest: type.STRING,
      description: type.STRING,
      offer_url: type.BOOLEAN,
      offer_aprove: type.BOOLEAN,
      order_url: type.BOOLEAN,
      persistenceversion: type.INTEGER,
      products_approve: type.BOOLEAN,
      sign_invoice: type.STRING,
      client_qualification: type.INTEGER
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  );

module.exports = {
  leadModel: leadModel,
  purchaseorderModel: purchaseorderModel
};
