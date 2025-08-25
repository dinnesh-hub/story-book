import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CTVOWTB1.js";import{g as E}from"./index-Cfaf9MYL.js";function v({value:i,onChange:x,placeholder:b="Select date",minDate:k,maxDate:P,icon:j,dateFormat:F="DD/MM/YYYY",styles:s={}}){const[W,w]=p.useState(!1),[r,l]=p.useState(i?new Date(i):new Date),[d,c]=p.useState("day"),C=p.useRef(null);p.useEffect(()=>{const e=o=>{C.current&&!C.current.contains(o.target)&&(w(!1),c("day"))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const q=["Su","Mo","Tu","We","Th","Fr","Sa"],R=()=>{const e=new Date(r.getFullYear(),r.getMonth(),1),o=new Date(r.getFullYear(),r.getMonth()+1,0),a=e.getDay(),n=o.getDate(),g=[];for(let u=0;u<a;u++)g.push(null);for(let u=1;u<=n;u++)g.push(new Date(r.getFullYear(),r.getMonth(),u));return g},T=e=>!!(k&&e<k||P&&e>P),M=e=>{const o=e.getDate().toString().padStart(2,"0"),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear();switch(F){case"DD/MM/YYYY":return`${o}/${a}/${n}`;case"MM/DD/YYYY":return`${a}/${o}/${n}`;default:return`${n}-${a}-${o}`}},A=e=>{l(new Date(r.getFullYear(),e)),c("day")},I=e=>{l(new Date(e,r.getMonth())),c("month")},V=()=>{const e=Array.from({length:12},(o,a)=>new Date(r.getFullYear(),a).toLocaleString("default",{month:"short"}));return t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,textAlign:"center"},children:e.map((o,a)=>t.jsx("div",{onClick:()=>A(a),style:{padding:"10px 0",cursor:"pointer",borderRadius:4,backgroundColor:a===r.getMonth()?"#1976d2":"transparent",color:a===r.getMonth()?"#fff":"inherit",fontWeight:a===r.getMonth()?"bold":400,border:a===r.getMonth()?"1px solid blue":"",...s.month},children:o},o))})},$=()=>{const e=r.getFullYear(),o=Math.floor(e/10)*10,a=Array.from({length:12},(n,g)=>o-1+g);return t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,textAlign:"center"},children:a.map(n=>t.jsx("div",{onClick:()=>I(n),style:{padding:"10px 0",cursor:"pointer",borderRadius:4,backgroundColor:n===e?"#1976d2":"transparent",color:n===e?"#fff":"inherit",fontWeight:n===e?"bold":400,border:n===e?"1px solid blue":"",...s.year},children:n},n))})};return t.jsxs("div",{ref:C,style:{position:"relative",display:"inline-block",...s.container},children:[t.jsxs("div",{onClick:()=>{w(e=>!e),c("day")},style:{display:"flex",alignItems:"center",padding:"10px 14px",fontSize:14,border:"1px solid #ccc",borderRadius:6,width:220,cursor:"pointer",position:"relative",...s.input},children:[t.jsx("span",{style:{flexGrow:1,color:i?"inherit":"#999"},children:i?M(i):b}),j&&t.jsx("span",{style:{marginLeft:8,display:"flex",alignItems:"center"},children:j})]}),W&&t.jsxs("div",{style:{position:"absolute",top:"110%",left:0,background:"#fff",border:"1px solid #ccc",borderRadius:6,padding:12,zIndex:10,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",minWidth:220,...s.dropdown},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10,alignItems:"center"},children:[t.jsx("button",{onClick:()=>{l(d==="day"?new Date(r.getFullYear(),r.getMonth()-1):d==="month"?new Date(r.getFullYear()-1,r.getMonth()):new Date(r.getFullYear()-10,r.getMonth()))},style:{background:"none",border:"none",cursor:"pointer",...s.arrow},children:"◀"}),t.jsxs("strong",{style:{cursor:"pointer",display:"flex",gap:4,...s.header},children:[t.jsx("span",{onClick:()=>c("month"),children:r.toLocaleString("default",{month:"long"})}),t.jsx("span",{onClick:()=>c("year"),children:r.getFullYear()})]}),t.jsx("button",{onClick:()=>{l(d==="day"?new Date(r.getFullYear(),r.getMonth()+1):d==="month"?new Date(r.getFullYear()+1,r.getMonth()):new Date(r.getFullYear()+10,r.getMonth()))},style:{background:"none",border:"none",cursor:"pointer",...s.arrow},children:"▶"})]}),d==="day"&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,textAlign:"center",fontSize:12,fontWeight:600,marginBottom:4,...s.weekdays},children:q.map(e=>t.jsx("div",{children:e},e))}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,textAlign:"center"},children:[d==="day"&&R().map((e,o)=>{if(!e)return t.jsx("div",{},o);const a=i&&M(i)===M(e),n=T(e);return t.jsx("div",{onClick:()=>{n||(x(e),w(!1))},style:{padding:6,borderRadius:4,cursor:n?"not-allowed":"pointer",backgroundColor:a?"#1976d2":"transparent",color:n?"#ccc":a?"#fff":"inherit",fontWeight:a?"bold":400,transition:"0.2s ease",...n?s.disabledDay:a?s.selectedDay:s.day},children:e.getDate()},o)}),d==="month"&&t.jsx("div",{style:{gridColumn:"span 7"},children:V()}),d==="year"&&t.jsx("div",{style:{gridColumn:"span 7"},children:$()})]})]})]})}v.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select date"',computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dateFormat:{required:!1,tsType:{name:"union",raw:'"DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD"',elements:[{name:"literal",value:'"DD/MM/YYYY"'},{name:"literal",value:'"MM/DD/YYYY"'},{name:"literal",value:'"YYYY-MM-DD"'}]},description:"",defaultValue:{value:'"DD/MM/YYYY"',computed:!1}},styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  container?: CSSProperties;\r
  input?: CSSProperties;\r
  dropdown?: CSSProperties;\r
  day?: CSSProperties;\r
  selectedDay?: CSSProperties;\r
  disabledDay?: CSSProperties;\r
  arrow?: CSSProperties;\r
  header?: CSSProperties;\r
  weekdays?: CSSProperties;\r
  month?: CSSProperties;\r
  year?: CSSProperties;\r
}`,signature:{properties:[{key:"container",value:{name:"CSSProperties",required:!1}},{key:"input",value:{name:"CSSProperties",required:!1}},{key:"dropdown",value:{name:"CSSProperties",required:!1}},{key:"day",value:{name:"CSSProperties",required:!1}},{key:"selectedDay",value:{name:"CSSProperties",required:!1}},{key:"disabledDay",value:{name:"CSSProperties",required:!1}},{key:"arrow",value:{name:"CSSProperties",required:!1}},{key:"header",value:{name:"CSSProperties",required:!1}},{key:"weekdays",value:{name:"CSSProperties",required:!1}},{key:"month",value:{name:"CSSProperties",required:!1}},{key:"year",value:{name:"CSSProperties",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const O={title:"Components/DatePicker",component:v,tags:["autodocs"],argTypes:{value:{control:"date"},onChange:{action:"date selected",description:"Callback function that is called when a date is selected."},minDate:{control:"date"},maxDate:{control:"date"},icon:{control:!1},dateFormat:{control:"radio",options:["DD/MM/YYYY","MM/DD/YYYY","YYYY-MM-DD"]}}},m=i=>{const[x,b]=p.useState(i.value||null);return t.jsx(v,{...i,value:x,onChange:b})},h={render:m,args:{value:null,placeholder:"Select a date"}},f={render:m,args:{value:new Date(2025,7,25)}},D={render:m,args:{value:new Date(2025,7,25),dateFormat:"MM/DD/YYYY"}},y={render:m,args:{value:null,icon:t.jsx(E,{})}},S={render:m,args:{value:null,minDate:new Date(2025,7,1),maxDate:new Date(2025,7,31),placeholder:"Select in August 2025"}},Y={render:m,args:{value:new Date(2025,7,25),styles:{container:{fontFamily:"Arial, sans-serif"},input:{border:"2px solid #3498db",borderRadius:"8px",color:"#2c3e50"},dropdown:{border:"1px solid #bdc3c7",borderRadius:"10px",boxShadow:"0 6px 16px rgba(0,0,0,0.2)"},day:{color:"#34495e"},selectedDay:{backgroundColor:"#2980b9",color:"#fff"},disabledDay:{color:"#95a5a6",textDecoration:"line-through"},arrow:{color:"#3498db"}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: null,
    placeholder: "Select a date"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: new Date(2025, 7, 25) // August 25, 2025
  }
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: new Date(2025, 7, 25),
    dateFormat: "MM/DD/YYYY"
  }
}`,...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: null,
    icon: <FaCalendarAlt />
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: null,
    minDate: new Date(2025, 7, 1),
    maxDate: new Date(2025, 7, 31),
    placeholder: "Select in August 2025"
  }
}`,...S.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: DatePickerWithState,
  args: {
    value: new Date(2025, 7, 25),
    styles: {
      container: {
        fontFamily: "Arial, sans-serif"
      },
      input: {
        border: "2px solid #3498db",
        borderRadius: "8px",
        color: "#2c3e50"
      },
      dropdown: {
        border: "1px solid #bdc3c7",
        borderRadius: "10px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
      },
      day: {
        color: "#34495e"
      },
      selectedDay: {
        backgroundColor: "#2980b9",
        color: "#fff"
      },
      disabledDay: {
        color: "#95a5a6",
        textDecoration: "line-through"
      },
      arrow: {
        color: "#3498db"
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};const z=["Basic","WithInitialValue","WithCustomDateFormat","WithIcon","WithDateRange","WithCustomStyles"];export{h as Basic,D as WithCustomDateFormat,Y as WithCustomStyles,S as WithDateRange,y as WithIcon,f as WithInitialValue,z as __namedExportsOrder,O as default};
