import React from "react"; 
import { Layout, Menu, Breadcrumb, Button, Avatar, Badge, Descriptions } from 'antd';
import {Link} from 'react-dom';
import styled from "styled-components";


import {
  DesktopOutlined,
  DashboardOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  } from '@ant-design/icons';
import Title from "antd/lib/typography/Title";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: true,
    
  };


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
        return (
    <buyer>
      <Layout className="sider">
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="sider-layout" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="orders" icon={< PieChartOutlined/>}>
              Orders
            </Menu.Item>
            <SubMenu key="myProfile" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="Managerfq">Manage RFQ</Menu.Item>
              <Menu.Item key="myFav">My favourite</Menu.Item>
              <Menu.Item key="myFav">Submit RFQ</Menu.Item>
              <Menu.Item key="contactseller">My Contacts</Menu.Item>
              <Menu.Item key="contactseller">Become a Seller</Menu.Item>
            </SubMenu>
            <SubMenu key="transaction" icon={<TeamOutlined />} title="Transactions">
              <Menu.Item key="allTranscation">All Transactions</Menu.Item>
              <Menu.Item key="transactionreport">Transaction Report</Menu.Item>
              <Menu.Item key="logisticsorder">Logistics Order</Menu.Item>
            </SubMenu>
            <Menu.Item key="tradeservice" icon={<FileOutlined />}> 
            Trade Service
            </Menu.Item>

          </Menu>
        </Sider>
        
        <Layout className="site-layout">
        <div>
          <img src="./logo2.png"/>

        </div>
        <Title style={{paddingLeft:'12'}} level={3}>
        
        <Avatar className="icon" icon={<UserOutlined/>}/>
              
        <Avatar className="icon" icon={<BellOutlined/>}/>
        
      <span className="style1">  PreciousTemmy
      </span>
      <span className="style1">  Inbox
      </span>
      
      <span className="style1"> Saved Item
      </span>
        
        </Title>

          <Header className="site-layout-background" style={{ paddingTop: 40 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>My Profile</Breadcrumb.Item>
              <Breadcrumb.Item>Become a Seller</Breadcrumb.Item>
              <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Descriptions title="User Info" layout="vertical">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
      </buyer>  
    );
  }
}

const buyer = styled.div`
@import '~antd/dist/antd.css';

.App {
  text-align: left;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
.sider{
  
  color:#cccc;
  margin-top:35px;
  

}
.App-header {
  background-color: #004214;
  min-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: right;
  padding:15px;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
}
.style1{
  margin-left:20px;
  margin-top:20px;
  font-size: 15px;
  float:left;
  flex-direction:column;
}
.icon{
  float:right;
  padding:2px 0;
  margin-top:12px;
  margin-right: 12px;
  background-color: #87d068;
}

.h-style1{
  margin-left:20px;
  margin-top:20px;
  padding: 8px 0;
  font-size: 15px;
  float:right;
  flex-direction:column;
}
.text-style1{
  background-color: #ffff;
  min-height:20px;
  
  font-size: calc(10px + 2vmin);
   color:white;
}
.App-link {
  color: #61dafb;
}
.divider{
  color:#ffff;
}


#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #ffff;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.sider-layout {
  background: #cccc;
  
}

`;

export default Dashboard;
