import React, { useState } from 'react'
import Axios from 'axios'

export const HomeView = () => {
    const [data, setData] = useState ()

    const fetchDataFromExternalAPI = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => setData(response.data))
        .catch((error) => console.log (error))
    }

    const displayData = () => {
        if (data) {
            return <div>
                <h3>name: {data.name}</h3>
                <h3>id: {data.id}</h3>
                <h3>weight: {data.weight}</h3>
                <h3>height: {data.height}</h3>
            </div>
        }
    }

    return (
        <div>
            <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
            {displayData()}
        </div>
    )

}