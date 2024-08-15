import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"

import leetcode144 from "./assets/img/Leetcode/leetcode144.png"
import leetcode144_01 from "./assets/img/Leetcode/leetcode144_01.png"
import leetcode94 from "./assets/img/Leetcode/leetcode94.png"
import leetcode94_01 from "./assets/img/Leetcode/leetcode94_01.png"
import leetcode145 from "./assets/img/Leetcode/leetcode145.png"
import leetcode111 from "./assets/img/Leetcode/leetcode111.png"
import leetcode104 from "./assets/img/Leetcode/leetcode104.png"
import leetcode226 from "./assets/img/Leetcode/leetcode226.png"
import leetcode100 from "./assets/img/Leetcode/leetcode100.png"


import tree_001 from "./assets/img/圖解/tree/tree_001.png"
//深度走訪圖
import binary_tree_dfs from "./assets/img/圖解/tree/binary_tree_dfs.png"
import binary_tree_bfs from "./assets/img/圖解/tree/binary_tree_bfs.png"
import preorder_step1 from "./assets/img/圖解/tree/preorder_step1.png"
import preorder_step2 from "./assets/img/圖解/tree/preorder_step2.png"
import preorder_step3 from "./assets/img/圖解/tree/preorder_step3.png"
import preorder_step4 from "./assets/img/圖解/tree/preorder_step4.png"
import preorder_step5 from "./assets/img/圖解/tree/preorder_step5.png"
import preorder_step6 from "./assets/img/圖解/tree/preorder_step6.png"
import preorder_step7 from "./assets/img/圖解/tree/preorder_step7.png"
import preorder_step8 from "./assets/img/圖解/tree/preorder_step8.png"
import preorder_step9 from "./assets/img/圖解/tree/preorder_step9.png"
import preorder_step10 from "./assets/img/圖解/tree/preorder_step10.png"
import preorder_step11 from "./assets/img/圖解/tree/preorder_step11.png"
import binary_search_tree from "./assets/img/圖解/tree/binary_search_tree.png"
import binary_tree_definition from "./assets/img/圖解/tree/binary_tree_definition.png"
import binary_tree_terminology from "./assets/img/圖解/tree/binary_tree_terminology.png"
import array_representation_binary_tree from "./assets/img/圖解/tree/array_representation_binary_tree.png"
import array_representation_complete_binary_tree from "./assets/img/圖解/tree/array_representation_complete_binary_tree.png"
//二元樹查詢
import bst_search_step1 from "./assets/img/圖解/tree/bst_search_step1.png"
import bst_search_step2 from "./assets/img/圖解/tree/bst_search_step2.png"
import bst_search_step3 from "./assets/img/圖解/tree/bst_search_step3.png"
import bst_search_step4 from "./assets/img/圖解/tree/bst_search_step4.png"
//二元樹刪除
import bst_remove_case3_step1 from "./assets/img/圖解/tree/bst_remove_case3_step1.png"
import bst_remove_case3_step2 from "./assets/img/圖解/tree/bst_remove_case3_step2.png"
import bst_remove_case3_step3 from "./assets/img/圖解/tree/bst_remove_case3_step3.png"
import bst_remove_case3_step4 from "./assets/img/圖解/tree/bst_remove_case3_step4.png"
//插入節點刪除節點
import bst_insert from "./assets/img/圖解/tree/bst_insert.png"
import bst_remove_case1 from "./assets/img/圖解/tree/bst_remove_case1.png"
import bst_remove_case2 from "./assets/img/圖解/tree/bst_remove_case2.png"





// 定義節點樹類型
// interface TreeNode {
//     val: string;
//     children: TreeNode[];
//   }


