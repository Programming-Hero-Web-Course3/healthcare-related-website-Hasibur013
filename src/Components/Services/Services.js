import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect( ()=>{
        fetch('./servicesData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div id="services">
            <Row xs={1} md={3} className="g-3">
                {
                    service.map(sv => <Service
                        key={sv.id}
                        sv={sv}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;