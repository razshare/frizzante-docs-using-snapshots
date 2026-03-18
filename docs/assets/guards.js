import{p as C,f as H,a as P,s as e,b as y,c as I,g as f,d as v,e as _}from"./index-CBalJl4v.js";import{i as q,q as G,b}from"./navbar.js";import{C as s}from"./code.js";import{I as r}from"./inline_code.js";import{P as R,T as w,R as $,F as j}from"./right_sidebar.js";const M="/frizzante-docs-using-snapshots/assets/guards_diagram_1.svg",N="/frizzante-docs-using-snapshots/assets/guards_diagram_2.svg";var A=H("<!> <span>A guard is an object that is composed of an optional name and a required handler.</span> <br/> <span>You can add guards to your routes in order to protect them.</span> <!> <span>Guards will block all incoming requests by default, you must call <!> to explicitly allow the request through.</span> <br/> <span>In this example, <!> the route will decline requests with content type <!></span> <!> <!> <span>You can compose multiple guards in order to create more advanced restrictions.</span> <!> <!> <!> <!>",1);function B(S,x){C(x,!1),q(),R(S,{title:"Guards",rightSidebar:a=>{$(a,{items:[{shift:0,text:"Guards"},{shift:0,text:"Composition"}]})},footer:a=>{{let n=v(()=>({label:"Server Sent Events",href:b("/server_sent_events")})),t=v(()=>({label:"Views",href:b("/views")}));j(a,{get previous(){return f(n)},get next(){return f(t)}})}},children:(a,n)=>{var t=A(),i=P(t);w(i,{text:"Guards"});var o=e(i,8);s(o,{lang:"go",source:`
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
        `});var d=e(o,2),E=e(_(d));r(E,{source:"allow()"});var u=e(d,4),l=e(_(u));r(l,{source:"GET /api/xml/data"});var T=e(l,2);r(T,{source:"application/json"});var c=e(u,2);G(c,{get src(){return M},width:"100%"});var p=e(c,2);w(p,{text:"Composition"});var g=e(p,4);s(g,{lang:"go",source:`
            var authenticate = guards.Guard{Name: "authenticate", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.Verified && time.Since(session.LastActivity) <= 30*time.Minute {
                    allow()
                    return
                }
                send.Status(client, 401)
                send.Message(client, "not authenticated")
            }}
        `});var h=e(g,2);s(h,{lang:"go",source:`
            var authorize = guards.Guard{Name: "authorize", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.UserId == receive.path("user_id") {
                    allow()
                    return
                }
                send.Status(client, 403)
                send.Message(client, "missing permissions")
            }}
        `});var m=e(h,2);s(m,{lang:"go",source:`
            server.Routes = []routes.Route{
                {Pattern: "GET /public", Handler: public.Get},
                {Pattern: "GET /dashboard", Handler: dashboard.Get, Guards: []guards.Guard{authenticate}},
                {Pattern: "GET /user/{user_id}/settings", Handler: settings.Get, Guards: []guards.Guard{authenticate, authorize}},
                {Pattern: "DELETE /user/{user_id}", Handler: user.Delete, Guards: []guards.Guard{authenticate, authorize}},
            }
        `});var z=e(m,2);G(z,{get src(){return N},width:"100%"}),y(a,t)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),I()}export{B as default};
