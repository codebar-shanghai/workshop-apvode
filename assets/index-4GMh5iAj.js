function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Timeline-D3eIMs4r.js","assets/vendor-uZ32emID.js","assets/Timeline-CMSSBTBR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Rt=Object.defineProperty;var Pt=(s,e,a)=>e in s?Rt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var d=(s,e,a)=>(Pt(s,typeof e!="symbol"?e+"":e,a),a);import{d as p,r as b,c as _,a as t,b as tt,e as Ht,o as h,f,g as o,h as g,L as H,C as ht,T as N,I as zt,K as et,R as It,i as O,j as z,F as Y,p as I,k as S,l as St,t as B,n as Mt,m as T,u,q as G,w,s as Dt,v as Ft,x as Vt,$ as jt,y as Ut,z as pt,A as Bt,B as at,D as Wt,E as Gt,G as Zt,H as Jt,J as $,M as qt,N as Qt,O as Kt,P as te,Q as ee,S as ae,U as se,V as ne,W as ie,X as oe,Y as de,Z as re,_ as le}from"./vendor-uZ32emID.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const ce="modulepreload",ue=function(s){return"/workshop-apvode/"+s},vt={},_e=function(e,a,n){let i=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");i=Promise.all(a.map(c=>{if(c=ue(c),c in vt)return;vt[c]=!0;const l=c.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!n)for(let L=r.length-1;L>=0;L--){const X=r[L];if(X.href===c&&(!l||X.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${x}`))return;const y=document.createElement("link");if(y.rel=l?"stylesheet":ce,l||(y.as="script",y.crossOrigin=""),y.href=c,document.head.appendChild(y),l)return new Promise((L,X)=>{y.addEventListener("load",L),y.addEventListener("error",()=>X(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>e()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})},kt="/workshop-apvode/assets/Overview_All_Gates_Updated_01-Bdz7rhcS.png";var m=(s=>(s[s.NONE=0]="NONE",s[s.NOT=1]="NOT",s[s.AND=2]="AND",s[s.NAND=3]="NAND",s[s.OR=4]="OR",s[s.NOR=5]="NOR",s[s.XOR=6]="XOR",s[s.XNOR=7]="XNOR",s))(m||{}),R=(s=>(s[s.FREE=0]="FREE",s[s.TAKEN=1]="TAKEN",s))(R||{});const he=`<svg width="1792.0000000000002" height="1792.0000000000002" xmlns="http://www.w3.org/2000/svg">
 <metadata id="metadata3035">image/svg+xml</metadata>

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <g id="g3027" transform="matrix(1, 0, 0, -1, 121.492, 1285.42)">
   <path fill="currentColor" id="path3029" d="m1286.508057,389.420074q0,104.000031 -40.5,198.500031q-40.5,94.5 -109.5,163.5q-69,69 -163.499939,109.5q-94.5,40.5 -198.5,40.5q-104,0 -198.5,-40.5q-94.500122,-40.5 -163.500122,-109.5q-69,-69 -109.5,-163.5q-40.499969,-94.5 -40.499969,-198.500031q0,-104 40.499969,-198.5q40.5,-94.499992 109.5,-163.499996q69,-69.000004 163.500122,-109.499996q94.5,-40.5 198.5,-40.5q104,0 198.5,40.5q94.499939,40.499992 163.499939,109.499996q69,69.000004 109.5,163.499996q40.5,94.5 40.5,198.5zm256,0q0,-209 -103,-385.499998q-103,-176.500002 -279.5,-279.499971q-176.499939,-103.000031 -385.499939,-103.000031q-209,0 -385.500122,103.000031q-176.499969,102.999969 -279.499908,279.499971q-103.000023,176.499998 -103.000023,385.499998q0,209.000031 103.000023,385.500031q102.999939,176.5 279.499908,279.499817q176.500122,103 385.500122,103q209,0 385.499939,-103q176.5,-102.999817 279.5,-279.499817q103,-176.5 103,-385.500031z"/>
  </g>
  <text transform="matrix(1.96552, 0, 0, 1.96552, -1510.39, -1585.32)" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="Georgia, Times, 'Times New Roman', serif" font-size="250" id="svg_2" y="1663.982531" x="1567.725114" stroke-width="0" stroke="#000" fill="#000000">I</text>
 </g>
</svg>`,fe=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79.15691 25H95M29.043478 25h-24"/>
  <path d="M28.96875 2.59375v44.8125l2.15625-1.0625 41.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3 4.8125L68.09375 25l-36.125 17.59375V7.40625z" style="marker:none"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"  style="marker:none"/>
</svg>
`,ge=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z" />
</svg>
`,me=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" />
</svg>
`,pe=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
</svg>
`,ve=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" style="marker:none"/>
</svg>
`,xe=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M30.38572 15H5M31.3621 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42C22.65263 44.6444 22 45 22 45h-3.65625l2-2.4375S26 35.56245 26 25 20.34375 7.4375 20.34375 7.4375l-2-2.4375H22c.78125.9375 1.42188 1.65625 2.21875 3C26.09147 11.09981 29 17.02665 29 25c0 7.95065-2.8967 13.87942-4.75 17z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.43755 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.40808 0 7.6897.02451 13.625-2.40625s12.53654-7.34327 17.6875-16.875L71.25 25l1.3125-.71875C62.25939 5.21559 46.00657 5 41.25 5H24.09375zm5.875 3H41.25c4.68417 0 18.28685-.1302 27.96875 17C64.45196 33.42907 58.69747 37.68391 53.5 39.8125 48.13934 42.00792 43.65808 42 41.25 42H30c1.87359-3.10843 4.75-9.04935 4.75-17 0-7.97335-2.90853-13.90019-4.78125-17z"/>
  </g>
</svg>
`,we=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M78.333332 25H95M30.385717 15H5M31.362091 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42.000005c-1.597374 2.6444-2.25 3-2.25 3h-3.65625l2-2.4375S26 35.562451 26 25c0-10.562451-5.65625-17.5625-5.65625-17.5625l-2-2.4375H22c.78125.9375 1.421875 1.65625 2.21875 3C26.091469 11.099815 29 17.026646 29 25c0 7.95065-2.896697 13.879425-4.75 17.000005z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  </g>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"/>
</svg>
`;function D(s){return s?"#36f720":"#343A40"}function be(s){switch(s){case"NOT":return m.NOT;case"AND":return m.AND;case"NAND":return m.NAND;case"OR":return m.OR;case"NOR":return m.NOR;case"XOR":return m.XOR;case"XNOR":return m.XNOR;default:return m.NONE}}const ut=new Map;function ye(){const s=[{type:m.NONE,image:he},{type:m.NOT,image:fe},{type:m.AND,image:ge},{type:m.NAND,image:me},{type:m.OR,image:pe},{type:m.NOR,image:ve},{type:m.XOR,image:xe},{type:m.XNOR,image:we}];for(const{type:e,image:a}of s){const n=new Blob([a],{type:"image/svg+xml"}),i=URL.createObjectURL(n),r=new Image;r.onload=()=>{ut.set(e,r),URL.revokeObjectURL(i)},r.src=i}}const Ie={key:0,class:"modal"},Se={class:"modal-content flex justify-center"},Me=p({__name:"Modal",setup(s,{expose:e}){const a=b(!1);let n;function i(c){a.value=!0,n=c}function r(){typeof n=="function"&&n(),a.value=!1}return e({show:i}),(c,l)=>a.value?(h(),_("div",Ie,[t("div",{class:"modal-header"},[t("span",{class:"close",onClick:r},"×")]),t("div",Se,[tt(c.$slots,"default",{},void 0,!0)])])):Ht("",!0)}}),v=(s,e)=>{const a=s.__vccOpts||s;for(const[n,i]of e)a[n]=i;return a},Q=v(Me,[["__scopeId","data-v-0f580d60"]]),De="/workshop-apvode/assets/1868_linett_kineograph_patent_fig._III-Bp_Q6IgE.jpg",ke="/workshop-apvode/assets/media-1067086-mar04fig1still-COYKNvRW.gif",$e={},Ce={class:"problem-stack"},Xe=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),Ne=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},"Algorithms")],-1),Le=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Ye=t("tr",{class:"ps-sw"},[t("td",null,[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),Oe=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),Te=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),Ae=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),Ee=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Re=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Pe=[Xe,Ne,Le,Ye,Oe,Te,Ae,Ee,Re];function He(s,e){return h(),_("table",Ce,Pe)}const xt=v($e,[["render",He]]),ze=t("h3",null,"Finally the Last Piece",-1),Fe=g('<section><h3 class="m-0"><a href="https://en.wikipedia.org/wiki/Flip_book">Flipbook</a></h3><div class="flex justify-center"><img class="scale-50 m-0" data-src="'+De+'"></div></section><section><h3>Video Encoding &amp; Decoding</h3><div class="flex justify-center"><a href="https://www.eetimes.com/how-video-compression-works/"><img data-src="'+ke+'"></a></div></section><section><h3>Commonly Used Algorithms</h3><ul><li>AVC (Advanced Video Coding) / H.264</li><li>HEVC (High Efficiency Video Coding) / H.265</li><li>VP8</li><li>VP9</li><li>AV1</li></ul></section><section><h3>Software Encoding &amp; Decoding</h3><ul><li>Can be implemented in any language and run on any CPU</li><li>Can work easily with filters implemented by others</li><li>There&#39;re some good implementations of encoders, such as x264 and x265</li><li>Might consume a lot of computing resource, and is slower than...</li></ul></section><section><h3>Hardware Encoding &amp; Decoding</h3><ul><li>Specialized chips</li><li>Much faster than software</li><li>New algorithms might require hardware upgrading</li></ul></section>',5),Ve=p({__name:"algorithms",setup(s){return(e,a)=>(h(),_("section",null,[t("section",null,[ze,o(xt,{class:"text-3xl"})]),Fe,t("section",null,[o(xt,{class:"text-3xl"})])]))}}),je={},Ue=g('<h3 data-v-ba820645>How to add two numbers?</h3><div class="flex justify-evenly text-right mono" data-v-ba820645><div data-v-ba820645><div class="header" data-v-ba820645>Base 10</div><div class="carry fragment italic" data-fragment-index="1" data-v-ba820645>1 </div><div data-v-ba820645>14</div><div data-v-ba820645>+  7</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="2" data-v-ba820645>2</span><span class="fragment" data-fragment-index="1" data-v-ba820645>1</span></div></div><div class="fragment" data-fragment-index="3" data-v-ba820645><div class="header" data-v-ba820645>Base 2</div><div class="carry italic" data-v-ba820645><span class="fragment" data-fragment-index="7" data-v-ba820645>1</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>1</span><span class="fragment" data-fragment-index="4" data-v-ba820645>0</span><span data-v-ba820645> </span></div><div data-v-ba820645>1110</div><div data-v-ba820645>+   111</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="8" data-v-ba820645>1</span><span class="fragment" data-fragment-index="7" data-v-ba820645>0</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>0</span><span class="fragment" data-fragment-index="4" data-v-ba820645>1</span></div></div></div><div class="fragment mono mt-8" data-fragment-index="9" data-v-ba820645> (<span class="fragment custom custom-highlight-red" data-fragment-index="10" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-purple" data-fragment-index="11" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-cyan" data-fragment-index="12" data-v-ba820645>1</span>)<sub data-v-ba820645>2</sub> = <span class="fragment border-b-2 border-red-500" data-fragment-index="10" data-v-ba820645>2<sup data-v-ba820645>4</sup></span> <span class="fragment fade-up" data-fragment-index="11" data-v-ba820645>+ <span class="border-b-2 border-purple-500" data-v-ba820645>2<sup data-v-ba820645>2</sup></span></span> <span class="fragment" data-fragment-index="12" data-v-ba820645>+ <span class="border-b-2 border-cyan-500" data-v-ba820645>2<sup data-v-ba820645>0</sup></span></span> <span class="fragment" data-fragment-index="13" data-v-ba820645>= 16 + 4 + 1</span></div>',3),Be=[Ue];function We(s,e){return h(),_("section",null,Be)}const Ge=v(je,[["render",We],["__scopeId","data-v-ba820645"]]),Z=new Map,J=new Map;function F(s){if(Z.has(s.id)||J.has(s.id))throw Error("Potential resource leak, ID is duplicated");Z.set(s.id,s.constructor),J.set(s.id,s.destructor)}function V(s){Z.delete(s),J.delete(s)}class Ze{constructor(e,a){d(this,"startNode");d(this,"endNode");d(this,"startID");d(this,"endID");d(this,"endX");d(this,"endY");d(this,"width");d(this,"simulator");d(this,"line");d(this,"_value");d(this,"_destroyed");this.startNode=a,this.endNode=null,this.startID=a.id,this.endID=null,this.simulator=e,this.endX=0,this.endY=0,this.width=8,this._destroyed=!1,this.Value=this.startNode.value}destroy(){this._destroyed||(this._destroyed=!0,this.startNode.InputState=R.FREE,this.endNode&&(this.endNode.Value=!1,this.endNode.InputState=R.FREE),this.startNode=null,this.endNode=null)}generateNodeValue(){this._destroyed||(this.startNode.isOutput&&this.endNode.isOutput||!this.startNode.isOutput&&!this.endNode.isOutput?(this.startNode.Value=this.startNode.Value||this.endNode.Value,this.endNode.Value=this.startNode.Value):this.endNode&&(this.endNode.Value=this.startNode.Value))}getStartNode(){return this.startNode}updateEnd(e,a){this.endX=e,this.endY=a}setEndNode(e){if(!this._destroyed){if(e.isOutput){let a=this.startNode;this.startNode=e,this.endNode=a,this.endNode.InputState=R.TAKEN}else this.endNode=e,this.startNode.InputState=R.TAKEN,this.endNode.InputState=R.TAKEN;if(this.startID=this.startNode.id,this.endID=this.endNode.id,this.line)this.line.points(this._generateLinePoints());else{this.line=new H({stroke:"black",strokeWidth:this.width/2,points:this._generateLinePoints()}),this.simulator._layer.add(this.line);const a=this.startNode;a.subscribe(this.endNode),this.Value=this.startNode.Value,a.subscribe(this)}}}get Value(){return this._value}set Value(e){this._value=e,this.line&&this.line.stroke(this._value?D(!0):"black")}_generateLinePoints(){var e,a,n,i;return[((e=this.startNode)==null?void 0:e.posX)||0,((a=this.startNode)==null?void 0:a.posY)||0,((n=this.endNode)==null?void 0:n.posX)||0,((i=this.endNode)==null?void 0:i.posY)||0]}}class Je{constructor(e){d(this,"wire");d(this,"shortCircuit");d(this,"isOpened");d(this,"simulator");this.wire=[],this.shortCircuit=[],this.isOpened=!1,this.simulator=e}addNode(e){var a,n;if(!this.isOpened)this.wire.push(new Ze(this.simulator,e)),this.isOpened=!0;else{let i=this.wire.length-1;e!=this.wire[i].getStartNode()&&(((a=this.wire[i].getStartNode())==null?void 0:a.isOutput)!=e.isOutput||e.Brother==this.wire[i].getStartNode())?e==((n=this.wire[i].getStartNode())==null?void 0:n.Brother)?this.wire.length--:this.wire[i].setEndNode(e):this.wire.length--,this.isOpened=!1}}destroy(){for(let e of this.wire)e.destroy();this.wire.length=0,this.simulator=null}}class qe{constructor(){d(this,"currentID");d(this,"nodeList");this.currentID=0,this.nodeList=[]}}class $t{constructor(e,a,n,i=!1,r=!1){d(this,"diameter");d(this,"value");d(this,"posX");d(this,"posY");d(this,"isOutput");d(this,"hitRange");d(this,"inputState");d(this,"isAlive");d(this,"brotherNode");d(this,"id");d(this,"nodeManager");d(this,"circle");this.nodeManager=e.nodeManager,this.diameter=10,this.value=r,this.posX=a,this.posY=n,this.isOutput=i,this.hitRange=this.diameter+10,this.inputState=R.FREE,this.isAlive=!0,this.brotherNode=null,this.id=this.nodeManager.currentID++,this.nodeManager.nodeList[this.id]=this;const c=e._layer;this.circle=new ht({x:this.posX,y:this.posY,fill:D(this.value),radius:this.diameter/2,stroke:"black",strokeWidth:4}),this.circle.on("mouseover",()=>{this.circle.fill("#80808080")}),this.circle.on("mouseout",()=>{this.circle.fill(D(this.value))}),c.add(this.circle)}destroy(){this.isAlive=!1,this.nodeManager.nodeList[this.id]=void 0}draw(){}set ID(e){this.nodeManager.nodeList[this.id]=void 0,this.id=e,this.nodeManager.nodeList[this.id]=this,this.id>this.nodeManager.currentID&&(this.nodeManager.currentID=this.id+1)}set InputState(e){this.inputState=e}set Brother(e){this.brotherNode=e}get Brother(){return this.brotherNode}get Value(){return this.value}set Value(e){this.value=e,this.circle.fill(D(this.value)),this.circle.stroke(this.value?D(this.value):"black")}updatePosition(e,a){this.posX=e,this.posY=a,this.circle.x(this.posX),this.circle.y(this.posY)}}class _t extends $t{constructor(a,n,i,r=!1,c){super(a,n,i,!1,r);d(this,"_callback");this._callback=c}get Value(){return super.Value}set Value(a){super.Value=a,typeof this._callback=="function"&&this._callback(this.value)}}class Ct extends $t{constructor(a,n,i,r=!1){super(a,n,i,!0,r);d(this,"_subscribers");this._subscribers=[]}get Value(){return super.Value}set Value(a){super.Value=a;for(const n of this._subscribers)n.Value=a}subscribe(a){this._subscribers.push(a)}destroy(){this._subscribers.length=0}}class Qe{constructor(e,a={}){d(this,"value");d(this,"posX");d(this,"posY");d(this,"diameter");d(this,"isSpawned");d(this,"isMoving");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"output");d(this,"nodeStartID");d(this,"circle");d(this,"line");d(this,"txt_value");d(this,"txt_label");this.value=a.value==1||!1,this.posX=typeof a.posX=="number"?a.posX:0,this.posY=typeof a.posY=="number"?a.posY:0,this.diameter=typeof a.diameter=="number"?a.diameter:25,this.isSpawned=typeof a.isSpawned=="boolean"?a.isSpawned:!1,this.isMoving=a.isMoving||!1,this.offsetMouseX=typeof a.offsetMouseX=="number"?a.offsetMouseX:0,this.offsetMouseY=typeof a.offsetMouseY=="number"?a.offsetMouseY:0,this.output=new Ct(e,this.posX+30,this.posY,this.value),this.nodeStartID=typeof a.nodeStartID=="number"?a.nodeStartID:this.output.id;const n=e._layer;this.circle=new ht({x:this.posX,y:this.posY,radius:this.diameter/2,fill:D(this.value),stroke:"black",strokeWidth:4}),this.circle.on("click",()=>{this.toggle()}),n.add(this.circle),this.line=new H({points:this._generateLinePoints(),strokeWidth:4,stroke:"black"}),n.add(this.line);const i=this.TextLabelPos;this.txt_label=new N({x:i.x,y:i.y,text:"INPUT",fontSize:12}),n.add(this.txt_label);const r=this.TextValuePos;this.txt_value=new N({x:r.x,y:r.y,text:this.value?"1":"0",fontSize:18,fontStyle:this.value?"bold":"normal",fill:this.value?"black":"white"}),this.txt_value.on("click",()=>{this.toggle()}),n.add(this.txt_value)}destroy(){var e;(e=this.output)==null||e.destroy(),this.output=void 0}refreshNodes(){this.output&&(this.output.ID=this.nodeStartID)}get TextValuePos(){return{x:this.posX-this.diameter/4,y:this.posY-this.diameter/4}}get TextLabelPos(){return{x:this.posX-20,y:this.posY+this.diameter}}_generateLinePoints(){var e;return[this.posX+this.diameter/2,this.posY,this.posX+30-(((e=this.output)==null?void 0:e.diameter)||0)/2,this.posY]}toggle(){this.value=!this.value,this.circle.fill(D(this.value)),this.line.stroke(this.value?D(this.value):"black"),this.output&&(this.output.Value=this.value),this.value?(this.txt_value.text("1"),this.txt_value.fontStyle("bold"),this.txt_value.fill("black")):(this.txt_value.text("0"),this.txt_value.fontStyle("normal"),this.txt_value.fill("white"))}}class Ke{constructor(e,a={}){d(this,"value");d(this,"posX");d(this,"posY");d(this,"diameter");d(this,"isSpawned");d(this,"isMoving");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"input");d(this,"nodeStartID");d(this,"line");d(this,"circle");d(this,"txt_value");d(this,"txt_label");this.value=a.value==!0,this.posX=typeof a.posX=="number"?a.posX:0,this.posY=typeof a.posY=="number"?a.posY:0,this.diameter=typeof a.diameter=="number"?a.diameter:25,this.isSpawned=typeof a.isSpawned=="boolean"?a.isSpawned:!1,this.isMoving=a.isMoving||!1,this.offsetMouseX=typeof a.offsetMouseX=="number"?a.offsetMouseX:0,this.offsetMouseY=typeof a.offsetMouseY=="number"?a.offsetMouseY:0,this.input=new _t(e,this.posX-30,this.posY,this.value,c=>{this._update(c)}),this.nodeStartID=typeof a.nodeStartID=="number"?a.nodeStartID:this.input.id;const n=e._layer;this.circle=new ht({x:this.posX,y:this.posY,radius:this.diameter/2,fill:D(this.value),stroke:"black",strokeWidth:4}),n.add(this.circle),this.line=new H({points:this._generateLinePoints(),strokeWidth:4,stroke:"black"}),n.add(this.line);const i=this.TextLabelPos;this.txt_label=new N({x:i.x,y:i.y,text:"OUTPUT",fontSize:12}),n.add(this.txt_label);const r=this.TextValuePos;this.txt_value=new N({x:r.x,y:r.y,text:this.value?"1":"0",fontSize:18,fontStyle:this.value?"bold":"normal",fill:this.value?"black":"white"}),n.add(this.txt_value)}destroy(){var e;(e=this.input)==null||e.destroy(),this.input=void 0}_update(e){this.value=e,this.circle.fill(D(this.value)),this.line.stroke(this.value?D(this.value):"black"),this.value?(this.txt_value.text("1"),this.txt_value.fontStyle("bold"),this.txt_value.fill("black")):(this.txt_value.text("0"),this.txt_value.fontStyle("normal"),this.txt_value.fill("white"))}refreshNodes(){this.input&&(this.input.ID=this.nodeStartID)}get TextValuePos(){return{x:this.posX-this.diameter/4,y:this.posY-this.diameter/4}}get TextLabelPos(){return{x:this.posX-20,y:this.posY+this.diameter}}_generateLinePoints(){var e;return[this.posX-this.diameter/2,this.posY,this.posX-30+(((e=this.input)==null?void 0:e.diameter)||0)/2,this.posY]}}class ta{constructor(e,a={}){d(this,"strType");d(this,"type");d(this,"width");d(this,"height");d(this,"posX");d(this,"posY");d(this,"isSpawned");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"isMoving");d(this,"input");d(this,"output");d(this,"nodeStartID");d(this,"_image");d(this,"text");d(this,"image");if(this.strType=typeof a.strType=="string"?a.strType:"AND",this.type=be(this.strType),!ut.has(this.type)){const i="Images are not intialized";throw new Error(i)}this._image=ut.get(this.type),this.width=this._image.width,this.height=this._image.height,this.posX=typeof a.posX=="number"?a.posX:0,this.posY=typeof a.posY=="number"?a.posY:0,this.image=new zt({x:this.posX,y:this.posY,image:this._image,width:this.width,height:this.height}),e._layer.add(this.image);const n=12;this.text=new N({x:this.posX+this.width/4+12,y:this.posY+this.height,text:this.strType,fontSize:n}),e._layer.add(this.text),this.isSpawned=typeof a.isSpawned=="boolean"?a.isSpawned:!1,this.offsetMouseX=typeof a.offsetMouseX=="number"?a.offsetMouseX:0,this.offsetMouseY=typeof a.offsetMouseY=="number"?a.offsetMouseY:0,this.isMoving=typeof a.isMoving=="boolean"?a.isMoving:!1,this.input=[],this.input.push(new _t(e,this.posX,this.posY+(this.type==m.NOT?this.height/2:15),!1,()=>{this.generateOutput()})),this.type!=m.NOT&&(this.input.push(new _t(e,this.posX,this.posY+this.height-15,!1,()=>{this.generateOutput()})),this.input[0].Brother=this.input[1],this.input[1].Brother=this.input[0]),this.output=new Ct(e,this.posX+this.width,this.posY+this.height/2),this.output.Value=this.calculateValue(),this.nodeStartID=typeof a.nodeStartID=="number"?a.nodeStartID:this.input[0].id}destroy(){var e,a;for(let n=0;n<this.input.length;n++)(e=this.input[n])==null||e.destroy(),this.input[n]=void 0;(a=this.output)==null||a.destroy(),this.output=void 0}refreshNodes(){let e=this.nodeStartID;for(let a=0;a<this.input.length;a++)this.input[a]!=null&&(this.input[a].ID=e,e++);this.output&&(this.output.ID=e)}generateOutput(){this.output&&(this.output.Value=this.calculateValue())}calculateValue(){switch(this.type){case m.NOT:return!this.input[0].Value;case m.AND:return this.input[0].Value&&this.input[1].Value;case m.NAND:return!(this.input[0].Value&&this.input[1].Value);case m.OR:return this.input[0].Value||this.input[1].Value;case m.NOR:return!(this.input[0].Value||this.input[1].Value);case m.XOR:return this.input[0].Value!=this.input[1].Value;case m.XNOR:return this.input[0].Value==this.input[1].Value;default:return!1}}}function wt(s){return typeof s=="string"||s instanceof String}function nt(s,e){if(s!=null&&e.key in s&&Array.isArray(s[e.key])){e.target.length=0;const a=s[e.key];for(let n=0;n<a.length;n++){let i=a[n];if(i==null)break;const r=e.func(i);e.target.push(r),r.refreshNodes()}}}class ea{constructor(e){d(this,"simulator");this.simulator=e}loadFile_ex(e){try{const a=wt(e)?JSON.parse(e):e;if(nt(a,{key:"logicInput",target:this.simulator.logicInput,func:n=>new Qe(this.simulator,n)}),nt(a,{key:"logicOutput",target:this.simulator.logicOutput,func:n=>new Ke(this.simulator,n)}),nt(a,{key:"gate",target:this.simulator.gate,func:n=>new ta(this.simulator,n)}),"wire"in a&&Array.isArray(a.wire)){const n=a.wire;for(let i of n){if(i==null)break;this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[i.startID]),this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[i.endID])}}}catch(a){console.error(a)}}loadFile(e){const a=e.target;if(a.files&&a.files.length>0){const n=new FileReader;n.onload=()=>{const i=n.result;wt(i)&&this.loadFile_ex(i)},n.readAsText(a.files[0])}}}class q{constructor(e,a){d(this,"logicInput");d(this,"logicOutput");d(this,"gate");d(this,"wireMng");d(this,"fileManager");d(this,"nodeManager");d(this,"_layer");d(this,"_stage");this._stage=new et.Stage({container:e,height:e.offsetHeight,width:e.offsetWidth}),this._layer=new et.Layer,this._stage.add(this._layer);const n=new It({x:0,y:0,width:e.offsetWidth,height:e.offsetHeight,fill:"white"});this._layer.add(n),this.logicInput=[],this.logicOutput=[],this.gate=[],this.nodeManager=new qe,this.wireMng=new Je(this),this.fileManager=new ea(this),this.loadFile_ex(a)}loadFile(e){this.fileManager.loadFile(e)}loadFile_ex(e){this.fileManager.loadFile_ex(e)}destroy(){this.wireMng.destroy(),this.wireMng=null,this.fileManager=null;for(let e of this.logicInput)e.destroy();this.logicInput.length=0;for(let e of this.gate)e.destroy();this.gate.length=0;for(let e of this.logicOutput)e.destroy();this.logicOutput.length=0,this._stage.destroy()}}const aa=[{value:0,posX:39,posY:26,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-33,offsetMouseY:63,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:110,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:4,nodeStartID:7,isSaved:!0}],sa=[{value:0,posX:303,posY:36,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:231,offsetMouseY:73,nodeStartID:8,isSaved:!0},{value:0,posX:303,posY:100,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:2,nodeStartID:9,isSaved:!0}],na=[],ia=[],oa=[{strType:"AND",type:2,width:100,height:50,posX:135,posY:11,isSpawned:!0,offsetMouseX:63,offsetMouseY:48,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"XOR",type:6,width:100,height:50,posX:136,posY:75,isSpawned:!0,offsetMouseX:64,offsetMouseY:112,isMoving:!1,isSaved:!0,nodeStartID:3}],da=[],ra=[{startID:6,endID:0,endX:396,endY:217,width:8},{startID:6,endID:3,endX:396,endY:217,width:8},{startID:7,endID:1,endX:396,endY:217,width:8},{startID:7,endID:4,endX:396,endY:217,width:8},{startID:2,endID:8,endX:396,endY:217,width:8},{startID:5,endID:9,endX:396,endY:217,width:8}],la={logicInput:aa,logicOutput:sa,flipflop:na,logicClock:ia,gate:oa,srLatch:da,wire:ra},Xt=s=>(I("data-v-b2d7dd2f"),s=s(),S(),s),ca=g('<section data-auto-animate data-v-b2d7dd2f><h3 data-v-b2d7dd2f>1-bit Half Adder</h3><table data-v-b2d7dd2f><tr data-v-b2d7dd2f><th data-v-b2d7dd2f>A</th><th data-v-b2d7dd2f>B</th><th class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>C</th><th class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>S</th></tr><tr class="fragment" data-fragment-index="1" data-v-b2d7dd2f><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td></tr><tr class="fragment" data-fragment-index="2" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="3" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="4" data-v-b2d7dd2f><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td></tr></table></section>',1),ua=Xt(()=>t("h3",null,"1-bit Half Adder",-1)),_a={class:"w-full flex justify-center"},ha=Xt(()=>t("div",{class:"text-xl"},"Output on the top right is for carry, the other is for sum",-1)),it="section-half-adder",fa=p({__name:"half-adder",setup(s){const e=b(null);let a;function n(){a==null&&(a=new q(e.value,la))}function i(){a&&(a.destroy(),a=null)}return O(()=>{F({id:it,constructor:n,destructor:i})}),z(()=>{V(it)}),(r,c)=>(h(),_(Y,null,[ca,t("section",{"data-auto-animate":"",id:it},[ua,t("div",_a,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)]),ha])],64))}}),ga=v(fa,[["__scopeId","data-v-b2d7dd2f"]]),ma="/workshop-apvode/assets/BFoCM-full-adder-B8ITB7iF.svg",pa="/workshop-apvode/assets/BFoCM-full-adder-chain-ClLEStrj.svg",va={},xa=g('<h3>Full Adder</h3><div class="flex flex-col items-center"><div class="bg-white"><img data-src="'+ma+'"></div><div class="fragment"><img data-src="'+pa+'"></div></div>',2),wa=[xa];function ba(s,e){return h(),_("section",null,wa)}const ya=v(va,[["render",ba]]),Ia="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTkycHgiIGhlaWdodD0iMTQxcHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSAxOTIgMTQxIj48ZGVmcy8+PHJlY3QgZmlsbD0iI2ZmZmZmZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIvPjxnPjxnPjxwYXRoIGQ9Ik0gMTQwIDcwIEwgMTcwIDcwIEwgMTYwIDcwIEwgMTkwIDcwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PC9nPjxnPjxyZWN0IHg9IjYwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PC9nPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA3OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDcwcHg7IG1hcmdpbi1sZWZ0OiA2MXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3OyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+W2ldPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkNvdXJpZXIgTmV3IiBmb250LXNpemU9IjE2cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5baV08L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48Zz48cGF0aCBkPSJNIDAgMzIuNSBMIDYwIDMyLjUgTSAwIDEwNy41IEwgNjAgMTA3LjUgTSAwIDU3LjUgTCA2MCA1Ny41IE0gMCA4Mi41IEwgNjAgODIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjwvZz48L2c+PC9zdmc+",Sa="/workshop-apvode/assets/BFoCM-4-bit-mux-BRQnrPWi.svg",Ma=[{value:!1,posX:32,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-44,offsetMouseY:58,nodeStartID:0,isSaved:!0},{value:!1,posX:31,posY:73,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-45,offsetMouseY:107,nodeStartID:1,isSaved:!0},{value:!1,posX:29,posY:128,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:1,offsetMouseY:4,nodeStartID:2,isSaved:!0}],Da=[{value:!1,posX:441,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:365,offsetMouseY:110,nodeStartID:14,isSaved:!0}],ka=[],$a=[],Ca=[{strType:"NOT",type:1,width:100,height:50,posX:67,posY:69,isSpawned:!0,offsetMouseX:-41,offsetMouseY:-30,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:187,posY:8,isSpawned:!0,offsetMouseX:111,offsetMouseY:42,isMoving:!1,isSaved:!0,nodeStartID:5},{strType:"AND",type:2,width:100,height:50,posX:188,posY:94,isSpawned:!0,offsetMouseX:112,offsetMouseY:128,isMoving:!1,isSaved:!0,nodeStartID:8},{strType:"OR",type:4,width:100,height:50,posX:289,posY:51,isSpawned:!0,offsetMouseX:213,offsetMouseY:85,isMoving:!1,isSaved:!0,nodeStartID:11}],Xa=[],Na=[{startID:0,endID:5,endX:328,endY:200,width:8},{startID:1,endID:3,endX:328,endY:200,width:8},{startID:4,endID:8,endX:328,endY:200,width:8},{startID:2,endID:9,endX:328,endY:200,width:8},{startID:1,endID:6,endX:328,endY:200,width:8},{startID:7,endID:11,endX:328,endY:200,width:8},{startID:10,endID:12,endX:328,endY:200,width:8},{startID:13,endID:14,endX:328,endY:200,width:8}],La={logicInput:Ma,logicOutput:Da,flipflop:ka,logicClock:$a,gate:Ca,srLatch:Xa,wire:Na},ft=s=>(I("data-v-c5e5b754"),s=s(),S(),s),Ya=ft(()=>t("section",{"data-auto-animate":""},[t("h3",null,"Mux (Multiplexer)"),t("div",{class:"flex justify-center"},[t("img",{"data-src":Ia})])],-1)),Oa=ft(()=>t("h3",null,"2-bit Mux",-1)),Ta={class:"flex justify-center"},Aa=ft(()=>t("section",{"data-auto-animate":""},[t("h3",null,"4-bit Mux"),t("div",{class:"flex justify-center"},[t("img",{"data-src":Sa})])],-1)),ot="section-mux",Ea=p({__name:"mux",setup(s){const e=b(null);let a;function n(){a==null&&(a=new q(e.value,La))}function i(){a&&(a.destroy(),a=null)}return O(()=>{F({id:ot,constructor:n,destructor:i})}),z(()=>{V(ot)}),(r,c)=>(h(),_(Y,null,[Ya,t("section",{"data-auto-animate":"",id:ot},[Oa,t("div",Ta,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)])]),Aa],64))}}),Ra=v(Ea,[["__scopeId","data-v-c5e5b754"]]),Pa="/workshop-apvode/assets/BFoCM-2-inverters-back-to-back-C6syTLfx.svg",Ha="/workshop-apvode/assets/BFoCM-D-Latch-DcswNe3f.svg",za="/workshop-apvode/assets/BFoCM-S-R-Latch-DrsOXjIb.svg",Fa="/workshop-apvode/assets/BFoCM-4-bit-register-DjJr7J86.svg",Va={},ja=g('<section data-v-8c734fd7><h3 data-v-8c734fd7>We can also build circuits to store data</h3></section><section data-v-8c734fd7><div class="flex justify-center" data-v-8c734fd7><img data-src="'+Pa+'" data-v-8c734fd7></div><table class="fragment" data-fragment-index="1" data-v-8c734fd7><tr data-v-8c734fd7><td data-v-8c734fd7>A</td><td data-v-8c734fd7>B</td><td data-v-8c734fd7>C</td></tr><tr class="fragment" data-fragment-index="2" data-v-8c734fd7><td data-v-8c734fd7>0</td><td data-v-8c734fd7>1</td><td data-v-8c734fd7>0</td></tr><tr class="fragment" data-fragment-index="3" data-v-8c734fd7><td data-v-8c734fd7>1</td><td data-v-8c734fd7>0</td><td data-v-8c734fd7>1</td></tr></table></section><section data-v-8c734fd7><h3 class="fragment" data-v-8c734fd7>D Latch</h3><div class="flex justify-center" data-v-8c734fd7><img data-src="'+Ha+'" data-v-8c734fd7></div><div class="fragment text-2xl" data-v-8c734fd7> When the signal of E (enable) is active, the Q output will match the D (data) input, otherwise Q remains at its last state. </div></section><section data-v-8c734fd7><h3 class="fragment" data-v-8c734fd7>S-R Latch</h3><div class="flex justify-center" data-v-8c734fd7><img data-src="'+za+'" data-v-8c734fd7></div><ul class="fragment text-2xl" data-v-8c734fd7><li data-v-8c734fd7>S (Set): The Set input is used to set the output Q to 1. When a high signal (1) is applied to the S input, the latch sets the Q output to 1, regardless of the previous state of the latch.</li><li data-v-8c734fd7>R (Reset): The Reset input is used to reset the output Q to 0. When a high signal (1) is applied to the R input, the latch resets the Q output to 0.</li><li data-v-8c734fd7>If both S and R are high at the same time, it creates an undefined or unstable state.</li></ul></section><section data-v-8c734fd7><h3 class="fragment" data-fragment-index="1" data-v-8c734fd7>4-bit Register</h3><div class="flex justify-center" data-v-8c734fd7><img data-src="'+Fa+'" class="scale-150 fragment custom" data-fragment-index="1" data-v-8c734fd7></div></section>',5);function Ua(s,e){return ja}const Ba=v(Va,[["render",Ua],["__scopeId","data-v-8c734fd7"]]),Wa="/workshop-apvode/assets/BFoCM-component-4-bit-counter-C7Lros7a.svg",Ga="/workshop-apvode/assets/TC-counting-duF_QQYJ.png",Za="/workshop-apvode/assets/TC-decoder-CUVaZzG7.png",Ja="/workshop-apvode/assets/TC-ALU-Dks7jVyS.png",qa=`/**
 * @param {0|1} a
 * @param {0|1} b
 * @param {0|1} c
 * @param {0|1} d
 * @returns {(0|1)[]}
 */
function counter(a, b, c, d) {
	const sum = a + b + c + d;
	return [
		(sum & 0x04) >> 2,
		(sum & 0x02) >> 1,
		(sum & 0x01)
	];
}

// [0, 1, 1]
counter(1,1,1,0);

`,Qa=`// generated by ChatGPT
module half_adder (
    input wire A,    // First input
    input wire B,    // Second input
    output wire S,   // Sum output
    output wire Cout // Carry-out output
);
    // Sum is the XOR of A and B
    assign S = A ^ B;
    // Carry-out is the AND of A and B
    assign Cout = A & B;
endmodule
`,Ka=[{value:0,posX:44,posY:31,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:4,offsetMouseY:6,nodeStartID:0,isSaved:!0},{value:0,posX:44,posY:90,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-8,offsetMouseY:0,nodeStartID:1,isSaved:!0},{value:0,posX:44,posY:148,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:4,offsetMouseY:3,nodeStartID:2,isSaved:!0},{value:0,posX:44,posY:204,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:2,offsetMouseY:-2,nodeStartID:3,isSaved:!0}],ts=[{value:0,posX:365,posY:118,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:8,offsetMouseY:-4,nodeStartID:13,isSaved:!0}],es=[],as=[],ss=[{strType:"XOR",type:6,width:100,height:50,posX:102,posY:35,isSpawned:!0,offsetMouseX:-5,offsetMouseY:-36,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"XOR",type:6,width:100,height:50,posX:102,posY:153,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:7},{strType:"XOR",type:6,width:100,height:50,posX:202,posY:93,isSpawned:!0,offsetMouseX:-53,offsetMouseY:-22,isMoving:!1,isSaved:!0,nodeStartID:10}],ns=[],is=[{startID:0,endID:4,endX:81,endY:34,width:8},{startID:1,endID:5,endX:75,endY:94,width:8},{startID:2,endID:7,endX:72,endY:149,width:8},{startID:3,endID:8,endX:76,endY:205,width:8},{startID:6,endID:10,endX:203,endY:62,width:8},{startID:9,endID:11,endX:202,endY:175,width:8},{startID:12,endID:13,endX:305,endY:121,width:8}],os={logicInput:Ka,logicOutput:ts,flipflop:es,logicClock:as,gate:ss,srLatch:ns,wire:is},ds=[{value:0,posX:29,posY:60,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-10,offsetMouseY:2,nodeStartID:0,isSaved:!0},{value:0,posX:28,posY:156,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:0,nodeStartID:1,isSaved:!0},{value:0,posX:28,posY:246,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-4,offsetMouseY:-5,nodeStartID:2,isSaved:!0},{value:0,posX:28,posY:334,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-1,offsetMouseY:4,nodeStartID:3,isSaved:!0}],rs=[{value:0,posX:621,posY:229,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:-3,nodeStartID:43,isSaved:!0}],ls=[],cs=[],us=[{strType:"AND",type:2,width:100,height:50,posX:140,posY:5,isSpawned:!0,offsetMouseX:-56,offsetMouseY:-38,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"AND",type:2,width:100,height:50,posX:140,posY:73,isSpawned:!0,offsetMouseX:-55,offsetMouseY:-38,isMoving:!1,isSaved:!0,nodeStartID:7},{strType:"AND",type:2,width:100,height:50,posX:139,posY:141,isSpawned:!0,offsetMouseX:-52,offsetMouseY:-22,isMoving:!1,isSaved:!0,nodeStartID:10},{strType:"AND",type:2,width:100,height:50,posX:138,posY:212,isSpawned:!0,offsetMouseX:-55,offsetMouseY:-20,isMoving:!1,isSaved:!0,nodeStartID:13},{strType:"AND",type:2,width:100,height:50,posX:138,posY:279,isSpawned:!0,offsetMouseX:-54,offsetMouseY:-21,isMoving:!1,isSaved:!0,nodeStartID:16},{strType:"AND",type:2,width:100,height:50,posX:138,posY:342,isSpawned:!0,offsetMouseX:-48,offsetMouseY:-19,isMoving:!1,isSaved:!0,nodeStartID:19},{strType:"XOR",type:6,width:100,height:50,posX:247,posY:37,isSpawned:!0,offsetMouseX:-52,offsetMouseY:-42,isMoving:!1,isSaved:!0,nodeStartID:22},{strType:"XOR",type:6,width:100,height:50,posX:248,posY:177,isSpawned:!0,offsetMouseX:-35,offsetMouseY:-26,isMoving:!1,isSaved:!0,nodeStartID:31},{strType:"XOR",type:6,width:100,height:50,posX:244,posY:309,isSpawned:!0,offsetMouseX:-45,offsetMouseY:-20,isMoving:!1,isSaved:!0,nodeStartID:34},{strType:"XOR",type:6,width:100,height:50,posX:355,posY:114,isSpawned:!0,offsetMouseX:-40,offsetMouseY:-27,isMoving:!1,isSaved:!0,nodeStartID:37},{strType:"XOR",type:6,width:100,height:50,posX:455,posY:204,isSpawned:!0,offsetMouseX:-44,offsetMouseY:-28,isMoving:!1,isSaved:!0,nodeStartID:40}],_s=[],hs=[{startID:0,endID:4,endX:73,endY:65,width:8},{startID:0,endID:7,endX:75,endY:65,width:8},{startID:0,endID:10,endX:73,endY:69,width:8},{startID:1,endID:5,endX:79,endY:129,width:8},{startID:2,endID:8,endX:76,endY:187,width:8},{startID:3,endID:11,endX:80,endY:244,width:8},{startID:1,endID:13,endX:76,endY:125,width:8},{startID:1,endID:16,endX:76,endY:126,width:8},{startID:2,endID:14,endX:75,endY:190,width:8},{startID:2,endID:19,endX:71,endY:192,width:8},{startID:3,endID:20,endX:72,endY:247,width:8},{startID:6,endID:22,endX:258,endY:36,width:8},{startID:9,endID:23,endX:259,endY:82,width:8},{startID:12,endID:31,endX:256,endY:126,width:8},{startID:15,endID:32,endX:263,endY:202,width:8},{startID:18,endID:34,endX:258,endY:249,width:8},{startID:21,endID:35,endX:252,endY:301,width:8},{startID:24,endID:37,endX:394,endY:65,width:8},{startID:33,endID:38,endX:385,endY:167,width:8},{startID:36,endID:41,endX:390,endY:268,width:8},{startID:39,endID:40,endX:503,endY:110,width:8},{startID:42,endID:43,endX:605,endY:205,width:8},{startID:3,endID:17,endX:74,endY:250,width:8}],fs={logicInput:ds,logicOutput:rs,flipflop:ls,logicClock:cs,gate:us,srLatch:_s,wire:hs},gs=[{value:0,posX:37,posY:25,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:5,offsetMouseY:0,nodeStartID:0,isSaved:!0},{value:0,posX:37,posY:83,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-4,offsetMouseY:-2,nodeStartID:1,isSaved:!0},{value:0,posX:37,posY:139,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:2,offsetMouseY:2,nodeStartID:2,isSaved:!0},{value:0,posX:37,posY:200,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:8,offsetMouseY:-7,nodeStartID:3,isSaved:!0}],ms=[{value:0,posX:366,posY:113,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:279,offsetMouseY:142,nodeStartID:13,isSaved:!0}],ps=[],vs=[],xs=[{strType:"AND",type:2,width:100,height:50,posX:109,posY:30,isSpawned:!0,offsetMouseX:22,offsetMouseY:59,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"AND",type:2,width:100,height:50,posX:109,posY:143,isSpawned:!0,offsetMouseX:18,offsetMouseY:172,isMoving:!1,isSaved:!0,nodeStartID:7},{strType:"AND",type:2,width:100,height:50,posX:209,posY:88,isSpawned:!0,offsetMouseX:120,offsetMouseY:117,isMoving:!1,isSaved:!0,nodeStartID:10}],ws=[],bs=[{startID:0,endID:4,endX:109,endY:46,width:8},{startID:1,endID:5,endX:113,endY:104,width:8},{startID:2,endID:7,endX:112,endY:156,width:8},{startID:3,endID:8,endX:110,endY:215,width:8},{startID:6,endID:10,endX:249,endY:76,width:8},{startID:9,endID:11,endX:244,endY:184,width:8},{startID:12,endID:13,endX:351,endY:133,width:8}],ys={logicInput:gs,logicOutput:ms,flipflop:ps,logicClock:vs,gate:xs,srLatch:ws,wire:bs},Is=["id"],Ss=t("h3",null,"Counter",-1),Ms={class:"w-full flex justify-center"},dt=p({__name:"counter-simulator-loader",props:{section_id:String,subtitle:String,LCJson:Object,canvas_width:{type:[Number,String],default:500},canvas_height:{type:[Number,String],default:500}},setup(s){const e=s,a=St({width:`${e.canvas_width}px`,height:`${e.canvas_height}px`}),n=b(null);let i;function r(){i==null&&(i=new q(n.value,e.LCJson))}function c(){i&&(i.destroy(),i=null)}return O(()=>{F({id:e.section_id,constructor:r,destructor:c})}),z(()=>{V(e.section_id)}),(l,x)=>(h(),_("section",{"data-auto-animate":"",id:s.section_id},[Ss,t("h4",null,B(s.subtitle),1),t("div",Ms,[t("div",{ref_key:"refDivSimulator",ref:n,style:Mt(a)},null,4)])],8,Is))}}),st=s=>(I("data-v-83c791cd"),s=s(),S(),s),Ds={"data-auto-animate":""},ks=st(()=>t("h3",null,"Counter",-1)),$s={class:"flex justify-between"},Cs=st(()=>t("img",{"data-src":Wa},null,-1)),Xs=g('<section data-auto-animate data-v-83c791cd><h3 data-v-83c791cd>Counter</h3><table class="mono text-center text-lg" data-v-83c791cd><tr data-v-83c791cd><td data-v-83c791cd>Input0</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>1</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Input1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>1</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Input2</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>1</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Input3</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>1</td></tr><tr class="bg-zinc-100 text-zinc-800" data-v-83c791cd><td data-v-83c791cd>Count</td><td class="fragment bg-zinc-100 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>2</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>3</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>3</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>3</td><td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>3</td><td class="fragment bg-zinc-100 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>4</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Output0</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>0</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Output1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>1</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>0</td></tr><tr data-v-83c791cd><td data-v-83c791cd>Output2</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4" data-v-83c791cd>0</td><td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5" data-v-83c791cd>1</td></tr></table><a href="https://drendog.github.io/Logic-Circuit-Simulator/" target="_blank" data-v-83c791cd>Logic Circuit Simulator</a></section>',1),Ns=g('<section data-auto-animate data-v-83c791cd><h3 data-v-83c791cd>Counter</h3><div class="flex justify-center" data-v-83c791cd><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-83c791cd><img data-src="'+Ga+'" data-v-83c791cd></a></div></section><section data-v-83c791cd><h3 data-v-83c791cd>Decoder</h3><div class="flex justify-center" data-v-83c791cd><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-83c791cd><img data-src="'+Za+'" data-v-83c791cd></a></div></section><section data-v-83c791cd><h3 data-v-83c791cd>ALU (Arithmetic Logic Unit)</h3><div class="flex justify-center" data-v-83c791cd><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-83c791cd><img data-src="'+Ja+'" class="scale-75 m-0" data-v-83c791cd></a></div></section>',3),Ls=st(()=>t("h3",null,"Hardware Design in Real World",-1)),Ys={class:"flex justify-between"},Os=st(()=>t("ul",{class:"text-3xl"},[t("li",null,"Use high-level languages like Verilog or VHDL to describe the behavior of the circuit."),t("li",null,"Use synthesis tools to generate a detailed, optimized map of the logic gates and their interconnections. (performance, area, power consumption, ...)")],-1)),Ts=p({__name:"advanced",setup(s){return(e,a)=>{const n=T("highlightjs");return h(),_(Y,null,[t("section",Ds,[ks,t("div",$s,[Cs,t("div",null,[o(n,{language:"javascript",autodetect:!1,code:u(qa)},null,8,["code"])])])]),Xs,o(dt,{section_id:"section-counter-output-2",subtitle:"Output2",LCJson:u(ys),canvas_height:"260",canvas_width:"420"},null,8,["LCJson"]),o(dt,{section_id:"section-counter-output-0",subtitle:"Output0",LCJson:u(os),canvas_height:"260",canvas_width:"420"},null,8,["LCJson"]),o(dt,{section_id:"section-counter-output-1",subtitle:"Output1",LCJson:u(fs),canvas_height:"420",canvas_width:"660"},null,8,["LCJson"]),Ns,t("section",null,[Ls,t("div",Ys,[o(n,{language:"verilog",autodetect:!1,code:u(Qa)},null,8,["code"])]),Os])],64)}}}),As=v(Ts,[["__scopeId","data-v-83c791cd"]]),Es=t("section",null,[t("h3",null,"Now, let's build a few components")],-1),Rs=p({__name:"basic-components",setup(s){return(e,a)=>(h(),_("section",null,[Es,o(Ge),o(ga),o(ya),o(Ra),o(Ba),o(As)]))}}),Ps="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79.15691%2025H95M29.043478%2025h-24'/%3e%3cpath%20d='M28.96875%202.59375v44.8125l2.15625-1.0625%2041.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3%204.8125L68.09375%2025l-36.125%2017.59375V7.40625z'%20style='marker:none'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",Hs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20d='M30%205V45H50.47619c11.267908%200%2020-9.000045%2020-20s-8.732091-20-20-20H30zm2.857143%202.857143H50.47619c9.760663%200%2016.666667%207.639955%2016.666667%2017.142857%200%209.502902-7.382195%2017.142857-17.142857%2017.142857H32.857143V7.857143z'%20/%3e%3c/svg%3e",zs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3c/svg%3e",Fs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79%2025h16M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",Vs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M30.38572%2015H5M31.3621%2035H5'/%3e%3cg%20fill-rule='evenodd'%3e%3cpath%20d='M24.25%2042C22.65263%2044.6444%2022%2045%2022%2045h-3.65625l2-2.4375S26%2035.56245%2026%2025%2020.34375%207.4375%2020.34375%207.4375l-2-2.4375H22c.78125.9375%201.42188%201.65625%202.21875%203C26.09147%2011.09981%2029%2017.02665%2029%2025c0%207.95065-2.8967%2013.87942-4.75%2017z'/%3e%3cpath%20d='M24.09375%205l2%202.4375S31.75%2014.43755%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.40808%200%207.6897.02451%2013.625-2.40625s12.53654-7.34327%2017.6875-16.875L71.25%2025l1.3125-.71875C62.25939%205.21559%2046.00657%205%2041.25%205H24.09375zm5.875%203H41.25c4.68417%200%2018.28685-.1302%2027.96875%2017C64.45196%2033.42907%2058.69747%2037.68391%2053.5%2039.8125%2048.13934%2042.00792%2043.65808%2042%2041.25%2042H30c1.87359-3.10843%204.75-9.04935%204.75-17%200-7.97335-2.90853-13.90019-4.78125-17z'/%3e%3c/g%3e%3c/svg%3e",js="/workshop-apvode/assets/Aldrin_Apollo_11-BGFVsI5c.jpg",Us="/workshop-apvode/assets/CMOS_NAND-C6-3LW1A.svg",Bs="/workshop-apvode/assets/NAND_ANSI_Labelled-djz2KPhH.svg",Ws=[{value:1,posX:24,posY:77,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:1,nodeStartID:3,isSaved:!0},{value:1,posX:22,posY:22,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:3,nodeStartID:4,isSaved:!0}],Gs=[{value:!1,posX:233,posY:48,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:8,isSaved:!0}],Zs=[],Js=[],qs=[{strType:"NAND",type:3,width:100,height:50,posX:82,posY:23,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:5}],Qs=[],Ks=[{startID:4,endID:5,endX:57,endY:25,width:8},{startID:3,endID:6,endX:60,endY:77,width:8},{startID:7,endID:8,endX:186,endY:47,width:8}],tn={logicInput:Ws,logicOutput:Gs,flipflop:Zs,logicClock:Js,gate:qs,srLatch:Qs,wire:Ks},Nt=s=>(I("data-v-426ed54b"),s=s(),S(),s),en=["id"],an=Nt(()=>t("h3",null,"The NAND Gate",-1)),sn={class:"flex"},nn=Nt(()=>t("div",{class:"w-1/2 flex justify-center"},[t("img",{"data-src":Us})],-1)),on={class:"flex flex-col items-center w-1/2 justify-evenly"},dn=g('<div class="w-full flex justify-center items-center bg-white" data-v-426ed54b><img data-src="'+Bs+'" data-v-426ed54b></div><table class="text-lg text-center" style="margin:initial;" data-v-426ed54b><thead data-v-426ed54b><tr data-v-426ed54b><th data-v-426ed54b>Input A</th><th data-v-426ed54b>Input B</th><th data-v-426ed54b>Output Q</th></tr></thead><tbody data-v-426ed54b><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td></tr></tbody></table>',2),rn=p({__name:"nand",setup(s){const e=b("section-nand"),a=b(null);let n;function i(){n==null&&(n=new q(a.value,tn))}function r(){n&&(n.destroy(),n=null)}return O(()=>{F({id:e.value,constructor:i,destructor:r})}),z(()=>{V(e.value)}),(c,l)=>(h(),_("section",{id:e.value},[an,t("div",sn,[nn,t("div",on,[dn,t("div",{ref_key:"refDivSimulator",ref:a,class:"nand-gate-container"},null,512)])])],8,en))}}),ln=v(rn,[["__scopeId","data-v-426ed54b"]]),cn=["id"],un={class:"fragment","data-fragment-index":"6"},_n={class:"flex justify-center fragment","data-fragment-index":"5"},hn={class:"w-full flex justify-center"},fn={class:"fragment","data-fragment-index":"0"},U=p({__name:"gate",props:{section_id:String,LCJson:Object,canvas_width:{type:[Number,String],default:500},canvas_height:{type:[Number,String],default:500}},setup(s){const e=b(null);let a;const n=s,i=St({width:`${n.canvas_width}px`,height:`${n.canvas_height}px`});function r(){a==null&&(a=new q(e.value,n.LCJson))}function c(){a&&(a.destroy(),a=null)}return O(()=>{F({id:n.section_id,constructor:r,destructor:c})}),z(()=>{V(n.section_id)}),(l,x)=>(h(),_("section",{id:s.section_id},[t("h3",un,[tt(l.$slots,"header")]),t("div",_n,[tt(l.$slots,"symbol")]),t("div",hn,[t("div",{ref_key:"refDivSimulator",ref:e,style:Mt(i)},null,4)]),t("div",fn,[tt(l.$slots,"tftable")])],8,cn))}}),gn=[{value:!1,posX:63,posY:75,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:0,isSaved:!0}],mn=[{value:!0,posX:286,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:4,isSaved:!0}],pn=[],vn=[],xn=[{strType:"NAND",type:3,width:100,height:50,posX:131,posY:51,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:1}],wn=[],bn=[{startID:0,endID:1,endX:95,endY:71,width:8},{startID:0,endID:2,endX:99,endY:77,width:8},{startID:3,endID:4,endX:232,endY:78,width:8}],yn={logicInput:gn,logicOutput:mn,flipflop:pn,logicClock:vn,gate:xn,srLatch:wn,wire:bn},In=[{value:0,posX:38,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:-2,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:89,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:1,nodeStartID:7,isSaved:!0}],Sn=[{value:!1,posX:374,posY:57,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:307,offsetMouseY:96,nodeStartID:5,isSaved:!0}],Mn=[],Dn=[],kn=[{strType:"NAND",type:3,width:100,height:50,posX:101,posY:31,isSpawned:!0,offsetMouseX:34,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:219,posY:31,isSpawned:!0,offsetMouseX:152,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:3}],$n=[],Cn=[{startID:6,endID:0,endX:74,endY:51,width:8},{startID:7,endID:1,endX:85,endY:114,width:8},{startID:2,endID:3,endX:221,endY:76,width:8},{startID:4,endID:5,endX:328,endY:80,width:8}],Xn={logicInput:In,logicOutput:Sn,flipflop:Mn,logicClock:Dn,gate:kn,srLatch:$n,wire:Cn},Nn=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-2,offsetMouseY:6,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:2,offsetMouseY:7,nodeStartID:5,isSaved:!0}],Ln=[{value:!1,posX:341,posY:63,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:7,offsetMouseY:2,nodeStartID:9,isSaved:!0}],Yn=[],On=[],Tn=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"NAND",type:3,width:100,height:50,posX:191,posY:38,isSpawned:!0,offsetMouseX:-2,offsetMouseY:-16,isMoving:!1,isSaved:!0,nodeStartID:6}],An=[],En=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:6,endX:178,endY:38,width:8},{startID:4,endID:7,endX:176,endY:92,width:8},{startID:8,endID:9,endX:295,endY:62,width:8}],Rn={logicInput:Nn,logicOutput:Ln,flipflop:Yn,logicClock:On,gate:Tn,srLatch:An,wire:En},Pn=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:-5,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:7,nodeStartID:5,isSaved:!0}],Hn=[{value:!0,posX:338,posY:66,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:13,isSaved:!0}],zn=[],Fn=[],Vn=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:186,posY:41,isSpawned:!0,offsetMouseX:-98,offsetMouseY:-22,isMoving:!1,isSaved:!0,nodeStartID:10}],jn=[],Un=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:10,endX:175,endY:42,width:8},{startID:4,endID:11,endX:179,endY:92,width:8},{startID:12,endID:13,endX:284,endY:63,width:8}],Bn={logicInput:Pn,logicOutput:Hn,flipflop:zn,logicClock:Fn,gate:Vn,srLatch:jn,wire:Un},Wn=[{value:0,posX:29,posY:85,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-10,offsetMouseY:5,nodeStartID:0,isSaved:!0},{value:0,posX:30,posY:135,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-4,offsetMouseY:10,nodeStartID:1,isSaved:!0}],Gn=[{value:!1,posX:450,posY:104,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:381,offsetMouseY:142,nodeStartID:15,isSaved:!0}],Zn=[],Jn=[],qn=[{strType:"NOT",type:1,width:100,height:50,posX:63,posY:5,isSpawned:!0,offsetMouseX:-6,offsetMouseY:43,isMoving:!1,isSaved:!0,nodeStartID:2},{strType:"NOT",type:1,width:100,height:50,posX:63,posY:169,isSpawned:!0,offsetMouseX:-6,offsetMouseY:207,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"OR",type:4,width:100,height:50,posX:191,posY:15,isSpawned:!0,offsetMouseX:122,offsetMouseY:53,isMoving:!1,isSaved:!0,nodeStartID:6},{strType:"OR",type:4,width:100,height:50,posX:189,posY:159,isSpawned:!0,offsetMouseX:120,offsetMouseY:197,isMoving:!1,isSaved:!0,nodeStartID:9},{strType:"NAND",type:3,width:100,height:50,posX:292,posY:79,isSpawned:!0,offsetMouseX:223,offsetMouseY:117,isMoving:!1,isSaved:!0,nodeStartID:12}],Qn=[],Kn=[{startID:0,endID:2,endX:384,endY:208,width:8},{startID:1,endID:4,endX:384,endY:208,width:8},{startID:5,endID:10,endX:384,endY:208,width:8},{startID:3,endID:6,endX:384,endY:208,width:8},{startID:1,endID:7,endX:384,endY:208,width:8},{startID:0,endID:9,endX:384,endY:208,width:8},{startID:8,endID:12,endX:384,endY:208,width:8},{startID:11,endID:13,endX:384,endY:208,width:8},{startID:14,endID:15,endX:384,endY:208,width:8}],ti={logicInput:Wn,logicOutput:Gn,flipflop:Zn,logicClock:Jn,gate:qn,srLatch:Qn,wire:Kn},ei={class:"text-lg text-center"},ai=t("thead",null,[t("tr",null,[t("th",null,"Input A"),t("th",null,"Input B"),t("th",null,"Output Q")])],-1),si=["data-fragment-index"],K=p({__name:"truth-table",props:{method:{type:String}},setup(s){const e=b([]),a=s;return O(()=>{e.value.length==0&&[[0,0],[1,0],[0,1],[1,1]].forEach(([n,i])=>{let r=0;switch(a.method){case"xor":r=n^i;break;case"or":r=n|i;break;case"and":r=n&i;break;case"nor":r=n|i?0:1;break;case"nand":r=n&i?0:1;break}e.value.push([n,i,r])})}),(n,i)=>(h(),_("table",ei,[ai,t("tbody",null,[(h(!0),_(Y,null,G(e.value,(r,c)=>(h(),_("tr",{class:"fragment","data-fragment-index":c+1},[t("td",null,B(r[0]),1),t("td",null,B(r[1]),1),t("td",null,B(r[2]),1)],8,si))),256))])]))}}),ni={},ii={class:"problem-stack"},oi=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),di=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),ri=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),li=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),ci=t("tr",{class:"ps-isa"},[t("td",null," ")],-1),ui=t("tr",{class:"ps-hw"},[t("td",null," ")],-1),_i=t("tr",{class:"ps-hw"},[t("td",{style:{"font-weight":"bold"}},"Logic")],-1),hi=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),fi=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),gi=[oi,di,ri,li,ci,ui,_i,hi,fi];function mi(s,e){return h(),_("table",ii,gi)}const pi=v(ni,[["render",mi]]),vi=t("section",null,[t("h3",null,"Boolean Algebra"),t("table",{class:"text-center"},[t("tr",null,[t("td",null,"AND"),t("td",null,[t("code",null,"1 AND 0 = 0")])]),t("tr",null,[t("td",null,"OR"),t("td",null,[t("code",null,"1 OR 0 = 1")])]),t("tr",null,[t("td",{colspan:"2"},"...")])])],-1),xi=t("img",{class:"bg-white scale-150","data-src":Ps},null,-1),wi=t("table",{class:"text-lg text-center"},[t("thead",null,[t("tr",null,[t("th",null,"Input"),t("th",null,"Output")])]),t("tbody",null,[t("tr",{class:"fragment","data-fragment-index":"1"},[t("td",null,"0"),t("td",null,"1")]),t("tr",{class:"fragment","data-fragment-index":"2"},[t("td",null,"1"),t("td",null,"0")])])],-1),bi=t("img",{class:"bg-white scale-150","data-src":Hs},null,-1),yi=t("img",{class:"bg-white scale-150","data-src":zs},null,-1),Ii=t("img",{class:"bg-white scale-150","data-src":Fs},null,-1),Si=t("img",{class:"bg-white scale-150","data-src":Vs},null,-1),Mi=t("h3",null,"Summary of Logic Gates",-1),Di={class:"flex"},ki=t("a",{href:"https://exclusivearchitecture.com/03-technical-articles-IC-02-03-logic-level.html",target:"_blank"},[t("img",{"data-src":kt})],-1),$i=g('<section><h3>Universal Gates: NOR &amp; NAND</h3><div class="flex items-center"><div><a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank"><img data-src="'+js+'"></a></div><div><ul style="font-size:32px;"><li>It&#39;s possible to implement a computer with NOR or NAND gates only. Read more about <a href="https://en.wikipedia.org/wiki/NOR_logic" target="_blank">NOR logic</a> and <a href="https://en.wikipedia.org/wiki/NAND_logic" target="_blank">NAND logic</a> on Wikipedia.</li><li>The Apollo Guidance Computers (1966-1975) were implemented with NOR gate only.</li></ul></div></div></section>',1),Ci=p({__name:"boolean-algebra",setup(s){return(e,a)=>(h(),_("section",null,[vi,o(ln),o(U,{section_id:"section-not-gate",LCJson:u(yn),canvas_height:"160",canvas_width:"340"},{header:w(()=>[f("NOT")]),symbol:w(()=>[xi]),tftable:w(()=>[wi]),_:1},8,["LCJson"]),o(U,{section_id:"section-and-gate",LCJson:u(Xn),canvas_height:"140",canvas_width:"420"},{header:w(()=>[f("AND")]),symbol:w(()=>[bi]),tftable:w(()=>[o(K,{method:"and"})]),_:1},8,["LCJson"]),o(U,{section_id:"section-or-gate",LCJson:u(Rn),canvas_height:"140",canvas_width:"380"},{header:w(()=>[f("OR")]),symbol:w(()=>[yi]),tftable:w(()=>[o(K,{method:"or"})]),_:1},8,["LCJson"]),o(U,{section_id:"section-nor-gate",LCJson:u(Bn),canvas_height:"140",canvas_width:"380"},{header:w(()=>[f("NOR")]),symbol:w(()=>[Ii]),tftable:w(()=>[o(K,{method:"nor"})]),_:1},8,["LCJson"]),o(U,{section_id:"section-xor-gate",LCJson:u(ti),canvas_height:"220",canvas_width:"480"},{header:w(()=>[f("XOR")]),symbol:w(()=>[Si]),tftable:w(()=>[o(K,{method:"xor"})]),_:1},8,["LCJson"]),t("section",null,[Mi,t("div",Di,[o(pi,{class:"text-lg"}),ki])]),$i]))}}),Xi={},Ni={class:"problem-stack"},Li=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),Yi=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),Oi=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Ti=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),Ai=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),Ei=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),Ri=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),Pi=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Hi=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),zi=[Li,Yi,Oi,Ti,Ai,Ei,Ri,Pi,Hi];function Fi(s,e){return h(),_("table",Ni,zi)}const Lt=v(Xi,[["render",Fi]]),Vi=t("h3",null,"Summary of Part One",-1),ji={class:"flex text-3xl"},Ui=t("div",{class:"flex flex-col justify-center"},[t("ul",null,[t("li",null,"Signals, logic gates"),t("li",null,"von Neumann architecture"),t("li",null,"Computers in early days")])],-1),Bi=p({__name:"break-1",setup(s){return(e,a)=>(h(),_("section",null,[Vi,t("div",ji,[o(Lt,{class:""}),Ui])]))}}),Wi={},Gi={class:"problem-stack"},Zi=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),Ji=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),qi=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Qi=t("tr",{class:"ps-sw"},[t("td",null,[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),Ki=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),to=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),eo=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),ao=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),so=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),no=[Zi,Ji,qi,Qi,Ki,to,eo,ao,so];function io(s,e){return h(),_("table",Gi,no)}const oo=v(Wi,[["render",io]]),Yt=s=>(I("data-v-99836d95"),s=s(),S(),s),ro=Yt(()=>t("h3",null,"Break",-1)),lo={class:"column-2"},co=Yt(()=>t("div",null,[t("ul",null,[t("li",null,"ISA"),t("li",null,"UNIX and C")])],-1)),uo=p({__name:"break-2",setup(s){return(e,a)=>(h(),_("section",null,[ro,t("div",lo,[t("div",null,[o(oo)]),co])]))}}),_o=v(uo,[["__scopeId","data-v-99836d95"]]),ho="/workshop-apvode/assets/BFoCM-compile-c-preprocessor-B4jrbsIZ.svg",fo="/workshop-apvode/assets/BFoCM-compile-c-compiler-CStMhMz0.svg",go="/workshop-apvode/assets/BFoCM-compile-c-assembler-Bf70tcNB.svg",mo="/workshop-apvode/assets/BFoCM-compile-c-linker-DwuZ7KoS.svg",P=`#include <stdio.h>

int main() {
	printf("hello world\\n");
	return 0;
}

`,po=`# 0 "main.c"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "main.c"
# 1 "/usr/include/stdio.h" 1 3 4
# 27 "/usr/include/stdio.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 1 3 4
# 33 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 3 4
# 1 "/usr/include/features.h" 1 3 4
# 392 "/usr/include/features.h" 3 4
# 1 "/usr/include/features-time64.h" 1 3 4
# 20 "/usr/include/features-time64.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 21 "/usr/include/features-time64.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 1 3 4
# 19 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 20 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 2 3 4
# 22 "/usr/include/features-time64.h" 2 3 4
# 393 "/usr/include/features.h" 2 3 4
# 486 "/usr/include/features.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 1 3 4
# 559 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 560 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/long-double.h" 1 3 4
# 561 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 2 3 4
# 487 "/usr/include/features.h" 2 3 4
# 510 "/usr/include/features.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 1 3 4
# 10 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/gnu/stubs-64.h" 1 3 4
# 11 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 2 3 4
# 511 "/usr/include/features.h" 2 3 4
# 34 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 2 3 4
# 28 "/usr/include/stdio.h" 2 3 4





# 1 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 1 3 4
# 209 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 3 4

# 209 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 3 4
typedef long unsigned int size_t;
# 34 "/usr/include/stdio.h" 2 3 4


# 1 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stdarg.h" 1 3 4
# 40 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stdarg.h" 3 4
typedef __builtin_va_list __gnuc_va_list;
# 37 "/usr/include/stdio.h" 2 3 4

# 1 "/usr/include/x86_64-linux-gnu/bits/types.h" 1 3 4
# 27 "/usr/include/x86_64-linux-gnu/bits/types.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 28 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 1 3 4
# 19 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 20 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 2 3 4
# 29 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4


typedef unsigned char __u_char;
typedef unsigned short int __u_short;
typedef unsigned int __u_int;
typedef unsigned long int __u_long;


typedef signed char __int8_t;
typedef unsigned char __uint8_t;
typedef signed short int __int16_t;
typedef unsigned short int __uint16_t;
typedef signed int __int32_t;
typedef unsigned int __uint32_t;

typedef signed long int __int64_t;
typedef unsigned long int __uint64_t;






typedef __int8_t __int_least8_t;
typedef __uint8_t __uint_least8_t;
typedef __int16_t __int_least16_t;
typedef __uint16_t __uint_least16_t;
typedef __int32_t __int_least32_t;
typedef __uint32_t __uint_least32_t;
typedef __int64_t __int_least64_t;
typedef __uint64_t __uint_least64_t;



typedef long int __quad_t;
typedef unsigned long int __u_quad_t;







typedef long int __intmax_t;
typedef unsigned long int __uintmax_t;
# 141 "/usr/include/x86_64-linux-gnu/bits/types.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/typesizes.h" 1 3 4
# 142 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/time64.h" 1 3 4
# 143 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4


typedef unsigned long int __dev_t;
typedef unsigned int __uid_t;
typedef unsigned int __gid_t;
typedef unsigned long int __ino_t;
typedef unsigned long int __ino64_t;
typedef unsigned int __mode_t;
typedef unsigned long int __nlink_t;
typedef long int __off_t;
typedef long int __off64_t;
typedef int __pid_t;
typedef struct { int __val[2]; } __fsid_t;
typedef long int __clock_t;
typedef unsigned long int __rlim_t;
typedef unsigned long int __rlim64_t;
typedef unsigned int __id_t;
typedef long int __time_t;
typedef unsigned int __useconds_t;
typedef long int __suseconds_t;
typedef long int __suseconds64_t;

typedef int __daddr_t;
typedef int __key_t;


typedef int __clockid_t;


typedef void * __timer_t;


typedef long int __blksize_t;




typedef long int __blkcnt_t;
typedef long int __blkcnt64_t;


typedef unsigned long int __fsblkcnt_t;
typedef unsigned long int __fsblkcnt64_t;


typedef unsigned long int __fsfilcnt_t;
typedef unsigned long int __fsfilcnt64_t;


typedef long int __fsword_t;

typedef long int __ssize_t;


typedef long int __syscall_slong_t;

typedef unsigned long int __syscall_ulong_t;



typedef __off64_t __loff_t;
typedef char *__caddr_t;


typedef long int __intptr_t;


typedef unsigned int __socklen_t;




typedef int __sig_atomic_t;
# 39 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__fpos_t.h" 1 3 4




# 1 "/usr/include/x86_64-linux-gnu/bits/types/__mbstate_t.h" 1 3 4
# 13 "/usr/include/x86_64-linux-gnu/bits/types/__mbstate_t.h" 3 4
typedef struct
{
  int __count;
  union
  {
    unsigned int __wch;
    char __wchb[4];
  } __value;
} __mbstate_t;
# 6 "/usr/include/x86_64-linux-gnu/bits/types/__fpos_t.h" 2 3 4




typedef struct _G_fpos_t
{
  __off_t __pos;
  __mbstate_t __state;
} __fpos_t;
# 40 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__fpos64_t.h" 1 3 4
# 10 "/usr/include/x86_64-linux-gnu/bits/types/__fpos64_t.h" 3 4
typedef struct _G_fpos64_t
{
  __off64_t __pos;
  __mbstate_t __state;
} __fpos64_t;
# 41 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__FILE.h" 1 3 4



struct _IO_FILE;
typedef struct _IO_FILE __FILE;
# 42 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/FILE.h" 1 3 4



struct _IO_FILE;


typedef struct _IO_FILE FILE;
# 43 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/struct_FILE.h" 1 3 4
# 35 "/usr/include/x86_64-linux-gnu/bits/types/struct_FILE.h" 3 4
struct _IO_FILE;
struct _IO_marker;
struct _IO_codecvt;
struct _IO_wide_data;




typedef void _IO_lock_t;





struct _IO_FILE
{
  int _flags;


  char *_IO_read_ptr;
  char *_IO_read_end;
  char *_IO_read_base;
  char *_IO_write_base;
  char *_IO_write_ptr;
  char *_IO_write_end;
  char *_IO_buf_base;
  char *_IO_buf_end;


  char *_IO_save_base;
  char *_IO_backup_base;
  char *_IO_save_end;

  struct _IO_marker *_markers;

  struct _IO_FILE *_chain;

  int _fileno;
  int _flags2;
  __off_t _old_offset;


  unsigned short _cur_column;
  signed char _vtable_offset;
  char _shortbuf[1];

  _IO_lock_t *_lock;







  __off64_t _offset;

  struct _IO_codecvt *_codecvt;
  struct _IO_wide_data *_wide_data;
  struct _IO_FILE *_freeres_list;
  void *_freeres_buf;
  size_t __pad5;
  int _mode;

  char _unused2[15 * sizeof (int) - 4 * sizeof (void *) - sizeof (size_t)];
};
# 44 "/usr/include/stdio.h" 2 3 4
# 52 "/usr/include/stdio.h" 3 4
typedef __gnuc_va_list va_list;
# 63 "/usr/include/stdio.h" 3 4
typedef __off_t off_t;
# 77 "/usr/include/stdio.h" 3 4
typedef __ssize_t ssize_t;






typedef __fpos_t fpos_t;
# 133 "/usr/include/stdio.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/stdio_lim.h" 1 3 4
# 134 "/usr/include/stdio.h" 2 3 4
# 143 "/usr/include/stdio.h" 3 4
extern FILE *stdin;
extern FILE *stdout;
extern FILE *stderr;






extern int remove (const char *__filename) __attribute__ ((__nothrow__ , __leaf__));

extern int rename (const char *__old, const char *__new) __attribute__ ((__nothrow__ , __leaf__));



extern int renameat (int __oldfd, const char *__old, int __newfd,
       const char *__new) __attribute__ ((__nothrow__ , __leaf__));
# 178 "/usr/include/stdio.h" 3 4
extern int fclose (FILE *__stream);
# 188 "/usr/include/stdio.h" 3 4
extern FILE *tmpfile (void)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 205 "/usr/include/stdio.h" 3 4
extern char *tmpnam (char[20]) __attribute__ ((__nothrow__ , __leaf__)) ;




extern char *tmpnam_r (char __s[20]) __attribute__ ((__nothrow__ , __leaf__)) ;
# 222 "/usr/include/stdio.h" 3 4
extern char *tempnam (const char *__dir, const char *__pfx)
   __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (__builtin_free, 1)));






extern int fflush (FILE *__stream);
# 239 "/usr/include/stdio.h" 3 4
extern int fflush_unlocked (FILE *__stream);
# 258 "/usr/include/stdio.h" 3 4
extern FILE *fopen (const char *__restrict __filename,
      const char *__restrict __modes)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;




extern FILE *freopen (const char *__restrict __filename,
        const char *__restrict __modes,
        FILE *__restrict __stream) ;
# 293 "/usr/include/stdio.h" 3 4
extern FILE *fdopen (int __fd, const char *__modes) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 308 "/usr/include/stdio.h" 3 4
extern FILE *fmemopen (void *__s, size_t __len, const char *__modes)
  __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;




extern FILE *open_memstream (char **__bufloc, size_t *__sizeloc) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 328 "/usr/include/stdio.h" 3 4
extern void setbuf (FILE *__restrict __stream, char *__restrict __buf) __attribute__ ((__nothrow__ , __leaf__));



extern int setvbuf (FILE *__restrict __stream, char *__restrict __buf,
      int __modes, size_t __n) __attribute__ ((__nothrow__ , __leaf__));




extern void setbuffer (FILE *__restrict __stream, char *__restrict __buf,
         size_t __size) __attribute__ ((__nothrow__ , __leaf__));


extern void setlinebuf (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));







extern int fprintf (FILE *__restrict __stream,
      const char *__restrict __format, ...);




extern int printf (const char *__restrict __format, ...);

extern int sprintf (char *__restrict __s,
      const char *__restrict __format, ...) __attribute__ ((__nothrow__));





extern int vfprintf (FILE *__restrict __s, const char *__restrict __format,
       __gnuc_va_list __arg);




extern int vprintf (const char *__restrict __format, __gnuc_va_list __arg);

extern int vsprintf (char *__restrict __s, const char *__restrict __format,
       __gnuc_va_list __arg) __attribute__ ((__nothrow__));



extern int snprintf (char *__restrict __s, size_t __maxlen,
       const char *__restrict __format, ...)
     __attribute__ ((__nothrow__)) __attribute__ ((__format__ (__printf__, 3, 4)));

extern int vsnprintf (char *__restrict __s, size_t __maxlen,
        const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__nothrow__)) __attribute__ ((__format__ (__printf__, 3, 0)));
# 403 "/usr/include/stdio.h" 3 4
extern int vdprintf (int __fd, const char *__restrict __fmt,
       __gnuc_va_list __arg)
     __attribute__ ((__format__ (__printf__, 2, 0)));
extern int dprintf (int __fd, const char *__restrict __fmt, ...)
     __attribute__ ((__format__ (__printf__, 2, 3)));







extern int fscanf (FILE *__restrict __stream,
     const char *__restrict __format, ...) ;




extern int scanf (const char *__restrict __format, ...) ;

extern int sscanf (const char *__restrict __s,
     const char *__restrict __format, ...) __attribute__ ((__nothrow__ , __leaf__));





# 1 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 1 3 4
# 119 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 1 3 4
# 24 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/long-double.h" 1 3 4
# 25 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 2 3 4
# 120 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 2 3 4
# 431 "/usr/include/stdio.h" 2 3 4



extern int fscanf (FILE *__restrict __stream, const char *__restrict __format, ...) __asm__ ("" "__isoc99_fscanf")

                               ;
extern int scanf (const char *__restrict __format, ...) __asm__ ("" "__isoc99_scanf")
                              ;
extern int sscanf (const char *__restrict __s, const char *__restrict __format, ...) __asm__ ("" "__isoc99_sscanf") __attribute__ ((__nothrow__ , __leaf__))

                      ;
# 459 "/usr/include/stdio.h" 3 4
extern int vfscanf (FILE *__restrict __s, const char *__restrict __format,
      __gnuc_va_list __arg)
     __attribute__ ((__format__ (__scanf__, 2, 0))) ;





extern int vscanf (const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__format__ (__scanf__, 1, 0))) ;


extern int vsscanf (const char *__restrict __s,
      const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__format__ (__scanf__, 2, 0)));





extern int vfscanf (FILE *__restrict __s, const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vfscanf")



     __attribute__ ((__format__ (__scanf__, 2, 0))) ;
extern int vscanf (const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vscanf")

     __attribute__ ((__format__ (__scanf__, 1, 0))) ;
extern int vsscanf (const char *__restrict __s, const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vsscanf") __attribute__ ((__nothrow__ , __leaf__))



     __attribute__ ((__format__ (__scanf__, 2, 0)));
# 513 "/usr/include/stdio.h" 3 4
extern int fgetc (FILE *__stream);
extern int getc (FILE *__stream);





extern int getchar (void);






extern int getc_unlocked (FILE *__stream);
extern int getchar_unlocked (void);
# 538 "/usr/include/stdio.h" 3 4
extern int fgetc_unlocked (FILE *__stream);
# 549 "/usr/include/stdio.h" 3 4
extern int fputc (int __c, FILE *__stream);
extern int putc (int __c, FILE *__stream);





extern int putchar (int __c);
# 565 "/usr/include/stdio.h" 3 4
extern int fputc_unlocked (int __c, FILE *__stream);







extern int putc_unlocked (int __c, FILE *__stream);
extern int putchar_unlocked (int __c);






extern int getw (FILE *__stream);


extern int putw (int __w, FILE *__stream);







extern char *fgets (char *__restrict __s, int __n, FILE *__restrict __stream)
     __attribute__ ((__access__ (__write_only__, 1, 2)));
# 632 "/usr/include/stdio.h" 3 4
extern __ssize_t __getdelim (char **__restrict __lineptr,
                             size_t *__restrict __n, int __delimiter,
                             FILE *__restrict __stream) ;
extern __ssize_t getdelim (char **__restrict __lineptr,
                           size_t *__restrict __n, int __delimiter,
                           FILE *__restrict __stream) ;







extern __ssize_t getline (char **__restrict __lineptr,
                          size_t *__restrict __n,
                          FILE *__restrict __stream) ;







extern int fputs (const char *__restrict __s, FILE *__restrict __stream);





extern int puts (const char *__s);






extern int ungetc (int __c, FILE *__stream);






extern size_t fread (void *__restrict __ptr, size_t __size,
       size_t __n, FILE *__restrict __stream) ;




extern size_t fwrite (const void *__restrict __ptr, size_t __size,
        size_t __n, FILE *__restrict __s);
# 702 "/usr/include/stdio.h" 3 4
extern size_t fread_unlocked (void *__restrict __ptr, size_t __size,
         size_t __n, FILE *__restrict __stream) ;
extern size_t fwrite_unlocked (const void *__restrict __ptr, size_t __size,
          size_t __n, FILE *__restrict __stream);







extern int fseek (FILE *__stream, long int __off, int __whence);




extern long int ftell (FILE *__stream) ;




extern void rewind (FILE *__stream);
# 736 "/usr/include/stdio.h" 3 4
extern int fseeko (FILE *__stream, __off_t __off, int __whence);




extern __off_t ftello (FILE *__stream) ;
# 760 "/usr/include/stdio.h" 3 4
extern int fgetpos (FILE *__restrict __stream, fpos_t *__restrict __pos);




extern int fsetpos (FILE *__stream, const fpos_t *__pos);
# 786 "/usr/include/stdio.h" 3 4
extern void clearerr (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));

extern int feof (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;

extern int ferror (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;



extern void clearerr_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));
extern int feof_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;
extern int ferror_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;







extern void perror (const char *__s);




extern int fileno (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;




extern int fileno_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;
# 823 "/usr/include/stdio.h" 3 4
extern int pclose (FILE *__stream);





extern FILE *popen (const char *__command, const char *__modes)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (pclose, 1))) ;






extern char *ctermid (char *__s) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__access__ (__write_only__, 1)));
# 867 "/usr/include/stdio.h" 3 4
extern void flockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));



extern int ftrylockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;


extern void funlockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));
# 885 "/usr/include/stdio.h" 3 4
extern int __uflow (FILE *);
extern int __overflow (FILE *, int);
# 902 "/usr/include/stdio.h" 3 4

# 2 "main.c" 2


# 3 "main.c"
int main() {
 printf("hello world\\n");
 return 0;
}
`,vo=`	.arch armv8-a
	.file	"main.c"
	.text
	.section	.rodata
	.align	3
.LC0:
	.string	"hello world"
	.text
	.align	2
	.global	main
	.type	main, %function
main:
.LFB0:
	.cfi_startproc
	stp	x29, x30, [sp, -16]!
	.cfi_def_cfa_offset 16
	.cfi_offset 29, -16
	.cfi_offset 30, -8
	mov	x29, sp
	adrp	x0, .LC0
	add	x0, x0, :lo12:.LC0
	bl	puts
	mov	w0, 0
	ldp	x29, x30, [sp], 16
	.cfi_restore 30
	.cfi_restore 29
	.cfi_def_cfa_offset 0
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Debian 12.2.0-14) 12.2.0"
	.section	.note.GNU-stack,"",@progbits
`,bt=`	.file	"main.c"
	.text
	.section	.rodata
.LC0:
	.string	"hello world"
	.text
	.globl	main
	.type	main, @function
main:
.LFB0:
	.cfi_startproc
	endbr64
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	leaq	.LC0(%rip), %rax
	movq	%rax, %rdi
	call	puts@PLT
	movl	$0, %eax
	popq	%rbp
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	1f - 0f
	.long	4f - 1f
	.long	5
0:
	.string	"GNU"
1:
	.align 8
	.long	0xc0000002
	.long	3f - 2f
2:
	.long	0x3
3:
	.align 8
4:
`,xo=`// callee.c
int sum(int a, int b) {
	return a + b;
}

`,wo=`// callee.h
#ifndef CALLEE_H
#define CALLEE_H

int sum(int, int);

#endif

`,bo=`// caller.c
#include <stdio.h>  // for printf()
#include "callee.h" // for sum()
// Or you can use this
// extern int sum(int, int);

int main() {
	int x = 1;
	int y = 2;
	int z = sum(x, y);
	printf("The result is %d\\n", z);
	return 0;
}

`,yo=`static void uv__cpu_relax(void) {
#if defined(__i386__) || defined(__x86_64__)
  __asm__ __volatile__ ("rep; nop" ::: "memory");  /* a.k.a. PAUSE */
#elif (defined(__arm__) && __ARM_ARCH >= 7) || defined(__aarch64__)
  __asm__ __volatile__ ("yield" ::: "memory");
#elif (defined(__ppc__) || defined(__ppc64__)) && defined(__APPLE__)
  __asm volatile ("" : : : "memory");
#elif !defined(__APPLE__) && (defined(__powerpc64__) || defined(__ppc64__) || defined(__PPC64__))
  __asm__ __volatile__ ("or 1,1,1; or 2,2,2" ::: "memory");
#endif
}

`,M=s=>(I("data-v-3d61aa58"),s=s(),S(),s),Io=g('<section data-v-3d61aa58><h3 data-v-3d61aa58>C (vs Assembly)</h3><ul class="text-4xl" data-v-3d61aa58><li class="fragment" data-v-3d61aa58>High Level: C provides a certain level of abstraction from the hardware</li><li class="fragment" data-v-3d61aa58>Portability: It&#39;s easy to convert from C to machine code</li><li class="fragment" data-v-3d61aa58>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-3d61aa58>Ideal for operating system or system-level application development</li></ul></section>',1),So=M(()=>t("h3",null,"Languages Influenced by C",-1)),Mo={class:"lang icon-container flex justify-center"},Do=["data-src"],ko=M(()=>t("h3",null,"Notable Softwares Developed in C",-1)),$o={class:"icon-container flex justify-center"},Co=["data-src"],Xo=g('<section data-v-3d61aa58><h3 data-v-3d61aa58>Timeline of C Language</h3><ul data-v-3d61aa58><li data-v-3d61aa58>1972 - first release</li><li data-v-3d61aa58>1978 - <a href="https://en.wikipedia.org/wiki/K%26R_C" data-v-3d61aa58>K&amp;R C</a></li><li data-v-3d61aa58>1989 - C89</li><li data-v-3d61aa58>1999 - C99</li><li data-v-3d61aa58>2011 - C11</li><li data-v-3d61aa58>2018 - C17</li><li data-v-3d61aa58>2024 - C23</li></ul></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>How to Convert C to Machine Code</h3></section>',2),No={"data-auto-animate":""},Lo=M(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Yo={"data-auto-animate":""},Oo=M(()=>t("h3",null,"How to Convert C to Machine Code",-1)),To={"data-auto-animate":""},Ao=M(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Eo=g('<section data-v-3d61aa58><h3 data-v-3d61aa58>Easy, right?</h3></section><section data-v-3d61aa58><h3 data-v-3d61aa58>Not really, let&#39;s break it down</h3></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>Preprocessor</h3><div class="flex justify-center" data-v-3d61aa58><img data-src="'+ho+'" data-v-3d61aa58></div></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>Preprocessor</h3><ul data-v-3d61aa58><li data-v-3d61aa58><code data-v-3d61aa58>#include</code></li><li data-v-3d61aa58><code data-v-3d61aa58>#define</code></li><li data-v-3d61aa58><code data-v-3d61aa58>#if</code>/<code data-v-3d61aa58>#ifdef</code>/<code data-v-3d61aa58>#ifndef</code>/<code data-v-3d61aa58>#else</code>/<code data-v-3d61aa58>#elif</code>/<code data-v-3d61aa58>#endif</code></li><li data-v-3d61aa58>...</li></ul></section>',4),Ro={"data-auto-animate":""},Po=M(()=>t("h3",null,"Preprocessor",-1)),Ho={class:"flex"},zo={class:"w-1/2"},Fo={class:"w-1/2"},Vo={"data-auto-animate":""},jo=M(()=>t("h3",null,"Preprocessor",-1)),Uo={class:"fragment"},Bo={"data-auto-animate":""},Wo=M(()=>t("h3",null,"Preprocessor",-1)),Go=M(()=>t("section",{"data-auto-animate":"","data-auto-animate-restart":""},[t("h3",null,"Compilation"),t("div",{class:"flex justify-center"},[t("img",{"data-src":fo})])],-1)),Zo=M(()=>t("h3",null,"Compilation",-1)),Jo={class:"flex"},qo={class:"w-1/2"},Qo={class:"w-1/2"},Ko=M(()=>t("h3",null,"x86_64 vs ARMv8",-1)),td={class:"flex"},ed={class:"w-1/2"},ad={class:"w-1/2"},sd=g('<section data-v-3d61aa58><h3 data-v-3d61aa58>Assembler</h3><div class="flex justify-center" data-v-3d61aa58><img data-src="'+go+'" data-v-3d61aa58></div></section><section data-v-3d61aa58><div class="flex justify-center" data-v-3d61aa58><img data-src="'+mo+'" data-v-3d61aa58></div></section><section data-v-3d61aa58><h3 data-v-3d61aa58>C (vs Assembly)</h3><ul class="text-3xl" data-v-3d61aa58><li data-v-3d61aa58>High Level: C provides a certain level of <span class="font-bold text-red-500" data-v-3d61aa58>abstraction</span> from the hardware<ul data-v-3d61aa58><li class="fragment" data-v-3d61aa58>Data types and operations are platform dependent</li></ul></li><li data-v-3d61aa58>Portability: It&#39;s easy to convert from C to machine code<ul data-v-3d61aa58><li class="fragment" data-v-3d61aa58>C is not directly related to any instruction set, but close enough</li><li class="fragment" data-v-3d61aa58>C will be convert to Assembly first, then reuse the assembler</li></ul></li><li data-v-3d61aa58>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-3d61aa58>If there&#39;re some parts of the program need to use specific hardware features, it&#39;s possible to write code with assembly languages then compile with other parts in C together</li></ul></section>',3),nd=M(()=>t("h3",null,"C w/ Assembly",-1)),yt='gcc main.c # -> a.out, which means "assembler output"',id='./a.out    # "." means the current dir',od=p({__name:"c-vs-assembly",setup(s){const e=["cplusplus/cplusplus-original.svg","csharp/csharp-original.svg","objectivec/objectivec-plain.svg","java/java-original.svg","javascript/javascript-original.svg","go/go-original-wordmark.svg","rust/rust-original.svg"],a=["linux/linux-original.svg","postgresql/postgresql-original.svg","redis/redis-original.svg","python/python-original.svg","nginx/nginx-original.svg","git/git-original.svg"];let n=po.split(`
`);const i=[...n.slice(0,4),"# // ...",`# // other ~${n.length-10} lines`,"# // ...",...n.slice(-6)].join(`
`);return(r,c)=>{const l=T("highlightjs");return h(),_("section",null,[Io,t("section",null,[So,t("div",Mo,[(h(),_(Y,null,G(e,x=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${x}`},null,8,Do)),64))])]),t("section",null,[ko,t("div",$o,[(h(),_(Y,null,G(a,x=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${x}`},null,8,Co)),64))])]),Xo,t("section",No,[Lo,o(l,{language:"c",autodetect:!1,code:u(P)},null,8,["code"])]),t("section",Yo,[Oo,o(l,{language:"c",autodetect:!1,code:u(P)},null,8,["code"]),o(l,{language:"bash",autodetect:!1,code:yt})]),t("section",To,[Ao,o(l,{language:"c",autodetect:!1,code:u(P)},null,8,["code"]),o(l,{language:"bash",autodetect:!1,code:yt}),o(l,{language:"bash",autodetect:!1,code:id})]),Eo,t("section",Ro,[Po,t("div",null,[o(l,{language:"bash",autodetect:!1,code:"gcc -E main.c -o main.i"})]),t("div",Ho,[t("div",zo,[o(l,{language:"c",autodetect:!1,code:u(P)},null,8,["code"])]),t("div",Fo,[o(l,{language:"c",autodetect:!1,code:u(i)},null,8,["code"])])])]),t("section",Vo,[jo,t("div",null,[o(l,{language:"c",autodetect:!1,code:u(xo)},null,8,["code"])]),t("div",Uo,[o(l,{language:"c",autodetect:!1,code:u(wo)},null,8,["code"])])]),t("section",Bo,[Wo,t("div",null,[o(l,{language:"c",autodetect:!1,code:u(bo)},null,8,["code"])])]),Go,t("section",null,[Zo,t("div",null,[o(l,{language:"bash",autodetect:!1,code:"gcc -S main.i -o main.s"})]),t("div",Jo,[t("div",qo,[o(l,{language:"c",autodetect:!1,code:u(P)},null,8,["code"])]),t("div",Qo,[o(l,{language:"x86asm",autodetect:!1,code:u(bt)},null,8,["code"])])])]),t("section",null,[Ko,t("div",td,[t("div",ed,[o(l,{language:"x86asm",autodetect:!1,code:u(bt)},null,8,["code"])]),t("div",ad,[o(l,{language:"armasm",autodetect:!1,code:u(vo)},null,8,["code"])])])]),sd,t("section",null,[nd,o(l,{language:"c",autodetect:!1,code:u(yo)},null,8,["code"])])])}}}),dd=v(od,[["__scopeId","data-v-3d61aa58"]]),rd="/workshop-apvode/assets/352547808-5038ae93-bd02-41cb-a2df-9c7afeaa57e3-BlzOfCcy.jpg",ld="/workshop-apvode/assets/zero2-hero-DJJ9tbrf.webp",cd={},ud={class:"problem-stack"},_d=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),hd=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),fd=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),gd=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),md=t("tr",{class:"ps-isa fragment"},[t("td",{style:{"font-weight":"bold"}},"Instruction Set Architecture")],-1),pd=t("tr",{class:"ps-hw fragment"},[t("td",{style:{"font-weight":"bold"}},"Microarchitecture")],-1),vd=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),xd=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),wd=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),bd=[_d,hd,fd,gd,md,pd,vd,xd,wd];function yd(s,e){return h(),_("table",ud,bd)}const Id=v(cd,[["render",yd]]),Sd=g('<section><h3>Computers in Early Days</h3><ul><li class="fragment">1940 - <a href="https://en.wikipedia.org/wiki/Bombe">Bombe</a></li><li class="fragment">1945 - <a href="https://en.wikipedia.org/wiki/ENIAC">ENIAC</a></li><li class="fragment">1951 - <a href="https://en.wikipedia.org/wiki/UNIVAC">UNIVAC</a></li><li class="fragment">1952 - <a href="https://en.wikipedia.org/wiki/IBM_701">IBM 701</a> (30 were sold in 1953-54)</li><li class="fragment">1954 - <a href="https://en.wikipedia.org/wiki/IBM_650">IBM 650</a> (120 were sold in 1954, and more than 750 orders)</li></ul></section><section><h3>Users stopped building their own machines</h3><h4 class="fragment">Why was IBM so late getting into computers?</h4></section><section><h3>Programmer&#39;s view of IBM 650</h3><ul><li class="fragment">A machine with 44 instructions</li><li class="fragment">Instruction: <code>60 1234 1009</code><ul class="fragment"><li>Load the contents of location <code>1234</code> into the <span class="italic">distribution</span>; put it also into the <span class="italic">upper accumulator</span>; set the <span class="italic">lower accumulator</span> to zero; and then go to the location <code>1009</code> for the next instruction.</li></ul></li></ul></section><section><h3>Computers in mid 50&#39;s</h3><ul><li class="fragment">Hardware was super expensive</li><li class="fragment">Stores were small (1000 words)</li><li class="fragment">Programmer&#39;s view of the machine was inseparable from the actual hardware implementation</li></ul></section><section><h3>Snow White and the Seven Dwarfs (1960s)</h3><ul><li>IBM</li><li>UNIVAC</li><li>GE (General Electric)</li><li>Burroughs</li><li>NCR</li><li>CDC (Control Data Corporation)</li><li>RCA</li><li>Honeywell</li></ul></section><section><h3>Compatibility Problem at IBM</h3><ul><li class="fragment">For engineering and scientific use: 701, 704, 709, ...</li><li class="fragment">For commercial or data processing use: 702, 705, ...</li><li class="fragment">Mid-range business small mainframe: 1400 series</li></ul><h4 class="fragment">They had completely different instruction sets, I/O system, storage, softwares, etc</h4></section><section><h3>IBM System/360</h3><ul><li class="fragment">Announced on April 7, 1964. Delivered between 1965 and 1978.</li><li class="fragment">Introduced a new layer of <span class="strong">abstraction</span> now well known as <span class="text-red-500">ISA</span> (instruction set architecture).</li><li class="fragment">ISA specifies <span class="text-red-500 italic">what</span> hardware provides, not <span class="text-red-500 italic">how</span> it&#39;s implemented.</li><li class="fragment">It was revolutionary and extraodinarily challenging, see <a href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month">The Mythical Man-Month / 人月神话</a></li></ul></section>',7),Md=g('<section><h3>Famous ISAs and Microarchitectures</h3><table><tr><th>x86_64</th><th>ARMv8</th></tr><tr><td><ul><li>Intel 8086 (1978)</li><li>Intel Pentium (1993)</li><li>Intel Core 6th-gen Skylake (2015)</li><li>AMD Zen 4 (2022)</li></ul></td><td><ul><li>Apple Silicon</li><li>Samsung Exynos</li><li>Qualcomm Snapdragon</li></ul></td></tr></table><div>PowerPC, MIPS, RISC-V, SPARC, ...</div></section><section><h3>The Tradeoffs of ISA</h3><ul><li class="fragment">Enables fast innovation in hardware w/ no need to change the software</li><li class="fragment">Commercially successful ISAs last for decades</li></ul></section><section><h3>What&#39;s the point of mentioning these dinosaurs?</h3></section><section><h3>History Repeats Itself</h3><table class="text-2xl text-center"><tr class="font-bold"><td></td><td>IBM 650<br>(Main Frame)</td><td>PDP-1<br>(Minicomputer)</td><td>IBM PC</td><td>iPhone<br>(1st Gen)</td><td>RPi Pico<br>/ Pico 2</td></tr><tr><td class="font-bold">Released</td><td>1954</td><td>1959</td><td>1981</td><td>2007</td><td>2021/2024</td></tr><tr><td class="font-bold">Price</td><td>150k USD<br>(~1.5m 2023)</td><td>120k USD<br>(~1.2m 2023)</td><td>1.5k USD<br>(~5.2k 2023)</td><td>499 USD<br>(~755 2024)</td><td>4 USD<br>/ 5 USD</td></tr><tr><td class="font-bold">Mass</td><td>969 kg<br>(ChatGPT)</td><td>730 kg</td><td>~10 kg</td><td>135 g</td><td>~10 g</td></tr><tr><td class="font-bold">CPU</td><td>~100Hz<br>(ChatGPT)</td><td>187 kHz</td><td>4.7 MHz</td><td>620 MHz</td><td>133 MHz<br>/ 150MHz</td></tr><tr><td class="font-bold">RAM</td><td>~10KB<br>(ChatGPT)</td><td>9.2 KB</td><td>16 KB ~ 256 KB</td><td>128 MB</td><td>264 KB<br>/ 520 KB</td></tr></table></section><section><div class="flex"><img data-src="'+rd+'" width="50%"><div class="text-2xl text-left ml-6 flex flex-col justify-center"><img data-src="'+ld+'"><p>Handheld Linux Terminal (Powered by RPi Zero 2W w/ TWO Nokia BL-5C battery)</p><p>Repo: https://github.com/ZitaoTech/Hackberry-Pi_Zero</p><p>Discussions on Hacker News: https://news.ycombinator.com/item?id=41138701</p></div></div></section>',5),Dd=p({__name:"early-computers",setup(s){return(e,a)=>(h(),_("section",null,[Sd,t("section",null,[o(Id)]),Md]))}}),kd={},$d=g('<section data-v-fd0cf28e><h3 data-v-fd0cf28e>Summary</h3><ul data-v-fd0cf28e><li class="fragment" data-v-fd0cf28e>There&#39;re multiple layers of abstraction in computing.</li><li class="fragment" data-v-fd0cf28e>&quot;We can solve any problem by introducing an extra level of indirection.&quot; -- David J. Wheeler</li><li class="fragment" data-v-fd0cf28e>Most of the time, implementations have trade-offs.</li><li class="fragment" data-v-fd0cf28e>Gaining an understanding of the lower layers can be beneficial.</li></ul></section><section data-v-fd0cf28e><h3 data-v-fd0cf28e>References</h3><ul style="font-size:32px;" data-v-fd0cf28e><li data-v-fd0cf28e>(Open Course) MIT 6.004 Computation Structures</li><li data-v-fd0cf28e>(Open Course) CMU 18-447 Introduction to Computer Architecture</li><li data-v-fd0cf28e>(Book) Operating Systems: Design and Implementation, 3e</li><li data-v-fd0cf28e>(Book) Computer Systems: A Programmer&#39;s Perspective, 3e</li><li data-v-fd0cf28e>(Link) <a href="https://exclusivearchitecture.com/03-technical-articles-IC-00-table-of-contents.html" data-v-fd0cf28e>How microchips work</a></li><li data-v-fd0cf28e>(Link) <a href="https://www.computerhistory.org/timeline/" data-v-fd0cf28e>Timeline of Computer History</a></li><li data-v-fd0cf28e>(Link) <a href="https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell" data-v-fd0cf28e>What&#39;s the difference between a console, a terminal, and a shell?</a></li><li data-v-fd0cf28e>(Source) <a href="https://github.com/drendog/Logic-Circuit-Simulator" data-v-fd0cf28e>Logic Circuit Simulator</a></li><li data-v-fd0cf28e>(Video Game) <a href="https://turingcomplete.game/" data-v-fd0cf28e>Turing Complete</a></li></ul></section><section data-v-fd0cf28e><h3 data-v-fd0cf28e>Tools Used for this Project</h3><ul style="font-size:32px;" data-v-fd0cf28e><li data-v-fd0cf28e>Neovim + Tmux + Zsh</li><li data-v-fd0cf28e>Node.js + pnpm</li><li data-v-fd0cf28e>Vue + Vite + TypeScript</li><li data-v-fd0cf28e>Reveal.js</li><li data-v-fd0cf28e>timelinejs</li><li data-v-fd0cf28e>highlight.js</li><li data-v-fd0cf28e><span class="strikethrough" data-v-fd0cf28e>p5.js</span> <span class="strikethrough" data-v-fd0cf28e>echarts</span> konva.js</li><li data-v-fd0cf28e>Font Awesome + devicons</li><li data-v-fd0cf28e>diagrams.net (previously draw.io)</li></ul></section><section data-transition="slide-in fade-out" data-v-fd0cf28e><h3 data-v-fd0cf28e>May the <span class="fragment custom show" data-fragment-index="1" data-v-fd0cf28e>force</span><span class="fragment custom hidden" data-fragment-index="1" data-v-fd0cf28e>SOURCE</span> be with you.</h3></section>',4),Cd=[$d];function Xd(s,e){return h(),_("section",null,Cd)}const Nd=v(kd,[["render",Xd],["__scopeId","data-v-fd0cf28e"]]),Ld="/workshop-apvode/assets/Heckert_GNU_white-D6Qvg6Gc.svg",Yd=s=>(I("data-v-9c796747"),s=s(),S(),s),Od=g('<section data-v-9c796747><div class="flex justify-center" data-v-9c796747><img data-src="'+Ld+'" data-v-9c796747></div><h3 data-v-9c796747>GNU = GNU&#39;s Not Unix</h3></section><section data-v-9c796747><h3 data-v-9c796747>GNU is not the beginning of</h3><h3 data-v-9c796747>the free software movement and the hacker culture</h3></section><section data-v-9c796747><h3 data-v-9c796747>The GNU Project&#39;s aim was to</h3><h3 data-v-9c796747>give computer users freedom and control over their computers</h3></section><section data-v-9c796747><h3 data-v-9c796747>Softwares Released by GNU</h3><ul data-v-9c796747><li data-v-9c796747>Emacs, a text editor</li><li data-v-9c796747>Development Toolchain: debugger, parser, linker, and compiler</li><li data-v-9c796747>Unix utilities: ls, grep, awk, make...</li></ul></section><section data-v-9c796747><h3 data-v-9c796747>MINUX (means mini-UNIX)</h3><div data-v-9c796747>Written by Andrew S. Tanenbaum in Netherlands for teaching purpose and released in 1987 without even one line of UNIX source code</div></section><section data-v-9c796747><h3 data-v-9c796747>MINUX vs UNIX</h3><ul data-v-9c796747><li data-v-9c796747>MINUX was written near 17 years after UNIX V1, and nearly 10 years after UNIX V7</li><li data-v-9c796747>Modern, well structured, efficient, and readable</li><li data-v-9c796747>Compatibility with UNIX V7</li><li data-v-9c796747>For <a href="https://en.wikipedia.org/wiki/IBM_Personal_Computer" data-v-9c796747>IBM PC</a></li></ul></section><section data-v-9c796747><h3 data-v-9c796747>Then There came a Finnish Student</h3><div data-v-9c796747>Linux Torvalds</div><div data-v-9c796747>Announced his kernel on Aug 25, 1991</div><div data-v-9c796747>Released Linux 1.0 under <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" data-v-9c796747>GPLv2</a> on Mar 13, 1994</div><div data-v-9c796747>And adopted by the GNU project as its kernel</div></section>',7),Td=Yd(()=>t("h3",null,"Linux Distributions",-1)),Ad={class:"icon-container flex justify-center"},Ed=["data-src"],Rd=p({__name:"free-software-movement",setup(s){const e=["archlinux/archlinux-original.svg","centos/centos-original.svg","debian/debian-original.svg","fedora/fedora-original.svg","gentoo/gentoo-original.svg","opensuse/opensuse-original.svg","redhat/redhat-original.svg","ubuntu/ubuntu-original.svg"];return(a,n)=>(h(),_("section",null,[Od,t("section",null,[Td,t("div",Ad,[(h(),_(Y,null,G(e,i=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i}`},null,8,Ed)),64))])])]))}}),Pd=v(Rd,[["__scopeId","data-v-9c796747"]]),Hd="/workshop-apvode/assets/BFoCM-java-bytecode-DB21QsSY.svg",zd=`// event_loop.js
const first  = () => console.log("first");
const second = () => console.log("second (timeout)");
const third  = () => console.log("third (while loop)");

first();
// The global setTimeout() method sets a timer which
// executes a function or specified piece of code once
// the timer expires.
setTimeout(second, 0);

const startTime = new Date();
// endTime is 10ms later than startTime
const endTime   = new Date(startTime.getTime() + 10);

while (new Date() < endTime) {
	third();
}

`,Fd=`$ node event_loop.js
first
third (while loop)
third (while loop)
third (while loop)
.....
third (while loop)
third (while loop)
second (timeout)
`,W=`#include <stdio.h>  // for printf()
#include <fcntl.h>  // for open() and O_RDWR
#include <unistd.h> // for close()

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\\n", fd);
	close(fd); // otherwise memory leak
	return 0;
}

`,Vd=`NAME
    open, openat, creat - open and possibly create a file

SYNOPSIS
    int open(const char *pathname, int flags);

DESCRIPTION
    The open() system call opens the file specified by pathname.
    If the specified  file  does  not  exist, it may optionally
    (if O_CREAT is specified in flags) be created by open().

    The  return  value of open()  is a file descriptor, a small,
    nonnegative integer that  is used in subsequent system calls
    (read(2),  write(2), lseek(2),  fcntl(2),  etc.) to refer to
    the open file. The file descriptor returned by a successful
    call will be the lowest-numbered file descriptor not curren-
    tly open for the process.
`,jd=`fs.open(path[, flags[, mode]], callback)

* path <string> | <Buffer> | <URL>
* flags <string> | <number> See support of file system flags.
  Default: 'r'.
* mode <string> | <integer> Default: 0o666 (readable and writable)
* callback <Function>
    * err <Error>
    * fd <integer>

    Asynchronous file open. See the POSIX open(2) documentation
    for more details.

    mode sets  the  file mode (permission and sticky bits), but
    only  if the file was created.  On Windows,  only the write
    permission can be manipulated; see fs.chmod().

`,Ud=`os.open(path, flags, mode=0o777, *, dir_fd=None)

    Open the file  path  and  set various  flags according to
	flags  and  possibly  its  mode according  to mode.  When
	computing  mode,  the current umask value is first masked
	out. Return the file descriptor for the newly opened file.
	The new file descriptor is non-inheritable.

    For a description of the flag and mode values, see the C
	run-time documentation; flag constants (like O_RDONLY and
	O_WRONLY) are defined in the os module. In particular, on
	Windows adding O_BINARY is needed to open files in binary
	mode.
`,Bd=g('<section><h3>A Glance of High Level</h3><h3>Programming Languages</h3></section><section><h3>New Features</h3><ul><li>Object-oriented programming</li><li>Standard libraries w/ rich features</li><li>Functional programming</li><li>Cross-platform</li><li>Less knowledge about memory or compilation</li></ul></section><section><h3>Java</h3><h4>Write Once, Run Anywhere</h4></section><section><h3>Java Virtural Machine</h3><h4>Another Abstraction</h4><div class="flex justify-center"><img data-src="'+Hd+'"></div></section>',4),Wd=t("h3",null,"Languages atop the JVM",-1),Gd={class:"flex justify-evenly icon-container items-center"},Zd={class:"flex flex-col items-center"},Jd=["data-src"],qd={class:"text-3xl"},Qd=g("<section><h3>Some JVM Implementations</h3><table><tr><td>HotSpot</td><td>Open Source</td></tr><tr><td>GraalVM</td><td>Open Source</td></tr><tr><td>OpenJ9</td><td>Open Source</td></tr><tr><td>JRocket</td><td>Proprietary, Discontinued</td></tr><tr><td>Microsoft JVM</td><td>Proprietary, Discontinued</td></tr></table></section><section><h3>Highlights of JVM</h3><ul><li>Platform Independence</li><li>Object-Oriented</li><li>JIT: Just-In-Time compilation</li><li>Security</li><li>Robust Ecosystem</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><ul><li>Full GC is a Stop-The-World (STW) event</li><li>Generics (J2SE 5.0) / Lambda Expression (Java 8)</li><li>Understanding JVM</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><div>No only in JVM...</div></section>",4),Kd={"data-auto-animate":""},tr=t("h3",null,"Event Loop in Node.js",-1),er={"data-auto-animate":""},ar=t("h3",null,"Event Loop in Node.js",-1),sr=g('<section><h3>General JVM Implementations</h3><table><tr><td></td><td><a href="https://github.com/openjdk/jdk">OpenJDK</a></td><td><a href="https://github.com/oracle/graal">GraalVM</a></td><td><a href="https://github.com/eclipse-openj9/openj9">OpenJ9</a></td></tr><tr><td>Java</td><td>74.6%</td><td>91.6%</td><td>42.5%</td></tr><tr><td>C</td><td>7.2%</td><td>3.7%</td><td>18.8%</td></tr><tr><td>C++</td><td>13.7%</td><td>0.4%</td><td>34.3%</td></tr></table></section><section><h3>Reminisce for a Moment</h3><div>It&#39;s possible to compile C<br>and assembly language togother.</div><div class="fragment">As Java is implemented with C/C++,</div><div class="fragment">is it possible to invoke functions<br>defined in C/C++ from Java, and vice versa?</div></section><section><h3>Yes</h3><div>Java, Python, Node.js, ...</div></section>',3),nr=t("div",null,[f("Now let's take a look at this code for the "),t("span",{class:"text-red-500"},"4th"),f(" time")],-1),ir=t("h3",null,[t("span",{class:"mono"},"open(2)")],-1),or=t("h3",null,[t("a",{href:"https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback",class:"mono"},"fs.open()"),f(" in Node.js")],-1),dr=t("h3",null,[t("a",{href:"https://docs.python.org/3/library/os.html#os.open",class:"mono"},"os.open()"),f(" in Python")],-1),rr=g('<section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C</td><td><ul><li class="fragment">simple syntax</li><li class="fragment">close to hardware</li><li class="fragment">manual memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">operating systems, embedded systems, and system programming</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C++</td><td><ul><li class="fragment">more complex than C</li><li class="fragment">comparable to C with optimizations and abstractions</li><li class="fragment">manual memory management with RAII, smart pointers and automatic memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">system/software, game, simulations</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Java</td><td><ul><li class="fragment">Object-oriented, high-level</li><li class="fragment">Generally slower than C/C++, but JIT can optimise</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich standard library, 3rd party libraries and frameworks</li><li class="fragment">Enterprise applications, web services, Android apps</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Python</td><td><ul><li class="fragment">High-level, readable</li><li class="fragment">Slower than compiled languages (REPL)</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich libraries and frameworks for web, data analysis, AI, scientific computing</li><li class="fragment">Web, data science, AI/ML, scripting, rapic prototyping</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Node.js</td><td><ul><li class="fragment">High-level, involving</li><li class="fragment">Generally good for I/O tasks due to its non-blocking, event-driven architecture. Use V8 JIT to compile to bytecode first, then compile to machine code.</li><li class="fragment">Automatic garbage collection from V8</li><li class="fragment">Large ecosystem, several package managers</li><li class="fragment">Web, RESTful APIs, microservices</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Rust</td><td><ul><li class="fragment">A young language with complex syntax</li><li class="fragment">Comparable to C/C++ w/ safety guarantees</li><li class="fragment">Compile ahead-of-time</li><li class="fragment">Without GC through its ownership and borrowing system</li><li class="fragment">System programming, web assembly, embedded systems</li></ul></td></tr></table></section>',6),lr=p({__name:"high-level-languages",setup(s){const e=[{name:"Scala",icon:"scala/scala-original.svg"},{name:"Kotlin",icon:"kotlin/kotlin-original.svg"},{name:"Clojure",icon:"clojure/clojure-original.svg"},{name:"Groovy",icon:"groovy/groovy-original.svg"},{name:"JRuby",icon:"ruby/ruby-original.svg"},{name:"JPython",icon:"python/python-original.svg"}];return(a,n)=>{const i=T("highlightjs");return h(),_("section",null,[Bd,t("section",null,[Wd,t("div",Gd,[(h(),_(Y,null,G(e,r=>t("div",Zd,[t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${r.icon}`},null,8,Jd),t("span",qd,B(r.name),1)])),64))])]),Qd,t("section",Kd,[tr,o(i,{language:"javascript",autodetect:!1,code:u(zd)},null,8,["code"])]),t("section",er,[ar,o(i,{language:"plaintext",autodetect:!1,code:u(Fd)},null,8,["code"])]),sr,t("section",null,[nr,o(i,{language:"c",autodetect:!1,code:u(W)},null,8,["code"])]),t("section",null,[ir,o(i,{language:"plaintext",autodetect:!1,code:u(Vd)},null,8,["code"])]),t("section",null,[or,o(i,{language:"plaintext",autodetect:!1,code:u(jd)},null,8,["code"])]),t("section",null,[dr,o(i,{language:"plaintext",autodetect:!1,code:u(Ud)},null,8,["code"])]),rr])}}}),cr="/workshop-apvode/assets/IMG_2090-B24t_2MV.jpeg",ur="/workshop-apvode/assets/BFoCM-batch-system-DFBbu-04.png",_r="/workshop-apvode/assets/Pdp7-oslo-2005-c5N3X5Pf.jpeg",hr="/workshop-apvode/assets/ken-and-den-Cm6ul-l5.jpg",fr="/workshop-apvode/assets/Unix_history-simple-BTBq0WRC.svg",gr="/workshop-apvode/assets/BFoCM-programming-against-hw-B98I5pHn.svg",rt="/workshop-apvode/assets/BFoCM-programming-against-os-CzGtGIEB.svg",mr=g('<section><img data-src="'+cr+'"></section><section><h3>Batch Systems in Mid 1950s</h3><div class="flex justify-center"><img data-src="'+ur+'"></div><div class="italic text-lg">Source: A. S. Tanenbaum, Operating Systems</div></section><section><h3>A Few New Technologies in Early 1960s</h3><ul><li class="fragment">Hard Drive</li><li class="fragment">Multiprogramming w/ memory partitions</li><li class="fragment">MIT: CTSS (Compatible Time-Sharing System)</li><li class="fragment">Minicomputers, smaller but less than 5% of a 7094</li></ul></section><section><h3>MULTICS</h3><h4>MULTiplexed Information and Computing Service</h4><ul><li>MIT, Bell Labs, and GE</li><li>A machine (a huge mainframe) to support hundreds of simultaneous timesharing users</li><li>Was written in PL/I, but the <span class="strong">compiler</span> was years late</li></ul></section><section><div><a href="https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)">Ken Thompson</a> from Bell Labs</div><div>wrote a stripped-down, one-user version of MULTICS</div><div>on a small DEC PDP-8 minicomputer</div></section><section><img data-src="'+_r+'"></section><section><h3>K. Thompson &amp; D. Ritchie at PDP-11</h3><a href="https://www.bell-labs.com/usr/dmr/www/picture.html"><img data-src="'+hr+'"></a></section><section><h3>UNIX</h3><ul><li class="fragment">Originally named Unics, Uniplexed Information and Computing Service, a pun on Multics</li><li class="fragment">Originally written in assembly language, Version 4 was rewritten in <span class="font-bold text-red-500">C</span> in 1973</li><li class="fragment">In 1973, AT&amp;T licensed Version 5 Unix to educational institutions</li><li class="fragment">The first <span class="font-bold text-red-500">port</span> of Unix to another platform in 1977</li></ul></section><section><h3>Where is UNIX</h3></section><section><h3>The UNIX Family Tree</h3><a href="https://en.wikipedia.org/wiki/History_of_Unix"><img data-src="'+fr+'"></a></section><section><h3>Key Aspects of UNIX</h3><ul><li class="fragment">Simplicity</li><li class="fragment">Portability w/ the C programming language, easily adapted on different platforms</li><li class="fragment">Shell, able to interactive w/ the system</li><li class="fragment">Pipelines</li><li class="fragment">Development Environment</li></ul></section><section><div class="flex justify-center"><img data-src="'+gr+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div><h3>Processes vs Program</h3><ul class="text-3xl"><li class="fragment">A program is a collection of binary instructions</li><li class="fragment">A process is an instance of a program that is being executed, including program code and states (registers, memory and other resources)</li><li class="fragment">The <span class="font-bold text-red-500">OS Kernel</span> is a process with special privileges</li></ul></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div><h3>Programmer&#39;s View of OS</h3><ul class="text-3xl"><li class="fragment"><span class="strong">Protection</span> and Privacy: Process cannot access each other&#39;s data</li><li class="fragment"><span class="strong">Abstraction</span>: OS hides details of underlying</li><li class="fragment"><span class="strong">Resource Management</span>: OS controls how processes share hardware</li></ul></section>',15),pr={"data-auto-animate":"",style:{"margin-bottom":"50px"}},vr=t("h3",null,"Virtual Machines",-1),xr=t("div",{class:"text-4xl"},"A New Layer of Abstraction",-1),wr=g('<section data-auto-animate><h3>Virtual Machines</h3><ul><li class="fragment">The OS gives a Virtual Machine to each process</li><li class="fragment">Each process believes it runs on its own machine, e.g. processor, memory, I/O, files ...</li><li class="fragment">... but this machine doesn&#39;t exist in physical hardware</li><li class="fragment">A Virtual Machine is an <span class="font-bold text-red-500">emulation</span> of a computer system</li></ul></section>',1),br=p({__name:"operating-system",setup(s){return(e,a)=>(h(),_("section",null,[mr,t("section",pr,[vr,xr,o(Lt,{class:"text-2xl"})]),wr]))}}),yr="/workshop-apvode/assets/man-printf(3)-DAhUur7r.png",Ir="/workshop-apvode/assets/man-open(2)-5seNUdi_.png",Sr="/workshop-apvode/assets/man-null(4)-DZ4_gdcU.png",Mr={"data-auto-animate":""},Dr={"data-auto-animate":""},kr=t("h3",null,"Imagine You're a System Developer",-1),$r=t("div",null,[f("How to use "),t("span",{class:"mono"},"open()"),f(" and "),t("span",{class:"mono"},"printf()"),f("?")],-1),Cr=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man3/printf.3.html"},[t("img",{"data-src":yr})])],-1),Xr=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man2/open.2.html"},[t("img",{"data-src":Ir})])],-1),Nr=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man4/null.4.html"},[t("img",{"data-src":Sr})])],-1),Lr=g("<section><h3>Common Man Page Sections</h3><table><tr><th>No.</th><th>Description</th></tr><tr><td>1</td><td>General commands</td></tr><tr><td>2</td><td>System calls</td></tr><tr><td>3</td><td>Library functions, e.g. the C standard library</td></tr><tr><td>8</td><td>System administration commands and daemons</td></tr></table></section>",1),Yr=t("div",null,"Now let's take a look at this code again",-1),Or=g('<section data-auto-animate><h3>POSIX</h3><div>Portable Operating System Interface</div></section><section data-auto-animate><h3>POSIX</h3><ul><li class="fragment">It&#39;s a family of standards specified by IEEE.</li><li class="fragment">It defined APIs for Unix-like operating systems.</li><li class="fragment">Not all operating systems claim full compliance with POSIX standards.</li><li class="fragment">But it allows developers to write applications that could run on any POSIX-compliant system without significant modifications.</li></ul></section>',2),Tr=`$ ./a.out
The file discriptor is 3`,Ar=p({__name:"posix",setup(s){return(e,a)=>{const n=T("highlightjs");return h(),_("section",null,[t("section",Mr,[o(n,{language:"c",autodetect:!1,code:u(W)},null,8,["code"]),o(n,{language:"plaintext",autodetect:!1,code:Tr})]),t("section",Dr,[kr,o(n,{language:"c",autodetect:!1,code:u(W)},null,8,["code"]),$r]),t("section",null,[o(n,{language:"plaintext",autodetect:!1,code:"man 3 printf"}),Cr]),t("section",null,[o(n,{language:"plaintext",autodetect:!1,code:"man 2 open"}),Xr]),t("section",null,[o(n,{language:"plaintext",autodetect:!1,code:"man 4 null"}),Nr]),Lr,t("section",null,[Yr,o(n,{language:"c",autodetect:!1,code:u(W)},null,8,["code"])]),Or])}}}),Er=`#include <stdio.h>

int main() {
	fprintf(stdout, "hello world\\n");
	return 0;
}

`,Rr=`Console.WriteLine("This message is logged to stdout");
Console.Error.WriteLine("This error is logged to stderr");
`,Pr=`System.out.println("This message is logged to stdout");
System.err.println("This error is logged to stderr");
`,Hr=`console.log('This message is logged to stdout');
console.error('This error is logged to stderr');
`,zr=`print("This message is logged to stdout")

import sys
sys.stderr.write("This error is logged to stderr\\n")
print("This error is logged to stderr", file=sys.stderr)
`,k=s=>(I("data-v-f8fee562"),s=s(),S(),s),Fr=k(()=>t("div",null,"Now let's take a look at this code for the third time",-1)),Vr=k(()=>t("section",null,[t("h3",null,"The Default Streams"),t("ul",null,[t("li",null,[f("0 - "),t("code",null,"stdin")]),t("li",null,[f("1 - "),t("code",null,"stdout")]),t("li",null,[f("2 - "),t("code",null,"stderr")])])],-1)),jr={class:"column-2"},Ur=k(()=>t("section",null,[t("h3",null,"Do You Remember the Python Workshop?")],-1)),Br=k(()=>t("div",null,"C#",-1)),Wr=k(()=>t("div",null,"Java",-1)),Gr=k(()=>t("div",null,"JavaScript",-1)),Zr=k(()=>t("div",null,"Python",-1)),Jr=k(()=>t("div",null,"You might have also seen this from somewhere",-1)),qr=k(()=>t("ul",null,[t("li",{class:"fragment"},[t("code",null,"`./a.out`"),f(" execute the file a.out in the current directory")]),t("li",{class:"fragment"},[t("code",null,"`> out.txt`"),f(" redirect the stdout stream to the file out.txt")]),t("li",{class:"fragment"},[t("code",null,"`2>/dev/null`"),f(" redirect the stderr stream to the file /dev/null")]),t("li",{class:"fragment"},[t("code",null,"`&`"),f(" execute the file in the background")])],-1)),Qr=k(()=>t("section",null,[t("div",null,[f("Now you see a program can get data from "),t("code",null,"stdin"),f(" and return data to "),t("code",null,"stdout")]),t("div",{class:"fragment"},"What if I want to use the output of a program as the input of another?")],-1)),Kr=k(()=>t("h3",null,"Pipe",-1)),tl=`$ ./a.out
The file discriptor is 3`,el=p({__name:"printf",setup(s){return(e,a)=>{const n=T("highlightjs");return h(),_("section",null,[t("section",null,[Fr,o(n,{language:"c",autodetect:!1,code:u(W)},null,8,["code"]),o(n,{language:"plaintext",autodetect:!1,code:tl})]),Vr,t("section",null,[t("div",jr,[t("div",null,[o(n,{language:"c",autodetect:!1,code:u(P)},null,8,["code"])]),t("div",null,[o(n,{language:"c",autodetect:!1,code:u(Er)},null,8,["code"])])])]),Ur,t("section",null,[Br,o(n,{language:"csharp",autodetect:!1,code:u(Rr)},null,8,["code"]),Wr,o(n,{language:"java",autodetect:!1,code:u(Pr)},null,8,["code"])]),t("section",null,[Gr,o(n,{language:"javascript",autodetect:!1,code:u(Hr)},null,8,["code"]),Zr,o(n,{language:"python",autodetect:!1,code:u(zr)},null,8,["code"])]),t("section",null,[Jr,o(n,{language:"bash",autodetect:!1,code:"./a.out > out.txt 2>/dev/null &"}),qr]),Qr,t("section",null,[Kr,o(n,{language:"bash",autodetect:!1,code:'ls | grep "foo" | grep "bar"'})])])}}}),al=v(el,[["__scopeId","data-v-f8fee562"]]),sl={},nl={class:"problem-stack"},il=t("tr",{class:"ps-sw fragment","data-fragment-index":"1"},[t("td",null,"Problem")],-1),ol=t("tr",{class:"ps-sw fragment","data-fragment-index":"2"},[t("td",null,"Program/Language")],-1),dl=t("tr",{class:"ps-sw fragment","data-fragment-index":"3"},[t("td",null,"Operating System")],-1),rl=t("tr",{class:"ps-hw fragment","data-fragment-index":"5"},[t("td",null,"Circuits")],-1),ll=t("tr",{class:"ps-hw fragment","data-fragment-index":"4"},[t("td",null,"Electrons")],-1),cl=[il,ol,dl,rl,ll];function ul(s,e){return h(),_("table",nl,cl)}const _l=v(sl,[["render",ul]]);function hl(s,e,a,n){return[.1*a+s*.8*a,n-.1*n-n*.8*e]}function fl(s,e,a,n){const i=[];for(const[r,c]of e)i.push(...hl(r,c,a,n));s.add(new H({points:i,stroke:"blue",strokeWidth:2}))}function lt(s){const e=s.offsetHeight,a=s.offsetWidth,n=new et.Stage({container:s,height:e,width:a}),i=new et.Layer;n.add(i),i.add(new It({x:0,y:0,height:e,width:a,fill:"#eee"}));const r=[[[.1,.1],[.9,.1]],[[.1,.26],[.9,.26]],[[.1,.42],[.9,.42]],[[.1,.58],[.9,.58]],[[.1,.74],[.9,.74]],[[.26,.1],[.26,.9]],[[.42,.1],[.42,.9]],[[.58,.1],[.58,.9]],[[.74,.1],[.74,.9]],[[.9,.1],[.9,.9]]],c=[[[.1,.9],[.9,.9]],[[.1,.9],[.1,.1]]];for(let[l,x]of r){const C=[l[0]*a,l[1]*e,x[0]*a,x[1]*e];i.add(new H({points:C,strokeWidth:1,stroke:"#ccc"}))}for(let[l,x]of c){const C=[l[0]*a,l[1]*e,x[0]*a,x[1]*e];i.add(new H({points:C,strokeWidth:1,stroke:"#666"}))}i.add(new N({text:"t",x:.9*a+8,y:.9*e-8,fontSize:16,fontStyle:"italic"})),i.add(new N({text:"V",x:.1*a-6,y:.1*e-20,fontSize:16,fontStyle:"italic"}));for(let l=0;l<6;l++)i.add(new N({text:l.toString(),x:.1*a+l*.16*a-4,y:.9*e+8,fontSize:16,fill:"#555"}));for(let l=0;l<6;l++)i.add(new N({text:l.toString(),x:.1*a-20,y:.9*e-l*.16*e-8,fontSize:16,fill:"#555"}));return{stage:n,line:l=>{fl(i,l,a,e)}}}const Ot=s=>(I("data-v-7ab190df"),s=s(),S(),s),gl=Ot(()=>t("h3",null,"Signal: Analog vs Digital",-1)),ml={class:"bfocm-column-3"},pl={class:"fragment"},vl={class:"fragment"},xl={class:"fragment"},wl=Ot(()=>t("p",{class:"fragment"},"Noise resistance, data compression, error detection and correction, cost efficiency...",-1)),ct="signal-analog-digital",bl=p({__name:"signal-analog-digital",setup(s){const e=Dt("dark_mode"),a=b(null),n=b(null),i=b(null);let r,c,l,x=!1;function C(){r&&r.stage.destroy(),c&&c.stage.destroy(),l&&l.stage.destroy(),r=null,c=null,l=null,x=!1}function y(){C(),x=!0,r=lt(a.value),c=lt(n.value),l=lt(i.value),r.line([[0,0],[1,1]]),c.line([[0,0],[.5,0],[.5,1],[1,1]]),l.line([[0,0],[1/8,1.5/5],[2/8,1/5],[3/8,1.5/5],[4/8,5/5],[5/8,4.8/5],[6/8,3/5],[7/8,4/5],[8/8,4.5/5]])}return O(()=>{F({id:ct,constructor:y,destructor:C})}),z(()=>{V(ct)}),Ft(e,async()=>{x&&y()}),(L,X)=>(h(),_("section",{id:ct},[gl,t("div",ml,[t("div",pl,[t("div",{class:"bfocm-chart",ref_key:"refChartAnalog",ref:a},null,512)]),t("div",vl,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalR",ref:i},null,512)]),t("div",xl,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalI",ref:n},null,512)])]),wl]))}}),yl=v(bl,[["__scopeId","data-v-7ab190df"]]),Il=g('<section><h2>A Programmer&#39;s View of the Digital Evolution</h2></section><section><h3>Quick Survey: When Were You Born</h3><ul><li class="fragment">~1980</li><li class="fragment">1980~1984</li><li class="fragment">1985~1989</li><li class="fragment">1990~1994</li><li class="fragment">1995~1999</li><li class="fragment">2000~</li></ul></section><section><h3>When You Try to Learn Programming</h3><ul><li class="fragment">Weird syntaxes and code structures</li><li class="fragment">Strange concepts like stack / heap / thread</li><li class="fragment">What could be done with a programming language</li><li class="fragment">How to improve programming skills</li><li class="fragment">How to learn other languages fast</li><li class="fragment">And why some languages look similar to each other</li><li class="fragment">What happens underneath</li><li class="fragment">Should I learn Linux and command line tools</li></ul></section><section><h3>Fasten Your Seatbelt</h3><h4>We&#39;ll see patterns over and over again. Déjà vu.</h4></section>',4),Sl=p({__name:"prologue",setup(s){return(e,a)=>(h(),_("section",null,[Il,t("section",null,[o(_l)]),o(yl)]))}}),Ml="/workshop-apvode/assets/premium_photo-1679255807252-3c568399dfc2-DQyoh-xX.avif",Dl="/workshop-apvode/assets/Tower_of_Hanoi-CluCuWxr.jpeg",kl="/workshop-apvode/assets/BFoCM-memory-hierarchy-De5H_NOY.png",$l=`#include <stdio.h>  // printf
#include <stdlib.h> // malloc and free

int main() {
	int *x = (int *) malloc(sizeof(int));
	printf("The address of x  is %p\\n", &x);
	printf("The address of *x is %p\\n",  x);
	free(x);
	return 0;
}

`,Cl=`#include <stdio.h> // printf

int main() {
	int x;
	printf("The size of x is %ld byte(s)\\n", sizeof(int));
	printf("The address of x is %p\\n", &x);
	return 0;
}

`,Xl=`#include <stdio.h>
#include <stdlib.h>
#define VAR_SIZE 0x10
#define MAX_FRAME 5

int g_count = 0;

void foo() {
	if (g_count == MAX_FRAME)
		return;

	char s1[VAR_SIZE], *s2;
	s2 = (char *) malloc(VAR_SIZE * sizeof(char));
	printf("=== %d ===\\n", g_count);
	printf("The address of s1 is             %p\\n", &s1);
	printf("The address of s2 is             %p\\n", &s2);
	printf("The address that s2 points to is %p\\n",  s2);

	g_count++;
	foo();
	free(s2);
}

int main() {
	foo();
	return 0;
}

`,Nl=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	printf("The address of a    is %p\\n", &a);
	for (i = 0; i < SIZE; i++) {
		printf("The address of a[%d] is %p\\n",
			i,
			&a[i]
		);
	}

	return 0;
}

`,Ll=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	for (i = 0; i < SIZE; i++) {
		printf("The value of a[%d] is %d\\n",
		i,
		a[i]);
	}

	return 0;
}

