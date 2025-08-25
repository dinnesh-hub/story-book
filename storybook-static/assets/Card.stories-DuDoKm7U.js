import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";const n=({children:t,className:d="",style:s={},elevation:p=1})=>e.jsx("div",{className:`card card-elevation-${p} ${d}`,style:s,children:t});n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"",defaultValue:{value:"1",computed:!1}}}};const a=({children:t,className:d="",style:s={}})=>e.jsx("div",{className:`card-header ${d}`,style:s,children:t});a.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const r=({children:t,className:d="",style:s={}})=>e.jsx("div",{className:`card-content ${d}`,style:s,children:t});r.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const m={title:"Components/Card",component:n,tags:["autodocs"],argTypes:{children:{control:!1},elevation:{control:{type:"radio"},options:[0,1,2,3,4,5],description:"The shadow intensity of the card."},className:{control:"text"},style:{control:"object"}}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Basic Card"}),e.jsx(r,{children:e.jsx("p",{children:"This is a simple card with a header and some content."})})]})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2rem"},children:[e.jsxs(n,{elevation:0,children:[e.jsx(a,{children:"Elevation 0"}),e.jsx(r,{children:"No shadow."})]}),e.jsxs(n,{elevation:1,children:[e.jsx(a,{children:"Elevation 1"}),e.jsx(r,{children:"Default shadow."})]}),e.jsxs(n,{elevation:2,children:[e.jsx(a,{children:"Elevation 2"}),e.jsx(r,{children:"More prominent shadow."})]}),e.jsxs(n,{elevation:3,children:[e.jsx(a,{children:"Elevation 3"}),e.jsx(r,{children:"A distinct shadow."})]}),e.jsxs(n,{elevation:4,children:[e.jsx(a,{children:"Elevation 4"}),e.jsx(r,{children:"Strong shadow."})]}),e.jsxs(n,{elevation:5,children:[e.jsx(a,{children:"Elevation 5"}),e.jsx(r,{children:"Highest shadow intensity."})]})]}),parameters:{docs:{description:{story:"This story demonstrates the different shadow elevations for the Card component."}}}},l={args:{elevation:3,style:{backgroundColor:"#f0f0f0",color:"#333",minWidth:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Custom Styled Card"}),e.jsx(r,{children:e.jsx("p",{children:"This card has a custom background color and min-width applied via the `style` prop."})})]})}},c={args:{children:e.jsx(r,{children:e.jsx("p",{children:"This card only has content and no header."})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <CardHeader>Basic Card</CardHeader>\r
        <CardContent>\r
          <p>This is a simple card with a header and some content.</p>\r
        </CardContent>\r
      </>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem"
  }}>\r
      <Card elevation={0}>\r
        <CardHeader>Elevation 0</CardHeader>\r
        <CardContent>No shadow.</CardContent>\r
      </Card>\r
      <Card elevation={1}>\r
        <CardHeader>Elevation 1</CardHeader>\r
        <CardContent>Default shadow.</CardContent>\r
      </Card>\r
      <Card elevation={2}>\r
        <CardHeader>Elevation 2</CardHeader>\r
        <CardContent>More prominent shadow.</CardContent>\r
      </Card>\r
      <Card elevation={3}>\r
        <CardHeader>Elevation 3</CardHeader>\r
        <CardContent>A distinct shadow.</CardContent>\r
      </Card>\r
      <Card elevation={4}>\r
        <CardHeader>Elevation 4</CardHeader>\r
        <CardContent>Strong shadow.</CardContent>\r
      </Card>\r
      <Card elevation={5}>\r
        <CardHeader>Elevation 5</CardHeader>\r
        <CardContent>Highest shadow intensity.</CardContent>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the different shadow elevations for the Card component."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 3,
    style: {
      backgroundColor: "#f0f0f0",
      color: "#333",
      minWidth: "300px"
    },
    children: <>\r
        <CardHeader>Custom Styled Card</CardHeader>\r
        <CardContent>\r
          <p>This card has a custom background color and min-width applied via the \`style\` prop.</p>\r
        </CardContent>\r
      </>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <CardContent>\r
        <p>This card only has content and no header.</p>\r
      </CardContent>
  }
}`,...c.parameters?.docs?.source}}};const u=["BasicCard","CardWithDifferentElevations","CardWithCustomStyle","CardWithoutHeader"];export{o as BasicCard,l as CardWithCustomStyle,i as CardWithDifferentElevations,c as CardWithoutHeader,u as __namedExportsOrder,m as default};
