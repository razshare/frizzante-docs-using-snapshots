import{f as S,a as x,s as e,b as E,e as h}from"./index-DcfPEVm2.js";import{n as f}from"./navbar.js";import{C as a}from"./code.js";import{I as s}from"./inline_code.js";import{P as T,T as v,R as z,F as C}from"./right_sidebar.js";const H="/frizzante-docs-using-snapshots/assets/guards_diagram_1.svg",P="/frizzante-docs-using-snapshots/assets/guards_diagram_2.svg";var y=S("<!> <span>A guard is an object that is composed of an optional name and a required handler.</span> <br/> <span>You can add guards to your routes in order to protect them.</span> <!> <span>Guards will block all incoming requests by default, you must call <!> to explicitly allow the request through.</span> <br/> <span>In this example, <!> the route will decline requests with content type <!></span> <!> <!> <span>You can compose multiple guards in order to create more advanced restrictions.</span> <!> <!> <!> <!>",1);function D(_){T(_,{title:"Guards",rightSidebar:t=>{z(t,{items:[{shift:0,text:"Guards"},{shift:0,text:"Composition"}]})},footer:t=>{C(t,{previous:{label:"Server Sent Events",href:"/server_sent_events"},next:{label:"Views",href:"/views"}})},children:(t,j)=>{var r=y(),n=x(r);v(n,{text:"Guards"});var o=e(n,8);a(o,{lang:"go",source:`
            server.Routes = []routes.Route{
                {
                    Pattern: "GET /api/xml/data",
                    Handler: data.Get,
                    Guards: []guards.Guards{
                        {Name: "jsonless", Handler: func(client *clients.Client, allow func()) {
                            if receive.ContentType(client) == "application/json" {
                                return
                            }
                            allow()
                        }},
                    },
                },
            }
        `});var i=e(o,2),G=e(h(i));s(G,{source:"allow()"});var d=e(i,4),u=e(h(d));s(u,{source:"GET /api/xml/data"});var b=e(u,2);s(b,{source:"application/json"});var l=e(d,2);f(l,{get src(){return H},width:"100%"});var c=e(l,2);v(c,{text:"Composition"});var p=e(c,4);a(p,{lang:"go",source:`
            var authenticate = guards.Guard{Name: "authenticate", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.Verified && time.Since(session.LastActivity) <= 30*time.Minute {
                    allow()
                    return
                }
                send.Status(client, 401)
                send.Message(client, "not authenticated")
            }}
        `});var g=e(p,2);a(g,{lang:"go",source:`
            var authorize = guards.Guard{Name: "authorize", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.UserId == receive.path("user_id") {
                    allow()
                    return
                }
                send.Status(client, 403)
                send.Message(client, "missing permissions")
            }}
        `});var m=e(g,2);a(m,{lang:"go",source:`
            server.Routes = []routes.Route{
                {Pattern: "GET /public", Handler: public.Get},
                {Pattern: "GET /dashboard", Handler: dashboard.Get, Guards: []guards.Guard{authenticate}},
                {Pattern: "GET /user/{user_id}/settings", Handler: settings.Get, Guards: []guards.Guard{authenticate, authorize}},
                {Pattern: "DELETE /user/{user_id}", Handler: user.Delete, Guards: []guards.Guard{authenticate, authorize}},
            }
        `});var w=e(m,2);f(w,{get src(){return P},width:"100%"}),E(t,r)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{D as default};
