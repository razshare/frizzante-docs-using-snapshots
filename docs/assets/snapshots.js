import{p as ge,f as c,a as n,s as e,b as o,c as _e,g as ee,u as te,h as P,d as ae,e as t}from"./index-CQxZXpNM.js";import{C as k}from"./code.js";import{F as be}from"./file_tree.js";import{P as $e,T as ke,R as x,F as ye}from"./right_sidebar.js";import{I as p}from"./inline_code.js";import{K as G}from"./keyed_section.js";import{T as ze}from"./tip.js";import{b as re}from"./navbar.js";var we=c("<!> <!> <!> <!> <!> <!> <!>",1),Se=c(`<span>Before taking a snapshot of your server, you need to list the static routes you would like to snapshot using
            a server route.</span> <br/> <span>You can do this by hand</span> <!> <span>or you can use <!>.</span> <br/> <span>It will generate a route using the given <!>; the resulting route will list all
            available GET routes for the given <!> as <!>.</span> <!>`,1),Pe=c(`<span>It doesn't matter how you start the application, you can do it in development mode, in production mode or
            whatever other mode you're using.</span> <br/> <span>All that matters is that <!> is reachable.</span> <br/> <br/> <!> <!> <!>`,1),xe=c("<span>The default frizzante project comes with a <!> which already defines a shortcut <!> so you could also run <!></span>"),Te=c("<!> <!>",1),je=c("<!> <!> <!> <!> <!> <!> <!>",1),Ge=c("<!> <!>",1),Ee=c("<!> <!> <!> <!> <!>",1),Fe=c('<span>Run the frizzante cli and point it to the <!> route.</span> <!> <span>This will retrieve the list of static routes from <!> and generate the output in <!>.</span> <!> <!> <br/> <span>You can publish the <!> directory to a CDN or any other web file server like <a target="_blank" href="https://docs.github.com/en/pages">GitHub Pages</a>, <a target="_blank" href="https://docs.gitlab.com/user/project/pages">GitLab Pages</a>, <a target="_blank" href="https://neocities.org">Neocities</a> and your website should render statically.</span>',1),Re=c('<!> <span>You can take a snapshot of a server using the cli and statically generate your website.</span> <br/> <span>This technique is also known as <a target="_blank" href="https://en.wikipedia.org/wiki/Static_site_generator"><span>SSG, Static Site Generation</span></a>.</span> <br/> <br/> <!> <!> <!>',1);function Je(se,L){ge(L,!0),$e(se,{title:"Snapshots",get dev(){return L.dev},rightSidebar:E=>{var F=we(),y=n(F);x(y,{items:[{shift:0,text:"Snapshots"}]});var R=e(y,2);x(R,{items:[{shift:1,text:"List statics"}]});var H=e(R,2);x(H,{items:[{shift:1,text:"Start the application"}]});var N=e(H,2);x(N,{items:[{shift:2,text:"Start development server"}]});var D=e(N,2);x(D,{items:[{shift:2,text:"Start production server"}]});var h=e(D,2);x(h,{items:[{shift:2,text:"Start development server using makefile"}]});var I=e(h,2);x(I,{items:[{shift:1,text:"Snapshot"}]}),o(E,F)},footer:E=>{{let F=te(()=>({label:"Type Definitions",href:re("/type_definitions",{dev:L.dev})})),y=te(()=>({label:"Todos Example",href:re("/todos_example",{dev:L.dev})}));ye(E,{get previous(){return ee(F)},get next(){return ee(y)}})}},children:(E,F)=>{var y=Re(),R=n(y);ke(R,{text:"Snapshots"});var H=e(R,12);G(H,{key:"1",description:"List statics",children:(h,I)=>{var m=Se(),f=e(n(m),6);k(f,{lang:"go",source:`
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
            `});var T=e(f,2),z=e(P(T));p(z,{source:"statics.New()"});var g=e(T,4),w=e(P(g));p(w,{source:"pattern"});var i=e(w,2);p(i,{source:"server"});var S=e(i,2);p(S,{source:"application/json"});var Y=e(g,2);k(Y,{lang:"go",source:`
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

            `}),o(h,m)},$$slots:{default:!0}});var N=e(H,2);G(N,{key:"2",description:"Start the application",children:(h,I)=>{var m=Pe(),f=e(n(m),4),T=e(P(f));p(T,{source:"GET /@statics"});var z=e(f,6);G(z,{key:"A",description:"Start development server",children:(i,S)=>{k(i,{lang:"bash",source:"frizzante dev"})},$$slots:{default:!0}});var g=e(z,2);G(g,{key:"B",description:"Start production server",children:(i,S)=>{k(i,{lang:"bash",source:"frizzante build && ./gen/bin/app"})},$$slots:{default:!0}});var w=e(g,2);G(w,{key:"C",description:"Start development server using makefile",noLink:!0,children:(i,S)=>{k(i,{lang:"bash",source:"make dev"})},$$slots:{default:!0}}),o(h,m)},$$slots:{default:!0}});var D=e(N,2);G(D,{key:"3",description:"Snapshot",noLink:!0,children:(h,I)=>{var m=Fe(),f=n(m),T=e(P(f));p(T,{source:"GET /@statics"});var z=e(f,2);k(z,{lang:"bash",source:"frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot"});var g=e(z,2),w=e(P(g));p(w,{source:"http://127.0.0.1:8080/@statics"});var i=e(w,2);p(i,{source:"./.gen/snapshot"});var S=e(g,2);ze(S,{children:(B,K)=>{var V=xe(),_=e(P(V));p(_,{source:"makefile"});var a=e(_,2);k(a,{lang:"makefile",source:`
                        snapshot:
                            frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot
                    `});var A=e(a,2);k(A,{source:"make snapshot"}),o(B,V)}});var Y=e(S,2);be(Y,{children:(K,V)=>{let _=()=>V?.().Directory,a=()=>V?.().File;var A=ae(),ie=n(A);t(ie,_,(le,de)=>{de(le,{name:".gen",expanded:!0,children:(pe,Ve)=>{var q=ae(),ce=n(q);t(ce,_,(ue,ve)=>{ve(ue,{name:"snapshot",expanded:!0,children:(he,Ce)=>{var J=Ee(),M=n(J);t(M,_,(u,v)=>{v(u,{name:"about",expanded:!0,children:(C,W)=>{var b=Te(),$=n(b);t($,a,(l,d)=>{d(l,{name:"index.html"})});var j=e($,2);t(j,a,(l,d)=>{d(l,{name:"data.json"})}),o(C,b)},$$slots:{default:!0}})});var O=e(M,2);t(O,_,(u,v)=>{v(u,{name:"assets",expanded:!0,children:(C,W)=>{var b=je(),$=n(b);t($,a,(r,s)=>{s(r,{name:"index-[hash].css"})});var j=e($,2);t(j,a,(r,s)=>{s(r,{name:"index-[hash].js"})});var l=e(j,2);t(l,a,(r,s)=>{s(r,{name:"projects-[hash].css"})});var d=e(l,2);t(d,a,(r,s)=>{s(r,{name:"projects-[hash].js"})});var X=e(d,2);t(X,a,(r,s)=>{s(r,{name:"about-[hash].css"})});var Z=e(X,2);t(Z,a,(r,s)=>{s(r,{name:"about-[hash].js"})});var fe=e(Z,2);t(fe,a,(r,s)=>{s(r,{name:"[other scripts and assets...]"})}),o(C,b)},$$slots:{default:!0}})});var Q=e(O,2);t(Q,_,(u,v)=>{v(u,{name:"projects",expanded:!0,children:(C,W)=>{var b=Ge(),$=n(b);t($,a,(l,d)=>{d(l,{name:"index.html"})});var j=e($,2);t(j,a,(l,d)=>{d(l,{name:"data.json"})}),o(C,b)},$$slots:{default:!0}})});var U=e(Q,2);t(U,a,(u,v)=>{v(u,{name:"index.html"})});var me=e(U,2);t(me,a,(u,v)=>{v(u,{name:"data.json"})}),o(he,J)},$$slots:{default:!0}})}),o(pe,q)},$$slots:{default:!0}})}),o(K,A)}});var oe=e(Y,4),ne=e(P(oe));p(ne,{source:".gen/snapshot"}),o(h,m)},$$slots:{default:!0}}),o(E,y)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_e()}export{Je as default};
