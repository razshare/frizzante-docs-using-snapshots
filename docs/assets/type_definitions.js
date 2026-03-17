import{p as I,f as p,a as d,s as e,b as a,c as E,e as f}from"./index-DcfPEVm2.js";import{i as F,d as K,h as M}from"./navbar.js";import{C as n}from"./code.js";import{P as N,T as R,R as q,F as A}from"./right_sidebar.js";import{I as i}from"./inline_code.js";import{K as h}from"./keyed_section.js";import{N as L}from"./note.js";import{T as Y}from"./tip.js";var B=p("<span>All <!> tags are optional.</span>"),H=p("<!> <!>",1),J=p("<span>You can use the default <!> alias to access the <!> directory.</span> <!>",1),O=p("<!> <span>This will generate your type definitions in <!>.</span> <!> <!>",1),Q=p("<!> <span>It is possible, but not required, to generate TypeScript type definitions from Go structs using <a>cli plugins</a> and <!>, where T is the type you wish to generate.</span> <br/> <br/> <!> <!> <!>",1);function ie(z,k){I(k,!1),F(),N(z,{title:"Type Definitions",rightSidebar:s=>{q(s,{items:[{shift:0,text:"Type Definitions"},{shift:1,text:"Define your Go types"},{shift:1,text:"Call types.Generate[T]()"},{shift:1,text:"Generate types"}]})},footer:s=>{A(s,{previous:{label:"Cli",href:"/frizzante-docs-using-snapshots/cli"},next:{label:"Snapshots",href:"/frizzante-docs-using-snapshots/snapshots"}})},children:(s,W)=>{var _=Q(),y=d(_);R(y,{text:"Type Definitions"});var v=e(y,2),$=e(f(v));K($,r=>({...r}),[()=>M("/frizzante-docs-using-snapshots/cli#plugins")]);var j=e($,2);i(j,{source:"types.Generate[T]()"});var P=e(v,6);h(P,{key:"1",description:"Define your Go types.",children:(r,T)=>{var t=H(),o=d(t);n(o,{lang:"go",source:`
                package welcome

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `});var l=e(o,2);L(l,{children:(g,u)=>{var c=B(),m=e(f(c));i(m,{source:"json"}),a(g,c)}}),a(r,t)},$$slots:{default:!0}});var b=e(P,2);h(b,{key:"2",description:"Call types.Generate[T]().",children:(r,T)=>{n(r,{lang:"go",source:`
                package welcome

                func init() {
                    _ = types.Generate[Props]()
                }

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `})},$$slots:{default:!0}});var C=e(b,2);h(C,{key:"3",description:"Generate types.",noLink:!0,children:(r,T)=>{var t=O(),o=d(t);n(o,{lang:"shell",source:`
                frizzante -gtypes
            `});var l=e(o,2),g=e(f(l));i(g,{source:".gen/types"});var u=e(l,2);n(u,{lang:"ts",source:`
                export type Props = welcome.Props
                export declare namespace welcome {
                    export type Props = {
                        message: string
                        error: string
                    }
                }
            `});var c=e(u,2);Y(c,{children:(m,X)=>{var x=J(),G=d(x),w=e(f(G));i(w,{source:"$gen"});var D=e(w,2);i(D,{source:".gen"});var S=e(G,2);n(S,{lang:"ts",source:`
                    <script lang="ts">
                        import type { Props } from "$gen/types/main/lib/routes/welcome/Props"
                        let { message, error }:Props = $props()
                    <\/script>
                `}),a(m,x)}}),a(r,t)},$$slots:{default:!0}}),a(s,_)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),E()}export{ie as default};
