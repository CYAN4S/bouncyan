(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const y={},Te=(e,n)=>e===n,le={equals:Te};let ke=ae;const x=1,L=2,fe={owned:null,cleanups:null,context:null,owner:null};var $=null;let w=null,a=null,b=null,S=null,q=0;function Be(e,n){const t=a,i=$,s=e.length===0,l=s?fe:{owned:null,cleanups:null,context:null,owner:n||i},r=s?e:()=>e(()=>F(()=>D(l)));$=l,a=null;try{return k(r,!0)}finally{a=t,$=i}}function B(e,n){n=n?Object.assign({},le,n):le;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),ce(t,s));return[Oe.bind(t),i]}function T(e,n,t){const i=Ie(e,n,!1,x);G(i)}function F(e){const n=a;a=null;try{return e()}finally{a=n}}function Oe(){const e=w;if(this.sources&&(this.state||e))if(this.state===x||e)G(this);else{const n=b;b=null,k(()=>I(this),!1),b=n}if(a){const n=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(n)):(a.sources=[this],a.sourceSlots=[n]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function ce(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&k(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=w&&w.running;r&&w.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?b.push(l):S.push(l),l.observers&&de(l)),r||(l.state=x)}if(b.length>1e6)throw b=[],new Error},!1)),n}function G(e){if(!e.fn)return;D(e);const n=$,t=a,i=q;a=$=e,Le(e,e.value,i),a=t,$=n}function Le(e,n,t){let i;try{i=e.fn(n)}catch(s){e.pure&&(e.state=x,e.owned&&e.owned.forEach(D),e.owned=null),he(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ce(e,i):e.value=i,e.updatedAt=t)}function Ie(e,n,t,i=x,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:$,context:null,pure:t};return $===null||$!==fe&&($.owned?$.owned.push(l):$.owned=[l]),l}function ue(e){const n=w;if(e.state===0||n)return;if(e.state===L||n)return I(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===x||n)G(e);else if(e.state===L||n){const s=b;b=null,k(()=>I(e,t[0]),!1),b=s}}function k(e,n){if(b)return e();let t=!1;n||(b=[]),S?t=!0:S=[],q++;try{const i=e();return Pe(t),i}catch(i){b||(S=null),b=null,he(i)}}function Pe(e){if(b&&(ae(b),b=null),e)return;const n=S;S=null,n.length&&k(()=>ke(n),!1)}function ae(e){for(let n=0;n<e.length;n++)ue(e[n])}function I(e,n){const t=w;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===x||t?s!==n&&ue(s):(s.state===L||t)&&I(s,n))}}function de(e){const n=w;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=L,i.pure?b.push(i):S.push(i),i.observers&&de(i))}}function D(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const l=s.pop(),r=t.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,t.observerSlots[i]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)D(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function De(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function he(e){throw e=De(e),e}function Me(e,n){return F(()=>e(n||{}))}function Ue(e,n,t){let i=t.length,s=n.length,l=i,r=0,o=0,u=n[s-1].nextSibling,d=null;for(;r<s||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[s-1]===t[l-1];)s--,l--;if(s===r){const f=l<i?o?t[o-1].nextSibling:t[l-o]:u;for(;o<l;)e.insertBefore(t[o++],f)}else if(l===o)for(;r<s;)(!d||!d.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[s-1]){const f=n[--s].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],f),n[s]=t[l]}else{if(!d){d=new Map;let _=o;for(;_<l;)d.set(t[_],_++)}const f=d.get(n[r]);if(f!=null)if(o<f&&f<l){let _=r,p=1,g;for(;++_<s&&_<l&&!((g=d.get(n[_]))==null||g!==f+p);)p++;if(p>f-o){const m=n[r];for(;o<f;)e.insertBefore(t[o++],m)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const oe="_$DX_DELEGATE";function qe(e,n,t,i={}){let s;return Be(l=>{s=l,n===document?e():Ge(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{s(),n.textContent=""}}function ge(e,n,t){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return t&&(s=s.firstChild),s}function Fe(e,n=window.document){const t=n[oe]||(n[oe]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];t.has(l)||(t.add(l),n.addEventListener(l,Re))}}function O(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function v(e,n){n==null?e.removeAttribute("class"):e.className=n}function Ge(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return P(e,n,i,t);T(s=>P(e,n(),s,t),i)}function Re(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));t;){const i=t[n];if(i&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?i.call(t,s,e):i.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function P(e,n,t,i,s){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=i!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(y.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=A(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(y.context)return t;t=A(e,t,i)}else{if(l==="function")return T(()=>{let o=n();for(;typeof o=="function";)o=o();t=P(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],u=t&&Array.isArray(t);if(U(o,n,t,s))return T(()=>t=P(e,o,t,i,!0)),()=>t;if(y.context){if(!o.length)return t;for(let d=0;d<o.length;d++)if(o[d].parentNode)return t=o}if(o.length===0){if(t=A(e,t,i),r)return t}else u?t.length===0?re(e,o,i):Ue(e,t,o):(t&&A(e),re(e,o));t=o}else if(n instanceof Node){if(y.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=A(e,t,i,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function U(e,n,t,i){let s=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],u=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=U(e,o,u)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=U(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||s}else e.push(o),s=!0;else{const d=String(o);u&&u.nodeType===3&&u.data===d?e.push(u):e.push(document.createTextNode(d))}}return s}function re(e,n,t=null){for(let i=0,s=n.length;i<s;i++)e.insertBefore(n[i],t)}function A(e,n,t,i){if(t===void 0)return e.textContent="";const s=i||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(s!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(s,o):e.insertBefore(s,t):u&&o.remove()}else l=!0}}else e.insertBefore(s,t);return[s]}const Ve="_main_26yhi_1",je="_none_26yhi_10",He="_nocursor_26yhi_14",Ye="_core_26yhi_20",Ke="_label_26yhi_27",Qe="_cyan_26yhi_37",We="_white_26yhi_43",Xe="_room_26yhi_49",Je="_settings_26yhi_57",Ze="_labels_26yhi_84",ze="_slide_26yhi_103",et="_slideBar_26yhi_109",tt="_roomx_26yhi_161",h={main:Ve,none:je,nocursor:He,core:Ye,label:Ke,cyan:Qe,white:We,room:Xe,settings:Je,labels:Ze,slide:ze,slideBar:et,roomx:tt},nt="/assets/one-9a1f9dba.svg",it="/assets/more-753c8d38.svg",st="/assets/loop-d23e72bf.svg",lt="/assets/one-39cc637b.svg",ot="/assets/more-06f5a2c4.svg",rt="/assets/loop-5892a272.svg",ft=ge('<main><span>CYAN</span><img alt="The animation of Cyan bouncing."></main>'),ct=ge('<div id="settings"><form><h2>MOTION</h2><input type="radio" name="motion" value="0" id="m0" checked><input type="radio" name="motion" value="1" id="m1"><input type="radio" name="motion" value="2" id="m2"><div><label for="m0"><img></label><label for="m1"><img></label><label for="m2"><img></label></div><hr><h2>BACKGROUND</h2><input type="radio" name="back" value="0" id="b0" checked><input type="radio" name="back" value="1" id="b1"><input type="radio" name="back" value="2" id="b2"><div><label for="b0"><div></div></label><label for="b1"><div></div></label><label for="b2"><div></div></label></div><hr><div><span>Show label</span><label for="l"><input type="checkbox" id="l" checked><div><div></div></div></label></div><hr><p>Made by <a href="https://www.cyan4s.com">CYAN4S</a>.</p><p>Source code at <a href="https://github.com/CYAN4S/bouncyan">GitHub</a>.</p></form></div>'),ut=[nt,it,st],at=[h.cyan,h.white,h.room],dt=()=>{const[e,n]=B(!1),[t,i]=B(0),[s,l]=B(0),[r,o]=B(!0),u=f=>{l(+f.currentTarget.value)},d=f=>{i(+f.currentTarget.value)};return[(()=>{const f=ft.cloneNode(!0),_=f.firstChild,p=_.nextSibling;return f.$$click=()=>n(g=>!g),T(g=>{const m=`${h.main} ${at[s()]} ${!e()&&h.nocursor}`,E=`${h.label} ${!r()&&h.none}`,C=ut[t()],N=h.core;return m!==g._v$&&v(f,g._v$=m),E!==g._v$2&&v(_,g._v$2=E),C!==g._v$3&&O(p,"src",g._v$3=C),N!==g._v$4&&v(p,g._v$4=N),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),f})(),(()=>{const f=ct.cloneNode(!0),_=f.firstChild,p=_.firstChild,g=p.nextSibling,m=g.nextSibling,E=m.nextSibling,C=E.nextSibling,N=C.firstChild,be=N.firstChild,R=N.nextSibling,_e=R.firstChild,ve=R.nextSibling,$e=ve.firstChild,pe=C.nextSibling,ye=pe.nextSibling,V=ye.nextSibling,j=V.nextSibling,H=j.nextSibling,M=H.nextSibling,Y=M.firstChild,me=Y.firstChild,K=Y.nextSibling,we=K.firstChild,Se=K.nextSibling,xe=Se.firstChild,Ce=M.nextSibling,Q=Ce.nextSibling,Ae=Q.firstChild,Ee=Ae.nextSibling,W=Ee.firstChild,Ne=W.nextSibling;return g.$$click=d,m.$$click=d,E.$$click=d,O(be,"src",lt),O(_e,"src",ot),O($e,"src",rt),V.$$click=u,j.$$click=u,H.$$click=u,W.$$click=()=>o(c=>!c),T(c=>{const X=`${h.settings} ${!e()&&h.none}`,J=h.form,Z=h.labels,z=h.labels,ee=h.cyan,te=h.white,ne=h.roomx,ie=h.slide,se=h.slideBar;return X!==c._v$5&&v(f,c._v$5=X),J!==c._v$6&&v(_,c._v$6=J),Z!==c._v$7&&v(C,c._v$7=Z),z!==c._v$8&&v(M,c._v$8=z),ee!==c._v$9&&v(me,c._v$9=ee),te!==c._v$10&&v(we,c._v$10=te),ne!==c._v$11&&v(xe,c._v$11=ne),ie!==c._v$12&&v(Q,c._v$12=ie),se!==c._v$13&&v(Ne,c._v$13=se),c},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),f})()]};Fe(["click"]);const ht=document.getElementById("root");qe(()=>Me(dt,{}),ht);
