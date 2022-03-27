import Asset from "./Asset";

const Assets = ({ assets, deleteAsset, updateAsset }) => {

  return (
    <div className="asset-content">
        <div className="asset-key">
          <h3>Name</h3>
          <h3>Quantity</h3>
          <h3>Value ($)</h3>
        </div>
        {assets.map((asset) => (
            <Asset key={asset.id} updateAsset={updateAsset} deleteAsset={deleteAsset} asset={asset}/>
        ))}
    </div>
  )
}

export default Assets