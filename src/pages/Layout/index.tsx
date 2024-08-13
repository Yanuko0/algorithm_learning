
import { Layout, Menu, Popconfirm, MenuProps } from "antd"
import {
    HomeOutlined,
    DiffOutlined,
    LogoutOutlined,

} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const { Header, Sider, Footer } = Layout



const items: MenuItem[] = [
    getItem('首頁', '/', <HomeOutlined />),
    getItem('演算法', 'sub1', <DiffOutlined />, [
      getItem('第一章-時間複雜度', 'TimeComplexity'),
      getItem('第二章-空間複雜度', 'SpaceComplexity'),
      getItem('第三章-棧(堆疊)', 'Stack'),
      getItem('第三章-對列(佇列)', 'Queue'),
      
    ]),
  ];


const App: React.FC = () => {
    const navigate = useNavigate()
    const onMenuClick = (route: { key: string }) => {
        // console.log("菜單被點擊了",route)
        const path = route.key
        navigate(path)
    }

    //反向高亮
    // 1.獲取當前路由路徑
    const location = useLocation()
    console.log(location.pathname)
    const selectedKey = location.pathname

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">立瑜</span>
                    <span className="user-logout">
                        <Popconfirm title='是否確認退出?' okText="退出" cancelText="取消">
                            <LogoutOutlined />退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        // defaultSelectedKeys={['1']}
                        selectedKeys={[selectedKey]}
                        onClick={onMenuClick}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    {/* 二級路由出口 */}
                    <Outlet />
                    <Footer style={{ textAlign: 'center' }}>
                        <a href="https://www.instagram.com/baredragon/">立瑜製作</a> ©{new Date().getFullYear()} Created by LiYu
                    </Footer>
                </Layout>

            </Layout>

        </Layout>

    )
}

export default App