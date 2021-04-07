(this["webpackJsonpproteomic-profiler"]=this["webpackJsonpproteomic-profiler"]||[]).push([[0],{30:function(e,t){},45:function(e,t,n){},54:function(e,t,n){},60:function(e,t){},61:function(e,t){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),i=n(7),s=n(67),l=n.p+"static/media/dna_loader.4c4bb697.svg",j=(n(45),n(1)),u=function(){return Object(j.jsxs)(s.a,{fluid:!0,className:"loading",children:[Object(j.jsx)("img",{src:l,alt:"Spinning dotted DNA loader."}),Object(j.jsx)("h6",{children:"Loading..."})]})},d=n(15),b=n(33),O=n.p+"static/media/background_top.47af2133.svg",h=n.p+"static/media/background_bottom.6ad4e379.svg",p=(n(54),function(){return Object(j.jsxs)("div",{className:"landing",children:[Object(j.jsx)("div",{className:"background-top-container",children:Object(j.jsx)("img",{src:O,className:"background-top",alt:"Network graphic - top portion."})}),Object(j.jsxs)("div",{className:"landing-text",children:[Object(j.jsx)("h1",{children:"Automatic Proteomic Profiler"}),Object(j.jsx)("p",{children:"An online tool for selecting proteins based on their subcellular location."}),Object(j.jsx)(b.Link,{to:"upload",smooth:!0,duration:500,children:Object(j.jsx)(d.a,{children:Object(j.jsx)("h6",{children:"Get Started"})})})]}),Object(j.jsx)("div",{className:"background-bottom-container",children:Object(j.jsx)("img",{src:h,className:"background-bottom",alt:"Network graphic - bottom portion."})})]})}),x=function(e){return e>="0"&&e<="9"},f=n(34),m=n.n(f),g="LOADING_START",v="LOADING_END",y="THROW_ERROR",E="UPLOAD_FILE",N="REMOVE_FILE",k="SELECT_SHEET",S="REMOVE_SHEET",_="SELECT_COLUMN",w="REMOVE_COLUMN",R="SET_UNIPROT_IDS",C="GET_PROFILE",T="UPDATE_PROGRESS",L=function(){return{type:w}},A=n(10),D=(n(62),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.data.uploaded})),n=Object(i.c)((function(e){return e.data.workbook})),c=Object(i.c)((function(e){return e.data.sheet})),r=a.a.useRef(null),o="- - -",s=function(t){var n;e(L()),t.target.value===o?e({type:S}):e((n=t.target.value,{type:k,payload:n}))},l=function(t){var n;t.target.value===o?e(L()):e((n=t.target.value,{type:_,payload:n}))},u=function(e){for(var t=0;!x(e[t]);)++t;return e.slice(0,t)};return Object(j.jsxs)("div",{className:"upload",id:"upload",children:[Object(j.jsxs)("div",{className:"upload-instructions",children:[Object(j.jsx)("h1",{children:"How it Works"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Upload an Excel spreadsheet containing the UniProt IDs of your genes of interest in a column."})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Select the page and column in the spreadsheet containing the UniProt IDs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Select which subcellular locations you want to filter in the list"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Run the program to save the column marking the genes that fit your criteria!"})})]})]}),t?Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"choose-sheet",children:[Object(j.jsx)("h4",{children:"Choose a Sheet"}),Object(j.jsx)(A.a,{children:Object(j.jsx)(A.a.Group,{children:Object(j.jsxs)(A.a.Control,{as:"select",onChange:function(e){return s(e)},children:[Object(j.jsx)("option",{children:o}),n.SheetNames.map((function(e,t){return Object(j.jsx)("option",{children:e},t)}))]})})})]}),null!==c?Object(j.jsxs)("div",{className:"choose-column",children:[Object(j.jsx)("h4",{children:"Choose the Column Containing the UniProt IDs"}),Object(j.jsx)(A.a,{children:Object(j.jsx)(A.a.Group,{children:Object(j.jsxs)(A.a.Control,{as:"select",onChange:function(e){return l(e)},children:[Object(j.jsx)("option",{children:o}),Object.keys(n.Sheets[c]).map((function(e,t){return"1"!==e.slice(-1)||x(e.slice(-2,-1))?null:Object(j.jsx)("option",{children:"".concat(u(e),": ").concat(n.Sheets[c][e].v)},e)}))]})})})]}):null]}):Object(j.jsx)("div",{className:"upload-form",children:Object(j.jsxs)(d.a,{className:"upload-button",onClick:function(e){return r.current.click()},children:[Object(j.jsx)("h6",{children:"Upload a File"}),Object(j.jsx)("input",{type:"file",ref:r,onChange:function(t){return e(function(e){return function(t){var n=new FileReader;n.onload=function(e){var n=new Uint8Array(e.target.result),c=m.a.read(n,{type:"array"});t({type:E,payload:c})},n.readAsArrayBuffer(e.target.files[0])}}(t))},accept:".xls, .xlsx, .xlsm",style:{display:"none"}})]})})]})}),I=(n(64),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.base.loading}));return Object(c.useEffect)((function(){e({type:g}),setTimeout((function(){return e({type:v})}),0)}),[e]),Object(j.jsx)(a.a.Fragment,{children:t?Object(j.jsx)(u,{}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(D,{})]})})}),U=n(9),P=n(35),F=n(6),G={loading:!1,error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case v:return Object(F.a)(Object(F.a)({},e),{},{loading:!1});case y:return Object(F.a)(Object(F.a)({},e),{},{error:t.payload});default:return e}},H={uploaded:!1,workbook:null,sheet:null,column:null,uniprot_ids:[],locations:[],progress:0},V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E:return Object(F.a)(Object(F.a)({},t),{},{uploaded:!0,workbook:(e=n.payload,{Sheets:e.Sheets,SheetNames:e.SheetNames})});case N:return Object(F.a)(Object(F.a)({},t),{},{uploaded:!1,workbook:null});case k:return Object(F.a)(Object(F.a)({},t),{},{sheet:n.payload});case S:return Object(F.a)(Object(F.a)({},t),{},{sheet:null});case _:return Object(F.a)(Object(F.a)({},t),{},{column:n.payload});case w:return Object(F.a)(Object(F.a)({},t),{},{column:null});case R:return Object(F.a)(Object(F.a)({},t),{},{uniprot_ids:n.payload});case C:return Object(F.a)(Object(F.a)({},t),{},{locations:n.payload});case T:return Object(F.a)(Object(F.a)({},t),{},{progress:n.payload});default:return t}},W=function(){return Object(U.combineReducers)({base:M,data:V})},B=n(36),J=Object(U.createStore)(W(),Object(B.composeWithDevTools)(Object(U.applyMiddleware)(P.a)));o.a.render(Object(j.jsx)(i.a,{store:J,children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.01f6f9bc.chunk.js.map