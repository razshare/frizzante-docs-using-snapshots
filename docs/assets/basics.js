import{p as fs,f as d,a as g,s as e,h as n,b as l,c as _s,g as h,u as w,t as hs}from"./index-CQxZXpNM.js";import{C as Ee}from"./caution.js";import{C as r}from"./code.js";import{P as ws,T as a,R as bs,F as Ss}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{L as ks,b}from"./navbar.js";import{N as S}from"./note.js";import{T as Be}from"./tip.js";var xs=d("<span>Please <!> such incidents if you can.</span>"),Cs=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),ys=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Rs=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),Ps=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ts=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),Vs=d("The session is retrieved using <!>.",1),Hs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function zs(Qe,p){fs(p,!0),ws(Qe,{title:"Basics",get dev(){return p.dev},rightSidebar:u=>{bs(u,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:u=>{{let k=w(()=>({label:"Get Started",href:b("/get_started",{dev:p.dev})})),f=w(()=>({label:"Web Sockets",href:b("/web_sockets",{dev:p.dev})}));Ss(u,{get previous(){return h(k)},get next(){return h(f)}})}},children:(u,k)=>{var f=Hs(),x=g(f);a(x,{text:"Basics"});var C=e(x,8),y=e(n(C),3);s(y,{source:"net/http.Server"});var R=e(y,4);s(R,{source:"net/http.Request"});var Ye=e(R,2);s(Ye,{source:"net/http.ResponseWriter"});var P=e(C,8);S(P,{children:(o,v)=>{var t=xs(),i=e(n(t));{let c=w(()=>b("/issues",{dev:p.dev}));ks(i,{get href(){return h(c)},children:(m,De)=>{var _=hs("report");l(m,_)},$$slots:{default:!0}})}l(o,t)}});var T=e(P,2);a(T,{text:"Server"});var V=e(T,2),qe=e(n(V));s(qe,{source:"servers.New()"});var H=e(V,2);r(H,{lang:"go",source:`
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `});var F=e(H,2);a(F,{text:"Routes"});var $=e(F,6),Le=e(n($));s(Le,{source:"server.Routes"});var U=e($,2);r(U,{lang:"go",source:`
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
        `});var N=e(U,2),We=e(n(N));s(We,{source:"welcome.View"});var M=e(N,2);r(M,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var O=e(M,2);a(O,{text:"Path Fields"});var I=e(O,2),Ke=e(n(I));s(Ke,{source:"{}"});var G=e(I,2);r(G,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var j=e(G,2),Xe=e(n(j));s(Xe,{source:"receive.Path()"});var A=e(j,2);r(A,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `});var z=e(A,2);a(z,{text:"Messages"});var J=e(z,2),Ze=e(n(J));s(Ze,{source:"receive.Message()"});var D=e(J,2);r(D,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var E=e(D,2),es=e(n(E));s(es,{source:"send.Message()"});var B=e(E,2);r(B,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var Q=e(B,2);a(Q,{text:"Headers"});var Y=e(Q,2),ss=e(n(Y));s(ss,{source:"receive.Header()"});var q=e(Y,2);r(q,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var L=e(q,2),ns=e(n(L));s(ns,{source:"send.Header()"});var W=e(L,2);r(W,{lang:"go",source:`
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
        `});var K=e(W,2);a(K,{text:"Status"});var X=e(K,2),rs=e(n(X));s(rs,{source:"send.Status()"});var Z=e(X,2);r(Z,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var ee=e(Z,2);Ee(ee,{children:(o,v)=>{var t=Cs();l(o,t)}});var se=e(ee,2);a(se,{text:"Order of Operations"});var ne=e(se,6),re=e(n(ne));s(re,{source:"send.Status()"});var ts=e(re,2);s(ts,{source:"send.Message()"});var te=e(ne,2);r(te,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var ae=e(te,2),as=n(ae);s(as,{source:"send.Status(client, 404)"});var oe=e(ae,2);r(oe,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var ie=e(oe,8);r(ie,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var ce=e(ie,2),os=n(ce);s(os,{source:"status is locked"});var le=e(ce,2);a(le,{text:"Queries"});var de=e(le,2),is=e(n(de));s(is,{source:"receive.Query()"});var ve=e(de,2);r(ve,{lang:"go",source:`
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
        `});var pe=e(ve,2);a(pe,{text:"Forms"});var ue=e(pe,2),me=e(n(ue));s(me,{source:"receive.Form()"});var ge=e(me,2);s(ge,{source:"POST"});var cs=e(ge,2);s(cs,{source:"GET"});var fe=e(ue,2);r(fe,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `});var _e=e(fe,2);r(_e,{lang:"go",source:`
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
        `});var he=e(_e,2);Be(he,{children:(o,v)=>{var t=ys(),i=g(t),c=e(n(i));s(c,{source:"json"});var m=e(c,2);s(m,{source:"form"});var De=e(i,4),_=e(n(De));s(_,{source:"json"}),l(o,t)}});var we=e(he,2);Be(we,{children:(o,v)=>{var t=Rs(),i=e(g(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var m=e(c,4);r(m,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var be=e(we,2);a(be,{text:"Json"});var Se=e(be,2),ke=e(n(Se));s(ke,{source:"receive.Json()"});var ls=e(ke,2);s(ls,{source:"send.Json()"});var xe=e(Se,2);r(xe,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `});var Ce=e(xe,2);r(Ce,{lang:"go",source:`
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
        `});var ye=e(Ce,2);a(ye,{text:"Cookies"});var Re=e(ye,2),Pe=e(n(Re));s(Pe,{source:"receive.Cookie()"});var ds=e(Pe,2);s(ds,{source:"send.Cookie()"});var Te=e(Re,2);r(Te,{lang:"go",source:`
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
        `});var Ve=e(Te,2);a(Ve,{text:"Session Id"});var He=e(Ve,2),vs=e(n(He));s(vs,{source:"receive.SessionId()"});var Fe=e(He,2);r(Fe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var $e=e(Fe,2);S($e,{children:(o,v)=>{var t=Ps(),i=e(g(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var Ue=e($e,2);Ee(Ue,{children:(o,v)=>{var t=Ts(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Ne=e(Ue,2);a(Ne,{text:"Session"});var Me=e(Ne,2),ps=e(n(Me));s(ps,{source:"receive.Session()"});var Oe=e(Me,2);S(Oe,{children:(o,v)=>{var t=Vs(),i=e(g(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Ie=e(Oe,2);r(Ie,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Ge=e(Ie,2);a(Ge,{text:"Redirect"});var je=e(Ge,2),us=e(n(je));s(us,{source:"send.Redirect()"});var Ae=e(je,2);r(Ae,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var ze=e(Ae,2);a(ze,{text:"Navigate"});var Je=e(ze,2),ms=e(n(Je));s(ms,{source:"send.Navigate()"});var gs=e(Je,2);r(gs,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(u,f)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_s()}export{zs as default};
