import{C as v,a as d}from"./Container.f38cdf00.js";import{_ as p}from"./index.068383f8.js";import{d as m,r as n,k as x,o,a as f,y as _,g as c,i as k,n as C,t as g,F as h,l as y}from"./vendor.998edb3b.js";const w=["onClick"],B=m({setup(I){const t=n([]),s=n(""),r=n("");function l(a=""){r.value=a,d({method:"get",url:`/md/im/${a}`}).then(i=>{s.value=i.data})}return t.value[0]&&l(t.value[0].title),(a,i)=>{const u=x("v-md-preview");return o(),f(v,{noData:!0},{aside:_(()=>[(o(!0),c(h,null,k(t.value,e=>(o(),c("div",{key:e.title,class:C(["item",r.value===e.title&&"active"]),onClick:D=>l(e.title)},g(e.title),11,w))),128))]),main:_(()=>[y(u,{text:s.value},null,8,["text"])]),_:1})}}});var b=p(B,[["__scopeId","data-v-7b864334"]]);export{b as default};
