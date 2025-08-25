import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CTVOWTB1.js";const g=({checked:r,onChange:u,disabled:s=!1,size:a="md",trackColor:m="#009688"})=>e.jsxs("label",{className:`toggle-switch ${a} ${s?"disabled":""}`,style:{"--toggle-color":m},children:[e.jsx("input",{type:"checkbox",checked:r,onChange:u,disabled:s}),e.jsx("span",{className:"switch-slider"})]});g.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},trackColor:{required:!1,tsType:{name:'CSSProperties["color"]',raw:'CSSProperties["color"]'},description:"",defaultValue:{value:'"#009688"',computed:!1}}}};const f={title:"Components/ToggleButton",component:g,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Determines if the toggle switch is on or off."},onChange:{action:"toggled",description:"Callback function triggered when the toggle state changes."},disabled:{control:"boolean",description:"If true, the toggle switch is disabled and non-interactive."},size:{control:"radio",options:["sm","md","lg"],description:"The size of the toggle switch."},trackColor:{control:"color",description:"The color of the switch track when it's checked."}}},t=r=>{const[u,s]=p.useState(r.checked);return e.jsx(g,{...r,checked:u,onChange:a=>{s(a.target.checked),r.onChange(a)}})},o={render:t,args:{checked:!1}},n={render:t,args:{checked:!0}},c={render:t,args:{checked:!1,disabled:!0}},d={render:t,args:{checked:!0,disabled:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(t,{size:"sm",checked:!0}),e.jsx(t,{size:"md",checked:!0}),e.jsx(t,{size:"lg",checked:!0})]})},l={render:t,args:{checked:!0,trackColor:"#3498db"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ToggleButtonWithState,
  args: {
    checked: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ToggleButtonWithState,
  args: {
    checked: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ToggleButtonWithState,
  args: {
    checked: false,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ToggleButtonWithState,
  args: {
    checked: true,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  }}>\r
      <ToggleButtonWithState size="sm" checked={true} />\r
      <ToggleButtonWithState size="md" checked={true} />\r
      <ToggleButtonWithState size="lg" checked={true} />\r
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ToggleButtonWithState,
  args: {
    checked: true,
    trackColor: "#3498db"
  }
}`,...l.parameters?.docs?.source}}};const C=["Basic","Checked","Disabled","DisabledAndChecked","Sizes","CustomColor"];export{o as Basic,n as Checked,l as CustomColor,c as Disabled,d as DisabledAndChecked,i as Sizes,C as __namedExportsOrder,f as default};
