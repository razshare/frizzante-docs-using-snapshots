import{f as d,a as m,s as e,e as n,b as l,t as vs}from"./index-elLOZMZZ.js";import{L as ps}from"./navbar-DCDF4cA1.js";import{C as Ge}from"./caution-8lxoGJ_Q.js";import{C as r}from"./code-CHySw2ew.js";import{P as ms,T as a,R as us,F as gs}from"./right_sidebar-DSOKDO70.js";import{I as s}from"./inline_code-w6SJIKYc.js";import{N as f}from"./note-hqMI2WFK.js";import{T as je}from"./tip-TTQ2jHB6.js";var fs=d("<span>Please <!> such incidents if you can.</span>"),_s=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),hs=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),ws=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),bs=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ss=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),ks=d("The session is retrieved using <!>.",1),xs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function Ms(Ae){ms(Ae,{title:"Basics",rightSidebar:p=>{us(p,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:p=>{gs(p,{previous:{label:"Get Started",href:"/get_started"},next:{label:"Web Sockets",href:"/web_sockets"}})},children:(p,Rs)=>{var _=xs(),h=m(_);a(h,{text:"Basics"});var w=e(h,8),b=e(n(w),3);s(b,{source:"net/http.Server"});var S=e(b,4);s(S,{source:"net/http.Request"});var ze=e(S,2);s(ze,{source:"net/http.ResponseWriter"});var k=e(w,8);f(k,{children:(o,v)=>{var t=fs(),i=e(n(t));ps(i,{href:"/issues",children:(c,u)=>{var g=vs("report");l(c,g)},$$slots:{default:!0}}),l(o,t)}});var x=e(k,2);a(x,{text:"Server"});var C=e(x,2),Je=e(n(C));s(Je,{source:"servers.New()"});var y=e(C,2);r(y,{lang:"go",source:`
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `});var R=e(y,2);a(R,{text:"Routes"});var P=e(R,6),De=e(n(P));s(De,{source:"server.Routes"});var T=e(P,2);r(T,{lang:"go",source:`
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
        `});var V=e(T,2),Ee=e(n(V));s(Ee,{source:"welcome.View"});var $=e(V,2);r($,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var H=e($,2);a(H,{text:"Path Fields"});var F=e(H,2),Be=e(n(F));s(Be,{source:"{}"});var U=e(F,2);r(U,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var N=e(U,2),Qe=e(n(N));s(Qe,{source:"receive.Path()"});var M=e(N,2);r(M,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `});var O=e(M,2);a(O,{text:"Messages"});var I=e(O,2),Ye=e(n(I));s(Ye,{source:"receive.Message()"});var G=e(I,2);r(G,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var j=e(G,2),qe=e(n(j));s(qe,{source:"send.Message()"});var A=e(j,2);r(A,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var z=e(A,2);a(z,{text:"Headers"});var J=e(z,2),Le=e(n(J));s(Le,{source:"receive.Header()"});var D=e(J,2);r(D,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var E=e(D,2),We=e(n(E));s(We,{source:"send.Header()"});var B=e(E,2);r(B,{lang:"go",source:`
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
        `});var Q=e(B,2);a(Q,{text:"Status"});var Y=e(Q,2),Ke=e(n(Y));s(Ke,{source:"send.Status()"});var q=e(Y,2);r(q,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var L=e(q,2);Ge(L,{children:(o,v)=>{var t=_s();l(o,t)}});var W=e(L,2);a(W,{text:"Order of Operations"});var K=e(W,6),X=e(n(K));s(X,{source:"send.Status()"});var Xe=e(X,2);s(Xe,{source:"send.Message()"});var Z=e(K,2);r(Z,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var ee=e(Z,2),Ze=n(ee);s(Ze,{source:"send.Status(client, 404)"});var se=e(ee,2);r(se,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var ne=e(se,8);r(ne,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var re=e(ne,2),es=n(re);s(es,{source:"status is locked"});var te=e(re,2);a(te,{text:"Queries"});var ae=e(te,2),ss=e(n(ae));s(ss,{source:"receive.Query()"});var oe=e(ae,2);r(oe,{lang:"go",source:`
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
        `});var ie=e(oe,2);a(ie,{text:"Forms"});var ce=e(ie,2),le=e(n(ce));s(le,{source:"receive.Form()"});var de=e(le,2);s(de,{source:"POST"});var ns=e(de,2);s(ns,{source:"GET"});var ve=e(ce,2);r(ve,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `});var pe=e(ve,2);r(pe,{lang:"go",source:`
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
        `});var me=e(pe,2);je(me,{children:(o,v)=>{var t=hs(),i=m(t),c=e(n(i));s(c,{source:"json"});var u=e(c,2);s(u,{source:"form"});var g=e(i,4),ds=e(n(g));s(ds,{source:"json"}),l(o,t)}});var ue=e(me,2);je(ue,{children:(o,v)=>{var t=ws(),i=e(m(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var u=e(c,4);r(u,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var ge=e(ue,2);a(ge,{text:"Json"});var fe=e(ge,2),_e=e(n(fe));s(_e,{source:"receive.Json()"});var rs=e(_e,2);s(rs,{source:"send.Json()"});var he=e(fe,2);r(he,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `});var we=e(he,2);r(we,{lang:"go",source:`
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
        `});var be=e(we,2);a(be,{text:"Cookies"});var Se=e(be,2),ke=e(n(Se));s(ke,{source:"receive.Cookie()"});var ts=e(ke,2);s(ts,{source:"send.Cookie()"});var xe=e(Se,2);r(xe,{lang:"go",source:`
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
        `});var Ce=e(xe,2);a(Ce,{text:"Session Id"});var ye=e(Ce,2),as=e(n(ye));s(as,{source:"receive.SessionId()"});var Re=e(ye,2);r(Re,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var Pe=e(Re,2);f(Pe,{children:(o,v)=>{var t=bs(),i=e(m(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var Te=e(Pe,2);Ge(Te,{children:(o,v)=>{var t=Ss(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Ve=e(Te,2);a(Ve,{text:"Session"});var $e=e(Ve,2),os=e(n($e));s(os,{source:"receive.Session()"});var He=e($e,2);f(He,{children:(o,v)=>{var t=ks(),i=e(m(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Fe=e(He,2);r(Fe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Ue=e(Fe,2);a(Ue,{text:"Redirect"});var Ne=e(Ue,2),is=e(n(Ne));s(is,{source:"send.Redirect()"});var Me=e(Ne,2);r(Me,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var Oe=e(Me,2);a(Oe,{text:"Navigate"});var Ie=e(Oe,2),cs=e(n(Ie));s(cs,{source:"send.Navigate()"});var ls=e(Ie,2);r(ls,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(p,_)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{Ms as default};
