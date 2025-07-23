import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as f}from"./iframe-Pk8y3Nn_.js";import{B as r}from"./BreadcrumbItem-DUb3ytnO.js";const s=({children:a,separator:m="/",className:i="",style:l,ariaLabel:u="breadcrumb",separatorClassName:p="",separatorStyle:b={}})=>{const o=f.Children.toArray(a).filter(Boolean);return e.jsx("nav",{className:`mui-breadcrumbs ${i}`,style:l,"aria-label":u,children:e.jsx("ol",{className:"breadcrumb-list",children:o.map((h,d)=>e.jsxs("li",{className:"breadcrumb-item",children:[h,d<o.length-1&&e.jsx("span",{className:`breadcrumb-separator ${p}`,style:b,children:m})]},d))})})};s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"breadcrumb"',computed:!1}},separatorClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},separatorStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const x={title:"Components/Breadcrumbs/Breadcrumbs",component:s,tags:["autodocs"],parameters:{layout:"centered"}},t={args:{separator:"/",className:"",style:void 0,separatorClassName:"",separatorStyle:{}},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/docs",children:"Docs"}),e.jsx(r,{children:"Getting Started"})]})},n={args:{separator:"→",separatorStyle:{color:"green",fontWeight:"bold"}},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"/",children:"Dashboard"}),e.jsx(r,{href:"/settings",children:"Settings"}),e.jsx(r,{children:"Profile"})]})},c={args:{separator:"/"},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"/",icon:e.jsx("span",{children:"🏠"}),children:"Home"}),e.jsx(r,{href:"/category",icon:e.jsx("span",{children:"📂"}),children:"Category"}),e.jsx(r,{icon:e.jsx("span",{children:"📄"}),children:"File"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    separator: "/",
    className: "",
    style: undefined,
    separatorClassName: "",
    separatorStyle: {}
  },
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbItem href="/">Home</BreadcrumbItem>\r
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>\r
      <BreadcrumbItem>Getting Started</BreadcrumbItem>\r
    </Breadcrumbs>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    separator: "→",
    separatorStyle: {
      "color": "green",
      "fontWeight": "bold"
    }
  },
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>\r
      <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>\r
      <BreadcrumbItem>Profile</BreadcrumbItem>\r
    </Breadcrumbs>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    separator: "/"
  },
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbItem href="/" icon={<span>🏠</span>}>\r
        Home\r
      </BreadcrumbItem>\r
      <BreadcrumbItem href="/category" icon={<span>📂</span>}>\r
        Category\r
      </BreadcrumbItem>\r
      <BreadcrumbItem icon={<span>📄</span>}>File</BreadcrumbItem>\r
    </Breadcrumbs>
}`,...c.parameters?.docs?.source}}};const I=["Default","WithCustomSeparator","WithIcons"];export{t as Default,n as WithCustomSeparator,c as WithIcons,I as __namedExportsOrder,x as default};
