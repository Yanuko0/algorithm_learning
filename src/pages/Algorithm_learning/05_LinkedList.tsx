import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"
import linkedList from "./assets/img/圖解/linkedlist_definition.png"
import linkedList_types from "./assets/img/圖解/linkedlist_common_types.png"
import linkedlist_insert_node from "./assets/img/圖解/linkedlist_insert_node.png"
import linkedlist_remove_node from "./assets/img/圖解/linkedlist_remove_node.png"
import 鏈表插入刪除 from "./assets/img/解說/鏈表插入刪除.png"
import instanceof實現 from "./assets/img/解說/instanceof實現.png"
import linkedistCommentary from "./assets/img/解說/linkedist_解說.png"

import leetcode_img from "@/pages/Algorithm_learning/assets/img/Leetcode/leetcode_img"

// interface ListNode {
//     key: string;
//     next?: ListNode; // next is optional because it could be the end of the list
// }

const LinkedList: React.FC = () => {
//---instanceof解說
//   const instanceofs = (target: object, obj: Function): boolean => {
//         let p: object | null = target;
//         while( p ) {
//             if( p == obj.prototype ) {
//                 return true
//             }
//             // p = p.__proto__;
//             p = Object.getPrototypeOf(p);
//         }
//         return false;
//     }
//     console.log( instanceofs([ 1, 2, 3 ], Array))  //true

// ---鏈表插入刪除
// const a: ListNode = {key: 'a' }
// const b: ListNode = {key: 'b' }
// const c: ListNode = {key: 'c' }
// const d: ListNode = {key: 'd' }

// a.next = b;
// b.next = c;

// //遍歷鏈表
// let obj: ListNode | undefined = a;
// while( obj && obj.key) {
//     console.log( obj.key);
//     obj = obj.next;
// }
// console.log(a)

// //鏈表中插入某元素
// let m: ListNode = {key:'mmmm'};
// c.next = m;
// m.next = d;
// console.log(a)

// //刪除操作<br />
// c.next = d;

// console.log (a)

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                鏈表(鏈結串列)
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 圖解 */}
                <div className="diagrambox">
                    <p>
                        圖解
                    </p>
                    <p className="diagram">
                        <Image src={linkedList} alt="棧圖" />
                    </p>
                </div>
                {/* 介紹 */}
                <div>
                    <p>
                        什麼是鏈表
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
                        console.log(a)<br />
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={linkedistCommentary} alt="鏈表解說" height={100} />
                                <Image src={linkedlist_insert_node} alt="鏈表新增" height={100} />
                                <Image src={linkedlist_remove_node} alt="鏈表移除" height={100} />
                                <Image src={instanceof實現} alt="instanceof實現" height={100} />
                                <Image src={鏈表插入刪除} alt="鏈表插入刪除" height={100} />
                            </Image.PreviewGroup>
                        </div>
                        ***js中的原型鏈,原理就是鏈表結構<br /><br />
                    </p>

                </div>
                <div className="diagrambox">
                    <p>
                        鏈表和數組的區別
                    </p>
                    <p>
                        1.數組:有序存儲的, 在中間某位置刪除或者添加某元素, 其它元素要跟著動<br />
                        2.鏈表:元素在內存中不是順序存儲的,而是通過next指針連繫在一起<br />
                        鏈表又分為單項鏈表、環形鏈表
                    </p>
                    <p className="diagram">
                        <Image src={linkedList_types} alt="棧圖" />
                    </p>
                </div>


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第141題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/linked-list-cycle/description/" >Leetcode第141題</a>
                    </p>
                    <div>
                        <Image src={leetcode_img.leetcode141} alt="leetcode141"/>
                    </div>
                </div>
                {/*Leetcode第237題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/delete-node-in-a-linked-list/description/" >Leetcode第237題</a>
                    </p>
                    <p>
                        <Image src={leetcode_img.leetcode237} alt="leetcode237"/>
                    </p>
                </div>
                 {/*Leetcode第83題*/}
                 <div>
                    <p>
                        <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/" >Leetcode第83題</a>
                    </p>
                    <p>
                        <Image src={leetcode_img.leetcode83} alt="leetcode83"/>
                    </p>
                </div>
                  {/*Leetcode第206題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/reverse-linked-list/" >Leetcode第206題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode206} alt="leetcode206"/>
                                <Image src={leetcode_img.leetcode206_1} alt="leetcode206_1" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                


            </div>

        </div>
    )
}

export default LinkedList 