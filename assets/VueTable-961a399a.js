import{_ as I,j as b,o as c,c as i,d as t,k as r,F as m,i as v,t as l,l as _,m as k,p as D,h as T}from"./index-d2bcbd4b.js";const n=a=>(D("data-v-a734eac9"),a=a(),T(),a),S={key:0,class:"small"},B=n(()=>t("th",{class:"medium"},"PARCEL ID",-1)),C=n(()=>t("th",{class:"medium"},"SENDER",-1)),x=n(()=>t("th",{class:"medium"},"RECEIVER",-1)),p=n(()=>t("th",{class:"large"},"ORDER DATE",-1)),A=n(()=>t("th",{class:"small"},"STATUS",-1)),L=n(()=>t("th",{class:"small"},"DETAILS",-1)),N=["id"],V={key:0,class:"small"},R=["id"],P={class:"medium"},F={class:"medium"},w=n(()=>t("br",null,null,-1)),U=n(()=>t("br",null,null,-1)),j=n(()=>t("br",null,null,-1)),H={class:"medium"},O=n(()=>t("br",null,null,-1)),$=n(()=>t("br",null,null,-1)),q=n(()=>t("br",null,null,-1)),z={class:"large"},G={class:"small"},J={class:"small"},K=["id","onClick"],M=["id"],Q={style:{width:"100%"}},W={__name:"VueTable",props:{data:Array,selected:Array,select:Boolean},setup(a,{expose:E}){const y=a;function g(){for(var o=document.getElementsByClassName("select_row"),s=[],e=0;e<o.length;e++)o[e].checked&&s.push(o[e].id);return s}function h(){for(var o=document.getElementsByClassName("select_row"),s=0;s<o.length;s++)o[s].checked=!1;for(var e=k(y).value.selected,d=0;d<e.length;d++)for(var s=0;s<e[d].length;s++){var u=o[e[d][s]];u!=null&&(console.log(u.id),u.checked=!0)}}function f(o){var s=document.getElementById(o+"details"),e=document.getElementById(o+"panel");s.textContent=="DETAILS"?(e.style="",s.textContent="HIDE"):(e.style.display="none",s.textContent="DETAILS")}return E({getParcels:g,reset:h}),b(()=>{h()}),(o,s)=>(c(),i("table",null,[t("thead",null,[a.select?(c(),i("th",S,"SELECT")):r("",!0),B,C,x,p,A,L]),t("tbody",null,[(c(!0),i(m,null,v(a.data,e=>(c(),i("div",{id:e._id},[t("tr",null,[a.select?(c(),i("td",V,[t("input",{type:"checkbox",class:"select_row",id:e._id},null,8,R)])):r("",!0),t("td",P,l(e._id),1),t("td",F,[_(l(e.senderName)+" ",1),w,_(" "+l(e.senderPhone)+" ",1),U,_(" "+l(e.sentFrom)+" ",1),j]),t("td",H,[_(l(e.receiverName)+" ",1),O,_(" "+l(e.receiverPhone)+" ",1),$,_(" "+l(e.sentTo)+" ",1),q]),t("td",z,l(e.orderDate),1),t("td",G,l(e.status),1),t("td",J,[t("button",{id:e._id+"details",onClick:d=>f(e._id)},"DETAILS",8,K)])]),t("tr",{id:e._id+"panel",style:{display:"none"},class:"details"},[t("td",Q,[(c(!0),i(m,null,v(e.passedBases,d=>(c(),i("ul",null,[t("li",null,l(d.id)+" - "+l(d.baseLocation)+" - "+l(d.timestamp),1)]))),256))])],8,M)],8,N))),256))])]))}},Y=I(W,[["__scopeId","data-v-a734eac9"]]);export{Y as V};
