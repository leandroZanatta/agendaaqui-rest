(this["webpackJsonpagenda-facil"]=this["webpackJsonpagenda-facil"]||[]).push([[0],{119:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),i=t(2),m=t(28),c=t(38);function s(){return r.a.createElement("div",null)}var u=t(161),p=t(164),d=t(160),h=t(162),b=t(163),g=t(167),f=t(165),v=t(166),E=t(43),C=t.n(E),O=t(74),y=t(70),j=t(159),w=t(158);function W(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(w.a,{color:"inherit",href:"https://material-ui.com/"},"Agenda Aqui")," ",(new Date).getFullYear(),".")}var x=Object(y.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function P(){var e=x();return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(u.a,{className:e.avatar},r.a.createElement(C.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Autentica\xe7\xe3o"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(b.a,{control:r.a.createElement(g.a,{value:"remember",color:"primary"}),label:"Lembrar-me"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Logar"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(c.b,{to:"/recuperarsenha"},"Perdeu sua senha?")),r.a.createElement(f.a,{item:!0},r.a.createElement(c.b,{to:"/cadastro"},"N\xe3o tem uma conta? Cadastrar"))))),r.a.createElement(v.a,{mt:8},r.a.createElement(W,null)))}var N=t(10),k=t(39),S=t(122),D=t(34),q=t(20),A=t(46),I=t(47),T=t(48),F=t(72),J=function(e){function a(e){var t;return Object(D.a)(this,a),(t=Object(A.a)(this,Object(I.a)(a).call(this,e))).formatWithPattern=function(e,a){for(var t=[],n=a.split(""),r=0,o=0;o<n.length&&("#"===n[o]?(t[o]=e[r],r++):t[o]=a[o],r!==e.length);o++);return t.join("")},t.formatDocumento=function(e){var a=e.replace("[^0-9]","");return a.length>11?t.formatWithPattern(a,"##.###.###/####-##"):t.formatWithPattern(a,"###.###.###-##")},t.name=e.name,t}return Object(T.a)(a,e),Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a,{customInput:h.a,format:this.formatDocumento,variant:"outlined",required:!0,fullWidth:!0,value:this.props.documento,error:this.props.error,onChange:this.props.onChange,id:"documento",label:"CPF/CNPJ",name:"documento",autoComplete:"documento"})}}]),a}(r.a.Component),R=t(123),B=t(21),L=t(127),V=t(168),M=t(125),Y=t(73),$=t.n(Y).a.create({headers:{"Content-Type":"application/json"}}),z=function(e){function a(e){var t;return Object(D.a)(this,a),(t=Object(A.a)(this,Object(I.a)(a).call(this,e))).componentDidMount=function(){var e=Object(B.a)(t);t.setState({labelWidth:t.label.current.clientWidth}),$.get(t.props.api,{data:{}}).then((function(a){e.setState({data:a.data})}))},t.handleChange=function(e){t.setState({value:e.target.value}),t.props.handleChange(e)},t.label=r.a.createRef(),t.state={data:[],labelWidth:100,value:""},t}return Object(T.a)(a,e),Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{id:this.props.name+"label",ref:this.label},this.props.label),r.a.createElement(M.a,{className:"reactSelect",labelId:this.props.name+"label",id:this.props.name+"field",required:!0,fullWidth:!0,inputRef:this.props.inputRef,error:this.props.error,value:this.state.value,labelWidth:this.state.labelWidth,onChange:this.handleChange},this.state.data.map((function(e){return r.a.createElement(V.a,{key:e.id,value:e.id},e.descricao)}))))}}]),a}(r.a.Component);function G(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?G(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var K=Object(y.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Q(){var e=r.a.useState({estabelecimento:"",nome:"",documento:"",email:"",senha:""}),a=Object(k.a)(e,2),t=a[0],n=a[1],o=r.a.useState({estabelecimento:!0,nome:!0,documento:!0,email:!0,senha:!0,mensagemestabelecimento:"Campo obrigat\xf3rio",mensagemnome:"Campo obrigat\xf3rio",mensagemdocumento:"Campo obrigat\xf3rio",mensagememail:"Campo obrigat\xf3rio",mensagemsenha:"Campo obrigat\xf3rio"}),l=Object(k.a)(o,2),i=l[0],m=l[1],c=K();function s(e,a,r,o){var l;n(H({},t,Object(N.a)({},e,a))),m(H({},i,(l={},Object(N.a)(l,e,r),Object(N.a)(l,"mensagem"+e,o),l)))}return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(u.a,{className:c.avatar},r.a.createElement(C.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Cadastro de Empresa"),r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement("form",{className:c.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log(e)}},r.a.createElement(S.a,{variant:"outlined",className:c.form},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(z,{name:"estamelecimento",label:"Estabelecimento",value:t.estabelecimento,error:i.estabelecimento,handleChange:function(e){var a=""===e.target.value,t=a?"Campo obrigat\xf3rio":"";s("estabelecimento",e.target.value,a,t)},api:"estabelecimento"}),i.estabelecimento&&r.a.createElement(R.a,null,i.mensagemestabelecimento)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(J,{value:t.documento,error:i.documento,onChange:function(e){var a=""===e.target.value,t=a?"Campo obrigat\xf3rio":"";s("documento",e.target.value,a,t)}}),i.documento&&r.a.createElement(R.a,null,i.mensagemdocumento)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",name:"nome",required:!0,fullWidth:!0,id:"nome",label:"Nome",autoComplete:"nome",value:t.nome,error:i.nome,onChange:function(e){var a=""===e.target.value,t=a?"Campo obrigat\xf3rio":"";s("nome",e.target.value,a,t)}}),i.nome&&r.a.createElement(R.a,null,i.mensagemnome)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",value:t.email,error:i.email,onChange:function(e){var a=""===e.target.value,t=a?"Campo obrigat\xf3rio":"";s("email",e.target.value,a,t)}}),i.email&&r.a.createElement(R.a,null,i.mensagememail)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"senha",label:"Senha",type:"password",id:"senha",autoComplete:"current-password",value:t.senha,error:i.senha,onChange:function(e){var a=""===e.target.value,t=a?"Campo obrigat\xf3rio":"";s("senha",e.target.value,a,t)}}),i.senha&&r.a.createElement(R.a,null,i.mensagemsenha))),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:i.estabelecimento||i.nome||i.documento||i.email||i.senha,className:c.submit},"Cadastrar"))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){var e={isAuthenticated:!1};return r.a.createElement(c.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/login"},r.a.createElement(P,null)),r.a.createElement(m.b,{path:"/cadastro"},r.a.createElement(Q,null)),r.a.createElement(m.b,{path:"/dashboard"},r.a.createElement(s,null)),r.a.createElement((function(a){a.children;var t=Object(i.a)(a,["children"]);return r.a.createElement(m.b,Object.assign({},t,{render:function(a){var t=a.location;return e.isAuthenticated?r.a.createElement(m.a,{to:{pathname:"/dashboard",state:{from:t}}}):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:t}}})}}))}),{path:"/"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,a,t){e.exports=t(119)}},[[90,1,2]]]);
//# sourceMappingURL=main.b716abc9.chunk.js.map