var assets = [{
    id: 1,
    name: "word document",
    desc: "desc",
    size: "",
    meta_data: "http://domain_name/sample.pdf",
    content: ''
}];

// Function will find the asset from main asset object 
// If asset already available, update asset with index
// If not push object to the array
function upsertAsset(assetInfo) {
    const findAsset = assets.find((asset) => asset.id == assetInfo.id);
    if (!findAsset) {
        assets.push(assetInfo);
    } else {
        const findAssetIndex = assets.findIndex((a) => a.id == assetInfo.id);
        assets[findAssetIndex] = assetInfo;
    }
    return;
};

// Retrive all the assets
function getAllAssets(searchValue) {
    return assets;
};

// Remove the asset from the assets array
function removeAsset(id) {
    return assets = assets.filter((asset) => asset.id != id);
};

module.exports = {
    upsertAsset,
    getAllAssets,
    removeAsset
}