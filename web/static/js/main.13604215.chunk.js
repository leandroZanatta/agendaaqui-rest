(this["webpackJsonpagenda-facil"]=this["webpackJsonpagenda-facil"]||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),o=t(2),c=t(29),m=t(33),s=t(25),u=t(18),d=t(35),p=t(36),h=t(38),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"box"}))}}]),a}(r.a.Component),E=t(154),f=t(159),g=t(153),v=t(164),y=t(158),j=t(163),C=t(160),W=t(162),O=t(45),w=t.n(O),x=t(71),N=t(67),k=t(152),S=t(151);function q(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(S.a,{color:"inherit",href:"https://material-ui.com/"},"Agenda Aqui")," ",(new Date).getFullYear(),".")}var R=Object(N.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function D(){var e=R();return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(w.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Autentica\xe7\xe3o"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(y.a,{control:r.a.createElement(j.a,{value:"remember",color:"primary"}),label:"Lembrar-me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Logar"),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(m.b,{to:"/recuperarsenha"},"Perdeu sua senha?")),r.a.createElement(C.a,{item:!0},r.a.createElement(m.b,{to:"/cadastro"},"N\xe3o tem uma conta? Cadastrar"))))),r.a.createElement(W.a,{mt:8},r.a.createElement(q,null)))}var P=t(157),A=t(69),I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).formatWithPattern=function(e,a){for(var t=[],n=a.split(""),r=0,l=0;l<n.length&&("#"===n[l]?(t[l]=e[r],r++):t[l]=a[l],r!==e.length);l++);return t.join("")},t.formatDocumento=function(e){var a=e.replace("[^0-9]","");return a.length>11?t.formatWithPattern(a,"##.###.###/####-##"):t.formatWithPattern(a,"###.###.###-##")},t.name=e.name,t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(A.a,{customInput:v.a,format:this.formatDocumento,variant:"outlined",required:!0,fullWidth:!0,inputRef:this.props.inputRef,id:"documento",label:"CPF/CNPJ",name:"documento",autoComplete:"documento"})}}]),a}(r.a.Component),T=t(21),J=t(165),F=t(166),L=t(161),B=t(70),V=t.n(B).a.create({baseURL:"http://localhost:3333/",headers:{"Content-Type":"application/json"}}),M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).componentDidMount=function(){var e=Object(T.a)(t);t.setState({labelWidth:t.label.current.clientWidth}),V.get(t.props.api,{data:{}}).then((function(a){e.setState({data:a.data})}))},t.handleChange=function(e){t.setState({value:e.target.value})},t.label=r.a.createRef(),t.state={data:[],labelWidth:100,value:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,{id:this.props.name+"label",ref:this.label},this.props.label),r.a.createElement(L.a,{className:"reactSelect",labelId:this.props.name+"label",id:this.props.name+"field",required:!0,fullWidth:!0,inputRef:this.props.inputRef,value:this.state.value,labelWidth:this.state.labelWidth,onChange:this.handleChange},this.state.data.map((function(e){return r.a.createElement(F.a,{key:e.id,value:e.id},e.descricao)}))))}}]),a}(r.a.Component),U=Object(N.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Y(){var e=U();return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(w.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Cadastro"),r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){console.log(e)}},r.a.createElement(P.a,{variant:"outlined",className:e.form},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(M,{className:"reactSelect",label:"Estabelecimento",name:"reactSelect",api:"estabelecimento",inputRef:function(e){}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",name:"nome",required:!0,fullWidth:!0,id:"nome",label:"Nome",autoComplete:"nome"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(I,{name:"documento"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"senha",label:"Senha",type:"password",id:"senha",autoComplete:"current-password"}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Cadastrar"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(m.b,{to:"/login"}," J\xe1 tem uma conta? Entrar"))))))),r.a.createElement(W.a,{mt:5},r.a.createElement(q,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){var e={isAuthenticated:!1};return r.a.createElement(m.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/login"},r.a.createElement(D,null)),r.a.createElement(c.b,{path:"/cadastro"},r.a.createElement(Y,null)),r.a.createElement(c.b,{path:"/dashboard"},r.a.createElement(b,null)),r.a.createElement((function(a){a.children;var t=Object(o.a)(a,["children"]);return r.a.createElement(c.b,Object.assign({},t,{render:function(a){var t=a.location;return e.isAuthenticated?r.a.createElement(c.a,{to:{pathname:"/dashboard",state:{from:t}}}):r.a.createElement(c.a,{to:{pathname:"/login",state:{from:t}}})}}))}),{path:"/"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,a,t){e.exports=t(118)}},[[89,1,2]]]);
//# sourceMappingURL=main.13604215.chunk.js.map