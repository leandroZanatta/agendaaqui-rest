(this["webpackJsonpagenda-facil"]=this["webpackJsonpagenda-facil"]||[]).push([[0],{117:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=t(2),o=t(28),m=t(32),s=t(40),u=t(25),d=t(64),p=t(65),E=t(69),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"box"}))}}]),a}(r.a.Component),b=t(154),f=t(159),g=t(153),v=t(164),y=t(158),w=t(163),x=t(160),C=t(162),W=t(43),j=t.n(W),N=t(70),O=t(66),k=t(152),q=t(151);function A(){return r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(q.a,{color:"inherit",href:"https://material-ui.com/"},"Agenda Aqui")," ",(new Date).getFullYear(),".")}var S=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function T(){var e=S();return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Autentica\xe7\xe3o"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(y.a,{control:r.a.createElement(w.a,{value:"remember",color:"primary"}),label:"Lembrar-me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Logar"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(m.b,{href:"#",variant:"body2"},"Perdeu sua senha?")),r.a.createElement(x.a,{item:!0},r.a.createElement(m.b,{to:"/cadastro"},"N\xe3o tem uma conta? Cadastrar"))))),r.a.createElement(C.a,{mt:8},r.a.createElement(A,null)))}var I=t(38),J=t(165),D=t(166),F=t(157),L=t(161),P=t(68),B=t.n(P).a.create({baseURL:"http://localhost:3333/",headers:{"Content-Type":"application/json"}}),R=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function U(){var e=R(),a=r.a.useState([]),t=Object(I.a)(a,2),n=t[0],l=t[1],c=r.a.useRef(null),i=r.a.useState(0),o=Object(I.a)(i,2),s=o[0],u=o[1];return r.a.useEffect((function(){u(c.current.offsetWidth)}),[]),r.a.useEffect((function(){B.get("estabelecimento",{data:{}}).then((function(e){e.data&&l(e.data)}))}),[]),r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Cadastro"),r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(F.a,{variant:"outlined",className:e.form},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(J.a,{ref:c,id:"estabelecimento-label"},"Estabelecimento"),r.a.createElement(L.a,{labelId:"estabelecimento-label",id:"estabelecimento",required:!0,fullWidth:!0,labelWidth:s},n.map((function(e){return r.a.createElement(D.a,{value:e.id},e.descricao)})))),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"nome",label:"Nome",name:"nome",autoComplete:"nome"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"documento",label:"CPF/CNPJ",name:"documento",autoComplete:"documento"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"senha",label:"Senha",type:"password",id:"senha",autoComplete:"current-password"}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Cadastrar"),r.a.createElement(x.a,{container:!0,justify:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(m.b,{to:"/login"}," J\xe1 tem uma conta? Entrar")))))),r.a.createElement(C.a,{mt:5},r.a.createElement(A,null)))}t(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e={isAuthenticated:!1};return r.a.createElement(m.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/login"},r.a.createElement(T,null)),r.a.createElement(o.b,{path:"/cadastro"},r.a.createElement(U,null)),r.a.createElement(o.b,{path:"/dashboard"},r.a.createElement(h,null)),r.a.createElement((function(a){a.children;var t=Object(i.a)(a,["children"]);return r.a.createElement(o.b,Object.assign({},t,{render:function(a){var t=a.location;return e.isAuthenticated?r.a.createElement(o.a,{to:{pathname:"/dashboard",state:{from:t}}}):r.a.createElement(o.a,{to:{pathname:"/login",state:{from:t}}})}}))}),{path:"/"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,a,t){e.exports=t(118)}},[[88,1,2]]]);
//# sourceMappingURL=main.40c7d599.chunk.js.map