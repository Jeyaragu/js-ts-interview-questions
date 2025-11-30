const express = require('express');
const assetController = require('../controller/assets-controller');

const router = express.Router();

router.post('/assets', assetController.createAsset);
router.get('/assets/search', assetController.getAllAsset);
router.put('/assets/:id', assetController.updateAssetById);
router.delete('/assets/:id', assetController.deleteAsset);

module.exports = router;