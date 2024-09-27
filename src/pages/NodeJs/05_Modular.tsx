

import node_img from "@/pages/NodeJs/assets/img/node_img"
import { Image } from "antd"


import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"


const Modular: React.FC = () => {

    return (
        <div className="full_page">
            {/* 模塊化 */}
            <div className="title">
                 模塊化
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        模塊化
                    </p>
                    <p>
                        模塊化是指解決了一個複雜問題時,自頂向下逐層把系統分成若干模塊的過程。對於整個系統來說,模塊是可組合、分解和更換的單元。
                    </p>
                    <p>
                        <ul>
                            <li>編成領域中的模塊化</li>
                        </ul>
                        遵守固定的規則,把一個大文件拆成獨立且互相依賴的多個小模塊。
                    </p>
                    <p>
                        把代碼進行模塊化拆分的好處:
                        <ul>
                            <li>提高代碼的複用性</li>
                            <li>提高代碼的可維護性</li>
                            <li>實現按需加載</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* 模塊化規範 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        模塊化規範
                    </p>
                    <p>
                        對代碼進行模塊化的拆分與組合時,需要遵守的那些規則。
                    </p>
                    <p>
                        例如:
                        <ul>
                            <li>使用什麼樣的語法格式來引入別的模塊</li>
                            <li>在模塊中使用什麼樣的語法格式,向外暴露成員</li>
                        </ul>
                    </p>
                    <p>模塊化規範的好處: 大家都遵守同樣的模塊化規範寫代碼, 降低了溝通的成本,極大方便各模塊之間的互相調用,利人利己。</p>
                </div>
            </div>
            {/* Node.js模塊化分類 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Node.js模塊化分類
                    </p>
                    <p>
                       node.js中根據模塊來源的不同,將模塊分為了三大類,分別是:
                    </p>
                    <ul>
                        <li>內置模塊(內置模塊是由Node.js官方提供的,例如fs、path、http等)</li>
                        <li>自定義模塊(用戶創建的每個.js文件,都是自定義模塊)</li>
                        <li>第三方模塊(由第三方開發出來的模塊,並非官方提供的內置模塊,也不是用戶創建的自定義模塊,使用前須要先下載)</li>
                    </ul>
                </div>
            </div>
            {/* 加載模塊 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        加載模塊
                    </p>
                    <p>
                        使用強大的require()方法,可以加載需要的內置模塊、用戶自定義模塊、第三方模塊進行使用。例如:
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_01} alt="模塊化_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    注意:使用require()方法加載其他模塊時,會執行倍加載模塊中的代碼。
                </div>
            </div>
            {/* Node.js模塊作用域 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Node.js模塊作用域
                    </p>
                    <p>
                        <ul>
                            <li>1.什麼是模塊作用域</li>
                        </ul>
                        和函數作用域類似, 在自定義模塊中定義的變量、方法等成員,只能在當前模塊內被訪問,這種模塊級別的訪問限制,叫做模塊作用域。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_02} alt="模塊化_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            {/* 模塊作用域的好處 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                       模塊作用域的好處
                    </p>
                    <p>
                        <ul>
                            <li>防止全局變量污染的問題</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_03} alt="模塊化_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            {/* 向外共享模塊作用域中的成員 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        module對象
                    </p>
                    <p>
                        在每個.js自定義模塊中都有一個module對象,它裡面存儲了當前模塊有關的信息
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_04} alt="模塊化_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        在自定義模塊中, 可以使用module.exports對象,將模塊內的成員共享出去,供外界使用。
                        外界用 require()方法,導入自定義模塊時,得到的就是module.exports所指向的對象。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_05} alt="模塊化_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>

            {/* 向外共享成員時的注意點 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        向外共享成員時的注意點
                    </p>
                   <p>
                    使用require()方法導入模塊時, 導入的結果,永遠以module.exports指向的對象為準
                   </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_06} alt="模塊化_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                </div>
            </div>
            {/* 向外共享模塊作用域中的成員 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         exports對象
                    </p>
                    <p>
                        由於module.exports單詞寫起來比較複雜,為了簡化向外共享成員的代碼,Node提供了exports對象。默認情況下,exports和module.exports指向同一對象。最終共享的結果,還是以module.exports指向的對象為準。
                    </p>
                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.模塊化_07} alt="模塊化_07" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
            </div>
            {/* 向外共享模塊作用域中的成員 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                      1.exports和module.exports的使用誤區
                    </p>
                    <p>
                        時刻謹記,requires()模塊時,得到的永遠是module.exports指向的對象
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={node_img.exports_01} alt="exports_01" />
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
                                <Image src={node_img.exports_02} alt="exports_02" />
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
                                <Image src={node_img.exports_03} alt="exports_03" />
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
                                <Image src={node_img.exports_04} alt="exports_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    
                    
                
                </div>
            </div>
            {/* 模塊化規範 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        模塊化規範
                    </p>
                    <p>
                        Node.js 遵循了CommonJS模塊化規範, CommonJS規定了模塊的特性和各模塊之間如何相互依賴。
                    </p>
                    <p>
                        CommonJS 規定
                    </p>
                    <p>
                        <ul>
                            <li>每個模塊內部, module變量代表當前模塊。</li>
                            <li>module變量是一個對象,它的exports屬性(即module.exports)是對外的接口。</li>
                            <li>加載某個模塊,其實是加載該模塊的module.exports屬性。 require()方法用於加載模塊</li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Modular