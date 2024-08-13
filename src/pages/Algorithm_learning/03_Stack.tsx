import "./scss/01_TimeComplexity.scss"
import stack from "./assets/img/stack_operations.png"

const Stack: React.FC = () => {
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                棧
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div>
                    <p>
                        遵循原則:
                    </p>
                    <p>
                        後進先出<br />
                        進:添加,出:刪除<br />
                    </p>
                </div>
                <div>
                    <p>
                        2.表示法
                    </p>
                    <p>
                        <img src={stack} alt="棧圖" width="100%" />
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

export default Stack 