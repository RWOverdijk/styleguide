(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Base/index.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),s=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./node_modules/docz/dist/index.m.js"),c=(a("./src/components/Base/index.js"),a("./src/components/Wrapper/index.js")),i=a("./src/globals.js");n.default=function(e){var n=e.components;!function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:n},o.a.createElement(s.MDXTag,{name:"h1",components:n,props:{id:"base"}},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#base"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Base"),o.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Base />")," is the base component that gets extended by all others, where some common styles get applied.\nIt will likely never be used directly."),o.a.createElement(r.d,{__position:0,__code:"{Object.keys(colors).map(colorName => {\n  const color = colors[colorName]\n  return (\n    <div\n      style={{\n        width: 250,\n        height: 150,\n        marginBottom: 120,\n        display: 'inline-block',\n      }}\n    >\n      <div\n        style={{\n          width: '100%',\n          height: '100%',\n          backgroundColor: color,\n        }}\n      />\n      <div\n        style={{\n          display: 'block',\n          width: '100%',\n          color: 'black',\n          padding: 5,\n          background: 'white',\n        }}\n      >\n        <div>{color}</div>\n        <div>{colorName}</div>\n      </div>\n    </div>\n  )\n})}",wrapper:c.a},Object.keys(i.a).map(function(e){var n=i.a[e];return o.a.createElement("div",{style:{width:250,height:150,marginBottom:120,display:"inline-block"}},o.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:n}}),o.a.createElement("div",{style:{display:"block",width:"100%",color:"black",padding:5,background:"white"}},o.a.createElement("div",null,n),o.a.createElement("div",null,e)))})))}}}]);