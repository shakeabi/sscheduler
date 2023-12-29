var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){return""===t?void 0:+t}function f(t,e){(null!=e||t.value)&&(t.value=e)}function m(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let h;function x(t){h=t}function g(){if(!h)throw new Error("Function called outside component initialization");return h}const C=[],T=[],b=[],M=[],y=Promise.resolve();let k=!1;function G(t){b.push(t)}let $=!1;const w=new Set;function S(){if(!$){$=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];x(e),j(e.$$)}for(C.length=0;T.length;)T.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];w.has(e)||(w.add(e),e())}b.length=0}while(C.length);for(;M.length;)M.pop()();k=!1,$=!1,w.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const A=new Set;let E;function L(t,e){t&&t.i&&(A.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),E.c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function I(t,e){const n=e.token={};function a(t,a,u,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;void 0!==u&&(i=i.slice(),i[u]=l);const r=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==a&&t&&(E={r:0,c:[],p:E},z(t,1,1,()=>{e.blocks[n]=null}),E.r||o(E.c),E=E.p)}):e.block.d(1),r.c(),L(r,1),r.m(e.mount(),e.anchor),c=!0),e.block=r,e.blocks&&(e.blocks[a]=r),c&&S()}if((u=t)&&"object"==typeof u&&"function"==typeof u.then){const n=g();if(t.then(t=>{x(n),a(e.then,1,e.value,t),x(null)},t=>{x(n),a(e.catch,2,e.error,t),x(null)}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,t),!0;e.resolved=t}var u}function D(t,n,u){const{fragment:l,on_mount:i,on_destroy:r,after_update:c}=t.$$;l&&l.m(n,u),G(()=>{const n=i.map(e).filter(a);r?r.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(G)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(C.push(t),k||(k=!0,y.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,a,u,l,i,c,s=[-1]){const d=h;x(e);const v=a.props||{},_=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:s};let p=!1;if(_.ctx=u?u(e,v,(t,n,...o)=>{const a=o.length?o[0]:n;return _.ctx&&i(_.ctx[t],_.ctx[t]=a)&&(_.bound[t]&&_.bound[t](a),p&&N(e,t)),n}):[],_.update(),p=!0,o(_.before_update),_.fragment=!!l&&l(_.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);_.fragment&&_.fragment.l(t),t.forEach(r)}else _.fragment&&_.fragment.c();a.intro&&L(e.$$.fragment),D(e,a.target,a.anchor),S()}x(d)}class R{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const V=t=>t.toString(16).padStart(2,"0");function K(t){t.getTimezoneOffset();var e=function(t){var e=Math.floor(Math.abs(t));return(e<10?"0":"")+e};return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())+"T"+e(t.getHours())+":"+e(t.getMinutes())}const P=(t,e)=>{const n=new Date(t);return new Date(n.getTime()+6e4*e)};function H(e){let n,o,a,u,s,d,p,f,h,x,g,C,T,b,M,y,k,$,w,S,j,A,E,L,z,I,D,U,N,B,R,V,K,P,H,O,F,W,Y,q,J,Q;return{c(){n=c("select"),o=c("option"),o.textContent="(GMT -12:00) Eniwetok, Kwajalein",a=c("option"),a.textContent="(GMT -11:00) Midway Island, Samoa",u=c("option"),u.textContent="(GMT -10:00) Hawaii",s=c("option"),s.textContent="(GMT -9:30) Taiohae",d=c("option"),d.textContent="(GMT -9:00) Alaska",p=c("option"),p.textContent="(GMT -8:00) Pacific Time (US & Canada)",f=c("option"),f.textContent="(GMT -7:00) Mountain Time (US & Canada)",h=c("option"),h.textContent="(GMT -6:00) Central Time (US & Canada), Mexico City",x=c("option"),x.textContent="(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",g=c("option"),g.textContent="(GMT -4:30) Caracas",C=c("option"),C.textContent="(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",T=c("option"),T.textContent="(GMT -3:30) Newfoundland",b=c("option"),b.textContent="(GMT -3:00) Brazil, Buenos Aires, Georgetown",M=c("option"),M.textContent="(GMT -2:00) Mid-Atlantic",y=c("option"),y.textContent="(GMT -1:00) Azores, Cape Verde Islands",k=c("option"),k.textContent="(GMT) Western Europe Time, London, Lisbon, Casablanca",$=c("option"),$.textContent="(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",w=c("option"),w.textContent="(GMT +2:00) Kaliningrad, South Africa",S=c("option"),S.textContent="(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",j=c("option"),j.textContent="(GMT +3:30) Tehran",A=c("option"),A.textContent="(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",E=c("option"),E.textContent="(GMT +4:30) Kabul",L=c("option"),L.textContent="(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",z=c("option"),z.textContent="(GMT +5:30) Bombay, Calcutta, Madras, New Delhi",I=c("option"),I.textContent="(GMT +5:45) Kathmandu, Pokhara",D=c("option"),D.textContent="(GMT +6:00) Almaty, Dhaka, Colombo",U=c("option"),U.textContent="(GMT +6:30) Yangon, Mandalay",N=c("option"),N.textContent="(GMT +7:00) Bangkok, Hanoi, Jakarta",B=c("option"),B.textContent="(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",R=c("option"),R.textContent="(GMT +8:45) Eucla",V=c("option"),V.textContent="(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",K=c("option"),K.textContent="(GMT +9:30) Adelaide, Darwin",P=c("option"),P.textContent="(GMT +10:00) Eastern Australia, Guam, Vladivostok",H=c("option"),H.textContent="(GMT +10:30) Lord Howe Island",O=c("option"),O.textContent="(GMT +11:00) Magadan, Solomon Islands, New Caledonia",F=c("option"),F.textContent="(GMT +11:30) Norfolk Island",W=c("option"),W.textContent="(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",Y=c("option"),Y.textContent="(GMT +12:45) Chatham Islands",q=c("option"),q.textContent="(GMT +13:00) Apia, Nukualofa",J=c("option"),J.textContent="(GMT +14:00) Line Islands, Tokelau",o.__value="-1200",o.value=o.__value,a.__value="-1100",a.value=a.__value,u.__value="-1000",u.value=u.__value,s.__value="-0930",s.value=s.__value,d.__value="-0900",d.value=d.__value,p.__value="-0800",p.value=p.__value,f.__value="-0700",f.value=f.__value,h.__value="-0600",h.value=h.__value,x.__value="-0500",x.value=x.__value,g.__value="-0430",g.value=g.__value,C.__value="-0400",C.value=C.__value,T.__value="-0330",T.value=T.__value,b.__value="-0300",b.value=b.__value,M.__value="-0200",M.value=M.__value,y.__value="-0100",y.value=y.__value,k.__value="+0000",k.value=k.__value,$.__value="+0100",$.value=$.__value,w.__value="+0200",w.value=w.__value,S.__value="+0300",S.value=S.__value,j.__value="+0330",j.value=j.__value,A.__value="+0400",A.value=A.__value,E.__value="+0430",E.value=E.__value,L.__value="+0500",L.value=L.__value,z.__value="+0530",z.value=z.__value,z.selected="selected",I.__value="+0545",I.value=I.__value,D.__value="+0600",D.value=D.__value,U.__value="+0630",U.value=U.__value,N.__value="+0700",N.value=N.__value,B.__value="+0800",B.value=B.__value,R.__value="+0845",R.value=R.__value,V.__value="+0900",V.value=V.__value,K.__value="+0930",K.value=K.__value,P.__value="+1000",P.value=P.__value,H.__value="+1030",H.value=H.__value,O.__value="+1100",O.value=O.__value,F.__value="+1130",F.value=F.__value,W.__value="+1200",W.value=W.__value,Y.__value="+1245",Y.value=Y.__value,q.__value="+1300",q.value=q.__value,J.__value="+1400",J.value=J.__value,_(n,"name","timezone_offset"),_(n,"id","timezone-offset"),void 0===e[0]&&G(()=>e[1].call(n))},m(t,r,c){i(t,n,r),l(n,o),l(n,a),l(n,u),l(n,s),l(n,d),l(n,p),l(n,f),l(n,h),l(n,x),l(n,g),l(n,C),l(n,T),l(n,b),l(n,M),l(n,y),l(n,k),l(n,$),l(n,w),l(n,S),l(n,j),l(n,A),l(n,E),l(n,L),l(n,z),l(n,I),l(n,D),l(n,U),l(n,N),l(n,B),l(n,R),l(n,V),l(n,K),l(n,P),l(n,H),l(n,O),l(n,F),l(n,W),l(n,Y),l(n,q),l(n,J),m(n,e[0]),c&&Q(),Q=v(n,"change",e[1])},p(t,[e]){1&e&&m(n,t[0])},i:t,o:t,d(t){t&&r(n),Q()}}}function O(t,e,n){let{timezone:o}=e;return t.$set=t=>{"timezone"in t&&n(0,o=t.timezone)},[o,function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,o)}]}class F extends R{constructor(t){super(),B(this,t,O,H,u,{timezone:0})}}function W(t){let e,n,a,u,l,s,p,m;return{c(){e=c("p"),e.textContent="Subject?",n=d(),a=c("input"),u=d(),l=c("p"),l.textContent="Description?",s=d(),p=c("input"),_(e,"class","svelte-vr4o52"),_(a,"id","subjectInp"),_(a,"type","text"),_(l,"class","svelte-vr4o52"),_(p,"id","descInp"),_(p,"type","text")},m(r,c,d){i(r,e,c),i(r,n,c),i(r,a,c),f(a,t[1].subject),i(r,u,c),i(r,l,c),i(r,s,c),i(r,p,c),f(p,t[1].description),d&&o(m),m=[v(a,"input",t[11]),v(p,"input",t[12])]},p(t,e){2&e&&a.value!==t[1].subject&&f(a,t[1].subject),2&e&&p.value!==t[1].description&&f(p,t[1].description)},d(t){t&&r(e),t&&r(n),t&&r(a),t&&r(u),t&&r(l),t&&r(s),t&&r(p),o(m)}}}function Y(e){let n,o;return{c(){n=c("button"),n.textContent="Add Subject and Desc."},m(t,a,u){i(t,n,a),u&&o(),o=v(n,"click",e[10])},p:t,d(t){t&&r(n),o()}}}function q(t){let e,n,o,a,u,v,p,f,m,h,x,g;return{c(){e=c("p"),e.textContent="Meet Details",n=d(),o=c("div"),a=s("Moderator Link: "),u=c("a"),v=s("Link"),f=c("br"),m=s("\n\t\t\tAttendee Link: "),h=c("a"),x=s("Link"),_(e,"class","svelte-vr4o52"),_(u,"href",p=t[2].moderatorURL),_(h,"href",g=t[2].customerURL)},m(t,r){i(t,e,r),i(t,n,r),i(t,o,r),l(o,a),l(o,u),l(u,v),l(o,f),l(o,m),l(o,h),l(h,x)},p(t,e){4&e&&p!==(p=t[2].moderatorURL)&&_(u,"href",p),4&e&&g!==(g=t[2].customerURL)&&_(h,"href",g)},d(t){t&&r(e),t&&r(n),t&&r(o)}}}function J(t){let e,n,o={ctx:t,current:null,token:null,pending:Z,then:X,catch:Q,value:17};return I(n=t[3]({verify:!0}),o),{c(){e=s(""),o.block.c()},m(t,n){i(t,e,n),o.block.m(t,o.anchor=n),o.mount=()=>e.parentNode,o.anchor=e},p(e,n){{const a=(t=e).slice();a[17]=o.resolved,o.block.p(a,n)}},d(t){t&&r(e),o.block.d(t),o.token=null,o=null}}}function Q(e){return{c:t,m:t,p:t,d:t}}function X(e){let n,a,u,p,f,m,h,x,g,C,T=e[17]+"";return{c(){n=c("div"),a=c("span"),a.textContent="✖",u=d(),p=c("pre"),f=s(T),m=d(),h=c("button"),h.textContent="Share - attendees",x=d(),g=c("button"),g.textContent="Share - mods",_(a,"id","verify-close"),_(a,"class","svelte-vr4o52"),_(p,"class","svelte-vr4o52"),_(h,"id","share-a"),_(g,"id","share-m"),_(n,"id","verify"),_(n,"class","svelte-vr4o52")},m(t,r,c){i(t,n,r),l(n,a),l(n,u),l(n,p),l(p,f),l(n,m),l(n,h),l(n,x),l(n,g),c&&o(C),C=[v(a,"click",e[14]),v(h,"click",e[15]),v(g,"click",e[16])]},p:t,d(t){t&&r(n),o(C)}}}function Z(e){return{c:t,m:t,p:t,d:t}}function tt(t){let e,n,a,u,s,m,h,x,g,C,b,y,k,G,$,w,S,j,A,E,I,N;function B(e){t[9].call(null,e)}let R={};void 0!==t[1].timezone&&(R.timezone=t[1].timezone);const V=new F({props:R});function P(t,e){return 0==t[0].allowSubject?Y:W}T.push(()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(V,"timezone",B));let H=P(t),O=H(t),Q=t[0].meetGenerated&&q(t),X=t[0].openVerify&&J(t);return{c(){var t;e=c("main"),n=c("h1"),n.textContent="SScheduler 📅",a=d(),u=c("p"),u.textContent="When?",s=d(),m=c("input"),x=d(),g=c("p"),g.textContent="Duration? (mins)",C=d(),b=c("input"),y=d(),k=c("p"),k.textContent="Timezone?",G=d(),(t=V.$$.fragment)&&t.c(),w=d(),O.c(),S=d(),Q&&Q.c(),j=d(),A=c("button"),A.textContent="Verify & Share",E=d(),X&&X.c(),_(n,"class","svelte-vr4o52"),_(u,"class","svelte-vr4o52"),_(m,"id","whenInp"),_(m,"type","datetime-local"),_(m,"min",h=K(new Date)),_(g,"class","svelte-vr4o52"),_(b,"id","durationInp"),_(b,"type","number"),_(b,"min","1"),_(b,"step","5"),_(k,"class","svelte-vr4o52"),_(e,"class","svelte-vr4o52")},m(r,c,d){i(r,e,c),l(e,n),l(e,a),l(e,u),l(e,s),l(e,m),f(m,t[1].dateInp),l(e,x),l(e,g),l(e,C),l(e,b),f(b,t[1].duration),l(e,y),l(e,k),l(e,G),D(V,e,null),l(e,w),O.m(e,null),l(e,S),Q&&Q.m(e,null),l(e,j),l(e,A),l(e,E),X&&X.m(e,null),I=!0,d&&o(N),N=[v(m,"input",t[6]),v(b,"input",t[7]),v(b,"change",t[8]),v(A,"click",t[13])]},p(t,[n]){2&n&&f(m,t[1].dateInp),2&n&&p(b.value)!==t[1].duration&&f(b,t[1].duration);const o={};var a;!$&&2&n&&($=!0,o.timezone=t[1].timezone,a=()=>$=!1,M.push(a)),V.$set(o),H===(H=P(t))&&O?O.p(t,n):(O.d(1),O=H(t),O&&(O.c(),O.m(e,S))),t[0].meetGenerated?Q?Q.p(t,n):(Q=q(t),Q.c(),Q.m(e,j)):Q&&(Q.d(1),Q=null),t[0].openVerify?X?X.p(t,n):(X=J(t),X.c(),X.m(e,null)):X&&(X.d(1),X=null)},i(t){I||(L(V.$$.fragment,t),I=!0)},o(t){z(V.$$.fragment,t),I=!1},d(t){t&&r(e),U(V),O.d(),Q&&Q.d(),X&&X.d(),o(N)}}}function et(t,e,n){let o,a={allowSubject:!1,openVerify:!1,meetGenerated:!1},u={subject:"New Event",description:"Event generated through https://shakeabi.github.io/sscheduler/",dateInp:K(new Date),duration:25,timezone:(new Date).toString().match(/([-\+][0-9]+)\s/)[1]};const l=async({type:t="attendee",verify:e=!1}={})=>{if(!a.meetGenerated){const t=(l=new Uint8Array((64||40)/2),window.crypto.getRandomValues(l),Array.from(l,V).join(""));n(2,o=await(async t=>{const e=(new TextEncoder).encode(t),n=await crypto.subtle.digest("SHA-256",e),o=Array.from(new Uint8Array(n)).map(t=>t.toString(16).padStart(2,"0")).join("");let a={};return a.moderatorURL="https://moderated.jitsi.net/"+t,a.customerURL="https://meet.jit.si/moderated/"+o,a})(t)),n(0,a.meetGenerated=!0,a)}var l;let i="";i="attendee"==t?o.customerURL:o.moderatorURL;let r={...u,startTime:new Date(u.dateInp).toGMTString(),endTime:P(u.dateInp,u.duration).toGMTString(),location:i},c=(t=>"https://shakeabi.github.io/sscheduler/ics.html?id="+btoa(JSON.stringify(t)))(r);return`\nMeet Invite:\n------------\nEvent Name: ${r.subject}\nEvent Desc: ${r.description}\nStart Time: ${r.startTime}\nEnd Time: ${r.endTime}\nDuration: ${r.duration} mins\nLocation: ${r.location}\n\nClick here to download .ics file: ${c}\n`},i=()=>{let t="";if(u.duration<1&&(t="Duration must be greater than 0!"),""==t)return!0;alert(t)},r=async t=>{if(i()){const e={title:u.subject,text:await l({type:t})};await navigator.share(e)}};return[a,u,o,l,r,i,function(){u.dateInp=this.value,n(1,u)},function(){u.duration=p(this.value),n(1,u)},t=>{t<1&&n(1,u.duration=1,u)},function(t){u.timezone=t,n(1,u)},()=>{n(0,a.allowSubject=!0,a)},function(){u.subject=this.value,n(1,u)},function(){u.description=this.value,n(1,u)},()=>{n(0,a.openVerify=!0,a)},()=>{n(0,a.openVerify=!1,a)},()=>r("attendee"),()=>r("mod")]}return new class extends R{constructor(t){super(),B(this,t,et,tt,u,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
