import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./OurPackage.css"
const OurPackages = () => {
    return (
        <div className="my-5">
            <br />
            <h2 className='text-center '>Our Packages</h2>
            <hr className="w-25 mx-auto mb-3" />
            <Container>
                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Card className='pacakage-card'>

                            <Card.Img className='six-col-img' variant="top" src="https://cdn.nogarlicnoonions.com/images/thumbs/image.php?width=2000&height=2000&image=/images/articles/2021-03/china2021-03-06-06-46-40.jpg" />

                            <Card.Body>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <Card.Title>China</Card.Title>
                                        <span className="me-2"><i className="far fa-clock text-danger"></i> 5-Day-4-Night</span>
                                    </div>
                                    <div>
                                        <b className="text-danger">$1200</b>
                                    </div>
                                </div>
                                <br />
                                <Card.Text>
                                    China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.
                                </Card.Text>
                                <Button>Booking-Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card className='pacakage-card'>
                                    <Card.Img className='small-col-img' variant="top" src="https://www.brandsynario.com/wp-content/uploads/pakistan-lead.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <Card.Title>Pakistan</Card.Title>
                                                <span className="me-2"><i className="far fa-clock text-danger"></i> 4-Day-3-Night</span>
                                            </div>
                                            <div>
                                                <b className="text-danger">$700</b>
                                            </div>
                                        </div>
                                        <br />
                                        <Card.Text>
                                            Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country, with a population 225.2 million, and has the world's second-largest Muslim population.
                                        </Card.Text>
                                        <Button>Booking-Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='pacakage-card'>
                                    <Card.Img variant="top" src="https://workpermit.com/sites/default/files/styles/large/public/22324191185_cf010e09e9_z_0.jpg?itok=npWd9sCH" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <Card.Title>Australia</Card.Title>
                                                <span className="me-2"><i className="far fa-clock text-danger"></i> 5-Day-6-Night</span>
                                            </div>
                                            <div>
                                                <b className="text-danger">$1300</b>
                                            </div>
                                        </div>
                                        <br />
                                        <Card.Text>
                                            Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It
                                        </Card.Text>
                                        <Button>Booking-Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card className='pacakage-card'>
                                    <Card.Img variant="top" src="https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <Card.Title>Itlay</Card.Title>
                                                <span className="me-2"><i className="far fa-clock text-danger"></i> 4-Day-3-Night</span>
                                            </div>
                                            <div>
                                                <b className="text-danger">$1100</b>
                                            </div>
                                        </div>
                                        <br />
                                        <Card.Text>
                                            Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome,is home to the Vatican as well as landmark art and ancient
                                        </Card.Text>
                                        <Button>Booking-Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='pacakage-card'>
                                    <Card.Img variant="top" src="https://globalgrasshopper.com/wp-content/uploads/2015/12/Varanasi-1-1000x656.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <Card.Title>India</Card.Title>
                                                <span className="me-2"><i className="far fa-clock text-danger"></i> 7-Day-6-Night</span>
                                            </div>
                                            <div>
                                                <b className="text-danger">$630</b>
                                            </div>
                                        </div>
                                        <br />
                                        <Card.Text>
                                            India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world
                                        </Card.Text>
                                        <Button>Booking-Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card className='pacakage-card'>
                            <Card.Img className='six-col-img' variant="top" src="https://media.istockphoto.com/photos/skyline-of-downtown-edmonton-alberta-canada-at-twilight-picture-id1279220699?b=1&k=20&m=1279220699&s=170667a&w=0&h=9ARNx2BH-clzkU8VSqV5yH9Sr_yTJfs9b9_ZS217SCk=" />
                            <Card.Body>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <Card.Title>Canada</Card.Title>
                                        <span className="me-2"><i className="far fa-clock text-danger"></i> 8-Day-9-Night</span>
                                    </div>
                                    <div>
                                        <b className="text-danger">$1640</b>
                                    </div>
                                </div>
                                <br />
                                <Card.Text>
                                    Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean,
                                </Card.Text>
                                <Button>Booking-Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default OurPackages;