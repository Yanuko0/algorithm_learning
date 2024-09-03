
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Activation_function: React.FC = () => {

    return (
        <div className="full_page">
            {/* 激活函數 */}
            <div className="title">
                激活函數與正反向傳播
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        激活函數-讓神經網路更加智能
                    </p>
                    <p>
                        當我們在神經網路中傳地數據時, 我們需要一種函數來幫助我們在每一層中轉換數據. 這就是激活函數(Activation Function)
                    </p>  
                                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.激活函數_01} alt="激活函數_01" />

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
                                <Image src={ai_img.激活函數_02} alt="激活函數_02" />

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
                                <Image src={ai_img.激活函數_03} alt="激活函數_03" />

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
                                <Image src={ai_img.激活函數_04} alt="激活函數_04" />

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
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.激活函數_06} alt="激活函數_06" />

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
                                <Image src={ai_img.激活函數_07} alt="激活函數_07" />

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
                                <Image src={ai_img.激活函數_08} alt="激活函數_08" />

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
                                <Image src={ai_img.激活函數_09} alt="激活函數_09" />

                            </Image.PreviewGroup>
                        </div>
                    </p>      
                </div>
            </div>     
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         神經網路-正向傳播
                    </p>
                    <p>
                        正向傳播
                    </p>  
                                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.正向傳播_01} alt="正向傳播_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>       
                </div>
                <div className="diagrambox">
                    <p>
                         神經網路-反向傳播
                    </p>
                    <p>
                         反向傳播
                    </p>  
                                  
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.反向傳播_01} alt="反向傳播_01" />

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
                                <Image src={ai_img.反向傳播_02} alt="反向傳播_02" />

                            </Image.PreviewGroup>
                        </div>
                    </p>     
                </div>
            </div>   
        </div>
    )
}

export default Activation_function