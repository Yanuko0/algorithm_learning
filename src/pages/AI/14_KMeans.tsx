
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const KMeans: React.FC = () => {

    return (
        <div className="full_page">
            {/* KMeans聚類 */}
            <div className="title">
                  KMeans聚類
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         KMeans聚類是屬於無監督學習的算法
                    </p>
                    <p>
                        假設我們有一些數據, 想要將它們分成幾個不同的組, 使得每個組內的數據點相似度較高, 組間數據點的相似度較低
                    </p>                   
                    
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.KMeans_01} alt="KMeans_01" />

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
                                <Image src={ai_img.KMeans_02} alt="KMeans_02" />

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
                                <Image src={ai_img.KMeans_03} alt="KMeans_03" />

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
                                <Image src={ai_img.KMeans_04} alt="KMeans_04" />

                            </Image.PreviewGroup>
                        </div>
                    </p>               
                </div>
                {/* KMeans算法具體流程 */}
                <div>
                    <p>
                      KMeans算法具體流程
                    </p>
                    <p>
                       KMeans聚類的基本思想是將數據點分成K個不同的組, 其中K是我們自己設定的。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.KMeans_05} alt="KMeans_05" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>

                 {/* KMeans聚類得到的模型 */}
                 <div>
                    <p>
                       KMeans聚類得到的模型
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.KMeans_06} alt="KMeans_06" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        有了這個中心點未來就可以把新的樣本劃分到不同類裡面去
                    </p>
                </div>
            </div>     
        </div>
    )
}

export default KMeans