import{p as ge,f as u,a as o,s as e,b as n,c as _e,g as ee,u as re,h as S,d as te,e as r}from"./index-CQxZXpNM.js";import{C as y}from"./code.js";import{F as be}from"./file_tree.js";import{P as $e,T as ye,R as P,F as ke}from"./right_sidebar.js";import{I as p}from"./inline_code.js";import{K as E}from"./keyed_section.js";import{T as xe}from"./tip.js";import{b as ae}from"./navbar.js";var ze=u("<!> <!> <!> <!> <!> <!> <!>",1),we=u(`<span>Before taking a snapshot of your server, you need to list the static routes you would like to snapshot using
            a server route.</span> <br/> <span>You can do this by hand</span> <!> <span>or you can use <!>.</span> <br/> <span>It will generate a route using the given <!>; the resulting route will list all
            available GET routes for the given <!> as <!>.</span> <!>`,1),Se=u(`<span>It doesn't matter how you start the application, you can do it in development mode, in production mode or
            whatever other mode you're using.</span> <br/> <span>All that matters is that <!> is reachable.</span> <br/> <br/> <!> <!> <!>`,1),Pe=u("<span>The default frizzante project comes with a <!> which already defines a shortcut <!> so you could also run <!></span>"),Te=u("<!> <!>",1),je=u("<!> <!> <!> <!> <!> <!> <!>",1),Ee=u("<!> <!>",1),Ge=u("<!> <!> <!> <!> <!>",1),Fe=u("<span>Run the frizzante cli and point it to the <!> route.</span> <!> <span>This will retrieve the list of static routes from <!> and generate the output in <!>.</span> <!> <!> <br/> <span>You can publish the <!> directory to a CDN and your website should render statically.</span>",1),Re=u('<!> <span>You can take a snapshot of a server using the cli and statically generate your website.</span> <br/> <span>This technique is also known as <a target="_blank" href="https://en.wikipedia.org/wiki/Static_site_generator"><span>SSG, Static Site Generation</span></a>.</span> <br/> <br/> <!> <!> <!>',1);function Je(se,D){ge(D,!0),$e(se,{title:"Snapshots",get prefix(){return D.prefix},rightSidebar:G=>{var F=ze(),k=o(F);P(k,{items:[{shift:0,text:"Snapshots"}]});var R=e(k,2);P(R,{items:[{shift:1,text:"List statics"}]});var H=e(R,2);P(H,{items:[{shift:1,text:"Start the application"}]});var N=e(H,2);P(N,{items:[{shift:2,text:"Start development server"}]});var I=e(N,2);P(I,{items:[{shift:2,text:"Start production server"}]});var h=e(I,2);P(h,{items:[{shift:2,text:"Start development server using makefile"}]});var L=e(h,2);P(L,{items:[{shift:1,text:"Snapshot"}]}),n(G,F)},footer:G=>{{let F=re(()=>({label:"Type Definitions",href:ae("/type_definitions",{prefix:D.prefix})})),k=re(()=>({label:"Todos Example",href:ae("/todos_example",{prefix:D.prefix})}));ke(G,{get previous(){return ee(F)},get next(){return ee(k)}})}},children:(G,F)=>{var k=Re(),R=o(k);ye(R,{text:"Snapshots"});var H=e(R,12);E(H,{key:"1",description:"List statics",children:(h,L)=>{var m=we(),f=e(o(m),6);y(f,{lang:"go",source:`
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
            `});var T=e(f,2),x=e(S(T));p(x,{source:"statics.New()"});var g=e(T,4),z=e(S(g));p(z,{source:"pattern"});var i=e(z,2);p(i,{source:"server"});var w=e(i,2);p(w,{source:"application/json"});var Y=e(g,2);y(Y,{lang:"go",source:`
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

            `}),n(h,m)},$$slots:{default:!0}});var N=e(H,2);E(N,{key:"2",description:"Start the application",children:(h,L)=>{var m=Se(),f=e(o(m),4),T=e(S(f));p(T,{source:"GET /@statics"});var x=e(f,6);E(x,{key:"A",description:"Start development server",children:(i,w)=>{y(i,{lang:"bash",source:"frizzante dev"})},$$slots:{default:!0}});var g=e(x,2);E(g,{key:"B",description:"Start production server",children:(i,w)=>{y(i,{lang:"bash",source:"frizzante build && ./gen/bin/app"})},$$slots:{default:!0}});var z=e(g,2);E(z,{key:"C",description:"Start development server using makefile",noLink:!0,children:(i,w)=>{y(i,{lang:"bash",source:"make dev"})},$$slots:{default:!0}}),n(h,m)},$$slots:{default:!0}});var I=e(N,2);E(I,{key:"3",description:"Snapshot",noLink:!0,children:(h,L)=>{var m=Fe(),f=o(m),T=e(S(f));p(T,{source:"GET /@statics"});var x=e(f,2);y(x,{lang:"bash",source:"frizzante generate snapshot http://127.0.0.1:8080/@statics"});var g=e(x,2),z=e(S(g));p(z,{source:"http://127.0.0.1:8080/@statics"});var i=e(z,2);p(i,{source:"./.gen/snapshot"});var w=e(g,2);xe(w,{children:(B,K)=>{var V=Pe(),_=e(S(V));p(_,{source:"makefile"});var t=e(_,2);y(t,{lang:"makefile",source:`
                        snapshot:
                            frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot
                    `});var A=e(t,2);y(A,{source:"make snapshot"}),n(B,V)}});var Y=e(w,2);be(Y,{children:(K,V)=>{let _=()=>V?.().Directory,t=()=>V?.().File;var A=te(),ie=o(A);r(ie,_,(le,de)=>{de(le,{name:".gen",expanded:!0,children:(pe,Ve)=>{var q=te(),ue=o(q);r(ue,_,(ce,ve)=>{ve(ce,{name:"snapshot",expanded:!0,children:(he,Ce)=>{var J=Ge(),M=o(J);r(M,_,(c,v)=>{v(c,{name:"about",expanded:!0,children:(C,W)=>{var b=Te(),$=o(b);r($,t,(l,d)=>{d(l,{name:"index.html"})});var j=e($,2);r(j,t,(l,d)=>{d(l,{name:"data.json"})}),n(C,b)},$$slots:{default:!0}})});var O=e(M,2);r(O,_,(c,v)=>{v(c,{name:"assets",expanded:!0,children:(C,W)=>{var b=je(),$=o(b);r($,t,(a,s)=>{s(a,{name:"index-[hash].css"})});var j=e($,2);r(j,t,(a,s)=>{s(a,{name:"index-[hash].js"})});var l=e(j,2);r(l,t,(a,s)=>{s(a,{name:"projects-[hash].css"})});var d=e(l,2);r(d,t,(a,s)=>{s(a,{name:"projects-[hash].js"})});var X=e(d,2);r(X,t,(a,s)=>{s(a,{name:"about-[hash].css"})});var Z=e(X,2);r(Z,t,(a,s)=>{s(a,{name:"about-[hash].js"})});var fe=e(Z,2);r(fe,t,(a,s)=>{s(a,{name:"[other scripts and assets...]"})}),n(C,b)},$$slots:{default:!0}})});var Q=e(O,2);r(Q,_,(c,v)=>{v(c,{name:"projects",expanded:!0,children:(C,W)=>{var b=Ee(),$=o(b);r($,t,(l,d)=>{d(l,{name:"index.html"})});var j=e($,2);r(j,t,(l,d)=>{d(l,{name:"data.json"})}),n(C,b)},$$slots:{default:!0}})});var U=e(Q,2);r(U,t,(c,v)=>{v(c,{name:"index.html"})});var me=e(U,2);r(me,t,(c,v)=>{v(c,{name:"data.json"})}),n(he,J)},$$slots:{default:!0}})}),n(pe,q)},$$slots:{default:!0}})}),n(K,A)}});var ne=e(Y,4),oe=e(S(ne));p(oe,{source:".gen/snapshot"}),n(h,m)},$$slots:{default:!0}}),n(G,k)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_e()}export{Je as default};
