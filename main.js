(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(636),t.b),l=a()(o()),u=s()(d);l.push([e.id,`* {\n    padding: 0;\n    margin: 0;\n    border: none;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nhtml {\n    font-size: clamp(8px, 12px, 2vw);\n}\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: lightgray;\n    min-height: 100svh;\n}\n\nheader {\n    height: 25rem;\n    width: 100%;\n    background-image: url(${u});\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border-bottom: 4px solid black;\n}\nheader > h1 {\n    font-size: 8rem;\n    color: yellow;\n    text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000;\n}\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\nnav > button {\n    width:10rem;\n    height: 4rem;\n    font-size: 1.8rem;\n    border: 3px solid black;\n    background-color: white;\n}\nnav > button:hover {\n    background-color: rgb(223, 223, 223);\n}\n.selected {\n    border: 4px solid red;\n}\n\n#content {\n    width: 70%;\n    min-height: calc(100svh - 25rem);\n    background-color: yellow;\n}\n\n.home-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10rem 1rem;\n    gap: 4rem;\n    box-sizing: border-box;\n}\n.home-img-container {\n    width: 65%;\n    border: 4px solid black;\n    line-height: 0;\n}  \n.home-img-container > img {\n    width: 100%;\n    height: auto;\n}\n.home-container > h1 {\n    font-size: 4rem;\n    margin-top: -1rem;\n    text-align: center;\n}\n.home-text {\n    width: 70%;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.menu-container {\n    width: 100%;\n    padding: 8rem 6rem;\n    box-sizing: border-box;\n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n    grid-template-rows: auto;\n}\n.items {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 4rem;\n    aspect-ratio: 1 / 1;\n}\n.items img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    border: 2px solid white;\n}\n.items p {\n    font-size: medium;\n}\n.items p:hover {\n    text-decoration: underline;\n    color: blue;\n}\n\n.contact-container {\n    padding: 8rem 6rem;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n    flex-wrap: wrap;\n}\n#contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    flex: 3;\n    padding-left: 2rem;\n}\n.question {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n}\nform h1 {\n    font-size: 2.5rem;\n}\nform label {\n    font-size: 1.6rem;\n}\nform input,\nform textarea {\n    border: 2px solid black;\n    border-radius: 5px;\n    font-size: 1.5rem;\n    padding: 1rem;\n    outline: none;\n    width: 100%;\n    box-sizing: border-box;\n}\nform input:focus:invalid,\nform textarea:valid {\n    border: 2px solid red;\n    border-radius: 5px;\n    outline: none;\n}\nform input:focus:valid,\nform textarea:valid {\n    border: 2px solid green;\n    border-radius: 5px;\n    outline: none;\n}\n#submit {\n    padding: 1rem 0;\n    max-width: 14rem;\n    min-width: 10rem;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1.4rem;\n}\n\n.socials {\n    display: grid;\n    grid-template-columns: 14rem 14rem;\n    grid-template-rows: 14rem 14rem;\n    gap: 1.5rem;\n    flex: 2;\n}\n.social-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n}\n.social-item img {\n    width: 10rem;\n    height: 10rem;\n    border: 2px solid white;\n}\n.social-item p {\n    font-size: 1.2rem;\n}`,""]);const m=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},636:(e,n,t)=>{e.exports=t.p+"fc83f24cb58515169140.webp"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),u=t(113),m=t.n(u),p=t(365),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(p.A,f),p.A&&p.A.locals&&p.A.locals;const h=document.querySelector("#content"),g=document.querySelector("#home-btn"),x=document.querySelector("#order-btn"),b=document.querySelector("#contact-btn");function v(){g.classList.remove("selected"),x.classList.remove("selected"),b.classList.remove("selected"),h.innerHTML=""}g.addEventListener("click",(()=>{v(),g.classList.add("selected"),function(){const e=document.createElement("div");e.classList.add("home-container"),content.appendChild(e);const n=document.createElement("div");n.classList.add("home-img-container");const t=document.createElement("img");t.src="./../images/home-burger.jpg",t.alt="Photo of a burger with a height equivalent to two full sized burgers",n.appendChild(t);const r=document.createElement("h1");r.textContent="Eat Healthy, Be Healthy";const o=document.createElement("p");o.classList.add("home-text"),o.textContent="Here at FOOD, we only serve the best and healthiest meals. We are renouned for our 100% vegan and non-dairy dishes that everyone is sure to enjoy!",e.append(n,r,o)}()})),x.addEventListener("click",(()=>{v(),x.classList.add("selected"),function(){const e=document.createElement("div");function n(n,t){const r=document.createElement("div");r.classList.add("items"),e.appendChild(r);const o=document.createElement("img");o.src=`${n}`,o.alt=`Photo of ${t}`,r.appendChild(o);const i=document.createElement("p");i.textContent=t,r.appendChild(i)}e.classList.add("menu-container"),content.appendChild(e),n("","Water"),n("","Pea on Plate"),n("","MEAT MEAT"),n("","Vegan air"),n("","Leafy Meat"),n("","200-story Burger Deluxe")}()})),b.addEventListener("click",(()=>{v(),b.classList.add("selected")})),function(){const e=document.querySelector("header"),n=document.createElement("h1");n.textContent="FOOD",e.prepend(n)}()})()})();