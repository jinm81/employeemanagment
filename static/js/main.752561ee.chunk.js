(this.webpackJsonpemployapp=this.webpackJsonpemployapp||[]).push([[0],{18:function(e,a,t){e.exports=t(44)},23:function(e,a,t){},41:function(e,a){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=(t(23),t(16)),s=t(2),i=t(3),m=t(5),u=t(4);var h=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",onChange:e.handleInputChange,type:"search",placeholder:"Search","aria-label":"Search",name:"search",value:e.search}))))},p=t(17),d=t.n(p),v=function(){return d.a.get("https://randomuser.me/api/?results=50")},b=(t(41),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={employees:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v().then((function(a){console.log(a.data.results),e.setState({employees:a.data.results},(function(){return console.log(e.state)}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"First"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,this.state.employees.filter((function(a){return-1!=="".concat(a.name.first.toLowerCase()," ").concat(a.name.last.toLowerCase()).search(e.props.search.toLowerCase())})).map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.picture.thumbnail})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email))}))))}}]),t}(n.Component)),g=(t(42),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInputChange=function(e){var a=e.target.value,t=e.target.name;n.setState(Object(o.a)({},t,a),(function(){return console.log(n.state)}))},n.state={search:""},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{handleInputChange:this.handleInputChange,search:this.state.search}),r.a.createElement(b,{search:this.state.search}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(43);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.752561ee.chunk.js.map