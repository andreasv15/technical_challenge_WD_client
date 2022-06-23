import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";

function Phones() {
    const [ allPhones, setAllPhones ] = useState(null);

    useEffect(() => {
        getPhones();
    }, [])

    const getPhones = async () => {
        try {
            
            const response = await axios.get("http://localhost:5005/api/phones");
            // console.log(response.data);
            setAllPhones(response.data);

        } catch (error) {
            
        }
    }


  return (
    <div>
    { allPhones === null && <h1> <ClockLoader /> </h1>}

    {
        allPhones !== null && allPhones.map((eachPhone) => {
            return (
                <div>
                    <Link to={`/phones/${eachPhone.id}`}><h1> {eachPhone.name} </h1></Link>
                </div>
            )

        })
    }
    </div>
  )
}

export default Phones