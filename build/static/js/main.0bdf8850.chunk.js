(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n(24),i=n(13),s=n(17),l={auth:{isLoading:!0},modals:{},errors:[],lists:{keyOrder:[],keyHash:{}},tasks:{isLoading:void 0,idByOrder:[],hashObjects:{}}},u="LOADING_USER_COMPLETE",d="GET_USER_SUCCESS",p="OPEN_MODAL",m="REORDER_LIST",f="GET_LIST_SUCCESS",h="ADD_LIST_SUCCESS",b="DELETE_LIST_SUCCESS";var v=function(e){var t=e.sort(function(e,t){return e.order-t.order}).map(function(e){return e.id}),n={};return e.forEach(function(e){return n[e.id]=e}),{keyOrder:t,keyHash:n}},O=function(e,t){var n=Object(s.a)({},e);return n.keyOrder.push(t.id),n.keyHash[t.id]=t,n};var E=n(25);var g=n(36),y=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.auth,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{isLoading:!1};case d:return Object(s.a)({},t.data,{isLoading:!1});default:return e}},sidebar:g.reducer,modals:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.lists;var e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e={},Object(E.a)(e,t.payload.modalName,!0),Object(E.a)(e,"data",t.payload.data),e;default:return{}}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.lists,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case f:return v(t.data);case h:return O(e,t.data);case m:return Object(s.a)({},e,{keyOrder:t.data});default:return e}}}),j=n(64),k=n(4),L=(n(87),n(6)),C=n(7),w=n(9),N=n(8),M=n(10),S=n(20),A=n(5),x=n.n(A),D=n(14),R=n(65),I=n.n(R),T=function(){return r.a.createElement("div",{className:"loading--div-container"},r.a.createElement("img",{className:"loading--img-loading",src:I.a,alt:"Loading..."}))},_=n(66),U=n.n(_),P=function(){return r.a.createElement("div",{className:"login--div-full"},r.a.createElement("div",{className:"login--div-container"},r.a.createElement("img",{className:"login--img-logo",src:U.a,alt:"Beans"}),r.a.createElement("span",{className:"login--span-title"},"Azuki"),r.a.createElement("span",{className:"login--span-intro"},"Login With"),r.a.createElement("a",{className:"login--a-provider",href:"/auth/google"},r.a.createElement("i",{className:"fab fa-google"})," ",r.a.createElement("span",{style:{color:"#4285F4"}},"G"),r.a.createElement("span",{style:{color:"#DB4437"}},"o"),r.a.createElement("span",{style:{color:"#F4B400"}},"o"),r.a.createElement("span",{style:{color:"#4285F4"}},"g"),r.a.createElement("span",{style:{color:"#0F9D58"}},"l"),r.a.createElement("span",{style:{color:"#DB4437"}},"e"))))},F=function(e){return r.a.createElement("div",{className:""},"NOTFOUND")},B=(n(90),n(21)),H=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).toggleMenu=function(){n.props.dispatch(Object(g.action)(!n.props.sidebar.isOpen))},n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return console.log("Header Rendered"),r.a.createElement("div",{className:"header--div-container"},r.a.createElement("div",{className:"header--div-left"},r.a.createElement("i",{className:"header--i-burger fa fa-bars",onClick:this.toggleMenu})),r.a.createElement("div",{className:"header--div-mid"},r.a.createElement(c.b,{to:"/"},r.a.createElement("h1",{className:"header--h1-title"},"A Z U K I"))),r.a.createElement("div",{className:"header--div-right"},r.a.createElement("img",{className:"header--img-profile",src:this.props.auth.img,alt:"profile"}),r.a.createElement("div",{className:"header--profile-name"}," ",this.props.auth.name.split(" ")[0]," "),r.a.createElement("a",{href:"/auth/logout"},"Logout")))}}]),t}(a.Component),J=Object(k.connect)(function(e){return{dispatch:e.dispatch,auth:e.auth,sidebar:e.sidebar}})(H),G=n(68),z=function(e){return r.a.createElement("div",{className:"sidebar--div-addListContainer"},r.a.createElement("button",{onClick:function(){return e.toggleModal()}},"Add New List"))},q=n(39),W=function(e){return r.a.createElement("div",{className:"list--div-container"},r.a.createElement("span",{className:"list--span-name"},e.item.name),r.a.createElement("div",{className:"list--div-buttonContainer"},r.a.createElement("button",{className:"fas fa-edit",onClick:function(){return e.onEdit()}}),r.a.createElement("button",{className:"fas fa-trash",onClick:function(){return e.onDelete()}})))},K=function(e,t){return function(){var n=Object(D.a)(x.a.mark(function n(a){return x.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a({type:p,payload:{modalName:e,data:t}});case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(D.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLOSE_MODAL"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Q=function(e){return fetch("/api/list/createList",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e})}).then(function(e){return e.ok?e.json():void 0})},V=function(e){return fetch("/api/list/reorderList",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():void 0})},X=function(e){return fetch("/api/list/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e})}).then(function(e){return e.ok?e.json():void 0})},Y=function(e){return function(){var t=Object(D.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Q(e).then(function(e){e&&n({type:h,data:e})}).catch(function(e){console.log(e)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},$=n(75),ee=function(e,t,n){var a=e.splice(t,1),r=Object($.a)(a,1)[0];return e.splice(n,0,r),e},te=n(69),ne=n.n(te),ae=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).updateListsOrder=function(e){if(e.destination){var t=ee(n.props.lists.keyOrder,e.source.index,e.destination.index);n.props.reorderList(t),n._reorderList(t)}},n._reorderList=ne()(function(e){V(e)},2e3),n.deleteList=function(e){n.props.openModal("deleteListModal",e)},n.editList=function(e){console.log("edit list "+e.id)},n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.lists!==this.props.lists}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(q.a,{onDragEnd:this.updateListsOrder},r.a.createElement(q.c,{droppableId:"droppableList"},function(t){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,className:"Droppable--div-listContainer"}),e.props.lists.keyOrder.map(function(t,n){return r.a.createElement(q.b,{key:t,index:n,draggableId:t},function(n){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),r.a.createElement(W,{item:e.props.lists.keyHash[t],onDelete:function(){return e.deleteList(e.props.lists.keyHash[t])},onEdit:function(){return e.editList(e.props.lists.keyHash[t])}}))})}),t.placeholder)})))}}]),t}(a.Component),re={openModal:K,reorderList:function(e){return function(){var t=Object(D.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:m,data:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},oe=Object(k.connect)(function(e){return{lists:e.lists}},re)(ae),ce=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).toggleAddModal=function(){n.props.openModal("addModal")},n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return console.log("Sidebar Rendered"),r.a.createElement("div",null,r.a.createElement(G.slide,{noOverlay:!0,isOpen:this.props.sidebar.isOpen,width:"300px",disableAutoFocus:!0,customCrossIcon:!1,customBurgerIcon:!1},r.a.createElement(z,{toggleModal:this.toggleAddModal}),r.a.createElement(oe,null)))}}]),t}(a.PureComponent),ie={openModal:K},se=Object(k.connect)(function(e){return{sidebar:e.sidebar}},ie)(ce),le=n(23),ue=n.n(le),de={overlay:{zIndex:"2000"},content:{top:"43%",bottom:"40%",left:"30%",right:"30%",borderRadius:"20px"}},pe={top:"10%",bottom:"auto",left:"10%",right:"10%",borderRadius:"20px"},me=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(D.a)(x.a.mark(function e(t){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(void 0===(a=n.refs.addListInput.value)||null===a||0===a.length||a.length>16)){e.next=4;break}return e.abrupt("return",B.b.error("Must be 1-16 character long."));case 4:return e.next=6,n.props.addNewList(a);case 6:B.b.success("".concat(a," has been added.")),n.props.closeModal();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return console.log("AddModal rendered"),r.a.createElement(ue.a,{isOpen:this.props.isOpen,onRequestClose:this.props.closeModal,shouldCloseOnOverlayClick:!0,style:window.screen.width>500?de:Object(s.a)({},de,{content:pe})},r.a.createElement("form",{className:"AddListModal--div-container",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("h1",null,"Enter the title of the new list:"),r.a.createElement("input",{type:"text",ref:"addListInput",autoFocus:!0}),r.a.createElement("div",{className:"AddListModal--div-buttonContainer"},r.a.createElement("button",{type:"button",onClick:function(){return e.props.closeModal()}},"Cancel"),r.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(a.PureComponent),fe={closeModal:Z,addNewList:Y},he=Object(k.connect)(null,fe)(me),be={overlay:{zIndex:"2000"},content:{top:"43%",bottom:"40%",left:"30%",right:"30%",borderRadius:"20px"}},ve={top:"43%",bottom:"auto",left:"10%",right:"10%",borderRadius:"20px"},Oe=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).onDelete=function(e){B.b.info("".concat(e," has been deleted")),n.props.onDelete(),n.props.closeModal()},n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(ue.a,{isOpen:this.props.isOpen,onRequestClose:this.props.closeModal,shouldCloseOnOverlayClick:!0,style:window.screen.width>500?be:Object(s.a)({},be,{content:ve})},r.a.createElement("div",{className:"deleteItem--div-container"},r.a.createElement("h1",null,"Are you sure you want to delete"),r.a.createElement("strong",null,this.props.data,"?"),r.a.createElement("div",{className:"deleteItem--div-button-container"},r.a.createElement("button",{onClick:function(){return e.onDelete(e.props.data)}},"Delete"),r.a.createElement("button",{onClick:this.props.closeModal},"Cancel"))))}}]),t}(a.PureComponent),Ee={closeModal:Z,addNewList:Y},ge=Object(k.connect)(null,Ee)(Oe),ye=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).closeModal=function(){n.props.closeModal()},n}return Object(M.a)(t,e),Object(C.a)(t,[{key:"shouldComponentUpdate",value:function(e){return Object.keys(e.modals).length!==Object.keys(this.props.modals).length}},{key:"render",value:function(){var e=this;return console.log("Modals Rendered"),this.props.modals.addModal?r.a.createElement(he,{isOpen:!0,closeModal:this.closeModal}):this.props.modals.deleteListModal?r.a.createElement(ge,{isOpen:!0,closeModal:this.closeModal,data:this.props.modals.data.name,onDelete:function(){return e.props.deleteList(e.props.modals.data.id)}}):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),je={closeModal:Z,deleteList:function(e){return function(){var t=Object(D.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",X(e).then(function(e){e&&n({type:b,data:e})}).catch(function(e){console.log(e)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},ke=Object(k.connect)(function(e){return{modals:e.modals,lists:e.lists}},je)(ye);ue.a.setAppElement("#root");var Le,Ce=function(e){function t(){return Object(L.a)(this,t),Object(w.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return console.log("App Rendered"),r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(J,null),r.a.createElement("div",{id:"outer-container"},r.a.createElement(se,null),r.a.createElement("div",{id:"page-wrap"},"test")),r.a.createElement(B.a,{autoClose:3e3,hideProgressBar:!0}))}}]),t}(a.Component),we=Object(k.connect)(function(e){return{auth:e.auth}},{})(Ce),Ne=function(e){function t(){return Object(L.a)(this,t),Object(w.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.getUserAndLists()}},{key:"render",value:function(){return console.log("Entry Rendered"),this.props.auth.isLoading?r.a.createElement(T,null):!this.props.auth.isLoading&&this.props.auth.id?r.a.createElement(we,null):this.props.auth.isLoading||this.props.auth.id?void 0:r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:P}),r.a.createElement(S.a,{component:F}))}}]),t}(a.Component),Me={getUserAndLists:function(){return function(){var e=Object(D.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/auth/currentUserAndList").then(function(e){if(e.ok)return e.json();throw new Error("Could not retrieve user.")}).then(function(e){e&&t({type:f,data:e.list}),delete e.list,t({type:d,data:e})}).catch(function(){t({type:u})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},Se=Object(k.connect)(function(e){return{auth:e.auth}},Me)(Ne),Ae=Object(i.e)(y,Le,Object(i.a)(j.a));Object(o.render)(r.a.createElement(k.Provider,{store:Ae},r.a.createElement(c.a,null,r.a.createElement(Se,null))),document.getElementById("root"))},65:function(e,t,n){e.exports=n.p+"static/media/loading.ec9b161c.gif"},66:function(e,t,n){e.exports=n.p+"static/media/bean.2ff32ac4.png"},76:function(e,t,n){e.exports=n(154)},87:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.0bdf8850.chunk.js.map