import React from 'react'
import { Form, Row, Col, Input, notification, Button, DatePicker, TimePicker } from 'antd';
import { useRedux } from '../../../redux/context';

export default function AddNewTaskForm() {

    const { dispatch } = useRedux()
    const openNotificationWithIcon = () => {
        notification.success({
            message: 'Added Successfully.',
        });
    };

    /*AntD Form onFinish Method is Alternate of onSubmit and it manages all states too.*/
    const onFinish = (values: Object) => {
        dispatch({ type: "AddNewTask", payload: { ...values, completed: false } })
        openNotificationWithIcon() //Show Notification on Success full Event.
    };



    return (
        <Form
            style={{ width: '100%' }}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Row gutter={24}>
                <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                    <Form.Item
                        label="Task"
                        name="task"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Your Task!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={5}>
                    <Form.Item
                        label="Date"
                        name="dateTime"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Date',
                            },
                        ]}
                    >
                        <DatePicker className='w-full' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={5}>
                    <Form.Item
                        label="Time"
                        name="dateTime"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Time',
                            },
                        ]}
                    >
                        <TimePicker className='w-full' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={4} xl={4} className="md:flex md:justify-center mb-6">
                    <Form.Item >
                        <Button block type="primary" htmlType="submit" >
                            Add Task
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}
