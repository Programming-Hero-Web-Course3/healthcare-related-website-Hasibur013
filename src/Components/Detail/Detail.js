import React from 'react';
import { Card } from 'react-bootstrap';

const Detail = (props) => {
    const { service, description,drName } = props.dt;
    return (
        <div className="justify-content-center">
            <>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>{drName}</Card.Header>
                    <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </>
        </div>
    );
};

export default Detail;