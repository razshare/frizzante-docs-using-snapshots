import{f as l,a as c,s as e,b as n,e as t,t as $e}from"./index-DcfPEVm2.js";import{L as Se,a as de}from"./navbar.js";import{C as Re}from"./caution.js";import{C as a}from"./code.js";import{F as Ve}from"./file_tree.js";import{P as Pe,T as m,R as Me,F as Te}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{K as R}from"./keyed_section.js";import{N as V}from"./note.js";import{T as P}from"./tip.js";var ke=l("<!> <!>",1),Ce=l(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> <!>`,1),Fe=l("<span>Keys in <!> and <!> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>",1),We=l('<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>'),Ne=l("<span>Using <!>, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> <!>",1),ze=l(`While using <!> the view won’t serve a JavaScript bundle, but you can still
            use the <!> special tag in order to load scripts dynamically.`,1),Ee=l('<span>Using <!>, the view is rendered only on the server.</span> <br/> <span>You’ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> <!> <!>',1),Ie=l("<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about <!>.</span>",1),Je=l(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`,1),Ue=l(`When using <!> or <!>, You can
            configure how many JavaScript runtimes are executed in parallel by setting the <!> environment variable. <!> <!>`,1),Ae=l(`<span>Using <!>, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> <!> <!> <!>`,1),De=l(`<!> <span>Views are svelte components exported by <!> and/or <!>.</span> <!> <!> <span>Views that are meant to be rendered on the server should be exported by <!>.</span> <!> <!> <span>Views that are meant to be rendered on the client should be exported by <!>.</span> <!> <!> <!> <!> <span>Use <!> to send a view.</span> <!> <span>The Name of the view will be used to lookup the view component exported by <!> and/or <!>.</span> <!> <span>There is no way to specify a "<strong>default view</strong>”.</span> <span>However, you can use <!> in order to send the requested file or run custom logic if it doesn’t exist.</span> <!> <span>Usually you would map this handler to the default <!> pattern, which automatically captures all unmatched requests.</span> <!> <!> <span>Optionally, you can specify properties for your View with the Props field.</span> <!> <span>These properties are passed down to your view component.</span> <!> <!> <!> <span>You can choose how to render views by setting one of 3 values for the <!> field in your <!>.</span> <br/> <br/> <!> <!> <!> <!> <span>You can add the <!> tag to your build process to completely disable the server-side
        JavaScript runtime.</span> <!> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>`,1);function sr(pe){Pe(pe,{title:"Views",rightSidebar:g=>{Me(g,{items:[{shift:0,text:"Views"},{shift:0,text:"Server Exports"},{shift:0,text:"Client Exports"},{shift:0,text:"Send Views"},{shift:0,text:"Default View"},{shift:0,text:"View Properties"},{shift:0,text:"Render Modes"},{shift:1,text:"RenderModeFull"},{shift:1,text:"RenderModeServer"},{shift:1,text:"RenderModeClient"},{shift:0,text:"Disabling the server-side JavaScript runtime"}]})},footer:g=>{Te(g,{previous:{label:"Guards",href:"/frizzante-docs-using-snapshots/guards"},next:{label:"Web Standards",href:"/frizzante-docs-using-snapshots/web_standards"}})},children:(g,qe)=>{var M=De(),T=c(M);m(T,{text:"Views"});var k=e(T,2),C=e(t(k));r(C,{source:"app/exports.server.ts"});var ce=e(C,2);r(ce,{source:"app/exports.client.ts"});var F=e(k,2);Ve(F,{children:(u,s)=>{let o=()=>s?.().Directory,d=()=>s?.().File;o()(u,{name:"app",expanded:!0,children:(p,b)=>{var w=ke(),h=c(w);d()(h,{name:"exports.client.ts",get icon(){return de}});var f=e(h,2);d()(f,{name:"exports.server.ts",get icon(){return de}}),n(p,w)},$$slots:{default:!0}})}});var W=e(F,2);m(W,{text:"Server Exports"});var N=e(W,2),ve=e(t(N));r(ve,{source:"app/exports.server.ts"});var z=e(N,2);a(z,{lang:"go",source:`
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `});var E=e(z,2);m(E,{text:"Client Exports"});var I=e(E,2),me=e(t(I));r(me,{source:"app/exports.client.ts"});var J=e(I,2);a(J,{lang:"go",source:`
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `});var U=e(J,2);V(U,{children:(i,u)=>{var s=Ce(),o=e(c(s),2);a(o,{lang:"go",source:`
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `}),n(i,s)}});var A=e(U,2);V(A,{children:(i,u)=>{var s=Fe(),o=c(s),d=e(t(o));r(d,{source:"app/exports.server.ts"});var p=e(d,2);r(p,{source:"app/exports.client.ts"}),n(i,s)}});var D=e(A,2);m(D,{text:"Send Views"});var L=e(D,2),ue=e(t(L));r(ue,{source:"send.View()"});var Y=e(L,2);a(Y,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `});var q=e(Y,2),H=e(t(q));r(H,{source:"app/exports.server.ts"});var he=e(H,2);r(he,{source:"app/exports.client.ts"});var Z=e(q,2);m(Z,{text:"Default View"});var j=e(Z,4),we=e(t(j));r(we,{source:"send.RequestedFile()"});var B=e(j,2);a(B,{lang:"go",source:`
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
        `});var G=e(B,2),fe=e(t(G));r(fe,{source:"GET /"});var K=e(G,2);a(K,{lang:"go",source:`
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
        `});var O=e(K,2);m(O,{text:"View Properties"});var Q=e(O,4);a(Q,{lang:"go",source:`
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
        `});var X=e(Q,4);a(X,{lang:"go",source:`
            <script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `});var ee=e(X,2);V(ee,{children:(i,u)=>{var s=We();n(i,s)}});var re=e(ee,2);m(re,{text:"Render Modes"});var se=e(re,2),oe=e(t(se));r(oe,{source:"RenderMode"});var _e=e(oe,2);r(_e,{source:"View"});var te=e(se,6);R(te,{key:"1",description:"RenderModeFull",children:(i,u)=>{var s=Ne(),o=c(s),d=e(t(o));r(d,{source:"RenderModeFull"});var p=e(o,6);a(p,{lang:"go",source:`
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
        `}),n(i,s)},$$slots:{default:!0}});var ne=e(te,2);R(ne,{key:"2",description:"RenderModeServer",children:(i,u)=>{var s=Ee(),o=c(s),d=e(t(o));r(d,{source:"RenderModeServer"});var p=e(o,6);a(p,{lang:"go",source:`
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
        `});var b=e(p,2);P(b,{children:(w,h)=>{var f=ze(),v=e(c(f));r(v,{source:"RenderModeServer"});var _=e(v,2);r(_,{source:"<svelte:head>"}),n(w,f)}}),n(i,s)},$$slots:{default:!0}});var ae=e(ne,2);R(ae,{key:"3",description:"RenderModeClient",noLink:!0,children:(i,u)=>{var s=Ae(),o=c(s),d=e(t(o));r(d,{source:"RenderModeClient"});var p=e(o,2);a(p,{lang:"go",source:`
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
        `});var b=e(p,2);P(b,{children:(h,f)=>{var v=Ie(),_=e(c(v),4),y=e(t(_));Se(y,{href:"/frizzante-docs-using-snapshots/web_standards",children:(x,$)=>{var S=$e("web standards");n(x,S)},$$slots:{default:!0}}),n(h,v)}});var w=e(b,2);P(w,{children:(h,f)=>{var v=Ue(),_=e(c(v));r(_,{source:"RenderModeFull"});var y=e(_,2);r(y,{source:"RenderModeServer"});var x=e(y,2);r(x,{source:"FRIZZANTE_JS_RUNTIME_LIMIT"});var $=e(x,2);a($,{lang:"shell",source:"FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app"});var S=e($,2);Re(S,{children:(ye,He)=>{var xe=Je();n(ye,xe)}}),n(h,v)}}),n(i,s)},$$slots:{default:!0}});var ie=e(ae,2);m(ie,{text:"Disabling the server-side JavaScript runtime"});var le=e(ie,2),ge=e(t(le));r(ge,{source:"no_js_runtime"});var be=e(le,2);a(be,{lang:"shell",source:"frizzante --build --tags=no_js_runtime"}),n(g,M)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{sr as default};
