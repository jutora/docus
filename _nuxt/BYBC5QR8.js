import{d as p,r as t,c as _,e as f,f as s,h as v,n,J as l,ao as h,ap as g,aa as y,l as V}from"./s31NhDAa.js";import{r}from"./C8Ee8x9D.js";import"./2ETV-d1z.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=t(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(o,B)=>{const m=y;return _(),f("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",C,[r(o.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(s("div",w,[r(o.$slots,"content",{},void 0,!0)],512),[[g,l(e)]])],2)}}}),N=V(k,[["__scopeId","data-v-e7a2777d"]]);export{N as default};
