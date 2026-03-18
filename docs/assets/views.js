import{p as Te,f as d,a as p,s as e,b as s,c as ke,g as M,u as T,h as n,t as Ce,d as Fe,e as k}from"./index-CQxZXpNM.js";import{C as We}from"./caution.js";import{C as a}from"./code.js";import{F as Ne}from"./file_tree.js";import{P as Ee,T as h,R as Ie,F as Je}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{K as C}from"./keyed_section.js";import{L as Ue,a as we,b as F}from"./navbar.js";import{N as W}from"./note.js";import{T as N}from"./tip.js";var ze=d("<!> <!>",1),Ae=d(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> <!>`,1),De=d("<span>Keys in <!> and <!> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>",1),Le=d('<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>'),Ye=d("<span>Using <!>, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> <!>",1),qe=d(`While using <!> the view won’t serve a JavaScript bundle, but you can still
            use the <!> special tag in order to load scripts dynamically.`,1),He=d('<span>Using <!>, the view is rendered only on the server.</span> <br/> <span>You’ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> <!> <!>',1),Ze=d("<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about <!>.</span>",1),je=d(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`,1),Be=d(`When using <!> or <!>, You can
            configure how many JavaScript runtimes are executed in parallel by setting the <!> environment variable. <!> <!>`,1),Ge=d(`<span>Using <!>, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> <!> <!> <!>`,1),Ke=d(`<!> <span>Views are svelte components exported by <!> and/or <!>.</span> <!> <!> <span>Views that are meant to be rendered on the server should be exported by <!>.</span> <!> <!> <span>Views that are meant to be rendered on the client should be exported by <!>.</span> <!> <!> <!> <!> <span>Use <!> to send a view.</span> <!> <span>The Name of the view will be used to lookup the view component exported by <!> and/or <!>.</span> <!> <span>There is no way to specify a "<strong>default view</strong>”.</span> <span>However, you can use <!> in order to send the requested file or run custom logic if it doesn’t exist.</span> <!> <span>Usually you would map this handler to the default <!> pattern, which automatically captures all unmatched requests.</span> <!> <!> <span>Optionally, you can specify properties for your View with the Props field.</span> <!> <span>These properties are passed down to your view component.</span> <!> <!> <!> <span>You can choose how to render views by setting one of 3 values for the <!> field in your <!>.</span> <br/> <br/> <!> <!> <!> <!> <span>You can add the <!> tag to your build process to completely disable the server-side
        JavaScript runtime.</span> <!> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>`,1);function cr(fe,$){Te($,!0),Ee(fe,{title:"Views",get dev(){return $.dev},rightSidebar:S=>{Ie(S,{items:[{shift:0,text:"Views"},{shift:0,text:"Server Exports"},{shift:0,text:"Client Exports"},{shift:0,text:"Send Views"},{shift:0,text:"Default View"},{shift:0,text:"View Properties"},{shift:0,text:"Render Modes"},{shift:1,text:"RenderModeFull"},{shift:1,text:"RenderModeServer"},{shift:1,text:"RenderModeClient"},{shift:0,text:"Disabling the server-side JavaScript runtime"}]})},footer:S=>{{let E=T(()=>({label:"Guards",href:F("/guards",{dev:$.dev})})),V=T(()=>({label:"Web Standards",href:F("/web_standards",{dev:$.dev})}));Je(S,{get previous(){return M(E)},get next(){return M(V)}})}},children:(S,E)=>{var V=Ke(),I=p(V);h(I,{text:"Views"});var J=e(I,2),U=e(n(J));r(U,{source:"app/exports.server.ts"});var _e=e(U,2);r(_e,{source:"app/exports.client.ts"});var z=e(J,2);Ne(z,{children:(w,t)=>{let o=()=>t?.().Directory,c=()=>t?.().File;var l=Fe(),_=p(l);k(_,o,(R,g)=>{g(R,{name:"app",expanded:!0,children:(b,v)=>{var m=ze(),f=p(m);k(f,c,(u,x)=>{x(u,{name:"exports.client.ts",get icon(){return we}})});var y=e(f,2);k(y,c,(u,x)=>{x(u,{name:"exports.server.ts",get icon(){return we}})}),s(b,m)},$$slots:{default:!0}})}),s(w,l)}});var A=e(z,2);h(A,{text:"Server Exports"});var D=e(A,2),ge=e(n(D));r(ge,{source:"app/exports.server.ts"});var L=e(D,2);a(L,{lang:"go",source:`
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `});var Y=e(L,2);h(Y,{text:"Client Exports"});var q=e(Y,2),be=e(n(q));r(be,{source:"app/exports.client.ts"});var H=e(q,2);a(H,{lang:"go",source:`
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `});var Z=e(H,2);W(Z,{children:(i,w)=>{var t=Ae(),o=e(p(t),2);a(o,{lang:"go",source:`
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `}),s(i,t)}});var j=e(Z,2);W(j,{children:(i,w)=>{var t=De(),o=p(t),c=e(n(o));r(c,{source:"app/exports.server.ts"});var l=e(c,2);r(l,{source:"app/exports.client.ts"}),s(i,t)}});var B=e(j,2);h(B,{text:"Send Views"});var G=e(B,2),ye=e(n(G));r(ye,{source:"send.View()"});var K=e(G,2);a(K,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `});var O=e(K,2),Q=e(n(O));r(Q,{source:"app/exports.server.ts"});var xe=e(Q,2);r(xe,{source:"app/exports.client.ts"});var X=e(O,2);h(X,{text:"Default View"});var ee=e(X,4),$e=e(n(ee));r($e,{source:"send.RequestedFile()"});var re=e(ee,2);a(re,{lang:"go",source:`
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
        `});var te=e(re,2),Se=e(n(te));r(Se,{source:"GET /"});var oe=e(te,2);a(oe,{lang:"go",source:`
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
        `});var se=e(oe,2);h(se,{text:"View Properties"});var ne=e(se,4);a(ne,{lang:"go",source:`
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
        `});var ae=e(ne,4);a(ae,{lang:"go",source:`
            <script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `});var ie=e(ae,2);W(ie,{children:(i,w)=>{var t=Le();s(i,t)}});var le=e(ie,2);h(le,{text:"Render Modes"});var de=e(le,2),ce=e(n(de));r(ce,{source:"RenderMode"});var Re=e(ce,2);r(Re,{source:"View"});var pe=e(de,6);C(pe,{key:"1",description:"RenderModeFull",children:(i,w)=>{var t=Ye(),o=p(t),c=e(n(o));r(c,{source:"RenderModeFull"});var l=e(o,6);a(l,{lang:"go",source:`
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
        `}),s(i,t)},$$slots:{default:!0}});var ve=e(pe,2);C(ve,{key:"2",description:"RenderModeServer",children:(i,w)=>{var t=He(),o=p(t),c=e(n(o));r(c,{source:"RenderModeServer"});var l=e(o,6);a(l,{lang:"go",source:`
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
        `});var _=e(l,2);N(_,{children:(R,g)=>{var b=qe(),v=e(p(b));r(v,{source:"RenderModeServer"});var m=e(v,2);r(m,{source:"<svelte:head>"}),s(R,b)}}),s(i,t)},$$slots:{default:!0}});var me=e(ve,2);C(me,{key:"3",description:"RenderModeClient",noLink:!0,children:(i,w)=>{var t=Ge(),o=p(t),c=e(n(o));r(c,{source:"RenderModeClient"});var l=e(o,2);a(l,{lang:"go",source:`
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
        `});var _=e(l,2);N(_,{children:(g,b)=>{var v=Ze(),m=e(p(v),4),f=e(n(m));{let y=T(()=>F("/web_standards",{dev:$.dev}));Ue(f,{get href(){return M(y)},children:(u,x)=>{var P=Ce("web standards");s(u,P)},$$slots:{default:!0}})}s(g,v)}});var R=e(_,2);N(R,{children:(g,b)=>{var v=Be(),m=e(p(v));r(m,{source:"RenderModeFull"});var f=e(m,2);r(f,{source:"RenderModeServer"});var y=e(f,2);r(y,{source:"FRIZZANTE_JS_RUNTIME_LIMIT"});var u=e(y,2);a(u,{lang:"shell",source:"FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app"});var x=e(u,2);We(x,{children:(P,Xe)=>{var Me=je();s(P,Me)}}),s(g,v)}}),s(i,t)},$$slots:{default:!0}});var ue=e(me,2);h(ue,{text:"Disabling the server-side JavaScript runtime"});var he=e(ue,2),Ve=e(n(he));r(Ve,{source:"no_js_runtime"});var Pe=e(he,2);a(Pe,{lang:"shell",source:"frizzante --build --tags=no_js_runtime"}),s(S,V)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),ke()}export{cr as default};
