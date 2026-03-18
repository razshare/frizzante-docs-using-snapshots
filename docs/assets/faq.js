import{p as C,f as x,a as E,s as e,h as T,b as w,c as I,g as M,d as R,e as b}from"./index-CBalJl4v.js";import{i as A,b as y,e as G}from"./navbar.js";import{C as s}from"./code.js";import{P as S,T as r,R as $,F as V}from"./right_sidebar.js";import{I as k}from"./inline_code.js";import{N as j}from"./note.js";var D=x("<span>Your implementation may vary.</span> <br/> <span>This implementation doesn’t directly invoke the next hook, instead it sets a flag.</span> <br/> <span>This should keep your stack size smaller and thus more readable.</span>",1),N=x(`<!> <!> <span>Frizzante intentionally uses guards instead of middleware.</span> <br/> <span>Middleware have some limitations.</span> <br/> <ul><li>All middleware handles must be invoked for each request</li> <li>Some middleware may contain path-checking logic while others may not, which introduces ambiguity and more
            details to remember as a developer</li> <li>Managing middleware execution order across different routes is complex</li></ul> <br/> <span>While guards have some advantages.</span> <br/> <ul><li><strong>Efficient</strong> <span>-</span> <span>each route has a defined slice of guards and only those guards will execute each time the route is
                matched</span></li> <li><strong>Explicit</strong> <span>-</span> <span>since each route explicitly defines its guards, you can see exactly which guards execute for any route
                just by looking at the slice</span></li> <li><strong>Composable</strong> <span>-</span> <span>in order to add a new guard you can just add a guard to the route’s guards slice</span></li> <li><strong>Easy to order</strong> <span>-</span> <span>it’s easy to define the order in which guards execute, you can simply move them around in the route’s
                guards slice</span></li></ul> <span>For more details see the <a>guards page</a>.</span> <!> <span>If you really want middleware-like behavior, you can easily implement it in your own project.</span> <!> <!> <!> <!> <!> <!> <span>Yes you can, as long as Vite supports your framework.</span> <br/> <span>All you need to do is configure your <!> and <!> to render your framework.</span> <br/> <span>You can find a Vue3 example <a target="_blank" href="https://github.com/razshare/frizzante-example-vue3">here</a>.</span>`,1);function X(_,H){C(H,!1),A(),S(_,{title:"Faq",rightSidebar:a=>{$(a,{items:[{shift:0,text:"Faq"},{shift:0,text:"Why doesn’t Frizzante have middleware?"},{shift:1,text:"Middleware Implementation"},{shift:1,text:"Middleware Usage"},{shift:0,text:"Can I use Frizzante with other frontend frameworks?"}]})},footer:a=>{{let o=R(()=>({label:"Contributing",href:y("/contributing")}));V(a,{get previous(){return M(o)}})}},children:(a,o)=>{var i=N(),n=E(i);r(n,{text:"Faq"});var l=e(n,2);r(l,{type:"h3",text:"Why doesn’t Frizzante have middleware?"});var d=e(l,20),z=e(b(d)),u=e(d,2);r(u,{type:"h5",text:"Middleware Implementation"});var c=e(u,4);s(c,{lang:"go",source:`
            package middlewares

            import "main/lib/core/clients"

            type Hook func(client *clients.Client, next func()) // Defines a hook function type which will be used by the middleware.

            type Middleware struct {                            // Defines a structure holding multiple hooks.
                Hooks []Hook                                    // Defines the actual hooks slice.
            }
        `});var p=e(c,2);s(p,{lang:"go",source:`
            package middlewares

            import (
                "main/lib/core/clients"
                "main/lib/core/routes"
            )

            func Apply(middleware *Middleware, routes []routes.Route) {
                for _, route := range routes {                               // For each route...
                    handler := r.Handler                                     // ...saves the route handler for later use.
                    route.Handler = func(client *clients.Client) {           // Assigns a new wrapper route handler.
                        var quit bool                                        // Creates flag used to interrupt the chain.
                        for _, hook := range middleware.Hooks {              // Iterate over hooks.
                            quit = true                                      // Prepares to quit.
                            if hook(client, func() { quit = false }); quit { // Invokes hook and checks if route should quit.
                                return                                       // Quits.
                            }
                        }
                        handler(client)                                      // Invokes the actual route handler.
                    }
                }
            }
        `});var m=e(p,2);j(m,{children:(t,Y)=>{var P=D();w(t,P)}});var h=e(m,2);r(h,{type:"h5",text:"Middleware Usage"});var f=e(h,2);s(f,{lang:"go",source:`
            package main

            import (
                "embed"
                "main/lib/core/clients"
                "main/lib/core/routes"
                "main/lib/core/servers"
                "main/lib/core/view/ssr"
                "main/lib/middlewares"
                "main/lib/routes/fallback"
                "main/lib/routes/todos"
                "main/lib/routes/welcome"
                "os"
            )

            //go:embed app/dist
            var efs embed.FS
            var server = servers.New()

            var middleware = &middlewares.Middleware{
                Hooks: []middleware.Hook{
                    func(client *clients.Client, next func()) {
                        // Hook logic goes here.
                    },
                },
            }

            func main() {
                defer servers.Start(server)
                defer middlewares.Apply(middleware, server.Routes) // Applies middleware to server routes.
                                                                   // Remember that deferred functions are executed in reverse,
                                                                   // so this line will execute before the server starts.
                server.Efs = efs                                   // Sets embedded file system.
                server.Routes = []routes.Route{
                    {Pattern: "GET /", Handler: fallback.View},
                    {Pattern: "GET /welcome", Handler: welcome.View},
                    {Pattern: "GET /todos", Handler: todos.View},
                    {Pattern: "GET /check", Handler: todos.Check},
                    {Pattern: "GET /uncheck", Handler: todos.Uncheck},
                    {Pattern: "GET /add", Handler: todos.Add},
                    {Pattern: "GET /remove", Handler: todos.Remove},
                }
            }
        `});var g=e(f,2);r(g,{type:"h3",text:"Can I use Frizzante with other frontend frameworks?"});var F=e(g,6),v=e(b(F));k(v,{source:"app/app.client.ts"});var q=e(v,2);k(q,{source:"app/app.server.ts"}),T(t=>G(z,"href",t),[()=>y("/guards")]),w(a,i)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),I()}export{X as default};
