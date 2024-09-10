
import node_img from "@/pages/NodeJs/assets/img/node_img"
import { Image } from "antd"


import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const File_SystemModule: React.FC = () => {

    return (
        <div className="full_page">
            {/* 文件系統模塊 */}
            <div className="title">
                fs文件系統模塊
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        fs文件系統模塊
                    </p>
                    <p>
                        由Node.js官方提供的、用來操作文件的模塊,他提供了一系列的方法和屬性,用來滿足用戶對文件的操作需求。
                        <ul>
                            <li>fs.readFile()方法,用來讀取指定文件中的內容</li>
                            <li>fs.writeFile()方法,用來向指定的文件寫入內容</li>
                        </ul>
                        如果需要在js代碼中使用要先用以下方是導入
                    </p>
                    <p>
                        <li>const fs = require('fs')</li>
                    </p>
                </div>
            </div>
            {/* 如何讀取指定文件中的內容 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        如何讀取指定文件中的內容?
                    </p>
                    <p>
                        fs.readFile()語法格式
                    </p>
                    <p>
                        使用fs.readFile()方法,可以讀取指定文件中的內容,語法格是如下
                    </p>
                    <p>
                        <li>fs.readFile(path[,options], callback)</li>
                    </p>
                    <p>
                        <ul>
                            <li>參數1:必選參數,字符串,表示文件的路徑</li>
                            <li>參數2:可選餐庫,表示已什麼編碼格式來讀取文件</li>
                            <li>參數3:必選參數,文件讀取完成后,通過回掉函數拿到讀取結果</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 讀取指定文件中的內容 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        讀取指定文件中的內容
                    </p>
                    <p>
                        fs.readFile()的示例代碼
                    </p>
                    <p>
                        以utf8的編碼格式,讀取指定文件的內容,並打印err和sataStr的值
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_01} alt="fs_01" />
                               

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
                                <Image src={node_img.fs_02} alt="fs_02" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                </div>
            </div>
            {/* 判斷是否讀取成功 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        判斷是否讀取成功
                    </p>
                    <p>
                        可以判斷err對象是否為null, 從而知曉文件讀取的結果:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_03} alt="fs_03" />
                               

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
                                <Image src={node_img.fs_04} alt="fs_04" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                </div>
            </div>
             {/* 向指定文件寫入內容 */}
             <div className="introduce">
                <div className="diagrambox">
                    <p>
                        向指定文件寫入內容
                    </p>
                    <p>
                        1.fs.writeFile()的語法格式
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_05} alt="fs_05" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        參數解讀:
                        <ul>
                            <li>參數1:必選參數,需要指定一個文件路徑的字符串,表示文件的存放路徑</li>
                            <li>參數2:必選參數,表示要寫入的內容</li>
                            <li>可選參數,表示以什麼格式寫入文件內容,默認值是utf8</li>
                            <li>必選參數,文件寫入完成後的回調函數</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_06} alt="fs_06" />
                               

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
                                <Image src={node_img.fs_07} alt="fs_07" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                </div>
            </div>
            {/* 判斷文件是否寫入成功 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        判斷文件是否寫入成功
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_08} alt="fs_08" />
                               

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
                                <Image src={node_img.fs_09} alt="fs_09" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                  
                    
                    
                </div>
            </div>
            {/* 文件系統模塊 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         文件系統模塊
                    </p>
                    <p>
                        使用fs文件系統模塊,將素材目錄下成績.txt文件中的考試數聚, 整理到成績-ok.txt文件中。
                    </p>
                    <p>
                        核心實線步驟
                        <ul>
                            <li>導入需要的fs文件系統模塊</li>
                            <li>使用fs.readFile()方法, 讀取素材目錄下的成績.txt文件</li>
                            <li>判斷讀取是否讀取成功或失敗</li>
                            <li>文件讀取成功後,處理成績數據</li>
                            <li>將處理完成的成績數據,調用fs.writeFile()方法,寫入到新文件 成績-ok.txt中</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.fs_10} alt="fs_10" />
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
                                <Image src={node_img.fs_11} alt="fs_11" />
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
                                <Image src={node_img.fs_12} alt="fs_12" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                  
                    
                    
                </div>
            </div>
            {/* 將處理完的成績數據寫入到新文件 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        將處理完的成績數據寫入到新文件
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
        </div>
    )
}

export default File_SystemModule