import{p as M,f as l,a as u,s as e,b as n,c as N,g as D,u as S,h as f}from"./index-CQxZXpNM.js";import{f as R,h as q,b as y}from"./navbar.js";import{C as i}from"./code.js";import{P as A,T as L,R as Y,F as B}from"./right_sidebar.js";import{I as p}from"./inline_code.js";import{K as h}from"./keyed_section.js";import{N as H}from"./note.js";import{T as J}from"./tip.js";var O=l("<span>All <!> tags are optional.</span>"),Q=l("<!> <!>",1),U=l("<span>You can use the default <!> alias to access the <!> directory.</span> <!>",1),V=l("<!> <span>This will generate your type definitions in <!>.</span> <!> <!>",1),W=l("<!> <span>It is possible, but not required, to generate TypeScript type definitions from Go structs using <a>cli plugins</a> and <!>, where T is the type you wish to generate.</span> <br/> <br/> <!> <!> <!>",1);function le(I,t){M(t,!0),A(I,{title:"Type Definitions",get dev(){return t.dev},rightSidebar:s=>{Y(s,{items:[{shift:0,text:"Type Definitions"},{shift:1,text:"Define your Go types"},{shift:1,text:"Call types.Generate[T]()"},{shift:1,text:"Generate types"}]})},footer:s=>{{let $=S(()=>({label:"Cli",href:y("/cli",{dev:t.dev})})),d=S(()=>({label:"Snapshots",href:y("/snapshots",{dev:t.dev})}));B(s,{get previous(){return D($)},get next(){return D(d)}})}},children:(s,$)=>{var d=W(),P=u(d);L(P,{text:"Type Definitions"});var b=e(P,2),T=e(f(b));R(T,r=>({...r}),[()=>q(y("/cli#plugins",{dev:t.dev}))]);var z=e(T,2);p(z,{source:"types.Generate[T]()"});var x=e(b,6);h(x,{key:"1",description:"Define your Go types.",children:(r,w)=>{var o=Q(),a=u(o);i(a,{lang:"go",source:`
                package welcome

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `});var c=e(a,2);H(c,{children:(v,m)=>{var g=O(),_=e(f(g));p(_,{source:"json"}),n(v,g)}}),n(r,o)},$$slots:{default:!0}});var G=e(x,2);h(G,{key:"2",description:"Call types.Generate[T]().",children:(r,w)=>{i(r,{lang:"go",source:`
                package welcome

                func init() {
                    _ = types.Generate[Props]()
                }

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `})},$$slots:{default:!0}});var E=e(G,2);h(E,{key:"3",description:"Generate types.",noLink:!0,children:(r,w)=>{var o=V(),a=u(o);i(a,{lang:"shell",source:`
                frizzante g types
            `});var c=e(a,2),v=e(f(c));p(v,{source:".gen/types"});var m=e(c,2);i(m,{lang:"ts",source:`
                export type Props = welcome.Props
                export declare namespace welcome {
                    export type Props = {
                        message: string
                        error: string
                    }
                }
            `});var g=e(m,2);J(g,{children:(_,ee)=>{var k=U(),j=u(k),C=e(f(j));p(C,{source:"$gen"});var F=e(C,2);p(F,{source:".gen"});var K=e(j,2);i(K,{lang:"ts",source:`
                    <script lang="ts">
                        import type { Props } from "$gen/types/main/lib/routes/welcome/Props"
                        let { message, error }:Props = $props()
                    <\/script>
                `}),n(_,k)}}),n(r,o)},$$slots:{default:!0}}),n(s,d)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),N()}export{le as default};
