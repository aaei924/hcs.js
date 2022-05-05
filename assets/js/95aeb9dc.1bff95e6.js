"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[978],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="\ub85c\uadf8\uc778",l={unversionedId:"methods/login",id:"methods/login",title:"\ub85c\uadf8\uc778",description:"\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.",source:"@site/docs/methods/login.mdx",sourceDirName:"methods",slug:"/methods/login",permalink:"/docs/methods/login",editUrl:"https://github.com/kimcore/hcs.js/tree/main/docs/docs/methods/login.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"\ud559\uad50 \uac80\uc0c9",permalink:"/docs/methods/searchSchool"},next:{title:"\ud559\uc0dd \uc815\ubcf4 \ud655\uc778",permalink:"/docs/methods/userInfo"}},u={},p=[{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3},{value:"\uacb0\uacfc \uc608\uc2dc",id:"\uacb0\uacfc-\uc608\uc2dc",level:3},{value:"\uc131\uacf5",id:"\uc131\uacf5",level:4},{value:"\uc2e4\ud328",id:"\uc2e4\ud328",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub85c\uadf8\uc778"},"\ub85c\uadf8\uc778"),(0,a.kt)("p",null,"\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const name = "\uc5c4\uc900\uc2dd" // \ud559\uc0dd \uc774\ub984\nconst birth = "040309" // \uc0dd\ub144\uc6d4\uc77c 6\uc790\ub9ac\nconst password = "1234" // \ube44\ubc00\ubc88\ud638 4\uc790\ub9ac\n\nconst login = await hcs.login(school.endpoint, school.schoolCode, name, birth, school.searchKey, password)\n')),(0,a.kt)("h3",{id:"\uacb0\uacfc-\uc608\uc2dc"},"\uacb0\uacfc \uc608\uc2dc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/LoginResult"},"LoginResult"),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"\uc131\uacf5"},"\uc131\uacf5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  success: true,\n  agreementRequired: false,\n  schoolName: "\uc11c\uc6b8\uacfc\ud559\uace0\ub4f1\ud559\uad50",\n  name: "\uc5c4\uc900\uc2dd",\n  birthday: "040309",\n  token: "Bearer ..."\n}\n')),(0,a.kt)("h4",{id:"\uc2e4\ud328"},"\uc2e4\ud328"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  success: false, // \uc131\uacf5 \uc5ec\ubd80\n  failCount : 1,\n  remainingMinutes: 0,\n  message: "\uc624\ub958 \uba54\uc2dc\uc9c0"\n}\n')))}m.isMDXComponent=!0}}]);