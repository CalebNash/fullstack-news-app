(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{34:function(e,t,a){e.exports=a(46)},40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),i=a.n(r),o=(a(39),a(40),a(14)),s=a.n(o),c=a(19),u=a(24),m=a(6),h=a(7),d=a(3),p=a(9),f=a(8),g=a(48),b=a(49);function v(e){return l.a.createElement("div",{className:"list-group"},l.a.createElement("div",{className:"list-group-item preview"},l.a.createElement("section",{className:"preview-body"},l.a.createElement("h4",{className:"preview-title"},e.article.title),l.a.createElement("h5",{className:"preview-category"},e.article.category),l.a.createElement("div",{className:"preview-para"},l.a.createElement("p",{className:"todo-title"},e.article.body)),l.a.createElement("button",{className:"btn view-art",type:"button",onClick:function(){return e.handleModal(e.article.id)}},"View Article")),l.a.createElement("p",{className:"preview-author"},"By ",e.article.user)))}function E(e){return l.a.createElement("div",{className:"list-group"},l.a.createElement("div",{className:"list-group-item side-preview"},l.a.createElement("p",{className:"side-art-title"},e.article.title),l.a.createElement("section",{id:"side-art-foot"},l.a.createElement("p",{className:"side-art-author"},"by ",e.article.user),l.a.createElement("button",{className:"btn view-side-art",type:"button",onClick:function(){return e.handleModal(e.article.id)}},"View Article"))))}var y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={category:"Top Stories",show:!1,title:"",body:"",articleDisplay:{}},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleModal=n.handleModal.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){this.setState({category:e})}},{key:"handleModal",value:function(e){var t=this.props.articles.findIndex((function(t){return t.id===e}));this.setState({articleDisplay:this.props.articles[t]}),this.setState({show:!this.state.show})}},{key:"render",value:function(){var e,t,a=this,n=this.state.category;return"Top Stories"===n?(e=this.props.articles.filter((function(e){return e.top_story})).map((function(e){return l.a.createElement(v,{key:e.id,article:e,handleModal:a.handleModal})})),t=this.props.articles.filter((function(e){return!e.top_story})).map((function(e){return l.a.createElement(E,{key:e.id,article:e,handleModal:a.handleModal})}))):"Sports"===n?(e=this.props.articles.filter((function(e){return"sports"===e.category})).map((function(e){return l.a.createElement(v,{key:e.id,article:e,handleModal:a.handleModal})})),t=this.props.articles.filter((function(e){return"sports"!==e.category})).map((function(e){return l.a.createElement(E,{key:e.id,article:e,handleModal:a.handleModal})}))):"Food"===n?(e=this.props.articles.filter((function(e){return"food"===e.category})).map((function(e){return l.a.createElement(v,{key:e.id,article:e,handleModal:a.handleModal})})),t=this.props.articles.filter((function(e){return"food"!==e.category})).map((function(e){return l.a.createElement(E,{key:e.id,article:e,handleModal:a.handleModal})}))):"Travel"===n?(e=this.props.articles.filter((function(e){return"travel"===e.category})).map((function(e){return l.a.createElement(v,{key:e.id,article:e,handleModal:a.handleModal})})),t=this.props.articles.filter((function(e){return"travel"!==e.category})).map((function(e){return l.a.createElement(E,{key:e.id,article:e,handleModal:a.handleModal})}))):"Entertainment"===n&&(e=this.props.articles.filter((function(e){return"entertainment"===e.category})).map((function(e){return l.a.createElement(v,{key:e.id,article:e,handleModal:a.handleModal})})),t=this.props.articles.filter((function(e){return"entertainment"!==e.category})).map((function(e){return l.a.createElement(E,{key:e.id,article:e,handleModal:a.handleModal})}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row page-content"},l.a.createElement("div",{className:"col-lg-8 "},l.a.createElement("section",{id:"pages",className:"row"},l.a.createElement("button",{className:" btn",onClick:function(){return a.handleClick("Top Stories")}},"Top Stories"),l.a.createElement("button",{className:" btn",onClick:function(){return a.handleClick("Sports")}},"Sports"),l.a.createElement("button",{className:" btn",onClick:function(){return a.handleClick("Food")}},"Food"),l.a.createElement("button",{className:" btn",onClick:function(){return a.handleClick("Travel")}},"Travel"),l.a.createElement("button",{className:" btn",onClick:function(){return a.handleClick("Entertainment")}},"Entertainment")),l.a.createElement("h1",{className:"main-title"},this.state.category),e),l.a.createElement("div",{className:"col-lg-4 side"},l.a.createElement("h2",{className:"side-title"},"This week"),t)),l.a.createElement(g.a,{animation:!1,dialogClassName:"display-article-modal",show:this.state.show},l.a.createElement(g.a.Header,null,this.state.articleDisplay.title),l.a.createElement(g.a.Body,null,this.state.articleDisplay.body),l.a.createElement(g.a.Footer,null,l.a.createElement(b.a,{onClick:function(e){return a.setState({show:!1})}},"Close"))))}}]),a}(l.a.Component),k=a(33),C=a(16),N=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={title:"",body:"",category:"travel",status:"draft",user:"",top_story:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"col-12",onSubmit:function(t){return e.props.handleSubmit(t,e.state)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"body"},"Body"),l.a.createElement("textarea",{rows:"5",type:"text",className:"form-control",id:"body",name:"body",value:this.state.body,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"category"},"Category"),l.a.createElement("select",{id:"category",className:"form-control",name:"category",value:this.state.category,onChange:this.handleChange},l.a.createElement("option",null,"travel"),l.a.createElement("option",null,"sports"),l.a.createElement("option",null,"entertainment"),l.a.createElement("option",null,"food")),l.a.createElement("label",{htmlFor:"status"},"Post Status"),l.a.createElement("select",{id:"status",className:"form-control",name:"status",value:this.state.status,onChange:this.handleChange},l.a.createElement("option",null,"draft"),l.a.createElement("option",null,"submit"),l.a.createElement("option",null,"publish"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))}}]),a}(l.a.Component),S=a(10),w=a.n(S);function j(e){return l.a.createElement("div",{className:"list-group"},l.a.createElement("div",{className:"list-group-item preview"},l.a.createElement("h4",null,e.article.title),l.a.createElement("div",{className:"preview-para"},l.a.createElement("p",{className:"todo-title"},e.article.body)),l.a.createElement("button",{className:"btn view-art",type:"button",onClick:function(){return e.handleModal(e.article.id)}},"Edit Article")))}var O=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={displayStatus:"All Posts",show:!1,articleDisplay:{},title:"",body:"",category:"travel",status:"draft",user:"",top_story:!1,articles:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleModal=n.handleModal.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.deleteArticle=n.deleteArticle.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("is_staff");console.log("is_staff",t),"false"===t?fetch("/api/v1/articles/user-view").then((function(e){return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){return console.log("Error: ",e)})):fetch("/api/v1/articles/super-user-view").then((function(e){return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){return console.log("Error: ",e)}))}},{key:"handleClick",value:function(e){this.setState({displayStatus:e})}},{key:"handleModal",value:function(e){var t=this.state.articles.findIndex((function(t){return t.id===e}));this.setState({articleDisplay:this.state.articles[t]}),this.setState({show:!this.state.show})}},{key:"handleChange",value:function(e){var t=Object(k.a)({},this.state.articleDisplay);t[e.target.name]=e.target.value,this.setState({articleDisplay:t})}},{key:"deleteArticle",value:function(e){var t,a=this,n=w.a.get("csrftoken");t="true"===localStorage.getItem("is_staff")?"/api/v1/articles/super-user-view/".concat(e,"/"):"/api/v1/articles/user-view/delete/".concat(e,"/"),fetch(t,{method:"DELETE",headers:{"X-CSRFToken":n}}).then((function(e){return e})).then((function(t){var n=Object(u.a)(a.state.articles),l=n.findIndex((function(t){return t.id===e}));n.splice(l,1),a.setState({articles:n})})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){var e,t=this,a=localStorage.getItem("is_staff"),n=this.state.displayStatus;return"All Posts"===n?e=this.state.articles.map((function(e){return l.a.createElement(j,{key:e.id,article:e,handleModal:t.handleModal})})):"Drafts"===n?e=this.state.articles.filter((function(e){return"draft"===e.status})).map((function(e){return l.a.createElement(j,{key:e.id,article:e,handleModal:t.handleModal})})):"Submited"===n?e=this.state.articles.filter((function(e){return"submit"===e.status})).map((function(e){return l.a.createElement(j,{key:e.id,article:e,handleModal:t.handleModal})})):"Published"===n?e=this.state.articles.filter((function(e){return"publish"===e.status})).map((function(e){return l.a.createElement(j,{key:e.id,article:e,handleModal:t.handleModal})})):"Declined"===n?e=this.state.articles.filter((function(e){return"declined"===e.status})).map((function(e){return l.a.createElement(j,{key:e.id,article:e,handleModal:t.handleModal})})):"Add Post"===n&&(e=l.a.createElement(N,{handleSubmit:this.props.handleSubmit})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row posts-page"},l.a.createElement("div",{className:"col-8"},l.a.createElement("section",{id:"pages",className:"row"},l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("All Posts")}},"All Posts"),l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("Drafts")}},"Drafts"),l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("Submited")}},"Submited"),l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("Published")}},"Published"),l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("Declined")}},"Declined"),l.a.createElement("button",{className:" btn",onClick:function(){return t.handleClick("Add Post")}},"Add Post")),l.a.createElement("h1",{className:"posts-title"},this.state.displayStatus),e)),l.a.createElement(g.a,{animation:!1,show:this.state.show},l.a.createElement(g.a.Header,null,this.state.articleDisplay.title),l.a.createElement(g.a.Body,null,l.a.createElement("form",{className:"col-12",onSubmit:function(e){return t.props.editArticle(e,t.state.articleDisplay,t.state.articleDisplay.id)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:this.state.articleDisplay.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"body"},"Body"),l.a.createElement("textarea",{rows:"5",type:"text",className:"form-control",id:"body",name:"body",value:this.state.articleDisplay.body,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"category"},"Category"),l.a.createElement("select",{id:"category",className:"form-control",name:"category",value:this.state.articleDisplay.category,onChange:this.handleChange},l.a.createElement("option",null,"travel"),l.a.createElement("option",null,"sports"),l.a.createElement("option",null,"entertainment"),l.a.createElement("option",null,"food")),l.a.createElement("label",{htmlFor:"status"},"Post Status"),"true"===a?l.a.createElement("select",{id:"status",className:"form-control",name:"status",value:this.state.articleDisplay.status,onChange:this.handleChange},l.a.createElement("option",null,"draft"),l.a.createElement("option",null,"submit"),l.a.createElement("option",null,"publish"),l.a.createElement("option",null,"decline")):l.a.createElement("select",{id:"status",className:"form-control",name:"status",value:this.state.articleDisplay.status,onChange:this.handleChange},l.a.createElement("option",null,"draft"),l.a.createElement("option",null,"submit"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))),l.a.createElement(g.a.Footer,null,l.a.createElement(b.a,{onClick:function(){return t.deleteArticle(t.state.articleDisplay.id)}},"Delete"),l.a.createElement(b.a,{onClick:function(e){return t.setState({show:!1})}},"Close"))))}}]),a}(l.a.Component),M=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Register"),l.a.createElement("form",{className:"col-4",onSubmit:function(t){return e.props.handleRegistration(t,e.state)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"username"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"email"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"password1"),l.a.createElement("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"password2"),l.a.createElement("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.title,onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))}}]),a}(l.a.Component),D=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",register:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("form",{className:"col-4",onSubmit:function(t){return e.props.handleLogin(t,e.state,e.state.register)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"username"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"email"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"password"),l.a.createElement("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.title,onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e.setState({register:!0})}},"Register")))}}]),a}(l.a.Component),F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={image:null,preview:"",profile:{}},n.addImage=n.addImage.bind(Object(d.a)(n)),n.handleImage=n.handleImage.bind(Object(d.a)(n)),n.logImg=n.logImg.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/profile/").then((function(e){return e.json()})).then((function(t){return e.setState({profile:t})})).catch((function(e){return console.log("Error: ",e)}))}},{key:"addImage",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,l,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("avatar",this.state.image),console.log(a),n={method:"POST",headers:{"X-CSRFToken":w.a.get("csrftoken")},body:a},l=function(e){return console.warn(e)},e.next=8,fetch("/api/v1/profile/",n);case 8:return r=e.sent,e.next=11,r.json().catch(l);case 11:i=e.sent,console.log(i);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,a=e.target.files[0];this.setState({image:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"logImg",value:function(){console.log(this.state.profile)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.logImg},"print"),l.a.createElement("form",{className:"col-12",onSubmit:this.addImage},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"avatar"},"Add picture"),l.a.createElement("input",{type:"file",id:"avatar",name:"avatar",onChange:this.handleImage}),l.a.createElement("img",{src:this.state.preview,alt:""})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Profile")))}}]),a}(l.a.Component),T=(a(45),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={articles:[],page:"home",loggedIn:!!w.a.get("Authorization")},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.editArticle=n.editArticle.bind(Object(d.a)(n)),n.handleRegistration=n.handleRegistration.bind(Object(d.a)(n)),n.handleLogin=n.handleLogin.bind(Object(d.a)(n)),n.handleLogout=n.handleLogout.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/articles/").then((function(e){return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){return console.log("Error: ",e)}))}},{key:"handleSubmit",value:function(e,t){var a=this;e.preventDefault();var n=w.a.get("csrftoken");console.log("data",t),fetch("/api/v1/articles/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.log("firing",e);var t=[].concat(Object(u.a)(a.state.articles),[e]);a.setState({articles:t})})).catch((function(e){console.error("Error:",e)}))}},{key:"editArticle",value:function(e,t,a){var n;e.preventDefault(),n="true"===localStorage.getItem("is_staff")?"/api/v1/articles/super-user-view/".concat(a,"/"):"/api/v1/articles/user-view/".concat(a,"/");var l=w.a.get("csrftoken");fetch(n,{method:"PUT",headers:{"X-CSRFToken":l,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("Error:",e)}))}},{key:"handleClick",value:function(e){this.setState({page:e})}},{key:"handleRegistration",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,l,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":w.a.get("csrftoken")},body:JSON.stringify(a)},l=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",n);case 5:return r=e.sent,e.next=8,r.json().catch(l);case 8:(i=e.sent).key&&(w.a.set("Authorization","Token ".concat(i.key)),this.setState({page:"posts"}),this.setState({loggedIN:!0}));case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a,n){var l,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n){e.next=5;break}this.setState({page:"register"}),e.next=14;break;case 5:return l={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":w.a.get("csrftoken")},body:JSON.stringify(a)},r=function(e){return console.warn(e)},e.next=9,fetch("/api/v1/rest-auth/login/",l);case 9:return i=e.sent,e.next=12,i.json().catch(r);case 12:(o=e.sent).key&&(w.a.set("Authorization","Token ".concat(o.key)),this.setState({loggedIn:!0}),localStorage.setItem("is_staff",o.is_staff),this.setState({page:"posts"}),console.log(o.is_staff),console.log(localStorage.getItem("is_staff")));case 14:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":w.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/logout/",a);case 5:return l=e.sent,e.next=8,l.json().catch(n);case 8:"Successfully logged out."===e.sent.detail&&(w.a.remove("Authorization"),this.setState({page:"home"}),this.setState({loggedIn:!1}),localStorage.removeItem("is_staff"));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=this.state.page;return"home"===a?e=l.a.createElement(y,{articles:this.state.articles}):"posts"===a?e=l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{deleteArticle:this.deleteArticle,editArticle:this.editArticle,handleLogout:this.handleLogout,handleSubmit:this.handleSubmit}),l.a.createElement(F,null)):"register"===a?e=l.a.createElement(M,{handleRegistration:this.handleRegistration}):"login"===a&&(e=l.a.createElement(D,{handleLogin:this.handleLogin})),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-dark"},l.a.createElement("div",{className:"pages"},l.a.createElement("div",{className:"nav-buttons"},l.a.createElement("button",{className:"btn  menu-button",type:"button",onClick:function(){return t.handleClick("home")}},"Home")),this.state.loggedIn?l.a.createElement("div",{className:"log-status"},l.a.createElement("button",{className:"btn  menu-button",type:"button",onClick:function(){return t.handleClick("posts")}},"Posts"),l.a.createElement("button",{className:"btn  menu-button",type:"button",onClick:this.handleLogout},"Logout")):l.a.createElement("div",{className:"log-status"},l.a.createElement("button",{className:"btn  menu-button",type:"button",onClick:function(){return t.handleClick("login")}},"Login")))),l.a.createElement("div",{className:"page-title"},l.a.createElement("h1",null,"Fake News")),l.a.createElement("div",{className:"container fullpage"},e))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.68642eb9.chunk.js.map