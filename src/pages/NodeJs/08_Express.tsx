
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
                        <br/>
                        思考: 既然有了http模塊,為什麼還有用Express?
                        <ul>
                            <li>答案: http內置模塊用起來很複雜, 開發效率低; Express是基於內置的http 模塊進一步封裝出來的, 能夠極大的提高開發效率。</li>
                        </ul>
                        <br/>
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
            {/* 安裝 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        安裝
                    </p>
                    <p>
                        在項目所處的目錄中, 運行如下終端命令, 即可將express安裝到項目中使用:
                    </p>
                    <p>
                        <ul>
                            <li>npm i express @4.17.1</li>
                        </ul>
                    </p>
                </div>
            </div>

            {/* 創建基本的Web服務器 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        創建基本的Web服務器
                    </p>
                    <p>
                        <ul>
                            <li>使用npm包管理工具,在項目中安裝格式化時間的包moment</li>
                            <li>使用require()導入格式化時間的包</li>
                            <li>參考moment的官方API文檔對時間進行格式化</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.npm_03} alt="npm_03" />
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
                                <Image src={node_img.npm_04} alt="npm_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            {/* 在項目中安裝包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        在項目中安裝包
                    </p>
                    <p>
                        運行: npm i 包的完整名稱
                    </p>
                </div>
            </div>

            {/* 初次裝包多了哪些文件 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        初次裝包多了哪些文件
                    </p>
                    <p>
                        初次裝包完成後, 在項目文件夾下多一個叫做node_modles的文件夾和package-lock.json的配置文件
                    </p>
                    <p>
                        其中:
                        <ul>
                            <li> node_modules文件夾用來存放所友已安裝到項目中的包。require()導入第三方包時,就是從這個目錄中查找並加載包。</li>
                            <li>package-lock.json配置文件用來記錄node_modules目錄下的每一個包的下載信息,例如包的名字、版本號、下載地址等</li>
                        </ul>
                    </p>
                    <p>
                        注意:程序員不要手動修改node_modules或是package-lock.json的代碼, npm包管理工具會自動維護他們。
                    </p>

                </div>
            </div>
            {/* 安裝指定版本的包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        安裝指定版本的包
                    </p>
                    <p>
                        默認情況下, 使用npm i 命令安裝包的時候,會自動安裝最新版本的包。如果需要安裝指定版本的包,可以在包名之後通過@符號指定具體的版本,例如:
                    </p>
                    <p>
                        <ul>
                            <li> npm i moment@2.22.2</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 包的語意化版本規範 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        包的語意化版本規範
                    </p>
                    <p>
                        包的版本號是以"點分十進制" 形式進行定義的,總共有三位數字, 例如2.24.0
                    </p>
                    <p>
                        其中每一位數字所代表的涵義如下:
                        <ul>
                            <li>第1位數字:大版本</li>
                            <li>第2位數字:功能版本</li>
                            <li>第3位數字:Bug修復版本</li>
                        </ul>
                        版本號提升的規則:只要前面的版本號增長了,則後面的版本號歸零
                    </p>
                </div>
            </div>
            {/* 包的管理配置文件 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        包的管理配置文件
                    </p>
                    <p>
                        npm 規定,在項目跟目錄中,必須提供一個叫做package.json的包管理配置文件。用來記錄與項目相關的一些配置信息,例如:
                    </p>
                    <p>
                        <ul>
                            <li>項目的名稱、版本號、描述等</li>
                            <li>項目中都用到了哪些包</li>
                            <li>那些包只在開發期間會用到</li>
                            <li>哪些包在開發和部屬時都需要用到</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 多人協作的問題 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        多人協作的問題
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.npm_05} alt="npm_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 如何記錄項目中安裝了哪些包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        如何記錄項目中安裝了哪些包
                    </p>
                    <p>
                        在項目跟目錄中,創建一個叫做package.json的配置文件,即可用來記錄項目中安裝了哪些包。從而方便剔除node_modules目錄之後,在團隊成員之間共享項目的源代碼。
                    </p>
                    <p>
                        注意:今後在項目開發中,一定要把node_modules文件夾,添加到gitignore忽略文件中。
                    </p>
                </div>
            </div>
            {/* 快速創建package.json */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        快速創建package.json
                    </p>
                    <p>
                        npm包管理工具提供了一個快捷命令, 可以在執行命令時所處的目錄中,快速創建package.json這個包管理配置文件:
                    </p>
                    <p>
                        作用: 在執行命令所處的目錄中,快速新建package.json文件
                        npm init -y
                    </p>
                    <p>
                        注意:
                        <ul>
                            <li>上述命令只能在英文的目錄下運行成功,項目文件夾的名稱一定要使用英文命名,不要用中文,不能出現空格</li>
                            <li>運行npm i 命令安裝包的時候,npm包管理工具會自動把包的名稱和版本號,紀錄到package.json中</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* dependencies節點 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        dependencies節點
                    </p>
                    <p>
                        package.json文件中,有一個dependencies節點,專門用來記錄使用npm i 命令安裝了哪些包。
                    </p>
                    <p>npm i xxx1 xxx2 中間空格可一次性安裝多個包</p>
                </div>
            </div>
            {/* 一次性安裝所有的包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        一次性安裝所有的包
                    </p>
                    <p>
                        當我們拿到一個替除了node_modules的項目後,需要先把所有包下載到項目中,項目才能運行起來
                    </p>
                </div>
            </div>
            {/* 從項目裡面卸載包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        從項目裡面卸載包
                    </p>
                    <p>
                        運行 npm uninstall 命令,來卸載指定的包:
                    </p>
                    <p>
                        注意:當使用npm uninstall命令執行成功後,會把卸載的包,自動從package.json的dependencies中移除掉。
                    </p>
                </div>
            </div>
            {/* devDependencies節點 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        devDependencies節點
                    </p>
                    <p>
                        如果某些包只在項目開發階段會用到,在項目上線之後不會用到,則建議把這些包紀錄到devDependencies節點中。
                    </p>
                    <p>
                        如果某些包在開發和上線之後都需要用到,則建議把這些包紀錄到 depemdemcies節點中。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.npm_06} alt="npm_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 包的分類 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        包的分類
                    </p>
                    <p>
                        1.項目包:安裝到項目的node_modules目錄中的包
                        <ul>
                            <li>開發依賴包(被記錄到devDependencies節點中的包,只在開發期間會用到)</li>
                            <li>核心依賴包(被記錄到dependencies節點中的包,在開發期間和項目上線之後都會用到)</li>
                        </ul>
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_01} alt="包_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        2.全局包:在執行npm install 命令時, 如果提供了-g參數, 則會把包安裝為全局包。
                        全局包會被安裝到 C:\User\用戶目錄\AppData\Roaming\npm\node_modules目錄下。
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_02} alt="包_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        <ul>
                            注意:
                            <li>只有工具性質的包, 才有全局安裝的必要性。因為他們提供了好用的終端命令</li>
                            <li>判斷某個包是否需要全局安裝後才能使用,可以參考官方提供的使用說明即可</li>
                        </ul>

                    </p>


                    <p>
                        2.i5ting_toc是一個可以把md文檔轉為html頁面的小工具,使用步驟如下:
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_03} alt="包_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 規範的包結構 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        規範的包結構
                    </p>
                    <p>
                        在清楚包的概念,以及如何下載和使用包之後,接下來深入了解包的內部結構。
                    </p>
                    <p>
                        一個規範的包, 它的組成結構,必須符合以下三點要求:
                        <ul>
                            <li>包必須以單獨的目錄而存在</li>
                            <li>包的頂級目錄下必須包含package.json這個包管理配置文件</li>
                            <li>package.json中必須包含name,version,main這三個屬性, 分別代表包的名字、版本號、包的入口。</li>

                        </ul>
                    </p>
                </div>
            </div>
            {/* 開發屬於自己的包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        開發屬於自己的包
                    </p>
                    <p>
                        1.需要實現的功能
                        <ul>
                            <li>格式化日期</li>
                            <li>轉義HTML中的特殊字符</li>
                            <li>還原HTML中的特殊字符</li>

                        </ul>
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_04} alt="包_04" />
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
                                <Image src={node_img.包_05} alt="包_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        2.初始化包的基本結構
                        <ul>
                            <li>新建 xxx-tools文件夾,作為包的根目錄</li>
                            <li>在 xxx-tools文件夾新建
                                <ul>
                                    <li>package.json(包管理配置文件)</li>
                                    <li>index.js(包的入口文件)</li>
                                    <li>README.md(包的說明文檔)</li>
                                </ul>
                            </li>

                        </ul>
                    </p>
                    <p>
                        3.初始化package.json
                        <ul>
                            <li>新建 xxx-tools文件夾,作為包的根目錄</li>
                            <li>在 xxx-tools文件夾新建
                                <ul>
                                    <li>package.json(包管理配置文件)</li>
                                    <li>index.js(包的入口文件)</li>
                                    <li>README.md(包的說明文檔)</li>
                                </ul>
                            </li>

                        </ul>
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_06} alt="包_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        4.在index.js中定義格式化時間的方法
                        <ul>
                            <li>新建 xxx-tools文件夾,作為包的根目錄</li>
                            <li>在 xxx-tools文件夾新建
                                <ul>
                                    <li>package.json(包管理配置文件)</li>
                                    <li>index.js(包的入口文件)</li>
                                    <li>README.md(包的說明文檔)</li>
                                </ul>
                            </li>

                        </ul>
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_07} alt="包_07" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        5.在index.js中定義轉義HTML的方法
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_08} alt="包_08" />
                            </Image.PreviewGroup>
                        </div>
                    </p>


                    <p>
                        6.在index.js中定義還原HTML的方法
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_09} alt="包_09" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <p>
                        7.將不同的功能進行模塊化拆分
                    </p>
                    <p>
                        <ul>
                            <li>將格式化時間的功能拆分到 src → dateFormat.js中</li>
                            <li>將處理HTML字符串的功能,拆分到src → htmlEscape.js中</li>
                            <li>在index.js中,導入這兩個模塊,得到需要向外共享的方法</li>
                            <li>在index.js中,使用module.exports把對應的方法共享出去</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_10} alt="包_10" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        8.編寫包的說明文檔
                    </p>
                    <p>
                        包根目錄中 README.md 文檔, 是包的使用說明文檔。通過它, 我們可以事先把包的使用說明, 以markdown的格式寫出來, 方便用戶參考。
                    </p>
                    <p>
                        README文件沒有強制要求寫的內容,只需要能夠清晰地把包的作用、用法、注意事項描述清楚即可。
                    </p>
                    <p>
                        我們所創建的包 README.md 文檔中, 會包含以下6項內容:
                        <ul>
                            <li>安裝方式</li>
                            <li>導入方式</li>
                            <li>格式化時間</li>
                            <li>轉義HTML中的特殊字符</li>
                            <li>還原HTML中的特殊字符</li>
                            <li>開源協議</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_11} alt="包_11" />
                            </Image.PreviewGroup>
                        </div>
                    </p>





                </div>
            </div>
            {/* 發布包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        發布包
                    </p>
                    <p>
                        1.註冊npm帳號
                    </p>
                    <p>
                        <ul>
                            <li>訪問 <a href="https://www.npmjs.com/">npm</a>,
                                點擊sign up註冊</li>
                        </ul>
                    </p>
                    <p>
                        2.登入npm帳號
                    </p>
                    <p>
                        <ul>
                            <li>註冊完成後,可以在終端執行npm login命令,依次輸入用戶名、密碼、郵箱登入</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_12} alt="包_12" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        3.把包發布到npm上
                    </p>
                    <p>
                        將終端切換到包的根目錄之後, 運行npm publish命令, 即可將包發布到npm上(注意:包名不能雷同)。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_13} alt="包_13" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        4.刪除已發布的包
                    </p>
                    <p>
                        運行 npm unpublish包名 --force命令, 即可從npm 刪除已發佈的包。
                    </p>
                    <p>
                        注意:
                        <ul>
                            <li>npm unpublish 命令只能刪除72小時以內,發布的包</li>
                            <li>npm unpublish 刪除的包, 在24小時內不允許重複發布</li>
                            <li>發布包的時候要慎重,盡量不要往npm上發布沒有意義的包</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.包_14} alt="包_14" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Express