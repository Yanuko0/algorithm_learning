import{j as e}from"./index-CF2vLRc0.js";import{I as s}from"./algorithmPageStyle-ycMv-CO5.js";import{a as l}from"./ai_img-DywI196L.js";const d=()=>e.jsxs("div",{className:"full_page",children:[e.jsx("div",{className:"title",children:"高斯混和模型"}),e.jsx("div",{className:"introduce",children:e.jsxs("div",{className:"diagrambox",children:[e.jsx("p",{children:"簡稱GMM"}),e.jsx("p",{children:"是一種常用的機器學習算法,用於對數據進行聚類或者擬合"}),e.jsx("p",{children:e.jsx("li",{children:"對無標籤數據集,可以使用高斯混合模型進行聚類"})}),e.jsx("p",{className:"diagram",children:e.jsx("div",{className:"commentaryBox",children:e.jsx(s.PreviewGroup,{preview:{onChange:(r,i)=>console.log(`current index: ${r}, prev index: ${i}`)},children:e.jsx(s,{src:l.GMM_01,alt:"GMM_01"})})})}),e.jsxs("p",{children:["假設你正在一個雜貨店裡,你看到一堆水果,有蘋果、香蕉和橙子。你想把他們分成幾組,以便更好地組織它們。GMM就像是一個聰明的小夥伴, 可以幫助你快速的將這些水果分成不同的組。",e.jsx("li",{children:"首先, 我們將選擇一個初始的猜測, 假設有三個簇, 每個簇代表一種水果。然後, 我們將隨機選擇幾個數據點, 這些數據將被指定為每個簇的中心點。 在我們的例子中, 可能會選擇一些蘋果、香蕉、橙子做為中心點。"}),e.jsx("li",{children:"接下來, 我們將數據進行多次迭代(EM算法),美次迭代會根據每個中心點附近的數據點調整中心點的位置, 也便更好的擬合數據。 在這個過程中, 我們還會計算每個數據點屬於每個簇的概率。"}),e.jsx("li",{children:"最後, 當迭代完成時, 我們將得到一個最終的聚類結果, 其中每一個簇代表一種水果。這些簇的大小和位置將取決於初始猜測和迭代過程中的調整。"})]}),e.jsx("p",{className:"diagram",children:e.jsx("div",{className:"commentaryBox",children:e.jsx(s.PreviewGroup,{preview:{onChange:(r,i)=>console.log(`current index: ${r}, prev index: ${i}`)},children:e.jsx(s,{src:l.GMM_02,alt:"GMM_02"})})})}),e.jsx("p",{children:e.jsx("li",{children:"對有標籤的數據進行, 也可以直接高斯混合模型進行分類"})}),e.jsx("p",{children:"讓我們假設你正在一個雜貨店裡,你看到三堆水果,有蘋果、香蕉、橙子。你想對他們三組水果分別建模, 以便未來閉眼隨手拿起一個水果, 不看也可以快速分類出哪一種。GMM就像是一個聰明的小夥伴, 可以幫助你快速將這些不同的水果進行建模, 未來當有新的水果近來時, 給出新的水果屬於不同類的似然。"}),e.jsx("p",{className:"diagram",children:e.jsx("div",{className:"commentaryBox",children:e.jsx(s.PreviewGroup,{preview:{onChange:(r,i)=>console.log(`current index: ${r}, prev index: ${i}`)},children:e.jsx(s,{src:l.GMM_03,alt:"GMM_03"})})})})]})})]});export{d as default};
