import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset({})
    };

    return (
        <div className="my-5">
            <br />

            <Container>
                <div className='booking-card p-3'>
                    <h6 className='text-center text-danger'>Contact With Us</h6>
                    <hr className="w-25 mx-auto" />
                    <h2 className='text-center text-primary'>If You Have Any Question
                        <br /> Drop A Message</h2>
                    <br />

                    <div className="row row-cols-1 row-cols-md-2 g-4 ">
                        <div className="col col-md-8 ">
                            <div className=" w-75 mx-auto pb-2">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <label className="booking-form">
                                        Name:
                                        <input placeholder="Name" {...register("name")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form">
                                        Email:
                                        <input placeholder="email" {...register("email")} required />
                                    </label>
                                    <br />
                                    <label className="booking-form" >
                                        Your Message:
                                        <br />
                                        <textarea className="comment-box"  {...register("massage")} required />
                                    </label>

                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    < input className="bg-info" type="submit" value="Send Message" />
                                </form>

                            </div>
                        </div>

                        {/*---------- contact part here---------------*/}

                        <div className="col col-md-4">
                            <div className=" h-100">

                                <div className="card-body">
                                    <div className="contact-info ">
                                        <div>
                                            <p className="icone m-3">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </p>
                                        </div>
                                        <div>
                                            <p>129/23 Dhaka,Motijheel chottor
                                                <br />Gulshan LS Park</p>
                                        </div>
                                    </div>

                                    <div className="contact-info ">
                                        <div>
                                            <p className="icone m-3">
                                                <i className="fas fa-mobile-alt"></i>
                                            </p>
                                        </div>
                                        <div>
                                            <p>+088-435673345
                                                <br />  +99-83435553</p>
                                        </div>
                                    </div>
                                    <div className="contact-info ">
                                        <div>
                                            <p className="icone m-3">
                                                @
                                            </p>
                                        </div>
                                        <div>
                                            <p>help@gmail.com
                                                <br /> info@yahoo.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div >

    );
};

export default Contact;