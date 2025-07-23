import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-Pk8y3Nn_.js";const u=({src:p,alt:d="",children:g,size:a="md",variant:v="circular",className:f="",style:h})=>{const[y,S]=C.useState(!1),x=!p||y,b=()=>typeof a=="number"?"":`avatar-${a}`,z=typeof a=="number"?{width:a,height:a,fontSize:a/2.5}:{};return m.jsx("div",{className:`mui-avatar avatar-${v} ${b()} ${f}`,style:{...z,...h},role:"img","aria-label":d,children:x?m.jsx("span",{className:"avatar-fallback",children:g||d.charAt(0).toUpperCase()}):m.jsx("img",{className:"avatar-img",src:p,alt:d,onError:()=>S(!0)})})};u.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'number | "sm" | "md" | "lg"',elements:[{name:"number"},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"circular" | "rounded" | "square"',elements:[{name:"literal",value:'"circular"'},{name:"literal",value:'"rounded"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circular"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const N={title:"Components/Avatar/Avatar",component:u,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg",24,40,64,100],description:"The size of the avatar."},variant:{control:{type:"radio"},options:["circular","rounded","square"],description:"The shape of the avatar."},src:{control:"text",description:"URL of the image to display."},alt:{control:"text",description:"Alt text for the image, also used for fallback initials."},children:{control:"text",description:"Content to display as a fallback if src is not provided or fails."},className:{control:"text",description:"Additional CSS classes to apply."},style:{control:"object",description:"Inline styles to apply."}}},e={args:{alt:"A",size:"md",variant:"circular"}},r={args:{alt:"D",size:"lg",variant:"square"}},s={args:{src:"https://i.pravatar.cc/100",alt:"Zoe",size:"lg"}},t={args:{src:"https://i.pravatar.cc/150",alt:"John",size:80,variant:"square"}},o={args:{children:"DK",size:"lg",variant:"rounded"}},n={args:{alt:"M",size:"sm",className:"my-avatar",variant:"circular"}},i={args:{alt:"Guest User",src:"invalid-image-url",size:"md"},name:"Image Load Error/No Image"},c={args:{alt:"User",children:m.jsx("span",{role:"img","aria-label":"user-icon",style:{fontSize:"2em"},children:"👤"}),size:"lg",variant:"circular"}},l={args:{alt:"Styled",src:"https://i.pravatar.cc/120",size:"md",variant:"circular",style:{border:"2px solid #3f51b5",padding:"2px",boxShadow:"0px 0px 8px rgba(0,0,0,0.2)"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "A",
    size: "md",
    variant: "circular"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "D",
    size: "lg",
    variant: "square"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/100",
    alt: "Zoe",
    size: "lg"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/150",
    alt: "John",
    size: 80,
    variant: "square"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "DK",
    size: "lg",
    variant: "rounded"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "M",
    size: "sm",
    className: "my-avatar",
    // Define this in CSS
    variant: "circular"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "Guest User",
    src: "invalid-image-url",
    // This will cause an error and show fallback
    size: "md"
  },
  name: "Image Load Error/No Image" // Custom name for the story in Storybook UI
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "User",
    children: <span role="img" aria-label="user-icon" style={{
      fontSize: '2em'
    }}>👤</span>,
    size: "lg",
    variant: "circular"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "Styled",
    src: "https://i.pravatar.cc/120",
    size: "md",
    variant: "circular",
    style: {
      border: "2px solid #3f51b5",
      padding: "2px",
      boxShadow: "0px 0px 8px rgba(0,0,0,0.2)"
    }
  }
}`,...l.parameters?.docs?.source}}};const T=["Default","Default2","WithImage","CustomSize","WithFallbackText","CustomClass","NoImageProvided","WithIconFallback","AvatarWithCustomStyle"];export{l as AvatarWithCustomStyle,n as CustomClass,t as CustomSize,e as Default,r as Default2,i as NoImageProvided,o as WithFallbackText,c as WithIconFallback,s as WithImage,T as __namedExportsOrder,N as default};
