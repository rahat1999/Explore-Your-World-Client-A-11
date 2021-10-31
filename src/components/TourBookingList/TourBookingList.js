import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';


const TourBookingList = () => {
    const [bookingList, setBookingList] = useState([])
    const [deleteCount, setDeleteCount] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/bookingPlace")
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [deleteCount])

    // cancle a booking list 
    const cancleBooking = (id) => {

        const confirm = window.confirm("Are You Sure Wanna Cancle Booking?")
        if (confirm) {
            fetch(`http://localhost:5000/bookingPlace/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        setDeleteCount(false)
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

                <Table className="shadow" responsive="sm" striped bordered hover variant="secondary">
                    <thead>
                        <tr>
                            <th>S</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Booking Tour Spot</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Cancel Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingList.map((list, index) =>
                                <tr key={list._id}>
                                    <td>{index + 1}</td>
                                    <td>{list?.name}</td>
                                    <td>{list?.tourBooked?.spot?.cost}</td>
                                    <td>{list?.tourBooked?.spot?.name}</td>
                                    <td>{list?.email}</td>
                                    <td>{list?.date}</td>
                                    <td>
                                        <Button variant="primary">{list?.status}</Button>
                                    </td>
                                    <td className='text-center'><Button onClick={() => cancleBooking(list._id)}
                                        variant="danger" >Cancel</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </div >
    );
};

export default TourBookingList;