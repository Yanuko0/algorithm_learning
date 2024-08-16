import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"

//堆圖解
import search_img from "./assets/img/圖解/search/search_img"
// 排序
import sorting_examples from "./assets/img/圖解/sort/sorting_examples.png"
//排序圖
import sort_img from "./assets/img/圖解/sort/sort_img"






const Algorithm: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                算法
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 介紹字典 */}
                <div className="diagrambox">
                    <p>
                        算法
                    </p>
                    <p>
                        排序:冒泡排序、快速排序、插入排序...<br />
                        搜索:二分搜索、順序搜索...<br /><br />
                        <a href="https://visualgo.net/zh">練習工具</a>
                    </p>
                </div>
                {/* 搜索 */}
                <div className="diagrambox">
                    <p>
                        搜索
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={search_img.searching_algorithms} alt="searching_algorithms" />
                                <Image src={search_img.binary_search_example} alt="binary_search_example" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step1} alt="binary_search_step1" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step2} alt="binary_search_step2" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step3} alt="binary_search_step3" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step4} alt="binary_search_step4" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step5} alt="binary_search_step5" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step6} alt="binary_search_step6" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_step7} alt="binary_search_step7" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_ranges} alt="binary_search_ranges" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_example} alt="binary_search_insertion_example" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_naive} alt="binary_search_insertion_naive" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step1} alt="binary_search_insertion_step1" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step2} alt="binary_search_insertion_step2" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step3} alt="binary_search_insertion_step3" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step4} alt="binary_search_insertion_step4" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step5} alt="binary_search_insertion_step5" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step6} alt="binary_search_insertion_step6" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step7} alt="binary_search_insertion_step7" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_insertion_step8} alt="binary_search_insertion_step8" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_right_edge_by_left_edge} alt="binary_search_right_edge_by_left_edge" style={{ display: "none" }} />
                                <Image src={search_img.binary_search_edge_by_element} alt="binary_search_edge_by_element" style={{ display: "none" }} />
                                <Image src={search_img.two_sum_brute_force} alt="two_sum_brute_force" style={{ display: "none" }} />
                                <Image src={search_img.two_sum_hashtable_step1} alt="two_sum_hashtable_step1" style={{ display: "none" }} />
                                <Image src={search_img.two_sum_hashtable_step2} alt="two_sum_hashtable_step2" style={{ display: "none" }} />
                                <Image src={search_img.two_sum_hashtable_step3} alt="two_sum_hashtable_step3" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 排序 */}
                <div className="diagrambox">
                    <p>
                        排序
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sorting_examples} alt="sorting_examples" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>

            </div>
            <br />
            <div className="Detailed_introduction">
                {/*選擇排序*/}
                <div>
                    <p>
                        選擇排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.selection_sort_img.selection_sort_step1} alt="selection_sort_step1" />
                                <Image src={sort_img.selection_sort_img.selection_sort_step2} alt="selection_sort_step2" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step3} alt="selection_sort_step3" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step4} alt="selection_sort_step4" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step5} alt="selection_sort_step5" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step6} alt="selection_sort_step6" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step7} alt="selection_sort_step7" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step8} alt="selection_sort_step8" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step9} alt="selection_sort_step9" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step10} alt="selection_sort_step10" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_step11} alt="selection_sort_step11" style={{ display: "none" }} />
                                <Image src={sort_img.selection_sort_img.selection_sort_instability} alt="selection_sort_instability" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 氣泡排序 */}
                <div>
                    <p>
                        氣泡排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step1} alt="bubble_operation_step1" />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step2} alt="bubble_operation_step2" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step3} alt="bubble_operation_step3" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step4} alt="bubble_operation_step4" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step5} alt="bubble_operation_step5" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step6} alt="bubble_operation_step6" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_operation_step7} alt="bubble_operation_step7" style={{ display: "none" }} />
                                <Image src={sort_img.bubble_sort_img.bubble_sort_overview} alt="bubble_sort_overview" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 插入排序 */}
                <div>
                    <p>
                        插入排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.insertion_sort_img.insertion_operation} alt="insertion_operation" />
                                <Image src={sort_img.insertion_sort_img.insertion_sort_overview} alt="insertion_sort_overview" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 快速排序 */}
                <div>
                    <p>
                        快速排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.quick_sort_img.pivot_division_step1} alt="pivot_division_step1" />
                                <Image src={sort_img.quick_sort_img.pivot_division_step2} alt="pivot_division_step2" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step3} alt="pivot_division_step3" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step4} alt="pivot_division_step4" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step5} alt="pivot_division_step5" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step6} alt="pivot_division_step6" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step7} alt="pivot_division_step7" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step8} alt="pivot_division_step8" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.pivot_division_step9} alt="pivot_division_step9" style={{ display: "none" }} />
                                <Image src={sort_img.quick_sort_img.quick_sort_overview} alt="quick_sort_overview" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 合併排序 */}
                <div>
                    <p>
                        合併排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.merge_sort_img.merge_sort_overview} alt="merge_sort_overview" />
                                <Image src={sort_img.merge_sort_img.merge_sort_step1} alt="merge_sort_step1" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step2} alt="merge_sort_step2" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step3} alt="merge_sort_step3" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step4} alt="merge_sort_step4" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step5} alt="merge_sort_step5" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step6} alt="merge_sort_step6" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step7} alt="merge_sort_step7" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step8} alt="merge_sort_step8" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_step9} alt="merge_sort_step9" style={{ display: "none" }} />
                                <Image src={sort_img.merge_sort_img.merge_sort_overview} alt="merge_sort_overview" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            <div className="Detailed_introduction">
                {/* 堆積排序 */}
                <div>
                    <p>
                        堆積排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.stack_sort_img.heap_sort_step1} alt="heap_sort_step1" />
                                <Image src={sort_img.stack_sort_img.heap_sort_step2} alt="heap_sort_step2" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step3} alt="heap_sort_step3" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step4} alt="heap_sort_step4" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step5} alt="heap_sort_step5" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step6} alt="heap_sort_step6" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step7} alt="heap_sort_step7" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step8} alt="heap_sort_step8" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step9} alt="heap_sort_step9" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step10} alt="heap_sort_step10" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step11} alt="heap_sort_step11" style={{ display: "none" }} />
                                <Image src={sort_img.stack_sort_img.heap_sort_step12} alt="heap_sort_step12" style={{ display: "none" }} />
                       

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 桶排序 */}
                <div>
                    <p>
                        桶排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.bucket_sort_img.bucket_sort_overview} alt="bucket_sort_overview" />
                                <Image src={sort_img.bucket_sort_img.scatter_in_buckets_recursively} alt="scatter_in_buckets_recursively" style={{ display: "none" }}/>
                                <Image src={sort_img.bucket_sort_img.scatter_in_buckets_distribution} alt="scatter_in_buckets_distribution" style={{ display: "none" }}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 計數排序 */}
                <div>
                    <p>
                        計數排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.counting_sort_img.counting_sort_overview} alt="counting_sort_overview" />
                                <Image src={sort_img.counting_sort_img.counting_sort_step1} alt="counting_sort_step1" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step2} alt="counting_sort_step2" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step3} alt="counting_sort_step3" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step4} alt="counting_sort_step4" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step5} alt="counting_sort_step5" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step6} alt="counting_sort_step6" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step7} alt="counting_sort_step7" style={{ display: "none" }}/>
                                <Image src={sort_img.counting_sort_img.counting_sort_step8} alt="counting_sort_step8" style={{ display: "none" }}/>               
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 基數排序 */}
                <div>
                    <p>
                        基數排序
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={sort_img.radix_sort_img.radix_sort_overview} alt="counting_sort_overview" />             
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第215題*/}
                {/* <div>
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
                                <Image src={leetcode215} alt="leetcode215" />
                                <Image src={leetcode215_01} alt="leetcode215_01" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Algorithm