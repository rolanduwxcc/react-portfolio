(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(6),s=c.n(r),i=(c(11),c(12),c(2)),l=c(0);var o=function(e){return Object(l.jsx)("ul",{className:"nav nav-tabs",children:["About Me","Projects","Resume","Contact"].map((function(t){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})},d=c.p+"static/media/movie-news.961df4f1.png",j=c.p+"static/media/budget-tracker.8831f758.png",b=c.p+"static/media/that-one-answer.82f3d4d7.jpg",h=c.p+"static/media/weather-dashboard.b6ba9dd8.png",m=c.p+"static/media/work-day.95114f73.png",u=c.p+"static/media/password-generator.a3ea5135.png",x=function(){var e=Object(a.useState)([{name:"Movie News",category:"commercial",description:"JavaScript, Web APIs",deployedAtLink:"https://rolanduwxcc.github.io/project-bmw/",gitHubRepoLink:"https://github.com/rolanduwxcc/project-bmw",screenshot:d},{name:"Budget Tracker",category:"TBD",description:"JS, Node, Express, Mongoose/MongoDB",deployedAtLink:"https://shielded-sierra-69449.herokuapp.com/",gitHubRepoLink:"https://github.com/rolanduwxcc/budget-tracker",screenshot:j},{name:"That One Answer",category:"commercial",description:"JavaScript, Node, MySQL, Sequelize, Express",deployedAtLink:"https://salty-spire-96574.herokuapp.com/",gitHubRepoLink:"https://github.com/AdamR-Work/That-One-Answer",screenshot:b},{name:"Weather Dashboard",category:"commercial",description:"JavaScript, APIs, HTML, CSS",deployedAtLink:"https://rolanduwxcc.github.io/ch6-weather-dashboard/",gitHubRepoLink:"https://github.com/rolanduwxcc/ch6-weather-dashboard",screenshot:h},{name:"Work Day Scheduler",category:"commercial",description:"JavaScript, HTML, CSS",deployedAtLink:"https://rolanduwxcc.github.io/ch5-work-day-scheduler/",gitHubRepoLink:"https://github.com/rolanduwxcc/ch5-work-day-scheduler",screenshot:m},{name:"Password Generator",category:"commercial",description:"JavaScript",deployedAtLink:"https://rolanduwxcc.github.io/ch3-password-generator/",gitHubRepoLink:"https://github.com/rolanduwxcc/ch3-password-generator",screenshot:u}]),t=Object(i.a)(e,1)[0];return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)("div",{className:"card-columns",children:t.map((function(e,t){return Object(l.jsxs)("div",{className:"card mb-3",style:{width:"18rem"},children:[Object(l.jsx)("img",{src:e.screenshot,alt:e.name,className:"card-img-top"},e.name),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("a",{className:"card-title",href:e.deployedAtLink,target:"_blank",rel:"noreferrer",children:e.name}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("a",{href:e.gitHubRepoLink,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"GitHub Logo"})}),Object(l.jsx)("span",{children:"   "}),e.description]})]})]})}))})]})},p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"About Me"}),Object(l.jsx)("p",{children:"I am full time Healthcare IT Professional and a part time/pro-bono budding Full Stack Web Developer, familiar with current web technologies. I can find my way around the DOM. When not working hard or creating websites that bring joy, you can usually find me enjoying time with my family. I enjoy learning new things about many topics but especially those concerning finance, history, sci-fi/fantasy and web technologies."})]})},g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"Curriculum Vitae"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"../../assets/resume.txt",download:!0,children:Object(l.jsx)("h3",{children:"Resume"})})}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Front-End Knowledge"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"Responsive Design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Back-End Knowledge"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express.js"}),Object(l.jsx)("li",{children:"SQLite, MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"RESTful APIs"})]})]})]})},O=c(3),A=c(5);var w=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),c=t[0],n=t[1],r=c.name,s=c.email,o=c.message,d=Object(a.useState)(""),j=Object(i.a)(d,2),b=j[0],h=j[1];function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),h(t?"":"Email is invalid")}else e.target.value.length?h(""):h("".concat(e.target.name," is required."));b||n(Object(A.a)(Object(A.a)({},c),{},Object(O.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{class:"container-fluid",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{class:"form-label",htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:r,onBlur:m})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{class:"form-label",htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:s,onBlur:m})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{class:"form-label",htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{class:"form-control",name:"message",rows:"5",defaultValue:o,onBlur:m})]}),b&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:b})}),Object(l.jsx)("button",{class:"btn-lg btn-primary","data-testid":"submitButton",type:"submit",children:"Send"})]})]})};var v=function(){return Object(l.jsx)("nav",{className:"navbar fixed-bottom",children:Object(l.jsxs)("ul",{className:"nav",children:[Object(l.jsx)("h2",{className:"navbar-brand",children:"Find me on:"}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"mailto:rolanduwxcc@gmail.com?subject=Saw your portfolio&body=Can we talk",className:"nav-link",target:"_blank",rel:"noreferrer",children:"Gmail"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"https://github.com/rolanduwxcc",target:"_blank",rel:"noreferrer",children:"GitHub/rolanduwxcc"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"https://stackoverflow.com/users/14645865/roland",className:"nav-link",target:"_blank",rel:"noreferrer",children:["stack",Object(l.jsx)("b",{children:"overflow"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/linkedinrowland/",className:"nav-link",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]})})};var k=function(){var e=Object(a.useState)("Home"),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{id:"about",children:"W Rowland"}),Object(l.jsx)(o,{currentPage:c,handlePageChange:n})]}),Object(l.jsx)("main",{className:"container-fluid",children:Object(l.jsx)("div",{children:function(){switch(c){case"Projects":return Object(l.jsx)(x,{});case"Resume":return Object(l.jsx)(g,{});case"Contact":return Object(l.jsx)(w,{});default:return Object(l.jsx)(p,{})}}()})}),Object(l.jsx)("footer",{className:"footer mt-auto py-3",children:Object(l.jsx)(v,{})})]})},f=function(){return Object(l.jsx)(k,{})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),y()}},[[14,1,2]]]);
//# sourceMappingURL=main.e98cb3c9.chunk.js.map