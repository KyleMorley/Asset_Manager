import Header from "./components/Header";
import Taskbar from "./components/Taskbar";
import Assets from "./components/Assets";

import { useState, useEffect } from 'react';

function App() {
  const [assets, setAssets] = useState([]);

  //GET
  useEffect(() => {
    const getAssets = async () => {
      const assetAPI = await fetchAssets();
      setAssets(assetAPI)
    }

    getAssets()
  }, [])

  const fetchAssets = async () => {
    const res = await fetch('http://localhost:4000/assets');
    const data = await res.json();

    return data
  }

  //CREATE
  const addAsset = async (assetInfo) => {
    const res = await fetch('http://localhost:4000/assets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(assetInfo)
    })

    const data = await res.json();
    setAssets([...assets, data]);
  }

  //UPDATE
  const updateAsset = async (id, assetInfo) => {
    const res = await fetch(`http://localhost:4000/assets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(assetInfo)
    })

    const data = await res.json()
    setAssets(
      assets.map((asset) => 
        asset.id === id ? { ...asset, asset: data.asset, cost: data.cost, quantity: data.quantity } : asset
      )
    )
  }

  //DELETE
  const deleteAsset = async (id) => {
    const res = await fetch(`http://localhost:4000/assets/${id}`, {
        method: 'DELETE'
    })

    setAssets(assets.filter((asset) => asset.id !== id))
  }

  //SEARCH
  const searchAsset = (val) => {
    val ? 
    setAssets(assets.filter((asset) => asset.asset.toLowerCase() == val.toLowerCase())) : window.location.reload()
  }

  return (
    <div>
      <Header />
      <div className="container">
      <Taskbar addAsset={addAsset} searchAsset={searchAsset}/>
      <Assets assets={assets} deleteAsset={deleteAsset} updateAsset={updateAsset}/>
      </div>
    </div>
  );
}

export default App;
