import{p as $,f as C,a as q,s as t,b,c as E,g as v,d as _}from"./index-CBalJl4v.js";import{i as P,b as x}from"./navbar.js";import{C as o}from"./code.js";import{P as T,T as e,R,F as k}from"./right_sidebar.js";import{T as D}from"./tip.js";var H=C("<span>If you don’t have direct access to it you will need to fork your own frizzante repository.</span> <br/> <span>Then when you’re done with your changes you will need to submit a pull request.</span>",1),B=C(`<!> <span>This document describes the full process of setting up a fully working local development environment and
        submitting your first contribution.</span> <!> <span>Clone the frizzante repository from GitHub.</span> <!> <!> <!> <span>Create a new branch and give it a name that describes your changes.</span> <!> <!> <span>Submitted code must follow a few rules.</span> <!> <span>Export Everything</span> <!> <!> <span>Data and logic must be separated, don’t define receiver functions unless you’re forced to by some third party
        package.</span> <br/> <span>This type of code should be avoided</span> <!> <span>and be instead converted into</span> <!> <!> <span>When you’re done with your changes you can submit a pull request in order to implement them into frizzante.</span>`,1);function K(F,S){$(S,!1),P(),T(F,{title:"Contributing",rightSidebar:r=>{R(r,{items:[{shift:0,text:"Contributing"},{shift:0,text:"Clone Repository"},{shift:0,text:"Create Branch"},{shift:0,text:"Coding Standards"},{shift:1,text:"Export Everything"},{shift:1,text:"Data & Logic"},{shift:0,text:"Pull Requests"}]})},footer:r=>{{let a=_(()=>({label:"Issues",href:x("/issues")})),n=_(()=>({label:"Faq",href:x("/faq")}));k(r,{get previous(){return v(a)},get next(){return v(n)}})}},children:(r,a)=>{var n=B(),s=q(n);e(s,{text:"Contributing"});var i=t(s,4);e(i,{text:"Clone Repository"});var u=t(i,4);o(u,{source:"git clone https://github.com/razshare/frizzante"});var d=t(u,2);D(d,{children:(z,W)=>{var M=H();b(z,M)}});var l=t(d,2);e(l,{text:"Create Branch"});var p=t(l,4);o(p,{source:"git checkout -b feature/some-feature"});var c=t(p,2);e(c,{text:"Coding Standards"});var f=t(c,4);e(f,{type:"h3",text:"Export Everything"});var h=t(f,4);o(h,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
                Field2 int
                Field3 bool
                Field4 any
            }
            func MyFunction(){}
            const Planet = "Earth"
            var Name = "World"
        `});var g=t(h,2);e(g,{type:"h3",text:"Data & Logic"});var y=t(g,8);o(y,{lang:"go",source:`
            type MyStruct struct {
                field1 string
            }
            func (str *MyStruct) MyFunction(){
                str.field1 = "Hello!"
            }
        `});var m=t(y,4);o(m,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
            }
            func MyFunction(str *MyStruct){
                str.Field1 = "Hello!"
            }
        `});var w=t(m,2);e(w,{text:"Pull Requests"}),b(r,n)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),E()}export{K as default};
