
import React, {useState, useEffect} from "react";
import {Form, Input, message} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Spinner from '../components/layouts/Spinner';


const Register = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submitHandler = async (values) => {
        try {
            setLoading(true)
            await axios.post('/user/register', values)
            message.success('Resigter Successful')
            setLoading(false)
            navigate('/login')
        } catch (error) {
            setLoading(false)
            message.error('Error')
        }
    }
    return (
        <>
            <div className="register_page ">
                {
                loading && <Spinner/>
            }
                <Form layout="vertical"
                    onFinish={submitHandler}>
                    <h1>Register Form</h1>
                    <Form.Item label="Name" name="name">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email"/>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password"/>
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/login">Already Register ? Click Here to login</Link>
                        <button className="btn btn-primary">Register</button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Register
