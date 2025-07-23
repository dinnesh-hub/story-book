import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Pk8y3Nn_.js";const c=({variant:s="filled",backgroundColor:u,textColor:m,borderColor:f,fontSize:g,padding:x,borderRadius:C="16px",icon:d,deleteIcon:h,onClick:l,onDelete:p,className:S="",style:b,children:v})=>{const y={backgroundColor:s==="filled"?u||"#e0e0e0":"transparent",color:m||"#000",border:s==="outlined"?`1px solid ${f||"#e0e0e0"}`:"none",fontSize:g,padding:x||"4px 12px",borderRadius:C,cursor:l?"pointer":"default",display:"inline-flex",alignItems:"center",gap:"8px",...b};return e.jsxs("div",{className:`mui-chip ${S}`,style:y,onClick:l,children:[d&&e.jsx("span",{className:"mui-chip-icon",children:d}),e.jsx("span",{className:"mui-chip-content",children:v}),p&&e.jsx("span",{className:"mui-chip-delete",onClick:D=>{D.stopPropagation(),p()},children:h||"✕"})]})};c.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"16px"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},deleteIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"Components/Chip/Chip",component:c,tags:["autodocs"]},r={args:{children:"Filled Chip",variant:"filled",backgroundColor:"#1976d2",textColor:"#fff",fontSize:"14px",padding:"6px 16px"}},n={args:{children:"Finished",variant:"filled",backgroundColor:"#ECFDF3",textColor:"#027A48",fontSize:"14px",padding:"6px 16px"}},a={args:{children:"In Progress",variant:"filled",backgroundColor:"#FFECD5",textColor:"#C59626",fontSize:"14px",padding:"6px 16px"}},o={args:{children:"Queued",variant:"filled",backgroundColor:"#DDD5FF",textColor:"#181D8C",fontSize:"14px",padding:"6px 16px"}},t={args:{children:"Outlined Chip",variant:"outlined",textColor:"#1976d2",borderColor:"#1976d2",fontSize:"14px",padding:"6px 16px"}},i={args:{children:"Deletable Chip",variant:"filled",backgroundColor:"#ff9800",textColor:"#fff",icon:e.jsx("span",{children:"🔥"}),deleteIcon:e.jsx("span",{children:"🗑️"}),onDelete:()=>alert("Deleted!")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filled Chip",
    variant: "filled",
    backgroundColor: "#1976d2",
    textColor: "#fff",
    fontSize: "14px",
    padding: "6px 16px"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Finished",
    variant: "filled",
    backgroundColor: "#ECFDF3",
    textColor: "#027A48",
    fontSize: "14px",
    padding: "6px 16px"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "In Progress",
    variant: "filled",
    backgroundColor: "#FFECD5",
    textColor: "#C59626",
    fontSize: "14px",
    padding: "6px 16px"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Queued",
    variant: "filled",
    backgroundColor: "#DDD5FF",
    textColor: "#181D8C",
    fontSize: "14px",
    padding: "6px 16px"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outlined Chip",
    variant: "outlined",
    textColor: "#1976d2",
    borderColor: "#1976d2",
    fontSize: "14px",
    padding: "6px 16px"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Deletable Chip",
    variant: "filled",
    backgroundColor: "#ff9800",
    textColor: "#fff",
    icon: <span>🔥</span>,
    deleteIcon: <span>🗑️</span>,
    onDelete: () => alert("Deleted!")
  }
}`,...i.parameters?.docs?.source}}};const T=["Filled","Success","Progress","Queue","Outlined","WithIcons"];export{r as Filled,t as Outlined,a as Progress,o as Queue,n as Success,i as WithIcons,T as __namedExportsOrder,q as default};
