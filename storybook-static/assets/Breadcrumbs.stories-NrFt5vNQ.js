import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D4xFOn2n.js";const o=({items:m,separator:d="/",className:u="",listClassName:b="",itemClassName:p="",ariaLabel:f="breadcrumbs",variant:g="md"})=>a.jsx("nav",{className:u,"aria-label":f,"data-variant":g,children:a.jsx("ol",{className:b,role:"list",children:m.map((e,i)=>{const c=i===m.length-1,N=e.href?"a":"span";return a.jsxs("li",{className:p,children:[a.jsxs(N,{href:e.href,onClick:e.onClick,className:e.className,"aria-current":c?"page":void 0,children:[e.icon,e.label]}),!c&&a.jsx("span",{children:d})]},i)})})});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},listClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},itemClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"breadcrumbs"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const C={title:"Navigation/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object",description:"An array of breadcrumb items. Each item can have `label`, optional `href`, `onClick`, `icon`, and `className` for individual styling.",table:{type:{summary:"BreadcrumbItem[]"},defaultValue:{summary:"[]"}}},separator:{control:"text",description:'The content displayed between breadcrumb items. Can be a string (e.g., "/", ">") or a ReactNode (e.g., an icon).',table:{type:{summary:"React.ReactNode"},defaultValue:{summary:"/"}}},className:{control:"text",description:"CSS class applied to the main `<nav>` wrapper element.",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},listClassName:{control:"text",description:"CSS class applied to the `<ol>` (ordered list) element that contains the breadcrumb items.",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},itemClassName:{control:"text",description:"CSS class applied to each `<li>` (list item) element, affecting the container of each breadcrumb link/span.",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},ariaLabel:{control:"text",description:"A string to set the `aria-label` attribute on the `<nav>` element for accessibility purposes.",table:{type:{summary:"string"},defaultValue:{summary:"breadcrumbs"}}},variant:{control:"select",options:["sm","md","lg"],description:"Predefined size variants for the breadcrumbs component, affecting font size and potentially spacing.",table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}}}},r={args:{items:[{label:"Home",href:"#"},{label:"Category",href:"#"},{label:"Current Page"}],separator:"/",className:"breadcrumbs-container",listClassName:"breadcrumbs-list",itemClassName:"breadcrumbs-item"}},s={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"My Item"}],separator:">",className:"breadcrumbs-container",listClassName:"breadcrumbs-list",itemClassName:"breadcrumbs-item"}},t={args:{items:[{label:"Start",href:"#"},{label:"Middle",href:"#"},{label:"End"}],separator:"–",className:"breadcrumbs-container",listClassName:"breadcrumbs-list",itemClassName:"breadcrumbs-item"}},l={args:{items:[{label:"Home",href:"#"},{label:"Small Page"}],variant:"sm",separator:"/",className:"breadcrumbs-container",listClassName:"breadcrumbs-list",itemClassName:"breadcrumbs-item"}},n={args:{items:[{label:"Home",href:"#"},{label:"Large Section"}],variant:"lg",separator:"/",className:"breadcrumbs-container",listClassName:"breadcrumbs-list",itemClassName:"breadcrumbs-item"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Current Page'
    }],
    separator: '/',
    className: 'breadcrumbs-container',
    listClassName: 'breadcrumbs-list',
    itemClassName: 'breadcrumbs-item'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'My Item'
    }],
    separator: '>',
    className: 'breadcrumbs-container',
    listClassName: 'breadcrumbs-list',
    itemClassName: 'breadcrumbs-item'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Start',
      href: '#'
    }, {
      label: 'Middle',
      href: '#'
    }, {
      label: 'End'
    }],
    separator: '–',
    // En dash for separator
    className: 'breadcrumbs-container',
    listClassName: 'breadcrumbs-list',
    itemClassName: 'breadcrumbs-item'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Small Page'
    }],
    variant: 'sm',
    separator: '/',
    className: 'breadcrumbs-container',
    listClassName: 'breadcrumbs-list',
    itemClassName: 'breadcrumbs-item'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Large Section'
    }],
    variant: 'lg',
    separator: '/',
    className: 'breadcrumbs-container',
    listClassName: 'breadcrumbs-list',
    itemClassName: 'breadcrumbs-item'
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","WithIcons","CustomSeparator","SmallVariant","LargeVariant"];export{t as CustomSeparator,r as Default,n as LargeVariant,l as SmallVariant,s as WithIcons,v as __namedExportsOrder,C as default};
