import{j as n}from"./jsx-runtime-D_zvdyIk.js";const p=({children:u,icon:l,onClick:c,className:h="",type:d="div",disabled:m=!1,ariaLabel:C})=>{const f=d==="button"?"button":d==="span"?"span":"div";return n.jsxs(f,{className:h,onClick:m?void 0:c,"aria-label":C,role:c?"button":void 0,tabIndex:c?0:void 0,children:[l&&n.jsx("span",{children:l}),n.jsx("span",{children:u})]})};p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},type:{defaultValue:{value:'"div"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Components/Chip",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"The content of the chip."},variant:{control:"select",options:["filled","outlined"],description:"Visual variant of the chip (filled or outlined)."},icon:{control:"text",description:"An optional leading icon for the chip."},onClick:{action:"clicked",description:"Callback fired when the chip is clicked."},className:{control:"text",description:"Additional CSS classes for custom styling."},type:{control:"select",options:["button","span","div"],description:"The HTML tag to render the chip as."},disabled:{control:"boolean",description:"If true, the chip is disabled."},ariaLabel:{control:"text",description:"Accessibility label for the chip."}}},e={args:{children:"Default Chip"}},s={args:{children:"Chip with Icon",icon:"✨"}},a={args:{children:"Clickable Chip",onClick:()=>alert("Chip clicked!"),type:"button"}},r={args:{children:"Disabled Chip",onClick:()=>alert("This should not fire!"),disabled:!0,type:"button"}},t={args:{children:"Custom Styled Chip",className:"my-custom-chip"}},i={args:{children:"Queued",className:"queue-chip"}},o={args:{children:"Finished",className:"finished-chip"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Chip'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Chip with Icon',
    icon: '✨' // Example icon
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Clickable Chip',
    onClick: () => alert('Chip clicked!'),
    type: 'button' // Best practice for clickable elements
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Chip',
    onClick: () => alert('This should not fire!'),
    disabled: true,
    type: 'button'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Custom Styled Chip',
    className: 'my-custom-chip'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Queued',
    className: 'queue-chip'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Finished',
    className: 'finished-chip'
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","WithIcon","Clickable","Disabled","CustomStyled","QueueChip","Finished"];export{a as Clickable,t as CustomStyled,e as Default,r as Disabled,o as Finished,i as QueueChip,s as WithIcon,y as __namedExportsOrder,g as default};
