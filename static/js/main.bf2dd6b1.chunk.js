(this["webpackJsonpmaterial-ui"]=this["webpackJsonpmaterial-ui"]||[]).push([[0],{52:function(e,t,n){e.exports=n(64)},53:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);n(53);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=n(34),i=n(65),u=n(93),m=n(94),d=n(30),s=Object(a.memo)((function(e){return o.a.createElement(i.a,{elevation:0,style:{padding:0,margin:0,backgroundColor:"#fafafa"}},o.a.createElement(u.a,{color:"primary",position:"static",style:{height:64}},o.a.createElement(m.a,{style:{height:64}},o.a.createElement(d.a,{color:"inherit"},"TODO APP"))),e.children)})),h=n(95),f=n(102),p=n(97),g=Object(a.memo)((function(e){return o.a.createElement(i.a,{style:{margin:16,padding:16}},o.a.createElement(h.a,{container:!0},o.a.createElement(h.a,{xs:10,md:11,item:!0,style:{paddingRight:16}},o.a.createElement(f.a,{placeholder:"Add Todo here",value:e.inputValue,onChange:e.onInputChange,onKeyPress:e.onInputKeyPress,fullWidth:!0})),o.a.createElement(h.a,{xs:2,md:1,item:!0},o.a.createElement(p.a,{fullWidth:!0,color:"secondary",variant:"outlined",onClick:e.onButtonClick},"Add"))))})),k=n(96),E=n(98),v=n(103),y=n(100),C=n(101),I=n(99),b=n(46),O=n.n(b),T=Object(a.memo)((function(e){return o.a.createElement(E.a,{divider:e.divider},o.a.createElement(v.a,{onClick:e.onCheckBoxToggle,checked:e.checked,disableRipple:!0}),o.a.createElement(y.a,{primary:e.text}),o.a.createElement(C.a,null,o.a.createElement(I.a,{"aria-label":"Delete Todo",onClick:e.onButtonClick},o.a.createElement(O.a,null))))})),j=Object(a.memo)((function(e){return o.a.createElement(o.a.Fragment,null,e.items.length>0&&o.a.createElement(i.a,{style:{margin:16}},o.a.createElement(k.a,{style:{overflow:"scroll"}},e.items.map((function(t,n){return o.a.createElement(T,Object.assign({},t,{key:"TodoItem.".concat(n),divider:n!==e.items.length-1,onButtonClick:function(){return e.onItemRemove(n)},onCheckBoxToggle:function(){return e.onItemCheck(n)}}))})))))})),x=Object(a.memo)((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),n=Object(l.a)(t,2),o=n[0],c=n[1];return{inputValue:o,changeInput:function(e){return c(e.target.value)},clearInput:function(){return c("")},keyInput:function(e,t){return(13===e.which||13===e.keyCode)&&(t(o),!0)}}}(),n=t.inputValue,c=t.changeInput,r=t.clearInput,i=t.keyInput,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.useState)(e),n=Object(l.a)(t,2),o=n[0],c=n[1];return{todos:o,addTodo:function(e){""!==e&&c(o.concat({text:e,checked:!1}))},checkTodo:function(e){c(o.map((function(t,n){return e===n&&(t.checked=!t.checked),t})))},removeTodo:function(e){c(o.filter((function(t,n){return e!==n})))}}}(),m=u.todos,d=u.addTodo,h=u.checkTodo,f=u.removeTodo,p=function(e){r(),d(n)};return o.a.createElement(s,null,o.a.createElement(g,{inputValue:n,onInputChange:c,onButtonClick:p,onInputKeyPress:function(e){return i(e,p)}}),o.a.createElement(j,{items:m,onItemCheck:function(e){return h(e)},onItemRemove:function(e){return f(e)}}))})),B=document.getElementById("root");r.a.render(o.a.createElement(x,null),B)}},[[52,1,2]]]);
//# sourceMappingURL=main.bf2dd6b1.chunk.js.map