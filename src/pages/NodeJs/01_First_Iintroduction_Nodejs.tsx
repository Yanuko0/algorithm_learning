
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const First_Iintroduction_Nodejs: React.FC = () => {

    return (
        <div className="full_page">
            {/* 初識Node.js */}
            <div className="title">
                    初識Node.js
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        什麼是Node.js
                    </p>
                    <p>
                        <a href="https://nodejs.org/zh-tw">Node.js</a>基於Chrome V8引擎javaScript運行環境
                        <ul>
                            <li>瀏覽器是JavaScript的前端運行環境</li>
                            <li>Node.js是JavaScript的後端運行環境</li>
                            <li>Node.js是無法調用DOM和BOM等瀏覽器內置API</li>
                        </ul>
                    </p>   
                </div>
            </div>     
            {/* Node.js可以做什麼? */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         Node.js可以做什麼?
                    </p>    
                    <p>
                        做為一個JavaScript的運行環境,僅僅提供了基礎的功能和API, 然而, 基於Node.js提供的這些基礎,很多強大的工具和框架如雨後春筍,層出不窮,所以學會Node.js, 可以讓前端程序員,升任更多的工作和崗位:
                    </p>       
                    <ul>
                        <li>基於Express框架 快速構建Web應用</li>
                        <li>基於Electron框架, 可以構建跨平台的桌面應用</li>
                        <li>基於restify框架, 可以快速構建API接口項目</li>
                        <li>讀寫和操作數據庫、創建實用的命令行工具輔助前端開發、etc</li>
                    </ul>
                    <p>
                        Node.js可以讓前端程序員的行業競爭力變得更強
                    </p>
                </div>
            </div>   
            {/* Node.js怎麼學? */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         Node.js怎麼學?
                    </p>    
                    <p>
                        瀏覽器中的JavaScript學習路徑:
                    </p>  
                    <p>
                        瀏覽器中js學習路徑:
                        JS基礎語法+瀏覽器內置API(DOM+BOM) + 第三方庫(JQuery、art-template)等
                    </p> 
                    <p>
                        Node.js學習路徑:
                        JS基礎語法 + Node.js內置API模塊(fs、path、http等) + 第三方API模塊(express、mysql)
                    </p>
                </div>
            </div> 
            {/* Node.js安裝 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Node.js安裝
                    </p>    
                    <p>
                        <a href="https://nodejs.org/zh-tw">Node.js安裝</a>
                        檢查有沒有安裝成功 , 執行 node-v
                    </p>  
                    <p>
                        使用快捷鍵( Windows鍵+ R )打開運行面板, 輸入cmd後直接回車,即可打開終端
                    </p>
                </div>
            </div>
        </div>
    )
}

export default First_Iintroduction_Nodejs