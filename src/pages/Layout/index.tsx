
import { Layout, Menu, MenuProps, Switch, MenuTheme, Button, } from "antd"
import {
    HomeOutlined,
    DiffOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

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
        getItem('第四章-對列(佇列)', 'Queue'),
        getItem('第五章-鏈表(鏈結串列)', 'LinkedList'),
        getItem('第六章-字典與哈希表', 'Dictionary_Hash'),
    
    ]),
];


const App: React.FC = () => {
    const navigate = useNavigate()
    const onMenuClick = (route: { key: string }) => {
        // console.log("菜單被點擊了",route)
        const path = route.key
        setCurrent(path);
        navigate(path)
    }


    //反向高亮
    // 1.獲取當前路由路徑
    const location = useLocation()
    // console.log(location.pathname)
    // const selectedKey = location.pathname


    //更改主題顏色
    const [menuTheme, setMenuTheme] = useState<MenuTheme>('dark');
    const [current, setCurrent] = useState<string>(location.pathname);

    const changeTheme = (value: boolean) => {
        setMenuTheme(value ? 'dark' : 'light');
    };

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location.pathname]);

    //左側導行欄位縮放
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    return (
        <Layout>
            <Header className={`header`}>
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">立瑜</span>
                    <span className="user-logout">
                        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                    </span>
                </div>
            </Header>

            <Layout>

                <Sider width={200} className="site-layout-background" collapsed={collapsed}>
                    <Switch
                        checked={menuTheme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <Menu
                        mode="inline"
                        theme={menuTheme}
                        // defaultSelectedKeys={['1']}
                        selectedKeys={[current]}
                        onClick={onMenuClick}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}>
                    </Menu>
                </Sider>

                <Layout className="layout-content" style={{ padding: 20 }}>
                    {/* 二級路由出口 */}
                    <Outlet />
                    <Footer style={{ textAlign: 'center' }}>
                        <a href="https://www.instagram.com/baredragon/"  target="_blank" >立瑜製作</a> ©{new Date().getFullYear()} Created by LiYu
                    </Footer>
                </Layout>

            </Layout>

        </Layout>

    )
}

export default App