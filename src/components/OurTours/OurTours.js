import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurTour.css'
const OurTours = () => {

    const [ourTrips, setOurTrips] = useState([])

    useEffect(() => {
        fetch('https://ghastly-vampire-84744.herokuapp.com/touringSpot')
            .then(res => res.json())
            .then(data => setOurTrips(data))
    }, [])
    return (

        <Container>
            <div className="my-5">
                <br />
                <h2 className="text-center ">Our Trips</h2>
                <hr className='w-25 mx-auto mb-4' />
                <Row xs={1} md={2} className="g-4">

                    {
                        ourTrips.map(trip =>
                            <Col key={trip?._id}>

                                <div className="card border border-none mb-3 tour-container " style={{ maxWidth: "680px" }}>
                                    <div className="row g-0 p-2">

                                        <div className="col-md-5">
                                            <img src={trip?.img}
                                                style={{ height: "210px" }}
                                                className="img-fluid rounded-start" alt="img" />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h4 className="card-title text-primary">
                                                    {trip?.name}
                                                </h4>
                                                <span>---------------------------</span>
                                                <div className="card-text">
                                                    {trip.details.slice(0, 120)}
                                                </div>
                                                <div> <Link
                                                    to={`/booking/${trip._id}`}>
                                                    <Button variant="danger">Book Now</Button>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Col>)
                    }

                </Row>
            </div>
        </Container>


    );
};

export default OurTours;