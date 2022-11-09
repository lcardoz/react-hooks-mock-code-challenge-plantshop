import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  function addPlant (newPlantObj) {
    setPlants([...plants, newPlantObj])
  }

  const [searchText, setSearchText] = useState('')

  function searchHandler (e) {
    setSearchText(e.target.value)
  }

  const filteredPlants = plants.filter((plantObjToFilter) => {
    return (
      plantObjToFilter.name.toLowerCase().includes(searchText.toLowerCase())
    )
  })
  
  useEffect (() => {
    fetch (`http://localhost:6001/plants`)
     .then (response => response.json())
     .then (data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchHandler={searchHandler} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;