const { PurchaseOrder } = require('../../database/connectionPostgresql');

module.exports.getByWhere = async (where) => {
  try {
    const result = await PurchaseOrder.findAll({ where: where });

    const resArr = [];
    result.forEach((element) => {
      resArr.push(element.dataValues);
    });
    return result === null ? null : resArr;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: getByWhere', error);
    throw new Error(error);
  }
};

module.exports.getAll = async (where) => {
  try {
    const result = await PurchaseOrder.findAll();
    const resArr = [];
    result.forEach((element) => {
      resArr.push(element.dataValues);
    });
    // console.log(resArr);
    return result === null ? null : resArr;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: getAll', error);
    throw new Error(error);
  }
};

module.exports.getOne = async ({ id }) => {
  try {
    console.log('Id recibido para cconsulta de purchaseOrder', id);
    let result;
    if (id) {
      result = await PurchaseOrder.findOne({
        where: { persistenceid: id }
      });
    }
    //  console.log('registro encontrado:', result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: getOne', error);
    throw new Error(error);
  }
};
module.exports.getOneByWhere = async (where) => {
  try {
    const result = await PurchaseOrder.findOne({
      where: where
    });
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: getOneByWhere', error);
    throw new Error(error);
  }
};

module.exports.update = async ({ id, entity }) => {
  try {
    let result = {};

    await PurchaseOrder.update(entity, { returning: true, where: { persistenceid: id } }).then(function ([rowsUpdate, [updatedEntity]]) {
      result = updatedEntity;
    });
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: update', error);
    throw new Error(error);
  }
};

module.exports.getOneByQuery = async (query) => {
  try {
    const result = await PurchaseOrder.findOne(query);
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: PurchaseOrderService: getOneByWhere', error);
    throw new Error(error);
  }
};
