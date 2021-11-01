import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {
        setIsLoading,
        singInWithGoogle,
        setUser,
        user } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const googleLogin = () => {
        singInWithGoogle()
            .then((result) => {
                setIsLoading(true)
                setUser(result.user)
                history.push(url)
            }).catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className='text-center my-5'>
            <br />
            <h2>Signin Please</h2>
            <hr className='w-25 mx-auto mt-2' />
            <Card style={{ width: '70%', margin: 'auto', boxShadow: '1px 1px 5px 1px gray' }}>
                <Card.Body>
                    <div className="text-center">{user?.displayName}</div>
                    <Card.Title >
                        <Button variant="warning" onClick={googleLogin} >
                            <i className="fab fa-google"></i> Google SignIn
                        </Button>{' '}
                    </Card.Title>
                    <Card.Text>
                        {user?.email}
                    </Card.Text>
                </Card.Body>

                <Card.Img style={{ width: "50%" }} variant="bottom" src="https://as2.ftcdn.net/v2/jpg/04/28/75/97/1000_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg" />

            </Card>

        </div>
    );
};

export default Login;