import "./scss/algorithmPageStyle.scss"
import { Image } from "antd"
import space_types01 from "./assets/img/圖解/space_types01.png"
import space_complexity_02 from "./assets/img/圖解/space_complexity_02.png"
import space_complexity_03 from "./assets/img/圖解/space_complexity_03.png"
import space_complexity_04 from "./assets/img/圖解/space_complexity_04.png"


const SpaceComplexity: React.FC = () => {
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                空間複雜度
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
            <div className="diagrambox">
                    <p>
                        圖解
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={space_types01} alt="space_types01" />
                                <Image src={space_complexity_02} alt="space_complexity_02" style={{ display: "none" }} />
                                <Image src={space_complexity_03} alt="space_complexity_03" style={{ display: "none" }} />
                                <Image src={space_complexity_04} alt="space_complexity_04" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                <div>
                    <p>
                        1.是什麼?
                    </p>
                    <p>
                        執行當前算法需要佔用多少內存空間<br />
                    </p>
                </div>
                <div>
                    <p>
                        2.表示法
                    </p>
                    <p>
                        O（1）、O（n）、O（n^2）、O（logn）<br />
                    </p>

                </div>

            </div>
            <br/>
            <div className="Detailed_introduction">
                {/* O（1） */}
                <div>
                    <p>O（1）</p>
                    <p>
                        只佔用一塊<br />
                        let a = 1; a++
                    </p>
                </div>
                {/* O（n） */}
                <div>
                    <p>O（n）</p>
                    <p>
                        let n = 100;<br />
                        let arr = 〔〕;<br />
                        for（let i = 0; i＜ n; i++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        arr.push（1）<br />
                        ｝
                    </p>
                </div>
                {/* O（n^2） */}
                <div>
                    <p>O（n^2）</p>
                    <p>
                        let n = 100;
                        let arr = 〔〕;
                        for（let i = 0; i＜ n; i++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        arr.push（〔〕）;<br />
                        &nbsp;&nbsp;for（let k = 0; k＜ n; k++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        arr〔i〕.push（〔'a'〕）;<br />
                        ﹞
                    </p>
                </div>
                {/* O（logN） */}
               
            </div>
        </div>
    )
}

export default SpaceComplexity 