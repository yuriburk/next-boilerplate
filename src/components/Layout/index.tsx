import { useState } from 'react'
import { Layout as LayoutContainer, Menu, Breadcrumb } from 'antd'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons'

import { Container } from './styles'

const { Header, Content, Footer, Sider } = LayoutContainer
const { SubMenu } = Menu

type LayoutProps = {
  breadcrumb: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ breadcrumb, children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse)
  }

  return (
    <Container>
      <LayoutContainer style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          breakpoint="lg"
          collapsedWidth={isMobile ? 0 : 80}
          onBreakpoint={mobile => setIsMobile(mobile)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <LayoutContainer className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0px 15px' }}>
            <h1>Burk.dev</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumb}</Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Burk.dev</Footer>
        </LayoutContainer>
      </LayoutContainer>
    </Container>
  )
}

export default Layout
