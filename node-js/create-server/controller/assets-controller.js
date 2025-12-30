const assetService = require("../service/asset-service");
const { generateErrorResponse } = require("../utils/errorMessageHandler");

// Create Asset
function createAsset(req, res) {
  try {
    console.log("-Body", req.body);
    assetService.upsertAsset(req.body);
    res.status(201).send({
      message: "Assets upserted successfully",
    });
  } catch (error) {
    res.status(error.status || 500).send(generateErrorResponse(error));
  }
}

// Get All assets
function getAllAsset(req, res) {
  try {
    return res.status(200).send({
      assets: assetService.getAllAssets(),
      message: "Success",
    });
  } catch (error) {
    res.status(error.status).send(generateErrorResponse(error));
  }
}

// Update asset details by asset id
function updateAssetById(req, res) {
  try {
    const { id } = req.params;
    const assetInfo = req.body;
    assetService.upsertAsset({ ...assetInfo, id });
    res.status(204).send();
  } catch (error) {
    res.status(error.status || 500).send(generateErrorResponse(error));
  }
}

// Delete asset by asset id
function deleteAsset(req, res) {
  try {
    const { id } = req.params;
    assetService.removeAsset(id);
    res.status(204).send();
  } catch (error) {
    res.status(error.status || 500).send(generateErrorResponse(error));
  }
}

module.exports = {
  createAsset,
  getAllAsset,
  updateAssetById,
  deleteAsset,
};
