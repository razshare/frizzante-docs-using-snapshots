import{f as b,a as z,s as t,b as m}from"./index-DcfPEVm2.js";import"./navbar.js";import{C as o}from"./code.js";import{P as F,T as e,R as S,F as w}from"./right_sidebar.js";import{T as M}from"./tip.js";var E=b("<span>If you don’t have direct access to it you will need to fork your own frizzante repository.</span> <br/> <span>Then when you’re done with your changes you will need to submit a pull request.</span>",1),P=b(`<!> <span>This document describes the full process of setting up a fully working local development environment and
        submitting your first contribution.</span> <!> <span>Clone the frizzante repository from GitHub.</span> <!> <!> <!> <span>Create a new branch and give it a name that describes your changes.</span> <!> <!> <span>Submitted code must follow a few rules.</span> <!> <span>Export Everything</span> <!> <!> <span>Data and logic must be separated, don’t define receiver functions unless you’re forced to by some third party
        package.</span> <br/> <span>This type of code should be avoided</span> <!> <span>and be instead converted into</span> <!> <!> <span>When you’re done with your changes you can submit a pull request in order to implement them into frizzante.</span>`,1);function L(v){F(v,{title:"Contributing",rightSidebar:r=>{S(r,{items:[{shift:0,text:"Contributing"},{shift:0,text:"Clone Repository"},{shift:0,text:"Create Branch"},{shift:0,text:"Coding Standards"},{shift:1,text:"Export Everything"},{shift:1,text:"Data & Logic"},{shift:0,text:"Pull Requests"}]})},footer:r=>{w(r,{previous:{label:"Issues",href:"/frizzante-docs-using-snapshots/issues"},next:{label:"Faq",href:"/frizzante-docs-using-snapshots/faq"}})},children:(r,R)=>{var n=P(),s=z(n);e(s,{text:"Contributing"});var a=t(s,4);e(a,{text:"Clone Repository"});var i=t(a,4);o(i,{source:"git clone https://github.com/razshare/frizzante"});var u=t(i,2);M(u,{children:(_,$)=>{var C=E();m(_,C)}});var d=t(u,2);e(d,{text:"Create Branch"});var l=t(d,4);o(l,{source:"git checkout -b feature/some-feature"});var p=t(l,2);e(p,{text:"Coding Standards"});var c=t(p,4);e(c,{type:"h3",text:"Export Everything"});var f=t(c,4);o(f,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
                Field2 int
                Field3 bool
                Field4 any
            }
            func MyFunction(){}
            const Planet = "Earth"
            var Name = "World"
        `});var h=t(f,2);e(h,{type:"h3",text:"Data & Logic"});var g=t(h,8);o(g,{lang:"go",source:`
            type MyStruct struct {
                field1 string
            }
            func (str *MyStruct) MyFunction(){
                str.field1 = "Hello!"
            }
        `});var y=t(g,4);o(y,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
            }
            func MyFunction(str *MyStruct){
                str.Field1 = "Hello!"
            }
        `});var x=t(y,2);e(x,{text:"Pull Requests"}),m(r,n)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{L as default};
