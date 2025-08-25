import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";import{e as v,a as T,f as O}from"./index-Cfaf9MYL.js";const R=({label:D,variant:F="filled",size:y="md",color:x="#0E8345",backgroundColor:k="#E7F3EC",borderRadius:I="md",icon:S,className:E=""})=>r.jsxs("div",{className:`chip ${F} ${y} ${I} ${E}`,style:{color:x,backgroundColor:F==="filled"?k:"transparent",borderColor:F==="outlined"?x:"transparent"},children:[S&&r.jsx("span",{className:"chip-icon",children:S}),r.jsx("span",{children:D})]});R.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "text"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#0E8345"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#E7F3EC"',computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const W={title:"Components/Chip",component:R,tags:["autodocs"],argTypes:{label:{control:"text",description:"The text content of the chip."},variant:{control:{type:"select"},options:["filled","outlined","text"],description:"The visual style of the chip."},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the chip."},color:{control:"color",description:"The text and border color of the chip. Applied directly to `color` and `borderColor` for `outlined` variant."},backgroundColor:{control:"color",description:"The background color of the chip. Only applied for `filled` variant."},borderRadius:{control:{type:"select"},options:["sm","md","full"],description:"The border radius of the chip."},icon:{control:{type:"boolean"},mapping:{true:r.jsx(v,{}),false:void 0},description:"An optional icon to display within the chip."},className:{control:"text",description:"Additional CSS classes to apply to the chip."}},args:{label:"Default Chip",variant:"filled",size:"md",color:"#047857",backgroundColor:"#ecfdf5",borderRadius:"md"}},e={args:{label:"Default Chip"}},n={args:{...e.args,variant:"filled",label:"Filled Chip"}},a={args:{...e.args,variant:"outlined",label:"Outlined Chip"}},o={args:{...e.args,variant:"text",label:"Text Chip",backgroundColor:"transparent"}},s={args:{...e.args,size:"sm",label:"Small Chip"}},t={args:{...e.args,size:"md",label:"Medium Chip"}},l={args:{...e.args,size:"lg",label:"Large Chip"}},i={args:{...e.args,label:"Custom Colors",color:"#9F1239",backgroundColor:"#FFF1F2"}},c={args:{...a.args,label:"Custom Colors",color:"#1D4ED8"}},d={args:{...o.args,label:"Custom Colors",color:"#059669"}},u={args:{...e.args,borderRadius:"sm",label:"Small Radius"}},m={args:{...e.args,borderRadius:"md",label:"Medium Radius"}},p={args:{...e.args,borderRadius:"full",label:"Full Radius"}},g={args:{...e.args,label:"Product Tag",icon:r.jsx(v,{})}},f={args:{...e.args,label:"Completed",icon:r.jsx(T,{}),color:"#059669",backgroundColor:"#D1FAE5"}},C={args:{...a.args,label:"Information",icon:r.jsx(O,{}),color:"#F59E0B"}},b={args:{...l.args,variant:"outlined",icon:r.jsx(v,{}),label:"Large Outlined",color:"#BE123C"}},h={args:{...s.args,variant:"text",borderRadius:"full",icon:r.jsx(T,{}),label:"Approved",color:"#059669"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'filled',
    label: 'Filled Chip'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    label: 'Outlined Chip'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'text',
    label: 'Text Chip',
    // Background color won't apply to text variant, but good to keep consistent args
    backgroundColor: 'transparent'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm',
    label: 'Small Chip'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'md',
    label: 'Medium Chip'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg',
    label: 'Large Chip'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Custom Colors',
    color: '#9F1239',
    // rose-800
    backgroundColor: '#FFF1F2' // rose-50
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Outlined.args,
    label: 'Custom Colors',
    color: '#1D4ED8' // blue-700
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Text.args,
    label: 'Custom Colors',
    color: '#059669' // green-600
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    borderRadius: 'sm',
    label: 'Small Radius'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    borderRadius: 'md',
    label: 'Medium Radius'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    borderRadius: 'full',
    label: 'Full Radius'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Product Tag',
    icon: <FaTag />
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Completed',
    icon: <FaCheckCircle />,
    color: '#059669',
    // green-600
    backgroundColor: '#D1FAE5' // green-100
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Outlined.args,
    label: 'Information',
    icon: <FaInfoCircle />,
    color: '#F59E0B' // amber-500
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Large.args,
    variant: 'outlined',
    icon: <FaTag />,
    label: 'Large Outlined',
    color: '#BE123C' // rose-700
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Small.args,
    variant: 'text',
    borderRadius: 'full',
    icon: <FaCheckCircle />,
    label: 'Approved',
    color: '#059669'
  }
}`,...h.parameters?.docs?.source}}};const L=["Default","Filled","Outlined","Text","Small","Medium","Large","CustomColorsFilled","CustomColorsOutlined","CustomColorsText","BorderRadiusSmall","BorderRadiusMedium","BorderRadiusFull","WithTagIcon","WithCheckIcon","WithInfoIcon","LargeOutlinedWithIcon","SmallTextWithIconRoundedFull"];export{p as BorderRadiusFull,m as BorderRadiusMedium,u as BorderRadiusSmall,i as CustomColorsFilled,c as CustomColorsOutlined,d as CustomColorsText,e as Default,n as Filled,l as Large,b as LargeOutlinedWithIcon,t as Medium,a as Outlined,s as Small,h as SmallTextWithIconRoundedFull,o as Text,f as WithCheckIcon,C as WithInfoIcon,g as WithTagIcon,L as __namedExportsOrder,W as default};
