import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

import { useState } from "react";

const Form = ({ addAsset }) => {
    const [asset, setAssetName] = useState('');
    const [cost, setAssetCost] = useState('');
    const [quantity, setAssetQuantity] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    
    const formSubmit = (e) => {
        e.preventDefault();

        if(asset === '' || cost === '' || quantity == '') {
            setErrorMessage(true)
        } else {
            addAsset({asset, cost, quantity});

            setAssetName('');
            setAssetCost('');
            setAssetQuantity('');
            setErrorMessage(false)
        }
    }

  return (
      <>
       {errorMessage ? <ErrorMessage message='You must complete all fields'/> : null}
        <form className="form" onSubmit={formSubmit}>
        <div className="form-control">
            <label>Asset</label>
            <input className="input" value={asset} type="text" placeholder="Asset Name" onChange={e => setAssetName(e.target.value)}/>
        </div>
        <div className="form-control">
        <label>Cost</label>
            <input className="input" value={cost} type="tel" placeholder="Value per item" onChange={e => setAssetCost(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Quantity</label>
            <input className="input" value={quantity} type="tel" placeholder="Quantity" onChange={e => setAssetQuantity(e.target.value)}/>
        </div>
        <div className="form-control">
            <Button type="submit" text="Add" />
        </div>
    </form>
      </>
  )
}

export default Form