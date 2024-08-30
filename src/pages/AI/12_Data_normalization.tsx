
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Data_normalization: React.FC = () => {

    return (
        <div className="full_page">
            {/* 數據歸一化 */}
            <div className="title">
                數據歸一化
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        數據的預處理
                    </p>
                    <p>
                        假設正準備去跑步比賽, 你需要做好充分的準備, 包括飲食、鍛鍊、休息等方面。在鍛鍊方面, 你需要注意不同部位的肌肉都要得到充分的訓練。 但是, 如果你的身體某些部位的肌肉過於發達, 就可能會影響整個身體的平衡性與協調性, 進而影響跑步的效果。
                    </p>                   
                    <p>
                       類似的, 機器學習中的數據歸一化就是為了讓不同特徵之間的權重更加平衡, 防止某些特徵對模型的影響過大, 影響模型的性能。
                    </p>
                    <p>
                       具體來說, 數據歸一化就是將數據中的每個特徵按照一定的比例進行縮放,使得不同特徵之間的值在相同的範圍內波動, 從而消除特徵之間的量綱(單位)差異。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.數據歸一化_01} alt="數據歸一化_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>                            
                </div>
                {/* 具體做法 */}
                <div>
                    <p>
                    具體做法
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.數據歸一化_02} alt="數據歸一化_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        數據和特徵決定機器學習的上限, 而模型和算法只是逼近這個上限而已。
                    </p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Data_normalization