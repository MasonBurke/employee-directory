(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=a(12),c=a(13),o=a(16),d=a(15),m=a(14),u=a.n(m),h=function(){return u.a.get("https://randomuser.me/api/?results=42&nat=us")};var f=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:function(t){return e},name:"search",type:"text",className:"form-control",placeholder:"Search Employee",id:"search"})))};var p=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t&&void 0!==t.name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,l=e.phone,s=e.email,i=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,className:"img-responsive"}," ")),r.a.createElement("td",{"data-th":"Name",className:"align-middle"},a.first," ",a.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"}," ",l.cell),r.a.createElement("td",{"data-th":"Email",className:"align-middle"}," ",s),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"}," ",function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(i.date)))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"User not found")))};var E=function(e){var t=e.headings,a=e.users,n=e.handleSort;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name,a=e.width;return r.a.createElement("th",{key:t,style:{width:a},onClick:function(){n(t.toLowerCase())}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(p,{users:a})))},v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],filteredUsers:[{}],order:"descend"},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){var a=t.target.value,n=e.state.users.filter((function(e){return Object.values(e).join("").toLowerCase.indexOf(-1!==a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement(E,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort}))}}]),a}(n.Component);var g=function(){return r.a.createElement(v,null)};s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3123528f.chunk.js.map