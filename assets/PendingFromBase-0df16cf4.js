import{V as v}from"./VueTable-961a399a.js";import{_ as E,r as u,f as _,o as m,c as b,d as s,t as y,u as r,g as I,F as A,p as B,h as P}from"./index-d2bcbd4b.js";const k=c=>(B("data-v-6661346c"),c=c(),P(),c),C=k(()=>s("h1",null,"PARCEL PENDING FROM BASES",-1)),j={id:"nav"},T=!0,x={__name:"PendingFromBase",setup(c){var i={},a=u(0);const d=u(null);var t=0,o=[];function h(){o[t]=d.value.getParcels();for(var e=[],n=0;n<o.length;n++)for(var l=0;l<o[n].length;l++)e.push(o[n][l]);fetch("http://localhost:8080/parcel/incoming",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:document.cookie},body:JSON.stringify({parcelIDs:e})}).then(p=>p.json()).then(p=>console.log(JSON.stringify(p.body)))}function g(){document.getElementById("prev").disabled=!0,document.getElementById("next").disabled=!0,o[t]=d.value.getParcels(),t=t+1,fetch("http://localhost:8080/parcel/incoming/from-transaction-base?page="+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:document.cookie}}).then(e=>e.json()).then(e=>{e.parcels.length!=0?(i=e,a.value=a.value+1,document.getElementById("prev").disabled=!1,document.getElementById("next").disabled=!1):(alert("no more data!"),t-=1,t!=0&&(document.getElementById("prev").disabled=!1))})}function f(){document.getElementById("prev").disabled=!0,document.getElementById("next").disabled=!0,o[t]=d.value.getParcels(),t=t-1,fetch("http://localhost:8080/parcel/incoming/from-transaction-base?page="+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:document.cookie}}).then(e=>e.json()).then(e=>{i=e,a.value=a.value+1,t!=0&&(document.getElementById("prev").disabled=!1),document.getElementById("next").disabled=!1})}return _(()=>{fetch("http://localhost:8080/parcel/incoming/from-transaction-base?page=0",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:document.cookie}}).then(e=>e.json()).then(e=>{i=e,a.value=a.value+1})}),(e,n)=>(m(),b(A,null,[C,s("div",j,[s("button",{id:"next",onClick:n[0]||(n[0]=l=>g())},"NEXT PAGE"),s("button",{disabled:"",id:"prev",onClick:n[1]||(n[1]=l=>f())},"PREV PAGE"),s("button",{onClick:n[2]||(n[2]=l=>h())},"CONFIRM SELECTED PACKAGE HAS ARRIVED")]),s("h2",null,"Current page: "+y(r(t)+1),1),(m(),I(v,{key:r(a).value,ref_key:"table",ref:d,data:r(i).parcels,select:T,selected:r(o)},null,8,["data","selected"]))],64))}},G=E(x,[["__scopeId","data-v-6661346c"]]);export{G as default};
