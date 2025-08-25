import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTVOWTB1.js";import{G as d,a as r}from"./Stack-kY8bUwno.js";const c={title:"Layout/Grid",component:d,tags:["autodocs"],argTypes:{gap:{control:"number",description:"The spacing between grid items."},className:{control:"text"},style:{control:"object"},children:{control:!1}}},s={padding:"20px",border:"1px solid #ccc",backgroundColor:"#f0f0f0",textAlign:"center",color:"#555"},l={border:"2px solid #3498db",padding:"10px",backgroundColor:"#ecf0f1"},t={render:()=>e.jsxs(d,{style:l,children:[e.jsx(r,{xs:12,style:s,children:"xs=12"}),e.jsx(r,{xs:6,style:s,children:"xs=6"}),e.jsx(r,{xs:6,style:s,children:"xs=6"}),e.jsx(r,{xs:3,style:s,children:"xs=3"}),e.jsx(r,{xs:3,style:s,children:"xs=3"}),e.jsx(r,{xs:3,style:s,children:"xs=3"}),e.jsx(r,{xs:3,style:s,children:"xs=3"})]})},n={render:()=>e.jsxs(d,{style:l,children:[e.jsx(r,{xs:12,sm:6,md:4,lg:3,style:s,children:"xs=12 sm=6 md=4 lg=3"}),e.jsx(r,{xs:12,sm:6,md:4,lg:3,style:s,children:"xs=12 sm=6 md=4 lg=3"}),e.jsx(r,{xs:12,sm:6,md:4,lg:3,style:s,children:"xs=12 sm=6 md=4 lg=3"}),e.jsx(r,{xs:12,sm:6,md:4,lg:3,style:s,children:"xs=12 sm=6 md=4 lg=3"})]}),parameters:{docs:{description:{story:"Resize the browser window to see how the grid items change column span at different breakpoints (600px, 900px, 1200px, etc.)."}}}},i={render:()=>e.jsxs(d,{gap:40,style:l,children:[e.jsx(r,{xs:6,style:s,children:"xs=6"}),e.jsx(r,{xs:6,style:s,children:"xs=6"}),e.jsx(r,{xs:4,style:s,children:"xs=4"}),e.jsx(r,{xs:4,style:s,children:"xs=4"}),e.jsx(r,{xs:4,style:s,children:"xs=4"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer style={containerStyle}>\r
      <GridItem xs={12} style={itemStyle}>\r
        xs=12\r
      </GridItem>\r
      <GridItem xs={6} style={itemStyle}>\r
        xs=6\r
      </GridItem>\r
      <GridItem xs={6} style={itemStyle}>\r
        xs=6\r
      </GridItem>\r
      <GridItem xs={3} style={itemStyle}>\r
        xs=3\r
      </GridItem>\r
      <GridItem xs={3} style={itemStyle}>\r
        xs=3\r
      </GridItem>\r
      <GridItem xs={3} style={itemStyle}>\r
        xs=3\r
      </GridItem>\r
      <GridItem xs={3} style={itemStyle}>\r
        xs=3\r
      </GridItem>\r
    </GridContainer>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer style={containerStyle}>\r
      <GridItem xs={12} sm={6} md={4} lg={3} style={itemStyle}>\r
        xs=12 sm=6 md=4 lg=3\r
      </GridItem>\r
      <GridItem xs={12} sm={6} md={4} lg={3} style={itemStyle}>\r
        xs=12 sm=6 md=4 lg=3\r
      </GridItem>\r
      <GridItem xs={12} sm={6} md={4} lg={3} style={itemStyle}>\r
        xs=12 sm=6 md=4 lg=3\r
      </GridItem>\r
      <GridItem xs={12} sm={6} md={4} lg={3} style={itemStyle}>\r
        xs=12 sm=6 md=4 lg=3\r
      </GridItem>\r
    </GridContainer>,
  parameters: {
    docs: {
      description: {
        story: "Resize the browser window to see how the grid items change column span at different breakpoints (600px, 900px, 1200px, etc.)."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer gap={40} style={containerStyle}>\r
      <GridItem xs={6} style={itemStyle}>\r
        xs=6\r
      </GridItem>\r
      <GridItem xs={6} style={itemStyle}>\r
        xs=6\r
      </GridItem>\r
      <GridItem xs={4} style={itemStyle}>\r
        xs=4\r
      </GridItem>\r
      <GridItem xs={4} style={itemStyle}>\r
        xs=4\r
      </GridItem>\r
      <GridItem xs={4} style={itemStyle}>\r
        xs=4\r
      </GridItem>\r
    </GridContainer>
}`,...i.parameters?.docs?.source}}};const a=["BasicGrid","ResponsiveGrid","GridWithCustomGap"];export{t as BasicGrid,i as GridWithCustomGap,n as ResponsiveGrid,a as __namedExportsOrder,c as default};
