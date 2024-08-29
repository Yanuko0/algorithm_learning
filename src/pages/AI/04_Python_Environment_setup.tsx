
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Python_Environment_setup: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                Python環境搭建
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        Miniconda讓你AI之路暢通無阻
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Python} alt="Python" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        在公司裡做AI算法工程師, 大部分工作時都會使用Python語言, 但做人工智能不一定非要Python
                    </p>

                    {/* 為何選擇Miniconda */}
                    <li>為何選擇Miniconda</li>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Python_01} alt="Python_01" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>

                    {/* 下載Miniconda */}
                    <li><a href="https://docs.anaconda.com/miniconda/">下載Miniconda</a></li>

                    <p>安裝完後對電腦資料夾檢查是否有完全控制權</p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Python_02} alt="Python_02" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        設定環境變量,右下角設定→所有設定→搜尋編輯→編輯系統環境變數
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Python_03} alt="Python_03" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* Python開發環境 */}
                <div>
                    <p>
                        Python開發環境-PyCharm
                    </p>
                    <p>
                        <li><a href="https://www.jetbrains.com/zh-cn/pycharm/download/other.html">PyCharm下載</a></li>
                    </p>
                    <p>
                        安裝完後配置conda.exe
                    </p>
                    <p>配置PyCharm快捷鍵</p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.PyCharm快捷鍵} alt="PyCharm快捷鍵" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Python_Environment_setup