import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/slider1.png';
import image2 from '../../images/slider2.jpg';
import image3 from '../../images/slider3.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={200}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Mental Healthcare</h3>
                    <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={200}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Preventive Care</h3>
                    <p>Preventive care helps detect or prevent serious diseases and medical problems before they can become major. Annual check-ups, immunizations, and flu shots, as well as certain tests and screenings, are a few examples of preventive care.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={200}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Dental Healthcare</h3>
                    <p>Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;