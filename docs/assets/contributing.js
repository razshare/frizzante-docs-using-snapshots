import{p as E,f as F,a as P,s as t,b,c as T,g as _,u as x}from"./index-CQxZXpNM.js";import{C as o}from"./code.js";import{P as q,T as e,R,F as k}from"./right_sidebar.js";import{T as D}from"./tip.js";import{b as C}from"./navbar.js";var H=F("<span>If you don’t have direct access to it you will need to fork your own frizzante repository.</span> <br/> <span>Then when you’re done with your changes you will need to submit a pull request.</span>",1),B=F(`<!> <span>This document describes the full process of setting up a fully working local development environment and
        submitting your first contribution.</span> <!> <span>Clone the frizzante repository from GitHub.</span> <!> <!> <!> <span>Create a new branch and give it a name that describes your changes.</span> <!> <!> <span>Submitted code must follow a few rules.</span> <!> <span>Export Everything</span> <!> <!> <span>Data and logic must be separated, don’t define receiver functions unless you’re forced to by some third party
        package.</span> <br/> <span>This type of code should be avoided</span> <!> <span>and be instead converted into</span> <!> <!> <span>When you’re done with your changes you can submit a pull request in order to implement them into frizzante.</span>`,1);function J(S,n){E(n,!0),q(S,{title:"Contributing",get dev(){return n.dev},rightSidebar:r=>{R(r,{items:[{shift:0,text:"Contributing"},{shift:0,text:"Clone Repository"},{shift:0,text:"Create Branch"},{shift:0,text:"Coding Standards"},{shift:1,text:"Export Everything"},{shift:1,text:"Data & Logic"},{shift:0,text:"Pull Requests"}]})},footer:r=>{{let s=x(()=>({label:"Issues",href:C("/issues",{dev:n.dev})})),a=x(()=>({label:"Faq",href:C("/faq",{dev:n.dev})}));k(r,{get previous(){return _(s)},get next(){return _(a)}})}},children:(r,s)=>{var a=B(),i=P(a);e(i,{text:"Contributing"});var u=t(i,4);e(u,{text:"Clone Repository"});var d=t(u,4);o(d,{source:"git clone https://github.com/razshare/frizzante"});var l=t(d,2);D(l,{children:(z,W)=>{var M=H();b(z,M)}});var c=t(l,2);e(c,{text:"Create Branch"});var p=t(c,4);o(p,{source:"git checkout -b feature/some-feature"});var f=t(p,2);e(f,{text:"Coding Standards"});var h=t(f,4);e(h,{type:"h3",text:"Export Everything"});var g=t(h,4);o(g,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
                Field2 int
                Field3 bool
                Field4 any
            }
            func MyFunction(){}
            const Planet = "Earth"
            var Name = "World"
        `});var y=t(g,2);e(y,{type:"h3",text:"Data & Logic"});var v=t(y,8);o(v,{lang:"go",source:`
            type MyStruct struct {
                field1 string
            }
            func (str *MyStruct) MyFunction(){
                str.field1 = "Hello!"
            }
        `});var m=t(v,4);o(m,{lang:"go",source:`
            type MyStruct struct {
                Field1 string
            }
            func MyFunction(str *MyStruct){
                str.Field1 = "Hello!"
            }
        `});var w=t(m,2);e(w,{text:"Pull Requests"}),b(r,a)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),T()}export{J as default};
