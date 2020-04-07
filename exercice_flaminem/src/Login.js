import React from 'react';
import fire from './config/fire';
import './style/Login.css';

import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader, Row, Col } from 'reactstrap';


class Login extends React.Component {


    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed Up');
            })
            .catch((err) => {
                alert(err);
            })
    }

    login() {

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Logged In');
            })
            .catch((err) => {
                alert(err);
            })
    }

    render() {
        return (
            <Card className="carte">
                <CardHeader>Veuillez vous identifier.</CardHeader>
                <CardBody>
                    <Form className="login-form">
                        <FormGroup>
                            <Label>Utilisateur</Label>
                            <Input type="email" id="email" placeholder="Email" required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Mot de passe</Label>
                            <Input type="password" id="password" placeholder="Password" required />
                        </FormGroup>
                        <Row>
                            <Col>
                                <Button className="btn-dark btn-block" onClick={this.login}>Se connecter</Button>
                            </Col>
                            <Col>
                                <Button className="btn-success btn-block" onClick={this.signUp}>S'inscrire</Button>
                            </Col>
                        </Row>

                    </Form>
                </CardBody>
            </Card>

        )
    }
}

export default Login;