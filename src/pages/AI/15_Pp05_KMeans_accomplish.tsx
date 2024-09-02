
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp05_KMeans_accomplish: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
               KMeans具體實現
            </div>
          
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        項目實戰
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.KMeans} alt="KMeans" />
                               

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
                                <Image src={ai_img.KMeans實現} alt="KMeans實現" />
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp05_KMeans_accomplish