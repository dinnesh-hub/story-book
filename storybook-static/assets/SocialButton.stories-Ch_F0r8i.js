import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";import{m as u,n as f,o as b}from"./index-Cfaf9MYL.js";const a=({icon:o,label:x="Sign in",variant:m="full",size:n="md",backgroundColor:d="#fff",textColor:p="#000",className:C="",onClick:F})=>{const g=typeof n=="number",y=`social-btn ${g?"":`social-btn--${n}`} social-btn--${m} ${C}`.trim(),v=g?{width:n,height:n,backgroundColor:d,color:p}:{backgroundColor:d,color:p};return e.jsxs("button",{className:y,style:v,onClick:F,children:[e.jsx("span",{className:"social-btn-icon",children:o}),m==="full"&&e.jsx("span",{className:"social-btn-label",children:x})]})};a.__docgenInfo={description:"",methods:[],displayName:"SocialButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sign in"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"full" | "iconOnly"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"iconOnly"'}]},description:"",defaultValue:{value:'"full"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | number',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"number"}]},description:"",defaultValue:{value:'"md"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fff"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"Components/SocialButton",component:a,tags:["autodocs"],argTypes:{icon:{control:!1},label:{control:"text"},variant:{control:"radio",options:["full","iconOnly"]},size:{control:"select",options:["sm","md","lg",40,60]},backgroundColor:{control:"color"},textColor:{control:"color"},onClick:{action:"clicked"}}},r={args:{icon:e.jsx(u,{}),label:"Sign in with Google",backgroundColor:"#4285F4",textColor:"#fff"}},s={args:{icon:e.jsx(f,{}),label:"Continue with Facebook",backgroundColor:"#3b5998",textColor:"#fff"}},l={args:{icon:e.jsx(b,{}),label:"Sign in with GitHub",backgroundColor:"#24292e",textColor:"#fff"}},t={args:{icon:e.jsx(u,{}),variant:"iconOnly",label:"Google",backgroundColor:"#4285F4",textColor:"#fff"}},i={render:o=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(a,{...o,size:"sm",icon:e.jsx(u,{}),label:"Google"}),e.jsx(a,{...o,size:"md",icon:e.jsx(f,{}),label:"Facebook"}),e.jsx(a,{...o,size:"lg",icon:e.jsx(b,{}),label:"GitHub"})]}),args:{variant:"full"}},c={args:{icon:e.jsx(u,{}),variant:"iconOnly",size:60}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaGoogle />,
    label: "Sign in with Google",
    backgroundColor: "#4285F4",
    textColor: "#fff"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaFacebookF />,
    label: "Continue with Facebook",
    backgroundColor: "#3b5998",
    textColor: "#fff"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaGithub />,
    label: "Sign in with GitHub",
    backgroundColor: "#24292e",
    textColor: "#fff"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaGoogle />,
    variant: "iconOnly",
    label: "Google",
    backgroundColor: "#4285F4",
    textColor: "#fff"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px",
    alignItems: "center"
  }}>\r
      <SocialButton {...args} size="sm" icon={<FaGoogle />} label="Google" />\r
      <SocialButton {...args} size="md" icon={<FaFacebookF />} label="Facebook" />\r
      <SocialButton {...args} size="lg" icon={<FaGithub />} label="GitHub" />\r
    </div>,
  args: {
    variant: "full"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaGoogle />,
    variant: "iconOnly",
    size: 60
  }
}`,...c.parameters?.docs?.source}}};const z=["Google","Facebook","GitHub","IconOnly","CustomSizes","CustomNumericSize"];export{c as CustomNumericSize,i as CustomSizes,s as Facebook,l as GitHub,r as Google,t as IconOnly,z as __namedExportsOrder,j as default};
