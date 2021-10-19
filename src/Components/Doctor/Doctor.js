import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Doctor = (props) => {
    const {drName,drImg,service}=props.dct;
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={drImg} className="img" />
                    <Card.Body>
                        <Card.Title>Doctor Name: {drName} </Card.Title>
                        <Card.Text>
                            Service: {service}
                        </Card.Text>
                    </Card.Body>
                    <br />
                    <div className="social-icon">
                        <SocialIcon url="https://twitter.com/jaketrent" />
                        <span>  </span>
                        <SocialIcon url="https://linkedin.com/in/jaketrent" />
                        <span>  </span>
                        <SocialIcon url="https://facebook.com/jaketrent" />
                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Doctor;