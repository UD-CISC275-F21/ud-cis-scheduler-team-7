(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{17:function(e,r,c){},18:function(e,r,c){},19:function(e,r,c){},30:function(e,r,c){},33:function(e,r,c){},36:function(e,r,c){"use strict";c.r(r);var n=c(1),i=c.n(n),t=c(8),s=c.n(t),o=(c(30),c(5)),d=(c(17),c(31),c(18),c(7)),l=c(0);function a(){return Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)("h3",{children:"Course list"}),Object(l.jsx)("h6",{children:"Incomplete Requirements"}),Object(l.jsx)("ul",{className:"nav navbar-nav",children:d.map((function(e,r){return Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:e.name})," ",e.description]},r)}))}),Object(l.jsx)("hr",{}),Object(l.jsx)("h6",{children:"Complete Requirements"}),Object(l.jsx)("ul",{className:"nav navbar-nav"})]})}c(19);var u=c(38);function j(e){var r=e.course,c=Object(n.useState)(0),i=Object(o.a)(c,2),t=i[0],s=i[1],a=Object(n.useState)(4),j=Object(o.a)(a,2),p=j[0],C=j[1];return Object(l.jsxs)("div",{className:"semester",children:[Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"ID"}),Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Credits"})]}),d.slice(t,p).map((function(e,c){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{scope:"col",children:r.name}),Object(l.jsx)("td",{scope:"col",children:r.description}),Object(l.jsx)("td",{scope:"col",children:r.credits})]},c)}))]}),Object(l.jsx)(u.a,{className:"btn btn-light btn-sm",onClick:function(){return s(0),void C(0)},children:"Clear courses"})]})}c(33);var p=c(14),C=c(21),m=c(13);function h(){var e=Object(n.useState)(!1),r=Object(o.a)(e,2),c=r[0],i=r[1];return Object(l.jsx)("div",{className:"welcome",children:Object(l.jsx)(C.a,{position:"top-end",className:"p-3",children:Object(l.jsxs)(p.a,{show:!c,onClose:function(){return i(!c)},bg:"light",children:[Object(l.jsx)(m.a,{children:Object(l.jsx)("strong",{className:"me-auto",children:"Welcome!"})}),Object(l.jsx)(p.a.Body,{children:"This handy dandy website can help you plan out your computer science degree at the University of Delaware."}),Object(l.jsx)(p.a.Body,{children:Object(l.jsx)("button",{type:"button",className:"btn btn-dark btn-sm",children:"Tutorial"})})]})})})}function b(e){var r=e.setCourse;return Object(l.jsx)("div",{className:"control",children:Object(l.jsx)(u.a,{onClick:function(){r(d[0])},className:"btn btn-light",children:"Set default classes"})})}var q=function(){var e=Object(n.useState)(d[0]),r=Object(o.a)(e,2),c=r[0],i=r[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"UD CIS Scheduler"})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(a,{})}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(b,{setCourse:i})})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c}),Object(l.jsx)(j,{course:c})]})]})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(r){var c=r.getCLS,n=r.getFID,i=r.getFCP,t=r.getLCP,s=r.getTTFB;c(e),n(e),i(e),t(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root")),I()},7:function(e){e.exports=JSON.parse('[{"id":1,"name":"CISC108","description":"Introduction to Computer Science I","credits":3,"prereq":null,"coreq":"MATH115, MATH117"},{"id":2,"name":"CISC181","description":"Introduction to Computer Science II","credits":3,"prereq":"CISC108/CISC106","coreq":"MATH221, MATH241"},{"id":3,"name":"CISC210","description":"Introduction to Systems Programming","credits":3,"prereq":"CISC108/CISC106","coreq":"MATH221, MATH241"},{"id":4,"name":"CISC220","description":"Data Structures","credits":3,"prereq":"CISC181","coreq":"MATH210, MATH241"},{"id":5,"name":"CISC260","description":"Machine Org. and Assembly Language","credits":3,"prereq":"CISC181","coreq":null},{"id":6,"name":"CISC275","description":"Introduction to Software Engineering","credits":3,"prereq":"CISC220","coreq":null},{"id":7,"name":"CISC303","description":"Automata Theory","credits":3,"prereq":"MATH210, CISC220","coreq":null},{"id":8,"name":"CISC304","description":"Logic for Programming","credits":3,"prereq":"CISC 220, MATH 210","coreq":null},{"id":9,"name":"CISC320","description":"Introduction to Algorithms","credits":3,"prereq":"MATH210, CISC220","coreq":null},{"id":10,"name":"CISC355","description":"Computers Ethics & Society","credits":3,"prereq":null,"coreq":null},{"id":11,"name":"CISC361","description":"Operating Systems","credits":3,"prereq":"CISC 220, CISC 260 or CPEG 222","coreq":null},{"id":12,"name":"CISC372","description":"Parallel Computing","credits":3,"prereq":"CISC220, CISC260","coreq":null},{"id":13,"name":"CISC498","description":"Computer Science Senior Design Project I","credits":3,"prereq":"CISC275, CISC320","coreq":null},{"id":14,"name":"CISC499","description":"Computer Science Senior Design Project II","credits":3,"prereq":"CISC498","coreq":null},{"id":15,"name":"EGGG101","description":"Introduction to Engineering","credits":2,"prereq":null,"coreq":null},{"id":16,"name":"ENGL110","description":"Seminar in Composition","credits":3,"prereq":null,"coreq":null},{"id":17,"name":"ENGL312","description":"Written Communications in Business","credits":3,"prereq":"ENGL110","coreq":null},{"id":18,"name":"ENGL410","description":"Technical Writing","credits":3,"prereq":"ENGL110","coreq":null},{"id":19,"name":"MATH205","description":"Statistical Methods","credits":4,"prereq":"MATH 210/MATH 230","coreq":null},{"id":20,"name":"MATH210","description":"Discrete Mathematics I","credits":3,"prereq":null,"coreq":"MATH 241, MATH 242, MATH 232"},{"id":21,"name":"MATH241","description":"Analytic Geometry and Calculus A","credits":4,"prereq":"MATH117","coreq":null},{"id":22,"name":"MATH242","description":"Analytic Geometry and Calculus B","credits":4,"prereq":"MATH232/MATH241","coreq":null},{"id":23,"name":"UNIV401","description":"Senior Thesis","credits":"2021-02-04T05:00:00.000Z","prereq":null,"coreq":null},{"id":24,"name":"PHYS207","description":"Fundamentals of Physics I","credits":4,"prereq":null,"coreq":"MATH241"},{"id":25,"name":"PHYS208","description":"Fundamentals of Physics II","credits":4,"prereq":"PHYS 207, MATH 241","coreq":"MATH242"},{"id":26,"name":"CHEM103","description":"Gneral Chemistry","credits":4,"prereq":null,"coreq":"MATH 114, MATH 115, or MATH 117"},{"id":27,"name":"CHEM103","description":"Gneral Chemistry","credits":4,"prereq":"CHEM 101, CHEM 103, CHEM 105, CHEM107, or CHEM 111","coreq":null},{"id":28,"name":"CHEM107","description":"General Chemistry For Life Sciences I","credits":4,"prereq":null,"coreq":"MATH 114 or higher"},{"id":29,"name":"CHEM108","description":"General Chemistry for Life Sciences II","credits":4,"prereq":"CHEM 107, BISC 207","coreq":"BISC 208"},{"id":30,"name":"BISC207","description":"Introductory Biology I","credits":4,"prereq":null,"coreq":"CHEM 103 or CHEM 107 or CHEM 111"},{"id":31,"name":"BISC208","description":"Introductory Biology II","credits":4,"prereq":"BISC 207 or BISC 205","coreq":"CHEM 104 or CHEM 108 or CHEM 112"},{"id":32,"name":"GEOL105","description":"Geological Hazards and Their Human Impact","credits":3,"prereq":null,"coreq":null},{"id":33,"name":"GEOL107","description":"Geology of Dynamic Earth","credits":4,"prereq":null,"coreq":null},{"id":34,"name":"GEOL115","description":"Geological Hazards Laboratory","credits":1,"prereq":null,"coreq":"GEOL 105"},{"id":35,"name":"GEOL107","description":"Geology of Dynamic Earth","credits":4,"prereq":null,"coreq":null},{"id":36,"name":"GEOL110","description":"Earth\u2019s Evolving Systems","credits":4,"prereq":null,"coreq":null},{"id":37,"name":"HIST101","description":"Europe and the World to 1648","credits":3,"prereq":null,"coreq":null},{"id":38,"name":"HIST102","description":"Europe and the World since 1648","credits":3,"prereq":null,"coreq":null}]')}},[[36,1,2]]]);
//# sourceMappingURL=main.c9548a2b.chunk.js.map