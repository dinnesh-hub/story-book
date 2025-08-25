import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as y}from"./Input-Dbchwhlh.js";import{k as g,c as f,l as S}from"./index-Cfaf9MYL.js";import"./iframe-CTVOWTB1.js";const D={title:"Components/Input",component:y,tags:["autodocs"],argTypes:{fieldSize:{control:{type:"select"},options:["sm","md","lg"],description:"Controls the size of the input field."},startAdornment:{control:{type:"boolean"},mapping:{true:r.jsx(f,{}),false:void 0},description:"Icon displayed on the left side of the input."},endAdornment:{control:{type:"boolean"},mapping:{true:r.jsx(g,{}),false:void 0},description:"Icon displayed on the right side of the input."},error:{control:"boolean",description:"If true, the input will be in an error state."},helperText:{control:"text",description:"Helper text to display below the input."},placeholder:{control:"text",description:"Placeholder text for the input."},disabled:{control:"boolean",description:"If true, the input will be disabled."},type:{control:"text",description:"The type of the input (e.g., text, password, email)."},style:{control:"object",description:"Inline CSS styles to apply to the input element."}},args:{placeholder:"Enter text here"}},e={args:{fieldSize:"md",placeholder:"Default input"}},o={args:{...e.args,fieldSize:"sm",placeholder:"Small input"}},a={args:{...e.args,fieldSize:"lg",placeholder:"Large input"}},t={args:{startAdornment:r.jsx(f,{}),placeholder:"Input with left icon"}},s={args:{endAdornment:r.jsx(g,{}),placeholder:"Input with right icon"}},n={args:{startAdornment:r.jsx(f,{}),endAdornment:r.jsx(g,{}),placeholder:"Input with both icons"}},i={args:{...e.args,error:!0,helperText:"This field is required.",placeholder:"Input in error state"}},c={args:{...t.args,error:!0,helperText:"Invalid username.",startAdornment:r.jsx(S,{}),placeholder:"Error with icon"}},l={args:{...e.args,disabled:!0,placeholder:"Disabled input"}},p={args:{...t.args,disabled:!0,placeholder:"Disabled input with icon"}},d={args:{...e.args,helperText:"Some helpful text below the input.",placeholder:"Input with helper text"}},m={args:{...s.args,type:"password",endAdornment:r.jsx(g,{}),placeholder:"Enter your password"}},u={args:{...e.args,className:"my-custom-input-class",placeholder:"Input with custom class"},parameters:{docs:{description:{story:"This story demonstrates applying a custom CSS class to the input element."}}}},h={args:{...e.args,style:{border:"1.5px solid green"},endAdornment:!0},parameters:{docs:{description:{story:"This story demonstrates applying inline style to the input element."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fieldSize: 'md',
    placeholder: 'Default input'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldSize: 'sm',
    placeholder: 'Small input'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldSize: 'lg',
    placeholder: 'Large input'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    startAdornment: <FaUser />,
    // Directly pass the icon component
    placeholder: 'Input with left icon'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    endAdornment: <FaLock />,
    // Directly pass the icon component
    placeholder: 'Input with right icon'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    startAdornment: <FaUser />,
    endAdornment: <FaLock />,
    placeholder: 'Input with both icons'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    helperText: 'This field is required.',
    placeholder: 'Input in error state'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLeftIcon.args,
    error: true,
    helperText: 'Invalid username.',
    startAdornment: <FaExclamationCircle />,
    // Use an error-specific icon if desired
    placeholder: 'Error with icon'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLeftIcon.args,
    disabled: true,
    placeholder: 'Disabled input with icon'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: 'Some helpful text below the input.',
    placeholder: 'Input with helper text'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithRightIcon.args,
    type: 'password',
    endAdornment: <FaLock />,
    placeholder: 'Enter your password'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'my-custom-input-class',
    // You'd define this class in your CSS
    placeholder: 'Input with custom class'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates applying a custom CSS class to the input element.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    style: {
      "border": "1.5px solid green"
    },
    endAdornment: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates applying inline style to the input element.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const T=["Default","Small","Large","WithLeftIcon","WithRightIcon","WithBothIcons","ErrorState","ErrorWithIcon","Disabled","DisabledWithIcon","WithHelperText","PasswordInput","CustomClassName","CustomStyle"];export{u as CustomClassName,h as CustomStyle,e as Default,l as Disabled,p as DisabledWithIcon,i as ErrorState,c as ErrorWithIcon,a as Large,m as PasswordInput,o as Small,n as WithBothIcons,d as WithHelperText,t as WithLeftIcon,s as WithRightIcon,T as __namedExportsOrder,D as default};
