import "./scss/01_TimeComplexity.scss"

const TimeComplexity: React.FC = () => {
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                時間複雜度
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div>
                    <p>
                        1.是什麼?
                    </p>
                    <p>
                        執行當前算法所"花費的時間"<br />
                        const srt = '123';<br />
                        for（var i = 0; i &lt; 10000 ; i++）
                    </p>
                </div>
                <div>
                    <p>
                        2.幹什麼?
                    </p>
                    <p>
                        在寫代碼的過程中,可以大概知道代碼運行的快慢<br />
                    </p>

                </div>
                <div>
                    <p>
                        3.表示
                    </p>
                    <p>
                        大O表示法 《解析數論》<br />
                        O表示有很多, 舉例:O（1）、O（n）、O（n^2）、O（logn）<br />
                    </p>

                </div>


            </div>
            <div className="Detailed_introduction">
                {/* O（1） */}
                <div>
                    <p>O（1）</p>
                    <p>
                        時間複雜度不受變量影響<br />
                        const a = 1;
                        const b = 2;
                    </p>
                    <p>//不會受到某一個變量遞增遞減,改變或是影響<br />
                        function fun（params:number） ｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        return number++;<br />
                        ﹞<br />
                        fun(6)
                    </p>
                </div>
                {/* O（n） */}
                <div>
                    <p>O（n）</p>
                    <p>for循環會執行n次<br />
                        let n = 100;<br />
                        for（let i = 0; i＜ n; i++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        console.log（i）<br />
                        ｝
                    </p>
                    <p>
                    //O（1） + O（n） = O（n）<br />
                        function fun（n） ｛<br />
                    //O（1）<br />
                        &nbsp;let i = 1;<br />
                        &nbsp;i +=2;<br />
                    //O（n）<br />
                        for（let k = 0; k＜ n; k++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        console.log（i）<br />

                        ﹞<br />
                        fun(10)
                    </p>
                </div>
                {/* O（n^2） */}
                <div>
                    <p>O（n^2）</p>
                    <p>
                    //O（n）的二次方<br />
                        function fun（n） ｛<br />
                        &nbsp;let arr = [];<br />
                    //O（n）<br />
                        for（let i = 0; i＜ n; i++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        arr.push（〔〕）;<br />
                        //O（n）<br />
                        &nbsp;&nbsp;for（let k = 0; k＜ n; k++）｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        arr〔k〕.push（〔'a'〕）;<br />

                        ﹞<br />
                        fun(10)
                    </p>
                </div>
                {/* O（logN） */}
                <div>
                    <p>O（logN）</p>
                    <p>
                        let i = 1;<br />
                        const n = 6;<br />
                        while （ i ＜ n） ｛<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        i=i*2;<br />
                        ｝<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimeComplexity 