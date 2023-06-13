// @ts-nocheck
import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'



const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
}





const Login = () => {
    const [value, setValue] = useState("")

    const onFinish = (values) => {
        setValue(values)
    }

    const user = {
        login: 'Ramzan',
        password: '12345'
    }

    const isUser = () => {
        if (value.username === user.login && value.password === user.password) {
            return true
        }
        else {
            return false
        }
    }






    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, marginTop: 250, marginLeft: 500 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item

                label="Логин"
                name="username"
                rules={[{ required: true, message: 'Пожалуйста, введите Ваш логин!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Пожалуйста, введите Ваш пароль!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                {isUser() ? <Link to='/menu'><Button type="primary" htmlType="submit">
                    Войти
                </Button></Link> : <Button type="primary" htmlType="submit">
                    Войти
                </Button>}





            </Form.Item>
        </Form>
    )
}

export default Login
