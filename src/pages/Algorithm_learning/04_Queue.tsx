import "./scss/01_TimeComplexity.scss"
import queue from "./assets/img/queue_operations.png"
import leetcode20 from "./assets/img/leetcode20.png"
import leetcode1047 from "./assets/img/leetcode1047.png"
import leetcode71 from "./assets/img/leetcode71.png"

const Queue: React.FC = () => {
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                對列(佇列)
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        圖解
                    </p>
                    <p className="diagram">
                        <img src={queue} alt="棧圖"/>
                    </p>
                </div>
                <div>
                    <p>
                        遵循原則
                    </p>
                    <p>
                        先進先出<br />
                        進:添加,出:刪除<br />
                        比如排隊買飯先排得先買好出去<br />
                    </p>

                </div>
                <div>
                    <p>
                        思路
                    </p>
                    <p>
                        let arr = []<br />
                        arr.push(1);<br />
                        arr.push(2);<br />
                        會得到[1,2]<br />
                        arr.shift()<br />
                        會得到[2]<br />
                        同步異步也遵循此原則<br />
                     
                    </p>

                </div>
                <div>
                    <p>
                        補充 Js中的任務對列
                    </p>
                    <p>
                        Js語言的特點就是<b>單線程</b>,也就是說同一時間只能做一件事情,那為什麼Js不能有多線程?該如何提升效率.
                        作為瀏覽器的腳本語言,主要用途是與用戶互動,以及操作DOM,這決定了它只能是單線程,否則會帶來複雜的同步問題.假定js同時有兩線程,一個線程在某個Dom結點添加內容,另一個線程刪除這個結點,那瀏覽器該以哪個線程為主.
                        <br/>
                        同步、異步:定時器、事件、請求
                    </p>

                </div>
            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第20題*/}
                <div>
                    <p><a href="https://leetcode.com/problems/valid-parentheses/description/" >Leetcode第20題</a></p>
                    <p>
                        <img src={leetcode20} alt="" />
                    </p>
                </div>
                {/* Leetcode第1047題 */}
                <div>
                    <p><a href="https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/">Leetcode第1047題</a></p>
                    <p>
                    <img src={leetcode1047} alt="" />
                    </p>
                </div>
                <div>
                    <p><a href="https://leetcode.com/problems/simplify-path/description/">Leetcode第71題</a></p>
                    <p>
                    <img src={leetcode71} alt="" />
                    </p>
                </div>
                

            </div>
        </div>
    )
}

export default Queue