import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-D4xFOn2n.js";const d=({src:c,alt:n="avatar",children:p,className:m="",size:o,type:u="div",onClick:i,ariaLabel:v})=>{const[g,h]=x.useState(!1),f=u,A=o?{width:o,height:o}:void 0;return l.jsx(f,{className:m,style:A,onClick:i,"aria-label":v||n,role:i?"button":void 0,tabIndex:i?0:void 0,children:!g&&c?l.jsx("img",{src:c,alt:n,onError:()=>h(!0),style:{width:"100%",height:"100%",objectFit:"cover"}}):p})};d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:'"avatar"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},type:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const b={title:"Components/Avatar",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text",description:"URL of the image for the avatar. If broken or not provided, children will be rendered."},alt:{control:"text",description:'Alt text for the avatar image, used for accessibility. Defaults to "avatar".'},children:{control:"text",description:"Content to display when `src` is not provided or fails to load (e.g., initials, an icon)."},className:{control:"text",description:"Additional CSS classes for custom styling."},size:{control:{type:"range",min:24,max:120,step:4},description:"The width and height of the avatar in pixels."},type:{control:"select",options:["div","span","button"],description:"The HTML tag to render the avatar as."},onClick:{action:"clicked",description:'Callback fired when the avatar is clicked. Only applicable when `type` is "button".'},ariaLabel:{control:"text",description:"Accessibility label for the avatar. Overrides `alt` if provided."}}},a={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User Avatar"}},r={args:{src:"https://i.pravatar.cc/150?img=2",alt:"Another User Avatar",size:72}},t={args:{src:"https://i.pravatar.cc/150?img=3",alt:"Small Avatar",size:32}},e={args:{src:"invalid-image-url.jpg",children:"?",alt:"Broken Image Avatar"}},s={args:{src:"https://i.pravatar.cc/150?img=3",alt:"Custom Styled Avatar",className:"custom-avatar"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Another User Avatar',
    size: 72 // Custom size
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Small Avatar',
    size: 32
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'invalid-image-url.jpg',
    children: '?',
    alt: 'Broken Image Avatar'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Custom Styled Avatar',
    className: 'custom-avatar'
  }
}`,...s.parameters?.docs?.source}}};const I=["DefaultImage","CustomSize","SmallAvatar","ImageLoadError","TA_Avatar"];export{r as CustomSize,a as DefaultImage,e as ImageLoadError,t as SmallAvatar,s as TA_Avatar,I as __namedExportsOrder,b as default};
