(()=>{"use strict";var e={857:e=>{var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==i},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?o(Array.isArray(e)?[]:{},e,t):e}function s(e,t,i){return e.concat(t).map(function(e){return n(e,i)})}function r(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function a(e,t){try{return t in e}catch(e){return!1}}function o(e,i,l){(l=l||{}).arrayMerge=l.arrayMerge||s,l.isMergeableObject=l.isMergeableObject||t,l.cloneUnlessOtherwiseSpecified=n;var d,c,p=Array.isArray(i);return p!==Array.isArray(e)?n(i,l):p?l.arrayMerge(e,i,l):(c={},(d=l).isMergeableObject(e)&&r(e).forEach(function(t){c[t]=n(e[t],d)}),r(i).forEach(function(t){(!a(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(a(e,t)&&d.isMergeableObject(i[t])?c[t]=(function(e,t){if(!t.customMerge)return o;var i=t.customMerge(e);return"function"==typeof i?i:o})(t,d)(e[t],i[t],d):c[t]=n(i[t],d))}),c)}o.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,i){return o(e,i,t)},{})},e.exports=o}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e=i(857),t=i.n(e);class n{static ucFirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}static lcFirst(e){return e.charAt(0).toLowerCase()+e.slice(1)}static toDashCase(e){return e.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(e,t){let i=n.toUpperCamelCase(e,t);return n.lcFirst(i)}static toUpperCamelCase(e,t){return t?e.split(t).map(e=>n.ucFirst(e.toLowerCase())).join(""):n.ucFirst(e.toLowerCase())}static parsePrimitive(e){try{return/^\d+(.|,)\d+$/.test(e)&&(e=e.replace(",",".")),JSON.parse(e)}catch(t){return e.toString()}}}class s{static isNode(e){return"object"==typeof e&&null!==e&&(e===document||e===window||e instanceof Node)}static hasAttribute(e,t){if(!s.isNode(e))throw Error("The element must be a valid HTML Node!");return"function"==typeof e.hasAttribute&&e.hasAttribute(t)}static getAttribute(e,t){let i=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(i&&!1===s.hasAttribute(e,t))throw Error('The required property "'.concat(t,'" does not exist!'));if("function"!=typeof e.getAttribute){if(i)throw Error("This node doesn't support the getAttribute function!");return}return e.getAttribute(t)}static getDataAttribute(e,t){let i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=t.replace(/^data(|-)/,""),a=n.toLowerCamelCase(r,"-");if(!s.isNode(e)){if(i)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===e.dataset){if(i)throw Error("This node doesn't support the dataset attribute!");return}let o=e.dataset[a];if(void 0===o){if(i)throw Error('The required data attribute "'.concat(t,'" does not exist on ').concat(e,"!"));return o}return n.parsePrimitive(o)}static querySelector(e,t){let i=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(i&&!s.isNode(e))throw Error("The parent node is not a valid HTML Node!");let n=e.querySelector(t)||!1;if(i&&!1===n)throw Error('The required element "'.concat(t,'" does not exist in parent node!'));return n}static querySelectorAll(e,t){let i=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(i&&!s.isNode(e))throw Error("The parent node is not a valid HTML Node!");let n=e.querySelectorAll(t);if(0===n.length&&(n=!1),i&&!1===n)throw Error('At least one item of "'.concat(t,'" must exist in parent node!'));return n}static getFocusableElements(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return e.querySelectorAll('\n            input:not([tabindex^="-"]):not([disabled]):not([type="hidden"]),\n            select:not([tabindex^="-"]):not([disabled]),\n            textarea:not([tabindex^="-"]):not([disabled]),\n            button:not([tabindex^="-"]):not([disabled]),\n            a[href]:not([tabindex^="-"]):not([disabled]),\n            [tabindex]:not([tabindex^="-"]):not([disabled])\n        ')}static getFirstFocusableElement(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return this.getFocusableElements(e)[0]}static getLastFocusableElement(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=this.getFocusableElements(e);return t[t.length-1]}}class r{publish(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new CustomEvent(e,{detail:t,cancelable:i});return this.el.dispatchEvent(n),n}subscribe(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this,s=e.split("."),r=i.scope?t.bind(i.scope):t;if(i.once&&!0===i.once){let t=r;r=function(i){n.unsubscribe(e),t(i)}}return this.el.addEventListener(s[0],r),this.listeners.push({splitEventName:s,opts:i,cb:r}),!0}unsubscribe(e){let t=e.split(".");return this.listeners=this.listeners.reduce((e,i)=>([...i.splitEventName].sort().toString()===t.sort().toString()?this.el.removeEventListener(i.splitEventName[0],i.cb):e.push(i),e),[]),!0}reset(){return this.listeners.forEach(e=>{this.el.removeEventListener(e.splitEventName[0],e.cb)}),this.listeners=[],!0}get el(){return this._el}set el(e){this._el=e}get listeners(){return this._listeners}set listeners(e){this._listeners=e}constructor(e=document){this._el=e,e.$emitter=this,this._listeners=[]}}class a{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(e){let i=n.toDashCase(this._pluginName),r=s.getDataAttribute(this.el,"data-".concat(i,"-config"),!1),a=s.getAttribute(this.el,"data-".concat(i,"-options"),!1),o=[this.constructor.options,this.options,e];r&&o.push(window.PluginConfigManager.get(this._pluginName,r));try{a&&o.push(JSON.parse(a))}catch(e){throw console.error(this.el),Error('The data attribute "data-'.concat(i,'-options" could not be parsed to json: ').concat(e.message))}return t().all(o.filter(e=>e instanceof Object&&!(e instanceof Array)).map(e=>e||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(e){return e||(e=this.constructor.name),e}constructor(e,t={},i=!1){if(!s.isNode(e))throw Error("There is no valid element given.");this.el=e,this.$emitter=new r(this.el),this._pluginName=this._getPluginName(i),this.options=this._mergeOptions(t),this._initialized=!1,this._registerInstance(),this._init()}}class o{stripEditorVersion(e){if(void 0!==(e=(e||"").trim())&&null!=e){if(e){for(;0==e.indexOf("/");)e=e.substring(1);for(;0<e.length&&"/"===e[e.length-1];)e=e.substring(0,e.length-1)}else e=""}return e}sanitizeHost(e){return e?(e=e.trim()).endsWith("/")?e:e+"/":e||""}getClassicEditorUrl(e,t,i){var n=(e=e||"https://editor.printess.com/").indexOf("#");if(0<n){var s=e.substring(n+1);if(s)try{var r=JSON.parse(decodeURIComponent(s));if(r)for(var a in r)r.hasOwnProperty(a)&&(i[a]=r[a])}catch(e){}e=e.substring(0,n)}return e.toLowerCase().endsWith(".html")||(e=this.sanitizeHost(e),t&&(e+=(t=this.stripEditorVersion(t))+(t?"/":"")),e+="printess-editor/embed.html"),e=0!==e.toLowerCase().indexOf("https://")&&0!==e.toLowerCase().indexOf("http://")?"https://"+e:e}getLoaderUrl(e,t,i){var n=(e=e||"https://editor.printess.com/").indexOf("#");if(0<n){var s=e.substring(n+1);if(s)try{var r=JSON.parse(decodeURIComponent(s));if(r)for(var a in r)r.hasOwnProperty(a)&&(i[a]=r[a])}catch(e){}e=e.substring(0,n)}return(e=e.toLocaleLowerCase().endsWith("embed.html")?e.substring(0,e.length-10):e).toLowerCase().endsWith(".html")||(e=this.sanitizeHost(e),t&&(e+=(t=this.stripEditorVersion(t))+(t?"/":"")),e.toLowerCase().endsWith("printess-editor/")||(e+="printess-editor/"),e+="loader.js"),e=0!==e.toLowerCase().indexOf("https://")&&0!==e.toLowerCase().indexOf("http://")?"https://"+e:e}getPrintessComponent(){return document.querySelector("printess-component")||null}applyFormFieldMappings(e,t){var i=[];if(!t)for(var n in e)e.hasOwnProperty(n)&&i.push({name:n,value:e[n]});if(e){for(var s in e)if(e.hasOwnProperty(s)){var r=e[s],a=void 0!==t[s]&&void 0!==t[s].formField?t[s].formField:s;let n=r;void 0!==t[s]&&void 0!==t[s].values&&void 0!==t[s].values[n]&&(n=t[s].values[r]),i.push({name:a,value:n})}}return i}reverseFormFieldMapping(e,t,i){let n=e||"",s=t||"";if(i){for(var r in i)if(i.hasOwnProperty(r)&&i[r].formField===e){if(i[n=r].values){for(var a in i[r].values)if(i[r].values.hasOwnProperty(a)&&i[r].values[a]===t){s=a;break}}break}}return{name:n,value:s}}setViewportMeta(){var e=document.getElementsByTagName("head");if(e&&0<e.length){let t=e[0].querySelector("meta[name=viewport]"),i=(t||((t=document.createElement("meta")).setAttribute("name","viewport"),e[0].appendChild(t)),t.getAttribute("content"));i?0>i.indexOf("interactive-widget")&&(i=i+(i?", ":"")+"interactive-widget=resizes-content",t.setAttribute("content",i)):t.setAttribute("content","interactive-widget=resizes-content")}}async initializeIFrame(e,t,i){let n=this,s=document.getElementById("printess"),r=t=>{e&&"function"==typeof e.onCloseTab&&e.onCloseTab(t)},a=i=>{switch(i.data.cmd){case"back":window.removeEventListener("message",a),window.removeEventListener("beforeunload",r),window.removeEventListener("unload",r),s.setAttribute("printessHasListener","false"),e&&"function"==typeof e.onBack&&e.onBack();break;case"basket":window.removeEventListener("message",a),window.removeEventListener("beforeunload",r),window.removeEventListener("unload",r),s.setAttribute("printessHasListener","false"),e&&"function"==typeof e.onAddToBasketAsync&&e.onAddToBasketAsync(i.data.token,i.data.thumbnailUrl).then(()=>{});break;case"formFieldChanged":e&&"function"==typeof e.onFormFieldChangedAsync&&e.onFormFieldChangedAsync(i.data.n||i.data.name,i.data.v||i.data.value,i.data.ffCaption||"",i.data.l||i.data.label).then(()=>{});break;case"priceChanged":e&&"function"==typeof e.onPriceChangedAsync&&e.onPriceChangedAsync(i.data.priceInfo).then(()=>{});break;case"renderFirstPageImage":e&&"function"==typeof e.onRenderedFirstPageImageAsync&&e.onRenderedFirstPageImageAsync(i.data.result);break;case"save":e&&"function"==typeof e.onSaveAsync&&e.onSaveAsync(i.data.token);case"load":e&&"function"==typeof e.onLoadAsync&&e.onLoadAsync(t.templateNameOrSaveToken)}};return new Promise(e=>{var t;s?("true"!==s.getAttribute("printessHasListener")&&(window.addEventListener("message",a),!0===i.showAlertOnTabClose&&(window.addEventListener("beforeunload",r),window.addEventListener("unload",r)),s.setAttribute("printessHasListener","true")),e(s)):((t=document.createElement("div")).setAttribute("id","printess-container"),t.setAttribute("style","display: none; position: absolute; top: 0; bottom: 0; right: 0; left: 0; width: 100%; height: 100%; z-index: 100000;"),(s=document.createElement("iframe")).setAttribute("src",this.ClassicEditorUrl),s.setAttribute("id","printess"),s.setAttribute("style","width:100%; heigth:100%;"),s.setAttribute("data-attached","false"),s.setAttribute("allow","xr-spatial-tracking; clipboard-read; clipboard-write;"),s.setAttribute("allowfullscreen","true"),s.classList.add("printess-owned"),t.appendChild(s),s.onload=()=>{e(s)},window.addEventListener("message",a),!0===i.showAlertOnTabClose&&(window.addEventListener("beforeunload",r),window.addEventListener("unload",r)),s.setAttribute("printessHasListener","true"),window.visualViewport&&window.visualViewport.addEventListener("scroll",()=>{var e,t,i;(i=s.contentWindow)===null||void 0===i||i.postMessage({cmd:"viewportScroll",height:(e=window.visualViewport)===null||void 0===e?void 0:e.height,offsetTop:(t=window.visualViewport)===null||void 0===t?void 0:t.offsetTop},"*")},{passive:!0}),n.setViewportMeta(),document.body.append(t))})}async getPriceCategories(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=0;return t=t||e.getCurrentFormFieldValues(),"function"==typeof e.getPriceForFormFieldsAsync?i=await e.getPriceForFormFieldsAsync(t):"function"==typeof e.getPriceForFormFields&&(i=e.getPriceForFormFields(t)),{snippetPrices:e.snippetPrices.map(e=>e?e.label:null),priceCategories:{},price:e.formatMoney(i),basePrice:i,productName:e.getProductName(),legalNotice:e.legalText,infoUrl:e.legalTextUrl}}async onPriceChanged(e,t){try{let n=null;try{e.snippetPriceCategories&&0<e.snippetPriceCategories.length?t.stickers=e.snippetPriceCategories.filter(e=>t.snippetPrices&&t.snippetPrices.length>=e.priceCategory).map(e=>({productVariantId:t.snippetPrices[e.priceCategory-1].variantId,quantity:e.amount})):t.stickers=[],n=await this.calculateCurrentPrices(e,t)}catch(e){console.error(e)}let s=document.getElementById("printess");s&&!t.hidePricesInEditor&&setTimeout(()=>{s.contentWindow.postMessage({cmd:"refreshPriceDisplay",priceDisplay:n},"*")},0);var i=this.getPrintessComponent();i&&i.editor&&i.editor.ui.refreshPriceDisplay(n)}catch(e){}}hideBcUiVersion(e,t){var i=this.getPrintessComponent();i&&i.editor&&i.editor.ui.hide(),"function"==typeof e.editorClosed&&e.editorClosed(!0===t)}async showBcUiVersion(e,t){let i=this;var n=e.getPriceInfo();let s=null,r=null;e&&e.templateNameOrSaveToken&&0===e.templateNameOrSaveToken.indexOf("st:")||(s=i.applyFormFieldMappings(e.getCurrentFormFieldValues(),e.getFormFieldMappings()),r=e.getMergeTemplates());var a=i.getLoaderUrl(this.Settings.editorUrl,this.Settings.editorVersion,{}),a=await import(a);let o=i.getPrintessComponent();if(o&&o.editor)o.style.display="block",e.renderFirstPageImageAsync=async(t,i)=>{t=await o.editor.api.renderFirstPageImage("thumbnail.png",void 0,t,i),e&&"function"==typeof e.onRenderFirstPageImageAsync?await e.onRenderFirstPageImageAsync(t):e&&"function"==typeof e.onRenderFirstPageImage&&e.onRenderFirstPageImage(t)},await o.editor.api.loadTemplateAndFormFields(e.templateNameOrSaveToken,r,s,null),o.editor.ui.show();else{let l={domain:i.Settings.apiDomain,mergeTemplates:r,formFields:s,token:i.Settings.shopToken,templateName:e.templateNameOrSaveToken,translationKey:"",basketId:"function"==typeof e.getBasketId&&e.getBasketId()||"Some-Unique-Basket-Or-Session-Id",shopUserId:"function"==typeof e.getUserId?e.getUserId()||"Some-Unique-Basket-Or-Session-Id":"Some-Unique-Shop-User-Id",snippetPriceCategoryLabels:n&&n.snippetPrices?n.snippetPrices:null,theme:i.Settings.uiSettings&&i.Settings.uiSettings.theme||"",addToBasketCallback:(e,i)=>{t&&"function"==typeof t.onAddToBasketAsync&&t.onAddToBasketAsync(e,i).then(()=>{})},formFieldChangedCallback:(e,i,n,s,r)=>{t&&"function"==typeof t.onFormFieldChangedAsync&&t.onFormFieldChangedAsync(e,i,r,s).then(()=>{})},priceChangeCallback:e=>{t&&"function"==typeof t.onPriceChangedAsync&&t.onPriceChangedAsync(e).then(()=>{})},backButtonCallback:t=>{i.hideBcUiVersion(e,!0)},saveTemplateCallback:(e,i)=>{"function"==typeof t.onSaveAsync&&t.onSaveAsync(e)},loadTemplateCallback:e=>{t.onLoadAsync(l.templateName)}};n=await a.load(l),(o=i.getPrintessComponent())&&(o.editor=n)}}async show(e){let t=this;var i=e&&e.templateNameOrSaveToken&&0===e.templateNameOrSaveToken.indexOf("st:"),n={onBack:()=>{t.hide(e,!0)},onAddToBasketAsync:async(i,n)=>{let s=null;(s="function"==typeof e.onAddToBasketAsync?await e.onAddToBasketAsync(i,n):e.onAddToBasket(i,n))&&s.waitUntilClosingMS?setTimeout(function(){"function"==typeof s.executeBeforeClosing&&s.executeBeforeClosing(),t.hide(e,!1)},s.waitUntilClosingMS):(s&&"function"==typeof s.executeBeforeClosing&&s.executeBeforeClosing(),t.hide(e,!1))},onFormFieldChangedAsync:async(i,n,s,r)=>{i=t.reverseFormFieldMapping(i,n,e.getFormFieldMappings()),"function"==typeof e.onFormFieldChangedAsync?await e.onFormFieldChanged(i.name,i.value,s,r):"function"==typeof e.onFormFieldChanged&&e.onFormFieldChanged(i.name,i.value,s,r)},onPriceChangedAsync:async i=>{await t.onPriceChanged(i,e)},onRenderedFirstPageImageAsync:async t=>{"function"==typeof e.onRenderFirstPageImageAsync?await e.onRenderFirstPageImageAsync(t):"function"==typeof e.onRenderFirstPageImage&&e.onRenderFirstPageImage(t)},onSaveAsync:async t=>{"function"==typeof e.onSaveAsync?await e.onSaveAsync(t,""):"function"==typeof e.onSave&&e.onSave(t,"")},onLoadAsync:async t=>{"function"==typeof e.onLoadAsync?await e.onLoadAsync(t):"function"==typeof e.onLoad&&e.onLoad(t)},onCloseTab:e=>{e.preventDefault(),e.returnValue=""}};if(this.Settings.uiSettings&&"bcui"===this.Settings.uiSettings.uiVersion)t.showBcUiVersion(e,n);else{var s=e.getPriceInfo();let l=null,d=null,c=(i||(l=this.applyFormFieldMappings(e.getCurrentFormFieldValues(),e.getFormFieldMappings()),d=e.getMergeTemplates()),await this.initializeIFrame(n,e,this.Settings));if(e.renderFirstPageImageAsync=(e,t)=>(setTimeout(function(){c.contentWindow.postMessage({cmd:"renderFirstPageImage",properties:{}},"*")},0),Promise.resolve()),"false"===c.getAttribute("data-attached"))try{var r={domain:t.Settings.apiDomain,token:this.Settings.shopToken||"",templateName:e.templateNameOrSaveToken,showBuyerSide:!0,templateUserId:"",basketId:"function"==typeof e.getBasketId&&e.getBasketId()||"Some-Unique-Basket-Or-Session-Id",shopUserId:"function"==typeof e.getUserId?e.getUserId()||"Some-Unique-Basket-Or-Session-Id":"Some-Unique-Shop-User-Id",formFields:l,snippetPriceCategoryLabels:s&&s.snippetPrices?s.snippetPrices:null,mergeTemplates:d};if(null!=e.showSplitterGridSizeButton&&(r.showSplitterGridSizeButton=!0===e.showSplitterGridSizeButton||"true"===e.showSplitterGridSizeButton),this.Settings.uiSettings&&this.Settings.uiSettings.theme&&(r.theme=this.Settings.uiSettings.theme),this.Settings.attachParams)for(var a in this.Settings.attachParams)this.Settings.attachParams.hasOwnProperty(a)&&(r[a]=this.Settings.attachParams[a]);if(void 0!==e.additionalAttachParams||null!==e.additionalAttachParams)for(var o in e.additionalAttachParams)e.additionalAttachParams.hasOwnProperty(o)&&(r[o]=e.additionalAttachParams[o]);c.contentWindow.postMessage({cmd:"attach",properties:r},"*"),c.setAttribute("data-attached","true"),setTimeout(function(){c.contentWindow.focus()},0)}catch(e){console.error(e)}else i={templateNameOrToken:e.templateNameOrSaveToken,mergeTemplates:d,formFields:l,snippetPriceCategoryLabels:s&&s.snippetPrices?s.snippetPrices:null,formFieldProperties:void 0,clearExchangeCaches:!0},this.Settings.attachParams&&(this.Settings.attachParams.formFieldProperties&&(i.formFieldProperties=this.Settings.attachParams.formFieldProperties),void 0!==this.Settings.attachParams.clearExchangeCaches)&&(i.clearExchangeCaches=!1!==this.Settings.attachParams.clearExchangeCaches),e&&e.additionalAttachParams&&(e.additionalAttachParams.formFieldProperties&&(i.formFieldProperties=e.additionalAttachParams.formFieldProperties),void 0!==e.additionalAttachParams.clearExchangeCaches)&&(i.clearExchangeCaches=!1!==e.additionalAttachParams.clearExchangeCaches),c.contentWindow.postMessage({cmd:"loadTemplateAndFormFields",parameters:[i.templateNameOrToken,i.mergeTemplates,i.formFields,i.snippetPriceCategoryLabels,i.formFieldProperties,i.clearExchangeCaches]},"*"),setTimeout(function(){c.contentWindow.focus()},0)}document.body.classList.add("hideAll"),(n=document.getElementsByTagName("html"))&&0<n.length&&n[0].classList.add("printess-editor-open"),(s=document.getElementById("printess-container"))&&s.style.setProperty("display","block","important")}hide(e,t){this.Settings.uiSettings&&"bcui"===this.Settings.uiSettings.uiVersion?(i=this.getPrintessComponent())&&i.editor&&i.editor.ui.hide():(i=document.getElementById("printess-container"))&&(i.style.display="none"),document.body.classList.remove("hideAll");var i=document.getElementsByTagName("html");i&&0<i.length&&i[0].classList.remove("printess-editor-open"),"function"==typeof e.editorClosed&&e.editorClosed(!0===t)}static getGlobalShopSettings(){return window&&window.printessGlobalConfig?window.printessGlobalConfig:{}}static getGlobalFormFields(){let e;var t=o.getGlobalShopSettings();if(t.formFields,t.formFields){if("function"==typeof t.formFields)try{e=t.formFields()}catch(e){console.error(e)}else e=t.formFields}return e||{}}constructor(e){if(this.calculateCurrentPrices=async(e,t)=>{var i=await this.getPriceCategories(t);let n=i.basePrice;return e.snippetPriceCategories&&e.snippetPriceCategories.forEach(e=>{e&&0<e.amount&&t.snippetPrices[e.priceCategory-1]&&(n+=t.snippetPrices[e.priceCategory-1].priceInCent)}),i.price=t.formatMoney(n),i},!e||!e.shopToken)throw"No shop token provided";this.Settings={...e},e={},null!=this.Settings.uiSettings&&(e.showAnimation=!0===this.Settings.uiSettings.showStartupAnimation||"true"==this.Settings.uiSettings.showStartupAnimation,this.Settings.uiSettings.startupLogoUrl&&(e.imageUrl=this.Settings.uiSettings.startupLogoUrl),this.Settings.uiSettings.startupBackgroundColor)&&(e.background=this.Settings.uiSettings.startupBackgroundColor),this.ClassicEditorUrl=this.getClassicEditorUrl(this.Settings.editorUrl,this.Settings.editorVersion,e)+"#"+encodeURIComponent(JSON.stringify(e))}}class l{getGlobalConfig(){return window&&window.printessGlobalConfig?window.printessGlobalConfig:{}}getProductOptionInputSelector(e){return"input[name='"+e+"'], select[name='"+e+"']"}getVariantInputs(){let e=[];return this.recordForeach(this.product.variantOptions,(t,i)=>{document.querySelectorAll(this.getProductOptionInputSelector(t)).forEach(t=>{e.push(t)})}),e}getCurrentProductOptionsFromProductPage(){var e=this.getVariantInputs();let t={},i={};var n=this.getGlobalConfig();if(n&&n.formFields)for(var s in n.formFields)n.formFields.hasOwnProperty(s)&&(t[s]=n.formFields[s]);return e.forEach(e=>{var n,s=e.getAttribute("name");this.product.variantOptions.hasOwnProperty(s)&&("SELECT"===e.nodeName?(n=e.value,this.product.variantOptions[s].values.hasOwnProperty(n)&&(t[this.product.variantOptions[s].name]=this.product.variantOptions[s].values[n].name,i[s]=!0)):"radio"===e.getAttribute("type")&&(n=e.value,e.checked)&&this.product.variantOptions[s].values.hasOwnProperty(n)&&(t[this.product.variantOptions[s].name]=this.product.variantOptions[s].values[n].name,i[s]=!0))}),t}getCurrentProductOptions(e){return"cart"!==e.displayMode?this.getCurrentProductOptionsFromProductPage():e.basketItemOptions}recordForeach(e,t){let i=-1;for(var n in e)if(e.hasOwnProperty(n)&&!1===t(n,e[n],++i))break}filterVariantRelatedOptions(e){var t,i={};for(t in e)if(e.hasOwnProperty(t)){var n,s=e[t];for(n in this.product.variantOptions)if(this.product.variantOptions.hasOwnProperty(n)){var r=this.product.variantOptions[n];if(r.name===t)for(var a in r.values)r.values.hasOwnProperty(a)&&r.values[a].name===s&&(i[t]=s)}}return i}getVariantByProductOptions(e){let t=this.filterVariantRelatedOptions(e),i=this.product.variants;for(let e in t)t.hasOwnProperty(e)&&(i=i.filter(i=>i.options&&i.options.hasOwnProperty(e)&&i.options[e].optionName===t[e]));return 0<i.length?i[0]:this.product}addOrRemoveTextField(e,t,i,n,s){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(r=r||this.settings.designNowButtonInstance.closest("form"),Array.isArray(n))n.forEach(n=>{this.addOrRemoveTextField(e,t,i,n,s,r)});else{let e=document.getElementById(n);s?(!e&&r&&((e=document.createElement("input")).setAttribute("id",n),e.setAttribute("name","lineItems["+t+"]["+i+"]"),e.setAttribute("type","hidden"),e.style.display="none",r.appendChild(e)),e&&e.setAttribute("value",s)):e&&e.remove()}}createShopContext(e){let t=this;var i,n,s={templateNameOrSaveToken:"",stickers:[],legalText:this.product.metaData.hasOwnProperty("PrintessLegalText")?this.product.metaData.PrintessLegalText||"":e.priceFormatOptions&&e.priceFormatOptions.legalText?e.priceFormatOptions.legalText:"",legalTextUrl:this.product.metaData.hasOwnProperty("PrintessLegalTextUrl")&&this.product.metaData.PrintessLegalTextUrl||"",snippetPrices:[],chargeEachStickerUsage:!1,hidePricesInEditor:void 0!==t.settings.hidePricesInEditor&&!0===t.settings.hidePricesInEditor,getProductName:()=>t.product.name,formatMoney:t=>{var i,n;let s=parseFloat(""+t).toFixed(2);return e.priceFormatOptions&&(i={minimumFractionDigits:2,maximumFractionDigits:20},e.priceFormatOptions.rounding&&(i.minimumFractionDigits=e.priceFormatOptions.rounding.decimal,i.maximumFractionDigits=e.priceFormatOptions.rounding.decimal),i={style:"currency",currency:e.priceFormatOptions.currencyIsoCode,...i},s=t.toLocaleString((n=(()=>{var e,t,i;if("object"==typeof navigator)return e="anguage",(i=(t=navigator).languages)&&i.length?i:(e=t["l"+e]||t["browserL"+e]||t["userL"+e])&&[e]})()[0])!==null&&void 0!==n?n:"en-US",i)),s},getMergeTemplates:()=>{var e=[];if(this.product.metaData.hasOwnProperty("PrintessMergeTemplates")&&this.product.metaData.PrintessMergeTemplates)try{var t=JSON.parse(this.product.metaData.PrintessMergeTemplates);t&&e.push("string"==typeof t?{templateName:t||""}:t)}catch(t){e.push({templateName:this.product.metaData.hasOwnProperty("PrintessMergeTemplates")&&this.product.metaData.PrintessMergeTemplates||""})}return e},onFormFieldChanged:(t,i,n,s)=>{let r=this.getVariantByProductOptions(this.getCurrentProductOptions(e));if(e.basketItemOptions||(e.basketItemOptions={}),e.basketItemOptions[t]=i,"cart"!==e.displayMode){let o=null,l=null;this.recordForeach(this.product.variantOptions,(e,r)=>{if(r.name===t||r.name===n){for(var a in r.values)if(r.values.hasOwnProperty(a)){var d=r.values[a];if(i===d.name||d.name===s)return o=a,l=r.id,!1}}}),null!=o&&null!=l&&document.querySelectorAll(this.getProductOptionInputSelector(l)).forEach(e=>{var t=e.getAttribute("name");if(this.product.variantOptions.hasOwnProperty(t)){if("SELECT"===e.nodeName){e.value=o;for(let t=0;t<e.options.length;++t)e.options[t].selected=e.options[t].value===o}else"radio"===e.getAttribute("type")&&(e.checked=e.value===o)}});var a=document.querySelectorAll("[name^='lineItems\\["+r.id+"]'");let d="lineItems["+r.id+"]";r=this.getVariantByProductOptions(this.getCurrentProductOptions(e)),a.forEach(e=>{e.getAttribute("name")===d+"[id]"&&(e.value=r.id),e.setAttribute("name",e.getAttribute("name").replace(d,"lineItems["+r.id+"]"))})}},onAddToBasket:(i,n)=>{if("cart"===e.displayMode){var s=document.getElementById("printessupdateLineItem"+e.lineItemId);if(s){var r=s.querySelector("input[name='lineItems\\[id\\]'],input[name='lineItems\\[0\\]\\[id\\]']"),a=s.querySelector("input[name='lineItems\\[quantity\\]'],input[name='lineItems\\[0\\]\\[quantity\\]']"),o=s.querySelector("input[name='lineItems\\[referencedId\\]'],input[name='lineItems\\[0\\]\\[referencedId\\]']"),l=s.querySelector("input[name='lineItems\\[payload\\]'],input[name='lineItems\\[0\\]\\[payload\\]']"),r=(r&&(r.value=e.lineItemId),a&&(a.value=e.lineItem.quantity.toString()),o&&(o.value=e.lineItem.referencedId),l&&(l.value=JSON.stringify({_printessProductOptions:e.basketItemOptions,_printessSaveToken:i,_printessThumbnailUrl:n})),this.getGlobalConfig());if(r&&"function"==typeof r.onAddToBasket)try{r.onAddToBasket(i,n)}catch(e){console.error(e)}s.submit()}}else{let s=this.getVariantByProductOptions(t.getCurrentProductOptions(e));a=this.settings.designNowButtonInstance.closest("form"),(o=(this.addOrRemoveTextField(e,s.id,"_printessSaveToken","printess_save_token_input_"+s.id,i,a),this.addOrRemoveTextField(e,s.id,"_printessThumbnailUrl","printess_thumbnail_url_input_"+s.id,n,a),this.addOrRemoveTextField(e,s.id,"_printessProductOptions","printess_product_options_"+s.id,JSON.stringify({...e.basketItemOptions||{},...this.getCurrentProductOptionsFromProductPage()}),a),document.getElementsByName("lineItems["+s.id+"][stackable]")))&&o.forEach(e=>e.value="0");let r=document.getElementsByName("lineItems["+s.id+"][id]");if(r&&r.forEach(e=>e.value=""+s.id),(r=document.getElementsByName("lineItems["+s.id+"][referencedId]"))&&r.forEach(e=>e.value=""+s.id),(l=this.getGlobalConfig())&&"function"==typeof l.onAddToBasket)try{l.onAddToBasket(i,n)}catch(e){console.error(e)}this.settings.addToBasketButtonInstance&&this.settings.addToBasketButtonInstance.click()}},getCurrentFormFieldValues:()=>t.getCurrentProductOptions(e),getPriceForFormFields:i=>{var n=t.getVariantByProductOptions(t.getCurrentProductOptions(e)),s=n.price[0].gross;return e.priceFormatOptions&&!e.priceFormatOptions.grossPrice&&n.price[0].net,s},getFormFieldMappings:()=>{let e={};if(this.product.metaData.hasOwnProperty("PrintessFormFieldMappings")&&this.product.metaData.PrintessFormFieldMappings)try{e=JSON.parse(this.product.metaData.PrintessFormFieldMappings)}catch(e){console.error(e)}return e},getPriceInfo:()=>null,editorClosed:e=>{}};return e.saveToken?s.templateNameOrSaveToken=e.saveToken:(i=this.getCurrentProductOptions(e),n=this.getVariantByProductOptions(i),s.templateNameOrSaveToken=this.doDisplayDesignNowButton(i)?n.metaData.PrintessTemplateName||this.product.metaData.PrintessTemplateName:this.product.metaData.PrintessTemplateName||""),s}doDisplayDesignNowButton(e){let t=!1;return this.product.variants.forEach(e=>{t=t||e.metaData.hasOwnProperty("PrintessTemplateName")&&e.metaData.PrintessTemplateName&&!0}),e=this.getVariantByProductOptions(e),t?e.metaData.hasOwnProperty("PrintessTemplateName")&&e.metaData.PrintessTemplateName&&!0:this.product.metaData.hasOwnProperty("PrintessTemplateName")&&this.product.metaData.PrintessTemplateName&&!0}showDesignNowButton(e){this.settings.designNowButtonInstance&&this.settings.addToBasketButtonInstance&&(this.settings.addToBasketButtonInstance.getAttribute("data-orig-display")||this.settings.addToBasketButtonInstance.setAttribute("data-orig-display",this.settings.addToBasketButtonInstance.style.display),this.settings.addToBasketButtonInstance.style.display=e?"none":this.settings.addToBasketButtonInstance.getAttribute("data-orig-display"),this.settings.designNowButtonInstance.style.display=e?"inline-block":"none")}initProductPage(){this.showDesignNowButton(this.doDisplayDesignNowButton(this.getCurrentProductOptionsFromProductPage()))}show(e){"cart"!==e.displayMode&&(n=this.settings.designNowButtonInstance.closest("form"))&&(n=n.querySelector("input[name^='lineItems\\['][name$='\\]\\[id\\]']"))&&(n=n.getAttribute("name").replace("lineItems[","").replace("][id]",""),e.lineItemId=n);var t=this.getGlobalConfig();if(t&&t.attachParams)for(var i in t.attachParams)t.attachParams.hasOwnProperty(i)&&(this.settings.attachParams||(this.settings.attachParams={}),this.settings.attachParams[i]=t.attachParams[i]);var n=this.createShopContext(e);new o(this.settings).show(n)}constructor(e,t){this.name=0,this.product=t,(this.settings=e)&&!e.uiSettings&&(e.uiSettings={showStartupAnimation:"boolean"==typeof e.showStartupAnimation&&e.showStartupAnimation,theme:e.theme||null,uiVersion:"classical",startupBackgroundColor:null,startupLogoUrl:e.startupLogoUrl||null}),this.name=Math.random(),console.log(this.name)}}class d{get(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",e,i);return this._sendRequest(n,null,t)}post(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let s=this._createPreparedRequest("POST",e,n);return this._sendRequest(s,t,i)}delete(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let s=this._createPreparedRequest("DELETE",e,n);return this._sendRequest(s,t,i)}patch(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let s=this._createPreparedRequest("PATCH",e,n);return this._sendRequest(s,t,i)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,i){return this._registerOnLoaded(e,i),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,i){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),i&&this._request.setRequestHeader("Content-type",i),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}let c=window.PluginManager;c.register("PrintessEditor",class extends a{init(){this.BUY_BTN_SELECTOR="button.btn.btn-primary.btn-buy",this.printessEditor=null,this.info=null;let e=this.el.closest("form"),t=null;e&&(t=e.querySelector(this.BUY_BTN_SELECTOR))&&t.parentNode.insertBefore(this.el,t.nextSibling);let i=this.el.getAttribute("data-product-id");if(i&&"function"==typeof window["getPrintessInfo"+i]){let e=this.info=window["getPrintessInfo"+i]();e.product.variants=e.variants,delete e.variants,e.settings.designNowButtonInstance=this.el,e.settings.addToBasketButtonInstance=t,this.printessEditor=new l(e.settings,e.product),this.printessEditor.initProductPage()}this.el.addEventListener("click",this.editProductClicked.bind(this))}editProductClicked(){this.printessEditor&&this.printessEditor.show({priceFormatOptions:this.info.priceSettings})}},"[data-printess-button]"),c.register("PrintessCart",class extends a{init(){this.infos=null,this.lineItemId=this.el.getAttribute("data-printess-line-item-id"),this.lineItem=JSON.parse(this.el.getAttribute("data-printess-line-item"));try{let e=JSON.parse(this.el.getAttribute("data-printess-product-infos"));e&&(this.infos=e)}catch(e){console.error(e)}this.el.addEventListener("click",this.editProductClicked.bind(this))}editProductClicked(){if(this.infos.hasOwnProperty(this.lineItemId)){let e=this.infos[this.lineItemId];e&&e.content&&"string"==typeof e.content&&(e=JSON.parse(e.content)),e.product.variants=e.variants,delete e.variants;let t={lineItemId:this.lineItemId,displayMode:"cart",basketItemOptions:this.lineItem&&this.lineItem.payload&&this.lineItem.payload._printessProductOptions?"string"==typeof this.lineItem.payload._printessProductOptions?JSON.parse(this.lineItem.payload._printessProductOptions):this.lineItem.payload._printessProductOptions:{},saveToken:this.lineItem&&this.lineItem.payload&&this.lineItem.payload._printessSaveToken?this.lineItem.payload._printessSaveToken:"",updateBasketItem:this.updateCartItem,lineItem:this.lineItem,priceFormatOptions:e.priceSettings};new l(e.settings,e.product).show(t)}else console.error("Can not open editor")}updateCartItem(e){xhr=new d().post("/store-api/checkout/cart/line-item",JSON.stringify({items:[e]}),e=>{alert(JSON.stringify(e))})}},"[data-printess-line-item-id]")})()})();