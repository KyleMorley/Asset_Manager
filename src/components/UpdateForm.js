import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

import { useState } from "react";

const UpdateForm = ({assetInf, updateAsset}) => {
    const [asset, setAssetInfo] = useState('')
    const [cost, setAssetCost] = useState('');
    const [quantity, setAssetQuantity] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const submitUpdate = (e) => {
        e.preventDefault();

        if(asset === '' || cost === '' || quantity === '') {
            setErrorMessage(true)
        } else {
            updateAsset(assetInf.id, {asset, cost, quantity})

            setAssetInfo('')
            setAssetCost('')
            setAssetQuantity('')
        }
    }

  return (
     <>
     {errorMessage ? <ErrorMessage message='Please fill in all fields' /> : null}
    <form className="form" onSubmit={submitUpdate}>
        <div className="form-control">
            <label>Asset</label>
            <input className="input" type="text" value={asset} onChange={e => setAssetInfo(e.target.value)} />
        </div>
        <div className="form-control">
        <label>Cost</label>
            <input className="input" type="tel" value={cost}  onChange={e => setAssetCost(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Quantity</label>
            <input className="input" type="tel" value={quantity} onChange={e => setAssetQuantity(e.target.value)}/>
        </div>
        <div className="form-control">
            <Button type="submit" text="Update" />
        </div>
    </form>
     </> 
  )
}

export default UpdateForm