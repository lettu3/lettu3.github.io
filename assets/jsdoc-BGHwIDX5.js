import{r as d,g as l}from"./index-D26HpEs8.js";import{r as g}from"./javadoclike-myFApC35.js";function f(o,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in o)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(o,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var i,p;function j(){if(p)return i;p=1;var o=g(),n=d();i=t,t.displayName="jsdoc",t.aliases=[];function t(r){r.register(o),r.register(n),function(e){var a=e.languages.javascript,s=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,u="(@(?:arg|argument|param|property)\\s+(?:"+s+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(u+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(u+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return s})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+s),lookbehind:!0,inside:{string:a.string,number:a.number,boolean:a.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(r)}return i}var c=j();const b=l(c),y=f({__proto__:null,default:b},[c]);export{y as j};
