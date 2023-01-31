import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Card, Col, Row } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://www.elmueble.com/medio/2022/09/05/perro-cachorro_82dd9cd3_900x900.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </Col>

  <Col span={8}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://www.elmueble.com/medio/2022/09/05/perro-cachorro_82dd9cd3_900x900.jpg"/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </Col>

  <Col span={8}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://www.elmueble.com/medio/2022/09/05/perro-cachorro_82dd9cd3_900x900.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </Col>
  </Row>
  </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;