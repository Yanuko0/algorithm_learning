

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
                        再網路節點中, 負責消費資源的電腦, 叫做客戶端; 負責對外提供資源的電腦,叫做服務器。
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
            {/* http模塊 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        路徑拼接
                    </p>
                    <p>
                        path.join()語法格式
                    </p>
                    <p>
                        使用fs.readFile()方法,可以把多個路徑片段拼接為完整的路徑字符串,語法格是如下:
                    </p>
                    <p>
                        <li>path.join([...paths])</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_02} alt="path_02" />


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
                                <Image src={node_img.path_03} alt="path_03" />


                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 獲取路徑中的中文名 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        獲取路徑中的中文名
                    </p>
                    <p>
                        path.basename()的語法格式
                    </p>
                    <p>
                        可以獲取路徑中的最後一部分, 經常通過這個方法獲取路徑中的文件名, 語法格是如下:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_04} alt="path_04" />


                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* path.basename代碼示例 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        path.basename代碼示例
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_05} alt="path_05" />


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
                                <Image src={node_img.path_06} alt="path_06" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 獲取路徑中的文件擴展名 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        獲取路徑中的文件擴展名
                    </p>
                    <p>
                        path.extname()的語法格式
                    </p>
                    <p>
                        使用path.extname()方法,可以獲取路徑中的擴展名部分,語法格式如下
                    </p>
                    <p>
                        path
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_07} alt="path_07" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 獲取路徑中的文件擴展名 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        獲取路徑中的文件擴展名
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_08} alt="path_08" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 綜合案例 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        將html拆分成css/js/html
                    </p>
                    <p>
                        實現步驟
                    </p>
                    <ul>
                        <li>
                            創建兩個正則表達式, 分別用來匹配style和script
                        </li>
                        <li>
                            使用fs模塊, 讀取需要被處理的HTML文件
                        </li>
                        <li>
                            自定義resolveCSS方法,來寫入index.css樣式文件
                        </li>
                        <li>自定義resolveJS方法,來寫入index.js腳本文件</li>
                        <li>自定義resolveHTML方法,來寫入index.html文件</li>
                    </ul>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_09} alt="path_09" />
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
                                <Image src={node_img.path_10} alt="path_10" />
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
                                <Image src={node_img.path_11} alt="path_11" />
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
                                <Image src={node_img.path_12} alt="path_12" />
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
                                <Image src={node_img.path_13} alt="path_13" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            {/* fs模塊-路徑動態拼接問題 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        fs模塊-路徑動態拼接問題
                    </p>
                    <p>
                        在使用fs模塊操作文件時, 如果提供的操作路徑是以./或../開頭的相對路徑時,很容易出現動態路徑拼接錯誤的問題
                    </p>
                    <p>
                        原因: 代碼在運行的時候, 會以執行node命令時所處的目錄, 動態拼接被操作文件的完整路徑
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_13} alt="fs_13" />
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
                                <Image src={node_img.fs_14} alt="fs_14" />
                            </Image.PreviewGroup>
                        </div>
                    </p>




                </div>
            </div>
            {/* fs模塊-完美解決動態拼接問題 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        fs模塊-完美解決動態拼接問題
                    </p>
                    <p>
                        用__dirname 表示當前文件所處的目錄,解決動態拼接問題
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_16} alt="fs_16" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 實作案例時鐘案例 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        實作-時鐘案例
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.path_時鐘案例} alt="path_時鐘案例" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        案例的兩個注意點
                    </p>
                    <p>
                        <ul>
                            <li>fs.writeFile()方法只能用來創建文建, 不能用來創建路徑</li>
                            <li>重複調用fs.writeFile()寫入同一個文建,新寫入的內容會覆蓋之前的舊內容</li>
                        </ul>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Http_Module