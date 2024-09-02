
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Perceptron: React.FC = () => {

    return (
        <div className="full_page">
            {/* Gaussian_Mixture_Model */}
            <div className="title">
                感知機與神經網路
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         神經網路的起點-感知機
                    </p>
                    <p>
                        當我們談論神經網路時, 很難不提到感知機。 感知機視神經網路的起點, 也是神經網路歷史上的一個里程碑。
                        感知機是由美國學者Frank Rosenblatt在20世紀50年代提出的, 它是一種簡單的神經網路模型, 其靈感來源於人類神經元之間的聯繫
                    </p>  
                                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.感知機_01} alt="感知機_01" />

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
                                <Image src={ai_img.感知機_02} alt="感知機_02" />

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
                                <Image src={ai_img.感知機_03} alt="感知機_03" />

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
                                <Image src={ai_img.感知機_04} alt="感知機_04" />

                            </Image.PreviewGroup>
                        </div>
                    </p>             
                </div>
            </div>     
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         神經網路
                    </p>
                    <p>
                        從神經元到神經網路
                    </p>  
                                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.神經網路_01} alt="神經網路_01" />

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
                                <Image src={ai_img.神經網路_02} alt="神經網路_02" />

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
                                <Image src={ai_img.神經網路_03} alt="神經網路_03" />

                            </Image.PreviewGroup>
                        </div>
                    </p>     
                    <p>
                        <ul>
                            <li>加入隱藏層, 引入非線性變化</li>
                            <li>可以有更多隱藏層, 引入更加複雜的非線性變化</li>
                            <li>也可以同時預測多個輸出</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.神經網路_04} alt="神經網路_04" />

                            </Image.PreviewGroup>
                        </div>
                    </p>             
                </div>
            </div>   
        </div>
    )
}

export default Perceptron