import{f as o,a as n,s as e,b as r,e as _}from"./index-DcfPEVm2.js";import"./navbar.js";import{C as h}from"./code.js";import{F as Z}from"./file_tree.js";import{P as ee,T as te,R as b,F as ae}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{K as y}from"./keyed_section.js";import{T as re}from"./tip.js";var se=o("<!> <!> <!> <!> <!> <!> <!>",1),oe=o(`<span>Before taking a snapshot of your server, you need to list the static routes you would like to snapshot using
            a server route.</span> <br/> <span>You can do this by hand</span> <!> <span>or you can use <!>.</span> <br/> <span>It will generate a route using the given <!>; the resulting route will list all
            available GET routes for the given <!> as <!>.</span> <!>`,1),ne=o(`<span>It doesn't matter how you start the application, you can do it in development mode, in production mode or
            whatever other mode you're using.</span> <br/> <span>All that matters is that <!> is reachable.</span> <br/> <br/> <!> <!> <!>`,1),ie=o("<span>The default frizzante project comes with a <!> which already defines a shortcut <!> so you could also run <!></span>"),le=o("<!> <!>",1),de=o("<!> <!> <!> <!> <!> <!> <!>",1),pe=o("<!> <!>",1),ce=o("<!> <!> <!> <!> <!>",1),ue=o('<span>Run the frizzante cli, point it to the <!> route and give it an output directory.</span> <!> <span>This will retrieve the list of static routes from <!> and generate the output in <!>.</span> <!> <!> <br/> <span>You can publish the <!> directory to a CDN or any other web file server like <a target="_blank" href="https://docs.github.com/en/pages">GitHub Pages</a>, <a target="_blank" href="https://docs.gitlab.com/user/project/pages">GitLab Pages</a>, <a target="_blank" href="https://neocities.org">Neocities</a> and your website should render statically.</span>',1),ve=o('<!> <span>You can take a snapshot of a server using the cli and statically generate your website.</span> <br/> <span>This technique is also known as <a target="_blank" href="https://en.wikipedia.org/wiki/Static_site_generator"><span>SSG, Static Site Generation</span></a>.</span> <br/> <br/> <!> <!> <!>',1);function Pe(M){ee(M,{title:"Snapshots",rightSidebar:z=>{var R=se(),w=n(R);b(w,{items:[{shift:0,text:"Snapshots"}]});var S=e(w,2);b(S,{items:[{shift:1,text:"List statics"}]});var P=e(S,2);b(P,{items:[{shift:1,text:"Start the application"}]});var x=e(P,2);b(x,{items:[{shift:2,text:"Start development server"}]});var G=e(x,2);b(G,{items:[{shift:2,text:"Start production server"}]});var i=e(G,2);b(i,{items:[{shift:2,text:"Start development server using makefile"}]});var E=e(i,2);b(E,{items:[{shift:1,text:"Snapshot"}]}),r(z,R)},footer:z=>{ae(z,{previous:{label:"Type Definitions",href:"/frizzante-docs-using-snapshots/type_definitions"},next:{label:"Todos Example",href:"/frizzante-docs-using-snapshots/todos_example"}})},children:(z,R)=>{var w=ve(),S=n(w);te(S,{text:"Snapshots"});var P=e(S,12);y(P,{key:"1",description:"List statics",children:(i,E)=>{var l=oe(),d=e(n(l),6);h(d,{lang:"go",source:`
                package main

                import (
                    "embed"
                    "log"

                    "main/lib/core/clients"
                    "main/lib/core/routes"
                    "main/lib/core/send"
                    "main/lib/core/servers"
                    "main/lib/core/ssr"
                    "main/lib/routes/fallback"
                    "main/lib/routes/about"
                    "main/lib/routes/projects"
                )

                //go:generate frizzante clean
                //go:generate frizzante configure
                //go:generate frizzante generate types
                //go:generate frizzante package
                //go:embed app/dist
                var efs embed.FS
                var server = servers.New()

                func main() {
                    server.Efs = efs
                    server.Render = ssr.New(1)
                    server.Routes = []routes.Route{
                        {Pattern: "GET /", Handler: fallback.View},
                        {Pattern: "GET /about", Handler: about.View},
                        {Pattern: "GET /projects", Handler: projects.View},
                        {Pattern: "GET /@statics", Handler: func(client *clients.Client) {
                            send.Json(client, []string{ // <======= Manually listing all routes.
                                "/",
                                "/about",
                                "/projects",
                            })
                        }},
                    }
                    if err := servers.Start(server); err != nil {
                        log.Fatal(err)
                    }
                }
            `});var $=e(d,2),m=e(_($));s(m,{source:"statics.New()"});var p=e($,4),f=e(_(p));s(f,{source:"pattern"});var a=e(f,2);s(a,{source:"server"});var g=e(a,2);s(g,{source:"application/json"});var F=e(p,2);h(F,{lang:"go",source:`
                package main

                import (
                    "embed"
                    "log"

                    "main/lib/core/routes"
                    "main/lib/core/routes/statics"
                    "main/lib/core/servers"
                    "main/lib/core/ssr"
                    "main/lib/routes/about"
                    "main/lib/routes/fallback"
                    "main/lib/routes/projects"
                )

                //go:generate frizzante clean
                //go:generate frizzante configure
                //go:generate frizzante generate types
                //go:generate frizzante package
                //go:embed app/dist
                var efs embed.FS
                var server = servers.New()

                func main() {
                    server.Efs = efs
                    server.Render = ssr.New(1)
                    server.Routes = []routes.Route{
                        {Pattern: "GET /", Handler: fallback.View},
                        {Pattern: "GET /about", Handler: about.View},
                        {Pattern: "GET /projects", Handler: projects.View},
                        statics.New("GET /@statics", server), // <========== This will automatically generate a route that 
                                                              //             lists all static routes of the a given server.
                    }
                    if err := servers.Start(server); err != nil {
                        log.Fatal(err)
                    }
                }

            `}),r(i,l)},$$slots:{default:!0}});var x=e(P,2);y(x,{key:"2",description:"Start the application",children:(i,E)=>{var l=ne(),d=e(n(l),4),$=e(_(d));s($,{source:"GET /@statics"});var m=e(d,6);y(m,{key:"A",description:"Start development server",children:(a,g)=>{h(a,{lang:"bash",source:"frizzante dev"})},$$slots:{default:!0}});var p=e(m,2);y(p,{key:"B",description:"Start production server",children:(a,g)=>{h(a,{lang:"bash",source:"frizzante build && ./gen/bin/app"})},$$slots:{default:!0}});var f=e(p,2);y(f,{key:"C",description:"Start development server using makefile",noLink:!0,children:(a,g)=>{h(a,{lang:"bash",source:"make dev"})},$$slots:{default:!0}}),r(i,l)},$$slots:{default:!0}});var G=e(x,2);y(G,{key:"3",description:"Snapshot",noLink:!0,children:(i,E)=>{var l=ue(),d=n(l),$=e(_(d));s($,{source:"GET /@statics"});var m=e(d,2);h(m,{lang:"bash",source:"frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot"});var p=e(m,2),f=e(_(p));s(f,{source:"http://127.0.0.1:8080/@statics"});var a=e(f,2);s(a,{source:"./.gen/snapshot"});var g=e(p,2);re(g,{children:(N,V)=>{var T=ie(),c=e(_(T));s(c,{source:"makefile"});var t=e(c,2);h(t,{lang:"makefile",source:`
                        snapshot:
                            frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot
                    `});var H=e(t,2);h(H,{source:"make snapshot"}),r(N,T)}});var F=e(g,2);Z(F,{children:(V,T)=>{let c=()=>T?.().Directory,t=()=>T?.().File;c()(V,{name:".gen",expanded:!0,children:(H,fe)=>{c()(H,{name:"snapshot",expanded:!0,children:(U,ge)=>{var C=ce(),L=n(C);c()(L,{name:"about",expanded:!0,children:(j,A)=>{var u=le(),v=n(u);t()(v,{name:"index.html"});var k=e(v,2);t()(k,{name:"data.json"}),r(j,u)},$$slots:{default:!0}});var D=e(L,2);c()(D,{name:"assets",expanded:!0,children:(j,A)=>{var u=de(),v=n(u);t()(v,{name:"index-[hash].css"});var k=e(v,2);t()(k,{name:"index-[hash].js"});var B=e(k,2);t()(B,{name:"projects-[hash].css"});var K=e(B,2);t()(K,{name:"projects-[hash].js"});var q=e(K,2);t()(q,{name:"about-[hash].css"});var J=e(q,2);t()(J,{name:"about-[hash].js"});var X=e(J,2);t()(X,{name:"[other scripts and assets...]"}),r(j,u)},$$slots:{default:!0}});var I=e(D,2);c()(I,{name:"projects",expanded:!0,children:(j,A)=>{var u=pe(),v=n(u);t()(v,{name:"index.html"});var k=e(v,2);t()(k,{name:"data.json"}),r(j,u)},$$slots:{default:!0}});var Y=e(I,2);t()(Y,{name:"index.html"});var W=e(Y,2);t()(W,{name:"data.json"}),r(U,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}});var O=e(F,4),Q=e(_(O));s(Q,{source:".gen/snapshot"}),r(i,l)},$$slots:{default:!0}}),r(z,w)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{Pe as default};
