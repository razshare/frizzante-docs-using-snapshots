import{p as Me,f as l,a as c,s as e,b as n,c as Te,g as V,d as P,e as o,t as ke}from"./index-CBalJl4v.js";import{i as Ce,L as Fe,b as M,a as ue}from"./navbar.js";import{C as We}from"./caution.js";import{C as a}from"./code.js";import{F as Ne}from"./file_tree.js";import{P as Ee,T as m,R as Ie,F as Je}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{K as T}from"./keyed_section.js";import{N as k}from"./note.js";import{T as C}from"./tip.js";var Ue=l("<!> <!>",1),qe=l(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> <!>`,1),ze=l("<span>Keys in <!> and <!> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>",1),Ae=l('<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>'),De=l("<span>Using <!>, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> <!>",1),Le=l(`While using <!> the view won’t serve a JavaScript bundle, but you can still
            use the <!> special tag in order to load scripts dynamically.`,1),Ye=l('<span>Using <!>, the view is rendered only on the server.</span> <br/> <span>You’ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> <!> <!>',1),He=l("<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about <!>.</span>",1),Ze=l(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`,1),je=l(`When using <!> or <!>, You can
            configure how many JavaScript runtimes are executed in parallel by setting the <!> environment variable. <!> <!>`,1),Be=l(`<span>Using <!>, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> <!> <!> <!>`,1),Ge=l(`<!> <span>Views are svelte components exported by <!> and/or <!>.</span> <!> <!> <span>Views that are meant to be rendered on the server should be exported by <!>.</span> <!> <!> <span>Views that are meant to be rendered on the client should be exported by <!>.</span> <!> <!> <!> <!> <span>Use <!> to send a view.</span> <!> <span>The Name of the view will be used to lookup the view component exported by <!> and/or <!>.</span> <!> <span>There is no way to specify a "<strong>default view</strong>”.</span> <span>However, you can use <!> in order to send the requested file or run custom logic if it doesn’t exist.</span> <!> <span>Usually you would map this handler to the default <!> pattern, which automatically captures all unmatched requests.</span> <!> <!> <span>Optionally, you can specify properties for your View with the Props field.</span> <!> <span>These properties are passed down to your view component.</span> <!> <!> <!> <span>You can choose how to render views by setting one of 3 values for the <!> field in your <!>.</span> <br/> <br/> <!> <!> <!> <!> <span>You can add the <!> tag to your build process to completely disable the server-side
        JavaScript runtime.</span> <!> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>`,1);function dr(he,we){Me(we,!1),Ce(),Ee(he,{title:"Views",rightSidebar:g=>{Ie(g,{items:[{shift:0,text:"Views"},{shift:0,text:"Server Exports"},{shift:0,text:"Client Exports"},{shift:0,text:"Send Views"},{shift:0,text:"Default View"},{shift:0,text:"View Properties"},{shift:0,text:"Render Modes"},{shift:1,text:"RenderModeFull"},{shift:1,text:"RenderModeServer"},{shift:1,text:"RenderModeClient"},{shift:0,text:"Disabling the server-side JavaScript runtime"}]})},footer:g=>{{let F=P(()=>({label:"Guards",href:M("/guards")})),y=P(()=>({label:"Web Standards",href:M("/web_standards")}));Je(g,{get previous(){return V(F)},get next(){return V(y)}})}},children:(g,F)=>{var y=Ge(),W=c(y);m(W,{text:"Views"});var N=e(W,2),E=e(o(N));r(E,{source:"app/exports.server.ts"});var fe=e(E,2);r(fe,{source:"app/exports.client.ts"});var I=e(N,2);Ne(I,{children:(u,t)=>{let s=()=>t?.().Directory,d=()=>t?.().File;s()(u,{name:"app",expanded:!0,children:(p,b)=>{var w=Ue(),h=c(w);d()(h,{name:"exports.client.ts",get icon(){return ue}});var f=e(h,2);d()(f,{name:"exports.server.ts",get icon(){return ue}}),n(p,w)},$$slots:{default:!0}})}});var J=e(I,2);m(J,{text:"Server Exports"});var U=e(J,2),_e=e(o(U));r(_e,{source:"app/exports.server.ts"});var q=e(U,2);a(q,{lang:"go",source:`
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `});var z=e(q,2);m(z,{text:"Client Exports"});var A=e(z,2),ge=e(o(A));r(ge,{source:"app/exports.client.ts"});var D=e(A,2);a(D,{lang:"go",source:`
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `});var L=e(D,2);k(L,{children:(i,u)=>{var t=qe(),s=e(c(t),2);a(s,{lang:"go",source:`
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `}),n(i,t)}});var Y=e(L,2);k(Y,{children:(i,u)=>{var t=ze(),s=c(t),d=e(o(s));r(d,{source:"app/exports.server.ts"});var p=e(d,2);r(p,{source:"app/exports.client.ts"}),n(i,t)}});var H=e(Y,2);m(H,{text:"Send Views"});var Z=e(H,2),be=e(o(Z));r(be,{source:"send.View()"});var j=e(Z,2);a(j,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `});var B=e(j,2),G=e(o(B));r(G,{source:"app/exports.server.ts"});var ye=e(G,2);r(ye,{source:"app/exports.client.ts"});var K=e(B,2);m(K,{text:"Default View"});var O=e(K,4),$e=e(o(O));r($e,{source:"send.RequestedFile()"});var Q=e(O,2);a(Q,{lang:"go",source:`
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
        `});var X=e(Q,2),xe=e(o(X));r(xe,{source:"GET /"});var ee=e(X,2);a(ee,{lang:"go",source:`
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
        `});var re=e(ee,2);m(re,{text:"View Properties"});var te=e(re,4);a(te,{lang:"go",source:`
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
        `});var se=e(te,4);a(se,{lang:"go",source:`
            <script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `});var oe=e(se,2);k(oe,{children:(i,u)=>{var t=Ae();n(i,t)}});var ne=e(oe,2);m(ne,{text:"Render Modes"});var ae=e(ne,2),ie=e(o(ae));r(ie,{source:"RenderMode"});var Se=e(ie,2);r(Se,{source:"View"});var le=e(ae,6);T(le,{key:"1",description:"RenderModeFull",children:(i,u)=>{var t=De(),s=c(t),d=e(o(s));r(d,{source:"RenderModeFull"});var p=e(s,6);a(p,{lang:"go",source:`
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
        `}),n(i,t)},$$slots:{default:!0}});var de=e(le,2);T(de,{key:"2",description:"RenderModeServer",children:(i,u)=>{var t=Ye(),s=c(t),d=e(o(s));r(d,{source:"RenderModeServer"});var p=e(s,6);a(p,{lang:"go",source:`
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
        `});var b=e(p,2);C(b,{children:(w,h)=>{var f=Le(),v=e(c(f));r(v,{source:"RenderModeServer"});var _=e(v,2);r(_,{source:"<svelte:head>"}),n(w,f)}}),n(i,t)},$$slots:{default:!0}});var pe=e(de,2);T(pe,{key:"3",description:"RenderModeClient",noLink:!0,children:(i,u)=>{var t=Be(),s=c(t),d=e(o(s));r(d,{source:"RenderModeClient"});var p=e(s,2);a(p,{lang:"go",source:`
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
        `});var b=e(p,2);C(b,{children:(h,f)=>{var v=He(),_=e(c(v),4),$=e(o(_));{let x=P(()=>M("/web_standards"));Fe($,{get href(){return V(x)},children:(S,me)=>{var R=ke("web standards");n(S,R)},$$slots:{default:!0}})}n(h,v)}});var w=e(b,2);C(w,{children:(h,f)=>{var v=je(),_=e(c(v));r(_,{source:"RenderModeFull"});var $=e(_,2);r($,{source:"RenderModeServer"});var x=e($,2);r(x,{source:"FRIZZANTE_JS_RUNTIME_LIMIT"});var S=e(x,2);a(S,{lang:"shell",source:"FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app"});var me=e(S,2);We(me,{children:(R,Qe)=>{var Pe=Ze();n(R,Pe)}}),n(h,v)}}),n(i,t)},$$slots:{default:!0}});var ce=e(pe,2);m(ce,{text:"Disabling the server-side JavaScript runtime"});var ve=e(ce,2),Re=e(o(ve));r(Re,{source:"no_js_runtime"});var Ve=e(ve,2);a(Ve,{lang:"shell",source:"frizzante --build --tags=no_js_runtime"}),n(g,y)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),Te()}export{dr as default};
