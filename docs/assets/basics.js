import{p as fs,f as d,a as m,s as e,e as n,b as l,c as _s,g as _,d as h,t as hs}from"./index-CBalJl4v.js";import{i as ws,L as bs,b as w}from"./navbar.js";import{C as De}from"./caution.js";import{C as r}from"./code.js";import{P as Ss,T as a,R as ks,F as xs}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{N as b}from"./note.js";import{T as Ee}from"./tip.js";var Cs=d("<span>Please <!> such incidents if you can.</span>"),ys=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),Rs=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Ps=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),$s=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ts=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),Vs=d("The session is retrieved using <!>.",1),Hs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function Js(qe,Be){fs(Be,!1),ws(),Ss(qe,{title:"Basics",rightSidebar:p=>{ks(p,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:p=>{{let S=h(()=>({label:"Get Started",href:w("/get_started")})),g=h(()=>({label:"Web Sockets",href:w("/web_sockets")}));xs(p,{get previous(){return _(S)},get next(){return _(g)}})}},children:(p,S)=>{var g=Hs(),k=m(g);a(k,{text:"Basics"});var x=e(k,8),C=e(n(x),3);s(C,{source:"net/http.Server"});var y=e(C,4);s(y,{source:"net/http.Request"});var Qe=e(y,2);s(Qe,{source:"net/http.ResponseWriter"});var R=e(x,8);b(R,{children:(o,v)=>{var t=Cs(),i=e(n(t));{let c=h(()=>w("/issues"));bs(i,{get href(){return _(c)},children:(u,Je)=>{var f=hs("report");l(u,f)},$$slots:{default:!0}})}l(o,t)}});var P=e(R,2);a(P,{text:"Server"});var $=e(P,2),Ye=e(n($));s(Ye,{source:"servers.New()"});var T=e($,2);r(T,{lang:"go",source:`
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `});var V=e(T,2);a(V,{text:"Routes"});var H=e(V,6),Le=e(n(H));s(Le,{source:"server.Routes"});var F=e(H,2);r(F,{lang:"go",source:`
            package main

            import (
                "main/lib/core/servers"
                "main/lib/routes/welcome"
            )

            var server = servers.New()                         // Creates server.

            func main() {
                defer servers.Start(server)                    // Starts server.
                server.Routes = []routes.Route{                // Overwrites routes.
                    {Pattern: "GET /", Handler: welcome.View}, // Adds route.
                }
            }
        `});var U=e(F,2),We=e(n(U));s(We,{source:"welcome.View"});var N=e(U,2);r(N,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var M=e(N,2);a(M,{text:"Path Fields"});var O=e(M,2),Ke=e(n(O));s(Ke,{source:"{}"});var I=e(O,2);r(I,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var G=e(I,2),Xe=e(n(G));s(Xe,{source:"receive.Path()"});var j=e(G,2);r(j,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `});var A=e(j,2);a(A,{text:"Messages"});var z=e(A,2),Ze=e(n(z));s(Ze,{source:"receive.Message()"});var J=e(z,2);r(J,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var D=e(J,2),es=e(n(D));s(es,{source:"send.Message()"});var E=e(D,2);r(E,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var q=e(E,2);a(q,{text:"Headers"});var B=e(q,2),ss=e(n(B));s(ss,{source:"receive.Header()"});var Q=e(B,2);r(Q,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var Y=e(Q,2),ns=e(n(Y));s(ns,{source:"send.Header()"});var L=e(Y,2);r(L,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                accept := receive.Header(client, "Accept")  // Retrieves field "Accept".
                send.Header(client, "Content-Type", accept) // Sends it back.
            }
        `});var W=e(L,2);a(W,{text:"Status"});var K=e(W,2),rs=e(n(K));s(rs,{source:"send.Status()"});var X=e(K,2);r(X,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var Z=e(X,2);De(Z,{children:(o,v)=>{var t=ys();l(o,t)}});var ee=e(Z,2);a(ee,{text:"Order of Operations"});var se=e(ee,6),ne=e(n(se));s(ne,{source:"send.Status()"});var ts=e(ne,2);s(ts,{source:"send.Message()"});var re=e(se,2);r(re,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var te=e(re,2),as=n(te);s(as,{source:"send.Status(client, 404)"});var ae=e(te,2);r(ae,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var oe=e(ae,8);r(oe,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var ie=e(oe,2),os=n(ie);s(os,{source:"status is locked"});var ce=e(ie,2);a(ce,{text:"Queries"});var le=e(ce,2),is=e(n(le));s(is,{source:"receive.Query()"});var de=e(le,2);r(de,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                name := receive.Query(client, "name") // Retrieves field "name".
                send.Message(client, "Hello " + name) // Sends message.
            }
        `});var ve=e(de,2);a(ve,{text:"Forms"});var pe=e(ve,2),ue=e(n(pe));s(ue,{source:"receive.Form()"});var me=e(ue,2);s(me,{source:"POST"});var cs=e(me,2);s(cs,{source:"GET"});var ge=e(pe,2);r(ge,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `});var fe=e(ge,2);r(fe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            type Form struct {                             // Defines a struct in which to
                Name string \`form:"name"\`                  // store the form content.
            }

            func View(client *clients.Client) {
                var form Form
                receive.Form(client, &form)                // Retrieves form.
                send.Message(client, "Hello " + form.Name) // Sends message.
            }
        `});var _e=e(fe,2);Ee(_e,{children:(o,v)=>{var t=Rs(),i=m(t),c=e(n(i));s(c,{source:"json"});var u=e(c,2);s(u,{source:"form"});var Je=e(i,4),f=e(n(Je));s(f,{source:"json"}),l(o,t)}});var he=e(_e,2);Ee(he,{children:(o,v)=>{var t=Ps(),i=e(m(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var u=e(c,4);r(u,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var we=e(he,2);a(we,{text:"Json"});var be=e(we,2),Se=e(n(be));s(Se,{source:"receive.Json()"});var ls=e(Se,2);s(ls,{source:"send.Json()"});var ke=e(be,2);r(ke,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `});var xe=e(ke,2);r(xe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            type GreetingDetails struct {      // Defines a struct in which to
                Name string \`json:"name"\`      // store the json content.
            }

            func View(client *clients.Client) {
                var details GreetingDetails    // Creates a zero value.
                receive.Json(client, &details) // Unmarshals the content into details.
                send.Json(client, details)     // Sends content back as json.
            }
        `});var Ce=e(xe,2);a(Ce,{text:"Cookies"});var ye=e(Ce,2),Re=e(n(ye));s(Re,{source:"receive.Cookie()"});var ds=e(Re,2);s(ds,{source:"send.Cookie()"});var Pe=e(ye,2);r(Pe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                nickname := receive.Cookie(client, "nickname") // Retrieves cookie.
                send.Cookie(client, "nickname", nickname)      // Sends it back.
            }
        `});var $e=e(Pe,2);a($e,{text:"Session Id"});var Te=e($e,2),vs=e(n(Te));s(vs,{source:"receive.SessionId()"});var Ve=e(Te,2);r(Ve,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var He=e(Ve,2);b(He,{children:(o,v)=>{var t=$s(),i=e(m(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var Fe=e(He,2);De(Fe,{children:(o,v)=>{var t=Ts(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Ue=e(Fe,2);a(Ue,{text:"Session"});var Ne=e(Ue,2),ps=e(n(Ne));s(ps,{source:"receive.Session()"});var Me=e(Ne,2);b(Me,{children:(o,v)=>{var t=Vs(),i=e(m(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Oe=e(Me,2);r(Oe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Ie=e(Oe,2);a(Ie,{text:"Redirect"});var Ge=e(Ie,2),us=e(n(Ge));s(us,{source:"send.Redirect()"});var je=e(Ge,2);r(je,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var Ae=e(je,2);a(Ae,{text:"Navigate"});var ze=e(Ae,2),ms=e(n(ze));s(ms,{source:"send.Navigate()"});var gs=e(ze,2);r(gs,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(p,g)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_s()}export{Js as default};
