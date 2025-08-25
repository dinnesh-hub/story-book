import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-CTVOWTB1.js";const R=({max:t=5,value:l=0,onChange:f,size:j=32,allowHalf:o=!0,readOnly:s=!1})=>{const[w,v]=S.useState(null),z=u=>{const n=(w??l)-u;return n>=1?100:n>0&&o?50:0},b=(u,a)=>{if(s)return;const n=u+(a&&o?.5:1);f?.(n)};return e.jsx("div",{className:`rating ${s?"read-only":""}`,style:{fontSize:j},role:"slider","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":t,children:Array.from({length:t}).map((u,a)=>{const n=z(a);return e.jsx("div",{className:"star-wrapper",onMouseMove:i=>{if(!s)if(o){const{left:h,width:x}=i.currentTarget.getBoundingClientRect(),y=i.clientX-h<x/2;v(a+(y?.5:1))}else v(a+1)},onMouseLeave:()=>!s&&v(null),onClick:i=>{if(s)return;const{left:h,width:x}=i.currentTarget.getBoundingClientRect(),y=o&&i.clientX-h<x/2;b(a,y)},children:e.jsxs("div",{className:"star",children:[e.jsx("div",{className:"star-fill",style:{width:`${n}%`},children:"★"}),e.jsx("div",{className:"star-empty",children:"★"})]})},a)})})};R.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C={title:"Components/Rating",component:R,tags:["autodocs"],argTypes:{max:{control:"number",description:"The total number of stars."},value:{control:"number",description:"The current rating value."},onChange:{action:"rating changed",description:"Callback function triggered when a star is clicked."},size:{control:"number",description:"The size of each star in pixels."},allowHalf:{control:"boolean",description:"If true, allows half-star ratings."},readOnly:{control:"boolean",description:"If true, the rating is non-interactive."}}},r=t=>{const[l,f]=S.useState(t.value);return e.jsx(R,{...t,value:l,onChange:f})},c={render:r,args:{max:5,value:3.5,size:32,allowHalf:!0}},d={render:r,args:{max:5,value:4.5,readOnly:!0}},m={render:r,args:{max:5,value:2,allowHalf:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{marginRight:10},children:"Small:"}),e.jsx(r,{size:20,value:2.5})]}),e.jsxs("div",{children:[e.jsx("span",{style:{marginRight:10},children:"Medium:"}),e.jsx(r,{size:32,value:3.5})]}),e.jsxs("div",{children:[e.jsx("span",{style:{marginRight:10},children:"Large:"}),e.jsx(r,{size:48,value:4.5})]})]}),args:{max:5,allowHalf:!0}},g={render:r,args:{max:10,value:7.5,size:24,allowHalf:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: RatingWithState,
  args: {
    max: 5,
    value: 3.5,
    size: 32,
    allowHalf: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: RatingWithState,
  args: {
    max: 5,
    value: 4.5,
    readOnly: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: RatingWithState,
  args: {
    max: 5,
    value: 2,
    allowHalf: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center"
  }}>\r
      <div>\r
        <span style={{
        marginRight: 10
      }}>Small:</span>\r
        <RatingWithState size={20} value={2.5} />\r
      </div>\r
      <div>\r
        <span style={{
        marginRight: 10
      }}>Medium:</span>\r
        <RatingWithState size={32} value={3.5} />\r
      </div>\r
      <div>\r
        <span style={{
        marginRight: 10
      }}>Large:</span>\r
        <RatingWithState size={48} value={4.5} />\r
      </div>\r
    </div>,
  args: {
    max: 5,
    allowHalf: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: RatingWithState,
  args: {
    max: 10,
    value: 7.5,
    size: 24,
    allowHalf: true
  }
}`,...g.parameters?.docs?.source}}};const V=["Interactive","ReadOnly","NoHalfStars","DifferentSizes","CustomMax"];export{g as CustomMax,p as DifferentSizes,c as Interactive,m as NoHalfStars,d as ReadOnly,V as __namedExportsOrder,C as default};
