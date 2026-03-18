import{p as re,f as o,a as n,s as e,b as r,c as se,g as M,d as O,e as b}from"./index-CBalJl4v.js";import{i as oe,b as Q}from"./navbar.js";import{C as h}from"./code.js";import{F as ne}from"./file_tree.js";import{P as ie,T as le,R as $,F as de}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{K as z}from"./keyed_section.js";import{T as pe}from"./tip.js";var ce=o("<!> <!> <!> <!> <!> <!> <!>",1),ue=o(`<span>Before taking a snapshot of your server, you need to list the static routes you would like to snapshot using
            a server route.</span> <br/> <span>You can do this by hand</span> <!> <span>or you can use <!>.</span> <br/> <span>It will generate a route using the given <!>; the resulting route will list all
            available GET routes for the given <!> as <!>.</span> <!>`,1),ve=o(`<span>It doesn't matter how you start the application, you can do it in development mode, in production mode or
            whatever other mode you're using.</span> <br/> <span>All that matters is that <!> is reachable.</span> <br/> <br/> <!> <!> <!>`,1),he=o("<span>The default frizzante project comes with a <!> which already defines a shortcut <!> so you could also run <!></span>"),me=o("<!> <!>",1),fe=o("<!> <!> <!> <!> <!> <!> <!>",1),ge=o("<!> <!>",1),_e=o("<!> <!> <!> <!> <!>",1),be=o('<span>Run the frizzante cli, point it to the <!> route and give it an output directory.</span> <!> <span>This will retrieve the list of static routes from <!> and generate the output in <!>.</span> <!> <!> <br/> <span>You can publish the <!> directory to a CDN or any other web file server like <a target="_blank" href="https://docs.github.com/en/pages">GitHub Pages</a>, <a target="_blank" href="https://docs.gitlab.com/user/project/pages">GitLab Pages</a>, <a target="_blank" href="https://neocities.org">Neocities</a> and your website should render statically.</span>',1),$e=o('<!> <span>You can take a snapshot of a server using the cli and statically generate your website.</span> <br/> <span>This technique is also known as <a target="_blank" href="https://en.wikipedia.org/wiki/Static_site_generator"><span>SSG, Static Site Generation</span></a>.</span> <br/> <br/> <!> <!> <!>',1);function Re(U,W){re(W,!1),oe(),ie(U,{title:"Snapshots",rightSidebar:w=>{var S=ce(),m=n(S);$(m,{items:[{shift:0,text:"Snapshots"}]});var P=e(m,2);$(P,{items:[{shift:1,text:"List statics"}]});var x=e(P,2);$(x,{items:[{shift:1,text:"Start the application"}]});var T=e(x,2);$(T,{items:[{shift:2,text:"Start development server"}]});var E=e(T,2);$(E,{items:[{shift:2,text:"Start production server"}]});var i=e(E,2);$(i,{items:[{shift:2,text:"Start development server using makefile"}]});var F=e(i,2);$(F,{items:[{shift:1,text:"Snapshot"}]}),r(w,S)},footer:w=>{{let S=O(()=>({label:"Type Definitions",href:Q("/type_definitions")})),m=O(()=>({label:"Todos Example",href:Q("/todos_example")}));de(w,{get previous(){return M(S)},get next(){return M(m)}})}},children:(w,S)=>{var m=$e(),P=n(m);le(P,{text:"Snapshots"});var x=e(P,12);z(x,{key:"1",description:"List statics",children:(i,F)=>{var l=ue(),d=e(n(l),6);h(d,{lang:"go",source:`
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
            `});var k=e(d,2),f=e(b(k));s(f,{source:"statics.New()"});var p=e(k,4),g=e(b(p));s(g,{source:"pattern"});var a=e(g,2);s(a,{source:"server"});var _=e(a,2);s(_,{source:"application/json"});var R=e(p,2);h(R,{lang:"go",source:`
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

            `}),r(i,l)},$$slots:{default:!0}});var T=e(x,2);z(T,{key:"2",description:"Start the application",children:(i,F)=>{var l=ve(),d=e(n(l),4),k=e(b(d));s(k,{source:"GET /@statics"});var f=e(d,6);z(f,{key:"A",description:"Start development server",children:(a,_)=>{h(a,{lang:"bash",source:"frizzante dev"})},$$slots:{default:!0}});var p=e(f,2);z(p,{key:"B",description:"Start production server",children:(a,_)=>{h(a,{lang:"bash",source:"frizzante build && ./gen/bin/app"})},$$slots:{default:!0}});var g=e(p,2);z(g,{key:"C",description:"Start development server using makefile",noLink:!0,children:(a,_)=>{h(a,{lang:"bash",source:"make dev"})},$$slots:{default:!0}}),r(i,l)},$$slots:{default:!0}});var E=e(T,2);z(E,{key:"3",description:"Snapshot",noLink:!0,children:(i,F)=>{var l=be(),d=n(l),k=e(b(d));s(k,{source:"GET /@statics"});var f=e(d,2);h(f,{lang:"bash",source:"frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot"});var p=e(f,2),g=e(b(p));s(g,{source:"http://127.0.0.1:8080/@statics"});var a=e(g,2);s(a,{source:"./.gen/snapshot"});var _=e(p,2);pe(_,{children:(N,V)=>{var j=he(),c=e(b(j));s(c,{source:"makefile"});var t=e(c,2);h(t,{lang:"makefile",source:`
                        snapshot:
                            frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot
                    `});var H=e(t,2);h(H,{source:"make snapshot"}),r(N,j)}});var R=e(_,2);ne(R,{children:(V,j)=>{let c=()=>j?.().Directory,t=()=>j?.().File;c()(V,{name:".gen",expanded:!0,children:(H,ze)=>{c()(H,{name:"snapshot",expanded:!0,children:(ee,we)=>{var C=_e(),L=n(C);c()(L,{name:"about",expanded:!0,children:(G,q)=>{var u=me(),v=n(u);t()(v,{name:"index.html"});var y=e(v,2);t()(y,{name:"data.json"}),r(G,u)},$$slots:{default:!0}});var D=e(L,2);c()(D,{name:"assets",expanded:!0,children:(G,q)=>{var u=fe(),v=n(u);t()(v,{name:"index-[hash].css"});var y=e(v,2);t()(y,{name:"index-[hash].js"});var A=e(y,2);t()(A,{name:"projects-[hash].css"});var B=e(A,2);t()(B,{name:"projects-[hash].js"});var K=e(B,2);t()(K,{name:"about-[hash].css"});var J=e(K,2);t()(J,{name:"about-[hash].js"});var ae=e(J,2);t()(ae,{name:"[other scripts and assets...]"}),r(G,u)},$$slots:{default:!0}});var I=e(D,2);c()(I,{name:"projects",expanded:!0,children:(G,q)=>{var u=ge(),v=n(u);t()(v,{name:"index.html"});var y=e(v,2);t()(y,{name:"data.json"}),r(G,u)},$$slots:{default:!0}});var Y=e(I,2);t()(Y,{name:"index.html"});var te=e(Y,2);t()(te,{name:"data.json"}),r(ee,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}});var X=e(R,4),Z=e(b(X));s(Z,{source:".gen/snapshot"}),r(i,l)},$$slots:{default:!0}}),r(w,m)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),se()}export{Re as default};
