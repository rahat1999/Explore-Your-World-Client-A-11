import React, { useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';


const TourBookingList = () => {
    const [bookingList, setBookingList] = useState([])
    const [deleteCount, setDeleteCount] = useState(null)
    useEffect(() => {
        fetch("https://ghastly-vampire-84744.herokuapp.com/bookingPlace")
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [deleteCount])

    // cancle a booking list 
    const cancleBooking = (id) => {

        const confirm = window.confirm("Are You Sure Wanna Cancle Booking?")
        if (confirm) {
            fetch(`https://ghastly-vampire-84744.herokuapp.com/bookingPlace/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        setDeleteCount(true)
                        alert("Booking Delete Successfully ")
                    }
                    else {
                        setDeleteCount(false)
                    }
                })
        }
    }


    return (
        <div className="my-5">
            <br />
            <Container>
                <h2 className='text-center'>Tour Spot Booking List</h2>
                <h4 className="text-center padding-2 ">Total Booking: {bookingList.length}</h4>

                <div className=" mb-3" style={{ maWidth: " 740px" }}>
                    <div className="row g-0">
                        {
                            bookingList.map((list, index) =>
                                <>
                                    <span className=" text-danger"><b>({index + 1})</b></span>
                                    <div key={list._id}
                                        className="col bg-secondary text-white mb-2  rounded-2"
                                        style={{ boxShadow: "1px 1px 4px 1px gray" }}
                                    >
                                        <div className="row g-0">
                                            <div className="col-md-6">
                                                <div className="card-body d-flex justify-content-around">
                                                    <div className="">
                                                        <Card.Title className="text-warning">{list?.name}</Card.Title>
                                                        <div><b>From : {list?.address}</b></div>
                                                        <div className="text-info">{list?.email}</div>
                                                        <div>Booking Date: {list?.date}</div>
                                                    </div>
                                                    <div>
                                                        <Card.Title className="text-warning">Booking Place</Card.Title>
                                                        <div><b>To : {list?.tourBooked?.spot?.name}</b></div>
                                                        <div className="text-info"><b>{list?.tourBooked?.spot?.cost}$</b></div>
                                                        <div><b>{list?.tourBooked?.spot?.duration}$</b></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body d-flex justify-content-evenly">
                                                    <div>
                                                        <Card.Title>Status</Card.Title>
                                                        <div>
                                                            <span className='border p-1 bg-primary rounded'>
                                                                <b>{list?.status}</b>
                                                            </span>
                                                        </div>
                                                    </div>


                                                    {/* CANCLE BUTTON */}
                                                    <div>
                                                        <Card.Title>Acton</Card.Title>
                                                        <Card.Text>
                                                            <Button onClick={() => cancleBooking(list._id)}
                                                                variant="danger" > Cancle Booking</Button>
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>

            </Container >
        </div >
    );
};

export default TourBookingList;