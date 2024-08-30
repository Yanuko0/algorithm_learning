
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Gradient_descent_method: React.FC = () => {

    return (
        <div className="full_page">
            {/* 梯度下降法 */}
            <div className="title">
                梯度下降法
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        梯度下降法
                    </p>
                    <p>
                        假設你是一名山上的導遊, 有一個團隊要跟著你攀登山峰。 你的目標是帶領大家快速、高校地到達山頂。 但是, 你沒有地圖和指南針, 你只能依靠自己的經驗和感覺來找到最優的攀登路線。   
                    </p>                   
                    <p>
                        梯度下降法就是像再攀登山峰的方式, 你每一次都會選擇當前最陡峭的路線。具體來說, 你會根據當前位置的高度和周圍的地型情況算出一個下山最陡峭的方向, 然後向這個方向走一小步, 繼續計算新位置的最陡峭方向, 以此類推, 直到你到達山頂。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.梯度下降法} alt="梯度下降法" />

                            </Image.PreviewGroup>
                        </div>
                    </p>                            
                </div>
                {/* 梯度下降法的步驟 */}
                <div>
                    <p>
                       梯度下降法的步驟
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.梯度下降法_01} alt="梯度下降法_01" />
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
                                <Image src={ai_img.梯度下降法_02} alt="梯度下降法_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
             {/* 小批量的梯度下降 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                    小批量的梯度下降
                    </p>
                    <p>
                       使用小批量梯度下降,會使得模型訓練又快又穩。
                    </p>
                    <p>
                        
                        談到小批量梯度下降, 肯定躲不開梯度下降, 梯度下降法我們知道是訓練模型的時候使用的方法, 通過不斷的迭代使得模型參數逼近最優解。  
                    </p>                   
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.小批量梯度下降_01} alt="小批量梯度下降_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>    
                    <p>
                        如果我們把訓練模型這件事情看成是培養一名廚師的話, 那麼廚師烹飪大量的菜品進行修練, 就好比機器讀取大量的數據來進行訓練。
                    </p> 
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.小批量梯度下降_02} alt="小批量梯度下降_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        但是一次性做很多菜會讓人感到很吃力, 所以你需要分批處理, 每一次處理一小批菜品; 機器學習訓憐也是如此 當數據量大的時後一次性讀取訓練集的所有數據進行一次梯度下降迭代, 很有可能因為算力不足無法運行, 即使可以運行一次迭代所需時間也會相對較長。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.小批量梯度下降_03} alt="小批量梯度下降_03" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        正如上圖所示, 我們可以將訓練數據分成多個批次(batch), 每個批次所包含數據量(samples)叫做批次大小(batch_size), 梯度下降每次迭代使用一個批次的數據。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.小批量梯度下降_04} alt="小批量梯度下降_04" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        上圖是對比全量梯度下降、隨機梯度下降、小批量批度下降; 
                        還有一點是大家經常發現, 頂級的廚師往往年紀都不小,因為手藝就是需要多年不段磨練出來的, 很好的掌握火侯。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.小批量梯度下降_05} alt="小批量梯度下降_05" />
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
                                <Image src={ai_img.小批量梯度下降_06} alt="小批量梯度下降_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gradient_descent_method