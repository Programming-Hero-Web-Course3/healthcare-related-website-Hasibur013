import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor,setDoctor]=useState([]);
    useEffect( ()=>{
        fetch('./servicesData.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div id="doctors">
            <Row xs={1} md={4} className="g-3">
                {
                    doctor.map(dct => <Doctor
                    key={dct.id}
                    dct={dct}
                    ></Doctor> )
                }
            </Row>
        </div>
    );
};

export default Doctors;