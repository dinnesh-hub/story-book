import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-CTVOWTB1.js";function K({type:M="continuous",size:E="md",min:t=0,max:m=100,step:l=1,value:P,onChange:G,color:w="#1976d2",trackColor:_="#bdbdbd",showValueLabel:H=!1,marks:B=!1}){const c=M==="range",[J,Q]=R.useState(P??(c?[t,m]:t)),[Y,C]=R.useState(null),F=R.useRef(null),i=P!==void 0?P:J,p=e=>(e-t)*100/(m-t),T=e=>Math.min(m,Math.max(t,e)),b=(()=>{if(Array.isArray(B))return B.map(e=>typeof e=="number"?{value:e}:{value:e.value,label:e.label});if(B===!0&&typeof l=="number"&&l>0){const e=[];for(let r=t;r<=m;r+=l)e.push({value:Number(r.toFixed(6))});return e[e.length-1].value!==m&&e.push({value:m}),e}return[]})(),O=e=>{if(M==="discrete"){if(l===null&&b.length>0){let r=b[0].value,s=Math.abs(e-r);for(let a=1;a<b.length;a++){const n=Math.abs(e-b[a].value);n<s&&(s=n,r=b[a].value)}return r}if(typeof l=="number"&&l>0){const r=t+Math.round((e-t)/l)*l,s=l.toString().split(".")[1]?.length??0;return Number(T(r).toFixed(s))}}return e},f=e=>{Q(e),G?.(e)},x=(e,r)=>{const s=T(t+(m-t)*r/100),a=O(s);if(c){const[n,d]=[...i];if(e===0){const o=Math.min(a,d);f([o,d])}else{const o=Math.max(a,n);f([n,o])}}else f(a)},Z=e=>r=>{r.preventDefault(),C(e);const s=F.current;if(!s)return;const a=d=>{const o=s.getBoundingClientRect(),g=(d.clientX-o.left)/o.width*100;x(e,Math.max(0,Math.min(100,g)))},n=()=>{C(null),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",n)},ee=e=>{const r=F.current;if(!r)return;const s=r.getBoundingClientRect(),a=(e.clientX-s.left)/s.width*100;if(c){const[n,d]=i,o=T(t+(m-t)*a/100),g=Math.abs(o-n)<=Math.abs(o-d)?0:1;x(g,Math.max(0,Math.min(100,a)))}else x(0,Math.max(0,Math.min(100,a)))},U=(e,r)=>{const s=H||Y===r,a=n=>{if(n.key!=="ArrowLeft"&&n.key!=="ArrowRight")return;n.preventDefault();const d=n.key==="ArrowLeft"?-1:1;if(M==="discrete"&&l===null&&b.length>0){const j=e,S=b.map(h=>h.value).sort((h,$)=>h-$),re=S.findIndex(h=>h===j),ae=Math.min(S.length-1,Math.max(0,re+d)),X=S[ae];if(c){const[h,$]=i;f(r===0?[Math.min(X,$),$]:[h,Math.max(X,h)])}else f(X);return}const o=typeof l=="number"&&l>0?l:(m-t)/100,g=T(e+d*o),k=O(g);if(c){const[j,S]=i;f(r===0?[Math.min(k,S),S]:[j,Math.max(k,j)])}else f(k)};return u.jsx("div",{className:"slider-thumb",style:{left:`${p(e)}%`,backgroundColor:w},tabIndex:0,role:"slider","aria-valuemin":t,"aria-valuemax":m,"aria-valuenow":e,onKeyDown:a,onMouseDown:Z(r),children:s&&u.jsx("div",{className:"slider-label",children:Math.round(e)})},r)},y=c?i[0]:i,V=c?i[1]:i;return u.jsxs("div",{className:`slider-root slider-${E}`,ref:F,onMouseDown:ee,children:[u.jsx("div",{className:"slider-track",style:{background:c?`linear-gradient(to right, 
                ${_} ${p(y)}%, 
                ${w} ${p(y)}%, 
                ${w} ${p(V)}%, 
                ${_} ${p(V)}%)`:`linear-gradient(to right, ${w} ${p(y)}%, ${_} ${p(y)}%)`}}),b.length>0&&u.jsx("div",{className:"slider-marks",children:b.map((e,r)=>{const s=`${p(e.value)}%`,a=c?e.value>=Math.min(y,V)&&e.value<=Math.max(y,V):e.value<=y;return u.jsxs("div",{className:"slider-mark-wrapper",style:{left:s},children:[u.jsx("div",{className:`slider-mark ${a?"slider-mark-active":""}`,style:{backgroundColor:a?w:void 0},onMouseDown:n=>{if(n.stopPropagation(),c){const[d,o]=i,g=Math.abs(e.value-d)<=Math.abs(e.value-o)?0:1,k=p(e.value);x(g,k),C(g)}else x(0,p(e.value)),C(0)}}),e.label&&u.jsx("div",{className:"slider-mark-label",children:e.label})]},r)})}),c?[U(i[0],0),U(i[1],1)]:U(i,0)]})}K.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{type:{required:!1,tsType:{name:"union",raw:'"continuous" | "discrete" | "range"',elements:[{name:"literal",value:'"continuous"'},{name:"literal",value:'"discrete"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"continuous"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"number for step snapping; set to null to allow marks-only snapping (MUI-style)",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#1976d2"',computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#bdbdbd"',computed:!1}},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"If true => label always visible. If false => label only while dragging",defaultValue:{value:"false",computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"boolean | Mark[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",raw:"number | { value: number; label?: string }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ value: number; label?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]}],raw:"Mark[]"}]},description:"Provide marks; if true and step is a number, marks are generated from step;",defaultValue:{value:"false",computed:!1}}}};const se={title:"Components/Slider",component:K,tags:["autodocs"],argTypes:{type:{control:"radio",options:["continuous","discrete","range"],description:"The type of slider to display."},size:{control:"radio",options:["sm","md","lg"],description:"The size of the slider."},min:{control:"number"},max:{control:"number"},step:{control:"number",description:"The step value for discrete snapping. Set to `null` for marks-only snapping."},value:{control:"object",description:"The current value(s) of the slider."},onChange:{action:"value changed"},color:{control:"color"},trackColor:{control:"color"},showValueLabel:{control:"boolean"},marks:{control:"object"}}},v=M=>{const[E,t]=R.useState(M.value);return u.jsx(K,{...M,value:E,onChange:t})},W={render:v,args:{type:"continuous",value:50}},q={render:v,args:{type:"discrete",value:50,step:10}},D={render:v,args:{type:"range",value:[20,80]}},L={render:v,args:{type:"discrete",step:10,marks:!0}},N={render:v,args:{type:"discrete",step:null,value:20,marks:[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}]}},z={render:v,args:{value:50,color:"#e74c3c",trackColor:"#bdc3c7"}},A={render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"300px"},children:[u.jsx(v,{size:"sm",value:30}),u.jsx(v,{size:"md",value:50}),u.jsx(v,{size:"lg",value:70})]})},I={render:v,args:{value:50,showValueLabel:!0}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    type: "continuous",
    value: 50
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    type: "discrete",
    value: 50,
    step: 10
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    type: "range",
    value: [20, 80]
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    type: "discrete",
    step: 10,
    marks: true
  }
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    type: "discrete",
    step: null,
    // Enables marks-only snapping
    value: 20,
    marks: [{
      value: 0,
      label: "0°C"
    }, {
      value: 20,
      label: "20°C"
    }, {
      value: 37,
      label: "37°C"
    }, {
      value: 100,
      label: "100°C"
    }]
  }
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    value: 50,
    color: "#e74c3c",
    trackColor: "#bdc3c7"
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "300px"
  }}>\r
      <SliderWithState size="sm" value={30} />\r
      <SliderWithState size="md" value={50} />\r
      <SliderWithState size="lg" value={70} />\r
    </div>
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    value: 50,
    showValueLabel: true
  }
}`,...I.parameters?.docs?.source}}};const le=["Continuous","Discrete","Range","WithMarks","CustomMarks","CustomColors","AllSizes","WithValueLabelAlwaysVisible"];export{A as AllSizes,W as Continuous,z as CustomColors,N as CustomMarks,q as Discrete,D as Range,L as WithMarks,I as WithValueLabelAlwaysVisible,le as __namedExportsOrder,se as default};
