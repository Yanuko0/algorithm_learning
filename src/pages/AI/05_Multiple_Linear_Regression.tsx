

import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Multiple_Linear_Regression: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                多元線性回歸
            </div>
            <p>
                根據歷史數據訓練模型, 未來預測具體數值的任務就是回歸任務
                <ul>
                    <li>股票價格預測</li>
                    <li>房價預判(影響因素:房屋面積、臥室數、房間數、車庫數等)</li>
                    <li>銷售量預測</li>
                    <li>貸款違約率預測</li>
                </ul>
                多元線性回歸就是眾多回歸算法中的一個, 也是最基礎的一個
            </p>
            {/* 何為多元 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        何為多元? 多個維度 multi dimensionality
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.multi_dimensionality} alt="multi_dimensionality" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        更高的維度很難繪製出來; 不過我們可以思考一下我們生活的世界是幾維空間?
                        其實隨時隨地都能在腦海中構建一個多維空間,比如房屋的售價取決於很多因素,比如面積、臥室數、浴室數、車庫數等
                        可以想像成影響一件事情的因素，有很多個。
                    </p>                   
                </div>
                {/* 何為線性? 二維空間: 直線 */}
                <div>
                    <p>
                        何為線性? 二維空間: 直線
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.線性與空間} alt="線性與空間" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        更高維度空間中呈現出來的"線性體", 我們統稱維超平面hyper plane
                    </p>
                </div>
            </div>
            {/* 何為回歸 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         何為回歸? 回歸就是擬合
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.回歸} alt="回歸" />
                    
                            </Image.PreviewGroup>
                        </div>
                    </p>                                
                </div>
                {/* 何為線性? 二維空間: 直線 */}
                <div>
                    <p>
                        何為線性? 二維空間: 直線
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.線性與空間} alt="線性與空間" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        更高維度空間中呈現出來的"線性體", 我們統稱維超平面hyper plane
                    </p>
                    <p>三維世界的非線性回歸</p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.非線性回歸} alt="非線性回歸" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        綜上所述, 多元線性回歸就是在多元世界(多維空間)中使用線性體(直線、平面、超平面)對已有數據點(歷史數據)進行擬合的一種方式方法(算法or函數)
                    </p>
                </div>
                {/* 線性回歸公式(算法表達式) */}
                <div>
                    <p>
                        線性回歸公式(算法表達式) 
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.線性回歸公式} alt="線性回歸公式" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>如果我們知道我們數據X = x1...xn和Y大致是成線性變換關係, 當然使用線性回歸算法是合適的</li>
                            <li>只要我們假設X = x1....xn和Y是成線性變換的,就可以嘗試去使用線性回歸算法去擬合, 萬一合適呢?</li>
                        </ul>
                    </p>
                    
                </div>
                {/* 使用幾元線性回歸 */}
                <div>
                    <p>
                         使用幾元線性回歸
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.使用幾元的線性回歸} alt="使用幾元的線性回歸" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 如何求解算法模型 */}
                <div>
                    <p>
                         如何求解算法模型
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.求解算法模型} alt="求解算法模型" />
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
                                <Image src={ai_img.求解算法模型_01} alt="求解算法模型_01" />
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
                                <Image src={ai_img.求解算法模型_02} alt="求解算法模型_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Multiple_Linear_Regression