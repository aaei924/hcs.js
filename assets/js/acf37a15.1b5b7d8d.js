"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),a=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=a(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=a(t),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=t[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4973:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],s={sidebar_position:6},u=void 0,a={unversionedId:"api/SecondLoginResult",id:"api/SecondLoginResult",title:"SecondLoginResult",description:"\uc131\uacf5 \uc2dc SecondLoginResultSuccess, \uc2e4\ud328 \uc2dc SecondLoginResultFailure\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4.",source:"@site/docs/api/SecondLoginResult.mdx",sourceDirName:"api",slug:"/api/SecondLoginResult",permalink:"/docs/api/SecondLoginResult",editUrl:"https://github.com/kimcore/hcs.js/tree/main/docs/docs/api/SecondLoginResult.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"api",previous:{title:"RegisterPasswordResult",permalink:"/docs/api/RegisterPasswordResult"},next:{title:"CovidQuickTestResult",permalink:"/docs/api/CovidQuickTestResult"}},l={},p=[{value:"SecondLoginResultSuccess",id:"secondloginresultsuccess",level:2},{value:"SecondLoginResultFailure",id:"secondloginresultfailure",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc131\uacf5 \uc2dc ",(0,i.kt)("inlineCode",{parentName:"p"},"SecondLoginResultSuccess"),", \uc2e4\ud328 \uc2dc ",(0,i.kt)("inlineCode",{parentName:"p"},"SecondLoginResultFailure"),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"secondloginresultsuccess"},"SecondLoginResultSuccess"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    success: true\n    /** 2\ucc28 \ub85c\uadf8\uc778 \ud1a0\ud070 */\n    token: string\n}\n")),(0,i.kt)("h2",{id:"secondloginresultfailure"},"SecondLoginResultFailure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    success: false\n    /** \ub85c\uadf8\uc778 \uc2e4\ud328 \ud69f\uc218 */\n    failCount?: number\n    /** \ub0a8\uc740 \uc2dc\uac04 */\n    remainingMinutes?: number\n    /** \uc624\ub958 \uba54\uc2dc\uc9c0 */\n    message: string\n}\n")))}f.isMDXComponent=!0}}]);