
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Regularization_techniques: React.FC = () => {

    return (
        <div className="full_page">
            {/* 機器學習之正則化技術 */}
            <div className="title">
                機器學習之正則化技術
            </div>
          
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        機器學習之正則化技術
                    </p>
                    <p>
                        假設正在學習如何打高爾夫。妳發現在練習時,有些細節會對妳的成績產生很大的影響,例如妳的手握桿的力度、握桿的姿勢、身體姿勢等。但是,妳也發現如果把注意力全部集中在這些細節上,也很容易忘記打球最主要的目標,把球打進洞裡。    
                    </p>                   
                    <p>
                        機器學習的正則化也是類似的概念,在機器學習中, 我們通常面臨著過擬合和欠擬合的問題。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.機器學習_01} alt="機器學習_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        過擬合的是模型過於複雜,以至於能夠完美的擬合訓練數據, 但卻不能很好的廣泛化到新數據。欠擬合則相反, 模型過於簡單, 不能很好的擬合數據。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.機器學習_02} alt="機器學習_02" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        為了解決這些問題,我們可以使用正則化技術。而正則化的目標是保持模型簡單, 以避免過度擬合。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.機器學習_03} alt="機器學習_03" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        正則化的方法通常是在損失函數中添加一個正則化項, 這個正則化項會根據模型參數的大小來懲罰模型的複雜度。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.機器學習_04} alt="機器學習_04" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* L1、L2正則項 */}
                <div>
                    <p>
                         L1、L2正則項
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.L1_L2正則項} alt="L1_L2正則項" />
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
                                <Image src={ai_img.L1_L2正則項_01} alt="L1_L2正則項_01" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Regularization_techniques