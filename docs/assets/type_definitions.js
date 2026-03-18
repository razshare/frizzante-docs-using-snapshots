import{p as K,f as p,a as f,s as e,b as a,c as M,g as j,d as C,e as g}from"./index-CBalJl4v.js";import{i as N,f as R,h as A,b as D}from"./navbar.js";import{C as n}from"./code.js";import{P as L,T as Y,R as B,F as H}from"./right_sidebar.js";import{I as i}from"./inline_code.js";import{K as y}from"./keyed_section.js";import{N as J}from"./note.js";import{T as O}from"./tip.js";var Q=p("<span>All <!> tags are optional.</span>"),U=p("<!> <!>",1),V=p("<span>You can use the default <!> alias to access the <!> directory.</span> <!>",1),W=p("<!> <span>This will generate your type definitions in <!>.</span> <!> <!>",1),X=p("<!> <span>It is possible, but not required, to generate TypeScript type definitions from Go structs using <a>cli plugins</a> and <!>, where T is the type you wish to generate.</span> <br/> <br/> <!> <!> <!>",1);function ce(S,I){K(I,!1),N(),L(S,{title:"Type Definitions",rightSidebar:s=>{B(s,{items:[{shift:0,text:"Type Definitions"},{shift:1,text:"Define your Go types"},{shift:1,text:"Call types.Generate[T]()"},{shift:1,text:"Generate types"}]})},footer:s=>{{let h=C(()=>({label:"Cli",href:D("/cli")})),l=C(()=>({label:"Snapshots",href:D("/snapshots")}));H(s,{get previous(){return j(h)},get next(){return j(l)}})}},children:(s,h)=>{var l=X(),v=f(l);Y(v,{text:"Type Definitions"});var $=e(v,2),P=e(g($));R(P,r=>({...r}),[()=>A("/cli#plugins")]);var q=e(P,2);i(q,{source:"types.Generate[T]()"});var b=e($,6);y(b,{key:"1",description:"Define your Go types.",children:(r,x)=>{var t=U(),o=f(t);n(o,{lang:"go",source:`
                package welcome

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `});var c=e(o,2);J(c,{children:(u,m)=>{var d=Q(),_=e(g(d));i(_,{source:"json"}),a(u,d)}}),a(r,t)},$$slots:{default:!0}});var T=e(b,2);y(T,{key:"2",description:"Call types.Generate[T]().",children:(r,x)=>{n(r,{lang:"go",source:`
                package welcome

                func init() {
                    _ = types.Generate[Props]()
                }

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `})},$$slots:{default:!0}});var z=e(T,2);y(z,{key:"3",description:"Generate types.",noLink:!0,children:(r,x)=>{var t=W(),o=f(t);n(o,{lang:"shell",source:`
                frizzante -gtypes
            `});var c=e(o,2),u=e(g(c));i(u,{source:".gen/types"});var m=e(c,2);n(m,{lang:"ts",source:`
                export type Props = welcome.Props
                export declare namespace welcome {
                    export type Props = {
                        message: string
                        error: string
                    }
                }
            `});var d=e(m,2);O(d,{children:(_,re)=>{var G=V(),w=f(G),k=e(g(w));i(k,{source:"$gen"});var E=e(k,2);i(E,{source:".gen"});var F=e(w,2);n(F,{lang:"ts",source:`
                    <script lang="ts">
                        import type { Props } from "$gen/types/main/lib/routes/welcome/Props"
                        let { message, error }:Props = $props()
                    <\/script>
                `}),a(_,G)}}),a(r,t)},$$slots:{default:!0}}),a(s,l)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),M()}export{ce as default};
