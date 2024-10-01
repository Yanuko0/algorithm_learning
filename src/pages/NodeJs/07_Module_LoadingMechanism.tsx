




import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const Module_LoadingMechanism: React.FC = () => {

    return (
        <div className="full_page">
            {/* 模塊加載機制 */}
            <div className="title">
                 模塊加載機制
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        優先從緩存中加載
                    </p>
                    <p>
                        模塊在第一次加載後會被緩存,這也意味著多次調用require()不會導致模塊的代碼被執行多次。
                    </p>
                    <p>
                        注意:不論是內置模塊、用戶自定義模塊、還是第三方模塊, 它們都會優先從緩存中加載, 從而提高模塊的加載效率。
                    </p>
                    

                </div>
            </div>
            {/* 內置模塊的加載機制 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        內置模塊的加載機制
                    </p>
                    <p>
                        內置模塊事由Node.js官方提供的模塊,內置模塊的加載優先級最高。
                    </p>
                    <p>
                        例如, require('fs')始終返回內置fs模塊,即使在node_modules目錄下有名字相同的包也叫做fs
                    </p>
                </div>
            </div>
            {/* 自定義模塊的加載機制 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         自定義模塊的加載機制
                    </p>
                    <p>
                        使用require() 加載自定義模塊時, 必須指令以./或../開頭的路徑標示符。在加載自定義模塊時,如果沒有指定./或../這樣的路徑標示符,則node會把它當作內置模塊或是第三方模塊進行加載
                    </p>
                    <p>
                        同時,在使用require()導入自定義模塊時, 如果省略了文件的擴展名,則Node.js會按順序方別嘗試加載以下的文件
                        <ul>
                            <li>1.按照確切地文件名進行加載</li>
                            <li>2.補全js擴展名進行加載</li>
                            <li>3.補全.json擴展名進行加載</li>
                            <li>4.補全.node擴展名進行加載</li>
                            <li>5.加載失敗, 終端報錯</li>
                        </ul>
                    </p>

                   
                </div>
            </div>
            {/* 第三方模塊的加載機制 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        第三方模塊的加載機制
                    </p>
                    <p>
                        如果傳遞給require()的模塊標示符不是一個內置模塊,也沒有以'/'或'../'開頭, 則Node.js會從當前模塊的父目錄開始,嘗試從/node_nodules文件夾中加載第三方模塊。
                    </p>
                    <p>
                        如果沒有找到對應的第三方模塊, 則移動到再上一層父目錄中, 進行加載, 直到文件系統的根目錄。
                    </p>
                    <p>
                        例如,假設在'C:\Users\liyu\project\foo.js'文件里調用 require('tools'),則Node.js會按以下順序查找:
                    </p>
                    <p>
                        <ul>
                            <li>1.C:\Users\liyu\project\node_modules\tools</li>
                            <li>2.C:\Users\liyu\node_modules\tools</li>
                            <li>3.C:\Users\node_modules\tools</li>
                            <li>4.C:\node_modules\tools</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 目錄作為模塊 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         目錄作為模塊
                    </p>
                    <p>
                        當把目錄作為模塊標示符, 傳遞給require() 進行加載的時候, 有三種加載方式:
                        <ul>
                            <li>在被加載的目錄下查找一個叫做package.json的文件, 並尋找main屬性, 作為require() 加載的入口</li>
                            <li>如果目錄裡沒有 package.json文件, 或者main入口不存在或無法解析, 則Node.js將會試圖加載目錄下的index.js文件。</li>
                            <li>如果以上兩步都失敗了, 則Node.js會在終端打印錯誤消息, 報告模塊的缺失:Error:Cannot find module 'xxx'</li>
                        </ul>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Module_LoadingMechanism