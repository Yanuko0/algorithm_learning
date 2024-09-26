

import node_img from "@/pages/NodeJs/assets/img/node_img"
import { Image } from "antd"


import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const Http_Module: React.FC = () => {

    return (
        <div className="full_page">
            {/* http路徑模塊 */}
            <div className="title">
                http路徑模塊
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        http模塊
                    </p>
                    <p>
                        回顧:什麼是客戶端、什麼是服務端?
                    </p>
                    <p>
                        在網路節點中, 負責消費資源的電腦, 叫做客戶端; 負責對外提供資源的電腦,叫做服務器。
                    </p>
                    <p>
                        由Node.js官方提供的、用來創建Web服務器的模塊,通過http模塊提供的 http.createServer()方法, 就能方便的把一台普通的電腦, 變成一台Web服務器, 從而對外提供Web資源服務。
                    </p>
                    <p>
                        如果要希望使用http模塊創建Web服務器, 則需要先導入它:
                    </p>
                    <p>
                        <li>const http = require('http')</li>
                    </p>
                </div>
            </div>
            {/* 進一步理解http模塊的作用 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        進一步理解http模塊的作用
                    </p>
                    <p>
                        服務器和普通電腦的區別,在於服務器上安裝了web服務器軟件,例如:IIS 、Apache等。通過安裝這些服務器軟件,就能把一台普通的電腦變成一台web服務器
                    </p>
                </div>
            </div>
            {/* 服務器相關的概念-IP地址 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        IP地址
                    </p>
                    <p>
                       就是互聯網上每一台計算機的唯一地址, 因此IP地址具有唯一性。如果把"個人電腦"比做一台電話,那麼ip地址就相當於電話號碼,只有在知道對方ip地址的前提下,才能對應的電腦之間進行數據通信。
                    </p>
                    <p>
                        IP地址的格式:通常用"點分十進制" 表示成(a.b.c.d)的形式,其中, a,b,c,d都是0~255之間的十進制整數。例如:用點分十表示的ip地址(192.168.1.1)
                    </p>
                    <p>
                        <ul>
                            <li>
                                互聯網中每台Web服務器, 都有自己的ip地址, 例如大家可以在windowns的終端運行ping www.baidu.com 令, 即可查看到百度服務器的ip地址。
                            </li>
                            <li>
                                在開發期間, 自己的電腦既是一台服務器, 也是一個客戶端, 為了方便測試, 可以在自己的瀏覽器中輸入 127.0.0.1這個ip地址,就能把自己的電腦當作一台服務器進行訪問了。
                            </li>
                            
                        </ul>
                    </p>
                </div>
            </div>
            {/* 域名和域名服務器 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        域名和域名服務器
                    </p>
                    <p>
                    盡管ip地址能夠唯一地標記網路上的計算機,但ip地址是一長串數字,不直觀,而且不便於記憶, 於是人們又發明另一套 字符型的地址方案, 即所謂的域名地址。
                    </p>
                    <p>
                        注意
                        <ul>
                            <li>
                                單純使用ip地址,互聯網中的電腦也能正常工作。但是有了域名的加持,能讓互聯網的世界變更加方便。
                            </li>
                            <li>
                                在開發測試期間, 127.0.0.1對應的域名是localhost, 它們都代表我們自己的這台電腦, 在使用效果上沒有區別。
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 端口號 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         端口號
                    </p>
                    <p>
                        計算機中的端口號, 就好像是現實生活中的門牌號一樣。 通過門牌號,外賣小哥可以在在整棟大樓眾多的房間中,準確把外賣送到你手中
                    </p>
                    <p>
                        同樣的道理, 在一台電腦中, 可以運行成百上千個web服務。 每個web服務都對應一個唯一的端口號,客戶端發送過來的網路請求,通過端口號, 可以被準確地交給對應的web服務進行處理。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_01} alt="http_01" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            {/* 創建最基本的web服務器 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        創建web服務器的基本步驟
                    </p>
                    <p>
                        <ul>
                            <li>1.導入http模塊</li>
                            <li>2.創建web服務器實例</li>
                            <li>3.為服務器實利綁定request事件,監聽客戶端的請求</li>
                            <li>4.啟動服務器</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 步驟1-導入http模塊 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                       步驟
                    </p>
                    <p>
                        1.導入http模塊
                    </p>
                    <p>
                        如果希望在自己電腦上創建一個web服務器,從而對外提供web服務,則需要導入
                        http模塊:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_02} alt="http_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                         2.創建一個web服務器的實例
                    </p>
                    <p>
                        調用http.createServer()方法,即可快速創建一個web服務器實例:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_03} alt="http_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        3.為服務器實例綁定request事件
                    </p>
                    <p>為服務器實例綁定request事件,即可監聽客戶端發送過來的網路請求</p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_04} alt="http_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        4.步驟4-啟動服務器
                    </p>
                    <p>
                        調用服務器實例的.listen()方法, 即可啟動當前的web服務器實例:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_05} alt="http_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_06} alt="http_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                   
                </div>
            </div>

            {/* 創建最基本的web服務器 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        req請求對象
                    </p>
                   <p>
                    只要服務器接收到了客戶端的請求, 就會調用server.on()為服務器實例綁定request事件處理函數
                   </p>
                   <p>
                    如果想在事件處理函數中,訪問與客戶端相關的數據或屬性, 可以使用如下的方式:
                   </p>
                   
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.http_07} alt="http_07" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.req_01} alt="req_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* res響應對象 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         res響應對象
                    </p>
                    <p>
                        在服務器的request事件處理函數中,如果想訪問服務器相關的數據或是屬性,可以使用如下的方式
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.req_02} alt="req_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 解決中文亂碼問題 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                      解決中文亂碼問題
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.req_03} alt="req_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.req_04} alt="req_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                
                </div>
            </div>
            {/* 根據不同的url響應不同的html */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                      根據不同的url響應不同的html
                    </p>
                    <p>核心實現步驟</p>
                    <p>
                        <ul>
                            <li>獲取請求的url地址</li>
                            <li>設置默認的響應內容為404 Not found</li>
                            <li>判斷用戶請求的是否為 / 或 /index.html 首頁</li>
                            <li>判斷用戶請求的是否為 /about.html 關於頁面</li>
                            <li>設置Content-Type響應頭,防止中文亂碼</li>
                            <li>使用res.end()把內容響應給客戶端</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.req_05} alt="req_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* clock時鐘的web服務器案例 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                      clock時鐘的web服務器案例
                    </p>
                    <p>核心思路</p>
                    <p>
                        <ul>
                            <li>把文件的實際存放路徑,作為每個資源的請求url地址</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.clock_01} alt="clock_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>實現步驟</p>
                    <p>
                        <ul>
                            <li>1.導入需要的模塊</li>
                            <li>2.創建基本的web服務器</li>
                            <li>3.將資源請求的url地址映射為文件的存放路徑</li>
                            <li>4.讀取文件的內容並響應給客戶端</li>
                            <li>5.優化資源的請求路徑</li>
                            
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.clock_02} alt="clock_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
           


                </div>
            </div>


        </div>
    )
}

export default Http_Module