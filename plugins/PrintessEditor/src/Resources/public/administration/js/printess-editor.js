(function(){var e,t,n,r,i,s={262:function(){},918:function(e,t,n){var r=n(262);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("ef9f5008",r,!0,{})},346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],a=s[0],o={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(o):n.push(r[a]={id:a,parts:[o]})}return n}n.d(t,{Z:function(){return f}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,d=0,l=!1,u=function(){},p=null,c="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,i){l=n,p=i||{};var a=r(e,t);return h(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=s[a[i].id];o.refs--,n.push(o)}t?h(a=r(e,t)):a=[];for(var i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var d=0;d<o.parts.length;d++)o.parts[d]();delete s[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+c+'~="'+e.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(m){var i=d++;t=S.bind(null,r=o||(o=v()),i,!1),n=S.bind(null,r,i,!0)}else t=w.bind(null,r=v()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function S(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function w(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(c,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return s[e](n,n.exports,o),n.exports}o.m=s,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(t,n){return o.f[n](e,t),t},[]))},o.u=function(e){return"static/js/c434d8c1c2ed27421e55.js"},o.miniCssF=function(e){return"static/css/printess-editor.css"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="administration:",o.l=function(n,r,i,s){if(e[n]){e[n].push(r);return}if(void 0!==i)for(var a,d,l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+i){a=p;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var c=function(t,r){a.onerror=a.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach(function(e){return e(r)}),t)return t(r)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="bundles/printesseditor/",n={288:0},o.f.j=function(e,t){var r=o.o(n,e)?n[e]:void 0;if(0!==r){if(r)t.push(r[2]);else{var i=new Promise(function(t,i){r=n[e]=[t,i]});t.push(r[2]=i);var s=o.p+o.u(e),a=Error();o.l(s,function(t){if(o.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}},"chunk-"+e,e)}}},r=function(e,t){var r,i,s=t[0],a=t[1],d=t[2],l=0;if(s.some(function(e){return 0!==n[e]})){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);d&&d(o)}for(e&&e(t);l<s.length;l++)i=s[l],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0},(i=window["webpackJsonpPluginprintess-editor"]=window["webpackJsonpPluginprintess-editor"]||[]).forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i)),window?.__sw__?.assetPath&&(o.p=window.__sw__.assetPath+"/bundles/printesseditor/"),function(){"use strict";o(918);let{mapState:e}=Shopware.Component.getComponentHelper();Shopware.Component.override("sw-order-detail-general",{template:'{% block sw_order_detail_general_info_card %}\n  {% parent %}\n\n  <sw-card v-if="personalizedItems.length > 0" class="sw-order-detail-general__printess-items-card" position-identifier="sw-order-detail-general-printess-items" :title="$tc(\'PrintessEditor.adminOrder.personalizedItems\')">\n  \n\n  <ul id="printessPrintResults" v-for="item in personalizedItems" class="printess-line-items">\n    <li class="line-item" :id="\'printessResult\' + item.id">\n      <div class="thumbnail master">\n        <img :src="item.payload._printessThumbnailUrl">\n      </div>\n      <div class="detail">\n        <div class="save-token">\n          <span class="label">{{ $tc(\'PrintessEditor.adminOrder.saveToken\') }}</span>\n          <a target="_blank" :href="\'https://editor.printess.com/?name=\' + item.payload._printessSaveToken"><span>{{ item.payload._printessSaveToken }}</span></a>\n        </div>\n        <div class="print-status">\n          <span class="label">{{ $tc(\'PrintessEditor.adminOrder.printStatus\') }}</span>\n          <span class="value">{{ $tc(\'PrintessEditor.adminOrder.loadingPrintStatus\') }}</span>\n        </div>\n      </div>\n    </li>\n  </ul>\n  </sw-card>\n{% endblock %}',createdComponent:function(){this.$super("createdComponent"),console.log("Printess Component Loaded")},inject:["printessAdminOrderService"],computed:{...e("swOrderDetail",["order"]),personalizedItems(){let e=[];return this.order.lineItems.forEach(t=>{t&&t.payload&&t.payload.hasOwnProperty("_printessSaveToken")&&t.payload._printessSaveToken&&e.push(t)}),this.printessAdminOrderService.getOrderPrintStatus(this.order.id).then(e=>{if(e&&e.data){for(let t in e.data)if(e.data.hasOwnProperty(t)){let n=document.getElementById("printessResult"+t);if(n){let r=e.data[t],i=!0===r.isFinalStatus&&r.isSuccess,s=!r.isFinalStatus&&!r.isSuccess&&!r.enqueuedOn,a=null!==r.errorDetails,o=n.querySelector(".print-status > .value");if(o){if(a)o.innerText="Error: "+r.errorDetails;else if(s)o.innerText="Printjob not found";else if(i){let e=document.createElement("ul");for(let t in r.result.r)if(r.result.r.hasOwnProperty(t)){let n=document.createElement("li");n.classList.add("print-document");let i=document.createElement("span");i.classList.add("document-name"),i.innerText=t+": ",n.appendChild(i);let s=document.createElement("a");s.setAttribute("href",r.result.r[t]),s.setAttribute("target","_blank"),n.appendChild(s);let a=document.createElement("span");a.innerText=r.result.r[t],s.appendChild(a),e.appendChild(n)}if(r.result.p)for(let t=0;t<r.result.p.length;++t){let n=document.createElement("li");n.classList.add("print-document");let i=document.createElement("span");i.classList.add("document-name"),i.innerText=r.result.p[t].d+": ",n.appendChild(i);let s=document.createElement("a");s.setAttribute("href",r.result.p[t].u),s.setAttribute("target","_blank"),n.appendChild(s);let a=document.createElement("span");a.innerText=r.result.p[t].u,s.appendChild(a),e.appendChild(n)}o.parentNode.replaceChild(e,o)}}}}}}),e}}});var t=JSON.parse('{"PrintessEditor":{"adminOrder":{"personalizedItems":"Personalisierte Produkte","saveToken":"Save token: ","printStatus":"Druckstatus:","loadingPrintStatus":"Lade status..."},"frontend":{"editDesign":"Design bearbeiten"},"general":{"mainMenuItemGeneral":"My custom module","descriptionTextModule":"Manage this custom module here"}}}'),n=JSON.parse('{"PrintessEditor":{"adminOrder":{"personalizedItems":"Personalisierte Produkte","saveToken":"Save token: ","printStatus":"Print status:","loadingPrintStatus":"Loading status..."},"frontend":{"editDesign":"Edit Design"},"general":{"mainMenuItemGeneral":"My custom module","descriptionTextModule":"Manage this custom module here"}}}');class r extends Shopware.Classes.ApiService{constructor(e,t,n="printess"){super(e,t,n),this.name="printessAdminOrderService"}getOrderPrintStatus(e){return this.httpClient.post("/printess/order/status",e,{headers:this.basicHeaders(),version:3})}basicHeaders(e=null){let t={"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${this.loginService.getToken()}`};return e&&e.languageId&&(t["sw-language-id"]=e.languageId),t}}Shopware.Component.register("sw-order-detail-printess",()=>{o.e(567).then(o.bind(o,567))}),Shopware.Application.addServiceProvider("printessAdminOrderService",()=>new r(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService"))),Shopware.Module.register("sw-new-order-tab-printess",{type:"plugin",name:"PrintessEditor",color:"#ff3d58",icon:"default-shopping-paper-bag-product",routeMiddleware(e,t){"sw.order.detail"===t.name&&t.children.push({name:"sw.order.detail.printess_items",path:"/sw/order/detail/:id/printess",component:"sw-order-detail-printess",meta:{parentPath:"sw.order.index"}}),e(t)},snippets:{"de-DE":t,"en-GB":n}})}()})();