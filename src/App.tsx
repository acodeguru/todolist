import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Row, Col, Card, PageHeader, Tabs } from 'antd';
import 'antd/dist/antd.css';

import './index.scss'
import './styles/main.scss'
import AddNewTaskForm from '../src/components/task/addTask/addTask'
import PendingTask from '../src/components/task/pendingTask/pendingTask'
import CompletedTask from '../src/components/task/completedTask/completedTask'

const { TabPane } = Tabs;


function App() {

  return (
    <Router>
            <Row
              justify="center"
              align="middle"
              gutter={[0, 20]}
              className="todos-container"
            >
              <Col
                xs={{ span: 23 }}
                sm={{ span: 23 }}
                md={{ span: 21 }}
                lg={{ span: 20 }}
                xl={{ span: 18 }}
              >
                
                <PageHeader
                  title="Add Todo"
                  subTitle="To add a todo, just fill the form below and click in add todo."
                />
              </Col>

              <Col
                xs={{ span: 23 }}
                sm={{ span: 23 }}
                md={{ span: 21 }}
                lg={{ span: 20 }}
                xl={{ span: 18 }}
              >
                <Card title="Create a new todo">
                  <AddNewTaskForm />
                </Card>
              </Col>
              <Col
                xs={{ span: 23 }}
                sm={{ span: 23 }}
                md={{ span: 21 }}
                lg={{ span: 20 }}
                xl={{ span: 18 }}
              >

                <Card title="Details of task list">
                  <Tabs defaultActiveKey="1" >
                    
                    <TabPane tab="Pending Task List" key="1">
                      <PendingTask />
                    </TabPane>

                    <TabPane tab="Completed Task List" key="2">
                      <CompletedTask />
                    </TabPane>
                  </Tabs>
                </Card>

              </Col>
            </Row>
    </Router>
  );

}

export default App;