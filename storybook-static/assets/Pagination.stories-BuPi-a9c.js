import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-CTVOWTB1.js";const h=({page:n,setPage:p,rowsPerPage:P,length:b,variant:o="outlined"})=>{const t=Math.ceil(b/P),i=e=>{e>=1&&e<=t&&p(e)},f=()=>{const e=[];if(t<=7)for(let a=1;a<=t;a++)e.push(a);else{e.push(1),n>3&&e.push("...");for(let a=Math.max(2,n-1);a<=Math.min(t-1,n+1);a++)e.push(a);n<t-2&&e.push("..."),e.push(t)}return e};return r.jsxs("div",{className:"pagination-container",children:[r.jsx("button",{className:`pagination-button ${o}`,onClick:()=>i(1),disabled:n===1,children:"≪"}),r.jsx("button",{className:`pagination-button ${o}`,onClick:()=>i(n-1),disabled:n===1,children:"Prev"}),f().map((e,a)=>r.jsx("button",{className:`pagination-button ${o} ${e===n?"active":""}`,onClick:()=>typeof e=="number"&&i(e),disabled:e==="...",children:e},a)),r.jsx("button",{className:`pagination-button ${o}`,onClick:()=>i(n+1),disabled:n===t,children:"Next"}),r.jsx("button",{className:`pagination-button ${o}`,onClick:()=>i(t),disabled:n===t,children:"≫"})]})};h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""},length:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'}]},description:"",defaultValue:{value:'"outlined"',computed:!1}}}};const y={title:"Components/Pagination",component:h,tags:["autodocs"],argTypes:{page:{control:!1},setPage:{action:"page changed",control:!1},rowsPerPage:{control:"number",description:"The number of items to display per page."},length:{control:"number",description:"The total number of items to paginate."},variant:{control:"radio",options:["contained","outlined"],description:"The visual style of the pagination buttons."}}},s=n=>{const[p,P]=S.useState(1);return r.jsx(h,{...n,page:p,setPage:P})},c={render:s,args:{length:100,rowsPerPage:10,variant:"outlined"}},d={render:s,args:{length:100,rowsPerPage:10,variant:"contained"}},l={render:s,args:{length:500,rowsPerPage:10}},u={render:s,args:{length:30,rowsPerPage:10}},g={render:s,args:{length:200,rowsPerPage:25}},m={render:s,args:{length:0,rowsPerPage:10}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 100,
    rowsPerPage: 10,
    variant: "outlined"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 100,
    rowsPerPage: 10,
    variant: "contained"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 500,
    rowsPerPage: 10
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 30,
    rowsPerPage: 10
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 200,
    rowsPerPage: 25
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: PaginationWithState,
  args: {
    length: 0,
    rowsPerPage: 10
  }
}`,...m.parameters?.docs?.source}}};const C=["Default","Contained","ManyPages","SmallPageCount","CustomPageSize","NoItems"];export{d as Contained,g as CustomPageSize,c as Default,l as ManyPages,m as NoItems,u as SmallPageCount,C as __namedExportsOrder,y as default};
