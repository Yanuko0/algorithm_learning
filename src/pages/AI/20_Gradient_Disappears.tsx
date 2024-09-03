
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Gradient_Disappears: React.FC = () => {

    return (
        <div className="full_page">
            {/* 梯度消失 */}
            <div className="title">
                  梯度消失與Dropout
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Gradient Vanish
                    </p>
                    <p>
                        這個問題還是得從正向傳播和反向傳播談起,
                    </p>   
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.梯度消失_01} alt="梯度消失_01" />

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
                                <Image src={ai_img.梯度消失_02} alt="梯度消失_02" />

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
                                <Image src={ai_img.梯度消失_03} alt="梯度消失_03" />

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
                                <Image src={ai_img.梯度消失_04} alt="梯度消失_04" />

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
                                <Image src={ai_img.激活函數_05} alt="激活函數_05" />

                            </Image.PreviewGroup>
                        </div>
                    </p>   
                </div>
            </div>     
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         Dropout
                    </p>           
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Dropout_01} alt="Dropout_01" />

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
                                <Image src={ai_img.Dropout_02} alt="Dropout_02" />

                            </Image.PreviewGroup>
                        </div>
                    </p>   
                    <p>
                        Dropout是正則化中非常常用的技巧。我們把一部份神經元置零,置零指的是將神經元的激活函數置零。一般在全連接層中使用, 在卷機層中也會見到, 在卷積層中有時候並不是將神經元置零,而是將某些特徵映射整體置零,比如講顏色通道中的某幾個整體置零。Dropout一定程度上消除了特徵之間的依賴關係, 這樣網路就只能用一些學習到的零散特徵來進行判斷。
                    </p>
                    <p>
                        如何使用?
                    </p>
                    <p>
                        深度學習框架中會封裝有Dropout層, 這樣需要將一層輸出隨機的丟棄一些, 那麼就在哪一層後面跟Dropout層即可。
                    </p>
                    <p>
                        自行實現?
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Dropout_03} alt="Dropout_03" />

                            </Image.PreviewGroup>
                        </div>
                    </p> 
                </div>
               
            </div>   
        </div>
    )
}

export default Gradient_Disappears