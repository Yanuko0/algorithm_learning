import{j as s}from"./index-B2MRwfjw.js";import{I as e}from"./algorithmPageStyle-Bpj0BEPT.js";import{l as t}from"./leetcode_img-C1Ln_u7n.js";const n="/algorithm_learning/assets/min_heap_and_max_heap-C2LWh5ks.png",_="/algorithm_learning/assets/representation_of_heap-DtYefrUq.png",l="/algorithm_learning/assets/heap_pop_step1-D_8eKcXK.png",r="/algorithm_learning/assets/heap_pop_step2-BcghbT3m.png",h="/algorithm_learning/assets/heap_pop_step3-D6T6yw9D.png",o="/algorithm_learning/assets/heap_pop_step4-Cgf-NNCU.png",i="/algorithm_learning/assets/heap_pop_step5-CxIAyOiy.png",c="/algorithm_learning/assets/heap_pop_step6-DaPSECvl.png",g="/algorithm_learning/assets/heap_pop_step7-NjuROIjX.png",d="/algorithm_learning/assets/heap_pop_step8-CAPWUXEn.png",x="/algorithm_learning/assets/heap_pop_step9-CAcLraG0.png",j="/algorithm_learning/assets/heap_pop_step10-D5iwVQ81.png",m="/algorithm_learning/assets/heap_push_step1-DtWmd5LD.png",y="/algorithm_learning/assets/heap_push_step2-BHK_KZ-g.png",u="/algorithm_learning/assets/heap_push_step3-bUpI3mUR.png",b="/algorithm_learning/assets/heap_push_step4-C_71m3yc.png",v="/algorithm_learning/assets/heap_push_step5-DpJk65ml.png",D="/algorithm_learning/assets/heap_push_step6-MJ77Z2DE.png",C="/algorithm_learning/assets/heap_push_step7-DDdmbdeh.png",f="/algorithm_learning/assets/heap_push_step8-CRjxa1q6.png",N="/algorithm_learning/assets/heap_push_step9-CHUjic1n.png",B=()=>s.jsxs("div",{className:"full_page",children:[s.jsx("div",{className:"title",children:"堆"}),s.jsx("div",{className:"introduce",children:s.jsxs("div",{className:"diagrambox",children:[s.jsx("p",{children:"什麼是堆"}),s.jsxs("p",{children:["一、堆都能用樹來表示,並且一班樹的實現都是利用鏈表",s.jsx("br",{}),"而二元樹是一種特殊的堆,它用完全二元樹表示,卻可以利用樹組實現",s.jsx("br",{}),"平時使用最多的是二元樹, 它可以用完全二元樹表示, 二叉堆易於存儲, 並且便于索引",s.jsx("br",{}),"堆數據結構像樹, 但是, 是通過樹組來實現 (不是通過鏈表:二叉堆)",s.jsx("br",{}),"簡單來說就是把一堆數,弄成數組的結構,但是通過樹來表示,他不是鏈表而是數組.",s.jsx("br",{}),s.jsx("br",{}),"二、在堆的實現時, 需要注意: ",s.jsx("br",{}),"因為是數組, 所以父子節點的關係就不需要特殊的結構去維護,所以之間通過計算就可以得到,省掉了很多麻煩。如果鏈表結構,就會複雜很多; ",s.jsx("br",{}),"完全二叉樹要求葉子節點從左往右填滿, 才能開始填充下一層, 這就保證了不需要對樹組整體進行大片的移動。 這也是隨機儲存結構(數組)的短版:刪除一個元素之後, 整體往前移是比較費時的.這個特性也導致堆在刪除元素的時候, 要把最後一個葉子節點補充道樹根節點的緣由 ",s.jsx("br",{}),"左: 2 * index + 1 ",s.jsx("br",{}),"右: 2 * index + 2 ",s.jsx("br",{}),"找父: ( index - 1 ) /2 ",s.jsx("br",{}),s.jsx("br",{})]}),s.jsx("p",{className:"diagram",children:s.jsx("div",{className:"commentaryBox",children:s.jsxs(e.PreviewGroup,{preview:{onChange:(p,a)=>console.log(`current index: ${p}, prev index: ${a}`)},children:[s.jsx(e,{src:n,alt:"min_heap_and_max_heap"}),s.jsx(e,{src:_,alt:"representation_of_heap",style:{display:"none"}}),s.jsx(e,{src:m,alt:"heap_push_step1",style:{display:"none"}}),s.jsx(e,{src:y,alt:"heap_push_step2",style:{display:"none"}}),s.jsx(e,{src:u,alt:"heap_push_step3",style:{display:"none"}}),s.jsx(e,{src:b,alt:"heap_push_step4",style:{display:"none"}}),s.jsx(e,{src:v,alt:"heap_push_step5",style:{display:"none"}}),s.jsx(e,{src:D,alt:"heap_push_step6",style:{display:"none"}}),s.jsx(e,{src:C,alt:"heap_push_step7",style:{display:"none"}}),s.jsx(e,{src:f,alt:"heap_push_step8",style:{display:"none"}}),s.jsx(e,{src:N,alt:"heap_push_step9",style:{display:"none"}}),s.jsx(e,{src:l,alt:"heap_pop_step1",style:{display:"none"}}),s.jsx(e,{src:r,alt:"heap_pop_step2",style:{display:"none"}}),s.jsx(e,{src:h,alt:"heap_pop_step3",style:{display:"none"}}),s.jsx(e,{src:o,alt:"heap_pop_step4",style:{display:"none"}}),s.jsx(e,{src:i,alt:"heap_pop_step5",style:{display:"none"}}),s.jsx(e,{src:c,alt:"heap_pop_step6",style:{display:"none"}}),s.jsx(e,{src:g,alt:"heap_pop_step7",style:{display:"none"}}),s.jsx(e,{src:d,alt:"heap_pop_step8",style:{display:"none"}}),s.jsx(e,{src:x,alt:"heap_pop_step9",style:{display:"none"}}),s.jsx(e,{src:j,alt:"heap_pop_step10",style:{display:"none"}})]})})})]})}),s.jsx("br",{}),s.jsx("div",{className:"Detailed_introduction",children:s.jsxs("div",{children:[s.jsx("p",{children:s.jsx("a",{href:"https://leetcode.com/problems/binary-tree-preorder-traversal/description/",children:"Leetcode第215題"})}),s.jsx("p",{children:s.jsx("div",{className:"commentaryBox",children:s.jsxs(e.PreviewGroup,{preview:{onChange:(p,a)=>console.log(`current index: ${p}, prev index: ${a}`)},children:[s.jsx(e,{src:t.leetcode215,alt:"leetcode215"}),s.jsx(e,{src:t.leetcode215_01,alt:"leetcode215_01",style:{display:"none"}})]})})})]})})]});export{B as default};
