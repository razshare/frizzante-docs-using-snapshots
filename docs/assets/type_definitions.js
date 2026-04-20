import{p as M,f as l,a as g,s as e,b as n,c as N,g as D,u as S,h as u}from"./index-D0lsslyH.js";import{a as R,h as q,b as h}from"./navbar.js";import{C as i}from"./code.js";import{P as A,T as L,R as Y,F as B}from"./right_sidebar.js";import{I as p}from"./inline_code.js";import{K as v}from"./keyed_section.js";import{N as H}from"./note.js";import{T as J}from"./tip.js";var O=l("<span>All <!> tags are optional.</span>"),Q=l("<!> <!>",1),U=l("<span>You can use the default <!> alias to access the <!> directory.</span> <!>",1),V=l("<!> <span>This will generate your type definitions in <!>.</span> <!> <!>",1),W=l("<!> <span>It is possible, but not required, to generate TypeScript type definitions from Go structs using <a>cli plugins</a> and <!>, where T is the type you wish to generate.</span> <br/> <br/> <!> <!> <!>",1);function le(I,t){M(t,!0),A(I,{title:"Type Definitions",get prefix(){return t.prefix},rightSidebar:s=>{Y(s,{items:[{shift:0,text:"Type Definitions"},{shift:1,text:"Define your Go types"},{shift:1,text:"Call types.Generate[T]()"},{shift:1,text:"Generate types"}]})},footer:s=>{{let x=S(()=>({label:"Cli",href:h("/cli",{prefix:t.prefix})})),f=S(()=>({label:"Snapshots",href:h("/snapshots",{prefix:t.prefix})}));B(s,{get previous(){return D(x)},get next(){return D(f)}})}},children:(s,x)=>{var f=W(),$=g(f);L($,{text:"Type Definitions"});var P=e($,2),b=e(u(P));R(b,r=>({...r}),[()=>q(h("/cli#plugins",{prefix:t.prefix}))]);var z=e(b,2);p(z,{source:"types.Generate[T]()"});var T=e(P,6);v(T,{key:"1",description:"Define your Go types.",children:(r,w)=>{var o=Q(),a=g(o);i(a,{lang:"go",source:`
                package welcome

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `});var c=e(a,2);H(c,{children:(m,_)=>{var d=O(),y=e(u(d));p(y,{source:"json"}),n(m,d)}}),n(r,o)},$$slots:{default:!0}});var G=e(T,2);v(G,{key:"2",description:"Call types.Generate[T]().",children:(r,w)=>{i(r,{lang:"go",source:`
                package welcome

                func init() {
                    _ = types.Generate[Props]()
                }

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `})},$$slots:{default:!0}});var E=e(G,2);v(E,{key:"3",description:"Generate types.",noLink:!0,children:(r,w)=>{var o=V(),a=g(o);i(a,{lang:"shell",source:`
                frizzante g types
            `});var c=e(a,2),m=e(u(c));p(m,{source:".gen/types"});var _=e(c,2);i(_,{lang:"ts",source:`
                export type Props = welcome.Props
                export declare namespace welcome {
                    export type Props = {
                        message: string
                        error: string
                    }
                }
            `});var d=e(_,2);J(d,{children:(y,ee)=>{var k=U(),j=g(k),C=e(u(j));p(C,{source:"$gen"});var F=e(C,2);p(F,{source:".gen"});var K=e(j,2);i(K,{lang:"ts",source:`
                    <script lang="ts">
                        import type { Props } from "$gen/types/main/lib/routes/welcome/Props"
                        let { message, error }:Props = $props()
                    <\/script>
                `}),n(y,k)}}),n(r,o)},$$slots:{default:!0}}),n(s,f)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),N()}export{le as default};
