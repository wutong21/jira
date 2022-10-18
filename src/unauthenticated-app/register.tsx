import { Button, Form, Input } from 'antd';
import React, { FormEvent } from 'react';
import { LongButton } from '.';
import { useAuth } from '../context/auth-context';
const apiUrl = process.env.REACT_APP_API_URL

// 鸭子类型： 面向接口编程 而不是面向对象编程
export const RegisterScreen = () => {
    const { register, user } = useAuth()
    const handleSubmit = (values: { username: string, password: string }) => {
        register(values)
    }
    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'}>
            <Input type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'}>
            <Input type="password" id={'password'} />
        </Form.Item>
        <Form.Item>
            <LongButton htmlType={'submit'} >注册</LongButton>
        </Form.Item>
    </Form>
}