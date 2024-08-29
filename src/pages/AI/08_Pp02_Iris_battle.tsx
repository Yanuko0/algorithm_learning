
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp02_Iris_battle: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                實戰項目-鳶尾花大作戰
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
                                <Image src={ai_img.鳶尾花大作戰} alt="鳶尾花大作戰" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp02_Iris_battle