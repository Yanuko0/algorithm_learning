
import { Layout, Menu, MenuProps, Switch, MenuTheme, Button, } from "antd"
import {
    HomeOutlined,
    DiffOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    OpenAIOutlined,
    RadarChartOutlined,

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
        getItem('第一章-時間複雜度', '/TimeComplexity'),
        getItem('第二章-空間複雜度', '/SpaceComplexity'),
        getItem('第三章-棧(堆疊)', '/Stack'),
        getItem('第四章-對列(佇列)', '/Queue'),
        getItem('第五章-鏈表(鏈結串列)', '/LinkedList'),
        getItem('第六章-字典與哈希表', '/Dictionary_Hash'),
        getItem('第七章-樹', '/Tree'),
        getItem('第八章-堆', '/Heap'),
        getItem('第九章-算法', '/Algorithm'),
        getItem('第十章-動態規劃', '/Dynamic_Programming'),
        getItem('第十一章-貪心算法', '/Greedy_Algorithm'),
    ]),
    getItem('AI', 'sub2', <OpenAIOutlined/>,[
        getItem('第一章-人工智能入門', '/AI'),
        getItem('第二章-如何實現自動化決策', '/AI/Automated_Decision_Making'),
        getItem('第三章-圖像識別與自然語言處理', '/AI/Image_Recognition'),
        getItem('第四章-Python環境搭建', '/AI/Python_Environment_setup'),
        getItem('第五章-多元線性回歸', '/AI/Multiple_Linear_Regression'),
        getItem('實戰項目-糖尿病回歸預測', '/AI/Pp01_diabetes_regression_prediction'),
        getItem('第六章-回歸', '/AI/Logistic_Regression'),
        getItem('實戰項目-鳶尾花大作戰', '/AI/Pp02_Iris_battle'),
        getItem('第七章-機器學習之正則化技術', '/AI/Regularization_techniques'),
        getItem('實戰項目-新聞分類,不再錯過熱門資訊', '/AI/Pp03_News_classification'),
        getItem('第八章-梯度下降法', '/AI/Gradient_descent_method'),
        getItem('第九章-數據規一化', '/AI/Data_normalization'),
        getItem('實戰項目-手寫數字識別', '/AI/Pp04_Handwritten_digit_recognition'),
        getItem('第十章-KMeans聚類', '/AI/KMeans'),
        getItem('實戰項目-KMeans實現', '/AI/Pp05_KMeans_accomplish'),
        getItem('第十一章-高斯混合模型', '/AI/Gaussian_Mixture_Model'),
        getItem('實戰項目-說話人識別', '/AI/Pp06_Speaker_identification'),
        getItem('第十二章-感知機與神經網路', '/AI/Perceptron'),
        getItem('第十三章-激活函數與正反向傳播', '/AI/Activation_function'),
        getItem('第十四章-梯度消失與Dropout', '/AI/Gradient_Disappears'),
        getItem('實戰項目-神經網路算法', '/AI/Pp07_Neural_Network_Algorithm'),
    ]),
    getItem('Node.Js', 'sub3', <RadarChartOutlined/>, [
        getItem('第一章-初識NodeJs', '/NodeJs'),
        getItem('第二章-fs文件系統模塊', '/NodeJs/File_SystemModule'),
        getItem('第三章-path路徑模塊', '/NodeJs/Path_Module'),
        getItem('第四章-http路徑模塊', '/NodeJs/Http_Module'),
        getItem('第五章-模塊化', '/NodeJs/Modular'),
        getItem('第六章-npm與包', '/NodeJs/NpmAndPackages'),
    ]),
];


const App: React.FC = () => {
    const navigate = useNavigate()
    const onMenuClick = (route: { key: string }) => {
        // console.log("菜單被點擊了",route)
        const path = route.key as string;
        navigate(path)
        setCurrent(path);
    }


    //反向高亮
    // 1.獲取當前路由路徑
    const location = useLocation()
    // console.log(location.pathname)
    // const selectedKey = location.pathname
    // console.log(selectedKey)

 
    useEffect(() => {
        setCurrent(location.pathname);
    }, [navigate]);



    //更改主題顏色
    const [menuTheme, setMenuTheme] = useState<MenuTheme>('dark');
    const [current, setCurrent] = useState<string>(location.pathname);

    const changeTheme = (value: boolean) => {
        setMenuTheme(value ? 'dark' : 'light');
    };

  
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