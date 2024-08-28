import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"


import leetcode_img from "@/pages/Algorithm_learning/assets/img/Leetcode/leetcode_img"

import greedy_algorithm_img from "@/pages/Algorithm_learning/assets/img/圖解/greedy_algorithm/greedy_algorithm_img"



const Greedy_Algorithm: React.FC = () => {

    // 零錢兌換
    // 1,2,5錢
    // 5+5+1  3 貪心算法

    // 1,3,4   6
    // 4+1+1   3  貪心算法
    // 3+3     2  全局最優

    // 跳躍遊戲
    // [1,2,3,4,5,6,10,7]


    // leetcode 55題
    // var canJump = function(nums) {

    //     //初始條件
    //     let cover = 0;
    //     for( let i = 0; i < nums.length; i++) {
    //         if ( i <= cover ) {
    //             cover = Math.max( nums[i] + i, cover);
    //             if( cover >= nums.length -1) {
    //                 return true
    //             }
    //         }
    //     }
    //     return false;
    // };

    // console.log( canJump[2,3,1,1,4] )

    // leetcode455

    // var findContentChildren = function(g, s) {
    //     //g 代表孩子的胃口
    //     //s 代表餅乾的尺寸
    //     let arr = g.sort((a,b) => {
    //         return a-b;
    //     })
    //     let brr = s.sort((a,b) => {
    //         return a-b;
    //     })

    //     console.log(arr, brr)
    //     //初始值
    //     let num = 0;
    //     //遍歷餅乾尺寸的數組
    //     s.forEach( val=>{
    //         if( val >= arr[num]){
    //             num++;
    //         }
    //     })

    //     return num;

    // };

    // console.log( findContentChildren([1,2], [1,2,3]))

    // leetcode 122 買賣股票最佳時機

    // var maxProfit = function(prices) {
    
    //     let num = 0 ;
    //     for( let i = 1; i < prices.length; i++) {
    //         if( prices[i] > prices[i-1] ) {
    //             num += prices[i] - prices[i-1];
    //         }
    //     }
    //     return num;
    // };

    // //如果當前天的價格比前一天大,那就賣掉 + num獲得利潤
    // // 如果沒有比它大就不用進行操作

    // console.log( maxProfit([7,1,5,3,6,4]))


    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                貪心算法
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 介紹字典 */}
                <div className="diagrambox">
                    <p>
                        又稱為貪婪算法
                    </p>
                    <p>
                        是指,在對問題求解時,總是做出在當前看來最好的選擇, 也就是說,不從整體最優上加以考慮,算法得到的是在某種意義上的局部最優解。<br />
                        {/* 從根部出發,盡可能深的搜索樹的節點<br /> */}



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
                {/*零錢兌換*/}
                <div>
                    <p>
                        零錢兌換
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.coin_change_greedy_strategy} alt="coin_change_greedy_strategy" />
                                <Image src={greedy_algorithm_img.coin_change_greedy_vs_dp} alt="coin_change_greedy_vs_dp" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*分數背包問題*/}
                <div>
                    <p>
                        分數背包問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.fractional_knapsack_example} alt="fractional_knapsack_example" />
                                <Image src={greedy_algorithm_img.fractional_knapsack_unit_value} alt="fractional_knapsack_unit_value" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.fractional_knapsack_greedy_strategy} alt="fractional_knapsack_greedy_strategy" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.fractional_knapsack_area_chart} alt="fractional_knapsack_area_chart" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            <div className="Detailed_introduction">
                {/* 最大容量問題*/}
                <div>
                    <p>
                        最大容量問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_capacity_example} alt="max_capacity_example" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*貪婪策略確定*/}
                <div>
                    <p>
                        貪婪策略確定
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_capacity_initial_state} alt="max_capacity_initial_state" />
                                <Image src={greedy_algorithm_img.max_capacity_moving_long_board} alt="max_capacity_moving_long_board" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_moving_short_board} alt="max_capacity_moving_short_board" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*貪婪策略執行過程*/}
                <div>
                    <p>
                        貪婪策略執行過程
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step1} alt="max_capacity_greedy_step1" />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step2} alt="max_capacity_greedy_step2" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step3} alt="max_capacity_greedy_step3" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step4} alt="max_capacity_greedy_step4" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step5} alt="max_capacity_greedy_step5" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step6} alt="max_capacity_greedy_step6" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step7} alt="max_capacity_greedy_step7" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step8} alt="max_capacity_greedy_step8" style={{ display: "none" }} />
                                <Image src={greedy_algorithm_img.max_capacity_greedy_step9} alt="max_capacity_greedy_step9" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*正確性證明*/}
                <div>
                    <p>
                        正確性證明
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_capacity_skipped_states} alt="max_capacity_skipped_states" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            <br />
            <div className="Detailed_introduction">
                {/* 最大切分乘積問題*/}
                <div>
                    <p>
                        最大切分乘積問題
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_product_cutting_definition} alt="max_product_cutting_definition" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*貪婪策略確定*/}
                <div>
                    <p>
                        貪婪策略一
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_product_cutting_greedy_infer1} alt="max_product_cutting_greedy_infer1" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*貪婪策略執行過程*/}
                <div>
                    <p>
                        貪婪策略二
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_product_cutting_greedy_infer2} alt="max_product_cutting_greedy_infer2" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*程式碼實現*/}
                <div>
                    <p>
                        程式碼實現
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={greedy_algorithm_img.max_product_cutting_greedy_calculation} alt="max_product_cutting_greedy_calculation" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>

            <br />


            {/* leetcode題 */}

            <div className="Detailed_introduction">
                {/*Leetcode第55題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/jump-game/description/" >Leetcode第55題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode55} alt="leetcode55" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第455題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/assign-cookies/description/" >Leetcode第455題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode455} alt="leetcode455" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第122題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/" >Leetcode第122題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode122} alt="leetcode122" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                

            </div>

        </div>
    )
}

export default Greedy_Algorithm