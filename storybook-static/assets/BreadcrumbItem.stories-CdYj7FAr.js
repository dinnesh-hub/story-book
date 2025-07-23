import{B as c}from"./BreadcrumbItem-DUb3ytnO.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Pk8y3Nn_.js";const m={title:"Components/Breadcrumbs/BreadcrumbItem",component:c,tags:["autodocs"],argTypes:{href:{control:"text",description:"The URL to navigate to when the item is a link."},children:{control:"text",description:"The content of the breadcrumb item."},icon:{control:"object",description:"An optional icon to display before the text."},onClick:{action:"clicked",description:"Callback function when the item is clicked."},className:{control:"text",description:"Additional CSS classes for the item."},style:{control:"object",description:"Inline styles for the item."}}},e={args:{children:"Home"}},r={args:{children:"Products",href:"/products"}},t={args:{children:"Home",href:"/"}},o={args:{children:"About Us",href:"/about",className:"custom-breadcrumb-item"}},s={args:{children:"Contact",href:"/contact",style:{color:"blue",fontWeight:"bold"}}},a={args:{children:"Current Page",onClick:()=>alert("Current page clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Home'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Products',
    href: '/products'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Home',
    href: '/'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'About Us',
    href: '/about',
    className: 'custom-breadcrumb-item'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Contact',
    href: '/contact',
    style: {
      color: 'blue',
      fontWeight: 'bold'
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Current Page',
    onClick: () => alert('Current page clicked!')
  }
}`,...a.parameters?.docs?.source}}};const d=["Default","AsLink","WithIcon","CustomClassName","CustomStyle","ClickableSpan"];export{r as AsLink,a as ClickableSpan,o as CustomClassName,s as CustomStyle,e as Default,t as WithIcon,d as __namedExportsOrder,m as default};
