
import node_img from "@/pages/NodeJs/assets/img/node_img"
import { Image } from "antd"


import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const Express: React.FC = () => {

    return (
        <div className="full_page">
            {/* Express學習 */}
            <div className="title">
                Express學習
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        學習目標
                    </p>
                    <p>
                        <ul>
                            <li>能夠使用express.static()快速托管靜態資源</li>
                            <li>能夠使用express路由精簡項目結構</li>
                            <li>能夠使用常見的express 中間件</li>
                            <li>能夠使用express 創建API接口</li>
                            <li>能夠在express中啟用cors跨域資源共享</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 初識Express */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        初識Express
                    </p>
                    <p>官方給出的概念:Express 是基於Node.js平台, 快速、開放、極簡的Web 開發框架</p>
                    <p>
                        通俗的理解: Express的作用和Node.js內置的http模塊類似, 是專門用來創建Web服務器的。
                    </p>
                    <p>
                        本質上就是npm上的第三方包,提供了快速創建Web服務器的便捷方法。
                    </p>
                    <ul>
                        <li><a href="https://www.expressjs.com.cn/">Express</a></li>
                    </ul>

                </div>
            </div>
            {/* 進一步理解Express */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        進一步理解Express
                    </p>
                    <p>
                        思考: 不使用Express能否創建Web服務器?
                        <ul>
                            <li>答案:能,使用Node.js提供的原生http模塊即可。</li>
                        </ul>
                        <br />
                        思考: 既然有了http模塊,為什麼還有用Express?
                        <ul>
                            <li>答案: http內置模塊用起來很複雜, 開發效率低; Express是基於內置的http 模塊進一步封裝出來的, 能夠極大的提高開發效率。</li>
                        </ul>
                        <br />
                        思考:http內置模塊與Express是什麼關係?
                        <ul>
                            <li>答案:類似於瀏覽器中Web API和JQuery的關係。後者是基於前者進一步封裝出來的。</li>
                        </ul>
                    </p>


                </div>
            </div>
            {/* Express能做什麼 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Express能做什麼
                    </p>
                    <p>
                        對於前端程序員來說,最常見的兩種服務器,分別是:
                        <ul>
                            <li>Web網站服務器: 專門對外提供Web網頁資源的服務器。</li>
                            <li>API接口服務器: 專門對外提供API接口的服務器。</li>
                        </ul>
                        使用Express, 我們可以方便、快速的創建Web網站的服務器或API接口的服務器。
                    </p>
                </div>
            </div>
            {/* 安裝並創建服務器 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        安裝並創建服務器
                    </p>
                    <p>
                        在項目所處的目錄中, 運行如下終端命令, 即可將express安裝到項目中使用:
                    </p>
                    <p>
                        <ul>
                            <li>npm i express @4.17.1</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_01} alt="express_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
             {/* 監聽GET請求 */}
             <div className="introduce">
                <div className="diagrambox">
                    <p>
                        監聽GET請求
                    </p>
                    <p>
                       通過app.get()方法,可以監聽客戶端的Get請求,具體的語法格式如下:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_02} alt="express_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 監聽POST請求 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        監聽POST請求
                    </p>
                    <p>
                       通過app.post()方法,可以監聽客戶端的POST請求,具體的語法格式如下:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_03} alt="express_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 把內容響應給客戶端 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        把內容響應給客戶端
                    </p>
                    <p>
                       通過res.send()方法, 可以把處理好的內容, 發送給客戶端:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_04} alt="express_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
             {/* 獲取URL中攜帶的查詢參數 */}
             <div className="introduce">
                <div className="diagrambox">
                    <p>
                       獲取URL中攜帶的查詢參數
                    </p>
                    <p>
                       通過req.query對象, 可以訪問到客戶端通過查詢字符串的形式, 發送到服務器的參數:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_05} alt="express_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 獲取URL中的動態參數 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                      獲取URL中的動態參數
                    </p>
                    <p>
                       通過req.query對象, 可以訪問到URL中, 通過: 匹配到的動態參數:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.express_06} alt="express_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 託管靜態資源 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                       託管靜態資源
                    </p>
                    <p>
                       1.express.static
                    </p>
                    <p>
                        express 提供了一個非常好用的函數, 叫做 express.static(), 通過它, 我們可以非常方便地創建一個靜態資源服務器, 例如, 通過如下代碼就可以將public目錄下的圖片、CSS文件、JavaScript文件 對外開放訪問了:
                    </p>
                    <p>
                        app.use(express.static('public'))
                    </p>
                    <p>
                        現在就可以訪問public目錄中的所有文件了:
                        <ul>
                            <li>http://localhost:3000/images/bg.jpg</li>
                            <li>http://localhost:3000/css/style.css</li>
                            <li>http://localhost:3000/js/login.js</li>
                        </ul>
                    </p>
                    <p>
                        注意: Express 在指定的靜態目錄中查找文件, 並對外提供資源的訪問路淨。因此, 存放靜態文件的目錄名不會出現在URL中。
                    </p>
                </div>
            </div>
             {/* 託管多個靜態資源目錄 */}
             <div className="introduce">
                <div className="diagrambox">
                    <p>
                       託管多個靜態資源目錄
                    </p>
                    <p>
                       如果要託管多個靜態資源目錄, 請多次調用express.static()函數:
                    </p>
                    <p>
                        app.use(express.static('public'))
                        <br/>
                        app.use(express.static('files'))
                    </p>
                    <p>
                        訪問靜態資源文件時, express.static()函數會根據目路的添加順序查找所需的文件。
                    </p>

                </div>
            </div>
            {/* 掛載路徑前綴 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                       掛載路徑前綴
                    </p>
                    <p>
                       如果希望在託管的靜態資源訪問路徑之前, 掛載路徑前綴, 則可以使用如下的方式:
                    </p>
                    <p>
                        app.use('/public', express.static('public'))
                    </p>
                    <p>
                        現在妳寄可以通過帶有/public前綴地址來訪問public目錄中的文件了:
                        <ul>
                            <li>http://localhost:3000/public/images/kitten.jpg</li>
                            <li>http://localhost:3000/public/css/style.css</li>
                            <li>http://localhost:3000/public/js/app.js</li>
                        </ul>
                    </p>
                    

                </div>
            </div>








        </div>
    )
}

export default Express