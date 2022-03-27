import UpdateForm from "./UpdateForm";

import { useState } from "react";

const Asset = ({ asset, deleteAsset, updateAsset }) => {
  const [updateForm, setUpdateForm] = useState(false);

  const toggleUpdateForm = () => setUpdateForm(!updateForm);

  return (
    <>
      <ul className="list">
        <li className="list-item">{asset.asset}</li>
        <li className="list-item">{asset.quantity}</li>
        <li className="list-item">{asset.cost}</li>
        <span className="update" onClick={toggleUpdateForm}>Update</span>
        <span className="delete" onClick={() => deleteAsset(asset.id)} >X</span>
    </ul>
      {updateForm ? <UpdateForm assetInf={asset} updateAsset={updateAsset}/> : null}
    </>
     )
}

export default Asset