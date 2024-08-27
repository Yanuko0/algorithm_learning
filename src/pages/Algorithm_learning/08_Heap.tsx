import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"


import leetcode_img from "@/pages/Algorithm_learning/assets/img/Leetcode/leetcode_img"

//堆圖解
import min_heap_and_max_heap from "./assets/img/圖解/堆/min_heap_and_max_heap.png"
import representation_of_heap from "./assets/img/圖解/堆/representation_of_heap.png"
import heap_pop_step1 from "./assets/img/圖解/堆/heap_pop_step1.png"
import heap_pop_step2 from "./assets/img/圖解/堆/heap_pop_step2.png"
import heap_pop_step3 from "./assets/img/圖解/堆/heap_pop_step3.png"
import heap_pop_step4 from "./assets/img/圖解/堆/heap_pop_step4.png"
import heap_pop_step5 from "./assets/img/圖解/堆/heap_pop_step5.png"
import heap_pop_step6 from "./assets/img/圖解/堆/heap_pop_step6.png"
import heap_pop_step7 from "./assets/img/圖解/堆/heap_pop_step7.png"
import heap_pop_step8 from "./assets/img/圖解/堆/heap_pop_step8.png"
import heap_pop_step9 from "./assets/img/圖解/堆/heap_pop_step9.png"
import heap_pop_step10 from "./assets/img/圖解/堆/heap_pop_step10.png"
import heap_push_step1 from "./assets/img/圖解/堆/heap_push_step1.png"
import heap_push_step2 from "./assets/img/圖解/堆/heap_push_step2.png"
import heap_push_step3 from "./assets/img/圖解/堆/heap_push_step3.png"
import heap_push_step4 from "./assets/img/圖解/堆/heap_push_step4.png"
import heap_push_step5 from "./assets/img/圖解/堆/heap_push_step5.png"
import heap_push_step6 from "./assets/img/圖解/堆/heap_push_step6.png"
import heap_push_step7 from "./assets/img/圖解/堆/heap_push_step7.png"
import heap_push_step8 from "./assets/img/圖解/堆/heap_push_step8.png"
import heap_push_step9 from "./assets/img/圖解/堆/heap_push_step9.png"



