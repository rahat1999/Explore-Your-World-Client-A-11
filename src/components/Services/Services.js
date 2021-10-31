import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div className='my-5'>
            <br />
            <h2 className='text-center mt-4'>Our Services</h2>
            <hr className='w-25 mx-auto text-primary mt-2 mb-5' />
            <Container>
                <Row xs={1} md={4} className="g-4">

                    <Col>
                        <Card className="services-card">
                            <div className='sercice-ico'>
                                <i className="fas fa-procedures svs-icons"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Hotel Booking</Card.Title>
                                <Card.Text>
                                    Largest online hotel booking service in Bangladesh, Big savings on hotels in bangladesh and destinations around the worldwide
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card className="services-card">
                            <div className='sercice-ico'>
                                <i className="fas fa-plane-departure svs-icons"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Flight Booking</Card.Title>
                                <Card.Text>
                                    Now Book and Find flight tickets at best airfare at <span className="text-primary">exploreworld.com</span>. Get best discounts and deals on  flights booking around the world.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card className="services-card">
                            <div className='sercice-ico'>
                                <i className="fas fa-ticket-alt svs-icons"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Ticket Booking</Card.Title>
                                <Card.Text>
                                    Ticket booking in your mind? Looking for cheap airfares? Cleartrip is your one-stop destination for Domestic and International flight bookings.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card className="services-card">
                            <div className='sercice-ico'>
                                <i className="fas fa-hiking haiking"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Amazing Tour</Card.Title>
                                <Card.Text>
                                    Amazing Tours a leading tour Operator at Bangladesh. We are provide BD & world wide Tour Package, Hotel booking and air ticket services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Services;