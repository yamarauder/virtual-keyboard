(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Georgia', 'Arial', Helvetica, sans-serif;\r\n  overflow: hidden;\r\n  background-color: rgba(26, 22, 20, 0.927);\r\n\r\n}\r\n\r\nspan {\r\n  font-size: 1.5rem;\r\n  line-height: 2.4rem;\r\n  letter-spacing: 0.1em;\r\n  color: whitesmoke;\r\n}\r\n\r\n\r\ntextarea {\r\n  width: 1000px;\r\n  height: 20vh;\r\n  border-radius: 5%;\r\n  padding: 1rem;\r\n  margin: 3rem 0rem 1rem;\r\n}\r\n\r\n.keyboard {\r\n  width: 1000px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.button {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 2px solid black;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-color: whitesmoke;\r\n  position: relative;\r\n  transition: 0.3s;\r\n  user-select: none;\r\n  border-radius: 30%;\r\n  box-shadow: 3px 3px white;\r\n  cursor: pointer;\r\n}\r\n\r\n.rusLayout,\r\n.engLayout,\r\n.capsRusLayout,\r\n.capsEngLayout,\r\n.shiftRusLayout,\r\n.shiftEngLayout {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: 0.3s;\r\n}\r\n\r\n.englayout,\r\n.shiftRusLayout,\r\n.capsEngLayout,\r\n.capsRusLayout,\r\n.shiftEngLayout {\r\n  display: none;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  line-height: 2.7rem;\r\n  letter-spacing: 0.1em;\r\n  color: whitesmoke;\r\n}\r\n\r\n.discriptions {\r\n  margin-top: 7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  user-select: none;\r\n}\r\n.drawKeyButton,\r\n.button:active {\r\n  box-shadow: 0.3px 0.3px white;\r\n  transform: scale(0.98);\r\n  background-color: aqua;\r\n}\r\n.drawKeySpan,\r\n.button:active span {\r\n  color: rgb(68, 71, 62);\r\n}\r\n:active, :hover, :focus {\r\n  outline: 0;\r\n  outline-offset: 0;\r\n}\r\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:(e,t,r)=>{var n,a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function o(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],a=0;a<e.length;a++){var s=e[a],c=t.base?s[0]+t.base:s[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var d=o(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(h)):i.push({identifier:l,updater:p(h,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,r,n){var a=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function h(e,t,r){var n=r.css,a=r.media,i=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var y=null,f=0;function p(e,t){var r,n,a;if(t.singleton){var i=f++;r=y||(y=c(t)),n=d.bind(null,r,i,!1),a=d.bind(null,r,i,!0)}else r=c(t),n=h.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var a=o(r[n]);i[a].references--}for(var c=s(e,t),u=0;u<r.length;u++){var l=o(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{const e=document.querySelector("body"),t=["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","DEL","Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","ENTER","Shift","\\","я","ч","с","м","и","т","ь","б","ю",".","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],n=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","DEL","Caps Lock","a","s","d","f","g","h","j","k","l",";","'","ENTER","Shift","\\","z","x","c","v","b","n","m",",",".","/","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],a=["Ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\","DEL","Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","ENTER","Shift","\\","Я","Ч","С","М","И","Т","Ь","Б","Ю",".","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],i=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","DEL","Caps Lock","A","S","D","F","G","H","J","K","L",":","'","ENTER","Shift","\\","Z","X","C","V","B","N","M",",",".","/","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],o=["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","DEL","Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","ENTER","Shift","/","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],s=["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","DEL","Caps Lock","A","S","D","F","G","H","J","K","L",":",'"',"ENTER","Shift","|","Z","X","C","V","B","N","M","<",">","?","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],c=["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","/","DEL","Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","ENTER","Shift","/","я","ч","с","м","и","т","ь","б","ю",",","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],u=["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","{","}","|","DEL","Caps Lock","a","s","d","f","g","h","j","k","l",":",'"',"ENTER","Shift","|","z","x","c","v","b","n","m","<",">","?","&#9650;","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9668;","&#9660;","&#9658;"],l=['"',"№",";",":","?","=","1","2","3","4","5","6","7","8","9","0","<",">","?",",","/",".","`","-","~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","\\",":",'"',"|"," ","▲","▼","►","◄","'","]","]","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","ё","Ё"],d=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","IntlBackslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"],h=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","Ё","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","ё"],y="ru",f="eng",p=[y,f],S="storageLang";function L(e,t){document.querySelectorAll(e).forEach((e=>{e.style.display=`${t}`}))}function m(e,t,r){for(let n=0;n<t.length;n+=1)e(t[n],n===r?"flex":"none")}function g(){const e=localStorage.getItem(S);return p.includes(e)?e:(localStorage.setItem(S,f),f)}function b(e){-1!==e&&(document.querySelector(`.button${e}`).classList.add("drawKeyButton"),document.querySelector(`.englayout${e} `).classList.add("drawKeySpan"),document.querySelector(`.shiftRusLayout${e} `).classList.add("drawKeySpan"),document.querySelector(`.shiftEngLayout${e} `).classList.add("drawKeySpan"),document.querySelector(`.capsRusLayout${e} `).classList.add("drawKeySpan"),document.querySelector(`.capsEngLayout${e} `).classList.add("drawKeySpan"),document.querySelector(`.ruslayout${e} `).classList.add("drawKeySpan"))}function v(e){-1!==e&&(document.querySelector(`.button${e}`).classList.remove("drawKeyButton"),document.querySelector(`.englayout${e} `).classList.remove("drawKeySpan"),document.querySelector(`.shiftRusLayout${e} `).classList.remove("drawKeySpan"),document.querySelector(`.shiftEngLayout${e} `).classList.remove("drawKeySpan"),document.querySelector(`.capsRusLayout${e} `).classList.remove("drawKeySpan"),document.querySelector(`.capsEngLayout${e} `).classList.remove("drawKeySpan"),document.querySelector(`.ruslayout${e} `).classList.remove("drawKeySpan"))}function K(e,t){!function(e){const t=document.querySelector(".textarea"),r=t.selectionStart;t.value=t.value.slice(0,r)+e+t.value.slice(r-1+e.length),t.setSelectionRange(r+1,r+1)}(t[d.indexOf(e.code)])}function w(e,t){e===y?document.querySelectorAll(".shiftRusLayout").forEach((e=>{const r=e;h.includes(r.innerHTML)&&(t&&(r.innerHTML=r.innerHTML.toLowerCase()),t||(r.innerHTML=r.innerHTML.toUpperCase()))})):document.querySelectorAll(".shiftEngLayout").forEach((e=>{const r=e;h.includes(r.innerHTML)&&(t&&(r.innerHTML=r.innerHTML.toLowerCase()),t||(r.innerHTML=r.innerHTML.toUpperCase()))}))}class E{widthNorm="50px";widthProbel="357px";widthShift="152px";widthTab="87px";widthEnter="115px";widthCtrl="110px";displayNone="none";layoutKeyboard=[".rusLayout",".engLayout",".shiftRusLayout",".shiftEngLayout",".capsRusLayout",".capsEngLayout"];renderPage(){!function(){const t=document.createElement("div");t.classList.add("wrapper");const r=document.createElement("textarea");r.setAttribute("wrap",""),r.setAttribute("name","textarea"),r.classList.add("textarea");const n=document.createElement("div");n.classList.add("keyboard");const a=document.createElement("div");a.classList.add("discriptions"),e.prepend(t);const i=document.querySelector(".wrapper");i.prepend(n),i.prepend(r),i.append(a),document.querySelector(".discriptions").innerHTML="<h1> keyboard create in operating system windows</h1>\n                        <h2>to switch the language: left shift + left alt </h2>\n                        "}(),this.createBlock(),this.changeLanquage()}createBlock(){const e=document.querySelector(".keyboard");for(let r=0;r<t.length;r+=1)e.appendChild(this.createButton(t,n,o,s,a,i,r))}createButton(e,t,r,n,a,i,o){const s=document.createElement("div");return s.setAttribute("id",`button${o}`),13===o||29===o||42===o?s.setAttribute("style",`width: ${this.widthShift};`):14===o?s.setAttribute("style",`width: ${this.widthTab};`):41===o?s.setAttribute("style",`width: ${this.widthEnter};`):61===o||56===o?s.setAttribute("style",`width: ${this.widthCtrl};`):59===o?s.setAttribute("style",`width: ${this.widthProbel};`):s.setAttribute("style",`width: ${this.widthNorm};`),s.classList.add(`button${o}`),s.classList.add("button"),s.innerHTML=` <span class='ruslayout${o} rusLayout'>${e[o]}</span>\n                         <span class='englayout${o} engLayout'>${t[o]}</span>\n                         <span class='shiftRusLayout${o} shiftRusLayout'>${r[o]}</span>\n                         <span class='shiftEngLayout${o} shiftEngLayout'>${n[o]}</span>\n                         <span class='capsRusLayout${o} capsRusLayout'>${a[o]}</span>\n                         <span class='capsEngLayout${o} capsEngLayout'>${i[o]}</span>\n                       `,s}changeLanquage(){g()===y?(L(this.layoutKeyboard[1],"none"),L(this.layoutKeyboard[0],"flex")):(L(this.layoutKeyboard[1],"flex"),L(this.layoutKeyboard[0],"none"))}}var k=r(379),x=r.n(k),I=r(426);x()(I.Z,{insert:"head",singleton:!1}),I.Z.locals;const T=new E,C=new class{capsIndicator=0;shiftIndicator=0;shiftIndicatorKey=0;focusValueStart;render=new E;pressMouseAmount;onListener(){this.eventKey(),this.eventKeyboard(),function(e,...t){const r=new Set;document.addEventListener("keydown",(n=>{r.add(n.code),"AltLeft"===n.code&&n.repeat||t.some((e=>!r.has(e)))||(g()===y?(localStorage.setItem(S,f),e()):(localStorage.setItem(S,y),e()))})),document.addEventListener("keyup",(e=>{r.delete(e.code)}))}((()=>{return e=this.capsIndicator,t=g(),r=this.render.layoutKeyboard,n=y,void m(L,r,0===e?t===n?2:3:t===n?4:5);var e,t,r,n}),"AltLeft","ShiftLeft"),function(e,t,r){const n=new Set;document.addEventListener("keydown",(a=>{n.add(a.code),0!==t()&&0!==r()?e(g(),!0):e(g(),!1)})),document.addEventListener("keyup",(e=>{n.delete(e.code)}))}(w,(()=>this.shiftIndicator),(()=>this.capsIndicator));const e=document.querySelector(".textarea");e.addEventListener("blur",(()=>{this.focusValueStart=e.selectionStart,e.focus()}))}eventKey(){document.addEventListener("keydown",(e=>{e.preventDefault();const r=document.querySelector(".textarea");if(this.focusValueStart=r.selectionStart,r.focus(),"CapsLock"===e.key){if(e.repeat)return;0===this.capsIndicator?(0===this.shiftIndicatorKey&&(g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5)),this.capsIndicator=1):(0===this.shiftIndicatorKey&&(g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1)),this.capsIndicator=0)}if(!0===e.shiftKey||!0===e.shiftKey&&e.repeat){if(1===this.shiftIndicatorKey)return;g()===y?m(L,this.render.layoutKeyboard,2):m(L,this.render.layoutKeyboard,3),this.shiftIndicator=1}e.key&&(-1!==d.indexOf(e.code)&&b(d.indexOf(e.code)),"CapsLock"===e.code&&0!==this.capsIndicator&&b(d.indexOf(e.code))),"Tab"===e.key&&(r.value=`${r.value.slice(0,this.focusValueStart)}    ${r.value.slice(this.focusValueStart)}`,r.setSelectionRange(this.focusValueStart+4,this.focusValueStart+4)),l.includes(e.key)&&(g()===y?(0===this.shiftIndicator&&0===this.capsIndicator&&K(e,t),0===this.shiftIndicator&&0!==this.capsIndicator&&K(e,a),1===this.shiftIndicator&&1===this.capsIndicator&&K(e,c),1===this.shiftIndicator&&0===this.capsIndicator&&K(e,o)):(0===this.shiftIndicator&&0===this.capsIndicator&&K(e,n),0===this.shiftIndicator&&0!==this.capsIndicator&&K(e,i),1===this.shiftIndicator&&1===this.capsIndicator&&K(e,u),1===this.shiftIndicator&&0===this.capsIndicator&&K(e,s))),"Enter"===e.key&&(this.focusValueStart=r.selectionStart,r.value=`${r.value.slice(0,r.selectionStart)}\n${r.value.slice(r.selectionStart)}`,r.setSelectionRange(this.focusValueStart+1,this.focusValueStart+1)),"ArrowUp"===e.key&&(r.value+="▲"),"ArrowDown"===e.key&&(r.value+="▼"),"ArrowLeft"===e.key&&(r.value+="◄"),"ArrowRight"===e.key&&(r.value+="►"),"Backspace"===e.key&&(0!==r.selectionStart?(r.value=r.value.slice(0,this.focusValueStart-1)+r.value.slice(this.focusValueStart),r.setSelectionRange(this.focusValueStart-1,this.focusValueStart-1)):r.setSelectionRange(this.focusValueStart,this.focusValueStart)),"Delete"===e.key&&(r.value=r.value.slice(0,r.selectionStart)+r.value.slice(r.selectionStart+1),r.setSelectionRange(this.focusValueStart,this.focusValueStart))})),document.addEventListener("keyup",(e=>{if("Shift"===e.key){if(1===this.shiftIndicatorKey)return;if(e.repeat)return;0===this.capsIndicator?g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1):g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5),this.shiftIndicator=0}e.key&&v(d.indexOf(e.code)),"CapsLock"===e.code&&0!==this.capsIndicator&&b(d.indexOf(e.code))})),window.addEventListener("blur",(()=>{d.forEach(((e,t)=>v(t))),1===this.capsIndicator&&b(d.indexOf("CapsLock")),1===this.shiftIndicator&&(0===this.capsIndicator?g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1):g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5),this.shiftIndicator=0)}))}eventKeyboard(){const e=document.querySelector(".textarea");this.focusValueStart=e.selectionStart,document.querySelector(".keyboard").addEventListener("mousedown",(t=>{e.focus(),l.includes(t.target.innerHTML)&&(e.value+=t.target.innerHTML),"&lt;"===t.target.innerHTML&&(e.value+="<"),"&gt;"===t.target.innerHTML&&(e.value+=">"),"Backspace"===t.target.innerHTML&&(0!==e.selectionStart?(e.value=e.value.slice(0,this.focusValueStart-1)+e.value.slice(this.focusValueStart),e.setSelectionRange(this.focusValueStart-1,this.focusValueStart-1)):e.setSelectionRange(this.focusValueStart,this.focusValueStart)),"DEL"===t.target.innerHTML&&(e.value=e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionStart+1),e.setSelectionRange(this.focusValueStart,this.focusValueStart)),"ENTER"===t.target.innerHTML&&(e.value=`${e.value.slice(0,e.selectionStart)}\n${e.value.slice(e.selectionStart)}`,e.setSelectionRange(this.focusValueStart+1,this.focusValueStart+1)),"Tab"===t.target.innerHTML&&(e.value=`${e.value.slice(0,this.focusValueStart)}    ${e.value.slice(this.focusValueStart)}`,e.setSelectionRange(this.focusValueStart+4,this.focusValueStart+4))})),document.querySelector(".keyboard").addEventListener("mousedown",(e=>{this.pressMouseAmount=e.target.innerHTML,"Shift"===e.target.innerHTML&&(this.shiftIndicatorKey=1,g()===y?m(L,this.render.layoutKeyboard,2):m(L,this.render.layoutKeyboard,3)),"Shift"!==e.target.innerHTML&&(this.shiftIndicatorKey=0),"Caps Lock"===e.target.innerHTML&&(0===this.capsIndicator?(b(d.indexOf("CapsLock")),g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5),this.capsIndicator=1):(v(d.indexOf("CapsLock")),g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1),this.capsIndicator=0))})),document.querySelector(".keyboard").addEventListener("mouseup",(e=>{"Shift"===e.target.innerHTML&&(this.shiftIndicatorKey=0,0===this.capsIndicator?g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1):g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5),1===this.capsIndicator?g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5):(g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1),this.capsIndicator=0))})),document.addEventListener("mouseup",(()=>{"Shift"===this.pressMouseAmount&&(0===this.capsIndicator?g()===y?m(L,this.render.layoutKeyboard,0):m(L,this.render.layoutKeyboard,1):g()===y?m(L,this.render.layoutKeyboard,4):m(L,this.render.layoutKeyboard,5),this.pressMouseAmount=!1)}))}};T.renderPage(),C.onListener()})()})();