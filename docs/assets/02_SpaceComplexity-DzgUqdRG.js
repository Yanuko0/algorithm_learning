import{j as s}from"./index-3GohHGlM.js";import{I as e}from"./algorithmPageStyle-V42lhkLh.js";const i="/algorithm_learning/assets/space_types01-uRFf-Tlt.png",a="/algorithm_learning/assets/space_complexity_02-BfapRDFl.png",n="/algorithm_learning/assets/space_complexity_03-CCUVekTa.png",c="/algorithm_learning/assets/space_complexity_04-Db1lOFRk.png",x=()=>s.jsxs("div",{className:"full_page",children:[s.jsx("div",{className:"title",children:"空間複雜度"}),s.jsxs("div",{className:"introduce",children:[s.jsxs("div",{className:"diagrambox",children:[s.jsx("p",{children:"圖解"}),s.jsx("p",{className:"diagram",children:s.jsx("div",{className:"commentaryBox",children:s.jsxs(e.PreviewGroup,{preview:{onChange:(r,l)=>console.log(`current index: ${r}, prev index: ${l}`)},children:[s.jsx(e,{src:i,alt:"space_types01"}),s.jsx(e,{src:a,alt:"space_complexity_02",style:{display:"none"}}),s.jsx(e,{src:n,alt:"space_complexity_03",style:{display:"none"}}),s.jsx(e,{src:c,alt:"space_complexity_04",style:{display:"none"}})]})})})]}),s.jsxs("div",{children:[s.jsx("p",{children:"1.是什麼?"}),s.jsxs("p",{children:["執行當前算法需要佔用多少內存空間",s.jsx("br",{})]})]}),s.jsxs("div",{children:[s.jsx("p",{children:"2.表示法"}),s.jsxs("p",{children:["O（1）、O（n）、O（n^2）、O（logn）",s.jsx("br",{})]})]})]}),s.jsx("br",{}),s.jsxs("div",{className:"Detailed_introduction",children:[s.jsxs("div",{children:[s.jsx("p",{children:"O（1）"}),s.jsxs("p",{children:["只佔用一塊",s.jsx("br",{}),"let a = 1; a++"]})]}),s.jsxs("div",{children:[s.jsx("p",{children:"O（n）"}),s.jsxs("p",{children:["let n = 100;",s.jsx("br",{}),"let arr = 〔〕;",s.jsx("br",{}),"for（let i = 0; i＜ n; i++）｛",s.jsx("br",{}),"       arr.push（1）",s.jsx("br",{}),"｝"]})]}),s.jsxs("div",{children:[s.jsx("p",{children:"O（n^2）"}),s.jsxs("p",{children:["let n = 100; let arr = 〔〕; for（let i = 0; i＜ n; i++）｛",s.jsx("br",{}),"       arr.push（〔〕）;",s.jsx("br",{}),"  for（let k = 0; k＜ n; k++）｛",s.jsx("br",{}),"       arr〔i〕.push（〔'a'〕）;",s.jsx("br",{}),"﹞"]})]})]})]});export{x as default};