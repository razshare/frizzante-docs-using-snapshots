import{p as $e,f as d,a as c,s as e,b as s,c as Ve,g as pe,u as ce,h as n,d as Pe,e as P}from"./index-B3gjky_M.js";import{a as Me,h as Te,b as M,c as ve}from"./navbar.js";import{C as ke}from"./caution.js";import{C as l}from"./code.js";import{F as Ce}from"./file_tree.js";import{P as Fe,T as h,R as We,F as Ne}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{K as T}from"./keyed_section.js";import{N as k}from"./note.js";import{T as C}from"./tip.js";var Ee=d("<!> <!>",1),Ie=d(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> <!>`,1),Ue=d("<span>Keys in <!> and <!> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>",1),Je=d('<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>'),Ae=d("<span>Using <!>, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> <!>",1),qe=d(`While using <!> the view won’t serve a JavaScript bundle, but you can still
            use the <!> special tag in order to load scripts dynamically.`,1),De=d('<span>Using <!>, the view is rendered only on the server.</span> <br/> <span>You’ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> <!> <!>',1),Ye=d("<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about <a>web standards</a>.</span>",1),He=d(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`,1),Le=d(`When using <!> or <!>, You can
            configure how many JavaScript runtimes are executed in parallel by setting the <!> environment variable. <!> <!>`,1),Ze=d(`<span>Using <!>, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> <!> <!> <!>`,1),ze=d('<!> <span>Views are svelte components exported by <!> and/or <!>.</span> <!> <!> <span>Views that are meant to be rendered on the server should be exported by <!>.</span> <!> <!> <span>Views that are meant to be rendered on the client should be exported by <!>.</span> <!> <!> <!> <!> <span>Use <!> to send a view.</span> <!> <span>The Name of the view will be used to lookup the view component exported by <!> and/or <!>.</span> <!> <span>There is no way to specify a "<strong>default view</strong>”.</span> <span>However, you can use <!> in order to send the requested file or run custom logic if it doesn’t exist.</span> <!> <span>Usually you would map this handler to the default <!> pattern, which automatically captures all unmatched requests.</span> <!> <!> <span>Optionally, you can specify properties for your View with the Props field.</span> <!> <span>These properties are passed down to your view component.</span> <!> <!> <!> <span>You can choose how to render views by setting one of 3 values for the <!> field in your <!>.</span> <br/> <br/> <!> <!> <!>',1);function ar(me,x){$e(x,!0),Fe(me,{title:"Views",get prefix(){return x.prefix},rightSidebar:S=>{We(S,{items:[{shift:0,text:"Views"},{shift:0,text:"Server Exports"},{shift:0,text:"Client Exports"},{shift:0,text:"Send Views"},{shift:0,text:"Default View"},{shift:0,text:"View Properties"},{shift:0,text:"Render Modes"},{shift:1,text:"RenderModeFull"},{shift:1,text:"RenderModeServer"},{shift:1,text:"RenderModeClient"},{shift:0,text:"Disabling the server-side JavaScript runtime"}]})},footer:S=>{{let F=ce(()=>({label:"Guards",href:M("/guards",{prefix:x.prefix})})),V=ce(()=>({label:"Web Standards",href:M("/web_standards",{prefix:x.prefix})}));Ne(S,{get previous(){return pe(F)},get next(){return pe(V)}})}},children:(S,F)=>{var V=ze(),W=c(V);h(W,{text:"Views"});var N=e(W,2),E=e(n(N));r(E,{source:"app/exports.server.ts"});var ue=e(E,2);r(ue,{source:"app/exports.client.ts"});var I=e(N,2);Ce(I,{children:(u,t)=>{let o=()=>t?.().Directory,p=()=>t?.().File;var i=Pe(),f=c(i);P(f,o,(R,_)=>{_(R,{name:"app",expanded:!0,children:(g,v)=>{var m=Ee(),w=c(m);P(w,p,(y,$)=>{$(y,{name:"exports.client.ts",get icon(){return ve}})});var b=e(w,2);P(b,p,(y,$)=>{$(y,{name:"exports.server.ts",get icon(){return ve}})}),s(g,m)},$$slots:{default:!0}})}),s(u,i)}});var U=e(I,2);h(U,{text:"Server Exports"});var J=e(U,2),we=e(n(J));r(we,{source:"app/exports.server.ts"});var A=e(J,2);l(A,{lang:"go",source:`
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `});var q=e(A,2);h(q,{text:"Client Exports"});var D=e(q,2),he=e(n(D));r(he,{source:"app/exports.client.ts"});var Y=e(D,2);l(Y,{lang:"go",source:`
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `});var H=e(Y,2);k(H,{children:(a,u)=>{var t=Ie(),o=e(c(t),2);l(o,{lang:"go",source:`
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `}),s(a,t)}});var L=e(H,2);k(L,{children:(a,u)=>{var t=Ue(),o=c(t),p=e(n(o));r(p,{source:"app/exports.server.ts"});var i=e(p,2);r(i,{source:"app/exports.client.ts"}),s(a,t)}});var Z=e(L,2);h(Z,{text:"Send Views"});var z=e(Z,2),fe=e(n(z));r(fe,{source:"send.View()"});var G=e(z,2);l(G,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `});var K=e(G,2),j=e(n(K));r(j,{source:"app/exports.server.ts"});var _e=e(j,2);r(_e,{source:"app/exports.client.ts"});var B=e(K,2);h(B,{text:"Default View"});var O=e(B,4),ge=e(n(O));r(ge,{source:"send.RequestedFile()"});var Q=e(O,2);l(Q,{lang:"go",source:`
            package welcome
            
            import (
                "os"

                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
                "main/lib/routes/welcome"
            )

            func View(client *clients.Client) {
                if !send.RequestedFile(client) { // Tries to send the requested file, or else...
                    welcome.View(client)         // ...sends the welcome view.
                }
            }
        `});var X=e(Q,2),be=e(n(X));r(be,{source:"GET /"});var ee=e(X,2);l(ee,{lang:"go",source:`
            package main

            import (
                "embed"
                "main/lib/core/clients"
                "main/lib/core/servers"
                "main/lib/routes/welcome"
            )

            //go:embed app/dist
            var efs embed.FS
            var server = servers.New()                              // Creates server.

            func main() {
                defer servers.Start(server)                         // Starts server.
                server.Efs = efs                                    // Sets embedded file system.
                server.Routes = append(server.Routes, routes.Route{ // Adds route to the server.
                    Pattern: "GET /",
                    Handler: welcome.View,
                })
            }
        `});var re=e(ee,2);h(re,{text:"View Properties"});var te=e(re,4);l(te,{lang:"go",source:`
            package welcome
            
            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{ // Sends view.
                    Name: "Welcome",          // Sets view name.
                    Props: map[string]string{ // Sets view props, which will be injected into the svelte component.
                        "name": "world",      // Adds property "name" with value "world".
                    },
                })
            }
        `});var oe=e(te,4);l(oe,{lang:"go",source:`
            <script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `});var se=e(oe,2);k(se,{children:(a,u)=>{var t=Je();s(a,t)}});var ne=e(se,2);h(ne,{text:"Render Modes"});var ae=e(ne,2),ie=e(n(ae));r(ie,{source:"RenderMode"});var ye=e(ie,2);r(ye,{source:"View"});var le=e(ae,6);T(le,{key:"1",description:"RenderModeFull",children:(a,u)=>{var t=Ae(),o=c(t),p=e(n(o));r(p,{source:"RenderModeFull"});var i=e(o,6);l(i,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{        // Sends view.
                    Name: "Welcome",                 // Sets view name.
                    RenderMode: view.RenderModeFull, // Renders view on server and client.
                })
            }
        `}),s(a,t)},$$slots:{default:!0}});var de=e(le,2);T(de,{key:"2",description:"RenderModeServer",children:(a,u)=>{var t=De(),o=c(t),p=e(n(o));r(p,{source:"RenderModeServer"});var i=e(o,6);l(i,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets view name.
                    RenderMode: view.RenderModeServer, // Renders view only on server.
                })
            }
        `});var f=e(i,2);C(f,{children:(R,_)=>{var g=qe(),v=e(c(g));r(v,{source:"RenderModeServer"});var m=e(v,2);r(m,{source:"<svelte:head>"}),s(R,g)}}),s(a,t)},$$slots:{default:!0}});var xe=e(de,2);T(xe,{key:"3",description:"RenderModeClient",noLink:!0,children:(a,u)=>{var t=Ze(),o=c(t),p=e(n(o));r(p,{source:"RenderModeClient"});var i=e(o,2);l(i,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets view name.
                    RenderMode: view.RenderModeClient, // Renders view only on client.
                })
            }
        `});var f=e(i,2);C(f,{children:(_,g)=>{var v=Ye(),m=e(c(v),4),w=e(n(m));Me(w,b=>({...b}),[()=>Te(M("/web_standards",{prefix:x.prefix}))]),s(_,v)}});var R=e(f,2);C(R,{children:(_,g)=>{var v=Le(),m=e(c(v));r(m,{source:"RenderModeFull"});var w=e(m,2);r(w,{source:"RenderModeServer"});var b=e(w,2);r(b,{source:"FRIZZANTE_JS_RUNTIME_LIMIT"});var y=e(b,2);l(y,{lang:"shell",source:"FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app"});var $=e(y,2);ke($,{children:(Se,je)=>{var Re=He();s(Se,Re)}}),s(_,v)}}),s(a,t)},$$slots:{default:!0}}),s(S,V)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),Ve()}export{ar as default};
