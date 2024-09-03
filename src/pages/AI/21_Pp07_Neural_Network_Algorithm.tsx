
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp07_Neural_Network_Algorithm: React.FC = () => {

    return (
        <div className="full_page">
            {/* 神經網路算法 */}
            <div className="title">
               PyTorch實戰-神經網路算法
            </div>
          
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        MNIST手寫數字識別
                    </p>
                    <a href="https://pytorch.org/get-started/locally/">PyTorch下載</a>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.實戰1} alt="實戰1" />
                               

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
                                <Image src={ai_img.實戰2} alt="實戰2" />
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>    
            </div>
        </div>
    )
}

export default Pp07_Neural_Network_Algorithm