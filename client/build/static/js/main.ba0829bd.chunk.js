(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a.n(o),c=a(13),s=a(2),i=(a(39),function(){return r.a.createElement("div",{className:"topnav",id:"myTopnav"},r.a.createElement(c.b,{to:"/home"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"),r.a.createElement(c.b,{to:"/login"},"Login"),r.a.createElement("a",{href:"/",className:"icon"},r.a.createElement("i",{class:"fa fa-bars",onClick:function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}})))}),u=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Wellness Clinic"),r.a.createElement("div",{className:"slide-container"},r.a.createElement("img",{src:"",alt:""})),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-clock"}),"  Working Hours "),r.a.createElement("p",null,"Monday - Thursday : 08h00 - 19h00  "),r.a.createElement("p",null,"Friday : 08h00 - 18h00"),r.a.createElement("p",null,"Saturday  and Sunday : 09h00 -16h00")),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-map-marker"}),"  Address "),r.a.createElement("p",null,"238 Dassuty Road"),r.a.createElement("p",null,"Cape Town"),r.a.createElement("p",null,"Western Cape")))},m=a(11),p=a(1),d=a(9),E=Object(n.createContext)(),b=function(e){var t=Object(n.useContext)(E),a=t.authorised,o=t.register,l=t.error,c=t.removeErrors;Object(n.useEffect)((function(){a&&e.history.push("/"),"The ID number you have entered is already registered/ belongs to someone else"===l&&(alert("User cannot be registered"),c())}),[a,l,e.history]);var s=Object(n.useState)({name:"",identityNo:"",email:"",phone:"",address:""}),i=Object(d.a)(s,2),u=i[0],b=i[1],h=u.name,f=u.identityNo,v=u.email,y=u.phone,g=u.address,O=function(e){return b(Object(p.a)(Object(p.a)({},u),{},Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({name:h,identityNo:f,email:v,phone:y,address:g})}},r.a.createElement("h1",null,"Register "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Fullname"),r.a.createElement("input",{type:"text",name:"name",value:h,onChange:O,required:!0,placeholder:"Fullname"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"identityNo"},"ID Number"),r.a.createElement("input",{type:"text",name:"identityNo",value:f,onChange:O,required:!0,placeholder:"enter ID number"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:v,onChange:O,required:!0,placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",name:"phone",value:y,onChange:O,required:!0,placeholder:"Phone"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"address"},"Physical Address"),r.a.createElement("input",{type:"text",name:"address",value:g,onChange:O,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block",type:"submit"},"Register"))))},h=a(4),f=a.n(h),v=a(12),y=a(10),g=a.n(y),O=function(e,t){switch(t.type){case"GET_PATIENT":return Object(p.a)(Object(p.a)({},e),{},{authorised:!0,patient:t.payload});case"REGISTER":case"LOGIN":return localStorage.setItem("token",t.payload),Object(p.a)(Object(p.a)(Object(p.a)({},e),t.payload),{},{authorised:!0});case"REGISTER_ERROR":case"LOGIN_ERROR":return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.payload),{},{authorised:!1,patient:null});case"REMOVE_ERRORS":return Object(p.a)(Object(p.a)({},e),{},{error:null});case"LOGOUT":return localStorage.removeItem("token"),Object(p.a)(Object(p.a)({},e),{},{token:null,authorised:!1,patient:null});default:return e}},N=function(e){var t=[{token:localStorage.getItem("token"),authorised:!1,patient:null,loading:!0,error:null}],a=Object(n.useReducer)(O,t),o=Object(d.a)(a,2),l=o[0],c=o[1],s=function(e){e?g.a.defaults.headers.common["x-auth-token"]=e:delete g.a.defaults.headers.common["x-auth-token"]},i=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&s(localStorage.token),e.prev=1,e.next=4,g.a.get("/api/bookings");case 4:t=e.sent,c({type:"GET_PATIENT",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={headers:{"Content-Type":"application/json"}};try{n=g.a.post("/api/patients",t,a),c({type:"REGISTER",payload:n.data}),i()}catch(r){c({type:"REGISTER_ERROR",payload:r.response.data.msg})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,g.a.post("/api/auth",t,a);case 4:n=e.sent,c({type:"LOGIN",payload:n.data}),i(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:"LOGIN_ERROR",payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{token:l.token,authorised:l.authorised,loading:l.loading,user:l.user,error:l.error,setToken:s,register:u,showPatient:i,logIn:m,logout:function(){return c({type:"LOGOUT"})},removeErrors:function(){return c({type:"REMOVE_ERRORS"})}}},e.children)},k=function(e){var t=Object(n.useContext)(E),a=t.authorised,o=t.logIn,l=t.error,c=t.removeErrors;Object(n.useEffect)((function(){a&&e.history.push("/"),"invalid credentials"===l&&(alert("User cannot be registered"),c())}),[a,l,e.history]);var s=Object(n.useState)({name:"",identityNo:""}),i=Object(d.a)(s,2),u=i[0],b=i[1],h=u.name,f=u.identityNo,v=function(e){return b(Object(p.a)(Object(p.a)({},u),{},Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Not registered?"),r.a.createElement("a",{href:"/register"},"Register here")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===h||""===f?alert("Please fill in both fullname and password"):o({name:h,identityNo:f})}},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Fullname"),r.a.createElement("input",{type:"text",name:"name",value:h,onChange:v,placeholder:"fullname",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"identityNo"},"Password"),r.a.createElement("input",{type:"text",name:"identityNo",value:f,onChange:v,required:!0,placeholder:"enter ID number"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-block",type:"submit",value:"Login"},"Login"))))},j=Object(n.createContext)(),R=function(e){var t=e.booking,a=Object(n.useContext)(j),o=a.getAppointments,l=a.cancelAppointments,c=t._id,s=t.type,i=t.date;Object(n.useEffect)((function(){o()}),[]);return r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"text-primary text-left"},"Appointment Type : ",s),r.a.createElement("h3",null,"Date and Time : ",i),r.a.createElement("p",null,r.a.createElement("button",{className:"btn btn-block btn-dark",onClick:function(){l(c)}}," Cancel ")))},x=a(33),T=function(e,t){switch(t.type){case"ADD_APPOINTMENT":return Object(p.a)(Object(p.a)({},e),{},{bookings:[t.payload].concat(Object(x.a)(e.bookings))});case"GET_APPOINTMENTS":return Object(p.a)(Object(p.a)({},e),{},{bookings:t.payload});case"DELETE_APPOINTMENT":return Object(p.a)(Object(p.a)({},e),{},{bookings:e.bookings.filter((function(e){return e._id!==t.payload}))});default:return e}},I=function(e){var t=Object(n.useReducer)(T,{bookings:[],appointments:[],error:!1}),a=Object(d.a)(t,2),o=a[0],l=a[1],c=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/booking");case 3:t=e.sent,l({type:"GET_APPOINTMENTS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,g.a.post("api/booking",t,a);case 4:n=e.sent,l({type:"ADD_APPOINTMENT",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("/api/booking/".concat(t));case 3:l({type:"DELETE_APPOINTMENT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"BOOKING_ERROR",payload:e.t0.response.msg});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(j.Provider,{value:{bookings:o.bookings,appointments:o.appointments,error:o.error,cancelAppointments:i,makeAppointment:s,getAppointments:c}},e.children)},C=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(E),a=(e._id,e.bookings),o=(e.makeAppointment,e.getAppointments,t.logout);return r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null," "),r.a.createElement("h4",null,"Your appointments"),r.a.createElement("button",{className:"btn btn-block btn-right",onClick:function(){o()}},"Logout"),a.length<0?r.a.createElement("div",null,r.a.createElement("p",{className:"center"},"You do not have any appointments"),r.a.createElement("button",{className:"btn btn-block"},"Book Appointment")):a.map((function(e){return r.a.createElement(R,{key:e._id,booking:e})})))))},A=(a(63),function(){return r.a.createElement(N,null,r.a.createElement(I,null,r.a.createElement(c.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"App center"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/home",component:u}),r.a.createElement(s.a,{exact:!0,path:"/login",component:k}),r.a.createElement(s.a,{exact:!0,path:"/register",component:b}),r.a.createElement(s.a,{exact:!0,path:"/bookings",component:C}),r.a.createElement(s.a,{exact:!0,path:"/booking",component:R})))))))});l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ba0829bd.chunk.js.map