import{p as fs,f as d,a as m,s as e,h as n,b as l,c as _s,g as Ae,u as ze}from"./index-D0lsslyH.js";import{a as hs,h as ws,b as _}from"./navbar.js";import{C as Je}from"./caution.js";import{C as r}from"./code.js";import{P as bs,T as a,R as Ss,F as xs}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{N as h}from"./note.js";import{T as De}from"./tip.js";var ks=d("<span>Please <a>report</a> such incidents if you can.</span>"),Cs=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),ys=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Rs=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),Ps=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ts=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),Vs=d("The session is retrieved using <!>.",1),Hs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function zs(Ee,p){fs(p,!0),bs(Ee,{title:"Basics",get prefix(){return p.prefix},rightSidebar:u=>{Ss(u,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:u=>{{let w=ze(()=>({label:"Get Started",href:_("/get_started",{prefix:p.prefix})})),g=ze(()=>({label:"Web Sockets",href:_("/web_sockets",{prefix:p.prefix})}));xs(u,{get previous(){return Ae(w)},get next(){return Ae(g)}})}},children:(u,w)=>{var g=Hs(),b=m(g);a(b,{text:"Basics"});var S=e(b,8),x=e(n(S),3);s(x,{source:"net/http.Server"});var k=e(x,4);s(k,{source:"net/http.Request"});var Be=e(k,2);s(Be,{source:"net/http.ResponseWriter"});var C=e(S,8);h(C,{children:(o,v)=>{var t=ks(),i=e(n(t));hs(i,c=>({...c}),[()=>ws(_("/issues",{prefix:p.prefix}))]),l(o,t)}});var y=e(C,2);a(y,{text:"Server"});var R=e(y,2),Qe=e(n(R));s(Qe,{source:"servers.New()"});var P=e(R,2);r(P,{lang:"go",source:`
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `});var T=e(P,2);a(T,{text:"Routes"});var V=e(T,6),Ye=e(n(V));s(Ye,{source:"server.Routes"});var H=e(V,2);r(H,{lang:"go",source:`
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
        `});var F=e(H,2),qe=e(n(F));s(qe,{source:"welcome.View"});var U=e(F,2);r(U,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var N=e(U,2);a(N,{text:"Path Fields"});var M=e(N,2),We=e(n(M));s(We,{source:"{}"});var O=e(M,2);r(O,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var $=e(O,2),Ke=e(n($));s(Ke,{source:"receive.Path()"});var I=e($,2);r(I,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `});var G=e(I,2);a(G,{text:"Messages"});var j=e(G,2),Le=e(n(j));s(Le,{source:"receive.Message()"});var A=e(j,2);r(A,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var z=e(A,2),Xe=e(n(z));s(Xe,{source:"send.Message()"});var J=e(z,2);r(J,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var D=e(J,2);a(D,{text:"Headers"});var E=e(D,2),Ze=e(n(E));s(Ze,{source:"receive.Header()"});var B=e(E,2);r(B,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var Q=e(B,2),es=e(n(Q));s(es,{source:"send.Header()"});var Y=e(Q,2);r(Y,{lang:"go",source:`
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
        `});var q=e(Y,2);a(q,{text:"Status"});var W=e(q,2),ss=e(n(W));s(ss,{source:"send.Status()"});var K=e(W,2);r(K,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var L=e(K,2);Je(L,{children:(o,v)=>{var t=Cs();l(o,t)}});var X=e(L,2);a(X,{text:"Order of Operations"});var Z=e(X,6),ee=e(n(Z));s(ee,{source:"send.Status()"});var ns=e(ee,2);s(ns,{source:"send.Message()"});var se=e(Z,2);r(se,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var ne=e(se,2),rs=n(ne);s(rs,{source:"send.Status(client, 404)"});var re=e(ne,2);r(re,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var te=e(re,8);r(te,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var ae=e(te,2),ts=n(ae);s(ts,{source:"status is locked"});var oe=e(ae,2);a(oe,{text:"Queries"});var ie=e(oe,2),as=e(n(ie));s(as,{source:"receive.Query()"});var ce=e(ie,2);r(ce,{lang:"go",source:`
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
        `});var le=e(ce,2);a(le,{text:"Forms"});var de=e(le,2),ve=e(n(de));s(ve,{source:"receive.Form()"});var pe=e(ve,2);s(pe,{source:"POST"});var os=e(pe,2);s(os,{source:"GET"});var ue=e(de,2);r(ue,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `});var me=e(ue,2);r(me,{lang:"go",source:`
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
        `});var ge=e(me,2);De(ge,{children:(o,v)=>{var t=ys(),i=m(t),c=e(n(i));s(c,{source:"json"});var f=e(c,2);s(f,{source:"form"});var ms=e(i,4),gs=e(n(ms));s(gs,{source:"json"}),l(o,t)}});var fe=e(ge,2);De(fe,{children:(o,v)=>{var t=Rs(),i=e(m(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var f=e(c,4);r(f,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var _e=e(fe,2);a(_e,{text:"Json"});var he=e(_e,2),we=e(n(he));s(we,{source:"receive.Json()"});var is=e(we,2);s(is,{source:"send.Json()"});var be=e(he,2);r(be,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `});var Se=e(be,2);r(Se,{lang:"go",source:`
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
        `});var xe=e(Se,2);a(xe,{text:"Cookies"});var ke=e(xe,2),Ce=e(n(ke));s(Ce,{source:"receive.Cookie()"});var cs=e(Ce,2);s(cs,{source:"send.Cookie()"});var ye=e(ke,2);r(ye,{lang:"go",source:`
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
        `});var Re=e(ye,2);a(Re,{text:"Session Id"});var Pe=e(Re,2),ls=e(n(Pe));s(ls,{source:"receive.SessionId()"});var Te=e(Pe,2);r(Te,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var Ve=e(Te,2);h(Ve,{children:(o,v)=>{var t=Ps(),i=e(m(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var He=e(Ve,2);Je(He,{children:(o,v)=>{var t=Ts(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Fe=e(He,2);a(Fe,{text:"Session"});var Ue=e(Fe,2),ds=e(n(Ue));s(ds,{source:"receive.Session()"});var Ne=e(Ue,2);h(Ne,{children:(o,v)=>{var t=Vs(),i=e(m(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Me=e(Ne,2);r(Me,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Oe=e(Me,2);a(Oe,{text:"Redirect"});var $e=e(Oe,2),vs=e(n($e));s(vs,{source:"send.Redirect()"});var Ie=e($e,2);r(Ie,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var Ge=e(Ie,2);a(Ge,{text:"Navigate"});var je=e(Ge,2),ps=e(n(je));s(ps,{source:"send.Navigate()"});var us=e(je,2);r(us,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(u,g)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_s()}export{zs as default};