const Tree: React.FC = () => {

    
    //樹節點的數據
    // const tree: TreeNode = {
    //     val:'a',
    //     children: [
    //         {
    //             val:'b',
    //             children:[
    //                 { val:'d', children:[] },
    //                 { val:'e', children:[] }   
    //             ]
    //         },
    //         {
    //             val:'c',
    //             children:[
    //                 { val:'f', children:[] },
    //                 { val:'g', children:[] }   
    //             ]
    //         }
    //     ]
    // }

    // // //深度優先遍歷
    // const fun1 = (root: TreeNode) => {
    //     console.log( root.val )
    //     root.children.forEach( fun1 )
    // }
    // fun1(tree)

    //廣度優先遍歷
    // const fun2 = (root: TreeNode) => {
    //     const arr = [root];
    //     while(arr.length > 0 ) {
    //         const obj = arr.shift();
    //         console.log( obj?.val )
    //         obj?.children.forEach(item => {
    //             arr.push( item )
    //         })
    //     }
    // }
    // fun2(tree)

    //二元樹(二叉樹)
    // const tree = {
    //     val:'1',
    //     left:{
    //         val:'2',
    //         left:{val:'4',left:null,right:null},
    //         right:{val:'5',left:null,right:null},
    //     },
    //     right:{
    //         val:'3',
    //         left:{val:'6',left:null,right:null},
    //         right:{val:'7',left:null,right:null},
    //     }
    // }

    // const tree2 = {
    //     val:'1',
    //     left:{
    //         val:'2',
    //         left:{val:'4',left:null,right:null},
    //         right:{val:'5',left:null,right:null},
    //     },
    //     right:{
    //         val:'3',
    //         left:{val:'6',left:null,right:null},
    //         right:{val:'7',left:null,right:null},
    //     }
    // }

     //二元樹(二叉樹)
    //  const tree = {
    //     val:'1',
    //     children:[
    //         {val:'2',left:null,right:null},
    //         {val:'3',left:null,right:null},
    //         {val:'4',left:null,right:null},
    //                     ...
    //     ]
    // }
    
    
// 二元樹前序便利
// 根-->左-->右邊

 //遞迴方式
    // var preorderTraversal = function(root) {
    //     let arr = [];
    //     var fun = ( node ) => {
    //         if( node ){
    //             //先根結點
    //             arr.push( node.val )
    //             //遍歷左子樹
    //             fun( node.left) ;
    //             //遍歷右子樹
    //             fun( node.right );
    //         }
    //     } 
    //     fun( root );
    //     // arr.push( root.val )
    //     return arr; //[1,2,4,5,3,6,7]
    // };

    // console.log(preorderTraversal(tree))

    //入棧出棧
//     var preorderTraversal = function(root) {
//         if( !root ) return [];
//         let arr = [];
//         //根結點入棧
//         let stack = [root];
//         while( stack.length ) {
//             //出棧
//             let obj = stack.pop();
//             arr.push( obj.val )

//             obj.right && stack.push ( obj.right)
//             obj.left && stack.push ( obj.left)

//         }
//         return arr
//    };
//     console.log(preorderTraversal(tree))

//二元樹的中序遍歷
// 左->根->右
// var inorderTraversal = function(root) {
//遞迴
    // //1.因為要返回數組,先新建數組
    // const arr = [];
    // //3.因為是遞迴先建一個fun函數 傳入root
    // //這邊的root是傳入的大數據
    // const fun = (root) => {
    //     //5.如果沒有數據直接return
    //     if(!root) return;
    //     //6.找左子樹
    //     fun (root.left);
    //     //7.把樹組的根傳入
    //     arr.push (root.val);
    //     //8.找右子樹
    //     fun (root.right);
    // }
    // //4.調用
    // fun(root)
    // //2.返回數組
    // return arr;
// console.log(inorderTraversal( tree ))

// var inorderTraversal = function(root) {
//    //非遞迴
//     //1.創建數組
//     const arr = [];
//     // 2.新建一個棧
//     const stack = [];
//     // 3.把root賦直到變量上不斷進棧出棧
//     let obj = root;
//     //4.判斷棧內有沒有內容 以及 obj內有沒有東西
//     while(stack.length || obj) {
//         //5.如果有東西
//         while( obj ) {
//             //6.往棧內push obj進去
//             stack.push( obj );
//             //7.讓obj的 left進行賦值
//             obj = obj.left;
//         }
//         //8.讓它不段的出棧
//         const n = stack.pop();
//         //9.arrpush  n的值
//         arr.push( n.val );
//         obj = n.right
//     }
//     //2.返回樹組
//     return arr;
//    };
// console.log(inorderTraversal( tree ))

//    一開始stack.length為空的但obj存在
// 所以先來循環讓整格大對象進棧
//  obj = obj.left;會一直取道最左的節點 舉例例題為4得節點
// 然後最左的對象出棧並添加到arr數組裡面
// 然後再找右邊的節點不斷重複

// 二叉樹的後續遍歷
// 左->右->根

//遞迴版
// var postorderTraversal = function(root) {
//     const arr = [];
//     const fun = (node) => {
//         if(!node) return;
//         fun(node.left);
//         fun(node.right);
//         arr.push( node.val )
//     }
//     fun( root )
//     return arr;
// };
// console.log(postorderTraversal( tree ))

//非遞迴版
// var postorderTraversal = function(root) {
//     if( !root ) return []; 
//     let arr = [];
//     //1.一上來入棧是整個tree
//     let stack = [root];
//     //2.當裡面有就循環
//     while ( stack.length ) {
//         //3.讓整個出棧
//         const obj = stack.pop();
//         //4.unshift是把obj.val添加到樹組的開頭
//         arr.unshift( obj.val );
//         //5.obj如果有就往樹組裡面push一個left
//         obj.left && stack.push( obj.left )
//         obj.right && stack.push( obj.right )
//     }

//     return arr;
// };
// console.log(postorderTraversal( tree ))

//找最小深度
// var minDepth = function(root) {
//     //1.如果沒有直接返回0
//     if( !root ) return 0;
//     //2.如果有那它最少會有一個層級會為1
//     const stack = [[root,1]];
//     // 3.判斷length有沒有 如果有
//     while( stack.length ) {
//         //4.就讓他出去(shift會移出數組第一個元素)
//         const [obj,num] = stack.shift();
//         //5.判斷它有沒有左根右節點  這邊用!表如果沒有就直接return num
//         if( !obj.left && !obj.right){
//             return num
//         }
//         //6.如果有代表它一定有第二級就讓它num+1 只要左或右沒有了就返回num
//         if( obj.left ) stack.push( [obj.left, num + 1])
//         if( obj.right ) stack.push( [obj.right, num + 1])
//     }
// };
// console.log(minDepth ( tree ))

// var maxDepth = function(root) {
//     if(!root) return 0;
//     //1.建立一個棧來添加內容
//     const stack = [root];
//     //2.一個num來記錄層級
//     let num = 0;
//     //3.棧裡面如果有值
//     while( stack.length) {
//         //5.紀錄stack.length
//         let len = stack.length
//         //4.就讓它不斷循環 值+1
//         num++;
//         //6.當它出棧就不斷--
//         while( len-- ){
//             //7.讓之前的內容出棧,這邊要用shift
//             const o = stack.shift();
//             //判斷o.left有沒有 如果有就push
//             o.left && stack.push( o.left );
//             o.right && stack.push( o.right );
//         }
//     }
//     return num;
// };

// console.log(maxDepth ( tree ))

//翻轉二元數
// var invertTree = function(root) {
//     //如果沒有直接return
//     if( root == null ) return null;
//     //創一個變量存儲其中一邊,讓兩個數交換位置
//     let tmp = root.left;
//     root.left = root.right;
//     root.right = tmp

//     invertTree(root.left);
//     invertTree(root.right);

//     return root;

// };
// console.log(invertTree ( tree ))

//相同的樹

// var isSameTree = function(p, q) {
//     // 1.判斷兩個樹是不是都等於null 如果是直接返回 true
//     if( p === null && q === null ) return true;
//      // 2.判斷兩個樹是否其中一個為null 如果是直接返回 false
//     if( p === null || q === null ) return false;
//     //判斷他們的節點有沒有相等 不相等就返回false
//     if( p.val !== q.val ) return false;
//     // 如果他們值相同就不斷遞迴把值傳入,往下去找
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };
// console.log(isSameTree ( tree, tree2 ))
   
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
                    一、深度優先搜索(遍歷)<br />
                    從根部出發,盡可能深的搜索樹的節點<br />
                        技巧:<br />
                            1.訪問根結點<br />
                            2.對根結點的children挨各進行深度優先遍歷<br />

                    二、廣度優先搜索(遍歷)<br />
                    從根出發,優先訪問離根結點最近的節點<br />
                    技巧:<br />
                            1.新建一個對列,把根節點入隊
                            2.把隊頭出隊
                            3.把隊頭的children挨個入隊
                            4.重複2和3, 直到隊列為空為止
                        
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={binary_tree_dfs} alt="深度走訪" />
                                <Image src={binary_tree_bfs} alt="廣度走訪" style={{display:"none"}}/>
                                <Image src={tree_001} alt="樹的遍歷" style={{display:"none"}} />
                                <Image src={preorder_step1} alt="preorder_step1" style={{display:"none"}} />
                                <Image src={preorder_step2} alt="preorder_step2" style={{display:"none"}} />
                                <Image src={preorder_step3} alt="preorder_step3" style={{display:"none"}} />
                                <Image src={preorder_step4} alt="preorder_step4" style={{display:"none"}} />
                                <Image src={preorder_step5} alt="preorder_step5" style={{display:"none"}} />
                                <Image src={preorder_step6} alt="preorder_step6" style={{display:"none"}} />
                                <Image src={preorder_step7} alt="preorder_step7" style={{display:"none"}} />
                                <Image src={preorder_step8} alt="preorder_step8" style={{display:"none"}} />
                                <Image src={preorder_step9} alt="preorder_step9" style={{display:"none"}} />
                                <Image src={preorder_step10} alt="preorder_step10" style={{display:"none"}} />
                                <Image src={preorder_step11} alt="preorder_step11" style={{display:"none"}} />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                <div className="diagrambox">
                    <p>
                        二元樹、多元樹
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={binary_search_tree} alt="二元搜尋樹" />
                                <Image src={binary_tree_definition} alt="binary_tree_definition" style={{display:"none"}}/>
                                <Image src={binary_tree_terminology} alt="binary_tree_terminology" style={{display:"none"}}/>
                                <Image src={array_representation_binary_tree} alt="array_representation_binary_tree" style={{display:"none"}}/>
                                <Image src={array_representation_complete_binary_tree} alt="array_representation_complete_binary_tree" style={{display:"none"}}/>
                                <Image src={bst_search_step1} alt="bst_search_step1" style={{display:"none"}}/>
                                <Image src={bst_search_step2} alt="bst_search_step2" style={{display:"none"}}/>
                                <Image src={bst_search_step3} alt="bst_search_step3" style={{display:"none"}}/>
                                <Image src={bst_search_step4} alt="bst_search_step4" style={{display:"none"}}/>
                                <Image src={bst_remove_case3_step1} alt="bst_remove_case3_step1" style={{display:"none"}}/>
                                <Image src={bst_remove_case3_step2} alt="bst_remove_case3_step2" style={{display:"none"}}/>
                                <Image src={bst_remove_case3_step3} alt="bst_remove_case3_step3" style={{display:"none"}}/>
                                <Image src={bst_remove_case3_step4} alt="bst_remove_case3_step4" style={{display:"none"}}/>
                                <Image src={bst_insert} alt="bst_insert" style={{display:"none"}}/>
                                <Image src={bst_remove_case1} alt="bst_remove_case1" style={{display:"none"}}/>
                                <Image src={bst_remove_case2} alt="bst_remove_case2" style={{display:"none"}}/>
                    
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第144題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/binary-tree-preorder-traversal/description/" >Leetcode第144題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode144} alt="leetcode144"/>
                                <Image src={leetcode144_01} alt="leetcode144_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>        
                  {/*Leetcode第94題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/binary-tree-inorder-traversal/description/" >Leetcode第94題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode94} alt="leetcode94"/>
                                <Image src={leetcode94_01} alt="leetcode94_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第145題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/binary-tree-inorder-traversal/description/" >Leetcode第145題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode145} alt="leetcode145"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*Leetcode第111題*/}
                 <div>
                    <p>
                        <a href="https://leetcode.com/problems/minimum-depth-of-binary-tree/description/" >Leetcode第111題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode111} alt="leetcode111"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第104題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" >Leetcode第104題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode104} alt="leetcode104"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第226題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/invert-binary-tree/" >Leetcode第226題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode226} alt="leetcode226"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*Leetcode第100題*/}
                 <div>
                    <p>
                        <a href="https://leetcode.com/problems/same-tree/description/" >Leetcode第100題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode100} alt="leetcode100"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tree 