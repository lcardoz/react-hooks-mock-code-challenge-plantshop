import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [plantName, setPlantName] = useState('')
  const [plantImage, setPlantImage] = useState('')
  const [plantPrice, setPlantPrice] = useState('')
  
  function handleSubmit (e) {
    e.preventDefault();
    //console.log('submitted') 
    const newPlantObj = {
     name: plantName,
     image: plantImage,
     price: plantPrice
    }
    addPlant(newPlantObj)
  }

  function handleNameChange (e) {
    setPlantName(e.target.value)
  }

  function handleImageChange (e) {
    setPlantImage(e.target.value)
  }

  function handlePriceChange (e) {
    setPlantPrice(e.target.value)
  }
  
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImageChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
