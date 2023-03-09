(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(21),i=n.n(c),s=n(19),j=n(7),r=n(13),o=n(2),l=n(9),b=n(10),u=n(0),m=function(e){var t=e.contacts,n=e.onChange,a=e.appointment,c=t.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.name)}));return Object(u.jsxs)("select",{name:"name",onChange:n,value:a.name,required:!0,children:[Object(u.jsx)("option",{value:"",children:"-- select contact --"}),c]})},p=function(e){var t=e.appointment,n=e.submit,a=e.onChange,c=e.contacts;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsx)("input",{type:"text",name:"title",placeholder:"Title",value:t.title,onChange:a,required:!0}),Object(u.jsx)("input",{type:"date",name:"date",value:t.date,onChange:a,min:function(){var e=(new Date).toLocaleDateString("pl-PL").split("."),t=Object(j.a)(e,3),n=t[0],a=t[1],c=t[2];return"".concat(c,"-").concat(a.padStart(2,"0"),"-").concat(n.padStart(2,"0"))}(),required:!0}),Object(u.jsx)("input",{type:"time",name:"time",value:t.time,onChange:a,required:!0}),Object(u.jsx)(m,{contacts:c,onChange:a,appointment:t}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})},O=function(e){var t=e.entry,n=Object.entries(t).map((function(e,t){return Object(u.jsx)("p",{className:0===t?"tile-title":"title",children:e[1]},e[0])}));return Object(u.jsx)("div",{className:"tile-container",children:n})},h=function(e){var t=e.array.map((function(e,t){return Object(u.jsx)(O,{entry:e},e.name+"_"+t)}));return Object(u.jsx)("div",{className:"tiles-container",children:t})},d=function(e){var t=e.appointments,n=e.contacts,c=e.addAppointment,i=Object(a.useState)({title:"",name:"",date:"",time:""}),s=Object(j.a)(i,2),r=s[0],o=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Appointment"}),Object(u.jsx)(p,{appointment:r,setAppointment:o,submit:function(e){e.preventDefault(),c(r),o({title:"",name:"",date:"",time:""})},onChange:function(e){var t=e.target;o(Object(b.a)(Object(b.a)({},r),{},Object(l.a)({},t.name,t.value)))},contacts:n})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Appointments"}),Object(u.jsx)(h,{array:t})]})]})},x=function(e){var t=e.contact,n=e.submit,a=e.onChange,c=e.isDuplicate;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsx)("input",{required:!0,name:"name",placeholder:"Name",type:"text",value:t.name,onChange:a}),c&&Object(u.jsx)("p",{children:"Contact with this name already exists"}),Object(u.jsx)("input",{required:!0,name:"phone",placeholder:"Phone ###-###-###",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{3}",value:t.phone,onChange:a}),Object(u.jsx)("input",{required:!0,name:"email",placeholder:"Email",type:"email",value:t.email,onChange:a}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})},v=function(e){var t=e.contacts,n=e.addContact,c=Object(a.useState)({name:"",phone:"",email:""}),i=Object(j.a)(c,2),s=i[0],r=i[1],o=Object(a.useState)(!1),m=Object(j.a)(o,2),p=m[0],O=m[1];return Object(a.useEffect)((function(){var e=t.some((function(e){return e.name===s.name}));O(e)}),[s]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Contact"}),Object(u.jsx)(x,{contact:s,setContact:r,submit:function(e){e.preventDefault(),p||(n(s),r({name:"",phone:"",email:""}))},onChange:function(e){var t=e.target;r(Object(b.a)(Object(b.a)({},s),{},Object(l.a)({},t.name,t.value)))},isDuplicate:p})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(h,{array:t})]})]})};var f=function(){var e=Object(a.useState)([{name:"Sasha",phone:"123456789",email:"mail@test.com"}]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),l=Object(j.a)(i,2),b=l[0],m=l[1],p="/contacts",O="/appointments";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(r.b,{to:p,activeClassName:"active",children:"Contacts"}),Object(u.jsx)(r.b,{to:O,activeClassName:"active",children:"Appointments"})]}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:Object(u.jsx)(o.a,{to:p})}),Object(u.jsx)(o.b,{path:p,children:Object(u.jsx)(v,{contacts:n,addContact:function(e){c([].concat(Object(s.a)(n),[e]))}})}),Object(u.jsx)(o.b,{path:O,children:Object(u.jsx)(d,{appointments:b,addAppointment:function(e){m([].concat(Object(s.a)(b),[e]))},contacts:n})})]})})]})};i.a.render(Object(u.jsx)(r.a,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.89de3b68.chunk.js.map