import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";const r=({orientation:t="horizontal",variant:y="fullWidth",textAlign:f="center",color:p="#e0e0e0",thickness:m=1,length:h,children:g,style:v,className:S=""})=>{const u=!!g;return e.jsx("div",{className:`custom-divider ${t} ${y} ${u?"with-children":""} text-${f} ${S}`,style:{...t==="horizontal"?{borderBottom:`${m}px solid ${p}`,width:h||"100%"}:{borderRight:`${m}px solid ${p}`,height:h||"100%"},...v},children:u&&t==="horizontal"&&e.jsx("span",{className:"divider-label",children:g})})};r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"fullWidth" | "inset" | "middle"',elements:[{name:"literal",value:'"fullWidth"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"middle"'}]},description:"",defaultValue:{value:'"fullWidth"',computed:!1}},textAlign:{required:!1,tsType:{name:"union",raw:'"center" | "left" | "right"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#e0e0e0"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},length:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const A={title:"Components/Divider",component:r,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},variant:{control:"radio",options:["fullWidth","inset","middle"]},textAlign:{control:"radio",options:["center","left","right"]},color:{control:"color"},thickness:{control:"number"},length:{control:"text"},children:{control:"text"},style:{control:"object"},className:{control:"text"}}},x={display:"flex",alignItems:"center",justifyContent:"center",height:"100px",width:"300px",border:"1px solid #ccc",padding:"1rem",boxSizing:"border-box"},n={fontFamily:"sans-serif",fontSize:"14px",color:"#555",margin:"0 10px"},i={args:{orientation:"horizontal"}},s={args:{children:"Section Title"}},l={args:{children:"Custom",color:"#e74c3c",thickness:2,style:{borderStyle:"dashed"}}},a={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx("p",{style:{...n,textAlign:"left"},children:"Left Aligned Text"}),e.jsx(r,{...t,textAlign:"left",children:"Left"}),e.jsx("p",{style:{...n,textAlign:"center"},children:"Center Aligned Text"}),e.jsx(r,{...t,textAlign:"center",children:"Center"}),e.jsx("p",{style:{...n,textAlign:"right"},children:"Right Aligned Text"}),e.jsx(r,{...t,textAlign:"right",children:"Right"})]}),args:{length:"80%"}},o={render:t=>e.jsxs("div",{style:x,children:[e.jsx("span",{style:n,children:"Left Content"}),e.jsx(r,{...t}),e.jsx("span",{style:n,children:"Right Content"})]}),args:{orientation:"vertical",length:"80px"}},d={render:t=>e.jsxs("div",{style:x,children:[e.jsx("span",{style:n,children:"Left Content"}),e.jsx(r,{...t}),e.jsx("span",{style:n,children:"Right Content"})]}),args:{orientation:"vertical",children:"OR",length:"80px"}},c={render:t=>e.jsxs("div",{style:{padding:"0 20px"},children:[e.jsx("p",{style:n,children:"Full Width"}),e.jsx(r,{...t,variant:"fullWidth"}),e.jsx("p",{style:n,children:"Middle"}),e.jsx(r,{...t,variant:"middle"}),e.jsx("p",{style:n,children:"Inset"}),e.jsx(r,{...t,variant:"inset"})]}),args:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Section Title"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Custom",
    color: "#e74c3c",
    thickness: 2,
    style: {
      borderStyle: "dashed"
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
      <p style={{
      ...textStyle,
      textAlign: "left"
    }}>Left Aligned Text</p>\r
      <Divider {...args} textAlign="left" children="Left" />\r
      <p style={{
      ...textStyle,
      textAlign: "center"
    }}>Center Aligned Text</p>\r
      <Divider {...args} textAlign="center" children="Center" />\r
      <p style={{
      ...textStyle,
      textAlign: "right"
    }}>Right Aligned Text</p>\r
      <Divider {...args} textAlign="right" children="Right" />\r
    </div>,
  args: {
    length: "80%"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={commonContainerStyle}>\r
      <span style={textStyle}>Left Content</span>\r
      <Divider {...args} />\r
      <span style={textStyle}>Right Content</span>\r
    </div>,
  args: {
    orientation: "vertical",
    length: "80px"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={commonContainerStyle}>\r
      <span style={textStyle}>Left Content</span>\r
      <Divider {...args} />\r
      <span style={textStyle}>Right Content</span>\r
    </div>,
  args: {
    orientation: "vertical",
    children: "OR",
    length: "80px"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "0 20px"
  }}>\r
      <p style={textStyle}>Full Width</p>\r
      <Divider {...args} variant="fullWidth" />\r
      <p style={textStyle}>Middle</p>\r
      <Divider {...args} variant="middle" />\r
      <p style={textStyle}>Inset</p>\r
      <Divider {...args} variant="inset" />\r
    </div>,
  args: {}
}`,...c.parameters?.docs?.source}}};const T=["Horizontal","WithText","WithCustomStyles","WithDifferentAlignments","Vertical","VerticalWithText","Variants"];export{i as Horizontal,c as Variants,o as Vertical,d as VerticalWithText,l as WithCustomStyles,a as WithDifferentAlignments,s as WithText,T as __namedExportsOrder,A as default};
