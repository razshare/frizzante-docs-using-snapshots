import{p as Te,f as d,a as c,s as e,b as n,c as ke,g as me,u as ue,h as s,d as Ce,e as P}from"./index-B3gjky_M.js";import{a as Fe,h as We,b as M,c as he}from"./navbar.js";import{C as Ne}from"./caution.js";import{C as a}from"./code.js";import{F as Ee}from"./file_tree.js";import{P as Ie,T as u,R as Je,F as Ue}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{K as T}from"./keyed_section.js";import{N as k}from"./note.js";import{T as C}from"./tip.js";var ze=d("<!> <!>",1),Ae=d(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> <!>`,1),De=d("<span>Keys in <!> and <!> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>",1),Ye=d('<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>'),qe=d("<span>Using <!>, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> <!>",1),He=d(`While using <!> the view won’t serve a JavaScript bundle, but you can still
            use the <!> special tag in order to load scripts dynamically.`,1),Le=d('<span>Using <!>, the view is rendered only on the server.</span> <br/> <span>You’ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> <!> <!>',1),Ze=d("<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about <a>web standards</a>.</span>",1),je=d(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`,1),Be=d(`When using <!> or <!>, You can
            configure how many JavaScript runtimes are executed in parallel by setting the <!> environment variable. <!> <!>`,1),Ge=d(`<span>Using <!>, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> <!> <!> <!>`,1),Ke=d(`<!> <span>Views are svelte components exported by <!> and/or <!>.</span> <!> <!> <span>Views that are meant to be rendered on the server should be exported by <!>.</span> <!> <!> <span>Views that are meant to be rendered on the client should be exported by <!>.</span> <!> <!> <!> <!> <span>Use <!> to send a view.</span> <!> <span>The Name of the view will be used to lookup the view component exported by <!> and/or <!>.</span> <!> <span>There is no way to specify a "<strong>default view</strong>”.</span> <span>However, you can use <!> in order to send the requested file or run custom logic if it doesn’t exist.</span> <!> <span>Usually you would map this handler to the default <!> pattern, which automatically captures all unmatched requests.</span> <!> <!> <span>Optionally, you can specify properties for your View with the Props field.</span> <!> <span>These properties are passed down to your view component.</span> <!> <!> <!> <span>You can choose how to render views by setting one of 3 values for the <!> field in your <!>.</span> <br/> <br/> <!> <!> <!> <!> <span>You can add the <!> tag to your build process to completely disable the server-side
        JavaScript runtime.</span> <!> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>`,1);function pr(we,x){Te(x,!0),Ie(we,{title:"Views",get prefix(){return x.prefix},rightSidebar:S=>{Je(S,{items:[{shift:0,text:"Views"},{shift:0,text:"Server Exports"},{shift:0,text:"Client Exports"},{shift:0,text:"Send Views"},{shift:0,text:"Default View"},{shift:0,text:"View Properties"},{shift:0,text:"Render Modes"},{shift:1,text:"RenderModeFull"},{shift:1,text:"RenderModeServer"},{shift:1,text:"RenderModeClient"},{shift:0,text:"Disabling the server-side JavaScript runtime"}]})},footer:S=>{{let F=ue(()=>({label:"Guards",href:M("/guards",{prefix:x.prefix})})),V=ue(()=>({label:"Web Standards",href:M("/web_standards",{prefix:x.prefix})}));Ue(S,{get previous(){return me(F)},get next(){return me(V)}})}},children:(S,F)=>{var V=Ke(),W=c(V);u(W,{text:"Views"});var N=e(W,2),E=e(s(N));r(E,{source:"app/exports.server.ts"});var fe=e(E,2);r(fe,{source:"app/exports.client.ts"});var I=e(N,2);Ee(I,{children:(h,t)=>{let o=()=>t?.().Directory,p=()=>t?.().File;var l=Ce(),f=c(l);P(f,o,(R,_)=>{_(R,{name:"app",expanded:!0,children:(g,v)=>{var m=ze(),w=c(m);P(w,p,(y,$)=>{$(y,{name:"exports.client.ts",get icon(){return he}})});var b=e(w,2);P(b,p,(y,$)=>{$(y,{name:"exports.server.ts",get icon(){return he}})}),n(g,m)},$$slots:{default:!0}})}),n(h,l)}});var J=e(I,2);u(J,{text:"Server Exports"});var U=e(J,2),_e=e(s(U));r(_e,{source:"app/exports.server.ts"});var z=e(U,2);a(z,{lang:"go",source:`
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `});var A=e(z,2);u(A,{text:"Client Exports"});var D=e(A,2),ge=e(s(D));r(ge,{source:"app/exports.client.ts"});var Y=e(D,2);a(Y,{lang:"go",source:`
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `});var q=e(Y,2);k(q,{children:(i,h)=>{var t=Ae(),o=e(c(t),2);a(o,{lang:"go",source:`
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `}),n(i,t)}});var H=e(q,2);k(H,{children:(i,h)=>{var t=De(),o=c(t),p=e(s(o));r(p,{source:"app/exports.server.ts"});var l=e(p,2);r(l,{source:"app/exports.client.ts"}),n(i,t)}});var L=e(H,2);u(L,{text:"Send Views"});var Z=e(L,2),be=e(s(Z));r(be,{source:"send.View()"});var j=e(Z,2);a(j,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `});var B=e(j,2),G=e(s(B));r(G,{source:"app/exports.server.ts"});var ye=e(G,2);r(ye,{source:"app/exports.client.ts"});var K=e(B,2);u(K,{text:"Default View"});var O=e(K,4),xe=e(s(O));r(xe,{source:"send.RequestedFile()"});var Q=e(O,2);a(Q,{lang:"go",source:`
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
        `});var X=e(Q,2),Se=e(s(X));r(Se,{source:"GET /"});var ee=e(X,2);a(ee,{lang:"go",source:`
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
        `});var re=e(ee,2);u(re,{text:"View Properties"});var te=e(re,4);a(te,{lang:"go",source:`
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
        `});var oe=e(te,4);a(oe,{lang:"go",source:`
            <script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `});var se=e(oe,2);k(se,{children:(i,h)=>{var t=Ye();n(i,t)}});var ne=e(se,2);u(ne,{text:"Render Modes"});var ae=e(ne,2),ie=e(s(ae));r(ie,{source:"RenderMode"});var Re=e(ie,2);r(Re,{source:"View"});var le=e(ae,6);T(le,{key:"1",description:"RenderModeFull",children:(i,h)=>{var t=qe(),o=c(t),p=e(s(o));r(p,{source:"RenderModeFull"});var l=e(o,6);a(l,{lang:"go",source:`
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
        `}),n(i,t)},$$slots:{default:!0}});var de=e(le,2);T(de,{key:"2",description:"RenderModeServer",children:(i,h)=>{var t=Le(),o=c(t),p=e(s(o));r(p,{source:"RenderModeServer"});var l=e(o,6);a(l,{lang:"go",source:`
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
        `});var f=e(l,2);C(f,{children:(R,_)=>{var g=He(),v=e(c(g));r(v,{source:"RenderModeServer"});var m=e(v,2);r(m,{source:"<svelte:head>"}),n(R,g)}}),n(i,t)},$$slots:{default:!0}});var pe=e(de,2);T(pe,{key:"3",description:"RenderModeClient",noLink:!0,children:(i,h)=>{var t=Ge(),o=c(t),p=e(s(o));r(p,{source:"RenderModeClient"});var l=e(o,2);a(l,{lang:"go",source:`
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
        `});var f=e(l,2);C(f,{children:(_,g)=>{var v=Ze(),m=e(c(v),4),w=e(s(m));Fe(w,b=>({...b}),[()=>We(M("/web_standards",{prefix:x.prefix}))]),n(_,v)}});var R=e(f,2);C(R,{children:(_,g)=>{var v=Be(),m=e(c(v));r(m,{source:"RenderModeFull"});var w=e(m,2);r(w,{source:"RenderModeServer"});var b=e(w,2);r(b,{source:"FRIZZANTE_JS_RUNTIME_LIMIT"});var y=e(b,2);a(y,{lang:"shell",source:"FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app"});var $=e(y,2);Ne($,{children:(Pe,Xe)=>{var Me=je();n(Pe,Me)}}),n(_,v)}}),n(i,t)},$$slots:{default:!0}});var ce=e(pe,2);u(ce,{text:"Disabling the server-side JavaScript runtime"});var ve=e(ce,2),$e=e(s(ve));r($e,{source:"no_js_runtime"});var Ve=e(ve,2);a(Ve,{lang:"shell",source:"frizzante --build --tags=no_js_runtime"}),n(S,V)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),ke()}export{pr as default};
