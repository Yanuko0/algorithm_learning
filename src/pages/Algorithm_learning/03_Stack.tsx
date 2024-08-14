import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"
import stack from "./assets/img/圖解/stack_operations.png"
import leetcode20 from "./assets/img/Leetcode/leetcode20.png"
import leetcode1047 from "./assets/img/Leetcode/leetcode1047.png"
import leetcode71 from "./assets/img/Leetcode/leetcode71.png"

const Stack: React.FC = () => {
 

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                棧(堆疊)
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        圖解
                    </p>
                    <p className="diagram">
                        <Image src={stack} alt="棧圖"/>
                    </p>
                </div>
                <div>
                    <p>
                        遵循原則
                    </p>
                    <p>
                        後進先出<br />
                        進:添加,入push [1,2,4,5]<br />
                        出:刪除,出pop [1,2,4] → 5 <br />
                        [1,2,3,4,5].pop() 她的返回值是5
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
                <div>
                    <p><a href="https://leetcode.com/problems/valid-parentheses/description/" >Leetcode第20題</a></p>
                    <p>
                        <Image src={leetcode20} alt="leetcode20"/>
                    </p>
                </div>
                {/* Leetcode第1047題 */}
                <div>
                    <p><a href="https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/">Leetcode第1047題</a></p>
                    <p>
                        <Image src={leetcode1047} alt="leetcode1047"/>
                    </p>
                </div>
                {/* Leetcode第71題 */}
                <div>
                    <p><a href="https://leetcode.com/problems/simplify-path/description/">Leetcode第71題</a></p>
                    <p>
                        <Image src={leetcode71} alt="leetcode71"/>
                    </p>
                </div>
            
            </div>
           
        </div>
    )
}

export default Stack 