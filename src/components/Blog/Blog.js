import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Blogs.css"
const Blog = () => {
    return (
        <div className="my-5">
            <br />
            <h2 className="text-center">Our Blogs</h2>
            <hr className='w-25 mx-auto mt-2' />
            <br />
            <Container>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card bolgs">
                            <div className="blogs-img">
                                <img src="https://dontstopliving.net/wp-content/uploads/2014/06/IMG_3427.jpg" className="card-img-top images" alt="img" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <span className="me-2 bg-info px-1 rounded text-white">Asia</span>
                                    <span className="me-2"><i className="fas fa-user-alt"></i> By Salman</span>
                                    <span className="me-2"><i className="far fa-calendar-alt"></i>11-8-2021</span>
                                </div>
                                <div style={{ borderTop: "2px solid gray", margin: "5px 0" }}>
                                    <h4 className="card-title mt-1 text-primary">Best Asia water falls to visit this summer</h4>
                                    <p className="card-text">   Due to the epidemic situation, many Poles decided to rest without leaving the country during this year's holidays. A large group of people, however, decided to go on organized trips abroad with travel agencies, choosing popular, sunny resorts in Europe, Africa and Asia... <Link to="blogs">More...</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bolgs">
                            <div className="blogs-img">
                                <img src="https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large.jpg" className="card-img-top images" alt="img" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <span className="me-2 bg-info px-1 rounded text-white">Italy</span>
                                    <span className="me-2"><i className="fas fa-user-alt"></i> By Rajak</span>
                                    <span className="me-2"><i className="far fa-calendar-alt"></i>11-8-2021</span>
                                </div>
                                <div style={{ borderTop: "2px solid gray", margin: "5px 0" }}>
                                    <h4 className="card-title mt-1 text-primary">Going to italy, What you need to know.</h4>
                                    <p className="card-text">   Due to the epidemic situation, many Poles decided to rest without leaving the country during this year's holidays. A large group of people, however, decided to go on organized trips abroad with travel agencies, choosing popular, sunny resorts in Europe, Africa and Italy... <Link to="blogs">More...</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bolgs">
                            <div className="blogs-img">
                                <img src="https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs=" alt="img" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <span className="me-2 bg-info px-1 rounded text-white">Paris</span>
                                    <span className="me-2"><i className="fas fa-user-alt"></i> By Admin</span>
                                    <span className="me-2"><i className="far fa-calendar-alt"></i>11-8-2021</span>
                                </div>
                                <div style={{ borderTop: "2px solid gray", margin: "5px 0" }}>
                                    <h4 className="card-title mt-1 text-primary">Paris is the city of love.</h4>
                                    <p className="card-text">   Due to the epidemic situation, many Poles decided to rest without leaving the country during this year's holidays. A large group of people, however, decided to go on organized trips abroad with travel agencies, choosing popular, sunny resorts in Europe, Africa and Italy... <Link to="blogs">More...</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bolgs">
                            <div className="blogs-img">
                                <img src="https://c.ndtvimg.com/7b4e6svo_vietnam-golden-bridge-afp_625x300_01_August_18.jpg" alt="img" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <span className="me-2 bg-info px-1 rounded text-white">Francisco</span>
                                    <span className="me-2"><i className="fas fa-user-alt"></i> By Rahat</span>
                                    <span className="me-2"><i className="far fa-calendar-alt"></i>11-8-2021</span>
                                </div>
                                <div style={{ borderTop: "2px solid gray", margin: "5px 0" }}>
                                    <h4 className="card-title mt-1 text-primary">Golden Gate Bridge, San Francisco</h4>
                                    <p className="card-text">   Due to the epidemic situation, many Poles decided to rest without leaving the country during this year's holidays. A large group of people, however, decided to go on organized trips abroad with travel agencies, choosing popular, sunny resorts in Europe, Africa and Italy... <Link to="blogs">More...</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bolgs">
                            <div className="blogs-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Rangdum_village_grazing_fields.jpg" alt="img" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <span className="me-2 bg-info px-1 rounded text-white">Ladakh,India</span>
                                    <span className="me-2"><i className="fas fa-user-alt"></i> By Admin</span>
                                    <span className="me-2"><i className="far fa-calendar-alt"></i>11-8-2021</span>
                                </div>
                                <div style={{ borderTop: "2px solid gray", margin: "5px 0" }}>
                                    <h4 className="card-title mt-1 text-primary">A Road Trip To Leh Ladakh – The Land Of High Passes</h4>
                                    <p className="card-text">   Due to the epidemic situation, many Poles decided to rest without leaving the country during this year's holidays. A large group of people, however, decided to go on organized trips abroad with travel agencies, choosing popular, sunny resorts in Europe, Africa and Italy... <Link to="blogs">More...</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </Container>
        </div >
    );
};

export default Blog;