import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./AddTour.css"

const AddTours = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://ghastly-vampire-84744.herokuapp.com/addTour", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Add Tour Spot Successfully')
                    reset()
                }

            })
    };


    return (
        <div className="my-5">
            <br />
            <Container>
                <div>
                    <Card border="primary"
                        style={{ width: '100%', textAlign: 'center' }}>
                        <Card.Body>
                            <Card.Title>
                                <h2>Add Tour Spot</h2>

                            </Card.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="add-form">
                                    Tour image url:
                                    <br />
                                    <input placeholder="Tour Image url" {...register("img")} required />
                                </label>
                                <br />
                                <label className="add-form">
                                    Tour Area Name:
                                    <br />
                                    <input placeholder="Tour Area Name" {...register("name")} required />
                                </label>
                                <br />
                                <label className="add-form">
                                    Tour Cost:
                                    <br />
                                    <input placeholder="Tour Cost" {...register("cost")} required />
                                </label>
                                <br />
                                <label className="add-form">
                                    Tour Duration Day/Night:
                                    <br />
                                    <input placeholder="Tour Duration" {...register("duration")} required />
                                </label>
                                <br />

                                <label className="add-form">
                                    Tour Description
                                    <br />
                                    <textarea placeholder=" Tour Description " {...register("details")} required />
                                </label>

                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <label className="add-form">
                                    <input type="submit" value="Submit" className="bg-warning text-center" />
                                </label>

                            </form>
                        </Card.Body>
                    </Card>


                </div>
            </Container>

        </div>
    );
};

export default AddTours;