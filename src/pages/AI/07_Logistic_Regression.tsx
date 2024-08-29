

import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Logistic_Regression: React.FC = () => {

    return (
        <div className="full_page">
            {/* 回歸 */}
            <div className="title">
                回歸
            </div>
          
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         邏輯回歸
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.邏輯回歸} alt="邏輯回歸" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        大家千萬不要被邏輯回歸的名字所迷惑,其實logistic regression並不是回歸任務的算法, 而是屬於分類任務算法。
                        根據歷史數據訓練模型, 未來預測樣本屬於哪一個類別的任務就是分類任務。
                        <ul>
                            <li>垃圾郵件分類</li>
                            <li>情感分析</li>
                            <li>圖像識別</li>
                            <li>信用卡欺詐檢測</li>
                            <li>疾病診斷</li>
                            <li>金融欺詐檢測</li>
                        </ul>
                    </p>                   
                </div>
                {/* 邏輯回歸是分類算法, 為何名字中有回歸兩字 */}
                <div>
                    <p>
                        邏輯回歸是分類算法, 為何名字中有回歸兩字
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.邏輯回歸_01} alt="邏輯回歸_01" />
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
                                <Image src={ai_img.邏輯回歸_02} alt="邏輯回歸_02" />
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
                                <Image src={ai_img.邏輯回歸_03} alt="邏輯回歸_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        這麼做可以得到一個S型曲線(Sigmoid函數), 將線性回歸的值壓縮到0到1之間, 這樣就具備了概率含意;而概率值大於0.5我們認為樣本是正例, 反之我們認為樣本是負例, 這樣邏輯回歸創建之初就是做二分類任務用的。
                    </p>
                </div>
            </div>
            {/* 如何求解算法模型 */}
            <div className="introduce">
                <div className="diagrambox">
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
                                <Image src={ai_img.如何求解算法模型} alt="如何求解算法模型" />
                    
                            </Image.PreviewGroup>
                        </div>
                    </p>     
                    <p>
                        不同的算法模型(公式參數) 有不同的損失, 我們需要計算機不斷調整參數最後找出最優解參數(最佳模型)
                    </p>
                                               
                </div>
                {/* 邏輯回歸可以做多分類嗎 */}
                <div>
                    <p>
                        邏輯回歸可以做多分類嗎
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.邏輯回歸_04} alt="邏輯回歸_04" />
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
                                <Image src={ai_img.邏輯回歸_05} alt="邏輯回歸_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* Softmax回歸*/}
                <div>
                    <p>
                        Softmax回歸
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Softmax回歸_01} alt="Softmax回歸_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                    Softmax回歸聽名字, 依然好像是做回歸任務的算法, 但其實它是做多分類任務的算法
                        <ul>
                            <li>籃球比賽勝負是二分類, 足球比賽勝平負就是多分類</li>
                            <li>識別手寫數字0和1是二分類, 識別手寫數字0-9就是多分類</li>
                        </ul>
                    Softmax回歸算法是一種用於多分類問題的機器學習算法。 它可以幫助我們預測一個樣本屬於哪一類, 比如預測一張照片中的動物是狗、貓還是鳥
                    </p>
                    
                </div>
                {/* Softmax回歸算法表達式 */}
                <div>
                    <p>
                        Softmax回歸算法表達式
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Softmax回歸_02} alt="Softmax回歸_02" />
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
                                <Image src={ai_img.Softmax回歸_03} alt="Softmax回歸_03" />
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
                                <Image src={ai_img.Softmax回歸_04} alt="Softmax回歸_04" />
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
                                <Image src={ai_img.如何求解算法模型_01} alt="如何求解算法模型_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        不同的算法模型(公式參數), 有不同的損失值, 我們需要計算機不斷調整參數最後找出最優解參數(最佳模型)
                    </p>
                
                </div>
                 {/* MultiLabel與MultiClass */}
                 <div>
                    <p>
                       MultiLabel與MultiClass
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.MultiLabel與MultiClass} alt="MultiLabel與MultiClass" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>Softmax回歸適合多分類模型, 因為互斥就是各類別概率之和必為1</li>
                            <li>邏輯回歸多分類轉多個二分類適合, 因為各個二分類模型是相互獨立的</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Logistic_Regression