import{p as C,f as H,a as P,s as e,b as y,c as I,g as f,u as _,h as G}from"./index-CQxZXpNM.js";import{C as r}from"./code.js";import{I as n}from"./inline_code.js";import{P as R,T as b,R as j,F as q}from"./right_sidebar.js";import{p as w,b as S}from"./navbar.js";const M="/frizzante-docs-using-snapshots/assets/guards_diagram_1.svg",N="/frizzante-docs-using-snapshots/assets/guards_diagram_2.svg";var A=H("<!> <span>A guard is an object that is composed of an optional name and a required handler.</span> <br/> <span>You can add guards to your routes in order to protect them.</span> <!> <span>Guards will block all incoming requests by default, you must call <!> to explicitly allow the request through.</span> <br/> <span>In this example, <!> the route will decline requests with content type <!></span> <!> <!> <span>You can compose multiple guards in order to create more advanced restrictions.</span> <!> <!> <!> <!>",1);function B(x,a){C(a,!0),R(x,{title:"Guards",get dev(){return a.dev},rightSidebar:t=>{j(t,{items:[{shift:0,text:"Guards"},{shift:0,text:"Composition"}]})},footer:t=>{{let i=_(()=>({label:"Server Sent Events",href:S("/server_sent_events",{dev:a.dev})})),s=_(()=>({label:"Views",href:S("/views",{dev:a.dev})}));q(t,{get previous(){return f(i)},get next(){return f(s)}})}},children:(t,i)=>{var s=A(),o=P(s);b(o,{text:"Guards"});var d=e(o,8);r(d,{lang:"go",source:`
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
        `});var u=e(d,2),E=e(G(u));n(E,{source:"allow()"});var l=e(u,4),c=e(G(l));n(c,{source:"GET /api/xml/data"});var T=e(c,2);n(T,{source:"application/json"});var g=e(l,2);w(g,{get src(){return M},width:"100%"});var p=e(g,2);b(p,{text:"Composition"});var h=e(p,4);r(h,{lang:"go",source:`
            var authenticate = guards.Guard{Name: "authenticate", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.Verified && time.Since(session.LastActivity) <= 30*time.Minute {
                    allow()
                    return
                }
                send.Status(client, 401)
                send.Message(client, "not authenticated")
            }}
        `});var v=e(h,2);r(v,{lang:"go",source:`
            var authorize = guards.Guard{Name: "authorize", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.UserId == receive.path("user_id") {
                    allow()
                    return
                }
                send.Status(client, 403)
                send.Message(client, "missing permissions")
            }}
        `});var m=e(v,2);r(m,{lang:"go",source:`
            server.Routes = []routes.Route{
                {Pattern: "GET /public", Handler: public.Get},
                {Pattern: "GET /dashboard", Handler: dashboard.Get, Guards: []guards.Guard{authenticate}},
                {Pattern: "GET /user/{user_id}/settings", Handler: settings.Get, Guards: []guards.Guard{authenticate, authorize}},
                {Pattern: "DELETE /user/{user_id}", Handler: user.Delete, Guards: []guards.Guard{authenticate, authorize}},
            }
        `});var z=e(m,2);w(z,{get src(){return N},width:"100%"}),y(t,s)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),I()}export{B as default};
