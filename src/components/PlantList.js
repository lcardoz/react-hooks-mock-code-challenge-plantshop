import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const renderPlants = plants.map((plantObj, i) => {
      return (
        <PlantCard
          key={i}
          plantObj={plantObj}
        />
      );
  });
  
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;