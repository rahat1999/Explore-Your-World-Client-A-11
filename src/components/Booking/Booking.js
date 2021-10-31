import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const { id } = useParams()
    const [spot, setSpot] = useState([])
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.tourBooked = { spot }
        data.status = "pending.."

        fetch('https://ghastly-vampire-84744.herokuapp.com/bookingPlace', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Successfully')
                }
            })


        reset({})
    };

    useEffect(() => {
        fetch(`https://ghastly-vampire-84744.herokuapp.com/singleTourSpot/${id}`)
            .then(res => res.json())
            .then(data => setSpot(data))
    }, [])


    return (
        <div className='my-5'>
            <br />
            <Container>
                <h2 className="text-center my-3">Tour Booking Here</h2>
                <hr className='w-25 mx-auto mt-2' />
                <Row xs={1} md={2} className="g-4">
                    <Col>

                        <Card.Img variant="top" src={spot?.img} />
                        <Card.Body>
                            <div className='d-flex justify-content-between ' style={{ borderBottom: "1px solid gray" }}>
                                <div>
                                    <Card.Title className="text-primary"><b>{spot?.name}</b> </Card.Title>
                                    <p className="text-danger"><i className="far fa-clock"></i> <b>{spot?.duration}</b></p>
                                </div>
                                <p><b className="text-danger me-4">{spot.cost}$</b></p>
                            </div>
                            <Card.Text>
                                {spot?.details}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>

                        <Card.Body>
                            <div className="w-75 mx-auto shadow border p-4 bg-info rounded ">
                                <Card.Title className="form-title">Book This Tour</Card.Title>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="booking-form">
                                        Name:
                                        <input defaultValue={user?.displayName} {...register("name")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form">
                                        Email:
                                        <input defaultValue={user?.email} {...register("email")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form">
                                        Date:
                                        <input placeholder="Date" {...register("date")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form">
                                        From where :
                                        <input placeholder=' From where ' {...register("address")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form">
                                        Number:
                                        <input placeholder='Phone number' {...register("phone")} required />
                                    </label>
                                    <label className="booking-form">
                                        Number:
                                        <input placeholder='No of Person' {...register("person")} required />
                                    </label>
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input className="bg-warning"
                                        type="submit" value="Submit " />

                                </form>
                            </div>

                        </Card.Body>

                    </Col>
                </Row>
                <div className='text-center'> <Link to="/tours"><Button
                    variant="warning shadow border px-5">Go Back </Button></Link></div>
            </Container>
        </div>
    );
};

export default Booking;