(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a(22),l=a(10),i=a(2),u=a(3),s=a(6),m=a(4),d=a(5),p=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"What to do?"),o.a.createElement("span",{className:"tagline"},e.tagline))},f=a(13),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).textInput=o.a.createRef(),a.handleSubmit=function(e){e.preventDefault();var t=a.textInput.current.value.trim();a.props.addToDo(t),e.currentTarget.reset(),console.log("Create new item: ".concat(a.textInput.current.value))},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"input-group my-3",onSubmit:this.handleSubmit},o.a.createElement("input",{className:"form-control",name:"name",type:"text",placeholder:"Add a new to-do item ...",ref:this.textInput}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},o.a.createElement("i",{className:"fas fa-plus","aria-hidden":"true"}),"\xa0Add item")))}}]),t}(o.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleInputKeyUp",value:function(e){13===e.keyCode&&e.target.blur()}},{key:"render",value:function(){var e=this,t=this.props.data;return o.a.createElement("tr",{className:"todo-item","data-id":t.uuid},o.a.createElement("td",null,o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{className:"custom-control-input",value:t.uuid,id:"todo-done-".concat(t.uuid),type:"checkbox",checked:t.done,onChange:this.props.toggleToDoDone}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"todo-done-".concat(t.uuid)},"\xa0"))),o.a.createElement("td",{className:"col"},o.a.createElement("input",{type:"text",className:"form-control",value:t.text,onChange:function(a){e.props.updateToDoText(t.uuid,a.target.value)},onKeyUp:function(t){e.handleInputKeyUp(t)}})),o.a.createElement("td",{className:"col-action"},o.a.createElement("i",{className:"icon-remove far fa-trash-alt",onClick:function(a){return e.props.removeToDo(t.uuid)}})))}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).filteredItems=function(){var e=[];for(var t in a.props.items){var n=a.props.items[t];("all"===a.props.filter||"done"===a.props.filter&&!0===n.done||"undone"===a.props.filter&&!1===n.done)&&e.push(n)}return e},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-list"},o.a.createElement("table",{className:"todo-items table table-borderless"},o.a.createElement("tbody",null,this.filteredItems().map(function(t){return o.a.createElement(b,{key:"todo-item-".concat(t.uuid),data:t,updateToDoText:e.props.updateToDoText,toggleToDoDone:e.props.toggleToDoDone,removeToDo:e.props.removeToDo})}))))}}]),t}(o.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).filters=["all","undone","done"],a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-filters text-right"},o.a.createElement("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"Set a filter to show items"},this.filters.map(function(t){return o.a.createElement("button",{type:"button",className:"btn btn-light ".concat(e.props.activeFilter===t?"active":""),onClick:function(a){e.props.setFilter(t)},key:t},t)})))}}]),t}(o.a.Component),E=a(21),y=a.n(E),O=new(function(){function e(){if(Object(i.a)(this,e),!this.canUseLocalStorage())throw Error("The local storage is disabled or full!")}return Object(u.a)(e,[{key:"set",value:function(e,t){localStorage.setItem(e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return null!==a?a:t}},{key:"canUseLocalStorage",value:function(){try{localStorage.setItem("test","test"),localStorage.removeItem("test")}catch(e){return!1}return!0}}]),e}()),j=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).addToDo=function(e){var t={uuid:y()(),text:e,done:!1};a.setState(function(e){return e.toDoItems[t.uuid]=t,e})},a.updateToDoText=function(e,t){a.setState(function(a){return a.toDoItems[e].text=t,a})},a.toggleToDoDone=function(e){var t=e.target;a.setState(function(e){return e.toDoItems[t.value].done=t.checked,e})},a.removeToDo=function(e){a.setState(function(t){return delete t.toDoItems[e],t})},a.setFilter=function(e){a.setState(function(t){return t.filter=e,t})},a.storageKey="react-todo";var n=O.get(a.storageKey);return n?a.state=JSON.parse(n):(a.state={toDoItems:{}},O.set(a.storageKey,JSON.stringify(a.state))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){O.set(this.storageKey,JSON.stringify(this.state))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{tagline:"Here are all the next tasks."}),o.a.createElement(h,{addToDo:this.addToDo}),o.a.createElement(g,{activeFilter:this.state.filter,setFilter:this.setFilter}),o.a.createElement(v,{items:this.state.toDoItems,filter:this.state.filter,updateToDoText:this.updateToDoText,toggleToDoDone:this.toggleToDoDone,removeToDo:this.removeToDo}))}}]),t}(o.a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Help | What to do?"}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{tagline:"Your questions will be answered here."}),o.a.createElement("dl",null,o.a.createElement("dt",null,"Where is the data stored?"),o.a.createElement("dd",null,"We store all information in your browser's LocalStorage.")))}}]),t}(o.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Error 404 | What to do?"}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{tagline:"404 -  Page not found!"}),o.a.createElement("div",{className:"alert alert-warning"},o.a.createElement("strong",null,"Ooops .... sorry!",o.a.createElement("br",null)),"The requested page could not be found."))}}]),t}(o.a.Component),N=function(){return o.a.createElement(c.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:j}),o.a.createElement(l.a,{path:"/help",component:D}),o.a.createElement(l.a,{component:T})))};a(36),a(37);Object(r.render)(o.a.createElement(N,null),document.querySelector("#main"))}},[[25,1,2]]]);
//# sourceMappingURL=main.552c4c87.chunk.js.map