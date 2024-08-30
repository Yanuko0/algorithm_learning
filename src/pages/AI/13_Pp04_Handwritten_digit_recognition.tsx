
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp04_Handwritten_digit_recognition: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
               手寫數字識別
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
                                <Image src={ai_img.手寫圖片識別_01} alt="手寫圖片識別_01" />
                                <Image src={ai_img.手寫圖片識別_02} alt="手寫圖片識別_02" />

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
                                <Image src={ai_img.手寫圖片識別_03} alt="手寫圖片識別_03" />
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp04_Handwritten_digit_recognition