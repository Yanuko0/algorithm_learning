
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp06_Speaker_identification: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
               說話人識別
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
                                <Image src={ai_img.說話人識別_01} alt="說話人識別_01" />
                               

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>對於語音數據來說, 重要的是首先進行特徵提取, 簡單來說就是把連接的語音信號, 通過分幀、加窗等操作得到向量化的數據。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.說話人識別_02} alt="說話人識別_02" />
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        而這一系列語音信號數值化操作, 可以通過現成的模塊幫助我們完成, 例如
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.說話人識別_03} alt="說話人識別_03" />
                          

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
                                <Image src={ai_img.說話人識別實戰_01} alt="說話人識別實戰_01" />
                                <Image src={ai_img.說話人識別實戰_02} alt="說話人識別實戰_02" />
                                <Image src={ai_img.說話人識別實戰_03} alt="說話人識別實戰_01" />
                          

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp06_Speaker_identification