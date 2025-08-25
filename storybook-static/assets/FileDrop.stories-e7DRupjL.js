import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-CTVOWTB1.js";import{i as D,j}from"./index-Cfaf9MYL.js";const u=({accept:r="*/*",acceptLabel:n="All file types",icon:m="☁️⬆",onFilesSelected:o})=>{const[s,a]=g.useState(!1),h=t=>{t.preventDefault(),a(!0)},F=()=>{a(!1)},x=t=>{t.preventDefault(),a(!1);const f=Array.from(t.dataTransfer.files);o?.(f)},y=t=>{const f=Array.from(t.target.files||[]);o?.(f)};return e.jsxs("div",{className:`file-drop ${s?"dragging":""}`,onDragOver:h,onDragLeave:F,onDrop:x,children:[e.jsx("input",{type:"file",id:"file-input",multiple:!0,accept:r,onChange:y,style:{display:"none"}}),e.jsxs("label",{htmlFor:"file-input",className:"file-label",children:[e.jsx("div",{className:"upload-icon",children:m}),e.jsxs("p",{children:["Drag & drop files or ",e.jsx("span",{className:"browse",children:"Browse"})]}),e.jsxs("small",{children:["Supported formats: ",n]})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"FileDrop",props:{accept:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"*/*"',computed:!1}},acceptLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"All file types"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"☁️⬆"',computed:!1}},onFilesSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""}}};const L={title:"Components/FileDrop",component:u,tags:["autodocs"],argTypes:{accept:{control:"text",description:"A string that defines the file types the file input should accept."},acceptLabel:{control:"text",description:"A display label for the supported file formats."},icon:{control:!1,description:"A custom icon to display in the drop area."},onFilesSelected:{action:"files selected",description:"Callback function that receives the selected files."}}},d=r=>{const[n,m]=g.useState([]),o=s=>{m(s.map(a=>a.name)),r.onFilesSelected(s)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(u,{...r,onFilesSelected:o}),n.length>0&&e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("p",{children:"Selected Files:"}),e.jsx("ul",{children:n.map((s,a)=>e.jsx("li",{children:s},a))})]})]})},c={render:d,args:{accept:"*/*",acceptLabel:"All file types"}},l={render:d,args:{accept:"image/*",acceptLabel:"Images (JPG, PNG, GIF)",icon:e.jsx(D,{})}},i={render:d,args:{accept:"application/pdf",acceptLabel:"PDF files (.pdf)",icon:e.jsx(j,{})}},p={render:d,args:{accept:".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",acceptLabel:"Microsoft Word Documents",icon:"📄"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: FileDropWithState,
  args: {
    accept: "*/*",
    acceptLabel: "All file types"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: FileDropWithState,
  args: {
    accept: "image/*",
    acceptLabel: "Images (JPG, PNG, GIF)",
    icon: <FaFileImage />
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: FileDropWithState,
  args: {
    accept: "application/pdf",
    acceptLabel: "PDF files (.pdf)",
    icon: <FaFilePdf />
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: FileDropWithState,
  args: {
    accept: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    acceptLabel: "Microsoft Word Documents",
    icon: "📄"
  }
}`,...p.parameters?.docs?.source}}};const A=["Basic","OnlyImages","OnlyPDFs","CustomIconAndLabel"];export{c as Basic,p as CustomIconAndLabel,l as OnlyImages,i as OnlyPDFs,A as __namedExportsOrder,L as default};