const Heap: React.FC = () => {
//  組成一個堆
//   6 5 4 3 2 1  ===>  [1,2,3,4,5,6]
    // 左: 2 * index + 1 
    // 右: 2 * index + 2 
    // 找父: ( index - 1 ) /2 

// 4 5 6 7 8 ===> [ 4, 5, 6, 7, 8 ]

// class MinHeap {
    
//     private heap: number[] = [];

//     constructor(){
//         this.heap = [];
//     }
//     //換位置
//     swap(i1: number, i2: number): void{
//         const temp = this.heap[i1];
//         this.heap[i1] = this.heap[i2];
//         this.heap[i2] = temp;
//     }
//     //找到父節點
//     getParentIndex( index: number ): number {
//         return Math.floor( (index - 1)/2 )
//     }
//     //上移操作(往前移動)
//     up (index: number) {
//         //如果是0就不移動了(如果一開始是0或是移動到了0)
//         if( index == 0 ) return;
//         const parentIndex = this.getParentIndex( index );
//         //如果父元素大于當前元素,就開始移動
//         if( this.heap[parentIndex] > this.heap[index]) {
//             this.swap( parentIndex , index );
//             this.up( parentIndex );
//         }
//     }
//     //獲取左側子節點
//     getLeftIndex( index: number ){
//         return index * 2 + 1;
//     }
//     //獲取右側子節點
//     getRightIndex( index: number ){
//         return index * 2 + 2;
//     }
//     //下移操作(往後移)
//     down( index: number ) {
//         const leftIndex = this.getLeftIndex( index );
//         const rightIndex = this.getRightIndex( index );
//         if( this.heap[leftIndex] < this.heap[index] ){
//             this.swap(leftIndex, index)
//             this.down( leftIndex )
//         }
//         if( this.heap[rightIndex] < this.heap[index] ){
//             this.swap(rightIndex, index)
//             this.down( rightIndex )
//         }
//     }
//     //添加元素
//     insert ( value:number ):void {
//         this.heap.push( value)
//         this.up( this.heap.length - 1)
//     }
//     //刪除堆頂
//     pop(){
//         this.heap[0] = this.heap.pop();
//         this.down( 0 );
//     }
//     //獲取堆頂
//     peek() {
//         return this.heap[0]
//     }
//     //獲取長度
//     size(){
//         return this.heap.length;
//     }

// }

// let arr = new MinHeap();
// arr.insert( 5 )
// arr.insert( 4 )
// arr.insert( 6 )
// arr.insert( 1 )
// arr.pop();

//針對元素做位置上的移動
// 假設要添加1進去, 要跟每一項做對比
// 或是添加8 就只跟9做對比或是在跟7比一下
// [1,4,5,6,7,9]

// console.log( arr )
// console.log( arr.size() );
// console.log( arr.peek() );


   
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                堆
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 介紹字典 */}
                <div className="diagrambox">
                    <p>
                        什麼是堆
                    </p>
                    <p>
                    一、堆都能用樹來表示,並且一班樹的實現都是利用鏈表<br />
                    而二元樹是一種特殊的堆,它用完全二元樹表示,卻可以利用樹組實現<br />
                    平時使用最多的是二元樹, 它可以用完全二元樹表示, 二叉堆易於存儲, 並且便于索引<br />
                    {/* 從根部出發,盡可能深的搜索樹的節點<br /> */}
                    堆數據結構像樹, 但是, 是通過樹組來實現 (不是通過鏈表:二叉堆)<br />
                    簡單來說就是把一堆數,弄成數組的結構,但是通過樹來表示,他不是鏈表而是數組.<br />
                    <br />
                    二、在堆的實現時, 需要注意: <br />
                    因為是數組, 所以父子節點的關係就不需要特殊的結構去維護,所以之間通過計算就可以得到,省掉了很多麻煩。如果鏈表結構,就會複雜很多; <br />
                    完全二叉樹要求葉子節點從左往右填滿, 才能開始填充下一層, 這就保證了不需要對樹組整體進行大片的移動。 這也是隨機儲存結構(數組)的短版:刪除一個元素之後, 整體往前移是比較費時的.這個特性也導致堆在刪除元素的時候, 要把最後一個葉子節點補充道樹根節點的緣由 <br /> 
                    左: 2 * index + 1 <br />
                    右: 2 * index + 2 <br />
                    找父: ( index - 1 ) /2 <br />
                    <br />
                                    
                        
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={min_heap_and_max_heap} alt="min_heap_and_max_heap"/>
                                <Image src={representation_of_heap} alt="representation_of_heap" style={{display:"none"}}/>
                                <Image src={heap_push_step1} alt="heap_push_step1" style={{display:"none"}} />
                                <Image src={heap_push_step2} alt="heap_push_step2" style={{display:"none"}} />
                                <Image src={heap_push_step3} alt="heap_push_step3" style={{display:"none"}} />
                                <Image src={heap_push_step4} alt="heap_push_step4" style={{display:"none"}} />
                                <Image src={heap_push_step5} alt="heap_push_step5" style={{display:"none"}} />
                                <Image src={heap_push_step6} alt="heap_push_step6" style={{display:"none"}} />
                                <Image src={heap_push_step7} alt="heap_push_step7" style={{display:"none"}} />
                                <Image src={heap_push_step8} alt="heap_push_step8" style={{display:"none"}} />
                                <Image src={heap_push_step9} alt="heap_push_step9" style={{display:"none"}} />
                                <Image src={heap_pop_step1} alt="heap_pop_step1" style={{display:"none"}} />
                                <Image src={heap_pop_step2} alt="heap_pop_step2" style={{display:"none"}} />
                                <Image src={heap_pop_step3} alt="heap_pop_step3" style={{display:"none"}} />
                                <Image src={heap_pop_step4} alt="heap_pop_step4" style={{display:"none"}} />
                                <Image src={heap_pop_step5} alt="heap_pop_step5" style={{display:"none"}} />
                                <Image src={heap_pop_step6} alt="heap_pop_step6" style={{display:"none"}} />
                                <Image src={heap_pop_step7} alt="heap_pop_step7" style={{display:"none"}} />
                                <Image src={heap_pop_step8} alt="heap_pop_step8" style={{display:"none"}} />
                                <Image src={heap_pop_step9} alt="heap_pop_step9" style={{display:"none"}} />
                                <Image src={heap_pop_step10} alt="heap_pop_step10" style={{display:"none"}} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第215題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/binary-tree-preorder-traversal/description/" >Leetcode第215題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode215} alt="leetcode215"/>
                                <Image src={leetcode_img.leetcode215_01} alt="leetcode215_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>        
            </div>
        </div>
    )
}

export default Heap