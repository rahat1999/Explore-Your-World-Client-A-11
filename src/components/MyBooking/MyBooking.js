import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {

    const [mybooking, setMyBooking] = useState([])
    const [isCancled, SetIsCanceld] = useState(null)

    console.log('my booking', mybooking)
    const { user } = useAuth()
    const email = user?.email

    console.log(email)
    useEffect(() => {
        fetch(`https://ghastly-vampire-84744.herokuapp.com/myBooking/${email}`)
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [isCancled])


    /* cancle my booking */
    const cancleBooking = id => {
        console.log(id)
        const confirm = window.confirm('Are you sure wanna Cancle Booking ?')
        if (confirm) {
            fetch(`https://ghastly-vampire-84744.herokuapp.com/myBooking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        SetIsCanceld(true)
                        alert("Booking Delete Successfully ")
                    }
                    else {
                        SetIsCanceld(false)
                    }
                })
        }

    }

    return (
        <div className="my-5">
            <br />


            <Container>
                <h2 className="text-center">My Booking List </h2>
                <h5 className="text-center">My Total booking : {mybooking?.length} </h5>
                <Row xs={1} md={3} className="g-4">

                    {
                        mybooking.map(my =>
                            <Col key={my?._id}>
                                <Card style={{ boxShadow: ".5px .5px 3px 1px gray", padding: '5px' }}>
                                    <div>
                                        <div>
                                            <div className="card mb-3" style={{ maxWidth: "640px" }}>
                                                <div className="row g-0 p-2">
                                                    <div className="col-md-6">
                                                        <img src={my?.tourBooked?.spot?.img} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body">
                                                            <p className="card-text text-danger"><b>
                                                                {my?.tourBooked?.spot?.cost}$
                                                            </b></p>
                                                            <p className="card-text">
                                                                <b><i className="far fa-clock text-danger">
                                                                </i> {my?.tourBooked?.spot?.duration}</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h5 className="card-title">
                                                        <i className="fas fa-map-marker-alt text-danger">
                                                        </i> {my?.tourBooked?.spot?.name}</h5>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className=" text-danger">
                                            <i className="far fa-user "></i> {my?.name} </Card.Title>
                                        <div className=" text-primary"><b><i className="far fa-envelope"></i> {my.email}</b></div>
                                        <div className="me-2"><b>Form: {my?.address}</b> </div>
                                        <i className="fas fa-level-down-alt text-danger"></i>
                                        <div><b>To: {my?.tourBooked?.spot?.name}</b></div>
                                        <span className="d-block">Date: {my?.date} </span>
                                        <span>Phone: {my?.phone} </span>


                                    </Card.Body>

                                    <Button variant='danger' onClick={() => cancleBooking(my?._id)}>Cancle Booking</Button>
                                </Card>
                            </Col>)
                    }

                </Row>

            </Container>
        </div >
    );
};

export default MyBooking;