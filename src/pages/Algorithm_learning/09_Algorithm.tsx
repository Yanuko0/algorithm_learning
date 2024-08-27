import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"

//堆圖解
import search_img from "./assets/img/圖解/search/search_img"
// 排序
import sorting_examples from "./assets/img/圖解/sort/sorting_examples.png"
//排序圖
import sort_img from "./assets/img/圖解/sort/sort_img"
//leetcode圖解
import leetcode_img from "@/pages/Algorithm_learning/assets/img/Leetcode/leetcode_img"


const Algorithm: React.FC = () => {


    // 冒泡排序 時間空間複雜度都是n的二次方
    // function arrSort( arr ) {

    //     for( let i = 0 ; i < arr.length - 1; i++) {
    //         for( let j = 0; j < arr.length-1-i; j++) {
    //             if( arr[j] > arr[j+1]) {
    //                 let temp = arr[j];
    //                 arr[j] = arr[j+1];
    //                 arr[j+1] = temp;
    //             }
    //         }
    //     }
    //     return arr;
    // }

    // let arr = [29,10,14,37,14];
    // console.log( arrSort( arr ));

    // 選擇排序
    // function sortMin( arr ) {
    //     let indexMin = 0;
    //     for( let i = 0; i < arr.length; i++) {
    //         indexMin = i;
    //         for( let j = i + 1; j < arr.length; j++) {
    //             if( arr[j] < arr[indexMin]) {
    //                 indexMin = j;
    //             }
    //         }
    //         let temp = arr[i];
    //         arr[i] = arr[indexMin];
    //         arr[indexMin] = temp;
    //     }
    //     return arr;
    // }
    // let arr = [5,4,3,2,1];
    // console.log( sortMin( arr ));

    // 插入排序
    // 1.從第一個元素開始,該元素可以被認為已經被排序
    // 2.取出下一個元素, 在已經排序好的序列中, 從後往前掃描
    // 3.直到找到小於或者等於該元素的位置
    // 4.將該位置後面的所有已經排素的元素, 從後往前移動(整體移動一位)
    // 5.將該元素插入道該位置
    // 6.重複步驟(2-5)

    // function insertSort ( arr ) {
    //     let len = arr.length
    //     for( let i = 1; i < len; i++) {
    //         let temp = arr[i];    //3
    //         let j = i - 1; //默認已排序的元素   //i=1, j=0

    //         //將已排序好的對列進行從後到前的掃描
    //         while( j >= 0 && arr[j] > temp ) {     //5>3
    //             //已排序的元素大於(>)新元素,將該元素移動到下一個位置
    //             arr[j+1] = arr[j];              
    //             j--;
    //         }
    //         arr[j + 1] = temp;
    //     }
    //     return arr;
    // } 

    // let arr = [5,3,4,2,1]

    // console.log(insertSort(arr))

    // 歸併排序
    // let arr = [8,4,5,7,1,3,6,2]

    // function mergeSort( arr ) {
    //     if( arr.length < 2 ) return arr;
    //     let mid = Math.floor( arr.length / 2 );

    //     // console.log( arr.slice(0,mid) , arr.slice(mid));
    //     let merge = function(letftArr,rightArr) {
    //         console.log(letftArr,rightArr)
    //         let resultArr = [];
    //         while( letftArr.length && rightArr.length ) {
    //             resultArr.push( letftArr[0] <= rightArr[0] ? 
    //                 letftArr.shift() : rightArr.shift() )
    //         }
    //         return resultArr.concat(letftArr).concat(rightArr);
    //     }
    //     return merge(
    //         mergeSort(arr.slice(0,mid)),
    //         mergeSort(arr.slice(mid))
    //     )
    // }

    // console.log( mergeSort(arr) )


    //快速排序

    // let arr = [29,10,14,37,4]
    // function quickSort( arr ) {

    //     if(arr.length <= 1 ) return arr;
    //     let mid = Math.floor( arr.length/2 );
    //     let pivot = arr.splice(mid,1)[0];
    //     console.log(pivot)
    //     let left = [];
    //     let right = [];

    //     for(let i = 0; i < arr.length; i++) {
    //         if( arr[i] < pivot) {
    //             left.push( arr[i] );
    //         }else{
    //             right.push( arr[i] );
    //         }
    //     }

    //     return quickSort(left).concat([pivot],quickSort(right));
    // } 
    // console.log(quickSort(arr))

    // 二分搜索:
    // 數組必須是有序的!
    // let arr = [1,2,3,4,5,6,7] , target = 6
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == target) {
    //         return i
    //     }
    // }

    // [1,2,3] 4 [5,6,7] 先拿到中間值 4 
    // if( target == 4) {
    //     return i
    // }
    // targe > 4 
    // targe < 4

    // function search( arr , target ) {

    //     let conut = 1;
    //     let start = 0;
    //     let end = arr.length - 1;
    //     while( start <= end ) {
    //         //取出中間值
    //         let middle = Math.floor(( start + end )/2);
    //         let guess = arr[middle];
    //         //如果中間值 = 目標值
    //         if( guess == target ) {
    //             console.log( conut )
    //             return middle; //返回位置
    //         }
    //         if( guess > target ) {
    //             end = middle;
    //         }
    //         if( guess < target ) {
    //             start = middle +1;
    //         }
    //         conut++;
    //     }
    //     return -1;
    // }
    // console.log(search( arr , target ))


    // 分治:把一個大問題, 分成多個小問題, 遞歸解決小問題, 將結果合併從而來解決原來的問題.

    // 1~100 猜炸彈56  猜40  便40~100  猜50  變50~100  猜60 變50~60之間

    // leetcode347猜數字大小
    // var guess = function(num) {}

    // var guessNumber = function(n) {
    //     let low = 1;
    //     let high = n;
    //     while( low <= high) {
    //         const mid = Math.floor((low + high)/2);
    //         const res = guess(mid);
    //         if( res === 0 ) {
    //             return mid;
    //         }else if ( res === 1 ) {
    //             low = mid + 1;
    //         }else {
    //             high = mid - 1;
    //         }
    //     }
    // };

    //假設1~99 , n為99
    // mid = 50
    // 50傳入guess會告訴妳 大了 小了 還是等於
    // 如果猜對了是50 就直接返回 mid
    // 如果是60才是對的 就讓low+1 變成51~99
    // 如果40才是對的 就讓high -1 變成 1~49

    // 分治思想去做

    // var guessNumber = function(n) {

    //     const rec = (low,high) => {
    //         const mid = Math.floor((low + high) / 2);
    //         const res = guess(mid);
    //         if( res == 0 ){
    //             return mid
    //         }else if ( res == 1 ){
    //             return rec (mid + 1, high)
    //         }else{
    //             return rec(1, mid - 1);
    //         }
    //     }
    //     return rec(1,n);
    //     }

    // leetcode 169

    // var majorityElement = function (nums) {

    //     const countInRang = (start, end ,num) => {
                // 初始值為0
    //         let count = 0;
    //         for (let i = start; i <= end; i++) {
    //             if (nums[i] == num) {
    //                 count++;
    //             }
    //         }
    //         return count;
    //     }

    //     const majority = (start,end) => {
    //         if( start == end ) return nums[start];

    //         let mid = start + Math.floor( (end - start) /2);
    //         //左側的數組
    //         const l =majority( start, mid);
    //         //右側的數組
    //         const r = majority( mid + 1, end);
    //         if(l == r) return l;
    //         //合併去找
    //         const l_cout = countInRang( start , end , l);
    //         const r_cout = countInRang( start , end , r);
    //         return l_cout > r_cout ? l : r;
    //     }
    //     return majority( 0, nums.length -1 );
    // }

    // console.log( majorityElement([2,2,1,1,1,2,2]))

 

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
                                <Image src={sort_img.bucket_sort_img.scatter_in_buckets_recursively} alt="scatter_in_buckets_recursively" style={{ display: "none" }} />
                                <Image src={sort_img.bucket_sort_img.scatter_in_buckets_distribution} alt="scatter_in_buckets_distribution" style={{ display: "none" }} />
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
                                <Image src={sort_img.counting_sort_img.counting_sort_step1} alt="counting_sort_step1" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step2} alt="counting_sort_step2" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step3} alt="counting_sort_step3" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step4} alt="counting_sort_step4" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step5} alt="counting_sort_step5" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step6} alt="counting_sort_step6" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step7} alt="counting_sort_step7" style={{ display: "none" }} />
                                <Image src={sort_img.counting_sort_img.counting_sort_step8} alt="counting_sort_step8" style={{ display: "none" }} />
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
                {/*Leetcode第374題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/guess-number-higher-or-lower/description/" >Leetcode第374題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode374} alt="leetcode374" />
                                <Image src={leetcode_img.leetcode374_1} alt="leetcode374_01" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第169題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/majority-element/description/" >Leetcode第169題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode169} alt="leetcode374" />
                                <Image src={leetcode_img.leetcode169_1} alt="leetcode374_01" style={{ display: "none" }} />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第70題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/climbing-stairs/description/" >Leetcode第70題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode70} alt="leetcode70" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第198題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/house-robber/submissions/" >Leetcode第198題</a>
                    </p>
                    <p>
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode_img.leetcode198} alt="leetcode374" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Algorithm