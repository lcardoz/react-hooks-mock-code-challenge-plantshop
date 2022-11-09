import React, {useState} from "react";

function PlantCard({plantObj}) {

  const [stocked, setStocked] = useState(true)

  function handleButton () {
    setStocked(!stocked)
  }

  return (
    <li className="card">
      <img src={plantObj.image} alt={plantObj.name} />
      <h4>{plantObj.name}</h4>
      <p>Price: {plantObj.price}</p>
      {stocked ? (
        <button onClick={handleButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleButton}>Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
