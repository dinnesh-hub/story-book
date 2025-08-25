import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";import{I as i}from"./Input-Dbchwhlh.js";const o=({children:a,className:l="",...n})=>e.jsx("label",{className:`ui-label ${l}`,...n,children:a});o.__docgenInfo={description:"",methods:[],displayName:"Label",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const u={title:"Components/Label",component:o,tags:["autodocs"],argTypes:{children:{control:"text",description:"The content to be rendered inside the label."},htmlFor:{control:"text",description:"The ID of the form element the label is associated with."},className:{control:"text",description:"Additional CSS classes to apply to the label."}},args:{children:"Default Label"}},s={args:{children:"Email Address"}},r={render:a=>e.jsxs("div",{children:[e.jsx(o,{...a,htmlFor:"emailInput",children:"Your Email"}),e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"emailInput",placeholder:"Enter your email"})})]}),args:{children:"Username",htmlFor:"usernameInput"}},t={args:{children:"Custom Styled Label",className:"my-custom-label-style"},parameters:{docs:{description:{story:"This story demonstrates how to apply a custom CSS class to the label for unique styling. Make sure to define `.my-custom-label-style` in your CSS."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Email Address'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
      <Label {...args} htmlFor="emailInput">\r
        Your Email\r
      </Label>\r
      <div style={{
      width: 300
    }}>\r
      <Input id='emailInput' placeholder='Enter your email' />\r
        </div>\r
    </div>,
  args: {
    children: 'Username',
    htmlFor: 'usernameInput'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Custom Styled Label',
    className: 'my-custom-label-style'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to apply a custom CSS class to the label for unique styling. Make sure to define \`.my-custom-label-style\` in your CSS.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const p=["Default","WithInput","CustomClassName"];export{t as CustomClassName,s as Default,r as WithInput,p as __namedExportsOrder,u as default};
