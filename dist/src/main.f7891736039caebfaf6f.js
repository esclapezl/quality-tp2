(()=>{"use strict";var n,e={2:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,".listbots{overflow:auto;height:90vh}.messages{height:86vh;overflow:auto}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var v=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==v)e[v].references++,e[v].updater(f);else{var p=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,i(r.key),r)}}function i(n){var e=function(n){if("object"!=a(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=a(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==a(e)?e:e+""}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;const s=(n=new WeakMap,function(){return e=function e(t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e,t){(function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")})(n,e),e.set(n,t)}(this,n,void 0);var r=t.id,a=t.name,o=t.avatar,i=t.actions;this.id=r,this.name=a,this.avatar=o,this.actions=i,this.countMsg=0},(t=[{key:"findActionByKeyWord",value:function(n){var e=this,t=[];return this.actions.forEach((function(r){var a=r.words,o=r.response;a.includes(n)&&(t.push(o()),e.countMsg+=1)})),t}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}());function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,u(r.key),r)}}function u(n){var e=function(n){if("object"!=c(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==c(e)?e:e+""}const d=function(){return n=function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.user={id:"63a46b9f7d9a54e66721738c",name:"Cyril",avatar:"https://media.licdn.com/dms/image/C5603AQFB2qvfRVtynQ/profile-displayphoto-shrink_800_800/0/1540912243495?e=2147483647&v=beta&t=QyfyPNp25FzUxL7okO5zlIlqAXJWf8GADHsZp0ByPGI"},this.bots=e.map((function(n){return new s(n)})),this.el=document.querySelector("body")},e=[{key:"renderNav",value:function(){return'\n      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n        <div class="container-fluid">\n          <a class="navbar-brand" href="#">Navbar</a>\n          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n          </button>\n          <div class="collapse navbar-collapse" id="navbarNav">\n            <ul class="navbar-nav">\n              <li class="nav-item">\n                <a class="nav-link active" aria-current="page" href="#">Home</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" href="#">Features</a>\n              </li>\n              '.concat("coach"===this.user.role?'\n      <li class="nav-item">\n        <a class="nav-link" href="#">Admin</a>\n      </li>\n    ':"","\n            </ul>\n          </div>\n        </div>\n      </nav>\n    ")}},{key:"renderListBots",value:function(){var n=this;return'\n      <ul class="listbots list-group list-group-flush">\n        '.concat(this.bots.map((function(e){return n.renderBot(e)})).join(""),"\n      </ul>\n    ")}},{key:"renderBot",value:function(n){var e=n.id,t=n.name,r=n.avatar,a=n.countMsg;return'\n      <li id="'.concat(e,'" class="list-group-item d-flex justify-content-between align-items-center">\n        <img\n          width="80"\n          src="').concat(r,'"\n          class="img-thumbnail rounded-circle"\n          alt="bot"\n        >\n        ').concat(t,'\n        <span class="badge bg-primary rounded-pill">').concat(a,"</span>\n      </li>\n    ")}},{key:"renderMessageSended",value:function(n){var e=this.user,t=e.name,r=e.avatar;return'\n      <div class="row mb-2">\n        <div class="col-6">\n        </div>\n        <div class="col-6">\n          <div class="card">\n            <div class="card-header">\n              <img\n                width="40"\n                src="'.concat(r,'"\n                class="border border-dark rounded-circle"\n                alt="bot"\n              >\n              ').concat(t,'\n            </div>\n            <div class="card-body">\n              <p class="card-text">').concat(n,"</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ")}},{key:"renderMessageReceived",value:function(n){var e=n.name,t=n.avatar,r=n.text;return'\n      <div class="row mb-2">\n        <div class="col-6">\n          <div class="card">\n            <div class="card-header">\n              <img\n                width="40"\n                src="'.concat(t,'"\n                class="border border-dark rounded-circle"\n                alt="bot"\n              >\n              ').concat(e,'\n            </div>\n            <div class="card-body">\n              <p class="card-text">').concat(r,'</p>\n            </div>\n          </div>\n        </div>\n        <div class="col-6"></div>\n      </div>\n    ')}},{key:"renderTypingMessage",value:function(){return'\n      <div class="input-group mb-3">\n        <input type="text" class="form-control" placeholder="ecrivez votre message">\n        <button class="btn btn-outline-primary" type="button">Send</button>\n      </div>\n    '}},{key:"botsMessages",value:function(n){var e=this,t=[];return this.bots.forEach((function(r){var a=r.findActionByKeyWord(n);if(a.length){var o=r.name,i=r.avatar;a.forEach((function(n){t.push({name:o,type:"bot",avatar:i,text:n})})),e.refreshCounterMessages()}})),t}},{key:"refreshCounterMessages",value:function(){this.bots.forEach((function(n){var e=n.id,t=n.countMsg;document.querySelector("#".concat(e," span")).textContent=t}))}},{key:"onClickSendMessage",value:function(){var n=this,e=document.querySelector(".messages"),t=document.querySelector("input");t.addEventListener("keyup",(function(r){if(13===r.keyCode){var a=t.value;e.innerHTML+=n.renderMessageSended(a),t.value="";var o=n.botsMessages(a).map((function(e){return n.renderMessageReceived(e)}));e.innerHTML+=o.join("")}}))}},{key:"render",value:function(){return'\n      <div class="container-fluid">\n        \x3c!-- Navigation --\x3e\n        <div class="row">\n          '.concat(this.renderNav(),'\n        </div>\n        \x3c!-- Tchat --\x3e\n        <div class="row">\n          \x3c!-- List bot --\x3e\n          <div class="col-3 mt-3">\n            ').concat(this.renderListBots(),'\n          </div>\n          \x3c!-- Messages --\x3e\n          <div class="col-9 mt-4">\n            \x3c!-- message envoyé --\x3e\n            <div class="messages"></div>\n            \x3c!-- Typing --\x3e\n            <div class="row">\n              ').concat(this.renderTypingMessage(),"\n            </div>\n          </div>\n        </div>\n      </div>\n    ")}},{key:"run",value:function(){this.el.innerHTML=this.render(),this.onClickSendMessage()}}],e&&l(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,e}();var v=r(72),f=r.n(v),p=r(825),m=r.n(p),h=r(659),y=r.n(h),b=r(56),g=r.n(b),w=r(540),x=r.n(w),S=r(113),M=r.n(S),k=r(2),T={};T.styleTagTransform=M(),T.setAttributes=g(),T.insert=y().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=x(),f()(k.A,T),k.A&&k.A.locals&&k.A.locals,new d([{id:"bot1",name:"Spiderman",avatar:"https://media.wired.com/photos/59271340ac01987bf0138709/1:1/w_200,h_200,c_limit/SpiderMan.jpg",actions:[{name:"hello",words:["hello","bonjour"],response:function(){return"hello user !"}},{name:"hello2",words:["hello","bonjour"],response:function(){return"hello toto !"}},{name:"time",words:["time","heure"],response:function(){return(new Date).toISOString()}}]},{id:"bot2",name:"Wonder Woman",avatar:"https://avatarfiles.alphacoders.com/249/thumb-249760.jpg",actions:[{name:"time",words:["time","heure"],response:function(){return(new Date).toISOString()}},{name:"radom",words:["random"],response:function(){return 30*Math.random()}}]}]).run()})();