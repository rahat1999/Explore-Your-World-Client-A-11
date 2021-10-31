import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../img/13105.png'
import './About.css'
const About = () => {
    return (
        <div className="my-5">
            <br />
            <h5 className="text-center text-danger">Why Choose Us?</h5>
            <hr className="w-25 mx-auto" />
            <h2 className="text-center mb-5">Every Time We Provide <br /> Best Services</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Card className="mt-4 border border-0" >
                            <Card.Img variant="top" src={img1} />

                        </Card>
                    </Col>
                    <Col>

                        <Row xs={1} md={2} className="g-4 text-center">
                            <Col>
                                <Card className="about-card">
                                    <div className='about-icon'>
                                        <i className="fas fa-box border border-2 p-3"></i>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Exclusive Packages</Card.Title>
                                        <Card.Text>
                                            We Porovide Exclusive Packages in Reasonable prices.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="about-card">
                                    <div className='about-icon'>
                                        <i className="fas fa-globe-americas border border-2 p-3"></i>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>World Class Service</Card.Title>
                                        <Card.Text>
                                            We Try To Provide World Class Services in Our Coustomer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="about-card">
                                    <div className='about-icon'>
                                        <i className="fas fa-user-tie border border-2 p-3"></i>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Best Tour Guide</Card.Title>
                                        <Card.Text>
                                            Whe Have Best Guide.They are Well Known About Tour sport.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="about-card">
                                    <div className='about-icon'>
                                        <i className="fas fa-shield-alt border border-2 p-3"></i>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>100% Secure</Card.Title>
                                        <Card.Text>
                                            We Try to Provide 100% Securety To Our Tourist.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;