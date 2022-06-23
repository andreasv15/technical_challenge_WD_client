import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";

function PhoneDetails() {
    const { id } = useParams();
    const [ phone, setPhoneDetails ] = useState(null);


    useEffect(() => {
        getPhoneDetail();
    }, [])

    const getPhoneDetail = async () => {
        try {
            
            const response = await axios.get(`http://localhost:5005/api/phones/${id}`);
            setPhoneDetails(response.data)

        } catch (error) {

        }
    }

    
    return (
        <div>
            <Link to={`/`}>HOME</Link>
            { phone === null && <h1> <ClockLoader /> </h1>}


            {phone !== null &&
                <div >
                <div>
                    <img src={`/${phone.imageFileName}`} alt='img' width={500} />

                </div> 
                    <div>
                        <p className="phoneTitle"><span style={{'fontWeight': 'bold'}}>Phone name:</span> {phone.name}</p>
                        <p className="manufacturer"><span style={{'fontWeight': 'bold'}}>Manufacturer:</span> {phone.manufacturer}</p>
                        <p className="description"><span style={{'fontWeight': 'bold'}}>Description:</span> {phone.description}</p>
                        <p className="color"><span style={{'fontWeight': 'bold'}}>Color:</span> {phone.color}</p>
                        <p className="price"><span style={{'fontWeight': 'bold'}}>Price:</span> {phone.price}€</p>
                        <p className="screen"><span style={{'fontWeight': 'bold'}}>Screen:</span> {phone.screen}</p>
                        <p className="processor"><span style={{'fontWeight': 'bold'}}>Processor:</span> {phone.processor}</p>
                        <p className="ram"><span style={{'fontWeight': 'bold'}}>Ram:</span> {phone.ram}GB</p>
                    </div>
                </div>
            }
        </div>
  )
}

export default PhoneDetails