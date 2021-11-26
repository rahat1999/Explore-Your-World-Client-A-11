import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="my-5">
            <br />
            <Container >
                <Card style={{ alignItems: "center" }}>
                    <Card.Img style={{ width: '50%', height: "10%", }} variant="top" src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-12757.jpg" />
                    <Card.Body>
                        <Link to="/home">
                            <Button variant="danger">Go Back</Button>{' '}</Link>
                    </Card.Body>
                </Card>

            </Container >
        </div>
    );
};

export default NotFound;