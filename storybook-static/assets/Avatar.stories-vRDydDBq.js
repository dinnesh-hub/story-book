import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as N,a as T,b as h,c as x,d as R}from"./index-Cfaf9MYL.js";import"./iframe-CTVOWTB1.js";const k=({src:b,alt:y="",size:n="md",variant:F="circle",fallback:j="",icon:S,badge:z,className:w=""})=>{const I=typeof n=="number",W=`ui-avatar ${I?"":`ui-avatar--${n}`} ui-avatar--${F} ${w}`.trim(),q=I?{width:`${n}px`,height:`${n}px`,fontSize:`${n/2.5}px`}:void 0;return a.jsx("div",{className:"ui-avatar-wrapper",style:q,children:a.jsxs("div",{className:W,children:[b?a.jsx("img",{src:b,alt:y,className:"ui-avatar-image"}):S?a.jsx("span",{className:"ui-avatar-icon",children:S}):a.jsx("span",{className:"ui-avatar-fallback",children:j}),z&&a.jsx("span",{className:"ui-avatar-badge",children:z})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | number',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"number"}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"circle" | "rounded" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"rounded"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},fallback:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const U={title:"Components/Avatar",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text",description:"URL of the image for the avatar. If not provided, fallback or icon is shown."},alt:{control:"text",description:"Alternative text for the image, important for accessibility."},size:{control:{type:"radio"},options:["xs","sm","md","lg","xl",100],description:"Predefined sizes (xs, sm, md, lg, xl) or a numeric value in pixels."},variant:{control:{type:"radio"},options:["circle","rounded","square"],description:"The shape of the avatar."},fallback:{control:"text",description:"Text or initials to display when `src` and `icon` are not provided."},icon:{control:"select",options:["none","user","building"],mapping:{none:void 0,user:a.jsx(x,{}),building:a.jsx(h,{})},description:"An optional icon to display when `src` is not provided and `fallback` is empty."},badge:{control:"select",options:["none","online","star"],mapping:{none:void 0,online:a.jsx(T,{style:{color:"green"}}),star:a.jsx(N,{style:{color:"gold"}})},description:"An optional indicator icon (e.g., status or edit) displayed as a badge."},className:{control:"text",description:"Additional CSS class names for custom styling."}},args:{alt:"User Avatar"}},e={args:{src:"https://i.pravatar.cc/150?img=5",alt:"User Profile Picture"}},t={args:{icon:a.jsx(x,{}),badge:a.jsx(R,{})}},r={args:{fallback:"JS"}},s={args:{icon:a.jsx(x,{})}},i={args:{src:"https://i.pravatar.cc/150?img=5",icon:a.jsx(h,{}),fallback:"XYZ"}},o={args:{icon:a.jsx(h,{}),fallback:"XYZ"}},c={args:{...r.args,size:"xs"}},l={args:{...r.args,size:"sm"}},d={args:{...r.args,size:"lg"}},m={args:{...s.args,size:"xs"}},p={args:{...s.args,size:"sm"}},u={args:{...s.args,size:"lg"}},g={args:{...e.args,variant:"circle"}},f={args:{...e.args,variant:"rounded"}},v={args:{...e.args,variant:"square"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    // Example image URL
    alt: 'User Profile Picture'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FaUser />,
    badge: <FaCircle />
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    // src and icon are intentionally left undefined
    fallback: 'JS'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    // src and fallback are intentionally left undefined
    icon: <FaUser />
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    // If src exists, it takes precedence
    icon: <FaBuilding />,
    // This will not be shown
    fallback: 'XYZ' // This will not be shown
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    // src is undefined
    icon: <FaBuilding />,
    // Icon will be shown if src is missing
    fallback: 'XYZ' // This will not be shown
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithFallback.args,
    size: 'xs'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithFallback.args,
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithFallback.args,
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    size: 'xs'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    size: 'lg'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithImage.args,
    variant: 'circle'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithImage.args,
    variant: 'rounded'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithImage.args,
    variant: 'square'
  }
}`,...v.parameters?.docs?.source}}};const X=["WithImage","WithBadge","WithFallback","WithIcon","PrioritizationExample","PrioritizationIconFallback","SizeXsFallback","SizeSmFallback","SizeLgFallback","SizeXsIcon","SizeSmIcon","SizeLgIcon","VariantCircleImage","VariantRoundedImage","VariantSquareImage"];export{i as PrioritizationExample,o as PrioritizationIconFallback,d as SizeLgFallback,u as SizeLgIcon,l as SizeSmFallback,p as SizeSmIcon,c as SizeXsFallback,m as SizeXsIcon,g as VariantCircleImage,f as VariantRoundedImage,v as VariantSquareImage,t as WithBadge,r as WithFallback,s as WithIcon,e as WithImage,X as __namedExportsOrder,U as default};
