(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(21),l=a.n(s),c=(a(29),a(14)),r=a(3),i=a(4),u=a(6),m=a(5),d=a(7),g=a(11),h=(a(30),a(9)),p=(a(31),function(e){return o.a.createElement("header",{className:"header"},o.a.createElement(h.b,{to:"/",exact:"true",className:"header-link"},o.a.createElement("h1",null,"Chat-RSS")),o.a.createElement("div",null,o.a.createElement(h.b,{to:"/auth",exact:"false",className:"header-button-link"},o.a.createElement("button",{onClick:e.closeConnection,className:"header-button"},e.log)),o.a.createElement(h.b,{to:"/registration",exact:"false",className:"header-button-link"},o.a.createElement("button",{onClick:function(e){return e.target.blur()},className:"header-button"},"Registration"))))}),f=(a(36),function(){return o.a.createElement("footer",{className:"footer"},"created by Evgeniy Yakimchuk")}),b=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{log:e.log,closeConnection:e.closeConnection}),e.children,o.a.createElement(f,null))},E=(a(37),function(e){function t(e){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Hello mounted")}},{key:"render",value:function(){return this.props.loggedIn?o.a.createElement(g.a,{to:"/chat-window"}):o.a.createElement("main",{className:"main"},o.a.createElement("h2",null,"Welcome to RSS-Chat"),o.a.createElement("p",null,"You can go to registration or the login form."))}}]),t}(o.a.Component)),w=(a(38),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleUpdateLogin=function(e){a.setState({loginValue:e.target.value})},a.handleUpdatePassword=function(e){a.setState({passwordValue:e.target.value})},a.ctrlForm=function(e){e.preventDefault()},a.state={loginValue:"",passwordValue:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.logIn;return t.loggedIn?o.a.createElement(g.a,{to:"/chat-window"}):o.a.createElement("main",{className:"main"},o.a.createElement("h2",{className:"auth-header"},"Authentification"),o.a.createElement("p",{className:"auth-text"},"This is test authentification page! You don't need to enter login and password."),o.a.createElement("form",{className:"auth-form",onSubmit:this.ctrlForm},o.a.createElement("label",{className:"input",htmlFor:"login"},"Login:",o.a.createElement("input",{id:"login",type:"text",className:"input-field",value:this.state.loginValue,onChange:this.handleUpdateLogin})),o.a.createElement("label",{className:"input",htmlFor:"password"},"Password:",o.a.createElement("input",{id:"password",type:"password",className:"input-field",value:this.state.loginPassword,onChange:this.handleUpdatePassword})),o.a.createElement(h.b,{to:"/chat-window",exact:"false",className:"auth-button"},o.a.createElement("button",{className:"auth-btn",onClick:function(){return a(e.state.loginValue,e.state.passwordValue)}},"Entry"))))}}]),t}(n.Component)),v=function(){return o.a.createElement("main",{className:"main"},o.a.createElement("h2",null,"Registration"))},O=(a(39),a(40),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).sendValue=function(e){e.target.blur();var t=a.props.sendMessage;a.textArea.value.trim()?(t(),a.textArea.value=""):a.textArea.value=""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.handleInputValue;return o.a.createElement("div",{className:"send-message"},o.a.createElement("textarea",{className:"send-message-field",id:"messageField",cols:"30",rows:"10",onChange:t,ref:function(t){return e.textArea=t}}),o.a.createElement("button",{onClick:this.sendValue,className:"send-message-button"},"Send"))}}]),t}(n.Component)),j=(a(41),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(e){var t=e.target,n=t.scrollHeight-t.clientHeight;t.scrollTop<n?a.setState({className:"button-down button-down-show"}):a.setState({className:"button-down"})},a.scrollDown=function(){a.props.messagesWindow.scrollTo({top:a.props.messagesWindow.scrollHeight,behavior:"smooth"})},a.state={className:"button-down"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.messagesWindow.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.className,onClick:this.scrollDown},o.a.createElement("i",{className:"fas fa-level-down-alt"}))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).elem=null,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.scrollDown(this.elem)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.scrollDown(this.elem)}},{key:"render",value:function(){var e=this,t=this.props,a=t.loggedIn,n=t.data,s=t.sendMessage,l=t.handleInputValue;return!1===a?o.a.createElement(g.a,{to:"/auth"}):o.a.createElement("main",null,"Chat Window",o.a.createElement("div",{className:"main-content-messages",ref:function(t){return e.elem=t}},n.map(function(e,t){return o.a.createElement("div",{className:"message-card",key:t},o.a.createElement("h3",{className:"message-card-name"},"Name: ",e.from),o.a.createElement("p",{className:"message-card-text"},e.message),o.a.createElement("div",{className:"message-date"},o.a.createElement("p",null,"Time: ".concat(new Date(e.time).getHours(),":").concat(new Date(e.time).getMinutes(),":").concat(new Date(e.time).getSeconds())),o.a.createElement("p",null,"Date: ".concat(new Date(e.time).getDate(),".").concat(new Date(e.time).getMonth()+1,".").concat(new Date(e.time).getFullYear()))))}),o.a.createElement(j,{messagesWindow:this.elem})),o.a.createElement(O,{sendMessage:s,handleInputValue:l}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).downloadLocalStorage=function(){var e=localStorage.getItem("activeUser");if(e){var t=JSON.parse(localStorage.getItem(e));a.setState(t),a.openConnection(),a.setSoketHandlers()}else console.log("localstorage is empty")},a.openConnection=function(){try{a.soket=new WebSocket("ws://st-chat.shas.tel")}catch(e){alert("chat uses the websocket connection that is not used this hosting"),console.log("Error",e)}},a.setSoketHandlers=function(){a.soket.onopen=a.handleOpenConnection,a.soket.onclose=a.handleCloseConnection,a.soket.onmessage=a.handleData,a.soket.onerror=a.soketError},a.handleOpenConnection=function(){console.log("open connection")},a.handleCloseConnection=function(e){a.setState(Object.assign({},a.state,{data:[]}))},a.closeConnection=function(e){e.target.blur(),!0===a.state.loggedIn&&(a.setState(Object.assign({},a.state,{loggedIn:!1,log:"Log In"})),a.soket.close(),localStorage.clear())},a.handleData=function(e){var t=JSON.parse(e.data);if(t.length>1){var n=a.sortInputData(t);a.setState(Object.assign({},a.state,{data:[].concat(Object(c.a)(a.state.data),Object(c.a)(n))}))}else a.setState(Object.assign({},a.state,{data:[].concat(Object(c.a)(a.state.data),Object(c.a)(JSON.parse(e.data)))}))},a.sortInputData=function(e){var t=e.filter(function(e){return!!a.state.data.length&&(e.time>a.state.data[a.state.data.length-1].time||void 0)});return t.length?t.sort(function(e,t){return e.time-t.time}):e.sort(function(e,t){return e.time-t.time})},a.soketError=function(){console.log("error in connection")},a.sendMessage=function(){a.soket.send(JSON.stringify({from:"Test-User",message:a.state.inputValue}))},a.handleInputValue=function(e){a.setState(Object.assign({},a.state,{inputValue:e.target.value}))},a.logIn=function(e,t){""===e&&""===t?(a.openConnection(),a.setSoketHandlers(),setTimeout(function(){a.setState(Object.assign({},a.state,{user:"Evgen"}))},0),!1===a.state.loggedIn&&a.setState(Object.assign({},a.state,{loggedIn:!0,log:"Log Out"}))):console.log("error")},a.scrollDown=function(e){e&&e.scrollTo(0,e.scrollHeight)},a.soket=null,a.state={user:"",loggedIn:!1,log:"Log In",data:[],inputValue:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.downloadLocalStorage(),window.addEventListener("unload",function(){e.state.loggedIn&&(localStorage.setItem("activeUser",e.state.user),localStorage.setItem(e.state.user,JSON.stringify(e.state)))})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(b,{log:this.state.log,closeConnection:this.closeConnection},o.a.createElement(g.d,null,o.a.createElement(g.b,{path:"/auth",render:function(){return o.a.createElement(w,{loggedIn:e.state.loggedIn,logIn:e.logIn})}}),o.a.createElement(g.b,{path:"/registration",component:v}),o.a.createElement(g.b,{path:"/chat-window",render:function(){return o.a.createElement(k,{scrollDown:e.scrollDown,data:e.state.data,sendMessage:e.sendMessage,loggedIn:e.state.loggedIn,handleInputValue:e.handleInputValue})}}),o.a.createElement(g.b,{path:"/",component:function(){return o.a.createElement(E,{loggedIn:e.state.loggedIn})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=o.a.createElement(h.a,null,o.a.createElement(N,null));l.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.dc7e24ce.chunk.js.map