`,Yl=`#include <stdio.h>

int main() {
	int x, *p;

	x = 42;
	p = &x;

	printf("The address of x is %p\\n", &x);
	printf("The address of p is %p\\n", &p);
	printf("The value   of p is %p\\n", p);
	printf("The value p points to is %d\\n", *p);

	return 0;
}

`,Ol=`$ ./addr_var_heap
The address of x  is 0x7ffedb7516c0
The address of *x is 0x61f42dfc92a0
`,Tl=`$ ./addr_var_recursive
=== 0 ===
The address of s1 is             0x7ffc1b25a6b0
The address of s2 is             0x7ffc1b25a6a8
The address that s2 points to is 0x632de61e72a0
=== 1 ===
The address of s1 is             0x7ffc1b25a670
The address of s2 is             0x7ffc1b25a668
The address that s2 points to is 0x632de61e76d0
=== 2 ===
The address of s1 is             0x7ffc1b25a630
The address of s2 is             0x7ffc1b25a628
The address that s2 points to is 0x632de61e76f0
=== 3 ===
The address of s1 is             0x7ffc1b25a5f0
The address of s2 is             0x7ffc1b25a5e8
The address that s2 points to is 0x632de61e7710
=== 4 ===
The address of s1 is             0x7ffc1b25a5b0
The address of s2 is             0x7ffc1b25a5a8
The address that s2 points to is 0x632de61e7730
`,Al=`$ ./addr_var_stack
The size of x is 4 byte(s)
The address of x is 0x7ffde0c2a054
`,El=`$ ./array
The address of a    is 0x7ffdbcba285c
The address of a[0] is 0x7ffdbcba285c
The address of a[1] is 0x7ffdbcba2860
The address of a[2] is 0x7ffdbcba2864
`,Rl=`$ ./array_uninitialized
The value of a[0] is 0
The value of a[1] is 4096
The value of a[2] is 0
`,Pl=`$ ./pointer
The address of x is 0x7fff90062e4c
The address of p is 0x7fff90062e50
The value   of p is 0x7fff90062e4c
The value p points to is 42
`,A=s=>(I("data-v-a10a5439"),s=s(),S(),s),Hl=A(()=>t("section",null,[t("div",null,"With C you don't have to deal with registers or instructions."),t("div",{class:"fragment"},"But you still need to take care of memory."),t("div",{class:"fragment"},"Let's get hands dirty.")],-1)),zl=A(()=>t("h3",null,"Address of Variable",-1)),Fl=A(()=>t("h3",null,"Hi, Pointer",-1)),Vl={class:"flex"},jl={class:"w-1/2"},Ul={class:"w-1/2"},Bl={"data-auto-animate":""},Wl=A(()=>t("h3",null,"Hi, Array",-1)),Gl={class:"flex"},Zl={class:"w-1/2"},Jl={class:"w-1/2"},ql={"data-auto-animate":""},Ql=A(()=>t("h3",null,"Hi, Array",-1)),Kl={class:"flex"},tc={class:"w-1/2"},ec={class:"w-1/2"},ac=A(()=>t("h3",null,"Allocate and Free Dynamic Memory",-1)),sc={"data-auto-animate":""},nc=A(()=>t("h3",null,"Let's Make It SPICER",-1)),ic={"data-auto-animate":""},oc=A(()=>t("h3",null,"Let's Make It SPICER",-1)),dc=g('<section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div class="flex justify-center" data-v-a10a5439><img data-src="'+Ml+'" data-v-a10a5439></div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div data-v-a10a5439>Tower of Hanoi</div><div class="flex justify-center" data-v-a10a5439><img data-src="'+Dl+'" data-v-a10a5439></div><div class="fragment" data-v-a10a5439>First-In-Last-Out (or Last-In-First-Out)</div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><img data-src="'+kl+'" data-v-a10a5439></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><table class="memory-hierarchy" data-v-a10a5439><tr data-v-a10a5439><td style="text-align:right;" data-v-a10a5439>0.5ns</td><td data-v-a10a5439>L1 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>0.5s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>7ns</td><td data-v-a10a5439>L2 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>7s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>100ns</td><td data-v-a10a5439>DRAM</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>100s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>150µs</td><td data-v-a10a5439>SSD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>1.7 days</td></tr><tr data-v-a10a5439><td data-v-a10a5439>10ms</td><td data-v-a10a5439>HDD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>16.5 weeks</td></tr></table></section><section data-v-a10a5439><h3 data-v-a10a5439>Stack</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>When a function is called, a block is reserved on the top of stack for local variables and some bookkeeping data.</li><li class="fragment" data-v-a10a5439>When that function returns, the block becomes unused and can be reused for another function call.</li><li class="fragment" data-v-a10a5439>In most computer architectures, there is a special register known as the <span class="text-red-500" data-v-a10a5439>stack pointer</span> register.</li><li class="fragment" data-v-a10a5439>The most recently used data (i.e. the data on the top of the stack) is likely to be the data needed next, it tends to stay in the CPU cache.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Heap</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>Is another region of memory managed by the operating system for dynamic memory allocation. (<code data-v-a10a5439>`malloc()` / `calloc()` / `realloc()`</code>)</li><li class="fragment" data-v-a10a5439>The compiler needs to know how much memory to allocate in a function, so you can&#39;t declare an array of unknown size on the stack.</li><li class="fragment" data-v-a10a5439>Sometime you also need to use a space to keep data for longer time the function in which it&#39;s created.</li><li class="fragment" data-v-a10a5439>Don&#39;t forget to call <code data-v-a10a5439>`free()`</code>, otherwise it would cause memory leak.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Now You May Have a Guess</h3><h3 data-v-a10a5439>of Stack Overflow</h3></section>',7),rc=p({__name:"stack-heap",setup(s){return(e,a)=>{const n=T("highlightjs");return h(),_("section",null,[Hl,t("section",null,[zl,o(n,{language:"c",autodetect:!1,code:u(Cl)},null,8,["code"]),o(n,{language:"plaintext",autodetect:!1,code:u(Al)},null,8,["code"])]),t("section",null,[Fl,t("div",Vl,[t("div",jl,[o(n,{language:"c",autodetect:!1,code:u(Yl)},null,8,["code"])]),t("div",Ul,[o(n,{language:"plaintext",autodetect:!1,code:u(Pl)},null,8,["code"])])])]),t("section",Bl,[Wl,t("div",Gl,[t("div",Zl,[o(n,{language:"c",autodetect:!1,code:u(Nl)},null,8,["code"])]),t("div",Jl,[o(n,{language:"plaintext",autodetect:!1,code:u(El)},null,8,["code"])])])]),t("section",ql,[Ql,t("div",Kl,[t("div",tc,[o(n,{language:"c",autodetect:!1,code:u(Ll)},null,8,["code"])]),t("div",ec,[o(n,{language:"plaintext",autodetect:!1,code:u(Rl)},null,8,["code"])])])]),t("section",null,[ac,o(n,{language:"c",autodetect:!1,code:u($l)},null,8,["code"]),o(n,{language:"plaintext",autodetect:!1,code:u(Ol)},null,8,["code"])]),t("section",sc,[nc,o(n,{language:"c",autodetect:!1,code:u(Xl)},null,8,["code"])]),t("section",ic,[oc,o(n,{language:"plaintext",autodetect:!1,code:u(Tl)},null,8,["code"])]),dc])}}}),lc=v(rc,[["__scopeId","data-v-a10a5439"]]),cc="/workshop-apvode/assets/1678948976_14529e3278_c-D5NwS9gj.jpg",uc="/workshop-apvode/assets/3281139507_f56091fa84_z-CK7TuODw.jpg",_c="/workshop-apvode/assets/DEC_VT100_terminal-DqpxrGex.jpg",hc="/workshop-apvode/assets/image_e3c2af63-3682-44c6-89b3-4c7d09f0fcf4-2TTtwk0m.png",fc={},gc=g('<section><ul><li>Terminals?</li><li>Consoles?</li><li>Shells?</li><li>Terminal Emulators?</li></ul></section><section><h3>Terminals</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/16057786@N00/1678948976"><img data-src="'+cc+'"></a></div></section><section><h3>Shells</h3><ul class="text-4xl"><li>The kernel of an operating system manages hardwares.</li><li>A shell provides an interface to interact with the kernel indirectly.</li></ul></section><section><h3>Notable Shells</h3><ul><li class="fragment">Thompson shell - 1971, Ken Thompson</li><li class="fragment">Bourne shell (sh) - 1979, Stephen Bourne</li><li class="fragment">Bourne-Again SHell (bash) - 1989, Brian Fox</li><li class="fragment">C shell (csh) - 1978, Bill Joy (BSD, vi, Sun Microsystems, Java, SPARC, Solaris, ...)</li><li class="fragment">Powershell - 2006, Microsoft</li><li class="fragment">Z shell (zsh) - 1990, Paul Falstad</li></ul></section><section><h3>Consoles</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/ajmexico/3281139507/"><img data-src="'+uc+'"></a></div></section><section><div class="flex justify-center"><a href="https://en.wikipedia.org/wiki/VT100"><img data-src="'+_c+'"></a></div></section><section><h3>Pseudoterminal</h3><ul><li>Remote logins (telnet, ssh)</li><li>Hardware terminals are less and less</li></ul></section><section><div class="flex justify-center"><img data-src="'+hc+'"></div></section><section><h3>Notable Terminal Emulators</h3><ul><li><a href="https://hyper.is/">Hyper</a></li><li><a href="https://conemu.github.io/">ConEmu</a></li><li><a href="https://en.wikipedia.org/wiki/PuTTY">PuTTY</a></li><li><a href="https://apps.microsoft.com/detail/9n0dx20hk701">Windows Terminal</a></li><li><a href="https://alacritty.org/">Alacritty</a></li></ul><div>Yet another GUI application</div><div>Take a try or watch tutorials</div></section>',9),mc=[gc];function pc(s,e){return h(),_("section",null,mc)}const vc=v(fc,[["render",pc]]),xc="/workshop-apvode/assets/BFoCM-von-neumann-computer-C3DFUaq3.svg",wc="/workshop-apvode/assets/BFoCM-von-neumann-computer-anatomy-CAf57Qs2.svg",bc="/workshop-apvode/assets/BFoCM-von-neumann-computer-loop-CpzOQyFq.svg",Tt=s=>(I("data-v-63872613"),s=s(),S(),s),yc=g('<section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Registers are inside processors, built with logic gates just like ALUs and other components.</li><li class="fragment" data-v-63872613>Registers are super fast, but can only be used to store a small number of data elements.</li><li class="fragment" data-v-63872613>Main memory is an array of bits, organized in <span class="mono italic" data-v-63872613>W</span> words of <span class="mono italic" data-v-63872613>N</span> bits each.</li><li class="fragment" data-v-63872613>Typically <span class="mono italic" data-v-63872613>W</span> is power of 2 (<span class="mono" data-v-63872613>W = 2<sup data-v-63872613>k</sup></span>), e.g. W = 8 (k = 3 address bits), N = 32 bits per word.</li><li class="fragment" data-v-63872613>Can read from and write to individual words.</li><li class="fragment" data-v-63872613>Many possible implementations.</li></ul></section><section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><table class="text-3xl" data-v-63872613><tr data-v-63872613><th class="text-center" data-v-63872613>Addr.</th><th class="text-center" data-v-63872613>Value</th></tr><tr data-v-63872613><td class="mono" data-v-63872613>000</td><td class="mono" data-v-63872613>11001001 01010001 10001111 01110011</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>001</td><td class="mono" data-v-63872613>01011000 01110001 10101101 11010001</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>010</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>...</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>111</td><td class="mono" data-v-63872613>10000100 01001111 11100100 00001000</td></tr></table></section><section data-auto-animate data-auto-animate-id="two" data-v-63872613><h3 data-v-63872613>Registers vs Memory</h3><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Typically variables live in memory.</li><li class="fragment" data-v-63872613>Registers hold temporary values or values that we need to use repeatedly.</li><li class="fragment" data-v-63872613>ALU operations work on registers only.</li><li class="fragment" data-v-63872613>To operate with memory variables: <ul data-v-63872613><li data-v-63872613>Load them into a register.</li><li data-v-63872613>Compute on them.</li><li data-v-63872613>Store the results back to memory.</li></ul></li></ul></section>',3),Ic={"data-auto-animate":"","data-auto-animate-id":"two"},Sc=Tt(()=>t("h3",null,"Registers vs Memory",-1)),Mc={class:"flex justify-center items-center"},Dc=g('<div class="w-1/2" data-v-63872613><ul data-v-63872613><li class="mono" data-v-63872613>0x1000: n</li><li class="mono" data-v-63872613>0x1004: r</li><li class="mono" data-v-63872613>0x1008: x</li><li class="mono" data-v-63872613>0x100C: y</li></ul></div>',1),kc={class:"w-1/2"},$c={class:"fragment"},Cc={class:"fragment"},Xc={"data-auto-animate":"","data-auto-animate-id":"three"},Nc=Tt(()=>t("h3",null,"von Neumann Computer",-1)),Lc={class:"flex items-center"},Yc=g('<div data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Also called stored-program computer</li><li class="fragment" data-v-63872613>Express program as a sequence of <span class="strong" data-v-63872613>coded instructions</span></li><li class="fragment" data-v-63872613>Memory holds both data and instructions</li><li class="fragment" data-v-63872613>CPU fetches, interprets, and executes successive instructions of the program</li></ul></div>',1),Oc=g('<section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex flex-col items-center" data-v-63872613><img data-src="'+wc+'" data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Instructions</span> coded as binary data</li><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Program Counter</span>, or PC, a special register, stores the address of the instruction to be executed</li><li class="fragment" data-v-63872613>Decode the instruction, and generate control signals for datapath</li></ul></div></section><section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex justify-center" data-v-63872613><img data-src="'+bc+'" data-v-63872613></div><div class="text-3xl text-left" data-v-63872613><div class="fragment mt-6" data-v-63872613>Instructions are the fundamental unit of work.</div><div class="fragment mt-6" data-v-63872613>Each instruction specifies: <ul data-v-63872613><li data-v-63872613>an operation (also called <span class="strong" data-v-63872613>opcode</span>) to be performed,</li><li data-v-63872613>source and destination <span class="strong" data-v-63872613>operands</span>.</li></ul></div><div class="fragment mt-6" data-v-63872613>By default, the next PC is current PC + size of current instruction, unless the instruction says otherwise. <span class="fragment" data-v-63872613><span class="strong" data-v-63872613>guess?</span></span></div></div></section><section data-v-63872613><h3 data-v-63872613>Your Own Programmable Machine</h3><ul data-v-63872613><li class="fragment" data-v-63872613>Now you can design your own CPU with logic gates. <span class="fragment" data-v-63872613>Theoretically.</span></li><li class="fragment" data-v-63872613>And you can write programs to run on your own CPU. <span class="fragment" data-v-63872613>In Binary.</span></li><li class="fragment" data-v-63872613>However it&#39;s too tedious to write programs directly in binary.</li><li class="fragment" data-v-63872613>So assembly language was created, it looks like <code data-v-63872613>add x1, x2, x3</code> and then would be translated by the <span class="strong" data-v-63872613>assemblers</span> into binary code.</li></ul></section>',3),Tc=`int x, y;
y = x - 37;`,Ac=`R1 <- Mem[0x1008]
R1 <- R1 - 37`,Ec=p({__name:"von-neumann-architecture",setup(s){const e=Dt("open_common_modal"),a=b(null);function n(){e.open_common_modal(a.value.outerHTML)}return(i,r)=>{const c=T("highlightjs");return h(),_("section",null,[yc,t("section",Ic,[Sc,t("div",Mc,[Dc,t("div",kc,[t("div",$c,[o(c,{language:"c",autodetect:!1,code:Tc})]),t("div",Cc,[o(c,{language:"plaintext",autodetect:!1,code:Ac})])])])]),t("section",Xc,[Nc,t("div",Lc,[Yc,t("div",{class:"fragment",onClick:n},[t("img",{ref_key:"vNCImg",ref:a,"data-src":xc},null,512)])])]),Oc])}}}),Rc=v(Ec,[["__scopeId","data-v-63872613"]]),At=s=>(I("data-v-d5ba0271"),s=s(),S(),s),Pc={class:"bfocm-toolbar"},Hc={ref:"revealEl",class:"reveal"},zc={class:"slides"},Fc=At(()=>t("img",{src:kt},null,-1)),Vc=["innerHTML"],jc=At(()=>t("div",{class:"text-3xl bg-white w-1/2 p-12"},[t("h3",null,"Shorcuts"),t("ul",{class:"pl-6 list-disc"},[t("li",null,[t("kbd",null,"ESC"),f(" or "),t("kbd",null,"o"),f(": toggle the overview mode on and off.")]),t("li",null,[t("kbd",null,"f"),f(": view presentation in fullscreen mode. Once in fullscreen mode, press the "),t("kbd",null,"ESC"),f(" key to exit.")]),t("li",null,[t("kbd",null,"←"),t("kbd",null,"↓"),t("kbd",null,"↑"),t("kbd",null,"→"),f(": navigate with arrow keys.")]),t("li",null,[t("kbd",null,"h"),t("kbd",null,"j"),t("kbd",null,"k"),t("kbd",null,"l"),f(": navigate with hjkl. (vim style)")]),t("li",null,[t("kbd",null,"g"),f(": jump to slide, type "),t("code",{class:"text-sky-500 underline underline-offset-8"},"6/2"),f(" will navigate to horizontal slide 6, vertical slide 2.")])]),t("p",{class:"text-xl"},"Go down to the end of each section first, then go right.")],-1)),Uc=p({__name:"App",setup(s){const e=b(!0);pt("dark_mode",e);const a=Vt(()=>`reveal-root-theme-${e.value?"black":"white"}`),n=Bt(()=>_e(()=>import("./Timeline-D3eIMs4r.js"),__vite__mapDeps([0,1,2]))),i=b(null),r=b(null),c=b(null),l=b(null);O(()=>{const j=new jt({hash:!1});j.initialize({maxScale:1,minScale:1,slideNumber:!0,plugins:[]}),j.on("slidechanged",gt=>{const{previousSlide:E,currentSlide:mt}=gt;J.has(E.id)&&J.get(E.id)(),Z.has(mt.id)&&Z.get(mt.id)()}),ye()});function x(){e.value=!e.value}function C(){i.value.show()}function y(){r.value.show()}function L(){l.value.show()}const X=b("");function Et(j){X.value=j,c.value.show(()=>X.value="")}return pt("open_common_modal",{open_common_modal:Et}),(j,gt)=>{const E=T("fa");return h(),_("div",{class:Ut(a.value)},[t("div",Pc,[t("div",{class:"btn",onClick:L},[o(E,{icon:"fa-regular fa-circle-question"})]),t("div",{class:"btn",onClick:x},[o(E,{icon:"fa-regular fa-lightbulb"})]),t("div",{class:"btn",onClick:y},[o(E,{icon:"fa-soid fa-microchip"})]),t("div",{class:"btn",onClick:C},[o(E,{icon:"fa-solid fa-timeline"})])]),t("div",Hc,[t("div",zc,[o(Sl),o(Ci),o(Rs),o(Rc),o(Dd),o(Bi),o(br),o(dd),o(Pd),o(Ar),o(_o),o(vc),o(al),o(lc),o(lr),o(Ve),o(Nd)])],512),o(Q,{ref_key:"timelineModal",ref:i},{default:w(()=>[o(u(n))]),_:1},512),o(Q,{ref_key:"gateModal",ref:r},{default:w(()=>[Fc]),_:1},512),o(Q,{ref_key:"commonModal",ref:c},{default:w(()=>[t("div",{innerHTML:X.value},null,8,Vc)]),_:1},512),o(Q,{ref_key:"helperModal",ref:l},{default:w(()=>[jc]),_:1},512)],2)}}}),Bc=v(Uc,[["__scopeId","data-v-d5ba0271"]]);at.add(Wt);at.add(Gt);at.add(Zt);at.add(Jt);$.registerLanguage("armasm",qt);$.registerLanguage("bash",Qt);$.registerLanguage("c",Kt);$.registerLanguage("csharp",te);$.registerLanguage("java",ee);$.registerLanguage("javascript",ae);$.registerLanguage("plaintext",se);$.registerLanguage("python",ne);$.registerLanguage("verilog",ie);$.registerLanguage("x86asm",oe);re(Bc).component("fa",le).use(de).mount("#app");
