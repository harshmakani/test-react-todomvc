(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),r=a.n(l),c=(a(14),a(3)),i=a(4),u=a(6),s=a(5),m=a(7),d=(a(15),function(e){var t=e.todo,a=e.updateComplete,n=e.deleteItem;return o.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center "+(t.done?"completed":"")},o.a.createElement("input",{type:"checkbox",onChange:function(){a(t)},checked:t.done}),t.value,o.a.createElement("span",{className:"badge badge-danger badge-pill remove-item",title:"Remove"},o.a.createElement("i",{onClick:function(){n(t)},className:"fa fa-remove"})))}),p=function(e){var t=e.todoItemsList,a=e.deleteItem,n=e.updateComplete,l=t.map(function(e,t){return o.a.createElement(d,{todo:e,deleteItem:a,updateComplete:n,key:t})});return o.a.createElement("ul",{className:"list-group"},l)},f=function(e){var t=e.count;return o.a.createElement("p",{className:"lead"},o.a.createElement("strong",null,t.active)," Active"," ",1===t.active?"Item":"Items"," | ",o.a.createElement("strong",null,t.total)," ","Total ",1===t.total?"Item":"Items")},v=function(e){var t=e.list,a=e.count,n=e.inputValue.trim(),o={};if(n)return a.active++,a.total++,t.push({value:n,done:!1}),y(t,a),o.list=t,o.inputValue="",o.count=a,o},g=function(e,t){var a=e.list,n=e.count,o={},l=a.indexOf(t);return a[l].done||n.active--,n.total--,a.splice(a.indexOf(t),1),y(a,n),o.list=a,o.count=n,o},E=function(e,t){var a=e.list,n=e.count,o={},l=a.indexOf(t);return a[l].done=!a[l].done,a[l].done?n.active--:n.active++,y(a,n),o.list=a,o.count=n,o},h=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},y=function(e,t){localStorage.setItem("todos",JSON.stringify(e)),localStorage.setItem("count",JSON.stringify(t))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={list:"undefined"!=typeof localStorage.todos?JSON.parse(localStorage.getItem("todos")):[],inputValue:"",count:"undefined"!=typeof localStorage.count?JSON.parse(localStorage.getItem("count")):{active:0,total:0}},a.inputHandler=function(e){a.setState({inputValue:e.target.value})},a.addHandler=function(e){e.preventDefault();var t=v(a.state);h(t)||a.setState(t)},a.deleteHandler=function(e){var t=g(a.state,e);h(t)||a.setState(t)},a.completeHandler=function(e){var t=E(a.state,e);h(t)||a.setState(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.count,a=e.inputValue,n=e.list;return o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-4"},"Todo List"),o.a.createElement(f,{count:t}),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("form",{name:"todo",onSubmit:this.addHandler},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:this.inputHandler,autoFocus:!0})),o.a.createElement("button",{className:"btn btn-primary",onClick:this.addHandler},"Add")),o.a.createElement("hr",{className:"my-4"}),n.length>0?o.a.createElement(p,{todoItemsList:n,deleteItem:this.deleteHandler,updateComplete:this.completeHandler}):o.a.createElement("p",{className:"lead"},"Start adding items to your todo list now!")))}}]),t}(n.Component);r.a.render(o.a.createElement(N,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8b24ed9d.chunk.js.map