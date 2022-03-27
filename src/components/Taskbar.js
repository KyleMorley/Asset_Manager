import AddAsset from "./AddAsset"
import SearchAsset from "./SearchAsset"
import Form from "./Form"

import { useState } from "react"

const Taskbar = ({ addAsset, searchAsset }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
    <div className="taskbar">
        <AddAsset onClick={toggleForm}/>
        <SearchAsset searchAsset={searchAsset} />
    </div>
    {showForm ? <Form addAsset={addAsset}/> : null}
    </>
  )
}

export default Taskbar