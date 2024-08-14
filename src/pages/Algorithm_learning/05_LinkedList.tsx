import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"
import linkedList from "./assets/img/圖解/linkedlist_definition.png"
import linkedistCommentary from "./assets/img/解說/linkedist_解說.png"


const LinkedList: React.FC = () => {


    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                鏈表(鏈結串列)
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        圖解
                    </p>
                    <p className="diagram">
                        <Image src={linkedList} alt="棧圖" />
                    </p>
                </div>
                <div>
                    <p>
                        遵循原則
                    </p>
                    <p>
                        多個元素存儲的列表<br />
                        鏈表中的元素在內存中不是按順序存儲,而是通過"next"指針連繫再一起<br />
                        const a ={JSON.stringify({ key: 'a' })}<br />
                        const b ={JSON.stringify({ key: 'b' })}<br />
                        const c ={JSON.stringify({ key: 'c' })}<br />
                        const d ={JSON.stringify({ key: 'd' })}<br />
                        a.next = b;<br />
                        b.next = c;<br />
                        c.next = d;<br />
                        d.next = null;<br />
                        console.log(a)

                        <div className="commentaryBox">
                            <Image src={linkedistCommentary} alt="鏈表解說" width={100} />
                        </div>

                    </p>

                </div>
                <div>
                    <p>
                        思路
                    </p>
                    <p>
                        '（）｛｝'<br />
                        '（〕｛｝'<br />
                        〔'（'〕入棧 0<br />
                        （&&當前 =="）" <br />
                        ｛當前 =="｝"  <br />
                        〔當前 =="〕"    1<br />
                        〔〕.length == 0<br />
                        比如一開始入棧是（但第二個是〕,<br />
                        那就不出棧pop,那〔〕.length<br />
                        就不等於0<br />
                    </p>

                </div>
            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第20題*/}
                {/* <div>
                    <p><a href="https://leetcode.com/problems/valid-parentheses/description/" >Leetcode第20題</a></p>
                    <p>
                        <Image src={} alt="leetcode20"/>
                    </p>
                </div> */}
                {/* <div>
                    <p><a href="https://leetcode.com/problems/valid-parentheses/description/" >Leetcode第20題</a></p>
                    <p>
                        <Image src={} alt="leetcode20"/>
                    </p>
                </div> */}


            </div>

        </div>
    )
}

export default LinkedList 