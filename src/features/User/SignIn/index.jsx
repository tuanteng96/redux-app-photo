import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { loginSuccess } from '../userSlice';
import UserApi from '../../../api/userApi';
import { useDispatch } from 'react-redux';

SignIn.propTypes = {
    
};

function SignIn(props) {
    const dispatch = useDispatch();
    const [infoLogin, setInfoLogin] = useState({
        username: "",
        password: ""
    });

    const onSubmitLogin = (e) => {
        e.preventDefault();
        const username = infoLogin.username;
        const password = infoLogin.password
        const login = () => async dispatch => {
            try {
                const res = await UserApi.login({
                    USN: username,
                    PWD: password,
                    cmd: "authen"
                })
                dispatch(loginSuccess(res));
            } catch (e) {
                return console.error(e.message);
            }
        }
        dispatch(login());
    }

    const handleChangeInput = (evt) => {
        const value = evt.target.value;
        setInfoLogin({
            ...infoLogin,
            [evt.target.name]: value
        });
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                        <Form onSubmit={onSubmitLogin}>
                            <FormGroup>
                                <Label for="user">Tài Khoản</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="user"
                                    onChange={handleChangeInput}
                                    value={infoLogin.username}
                                    placeholder="Tên đăng nhập" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pwd">Mật khẩu</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="pwd"
                                    onChange={handleChangeInput}
                                    value={infoLogin.password}
                                    placeholder="Mật khẩu" />
                            </FormGroup>
                            <Button color="success">Đăng nhập</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignIn;