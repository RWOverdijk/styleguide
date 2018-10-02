(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/FloatingInfoBlock/index.mdx":function(e,n,a){"use strict";a.r(n);var o=a("./node_modules/react/index.js"),r=a.n(o),t=a("./node_modules/@mdx-js/tag/dist/index.js"),i=a("./node_modules/docz/dist/index.m.js"),c=a("./src/components/Wrapper/index.js"),l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),p=a("./src/globals.js"),s=a("./src/components/Icon/index.js"),m=f(["\n  background: ",";\n  width: 65px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  background: ",";\n  width: 65px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n"]),d=f(["\n  box-shadow: -2rem 1.4rem 2rem 0 rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  height: 65px;\n  color: ",";\n"],["\n  box-shadow: -2rem 1.4rem 2rem 0 rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  height: 65px;\n  color: ",";\n"]),g=f(["\n  padding-right: 15px;\n  padding-left: 15px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"],["\n  padding-right: 15px;\n  padding-left: 15px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);function f(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u=l.default.div(m,function(e){return e.backgroundColor}),h=l.default.div(d,p.a.charcoalGray),x=l.default.div(g,p.a.white),b=function(e){var n=e.children,a=e.iconProps,o=function(e,n){var a={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}(e,["children","iconProps"]);return r.a.createElement(h,o,a.name&&r.a.createElement(u,{backgroundColor:o.iconBackgroundColor},r.a.createElement(s.a,Object.assign({variant:1,fontSize:"40px"},a))),r.a.createElement(x,null,n))};b.defaultProps={iconProps:null,iconBackgroundColor:p.a.charcoalGray};var y=b;b.__docgenInfo={description:"",methods:[],displayName:"FloatingInfoBlock",props:{iconProps:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"object"},description:"Props to be passed to the <Icon /> component."},iconBackgroundColor:{defaultValue:{value:"colors.charcoalGray",computed:!0},required:!1,flowType:{name:"string"},description:"The background to be specified for the icon."},children:{required:!1,flowType:{name:"Node"},description:"The children itself."}}};var k=a("./src/components/Paragraph/index.js");n.default=function(e){var n=e.components;!function(e,n){var a={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}(e,["components"]);return r.a.createElement(t.MDXTag,{name:"wrapper",components:n},r.a.createElement(t.MDXTag,{name:"h1",components:n,props:{id:"floatinginfoblock"}},r.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#floatinginfoblock"}},r.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"FloatingInfoBlock"),r.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"props"}},r.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},r.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),r.a.createElement(i.e,{of:y}),r.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},r.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(i.d,{__position:1,__code:'<FloatingInfoBlock iconProps={{ name: \'windmill\' }}>\n  <Paragraph fontSize="body-xsmall" fontWeight={700} margin={0}>\n    &euro; 136,92\n  </Paragraph>\n  <Paragraph fontSize="body-xsmall" margin={0}>\n    per maand\n  </Paragraph>\n</FloatingInfoBlock>',wrapper:c.a},r.a.createElement(y,{iconProps:{name:"windmill"}},r.a.createElement(k.a,{fontSize:"body-xsmall",fontWeight:700,margin:0},"\u20ac 136,92"),r.a.createElement(k.a,{fontSize:"body-xsmall",margin:0},"per maand"))),r.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"custom-icon"}},r.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#custom-icon"}},r.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Custom icon"),r.a.createElement(i.d,{__position:2,__code:'<FloatingInfoBlock\n  iconProps={{ name: \'facebook\', fontSize: \'50px\' }}\n  iconBackgroundColor="red"\n>\n  <Paragraph fontSize="body-xsmall" fontWeight={700} margin={0}>\n    &euro; 136,92\n  </Paragraph>\n  <Paragraph fontSize="body-xsmall" margin={0}>\n    per maand\n  </Paragraph>\n</FloatingInfoBlock>',wrapper:c.a},r.a.createElement(y,{iconProps:{name:"facebook",fontSize:"50px"},iconBackgroundColor:"red"},r.a.createElement(k.a,{fontSize:"body-xsmall",fontWeight:700,margin:0},"\u20ac 136,92"),r.a.createElement(k.a,{fontSize:"body-xsmall",margin:0},"per maand"))))}}}]);