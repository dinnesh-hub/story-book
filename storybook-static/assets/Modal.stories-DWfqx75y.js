import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-CTVOWTB1.js";const n=({children:t,className:a="",style:o={}})=>e.jsx("div",{className:`modal-content ${a}`,style:{fontSize:"1rem",lineHeight:1.5,color:"#333",...o},children:t});n.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const r=({children:t,className:a="",style:o={}})=>e.jsx("h2",{className:`modal-title ${a}`,style:{margin:0,marginBottom:16,fontSize:"1.5rem",fontWeight:"600",...o},children:t});r.__docgenInfo={description:"",methods:[],displayName:"ModalTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const p=({open:t,onClose:a,children:o,className:u="",style:m={},closeOnBackdropClick:q=!0})=>{if(f.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),!t)return null;const g=h=>{h.target===h.currentTarget&&q&&a()};return e.jsx("div",{role:"dialog","aria-modal":"true",className:`modal-backdrop ${u}`,onClick:g,style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1300,...m},children:e.jsx("div",{className:"modal-container",style:{backgroundColor:"#fff",borderRadius:8,maxWidth:"600px",width:"90%",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",padding:"24px"},children:o})})};p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const C={title:"Components/Modal",component:p,tags:["autodocs"],argTypes:{open:{control:!1},onClose:{action:"closed",description:"Callback function triggered when the modal is requested to close."},children:{control:!1},className:{control:"text"},style:{control:"object"},closeOnBackdropClick:{control:"boolean"}}},c=t=>{const[a,o]=f.useState(!1),u=()=>o(!0),m=()=>{o(!1),t.onClose()};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:u,children:"Open Modal"}),e.jsx(p,{...t,open:a,onClose:m,children:t.children})]})},i={render:c,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Basic Modal Title"}),e.jsxs(n,{children:[e.jsx("p",{children:"This is the content of a basic modal. You can place any content here."}),e.jsx("button",{onClick:()=>{},children:"Close"})]})]})}},s={render:c,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Modal with Scrollable Content"}),e.jsxs(n,{children:[e.jsx("p",{children:"This modal contains a lot of text to demonstrate scrolling behavior when the content exceeds the `maxHeight` of the modal container."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}),e.jsx("p",{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}),e.jsx("button",{onClick:()=>{},children:"Close"})]})]})}},l={render:c,args:{closeOnBackdropClick:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Backdrop Click Disabled"}),e.jsxs(n,{children:[e.jsx("p",{children:"This modal will not close when you click the backdrop. It can only be closed by a button inside the modal."}),e.jsx("button",{onClick:()=>{},children:"Close"})]})]})}},d={render:c,args:{className:"custom-modal",style:{backgroundColor:"linear-gradient(135deg, #f093fb, #f5576c)"},children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Custom Styled Modal"}),e.jsxs(n,{children:[e.jsx("p",{children:"This modal has a custom background color applied to the backdrop."}),e.jsx("button",{onClick:()=>{},children:"Close"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ModalWithState,
  args: {
    children: <>\r
        <ModalTitle>Basic Modal Title</ModalTitle>\r
        <ModalContent>\r
          <p>\r
            This is the content of a basic modal. You can place any content\r
            here.\r
          </p>\r
          <button onClick={() => {}}>Close</button>\r
        </ModalContent>\r
      </>
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ModalWithState,
  args: {
    children: <>\r
        <ModalTitle>Modal with Scrollable Content</ModalTitle>\r
        <ModalContent>\r
          <p>\r
            This modal contains a lot of text to demonstrate scrolling behavior\r
            when the content exceeds the \`maxHeight\` of the modal container.\r
          </p>\r
          <p>\r
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r
            aliquip ex ea commodo consequat.\r
          </p>\r
          <p>\r
            Duis aute irure dolor in reprehenderit in voluptate velit esse\r
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
            cupidatat non proident, sunt in culpa qui officia deserunt mollit\r
            anim id est laborum.\r
          </p>\r
          <p>\r
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem\r
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\r
            quae ab illo inventore veritatis et quasi architecto beatae vitae\r
            dicta sunt explicabo.\r
          </p>\r
          <p>\r
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\r
            fugit, sed quia consequuntur magni dolores eos qui ratione\r
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\r
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non\r
            numquam eius modi tempora incidunt ut labore et dolore magnam\r
            aliquam quaerat voluptatem.\r
          </p>\r
          <p>\r
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis\r
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\r
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam\r
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo\r
            voluptas nulla pariatur?\r
          </p>\r
          <button onClick={() => {}}>Close</button>\r
        </ModalContent>\r
      </>
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ModalWithState,
  args: {
    closeOnBackdropClick: false,
    children: <>\r
        <ModalTitle>Backdrop Click Disabled</ModalTitle>\r
        <ModalContent>\r
          <p>\r
            This modal will not close when you click the backdrop. It can only\r
            be closed by a button inside the modal.\r
          </p>\r
          <button onClick={() => {}}>Close</button>\r
        </ModalContent>\r
      </>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ModalWithState,
  args: {
    className: "custom-modal",
    style: {
      backgroundColor: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    children: <>\r
        <ModalTitle>Custom Styled Modal</ModalTitle>\r
        <ModalContent>\r
          <p>This modal has a custom background color applied to the backdrop.</p>\r
          <button onClick={() => {}}>Close</button>\r
        </ModalContent>\r
      </>
  }
}`,...d.parameters?.docs?.source}}};const v=["BasicModal","LargeContent","WithoutBackdropClose","StyledModal"];export{i as BasicModal,s as LargeContent,d as StyledModal,l as WithoutBackdropClose,v as __namedExportsOrder,C as default};
