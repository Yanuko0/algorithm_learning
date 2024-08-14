import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"
import hash_01 from "./assets/img/解說/hash_01.png"
import hash_table_lookup from "./assets/img/圖解/hash_table_lookup.png"
import leetcode01 from "./assets/img/Leetcode/leetcode01.png"

import leetcode1207 from "./assets/img/Leetcode/leetcode1207.png"
import newMap找數組 from "./assets/img/解說/newMap找數組.png"



const Tree: React.FC = () => {

   
   
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                樹
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 介紹字典 */}
                <div className="diagrambox">
                    <p>
                        什麼是樹
                    </p>
                    <p>
                    一種分層數據的抽象模型,簡單來說就是分層關係<br />
                    比如公司股東會下有董事會、審計法務部,在更下面也分各部門,總經理室,品保,財務,生產,業務等<br />
                        
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={hash_table_lookup} alt="哈希表" />
                                <Image src={hash_01} alt="hash_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                <div className="diagrambox">
                    <p>
                        哈希表(湊雜表)
                    </p>
                    <p>
                        又稱為散列表<br />
                        區別1: 如果找key對應的value需要遍歷key,如果想省去遍歷的過程,用哈希表來表示。<br />
                        區別2: 排列順序,字典是根據添加順序進行排列,哈希表則不是
                        <br />
                        在js中沒有哈希表,哈希表是字典一種實現
                        
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={hash_table_lookup} alt="哈希表" />
                                <Image src={hash_01} alt="hash_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第1題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/two-sum/description/" >Leetcode第1題</a>
                    </p>
                    <p>
                        <Image src={leetcode01} alt="leetcode01"/>
                    </p>
                </div>
              
                  {/*Leetcode第1207題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/unique-number-of-occurrences/" >Leetcode第1207題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode1207} alt="leetcode1027"/>
                                <Image src={newMap找數組} alt="newMap找數組" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                
                


            </div>

        </div>
    )
}

export default Tree 