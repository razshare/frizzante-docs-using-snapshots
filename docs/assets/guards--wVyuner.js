import{f as S,a as x,s as e,b as C,e as h}from"./index-elLOZMZZ.js";import{n as v}from"./navbar-DCDF4cA1.js";import{C as a}from"./code-CHySw2ew.js";import{I as s}from"./inline_code-w6SJIKYc.js";import{P as E,T as f,R as T,F as z}from"./right_sidebar-DSOKDO70.js";const H="/frizzante-docs-using-snapshots/assets/guards_diagram_1-8XvtXsMA.svg",P="/frizzante-docs-using-snapshots/assets/guards_diagram_2-CBpLkatL.svg";var y=S("<!> <span>A guard is an object that is composed of an optional name and a required handler.</span> <br/> <span>You can add guards to your routes in order to protect them.</span> <!> <span>Guards will block all incoming requests by default, you must call <!> to explicitly allow the request through.</span> <br/> <span>In this example, <!> the route will decline requests with content type <!></span> <!> <!> <span>You can compose multiple guards in order to create more advanced restrictions.</span> <!> <!> <!> <!>",1);function N(_){E(_,{title:"Guards",rightSidebar:t=>{T(t,{items:[{shift:0,text:"Guards"},{shift:0,text:"Composition"}]})},footer:t=>{z(t,{previous:{label:"Server Sent Events",href:"/server_sent_events"},next:{label:"Views",href:"/views"}})},children:(t,j)=>{var r=y(),n=x(r);f(n,{text:"Guards"});var o=e(n,8);a(o,{lang:"go",source:`
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
        `});var i=e(o,2),G=e(h(i));s(G,{source:"allow()"});var d=e(i,4),u=e(h(d));s(u,{source:"GET /api/xml/data"});var b=e(u,2);s(b,{source:"application/json"});var l=e(d,2);v(l,{get src(){return H},width:"100%"});var c=e(l,2);f(c,{text:"Composition"});var p=e(c,4);a(p,{lang:"go",source:`
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
        `});var w=e(m,2);v(w,{get src(){return P},width:"100%"}),C(t,r)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{N as default};
