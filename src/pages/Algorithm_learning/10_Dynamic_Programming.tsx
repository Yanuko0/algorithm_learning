import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"


import leetcode_img from "@/pages/Algorithm_learning/assets/img/Leetcode/leetcode_img"

import dynamic_programming_img from "@/pages/Algorithm_learning/assets/img/圖解/dynamic_programming/dynamic_programming_img"



const Dynamic_Programming: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                動態規劃
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
                    {/* <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={min_heap_and_max_heap} alt="min_heap_and_max_heap"/>
                                <Image src={representation_of_heap} alt="representation_of_heap" style={{display:"none"}}/>
                             
                            </Image.PreviewGroup>
                        </div>
                    </p> */}
                </div>
                


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*爬樓梯暴力搜尋*/}
                <div>
                    <p>
                        爬樓梯-暴力搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.climbing_stairs_example} alt="climbing_stairs_example" />
                                <Image src={dynamic_programming_img.climbing_stairs_state_transfer} alt="climbing_stairs_state_transfer" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.climbing_stairs_dfs_tree} alt="climbing_stairs_dfs_tree" style={{ display: "none" }} />
                              
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*爬樓梯記憶畫搜尋*/}
                 <div>
                    <p>
                        爬樓梯-記憶化搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.climbing_stairs_dfs_memo_tree} alt="climbing_stairs_dfs_memo_tree" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*動態規劃*/}
                <div>
                    <p>
                        動態規劃
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.climbing_stairs_dp} alt="climbing_stairs_dp" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>              
            </div>
            <div className="Detailed_introduction">
                {/* DP問題特性-最優子結構*/}
                <div>
                    <p>
                        DP問題特性-最優子結構
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.min_cost_cs_example} alt="min_cost_cs_example" />
                                <Image src={dynamic_programming_img.min_cost_cs_dp} alt="min_cost_cs_dp" style={{ display: "none" }} />
                             
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*DP問題特性-無後效性*/}
                 <div>
                    <p>
                        DP問題特性-無後效性
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.climbing_stairs_constraint_example} alt="climbing_stairs_constraint_example" />
                                <Image src={dynamic_programming_img.climbing_stairs_constraint_state_transfer} alt="climbing_stairs_constraint_state_transfer" style={{ display: "none" }} />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>           
            </div>
            <br/>
            <div className="Detailed_introduction">
                {/*解題思路問題求解步驟*/}
                <div>
                    <p>
                        DP解題思路
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.min_path_sum_example} alt="min_path_sum_example" />
                                <Image src={dynamic_programming_img.min_path_sum_solution_state_definition} alt="min_path_sum_solution_state_definition" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_solution_state_transition} alt="min_path_sum_solution_state_transition" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_solution_initial_state} alt="min_path_sum_solution_initial_state" style={{ display: "none" }} />
                              
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*方法1暴力搜尋*/}
                 <div>
                    <p>
                        方法1.暴力搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.min_path_sum_dfs} alt="min_path_sum_dfs" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*方法2記憶化搜尋*/}
                <div>
                    <p>
                        方法2.記憶化搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.min_path_sum_dfs_mem} alt="min_path_sum_dfs_mem" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*方法3動態規劃*/}
                 <div>
                    <p>
                        方法3.動態規劃
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.min_path_sum_dp_step1} alt="min_path_sum_dp_step1" />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step2} alt="min_path_sum_dp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step3} alt="min_path_sum_dp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step4} alt="min_path_sum_dp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step5} alt="min_path_sum_dp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step6} alt="min_path_sum_dp_step6" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step7} alt="min_path_sum_dp_step7" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step8} alt="min_path_sum_dp_step8" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step9} alt="min_path_sum_dp_step9" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step10} alt="min_path_sum_dp_step10" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step11} alt="min_path_sum_dp_step11" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.min_path_sum_dp_step12} alt="min_path_sum_dp_step12" style={{ display: "none" }} />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>               
            </div>
            <br/>
            <div className="Detailed_introduction">
                {/*背包問題*/}
                <div>
                    <p>
                    背包問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.knapsack_example} alt="knapsack_example" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*方法1暴力搜尋*/}
                 <div>
                    <p>
                        方法1.暴力搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.knapsack_dfs} alt="knapsack_dfs" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*方法2記憶化搜尋*/}
                <div>
                    <p>
                        方法2.記憶化搜尋
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.knapsack_dfs_mem} alt="knapsack_dfs_mem" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*方法3動態規劃*/}
                 <div>
                    <p>
                        方法3.動態規劃
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.knapsack_dp_step1} alt="knapsack_dp_step1" />
                                <Image src={dynamic_programming_img.knapsack_dp_step2} alt="knapsack_dp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step3} alt="knapsack_dp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step4} alt="knapsack_dp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step5} alt="knapsack_dp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step6} alt="knapsack_dp_step6" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step7} alt="knapsack_dp_step7" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step8} alt="knapsack_dp_step8" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step9} alt="knapsack_dp_step9" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step10} alt="knapsack_dp_step10" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step11} alt="knapsack_dp_step11" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step12} alt="knapsack_dp_step12" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step13} alt="knapsack_dp_step13" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_step14} alt="knapsack_dp_step14" style={{ display: "none" }} />
                               
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
                 {/*方法4空間最佳化*/}
                 <div>
                    <p>
                        方法4.空間最佳化
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step1} alt="knapsack_dp_comp_step1" />
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step2} alt="knapsack_dp_comp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step3} alt="knapsack_dp_comp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step4} alt="knapsack_dp_comp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step5} alt="knapsack_dp_comp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.knapsack_dp_comp_step6} alt="knapsack_dp_comp_step6" style={{ display: "none" }} />
                           
                               
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>           
            </div>
            <div className="Detailed_introduction">
                {/*完全背包問題*/}
                <div>
                    <p>
                    完全背包問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.unbounded_knapsack_example} alt="unbounded_knapsack_example" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*方法1空間最佳化*/}
                 <div>
                    <p>
                        空間最佳化
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step1} alt="unbounded_knapsack_dp_comp_step1" />
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step2} alt="unbounded_knapsack_dp_comp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step3} alt="unbounded_knapsack_dp_comp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step4} alt="unbounded_knapsack_dp_comp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step5} alt="unbounded_knapsack_dp_comp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.unbounded_knapsack_dp_comp_step6} alt="unbounded_knapsack_dp_comp_step6" style={{ display: "none" }} />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*零錢兌換問題*/}
                <div>
                    <p>
                        零錢兌換問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_example} alt="coin_change_example" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*動態規劃思路*/}
                 <div>
                    <p>
                        動態規劃思路
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_dp_step1} alt="coin_change_dp_step1" />
                                <Image src={dynamic_programming_img.coin_change_dp_step2} alt="coin_change_dp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step3} alt="coin_change_dp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step4} alt="coin_change_dp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step5} alt="coin_change_dp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step6} alt="coin_change_dp_step6" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step7} alt="coin_change_dp_step7" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step8} alt="coin_change_dp_step8" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step9} alt="coin_change_dp_step9" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step10} alt="coin_change_dp_step10" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step11} alt="coin_change_dp_step11" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step12} alt="coin_change_dp_step12" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step13} alt="coin_change_dp_step13" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step14} alt="coin_change_dp_step14" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step15} alt="coin_change_dp_step15" style={{ display: "none" }} />
                               
                               
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
                 {/*零錢兌換問題2*/}
                 <div>
                    <p>
                        零錢兌換問題2
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_ii_example} alt="coin_change_ii_example" />
                              
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>           
            </div>
            <div className="Detailed_introduction">
                {/*編輯距離問題*/}
                <div>
                    <p>
                    編輯距離問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.edit_distance_example} alt="edit_distance_example" />
                                <Image src={dynamic_programming_img.edit_distance_decision_tree} alt="edit_distance_decision_tree" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*動態規劃思路*/}
                 <div>
                    <p>
                        動態規劃思路
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.edit_distance_state_transfer} alt="edit_distance_state_transfer" />
                                <Image src={dynamic_programming_img.edit_distance_dp_step1} alt="edit_distance_dp_step1" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step2} alt="edit_distance_dp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step3} alt="edit_distance_dp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step4} alt="edit_distance_dp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step5} alt="edit_distance_dp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step6} alt="edit_distance_dp_step6" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step7} alt="edit_distance_dp_step7" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step8} alt="edit_distance_dp_step8" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step9} alt="edit_distance_dp_step9" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step10} alt="edit_distance_dp_step10" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step11} alt="edit_distance_dp_step11" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step12} alt="edit_distance_dp_step12" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step13} alt="edit_distance_dp_step13" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step14} alt="edit_distance_dp_step14" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.edit_distance_dp_step15} alt="edit_distance_dp_step15" style={{ display: "none" }} />
                                
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*零錢兌換問題*/}
                <div>
                    <p>
                        零錢兌換問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_example} alt="coin_change_example" />
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                 {/*動態規劃思路*/}
                 <div>
                    <p>
                        動態規劃思路
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_dp_step1} alt="coin_change_dp_step1" />
                                <Image src={dynamic_programming_img.coin_change_dp_step2} alt="coin_change_dp_step2" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step3} alt="coin_change_dp_step3" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step4} alt="coin_change_dp_step4" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step5} alt="coin_change_dp_step5" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step6} alt="coin_change_dp_step6" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step7} alt="coin_change_dp_step7" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step8} alt="coin_change_dp_step8" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step9} alt="coin_change_dp_step9" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step10} alt="coin_change_dp_step10" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step11} alt="coin_change_dp_step11" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step12} alt="coin_change_dp_step12" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step13} alt="coin_change_dp_step13" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step14} alt="coin_change_dp_step14" style={{ display: "none" }} />
                                <Image src={dynamic_programming_img.coin_change_dp_step15} alt="coin_change_dp_step15" style={{ display: "none" }} />
                               
                               
                               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
                 {/*零錢兌換問題2*/}
                 <div>
                    <p>
                        零錢兌換問題2
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={dynamic_programming_img.coin_change_ii_example} alt="coin_change_ii_example" />
                              
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>           
            </div>


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

export default Dynamic_Programming