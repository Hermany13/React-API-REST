(this.webpackJsonpteste3=this.webpackJsonpteste3||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=(n(29),n(8)),l=n(9),s=n(11),m=n(10),p=n(12),u=(n(30),n(31),n(32),n(33),n(21)),d=n(5),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[{label:"API em Uso",icon:"pi pi-fw pi-dollar",command:function(){return e.props.history.push("/React-API-REST/")}},{label:"Descri\xe7\xe3o",icon:"pi pi-fw pi-file",command:function(){return e.props.history.push("/React-API-REST/descr")}},{label:"Contato",icon:"pi pi-fw pi-user",command:function(){return e.props.history.push("/React-API-REST/contato")}}];return r.a.createElement("div",{className:"App"},r.a.createElement(u.Menubar,{model:t,style:{backgroundColor:"#66B3FF",borderColor:"#CCE6FF"}}),r.a.createElement("div",{id:"main"},r.a.createElement("main",null,r.a.createElement("div",{className:"content",id:"content"},this.props.children))))}}]),t}(a.Component),E=Object(d.f)(h);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(14),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={items:[],isLoaded:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return t?r.a.createElement("div",{className:"App"},r.a.createElement("ul",{style:v},n.map((function(e){return r.a.createElement("div",{style:b},r.a.createElement("li",{key:e.id},r.a.createElement("span",{style:g},"Nome: "),e.name,r.a.createElement("div",{style:C},r.a.createElement("span",{style:j},"Username: "),e.username),r.a.createElement("div",{style:C},r.a.createElement("span",{style:j},"Email: "),e.email),r.a.createElement("div",{style:C},r.a.createElement("span",{style:j},"Cidade: "),e.address.city)))})))):r.a.createElement("div",{style:O},"Carregando...")}}]),t}(a.Component),b={backgroundColor:"#CCE6FF",marginBottom:"30px",borderRadius:"5px",marginRight:"30px",padding:15},v={listStyleType:"none"},g={fontWeight:"bold",marginTop:"-30"},j={fontWeight:"bold",marginTop:"5px"},C={marginTop:"5px"},O={marginTop:"10px"},w=f,k=function(){return r.a.createElement("div",{className:"title"},r.a.createElement(w,null))},x={fontWeight:"bold"},R={cursor:"pointer"},T=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Hermany Vieira Oliveira"),r.a.createElement("p",null,r.a.createElement("span",{style:x},"E-mail:")," hermanyvieiratj@gmail.com"),r.a.createElement("p",null,r.a.createElement("span",{style:x},"GitHub:"),r.a.createElement("a",{href:"https://github.com/Hermany13",style:R}," https://github.com/Hermany13")))},N=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h4",null,"Contato"),r.a.createElement("p",null,"Me contate pelos seguintes canais."))};i.a.render(r.a.createElement(y.a,null,r.a.createElement(E,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:k}),r.a.createElement(d.a,{path:"/Contato",component:T}),r.a.createElement(d.a,{path:"/Descr",component:N})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b5f7608.chunk.js.map