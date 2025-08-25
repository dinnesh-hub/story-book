import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";import{S as r}from"./Stack-kY8bUwno.js";const m={title:"Layout/Stack",component:r,tags:["autodocs"],argTypes:{direction:{control:"radio",options:["row","column"]},spacing:{control:"number"},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},alignItems:{control:"select",options:["stretch","flex-start","flex-end","center","baseline"]},className:{control:"text"},style:{control:"object"},children:{control:!1}}},t={padding:"20px",border:"1px solid #ccc",backgroundColor:"#f0f0f0",textAlign:"center",color:"#555"},o={border:"2px solid #3498db",padding:"10px",backgroundColor:"#ecf0f1"},n={render:()=>e.jsxs(r,{style:o,children:[e.jsx("div",{style:t,children:"Item 1"}),e.jsx("div",{style:t,children:"Item 2"}),e.jsx("div",{style:t,children:"Item 3"})]})},s={render:()=>e.jsxs(r,{direction:"row",style:o,children:[e.jsx("div",{style:t,children:"Item 1"}),e.jsx("div",{style:t,children:"Item 2"}),e.jsx("div",{style:t,children:"Item 3"})]})},i={render:()=>e.jsxs(r,{direction:"row",spacing:40,style:o,children:[e.jsx("div",{style:t,children:"Item 1"}),e.jsx("div",{style:t,children:"Item 2"}),e.jsx("div",{style:t,children:"Item 3"})]})},c={render:()=>e.jsxs(r,{direction:"row",spacing:16,alignItems:"center",justifyContent:"space-between",style:{...o,height:"150px"},children:[e.jsx("div",{style:{...t,height:"80px"},children:"Item 1"}),e.jsx("div",{style:{...t,height:"40px"},children:"Item 2"}),e.jsx("div",{style:{...t,height:"60px"},children:"Item 3"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack style={containerStyle}>\r
      <div style={itemStyle}>Item 1</div>\r
      <div style={itemStyle}>Item 2</div>\r
      <div style={itemStyle}>Item 3</div>\r
    </Stack>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" style={containerStyle}>\r
      <div style={itemStyle}>Item 1</div>\r
      <div style={itemStyle}>Item 2</div>\r
      <div style={itemStyle}>Item 3</div>\r
    </Stack>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={40} style={containerStyle}>\r
      <div style={itemStyle}>Item 1</div>\r
      <div style={itemStyle}>Item 2</div>\r
      <div style={itemStyle}>Item 3</div>\r
    </Stack>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={16} alignItems="center" justifyContent="space-between" style={{
    ...containerStyle,
    height: "150px"
  }}>\r
      <div style={{
      ...itemStyle,
      height: "80px"
    }}>Item 1</div>\r
      <div style={{
      ...itemStyle,
      height: "40px"
    }}>Item 2</div>\r
      <div style={{
      ...itemStyle,
      height: "60px"
    }}>Item 3</div>\r
    </Stack>
}`,...c.parameters?.docs?.source}}};const y=["StackColumn","StackRow","StackWithCustomSpacing","StackWithAlignment"];export{n as StackColumn,s as StackRow,c as StackWithAlignment,i as StackWithCustomSpacing,y as __namedExportsOrder,m as default};
