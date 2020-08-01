(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){},35:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=a(6),s=a.n(o),i=a(14),m=a(2),u=(a(57),function(){return r.a.createElement("div",{className:"topnav",id:"myTopnav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"),r.a.createElement(i.b,{to:"/login"},"Login"),r.a.createElement("a",{href:"#",className:"icon"},r.a.createElement("i",{className:"fa fa-bars",onClick:function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}})))}),p=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Wellness Clinic"),r.a.createElement("h4",null,"Login to book an appointment"),r.a.createElement("div",{className:"slide-container"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWX3klOKD02EhOQYkbZ09ZrQs6P9_1XtUGvA&usqp=CAU",alt:"home",style:{height:"30%"}})),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-clock"}),"  Working Hours "),r.a.createElement("p",null,"Monday - Thursday : 08h00 - 19h00  "),r.a.createElement("p",null,"Friday : 08h00 - 18h00"),r.a.createElement("p",null,"Saturday  and Sunday : 09h00 -16h00")),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-map-marker",style:{color:"#f44336"}}),"  Address "),r.a.createElement("p",null,"238 Dassuty Road"),r.a.createElement("p",null,"Cape Town"),r.a.createElement("p",null,"Western Cape")))},d=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"About Clinic-Booking"),r.a.createElement("p",null,"The App provides a platform The clinic was established in 20000 by a Non-Profit / Non-Government Orgainsation to bring health care to communnities. We offer a few health care services"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTworU1lBTPxH3j9-DPXH7AL0OcwNAvmxoJSw&usqp=CAU",className:"pic"}),r.a.createElement("div",null,"Eye Health")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRmhnokPLG2fjwB4vfbDpXV0fIiPMCDUy7eQ&usqp=CAU",className:"pic"}),r.a.createElement("div",null,"Dental Health")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0jRzaXYhRTcCkQJkxCSGoeKTUeYBoNKqjuA&usqp=CAU",className:"pic"}),r.a.createElement("div",null,"General Health")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGZWGSennwxD9Hsp9shUpt-IVSXoNjfz-1jw&usqp=CAU",className:"pic"}),r.a.createElement("div",null,"Children's Health"))),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-phone fa-2x"}),"  Call - 021 012 3456"),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-envelope fa-2x"}),"  Email - clinic@gmail.com"))))},E=a(11),b=a(1),h=a(10),f=Object(n.createContext)(),g=function(e){var t=Object(n.useContext)(f),a=t.authorised,l=t.register,c=t.error,o=t.removeErrors;Object(n.useEffect)((function(){a&&e.history.push("/patient")}),[a,c,e.history]);var s=Object(n.useState)({name:"",identityNo:"",email:"",phone:"",address:""}),i=Object(h.a)(s,2),m=i[0],u=i[1],p=m.name,d=m.identityNo,g=m.email,v=m.phone,y=m.address,N=function(e){return u(Object(b.a)(Object(b.a)({},m),{},Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"The ID number you have entered is already registered/ belongs to someone else"===c?(alert("User cannot be registered"),o()):(l(m),alert("Registered, login to view appointments"))},className:"form"},r.a.createElement("h1",null,"Register "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Fullname"),r.a.createElement("input",{type:"text",name:"name",value:p,onChange:N,placeholder:"Fullname",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"identityNo"},"ID Number"),r.a.createElement("input",{type:"password",name:"identityNo",minLength:"13",value:d,onChange:N,placeholder:"enter ID number",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:g,onChange:N,placeholder:"Email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",name:"phone",value:v,minLength:"10",onChange:N,required:!0,placeholder:"Phone"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"address"},"Physical Address"),r.a.createElement("input",{type:"text",name:"address",value:y,onChange:N,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block",type:"submit"},"Register"))))},v=a(4),y=a.n(v),N=a(12),O=function(e,t){switch(t.type){case"GET_PATIENT":return Object(b.a)(Object(b.a)({},e),{},{authorised:!0,patient:t.payload});case"REGISTER":case"LOGIN":return localStorage.setItem("token",t.payload.token),Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payload),{},{authorised:!0});case"REGISTER_ERROR":case"LOGIN_ERROR":return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payload),{},{authorised:!1,patient:null,error:t.payload});case"REMOVE_ERRORS":return Object(b.a)(Object(b.a)({},e),{},{error:null});case"LOGOUT":return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,authorised:!1,patient:null,error:t.payload});default:return e}},k=function(e){var t={token:localStorage.getItem("token"),authorised:!1,patient:null,error:null},a=function(e){e?s.a.defaults.headers.common["x-auth-token"]=e:delete s.a.defaults.headers.common["x-auth-token"]},l=Object(n.useReducer)(O,t),c=Object(h.a)(l,2),o=c[0],i=c[1],m=function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&a(localStorage.token),e.prev=1,e.next=4,s.a.get("/api/auth");case 4:t=e.sent,i({type:"GET_PATIENT",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:"ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={headers:{"Content-Type":"application/json"}};try{n=s.a.post("/api/patients",t,a),i({type:"REGISTER",payload:n.data}),m()}catch(r){i({type:"REGISTER_ERROR",payload:r.response.data.msg})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(N.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,s.a.post("/api/auth",t,a);case 4:n=e.sent,i({type:"LOGIN",payload:n.data}),m(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:"LOGIN_ERROR",payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{token:o.token,authorised:o.authorised,patient:o.patient,error:o.error,SettingToken:a,register:u,showPatient:m,logIn:p,logout:function(){return i({type:"LOGOUT"})},removeErrors:function(){return i({type:"REMOVE_ERRORS"})}}},e.children)},j=function(e){var t=Object(n.useContext)(f),a=t.authorised,l=t.logIn,c=t.error,o=t.removeErrors;Object(n.useEffect)((function(){"invalid credentials"===c&&(alert("Invalid credentials"),o()),a&&e.history.push("/patient")}),[a,c,e.history]);var s=Object(n.useState)({name:"",identityNo:""}),i=Object(h.a)(s,2),m=i[0],u=i[1],p=m.name,d=m.identityNo,g=function(e){return u(Object(b.a)(Object(b.a)({},m),{},Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Not registered?"),r.a.createElement("a",{href:"/register"},"Register here")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(m)},className:"form"},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Fullname"),r.a.createElement("input",{type:"text",name:"name",value:p,onChange:g,placeholder:"fullname",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"identityNo"},"I.D Number"),r.a.createElement("input",{type:"password",name:"identityNo",value:d,onChange:g,minLength:"13",maxLength:"13",placeholder:"enter ID number",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-block",type:"submit"},"Login"))))},R=Object(n.createContext)(),x=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(f),l=t.booked,c=t.makeAppointment,o=t.getAppointments,s=(a.logout,a.authorised);Object(n.useEffect)((function(){p({type:"",date:""}),l&&e.history.push("/")}),[l,e.history]);var i=Object(n.useState)({type:"",date:""}),m=Object(h.a)(i,2),u=m[0],p=m[1],d=u.type,g=u.date,v=function(e){return p(Object(b.a)(Object(b.a)({},u),{},Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(u),s&&o()},className:"booking-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"Appointment Type"),r.a.createElement("input",{type:"text",name:"type",id:"type",value:d,onChange:v})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"date"},"Appointment Date"),r.a.createElement("input",{type:"datetime-local",name:"date",id:"date",value:g,onChange:v,required:!0})),r.a.createElement("div",{className:"form-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Book Appointment"))))},A=function(e){var t=e.booking,a=Object(n.useContext)(R),l=a.getAppointments,c=a.cancelAppointments,o=t._id,s=t.type,i=t.date;Object(n.useEffect)((function(){l()}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"text text-left"},"Appointment Type : ",s),r.a.createElement("h5",{className:"text text-left"},"Date and Time : ",i),r.a.createElement("p",null,r.a.createElement("button",{className:"btn btn-dark",onClick:function(){c(o)}}," Cancel "))))},T=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(f),l=t.bookings,c=t.getAppointments,o=a.logout,s=a.authorised;Object(n.useEffect)((function(){s&&c(),s||e.history.push("/")}),[s,e.history]);return r.a.createElement("div",{className:"container"},r.a.createElement("button",null,r.a.createElement("a",{href:"/book"},"New Appointment")),r.a.createElement("button",{className:"btn",style:{float:"right"},onClick:function(){o()}}," Log out"),r.a.createElement("div",null,0!==l.length?l.map((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(A,{booking:e}))})):r.a.createElement(n.Fragment,null,r.a.createElement(x,null))))},C=a(34),I=function(e,t){switch(t.type){case"ADD_APPOINTMENT":return Object(b.a)(Object(b.a)({},e),{},{bookings:[t.payload].concat(Object(C.a)(e.bookings)),booked:!0});case"GET_APPOINTMENTS":return Object(b.a)(Object(b.a)({},e),{},{bookings:t.payload});case"DELETE_APPOINTMENT":return Object(b.a)(Object(b.a)({},e),{},{bookings:e.bookings.filter((function(e){return e._id!==t.payload})),booked:!1});default:return e}},S=function(e){var t=Object(n.useReducer)(I,{bookings:[],error:!1,booked:!1}),a=Object(h.a)(t,2),l=a[0],c=a[1],o=function(e){e?s.a.defaults.headers.common["x-auth-token"]=e:delete s.a.defaults.headers.common["x-auth-token"]},i=function(){var e=Object(N.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json"}},localStorage.token&&(t=o(localStorage.token)),e.prev=2,e.next=5,s.a.get("/api/bookings",t);case 5:a=e.sent,c({type:"GET_APPOINTMENTS",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),c({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(N.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},localStorage.token&&(a=o(localStorage.token)),e.prev=2,e.next=5,s.a.post("api/bookings",t,a);case 5:n=e.sent,c({type:"ADD_APPOINTMENT",payload:n.data}),i(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),c({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},localStorage.token&&(a=o(localStorage.token)),e.prev=2,e.next=5,s.a.delete("/api/bookings/".concat(t),a);case 5:c({type:"DELETE_APPOINTMENT",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(R.Provider,{value:{bookings:l.bookings,error:l.error,booked:l.booked,cancelAppointments:u,makeAppointment:m,getAppointments:i}},e.children)},w=(a(31),function(){return r.a.createElement("div",{className:"footer fixed"},r.a.createElement("p",null,"Copyright@ clinic-booking"),r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("i",{className:"fab fa-facebook"}),"  clinic@facebook.com"),r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-twitter"}),"  @clinic_cpt")))}),G=function(){return r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(i.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"App center"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:p}),r.a.createElement(m.a,{exact:!0,path:"/about",component:d}),r.a.createElement(m.a,{path:"/login",component:j}),r.a.createElement(m.a,{path:"/register",component:g}),r.a.createElement(m.a,{path:"/patient",component:T}),r.a.createElement(m.a,{path:"/book",component:x}))),r.a.createElement(w,null)))))};c.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.509cb2d3.chunk.js.map