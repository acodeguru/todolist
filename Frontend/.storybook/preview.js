
import { Row, Col, Card, PageHeader, Tabs } from 'antd';

import '../src/styles/main.scss'
import AddNewTaskForm from '../src/components/task/addTask/addTask'
import PendingTask from '../src/components/task/pendingTask/pendingTask'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const { TabPane } = Tabs;

export const decorators = [
  (Story) => (
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
        <AddNewTaskForm  />
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
    <PendingTask  />
    </TabPane>
    <TabPane tab="Completed Task List" key="2">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
      </Card>

    </Col>
  </Row>
  )
]