

import node_img from "@/pages/NodeJs/assets/img/node_img"
import { Image } from "antd"


import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const NpmAndPackages: React.FC = () => {

    return (
        <div className="full_page">
            {/* npm與包 */}
            <div className="title">
                npm與包
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        什麼是包
                    </p>
                    <p>
                        Node.js中的第三方模塊又叫做包。
                    </p>
                    <p>
                        就像電腦和計算機是指相同的東西,第三方模塊和包是指同一概念,只不過叫法不同
                    </p>
                </div>
            </div>
            {/* 包的來源 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        包的來源
                    </p>
                    <p>
                        不同於Node.js中的內置模塊與自定義模塊, 包是由第三方個人或團隊開發出來的,免費供所有人使用
                    </p>
                    <p>
                        注意:Node.js中的包都是免費且開源的,不需要付費即可下載使用。
                    </p>
                </div>
            </div>
            {/* 為什麼需要包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        為什麼需要包
                    </p>
                    <p>
                        由於Node.js的內置模塊僅提供了一些底層的API,導致在基於內置模塊進行項目開發時,效率很低
                    </p>
                    <p>
                        包是基於內置模塊封裝出來,提供更高級、更方便的API, 極大的提高開發效率。
                    </p>
                    <p>
                        包和內置模塊之間的關係,類似於JQuery和瀏覽器內置API之間的關係。
                    </p>
                </div>
            </div>
            {/* 從哪裡下載包 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        從哪裡下載包
                    </p>
                    <p>
                        <a href="https://www.npmjs.com/">npm</a>包下載平台
                    </p>
                    <p>
                        npm-v可以查看自己電腦上安裝的npm包管理工具的版本號
                    </p>
                </div>
            </div>
            {/* npm初體驗 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        格式化時間的傳統做法
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.npm_01} alt="npm_01" />
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
                                <Image src={node_img.npm_02} alt="npm_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            {/* 格式化時間的高級作法 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        格式化時間的高級作法
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


        </div>
    )
}

export default NpmAndPackages