(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(10),l=a.n(r),o=a(3),i=a(4),d=a.n(i),j=a(7),u="GET_LOGS",h="ADD_LOG",b="DELETE_LOG",m="SET_CURRENT",p="CLEAR_CURRENT",O="UPDATE_LOG",f="SET_LOADING",x="LOGS_ERROR",g="SEARCH_LOGS",v="GET_TECHS",y="ADD_TECH",N="DELETE_TECH",w="TECHS_ERROR",k=function(){return{type:f}},T=Object(o.b)(null,{searchLogs:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/logs?q=".concat(e));case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:g,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,a=Object(n.useRef)("");return Object(c.jsx)("nav",{style:{marginBottom:"30px"},className:"black",children:Object(c.jsx)("div",{className:"nav-wrapper",children:Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs..",ref:a,onChange:function(e){t(a.current.value)}}),Object(c.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(c.jsx)("i",{className:"material-icons",children:"search"})}),Object(c.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),E=function(){return Object(c.jsxs)("div",{className:"fixed-action-btn",children:[Object(c.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large black darken-2 modal-trigger",children:Object(c.jsx)("i",{className:"large material-icons",children:"add"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(c.jsx)("i",{className:"material-icons",children:"person"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(c.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},S=function(){return Object(c.jsx)("div",{className:"progress blue lighten-4",children:Object(c.jsx)("div",{className:"indeterminate blue"})})},L=a(19),C=a.n(L),D=a(5),R=a.n(D),_=Object(o.b)(null,{deleteLog:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/logs/".concat(e),{method:"DELETE"});case 4:a({type:b,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:m,payload:e}}})((function(e){var t=e.log,a=e.deleteLog,n=e.setCurrent;return Object(c.jsx)("li",{className:"collection-item",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)},children:t.message}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"grey-text",children:[Object(c.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," ","last updated by"," "," ",Object(c.jsx)("span",{className:"black-text",children:t.tech})," on"," ",Object(c.jsx)(C.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(c.jsx)("a",{href:"#!",onClick:function(){a(t.id),R.a.toast({html:"Log Deleted"})},className:"secondary-content",children:Object(c.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),A=Object(o.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(),e.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:u,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:x,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,a=t.logs,s=t.loading,r=e.getLogs;return Object(n.useEffect)((function(){r()}),[]),s||null===a?Object(c.jsx)(S,{}):Object(c.jsxs)("ul",{className:"collection with-header",children:[Object(c.jsx)("li",{className:"collection-header",children:Object(c.jsx)("h4",{className:"center",children:"System Logs"})}),s||0!==a.length?a.map((function(e){return Object(c.jsx)(_,{log:e},e.id)})):Object(c.jsx)("p",{className:"center",children:"No logs to show......."})]})})),G=a(6),J=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(),e.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:v,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:w,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},M=function(){return{type:f}},P=Object(o.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,a=e.tech,s=a.techs,r=a.loading;return Object(n.useEffect)((function(){t()}),[]),!r&&null!==s&&s.map((function(e){return Object(c.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),F={width:"75%",height:"75%"},H=Object(o.b)(null,{addLog:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:h,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,a=Object(n.useState)(""),s=Object(G.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)(!1),i=Object(G.a)(o,2),d=i[0],j=i[1],u=Object(n.useState)(""),h=Object(G.a)(u,2),b=h[0],m=h[1];return Object(c.jsxs)("div",{id:"add-log-modal",className:"modal",style:F,children:[Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("h4",{children:"Enter System Log"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field",children:Object(c.jsxs)("select",{name:"tech",value:b,className:"browser-default",onChange:function(e){return m(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(c.jsx)(P,{})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field",children:Object(c.jsx)("p",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"filled-in",checked:d,value:d,onChange:function(e){return j(!d)}}),Object(c.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("a",{href:"#!",onClick:function(){if(""===r||""===b)R.a.toast({html:"Please enter a message and tech"});else{var e={message:r,attention:d,tech:b,date:new Date};t(e),R.a.toast({html:"Log added by ".concat(b)}),l(""),j(!1),m("")}},className:"modal-close waves-effect black waves-light btn",children:"Enter"})})]})})),I={width:"75%",height:"75%"},U=Object(o.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:O,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,a=e.updateLog,s=Object(n.useState)(""),r=Object(G.a)(s,2),l=r[0],o=r[1],i=Object(n.useState)(!1),d=Object(G.a)(i,2),j=d[0],u=d[1],h=Object(n.useState)(""),b=Object(G.a)(h,2),m=b[0],p=b[1];Object(n.useEffect)((function(){t&&(o(t.message),u(t.attention),p(t.tech))}),[t]);return Object(c.jsxs)("div",{id:"edit-log-modal",className:"modal",style:I,children:[Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("h4",{children:"Enter System Log"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field",children:Object(c.jsx)("input",{type:"text",name:"message",value:l,onChange:function(e){return o(e.target.value)}})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field",children:Object(c.jsxs)("select",{name:"tech",value:m,className:"browser-default",onChange:function(e){return p(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(c.jsx)("option",{value:"John Smit",children:"John Smith"}),Object(c.jsx)("option",{value:"Sam Smit",children:"Sam Smith"}),Object(c.jsx)("option",{value:"Jerry Emmanuel",children:"Jerry Emmanuel"})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field",children:Object(c.jsx)("p",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"filled-in",checked:j,value:j,onChange:function(e){return u(!j)}}),Object(c.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("a",{href:"#!",onClick:function(){if(""===l||""===m)R.a.toast({html:"Please enter a message and tech"});else{var e={id:t.id,message:l,attention:j,tech:m,date:new Date};a(e),R.a.toast({html:"Log updated by ".concat(m)}),o(""),u(!1),p("")}},className:"modal-close waves-effect black waves-light btn",children:"Enter"})})]})})),Y=Object(o.b)(null,{addTech:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:y,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:w,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,a=Object(n.useState)(""),s=Object(G.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)(""),i=Object(G.a)(o,2),d=i[0],j=i[1];return Object(c.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("h4",{children:"New Technician"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",name:"firstName",value:r,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",name:"lastName",value:d,onChange:function(e){return j(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("a",{href:"#!",onClick:function(){""===r||""===d?R.a.toast({html:"Please enter the first and last name"}):(t({firstName:r,lastName:d}),R.a.toast({html:"".concat(r," ").concat(d," was added as a tech")}),l(""),j(""))},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})})),B=Object(o.b)(null,{deleteTech:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://my-json-server.typicode.com/ayo83/it-logger-fake-server/techs/".concat(e),{method:"DELETE"});case 4:a({type:N,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:w,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,a=e.deleteTech;return Object(c.jsx)("li",{className:"collection-item",children:Object(c.jsxs)("div",{children:[t.firstName," ",t.lastName,Object(c.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){a(t.id),R.a.toast({html:"Technician deleted"})},children:Object(c.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),q=Object(o.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,a=e.tech,s=a.techs,r=a.loading;return Object(n.useEffect)((function(){t()}),[]),Object(c.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("h4",{children:"Technician List"}),Object(c.jsx)("ul",{className:"collection",children:!r&&null!==s&&s.map((function(e){return Object(c.jsx)(B,{tech:e},e.id)}))})]})})})),W=a(8),z=a(20),K=a(21),Q=a(12),V=a(2),X={logs:null,current:null,loading:!1,error:null},Z={techs:null,loading:!1,error:null},$=Object(W.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload,loading:!1});case h:return Object(V.a)(Object(V.a)({},e),{},{logs:[].concat(Object(Q.a)(e.logs),[t.payload]),loading:!1});case b:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case O:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload});case m:return Object(V.a)(Object(V.a)({},e),{},{current:t.payload});case p:return Object(V.a)(Object(V.a)({},e),{},{current:null});case f:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case x:return console.error(t.payload),Object(V.a)(Object(V.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(V.a)(Object(V.a)({},e),{},{techs:t.payload,loading:!1});case y:return Object(V.a)(Object(V.a)({},e),{},{techs:[].concat(Object(Q.a)(e.techs),[t.payload]),loading:!1});case N:return Object(V.a)(Object(V.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case f:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case w:return console.error(t.payload),Object(V.a)(Object(V.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),ee=[K.a],te=Object(W.createStore)($,{},Object(z.composeWithDevTools)(W.applyMiddleware.apply(void 0,ee))),ae=(a(35),a(36),function(){return Object(n.useEffect)((function(){R.a.AutoInit()})),Object(c.jsx)(o.a,{store:te,children:Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(E,{}),Object(c.jsx)(H,{}),Object(c.jsx)(U,{}),Object(c.jsx)(Y,{}),Object(c.jsx)(q,{}),Object(c.jsx)(A,{})]})]})})});l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ae,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bf58efff.chunk.js.map