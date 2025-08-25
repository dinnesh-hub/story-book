import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y}from"./iframe-CTVOWTB1.js";const s=({separator:a="/",separatorClassName:o="",separatorStyle:t={},children:l,className:u,style:p})=>{const n=y.Children.toArray(l);return e.jsx("nav",{className:`breadcrumb ${u||""}`,style:p,"aria-label":"breadcrumb",children:e.jsx("ol",{className:"breadcrumb-list",children:n.map((c,b)=>e.jsxs(y.Fragment,{children:[c,b<n.length-1&&e.jsx("span",{className:`breadcrumb-separator ${o}`,style:t,children:a})]},b))})})};s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}},separatorClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},separatorStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const r=({children:a,href:o,isCurrent:t=!1,fontSize:l="14px",fontColor:u,className:p,style:n,onClick:c})=>{const f={fontSize:l,color:u||"#1D242D",fontWeight:t?"bold":"normal",...n},S=`breadcrumb-item ${t?"breadcrumb-current":""} ${p||""}`;return o&&!t?e.jsx("li",{children:e.jsx("a",{href:o,className:`${S} breadcrumb-link`,style:f,onClick:c,children:a})}):e.jsx("li",{className:S,style:f,onClick:c,children:a})};r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:""},isCurrent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontSize:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"14px"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Components/Breadcrumb",component:s,tags:["autodocs"],argTypes:{separator:{control:{type:"text"},description:"Custom separator between breadcrumb items.",defaultValue:"/"},separatorClassName:{control:{type:"text"},description:"CSS class name for the separator."},separatorStyle:{control:{type:"object"},description:"Inline CSS styles for the separator."},className:{control:{type:"text"},description:"Additional CSS class name for the breadcrumb container."},style:{control:{type:"object"},description:"Inline CSS styles for the breadcrumb container."},children:{control:!1}}},i={args:{separator:"/",separatorClassName:"",separatorStyle:{},className:"",style:{}},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{children:"Home"}),e.jsx(r,{children:"Products"}),e.jsx(r,{isCurrent:!0,children:"Shoes"})]})},d={render:()=>e.jsxs(s,{separator:"/",children:[e.jsx(r,{fontSize:"16px",children:"Home"}),e.jsx(r,{fontSize:"16px",children:"Products"}),e.jsx(r,{isCurrent:!0,fontSize:"16px",children:"Shoes"})]})},m={args:{separator:"→",separatorStyle:{fontSize:"20px",color:"gray"}},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"/",children:"Dashboard"}),e.jsx(r,{href:"/settings",children:"Settings"}),e.jsx(r,{isCurrent:!0,children:"Profile"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    separator: "/",
    separatorClassName: "",
    separatorStyle: {},
    className: "",
    style: {}
  },
  render: args => <Breadcrumb {...args}>\r
      <BreadcrumbItem>Home</BreadcrumbItem>\r
      <BreadcrumbItem>Products</BreadcrumbItem>\r
      <BreadcrumbItem isCurrent>Shoes</BreadcrumbItem>\r
    </Breadcrumb>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb separator="/">\r
      <BreadcrumbItem fontSize="16px">Home</BreadcrumbItem>\r
      <BreadcrumbItem fontSize="16px">Products</BreadcrumbItem>\r
      <BreadcrumbItem isCurrent fontSize="16px">Shoes</BreadcrumbItem>\r
    </Breadcrumb>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    separator: "→",
    separatorStyle: {
      fontSize: "20px",
      color: "gray"
    }
  },
  render: args => <Breadcrumb {...args}>\r
      <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>\r
      <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>\r
      <BreadcrumbItem isCurrent>Profile</BreadcrumbItem>\r
    </Breadcrumb>
}`,...m.parameters?.docs?.source}}};const B=["Default","WithCustomFontSize","WithCustomSeparator"];export{i as Default,d as WithCustomFontSize,m as WithCustomSeparator,B as __namedExportsOrder,C as default};
