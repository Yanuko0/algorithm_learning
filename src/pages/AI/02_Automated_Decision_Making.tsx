import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Automated_Decision_Making: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                機器學習實現自動化決策
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        機器學習是如何工作的
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_working} alt="ai_working" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <li>機器學習(ML)採用算法和統計模型, 使得計算系統能夠在大量數據中找到模式, 然後使用識別這些模式的模型對新數據進行預測或是描述</li>
                    </p>
                    <p>
                        簡單來說，機器學習訓練機器學習,無須明確編成如何學習。作為人工智能的一個子集, 機器學習以最基本的形式使用算法來解析數據, 從中學習, 然後對現實世界中的某些事物做出預測或決定。
                        <br /> <br />
                        換句話說, 機器學習使用算法從輸入機器學習平台的數據自主創建模型。 典型的編成或是基於規則的系統捕獲專家在編成規則方面的知識, 但是當數據發生變化時, 這些規則可能變得難以更新和維護。 機器學習的優勢在於能夠從輸入算法的越來越多的數據中學習, 並且可以提供數據驅動的概率預測。
                        <br /> <br />
                        機器學習採用兩種主要技術
                        <ul>
                            <li>有監督</li>
                            <li>無監督</li>
                            <li>兩者混合的半監督</li>

                        </ul>
                    </p>


                </div>
                {/* 機器學習 */}
                <div>
                    <p>
                        機器學習
                    </p>

                    <p>

                        <li>監督學習</li><br />
                        監督學習算法使用標記數據, 監督式機器學習(也稱為預測分析), 使用算法來訓練模型, 以在具有標籤和特徵的數據集中查找模式。 然後, 使用經過訓練的模型來預測新數據集特徵上的標籤

                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_supervised_learning_01} alt="ai_supervised_learning_01" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <br />
                    <p>
                        監督學習可以進一步的分為分類與回歸。

                        分類根據已知物料的標記示例標示物料所屬的類別。 在下面的簡單示例中。<br />

                        邏輯回歸用於根據已經詐欺性或是非詐欺性的交易特徵(交易金額、時間和上次交易的位置) 估計信用卡交易是否詐欺的概率(標籤)
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_supervised_learning_02} alt="ai_supervised_learning_02" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        回歸估計目標結果標籤與一個或是多個特徵變量之間的關係, 以預測連續數值。 在下面的簡單示例中, 線性回歸用於根據房屋大小(特徵)估計房價(標籤)
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_supervised_learning_03} alt="ai_supervised_learning_03" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <br />
                    <p>
                        <li>無監督學習</li><br />
                        無監督學習算法在未標記數據中查找模式。在聚類分析中, 算法通過分析輸入示例知間的相似性將輸入分類。集群是一個例子是, 一家公司希望細分客戶, 以便更好地制定產品和產品。 可以根據人口統計和購買歷史紀錄等功能對客戶進行分組。 無監督學習的聚類通常與監督學習相結合, 以獲得更有價值的結果。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_supervised_learning_04} alt="ai_supervised_learning_04" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <br />
                    <p>
                        <li>半監督學習</li>
                        用的較少,是指標記數據和未標記數據是混合在一起的,白話一點來說就是有的樣本有標籤,有的樣本沒有標籤
                    </p>
                    
                    <p>
                        <li>強化學習</li>
                        較於特殊的學習方式, 根據反饋最大化獎勵, 反過來去調整模型。

                    </p>

                </div>


                {/* 深度學習 */}
                <div>
                    <p>
                        深度學習
                    </p>
                    <p>
                        是ai人工智能的一個概念, 讓機器的行為看起來像人一樣。首先要先搞懂機器學習和深度學習之間的關係。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_Deep_learning} alt="ai_Deep_learning" width={500} />
                                

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        AI(人工智能)是最外面的那個大圓,機器學習是中圓,深度學習是小圓。
                        也就是說機器學習跟深度學習的關係是, 深度學習是機器學習的一部分, 機器學習和深度學習都指是人工智能AI的一部分而已;
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_learning} alt="ai_learning" />
                                

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        不管是機器學習還是深度學習都是學習大量的數據, 找出來數據中蘊含的模式, 學習到的模式Pattern 對應就是訓練好的神經網路;
                        <br/>
                        機器學習的年代還需要一些人工進行前期的數據處理, 到了深度學習的年代則是如何數據預處理也作為神經網路算法需要去學習的一部分內容!
                        <br/>
                        時至今日, 深度學習已經稱為AI界的主流, 近十年人工智能火熱也是得益於深度學習的突飛猛進,比如大家熟知的下圍棋AlphaGO, 深度學習+強化學習。還有ChatGPT, 深度學習+NLP。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ChatGTP_work} alt="ChatGTP_work" />
                                

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 強化學習 */}
                <div>
                    <p>
                         強化學習
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_reinforcement_learning} alt="ai_reinforcement_learning" width={500} />
                                {/* <Image src={ai_img.ai_language_processing} alt="ai_language_processing" style={{ display: "none" }} /> */}
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        最早開始關注強化學習是在2016年3月, 韓國圍棋高手李世石與Google DeepMind團隊開發AlphaGo經過一番激戰, 以1:4的比分落敗, 被認為是人工智能歷史上的一次里程碑事件。
                        後來又在2017年5月27日, 最後一次擊敗世界第一的柯拮, 最後以0:3敗給升級版的AlphaGo。
                        後來包括遊戲、開車、ChatGTP、機器人、機器狗、手臂抓取機器人都有用到強化學習,通過強化學習來不段探索,完成高難度的動作。
                    </p>
                    <p>強化學習是一個非常有趣且值得廣泛研究的領域, RL技術的進步及其在現實各領域的應用勢必將取得更大的成功。</p>
                </div>
           
            </div>

        </div>
    )
}

export default Automated_Decision_Making