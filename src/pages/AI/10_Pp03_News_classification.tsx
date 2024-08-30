
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp03_News_classification: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
               新聞分類-不再錯過熱門資訊
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
                                <Image src={ai_img.新聞提取} alt="新聞提取" />
                                <Image src={ai_img.新聞提取_01} alt="新聞提取_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp03_News_classification