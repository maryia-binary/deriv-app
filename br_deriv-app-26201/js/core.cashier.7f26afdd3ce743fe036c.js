(self.webpackChunk=self.webpackChunk||[]).push([[2856],{20217:(e,r,t)=>{var o,a,n,s,i,d,l,u,c,p;self,e.exports=(o=t(11838),a=t(90154),n=t(90004),s=t(20374),i=t(59001),d=t(16),l=t(32735),u=t(12788),c=t(90258),p=t(14956),(()=>{"use strict";var e,r,t,f,m={"@deriv/components":e=>{e.exports=o},"@deriv/components/src/hooks":e=>{e.exports=a},"@deriv/shared":e=>{e.exports=n},"@deriv/translations":e=>{e.exports=s},mobx:e=>{e.exports=i},"mobx-react":e=>{e.exports=d},react:e=>{e.exports=l},"react-dom":e=>{e.exports=u},"react-router":e=>{e.exports=c},"react-router-dom":e=>{e.exports=p}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return m[e].call(t.exports,t,t.exports,v),t.loaded=!0,t.exports}v.m=m,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"cashier/js/cashier."+e+"."+{404:"29888f112ca8a6514729","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08":"0988b989e4a4abee2332","cashier-app":"54434ff9c0f598e72728"}[e]+".js",v.miniCssF=e=>"cashier/css/"+e+".5a6383024a6e94d471a5.css",v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@deriv/cashier:",v.l=(t,o,a,n)=>{if(e[t])e[t].push(o);else{var s,i;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+a){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,v.nc&&s.setAttribute("nonce",v.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[o];var c=(r,o)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(o))),r)return r(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),i&&document.head.appendChild(s)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),v.p="/br_deriv-app-26201/",t=e=>new Promise(((r,t)=>{var o=v.miniCssF(e),a=v.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=(s=t[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===r))return s}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var s;if((a=(s=n[o]).getAttribute("data-href"))===e||a===r)return s}})(o,a))return r();((e,r,t,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)t();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,a.parentNode.removeChild(a),o(d)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),f={cashier:0},v.f.miniCss=(e,r)=>{f[e]?r.push(f[e]):0!==f[e]&&{"cashier-app":1}[e]&&r.push(f[e]=t(e).then((()=>{f[e]=0}),(r=>{throw delete f[e],r})))},(()=>{var e={cashier:0};v.f.j=(r,t)=>{var o=v.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=v.p+v.u(r),s=new Error;v.l(n,(t=>{if(v.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",s.name="ChunkLoadError",s.type=a,s.request=n,o[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[n,s,i]=t,d=0;if(n.some((r=>0!==e[r]))){for(o in s)v.o(s,o)&&(v.m[o]=s[o]);i&&i(v)}for(r&&r(t);d<n.length;d++)a=n[d],v.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var b={};return(()=>{v.d(b,{default:()=>a});var e=v("react"),r=v.n(e),t=v("@deriv/shared"),o=v("@deriv/components");const a=(0,t.makeLazyLoader)((function(){return Promise.all([v.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08"),v.e("cashier-app")]).then(v.bind(v,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),b.default})())}}]);