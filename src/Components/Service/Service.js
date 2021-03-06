
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const {service,img}=props.sv;
    const history=useHistory();
    const handledetails=()=>{
        history.push('/details')
    }
    return (
        <div  id="services">
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={img} className="img" />
                    <Card.Body>
                        <Card.Title>Course: {service} </Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={()=>handledetails()} variant="primary" size="lg">Details</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;