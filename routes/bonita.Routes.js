const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const bonitaController = require('../controller/bonita.Controller');
const bonitaSchema = require('../schema/bonitaSchema');

/**
 * Rutas
 */
router.post('/process/instatiate',
    joiSchemaValidation.validateBody(bonitaSchema.instatiateSchema),
    bonitaController.instatiate
);

router.post('/task/executebyidcase/:idcase',
    joiSchemaValidation.validateBody(bonitaSchema.executebyidcaseSchema),
    bonitaController.executebyidcase
);

router.post('/task/executebytask/:idtask',
    joiSchemaValidation.validateBody(bonitaSchema.executebyidtaskSchema),
    bonitaController.executebyidtask
);

router.post('/task/updatecontractlead',
    joiSchemaValidation.validateBody(bonitaSchema.updateContractLeadSchema),
    bonitaController.updateContractLeadSchema
);

router.post('/task/updatecontractpurchaseorder',
    joiSchemaValidation.validateBody(bonitaSchema.updateContractOrderPurchaseSchema),
    bonitaController.updateContractOrderPurchaseSchema
);

module.exports = router;
