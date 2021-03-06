const { Lead } = require('../../database/connectionPostgresql');

module.exports.getByWhere = async (where) => {
  try {
    const result = await Lead.findAll({ where: where });

    const resArr = [];
    result.forEach((element) => {
      resArr.push(element.dataValues);
    });
    return result === null ? null : resArr;
  } catch (error) {
    console.log('Something went wrong: LeadsService: getByWhere', error);
    throw new Error(error);
  }
};

module.exports.getAll = async (where) => {
  try {
    const result = await Lead.findAll();
    const resArr = [];
    result.forEach((element) => {
      resArr.push(element.dataValues);
    });
    // console.log(resArr);
    return result === null ? null : resArr;
  } catch (error) {
    console.log('Something went wrong: LeadsService: getAll', error);
    throw new Error(error);
  }
};

module.exports.getOne = async ({ id }) => {
  try {
    const result = await Lead.findOne({
      where: { persistenceid: id }
    });
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: LeadsService: getOne', error);
    throw new Error(error);
  }
};
module.exports.getOneByWhere = async (where) => {
  try {
    const result = await Lead.findOne({
      where: where
    });
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: LeadsService: getOneByWhere', error);
    throw new Error(error);
  }
};

module.exports.update = async ({ id, entity }) => {
  try {
    let result = {};

    await Lead.update(entity, { returning: true, where: { persistenceid: id } }).then(function ([rowsUpdate, [updatedEntity]]) {
      result = updatedEntity;
    });
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: LeadsService: update', error);
    throw new Error(error);
  }
};

module.exports.getOneByQuery = async (query) => {
  try {
    const result = await Lead.findOne(query);
    // console.log(result);
    return result === null ? null : result.dataValues;
  } catch (error) {
    console.log('Something went wrong: LeadsService: getOneByWhere', error);
    throw new Error(error);
  }
};
