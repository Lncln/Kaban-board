(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{14:function(e,t,a){e.exports={list:"List_list__j1fAE",listTitle:"List_listTitle__ZNhcE",task:"List_task__qYgJX",taskLink:"List_taskLink__2dIm2",addButton:"List_addButton__1o_MH"}},16:function(e,t,a){e.exports={footer:"Footer_footer__1H8BP",counts:"Footer_counts__SR-cG",count:"Footer_count__2lFcH",copy:"Footer_copy__1bI6q"}},19:function(e,t,a){e.exports={form:"Forms_form__1RMPc",input:"Forms_input__6H9AF",textarea:"Forms_textarea__3HWFf",submit:"Forms_submit__2T6z8"}},25:function(e,t,a){e.exports={main:"Main_main__3PCTZ"}},27:function(e,t,a){e.exports={board:"Board_board__2XKVC"}},34:function(e,t,a){},4:function(e,t,a){e.exports={wrapper:"TaskDetail_wrapper__2y0Ih",header:"TaskDetail_header__oGlyQ",title:"TaskDetail_title__3hMo8",description:"TaskDetail_description__1DyYz",createdAt:"TaskDetail_createdAt__3oSw_",status:"TaskDetail_status__2RFCv",label:"TaskDetail_label__NJ2tN",select:"TaskDetail_select__30sl5",optionS:"TaskDetail_optionS__3_jXg",decorated:"TaskDetail_decorated__3lh-P",homeLink:"TaskDetail_homeLink__zoLmU",emptyState:"TaskDetail_emptyState__1JGy_",emptyStateIcon:"TaskDetail_emptyStateIcon__1-rd3"}},42:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(24),r=a.n(n),i=(a(34),a(7)),o=a(12),l=a.p+"static/media/Kaban.73df7021.png",j=a(5),d=a.n(j),b=a.p+"static/media/ArrowDown.9bf3f871.svg",u=(a.p,a.p+"static/media/Photo.516bf9aa.svg"),O=a(0);var _,m,h=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(O.jsxs)("div",{className:d.a.wrapper,children:[Object(O.jsxs)("button",{className:d.a.PersonalAccount,onClick:function(){c(!a)},children:[Object(O.jsx)("div",{className:d.a.PersonalAccountPhoto,children:Object(O.jsx)("img",{className:d.a.UserPhoto,src:u,alt:""})}),Object(O.jsx)("div",{className:d.a.arrow,children:Object(O.jsx)("span",{children:Object(O.jsx)("img",{className:d.a.ArrowDown,src:b,alt:""})})})]}),a&&Object(O.jsxs)("div",{className:d.a.molu,children:[Object(O.jsx)("span",{className:d.a.moluOption,children:"Profile"}),Object(O.jsx)("span",{className:d.a.moluOption,children:"Log out"})]})]})},p=function(){return Object(O.jsxs)("header",{className:d.a.header,children:[Object(O.jsx)("img",{className:d.a.logo,src:l,alt:""}),Object(O.jsx)("h1",{className:d.a.title,children:"Wild Kaban-Boar"}),Object(O.jsx)(h,{})]})},x=a(16),k=a.n(x),f=a(9),N={BACKLOG:"backlog",READY:"Ready",IN_PROGRESS:"inProgress",FINISHED:"Finished"},v=(_={},Object(f.a)(_,N.BACKLOG,"Backlog"),Object(f.a)(_,N.READY,"Ready"),Object(f.a)(_,N.IN_PROGRESS,"In progress"),Object(f.a)(_,N.FINISHED,"Finished"),_),g=(m={},Object(f.a)(m,N.BACKLOG,"#b95959"),Object(f.a)(m,N.IN_PROGRESS,"#4b69b1"),Object(f.a)(m,N.DONE,"#a0b959"),function(e){var t=e.tasks;return Object(O.jsxs)("footer",{className:k.a.footer,children:[Object(O.jsx)("div",{className:k.a.counts,children:Object.values(N).map((function(e){if("inProgress"===e||"Finished"===e){var a=t.filter((function(t){return t.status===e}));return Object(O.jsxs)("div",{className:k.a.count,children:[e===N.IN_PROGRESS&&Object(O.jsx)("span",{children:"Active tasks: "})||e===N.FINISHED&&Object(O.jsx)("span",{children:"Finished tasks: "}),a.length]},e)}}))}),Object(O.jsxs)("div",{className:k.a.copy,children:["Kanban board by ",Object(O.jsx)("a",{href:"https://github.com/Lncln",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:"@_gavrilovroman_"})]})]})}),S=a(25),T=a.n(S),F=a(29),w=a(11),A=(a(36),a(19)),D=a.n(A),P=function(e){var t=e.addNewTask,a=e.setFormVisible,c=Object(s.useState)({title:"",description:""}),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(O.jsxs)("form",{className:D.a.form,onSubmit:function(e){e.preventDefault(),r.title?t(r.title,r.description):alert("title is req"),a(!1)},children:[Object(O.jsx)("input",{className:D.a.input,id:"taskTitle",name:"title",type:"text",placeholder:"Enter task title",value:r.title,onChange:function(e){var t=e.target.name;o(Object(w.a)(Object(w.a)({},r),{},Object(f.a)({},t,e.target.value)))}}),Object(O.jsx)("button",{className:D.a.submit,type:"submit",children:"Submit"})]})},I=a(4),y=a.n(I);var L=function(e){var t=e.tasks,a=e.setTasks,s=e.type,c=e.lists,n=(e.title,e.setChange);function r(e){a(t.map((function(t){return e.target.value===t.title?Object(w.a)(Object(w.a)({},t),{},{status:s}):t}))),n(!1)}return s===N.READY?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null}),"}",t.map((function(e){if(e.status===c[0])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:e.title,className:y.a.optionS,children:e.title})})}))]})}):s===N.IN_PROGRESS?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:s,onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null}),t.map((function(e){if(e.status===c[1])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:e.title,className:y.a.optionS,children:e.title})})}))]})}):s===N.FINISHED?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:s,onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null,selected:!0,label:""}),t.map((function(e){if(e.status===c[2])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:e.title,className:y.a.optionS,children:e.title})})}))]})}):void 0},C=a(14),H=a.n(C),B=function(e){var t=e.title,a=e.type,c=e.tasks,n=e.addNewTask,r=e.setTasks,l=e.fullTaskList,j=e.lists,d=Object(s.useState)(!1),b=Object(i.a)(d,2),u=b[0],_=b[1],m=Object(s.useState)(!1),h=Object(i.a)(m,2),p=h[0],x=h[1],k=Object(s.useState)(!1),f=Object(i.a)(k,2),v=f[0],g=(f[1],"default");return v||(g="pointer"),Object(O.jsxs)("div",{className:H.a.list,children:[Object(O.jsx)("h2",{className:H.a.listTitle,children:t}),c.map((function(e){return Object(O.jsx)(o.b,{to:"/tasks/".concat(e.id),className:H.a.taskLink,children:Object(O.jsx)("div",{className:H.a.task,children:e.title},e.id)})})),a===N.BACKLOG&&u&&Object(O.jsx)(P,{addNewTask:n,setFormVisible:_}),a===N.BACKLOG&&Object(O.jsx)("button",{className:H.a.addButton,onClick:function(){_(!u)},children:u?"":"+Add card"}),a!==N.BACKLOG&&p&&Object(O.jsx)(L,{tasks:l,setTasks:r,title:t,type:a,lists:j,setChange:x}),a!==N.BACKLOG&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("button",{className:H.a.addButton,onClick:function(){return x(!0)},disabled:v,style:{cursor:g},children:p?"":"+Add card"})})]})},E=a(27),R=a.n(E),G=a(28),K=a.n(G),J=function(e){var t=e.tasks,a=e.setTasks;function s(e,s){var c={id:K()(),title:e,description:s,created:(new Date).toISOString(),status:N.BACKLOG};a([].concat(Object(F.a)(t),[c]))}var c=["backlog","Ready","inProgress","Finished"];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:R.a.board,children:Object.values(N).map((function(e){var n=t.filter((function(t){return t.status===e}));return Object(O.jsx)(B,{type:e,title:v[e],tasks:n,addNewTask:s,fullTaskList:t,lists:c,setTasks:a},e)}))})})},M=a(2),Y=function(e){var t=e.tasks,a=e.setTasks,c=Object(M.f)().params.taskId,n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],d=t.find((function(e){return e.id===c})),b=Object(s.useState)(!1),u=Object(i.a)(b,2),_=u[0],m=u[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:y.a.wrapper,children:d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:y.a.header,children:[Object(O.jsx)("h2",{className:y.a.title,children:d.title}),Object(O.jsx)(o.b,{to:"/",className:y.a.homeLink,children:"\u2715"})]}),Object(O.jsx)("p",{className:y.a.description,children:_?Object(O.jsx)("textarea",{value:l,onChange:function(e){return j(e.target.value)},onBlur:function(e){a(t.map((function(t){return console.log(t),t.id===c?Object(w.a)(Object(w.a)({},t),{},{description:e.target.value}):t}))),m(!1)},placeholder:"Enter description",cols:"30",rows:"10",autoFocus:!0}):Object(O.jsx)("span",{onClick:function(){return m(!0)},children:d.description||"This task has no description"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:y.a.header,children:Object(O.jsx)(o.b,{to:"/",className:y.a.homeLink,children:"\u2715"})}),Object(O.jsxs)("h2",{className:y.a.description,children:["Task ",c," not found"]})]})})})};var q=function(e){var t=e.tasks,a=e.setTasks;return Object(O.jsx)("main",{className:T.a.main,children:Object(O.jsxs)(M.c,{children:[Object(O.jsx)(M.a,{exact:!0,path:"/",children:Object(O.jsx)(J,{tasks:t,setTasks:a})}),Object(O.jsx)(M.a,{path:"/tasks/:taskId",children:Object(O.jsx)(Y,{tasks:t,setTasks:a})})]})})};var z=function(){var e=JSON.parse(window.localStorage.getItem("tasks"))||[],t=Object(s.useState)(e),a=Object(i.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){window.localStorage.setItem("tasks",JSON.stringify(c))}),[c]),Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(p,{}),Object(O.jsx)(q,{tasks:c,setTasks:n}),Object(O.jsx)(g,{tasks:c})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={header:"Header_header__1oc0G",logo:"Header_logo__l8eBZ",wrapper:"Header_wrapper__mjNKv",molu:"Header_molu__9FYQ_",moluOption:"Header_moluOption__xJ3MX",PersonalAccount:"Header_PersonalAccount__capir",ArrowDown:"Header_ArrowDown__1zNQf",PersonalAccountPhoto:"Header_PersonalAccountPhoto__231Gq",UserPhoto:"Header_UserPhoto__2Pe_5",arrow:"Header_arrow__1NIQP",title:"Header_title__1IAOd"}}},[[42,1,2]]]);
//# sourceMappingURL=main.09796634.chunk.js.map