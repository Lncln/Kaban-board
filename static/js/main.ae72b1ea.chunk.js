(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{11:function(t,e,a){t.exports={wrapper:"TaskDetail_wrapper__2y0Ih",header:"TaskDetail_header__oGlyQ",title:"TaskDetail_title__3hMo8",createdAt:"TaskDetail_createdAt__3oSw_",status:"TaskDetail_status__2RFCv",label:"TaskDetail_label__NJ2tN",select:"TaskDetail_select__30sl5",homeLink:"TaskDetail_homeLink__zoLmU",emptyState:"TaskDetail_emptyState__1JGy_",emptyStateIcon:"TaskDetail_emptyStateIcon__1-rd3"}},14:function(t,e,a){t.exports={list:"List_list__j1fAE",listTitle:"List_listTitle__ZNhcE",task:"List_task__qYgJX",taskLink:"List_taskLink__2dIm2",addButton:"List_addButton__1o_MH"}},16:function(t,e,a){t.exports={footer:"Footer_footer__1H8BP",counts:"Footer_counts__SR-cG",count:"Footer_count__2lFcH",copy:"Footer_copy__1bI6q"}},19:function(t,e,a){t.exports={form:"Forms_form__1RMPc",input:"Forms_input__6H9AF",textarea:"Forms_textarea__3HWFf",submit:"Forms_submit__2T6z8"}},25:function(t,e,a){t.exports={main:"Main_main__3PCTZ"}},27:function(t,e,a){t.exports={board:"Board_board__2XKVC"}},34:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),n=a(24),r=a.n(n),i=(a(34),a(8)),o=a(12),l=a.p+"static/media/Kaban.73df7021.png",j=a(9),d=a.n(j),b=a.p+"static/media/ArrowDown.9bf3f871.svg",u=(a.p,a.p+"static/media/Photo.516bf9aa.svg"),O=a(0);var _,h,m=function(){return Object(O.jsxs)("div",{className:d.a.PersonalAccount,children:[Object(O.jsx)("div",{className:d.a.PersonalAccountPhoto,children:Object(O.jsx)("img",{className:d.a.UserPhoto,src:u,alt:""})}),Object(O.jsx)("div",{className:d.a.arrow,children:Object(O.jsx)("span",{children:Object(O.jsx)("img",{className:d.a.ArrowDown,src:b,alt:""})})})]})},x=function(){return Object(O.jsxs)("header",{className:d.a.header,children:[Object(O.jsx)("img",{className:d.a.logo,src:l,alt:""}),Object(O.jsx)("h1",{className:d.a.title,children:"Wild Kaban-Boar"}),Object(O.jsx)(m,{})]})},p=a(16),k=a.n(p),f=a(6),v={BACKLOG:"backlog",READY:"Ready",IN_PROGRESS:"inProgress",FINISHED:"Finished"},N=(_={},Object(f.a)(_,v.BACKLOG,"Backlog"),Object(f.a)(_,v.READY,"Ready"),Object(f.a)(_,v.IN_PROGRESS,"In progress"),Object(f.a)(_,v.FINISHED,"Finished"),_),g=(h={},Object(f.a)(h,v.BACKLOG,"#b95959"),Object(f.a)(h,v.IN_PROGRESS,"#4b69b1"),Object(f.a)(h,v.DONE,"#a0b959"),function(t){var e=t.tasks;return Object(O.jsxs)("footer",{className:k.a.footer,children:[Object(O.jsx)("div",{className:k.a.counts,children:Object.values(v).map((function(t){if("inProgress"===t||"Finished"===t){var a=e.filter((function(e){return e.status===t}));return Object(O.jsxs)("div",{className:k.a.count,children:[t===v.IN_PROGRESS&&Object(O.jsx)("span",{children:"Active tasks: "})||t===v.FINISHED&&Object(O.jsx)("span",{children:"Finished tasks: "}),a.length]},t)}}))}),Object(O.jsxs)("div",{className:k.a.copy,children:["Kanban board by ",Object(O.jsx)("a",{href:"https://github.com/Lncln",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:"@_gavrilovroman_"})]})]})}),S=a(25),T=a.n(S),F=a(29),w=a(10),A=(a(36),a(19)),I=a.n(A),P=function(t){var e=t.addNewTask,a=t.setFormVisible,c=Object(s.useState)({title:"",description:""}),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(O.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault(),r.title?e(r.title,r.description):alert("title is req"),a(!1)},children:[Object(O.jsx)("input",{className:I.a.input,id:"taskTitle",name:"title",type:"text",placeholder:"Enter task title",value:r.title,onChange:function(t){var e=t.target.name;o(Object(w.a)(Object(w.a)({},r),{},Object(f.a)({},e,t.target.value)))}}),Object(O.jsx)("button",{className:I.a.submit,type:"submit",children:"Submit"})]})},D=a(11),y=a.n(D);var L=function(t){var e=t.tasks,a=t.setTasks,s=t.type,c=t.lists,n=(t.title,t.setChange);function r(t){a(e.map((function(e){return t.target.value===e.title?Object(w.a)(Object(w.a)({},e),{},{status:s}):e}))),n(!1)}return s===v.READY?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null}),"}",e.map((function(t){if(t.status===c[0])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):s===v.IN_PROGRESS?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:s,onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null}),e.map((function(t){if(t.status===c[1])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):s===v.FINISHED?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:s,onChange:r,className:y.a.select,children:[Object(O.jsx)("option",{value:null,selected:!0,label:""}),e.map((function(t){if(t.status===c[2])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):void 0},C=a(14),B=a.n(C),E=function(t){var e=t.title,a=t.type,c=t.tasks,n=t.addNewTask,r=t.setTasks,l=t.fullTaskList,j=t.lists,d=Object(s.useState)(!1),b=Object(i.a)(d,2),u=b[0],_=b[1],h=Object(s.useState)(!1),m=Object(i.a)(h,2),x=m[0],p=m[1],k=Object(s.useState)(!1),f=Object(i.a)(k,2),N=f[0],g=(f[1],"default");return N||(g="pointer"),Object(O.jsxs)("div",{className:B.a.list,children:[Object(O.jsx)("h2",{className:B.a.listTitle,children:e}),c.map((function(t){return Object(O.jsx)(o.b,{to:"/tasks/".concat(t.id),className:B.a.taskLink,children:Object(O.jsx)("div",{className:B.a.task,children:t.title},t.id)})})),a===v.BACKLOG&&u&&Object(O.jsx)(P,{addNewTask:n,setFormVisible:_}),a===v.BACKLOG&&Object(O.jsx)("button",{className:B.a.addButton,onClick:function(){_(!u)},children:u?"":"+Add card"}),a!==v.BACKLOG&&x&&Object(O.jsx)(L,{tasks:l,setTasks:r,title:e,type:a,lists:j,setChange:p}),a!==v.BACKLOG&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("button",{className:B.a.addButton,onClick:function(){return p(!0)},disabled:N,style:{cursor:g},children:x?"":"+Add card"})})]})},R=a(27),G=a.n(R),H=a(28),K=a.n(H),J=function(t){var e=t.tasks,a=t.setTasks;function s(t,s){var c={id:K()(),title:t,description:s,created:(new Date).toISOString(),status:v.BACKLOG};a([].concat(Object(F.a)(e),[c]))}var c=["backlog","Ready","inProgress","Finished"];return Object(O.jsx)("div",{className:G.a.board,children:Object.values(v).map((function(t){var n=e.filter((function(e){return e.status===t}));return Object(O.jsx)(E,{type:t,title:N[t],tasks:n,addNewTask:s,fullTaskList:e,lists:c,setTasks:a},t)}))})},M=a(2),q=function(t){var e=t.tasks,a=t.setTasks,c=Object(M.f)().params.taskId,n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],d=e.find((function(t){return t.id===c})),b=Object(s.useState)(!1),u=Object(i.a)(b,2),_=u[0],h=u[1];return Object(O.jsxs)("div",{className:y.a.wrapper,children:[Object(O.jsx)(o.b,{to:"/",className:y.a.homeLink,children:"\u2715 Back"}),d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:y.a.header,children:Object(O.jsx)("h2",{className:y.a.title,children:d.title})}),Object(O.jsx)("p",{children:_?Object(O.jsx)("textarea",{value:l,onChange:function(t){return j(t.target.value)},onBlur:function(t){a(e.map((function(e){return console.log(e),e.id===c?Object(w.a)(Object(w.a)({},e),{},{description:t.target.value}):e}))),h(!1)},placeholder:"Enter description",cols:"30",rows:"10",autoFocus:!0}):Object(O.jsx)("span",{onClick:function(){return h(!0)},children:d.description||"This task has no description"})})]}):Object(O.jsxs)("h2",{children:["Task ",c," not found"]})]})};var U=function(t){var e=t.tasks,a=t.setTasks;return Object(O.jsx)("main",{className:T.a.main,children:Object(O.jsxs)(M.c,{children:[Object(O.jsx)(M.a,{exact:!0,path:"/",children:Object(O.jsx)(J,{tasks:e,setTasks:a})}),Object(O.jsx)(M.a,{path:"/tasks/:taskId",children:Object(O.jsx)(q,{tasks:e,setTasks:a})})]})})};var Y=function(){var t=JSON.parse(window.localStorage.getItem("tasks"))||[],e=Object(s.useState)(t),a=Object(i.a)(e,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){window.localStorage.setItem("tasks",JSON.stringify(c))}),[c]),Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(x,{}),Object(O.jsx)(U,{tasks:c,setTasks:n}),Object(O.jsx)(g,{tasks:c})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root"))},9:function(t,e,a){t.exports={header:"Header_header__1oc0G",logo:"Header_logo__l8eBZ",PersonalAccount:"Header_PersonalAccount__capir",ArrowDown:"Header_ArrowDown__1zNQf",PersonalAccountPhoto:"Header_PersonalAccountPhoto__231Gq",UserPhoto:"Header_UserPhoto__2Pe_5",arrow:"Header_arrow__1NIQP"}}},[[42,1,2]]]);
//# sourceMappingURL=main.ae72b1ea.chunk.js.map