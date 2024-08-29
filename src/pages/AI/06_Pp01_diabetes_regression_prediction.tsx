
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Pp01_diabetes_regression_prediction: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                實戰項目-糖尿病回歸預測
            </div>
            {/* 安裝算法庫 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        首先在所使用的python環境中,安裝機器學習的算法庫scikit-learn
                    </p>
                    <p>pip install scikit-learn</p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.安裝算法庫} alt="安裝算法庫" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
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
                                <Image src={ai_img.糖尿病項目1} alt="糖尿病項目1" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
              
            </div>
        </div>
    )
}

export default Pp01_diabetes_regression_prediction