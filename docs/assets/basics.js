import{p as ps,f as d,a as m,s as e,e as n,b as l,c as us,t as ms,g as gs,d as fs}from"./index-t6nqv6G7.js";import{i as _s,L as hs,r as ws}from"./navbar.js";import{C as je}from"./caution.js";import{C as r}from"./code.js";import{P as bs,T as a,R as Ss,F as ks}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{N as f}from"./note.js";import{T as Ae}from"./tip.js";var xs=d("<span>Please <!> such incidents if you can.</span>"),Cs=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),ys=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Rs=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),Ps=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),$s=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),Ts=d("The session is retrieved using <!>.",1),Vs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function Js(ze,Je){ps(Je,!1),_s(),bs(ze,{title:"Basics",rightSidebar:p=>{Ss(p,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:p=>{ks(p,{previous:{label:"Get Started",href:"/get_started"},next:{label:"Web Sockets",href:"/web_sockets"}})},children:(p,Us)=>{var _=Vs(),h=m(_);a(h,{text:"Basics"});var w=e(h,8),b=e(n(w),3);s(b,{source:"net/http.Server"});var S=e(b,4);s(S,{source:"net/http.Request"});var De=e(S,2);s(De,{source:"net/http.ResponseWriter"});var k=e(w,8);f(k,{children:(o,v)=>{var t=xs(),i=e(n(t));{let c=fs(()=>ws("/issues"));hs(i,{get href(){return gs(c)},children:(u,Ge)=>{var g=ms("report");l(u,g)},$$slots:{default:!0}})}l(o,t)}});var x=e(k,2);a(x,{text:"Server"});var C=e(x,2),Ee=e(n(C));s(Ee,{source:"servers.New()"});var y=e(C,2);r(y,{lang:"go",source:`
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `});var R=e(y,2);a(R,{text:"Routes"});var P=e(R,6),qe=e(n(P));s(qe,{source:"server.Routes"});var $=e(P,2);r($,{lang:"go",source:`
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
        `});var T=e($,2),Be=e(n(T));s(Be,{source:"welcome.View"});var V=e(T,2);r(V,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var H=e(V,2);a(H,{text:"Path Fields"});var F=e(H,2),Le=e(n(F));s(Le,{source:"{}"});var U=e(F,2);r(U,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var N=e(U,2),Qe=e(n(N));s(Qe,{source:"receive.Path()"});var M=e(N,2);r(M,{lang:"go",source:`
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
        `});var j=e(G,2),We=e(n(j));s(We,{source:"send.Message()"});var A=e(j,2);r(A,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var z=e(A,2);a(z,{text:"Headers"});var J=e(z,2),Ke=e(n(J));s(Ke,{source:"receive.Header()"});var D=e(J,2);r(D,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var E=e(D,2),Xe=e(n(E));s(Xe,{source:"send.Header()"});var q=e(E,2);r(q,{lang:"go",source:`
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
        `});var B=e(q,2);a(B,{text:"Status"});var L=e(B,2),Ze=e(n(L));s(Ze,{source:"send.Status()"});var Q=e(L,2);r(Q,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var Y=e(Q,2);je(Y,{children:(o,v)=>{var t=Cs();l(o,t)}});var W=e(Y,2);a(W,{text:"Order of Operations"});var K=e(W,6),X=e(n(K));s(X,{source:"send.Status()"});var es=e(X,2);s(es,{source:"send.Message()"});var Z=e(K,2);r(Z,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var ee=e(Z,2),ss=n(ee);s(ss,{source:"send.Status(client, 404)"});var se=e(ee,2);r(se,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var ne=e(se,8);r(ne,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var re=e(ne,2),ns=n(re);s(ns,{source:"status is locked"});var te=e(re,2);a(te,{text:"Queries"});var ae=e(te,2),rs=e(n(ae));s(rs,{source:"receive.Query()"});var oe=e(ae,2);r(oe,{lang:"go",source:`
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
        `});var ie=e(oe,2);a(ie,{text:"Forms"});var ce=e(ie,2),le=e(n(ce));s(le,{source:"receive.Form()"});var de=e(le,2);s(de,{source:"POST"});var ts=e(de,2);s(ts,{source:"GET"});var ve=e(ce,2);r(ve,{lang:"go",source:`
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
        `});var ue=e(pe,2);Ae(ue,{children:(o,v)=>{var t=ys(),i=m(t),c=e(n(i));s(c,{source:"json"});var u=e(c,2);s(u,{source:"form"});var Ge=e(i,4),g=e(n(Ge));s(g,{source:"json"}),l(o,t)}});var me=e(ue,2);Ae(me,{children:(o,v)=>{var t=Rs(),i=e(m(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var u=e(c,4);r(u,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var ge=e(me,2);a(ge,{text:"Json"});var fe=e(ge,2),_e=e(n(fe));s(_e,{source:"receive.Json()"});var as=e(_e,2);s(as,{source:"send.Json()"});var he=e(fe,2);r(he,{lang:"go",source:`
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
        `});var be=e(we,2);a(be,{text:"Cookies"});var Se=e(be,2),ke=e(n(Se));s(ke,{source:"receive.Cookie()"});var os=e(ke,2);s(os,{source:"send.Cookie()"});var xe=e(Se,2);r(xe,{lang:"go",source:`
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
        `});var Ce=e(xe,2);a(Ce,{text:"Session Id"});var ye=e(Ce,2),is=e(n(ye));s(is,{source:"receive.SessionId()"});var Re=e(ye,2);r(Re,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var Pe=e(Re,2);f(Pe,{children:(o,v)=>{var t=Ps(),i=e(m(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var $e=e(Pe,2);je($e,{children:(o,v)=>{var t=$s(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Te=e($e,2);a(Te,{text:"Session"});var Ve=e(Te,2),cs=e(n(Ve));s(cs,{source:"receive.Session()"});var He=e(Ve,2);f(He,{children:(o,v)=>{var t=Ts(),i=e(m(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Fe=e(He,2);r(Fe,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Ue=e(Fe,2);a(Ue,{text:"Redirect"});var Ne=e(Ue,2),ls=e(n(Ne));s(ls,{source:"send.Redirect()"});var Me=e(Ne,2);r(Me,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var Oe=e(Me,2);a(Oe,{text:"Navigate"});var Ie=e(Oe,2),ds=e(n(Ie));s(ds,{source:"send.Navigate()"});var vs=e(Ie,2);r(vs,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(p,_)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),us()}export{Js as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvdmlld3MvYmFzaWNzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAgIGltcG9ydCBDYXV0aW9uIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY2F1dGlvbi5zdmVsdGVcIlxuICAgIGltcG9ydCBDb2RlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY29kZS5zdmVsdGVcIlxuICAgIGltcG9ydCBGb290ZXIgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgSW5saW5lQ29kZSBmcm9tIFwiJGxpYi9jb21wb25lbnRzL2lubGluZV9jb2RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IExpbmsgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9saW5rcy9saW5rLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IE5vdGUgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9ub3RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFBhZ2UgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9wYWdlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFJpZ2h0U2lkZWJhciBmcm9tIFwiJGxpYi9jb21wb25lbnRzL3JpZ2h0X3NpZGViYXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgVGlwIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGlwLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFRpdGxlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGl0bGUuc3ZlbHRlXCJcbiAgICBpbXBvcnQgeyByZWJhc2VMaW5rIH0gZnJvbSBcIiRsaWIvc2NyaXB0cy9yZWJhc2VfbGlua1wiXG48L3NjcmlwdD5cblxuPFBhZ2UgdGl0bGU9XCJCYXNpY3NcIj5cbiAgICA8VGl0bGUgdGV4dD1cIkJhc2ljc1wiIC8+XG4gICAgPHNwYW4+IEFsbCBpbnRlcm5hbHMgb2YgdGhlIGZyYW1ld29yayBhcmUgZXhwb3NlZCBpbnRlbnRpb25hbGx5LiA8L3NwYW4+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIEZvciBleGFtcGxlIHRoZSBmcml6emFudGUgPGEgaHJlZj1cIiNzZXJ2ZXJcIj5zZXJ2ZXI8L2E+IGlzIGEgd3JhcHBlciBhcm91bmRcbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwibmV0L2h0dHAuU2VydmVyXCIgLz4gYW5kIGEgZnJpenphbnRlIDxhIGhyZWY9XCIjbWVzc2FnZXNcIj5jbGllbnQ8L2E+IGlzIGEgd3JhcHBlciBhcm91bmRcbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwibmV0L2h0dHAuUmVxdWVzdFwiIC8+IGFuZCA8SW5saW5lQ29kZSBzb3VyY2U9XCJuZXQvaHR0cC5SZXNwb25zZVdyaXRlclwiIC8+LlxuICAgIDwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgWW91IGNhbiBpbnRlcmFjdCB3aXRoIHRoZXNlIGludGVybmFscyBhbmQgeW91IGFyZSwgaW4gZmFjdCwgaW50ZW5kZWQgdG8gZG8gc28gd2hlbmV2ZXIgdGhlIGZyYW1ld29yayBpc1xuICAgICAgICBpbnN1ZmZpY2llbnQsIHlvdSdyZSBoaXR0aW5nIGEgcGVyZm9ybWFuY2Ugd2FsbCwgYSBidWcgYW5kIHNvIG9uLlxuICAgIDwvc3Bhbj5cbiAgICA8Tm90ZT5cbiAgICAgICAgPHNwYW4+UGxlYXNlIDxMaW5rIGhyZWY9e3JlYmFzZUxpbmsoXCIvaXNzdWVzXCIpfT5yZXBvcnQ8L0xpbms+IHN1Y2ggaW5jaWRlbnRzIGlmIHlvdSBjYW4uPC9zcGFuPlxuICAgIDwvTm90ZT5cbiAgICA8VGl0bGUgdGV4dD1cIlNlcnZlclwiIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIENyZWF0ZSBhIG5ldyBzZXJ2ZXIgd2l0aCA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZXJ2ZXJzLk5ldygpXCIgLz4sIHRoZW4gZm9sbG93dXAgd2l0aCBzZXJ2ZXJzLlN0YXJ0KCkgaW4gb3JkZXIgdG9cbiAgICAgICAgc3RhcnQgYSBzZXJ2ZXIuXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSBtYWluXG5cbiAgICAgICAgICAgIGltcG9ydCBcIm1haW4vbGliL2NvcmUvc2VydmVyc1wiXG5cbiAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBzZXJ2ZXJzLk5ldygpICAgICAgLy8gQ3JlYXRlcyBzZXJ2ZXIuXG5cbiAgICAgICAgICAgIGZ1bmMgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBkZWZlciBzZXJ2ZXJzLlN0YXJ0KHNlcnZlcikgLy8gU3RhcnRzIHNlcnZlci5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiUm91dGVzXCIgLz5cbiAgICA8c3Bhbj5FYWNoIHNlcnZlciBleHBvc2VzIGEgc2xpY2Ugb2YgUm91dGVzIHdoaWNoIHlvdSBjYW4gZnJlZWx5IG1vZGlmeS48L3NwYW4+XG4gICAgPGJyIC8+XG4gICAgPHNwYW4+WW91IGNhbiBhZGQgYSBuZXcgcm91dGUgYnkgYXBwZW5kaW5nIHRvIG9yIG92ZXJ3cml0aW5nIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlcnZlci5Sb3V0ZXNcIiAvPi48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIG1haW5cblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VydmVyc1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9yb3V0ZXMvd2VsY29tZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBzZXJ2ZXJzLk5ldygpICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZXMgc2VydmVyLlxuXG4gICAgICAgICAgICBmdW5jIG1haW4oKSB7XG4gICAgICAgICAgICAgICAgZGVmZXIgc2VydmVycy5TdGFydChzZXJ2ZXIpICAgICAgICAgICAgICAgICAgICAvLyBTdGFydHMgc2VydmVyLlxuICAgICAgICAgICAgICAgIHNlcnZlci5Sb3V0ZXMgPSBbXXJvdXRlcy5Sb3V0ZXsgICAgICAgICAgICAgICAgLy8gT3ZlcndyaXRlcyByb3V0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHtQYXR0ZXJuOiBcIkdFVCAvXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld30sIC8vIEFkZHMgcm91dGUuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+V2hlcmUgPElubGluZUNvZGUgc291cmNlPVwid2VsY29tZS5WaWV3XCIgLz4gaXMgYSBmdW5jdGlvbiBwb2ludGVyLjwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge31cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiUGF0aCBGaWVsZHNcIiAvPlxuICAgIDxzcGFuPlJvdXRlIHBhdHRlcm5zIGNhbiBkZWZpbmUgZHluYW1pYyBwYXRoIGZpZWxkcyB1c2luZyA8SW5saW5lQ29kZSBzb3VyY2U9e1wie31cIn0gLz4gc3ludGF4Ljwvc3Bhbj5cbiAgICA8Q29kZSBsYW5nPVwiZ29cIiBzb3VyY2U9e2Byb3V0ZXMuUm91dGV7UGF0dGVybjogXCJHRVQgL3tuYW1lfVwiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9YH0gLz5cbiAgICA8c3Bhbj5QYXRoIGZpZWxkcyBjYW4gdGhlbiBiZSByZXRyaWV2ZWQgd2l0aCA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlBhdGgoKVwiIC8+Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgXyA9IHJlY2VpdmUuUGF0aChjbGllbnQsIFwibmFtZVwiKSAvLyBSZXRyaWV2ZXMgZmllbGQgXCJuYW1lXCIuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIk1lc3NhZ2VzXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5NZXNzYWdlKClcIiAvPiB0byByZXRyaWV2ZSBtZXNzYWdlcyBzZW50IGJ5IHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBfID0gcmVjZWl2ZS5NZXNzYWdlKGNsaWVudCkgLy8gUmV0cmlldmVzIG1lc3NhZ2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5NZXNzYWdlKClcIiAvPiB0byBzZW5kIGEgbWVzc2FnZSB0byB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsby5cIikgLy8gU2VuZHMgbWVzc2FnZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiSGVhZGVyc1wiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuSGVhZGVyKClcIiAvPiB0byByZXRyaWV2ZSBoZWFkZXIgZmllbGRzIHNlbnQgYnkgdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIF8gPSByZWNlaXZlLkhlYWRlcihjbGllbnQsIFwiQWNjZXB0XCIpIC8vIFJldHJpZXZlcyBmaWVsZCBcIkFjY2VwdFwiLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuSGVhZGVyKClcIiAvPiB0byBzZW5kIGhlYWRlciBmaWVsZHMgdG8gdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBhY2NlcHQgOj0gcmVjZWl2ZS5IZWFkZXIoY2xpZW50LCBcIkFjY2VwdFwiKSAgLy8gUmV0cmlldmVzIGZpZWxkIFwiQWNjZXB0XCIuXG4gICAgICAgICAgICAgICAgc2VuZC5IZWFkZXIoY2xpZW50LCBcIkNvbnRlbnQtVHlwZVwiLCBhY2NlcHQpIC8vIFNlbmRzIGl0IGJhY2suXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIlN0YXR1c1wiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuU3RhdHVzKClcIiAvPiB0byBzZW5kIHRoZSBzdGF0dXMgb2YgdGhlIHJlc3BvbnNlIHRvIHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBzZW5kLlN0YXR1cyhjbGllbnQsIDQwNCkgICAgICAgICAgIC8vIFNlbmRzIHN0YXR1cyA0MDQuXG4gICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJOb3QgZm91bmQuXCIpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8Q2F1dGlvbj5cbiAgICAgICAgPHNwYW4+U2VuZGluZyBoZWFkZXIgZmllbGRzIG9yIHN0YXR1cyBhZnRlciBzZW5kaW5nIG91dCBjb250ZW50IGlzIG5vdCBhbGxvd2VkLjwvc3Bhbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuPlJlYWQgPGEgaHJlZj1cIiNvcmRlci1vZi1vcHJhdGlvbnNcIj5iZWxvdzwvYT4uPC9zcGFuPlxuICAgIDwvQ2F1dGlvbj5cbiAgICA8VGl0bGUgdGV4dD1cIk9yZGVyIG9mIE9wZXJhdGlvbnNcIiAvPlxuICAgIDxzcGFuPk9yZGVyIG9mIG9wZXJhdGlvbnMgbWF0dGVycyB3aGVuIHNlbmRpbmcgZGF0YSB0byB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgRm9yIGV4YW1wbGUsIHNlbmRpbmcgdGhlIHN0YXR1cyBjb2RlIHdpdGggPElubGluZUNvZGUgc291cmNlPVwic2VuZC5TdGF0dXMoKVwiIC8+XG4gICAgICAgIGFmdGVyIHlvdeKAmXZlIGFscmVhZHkgc2VudCBjb250ZW50IHdpdGggPElubGluZUNvZGUgc291cmNlPVwic2VuZC5NZXNzYWdlKClcIiAvPlxuICAgICAgICBpcyBub3QgYWxsb3dlZC5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiSGVsbG8uXCIpIC8vIFNlbmRzIG1lc3NhZ2UgKFN1Y2NlZWRzKS5cbiAgICAgICAgICAgICAgICBzZW5kLlN0YXR1cyhjbGllbnQsIDQwNCkgICAgICAgLy8gU2VuZHMgc3RhdHVzIChGYWlscykuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5TdGF0dXMoY2xpZW50LCA0MDQpXCIgLz4gd2lsbCBmYWlsIGFuZCB0aGUgY2xpZW50IHdpbGwgcmVjZWl2ZSBzdGF0dXMgMjAwIGluc3RlYWQgb2YgNDA0LlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiaHR0cFwiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgSFRUUC8xLjEgMjAwIE9LXG4gICAgICAgICAgICBEYXRlOiBTdW4sIDI1IE1heSAyMDI1IDAyOjAwOjM3IEdNVFxuICAgICAgICAgICAgQ29udGVudC1MZW5ndGg6IDZcbiAgICAgICAgICAgIENvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFxuXG4gICAgICAgICAgICBIZWxsby5cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPlRoZSBmYWlsdXJlIGlzIGxvZ2dlZCB0byB0aGUgc2VydmVy4oCZcyBlcnJvciBsb2dnZXIuPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxzcGFuPlxuICAgICAgICBBc3N1bWluZyB5b3XigJlyZSB1c2luZyB0aGUgZGVmYXVsdCBlcnJvciBsb2dnZXIsIHlvdeKAmWxsIHNlZSBhbiBlcnJvciBvZiBzb3J0cyBpbiB5b3VyIDxzdHJvbmc+Y29uc29sZTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwibG9nXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBsaXN0ZW5pbmcgZm9yIHJlcXVlc3RzIGF0IGh0dHA6Ly8xMjcuMC4wLjE6ODA4MFxuICAgICAgICAgICAgc3RhdHVzIGlzIGxvY2tlZFxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cInN0YXR1cyBpcyBsb2NrZWRcIiAvPiwgbWVhbmluZyB0aGUgc3RhdHVzIGNvZGUgaGFzIGFscmVhZHkgYmVlbiBzZW50IHRvIHRoZSBjbGllbnQgYW5kXG4gICAgICAgIHRoZXJl4oCZcyBub3RoaW5nIHlvdSBjYW4gZG8gYWJvdXQgaXQuXG4gICAgPC9zcGFuPlxuICAgIDxUaXRsZSB0ZXh0PVwiUXVlcmllc1wiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuUXVlcnkoKVwiIC8+IHRvIHJldHJpZXZlIHF1ZXJ5IGZpZWxkcy48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBuYW1lIDo9IHJlY2VpdmUuUXVlcnkoY2xpZW50LCBcIm5hbWVcIikgLy8gUmV0cmlldmVzIGZpZWxkIFwibmFtZVwiLlxuICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiSGVsbG8gXCIgKyBuYW1lKSAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJGb3Jtc1wiIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIFVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLkZvcm0oKVwiIC8+IHRvIHBhcnNlIGluY29taW5nIGNvbnRlbnQgYXMgbXVsdGlwYXJ0IGZvcm0gb3IgdXJsIGVuY29kZWQgZm9ybSB3aGVuIHVzaW5nXG4gICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cIlBPU1RcIiAvPiBhbmQgPElubGluZUNvZGUgc291cmNlPVwiR0VUXCIgLz4gaHR0cCB2ZXJicy5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICByb3V0ZXMuUm91dGV7UGF0dGVybjogXCJQT1NUIC9cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fVxuICAgICAgICAgICAgLy8gb3JcbiAgICAgICAgICAgIHJvdXRlcy5Sb3V0ZXtQYXR0ZXJuOiBcIkdFVCAvXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHR5cGUgRm9ybSBzdHJ1Y3QgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmaW5lcyBhIHN0cnVjdCBpbiB3aGljaCB0b1xuICAgICAgICAgICAgICAgIE5hbWUgc3RyaW5nIFxcYGZvcm06XCJuYW1lXCJcXGAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgZm9ybSBjb250ZW50LlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtIEZvcm1cbiAgICAgICAgICAgICAgICByZWNlaXZlLkZvcm0oY2xpZW50LCAmZm9ybSkgICAgICAgICAgICAgICAgLy8gUmV0cmlldmVzIGZvcm0uXG4gICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsbyBcIiArIGZvcm0uTmFtZSkgLy8gU2VuZHMgbWVzc2FnZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgWW91IGNhbiBhbHNvIHVzZSBhIDxJbmxpbmVDb2RlIHNvdXJjZT1cImpzb25cIiAvPiB0YWcsIGl0IHdpbGwgbWF0Y2ggdGhlIGZpZWxkIGNvcnJlY3RseSBhcyBpZiBpdCB3ZXJlIGFcbiAgICAgICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cImZvcm1cIiAvPiB0YWcuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVGhpcyBpcyBzbyB0aGF0IHlvdSBjYW4gaW50ZWdyYXRlIHlvdXIgc3RydWN0cyBtb3JlIGVhc2lseSB3aXRoIG90aGVyIGxpYnJhcmllcyB0aGF0IG9ubHkgdGFrZSBpbnRvIGFjY291bnRcbiAgICAgICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cImpzb25cIiAvPiBmb3JtYXRzLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9UaXA+XG4gICAgPFRpcD5cbiAgICAgICAgPHNwYW4+Rm9ybSBzdHJ1Y3RzIGNhbiBkZWZpbmUgc2xpY2VzIGFuZCBmaWxlcy48L3NwYW4+XG4gICAgICAgIDxDb2RlXG4gICAgICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICAgICAgdHlwZSBGb3JtIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgICAgIHN0cmluZyAgICAgICAgICAgICAgIFxcYGZvcm06XCJuYW1lXCJcXGBcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHMgW11zdHJpbmcgICAgICAgICAgICAgXFxgZm9ybTpcImNvbW1lbnRzXCJcXGAgLy8gc2xpY2Ugb2Ygc3RyaW5nc1xuICAgICAgICAgICAgICAgICAgICBGaWxlICAgICBtdWx0aXBhcnQuRmlsZUhlYWRlciBcXGBmb3JtOlwiZmlsZVwiXFxgICAgICAvLyBmaWxlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj5Zb3UgY2FuIG9wZW4gYW5kIHJlYWQgdGhlIGZpbGUuPC9zcGFuPlxuICAgICAgICA8Q29kZVxuICAgICAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgICAgIHNyYywgXyA6PSBmb3JtLkZpbGUuT3BlbigpXG4gICAgICAgICAgICAgICAgZHN0LCBfIDo9IG9zLkNyZWF0ZShcIm15LWZpbGUudHh0XCIpXG4gICAgICAgICAgICAgICAgaW8uQ29weShzcmMsIGRzdClcbiAgICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuPlJlbWVtYmVyIHRvIGNsb3NlIHlvdXIgZmlsZXMuPC9zcGFuPlxuICAgICAgICA8Q29kZVxuICAgICAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgICAgIGRlZmVyIHNyYy5DbG9zZSgpXG4gICAgICAgICAgICAgICAgZGVmZXIgZHN0LkNsb3NlKClcbiAgICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgPC9UaXA+XG4gICAgPFRpdGxlIHRleHQ9XCJKc29uXCIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgVXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuSnNvbigpXCIgLz4gdG8gcGFyc2UgaW5jb21pbmcgY29udGVudCBhcyBqc29uIHdoZW4gdXNpbmcgUE9TVCBhbmQgUFVUIGh0dHAgdmVyYnMgYW5kXG4gICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuSnNvbigpXCIgLz4gdG8gc2VuZCBqc29uIGNvbnRlbnQuXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcm91dGVzLlJvdXRle1BhdHRlcm46IFwiUE9TVCAvXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31cbiAgICAgICAgICAgIC8vIG9yXG4gICAgICAgICAgICByb3V0ZXMuUm91dGV7UGF0dGVybjogXCJQVVQgL1wiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB0eXBlIEdyZWV0aW5nRGV0YWlscyBzdHJ1Y3QgeyAgICAgIC8vIERlZmluZXMgYSBzdHJ1Y3QgaW4gd2hpY2ggdG9cbiAgICAgICAgICAgICAgICBOYW1lIHN0cmluZyBcXGBqc29uOlwibmFtZVwiXFxgICAgICAgLy8gc3RvcmUgdGhlIGpzb24gY29udGVudC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyBHcmVldGluZ0RldGFpbHMgICAgLy8gQ3JlYXRlcyBhIHplcm8gdmFsdWUuXG4gICAgICAgICAgICAgICAgcmVjZWl2ZS5Kc29uKGNsaWVudCwgJmRldGFpbHMpIC8vIFVubWFyc2hhbHMgdGhlIGNvbnRlbnQgaW50byBkZXRhaWxzLlxuICAgICAgICAgICAgICAgIHNlbmQuSnNvbihjbGllbnQsIGRldGFpbHMpICAgICAvLyBTZW5kcyBjb250ZW50IGJhY2sgYXMganNvbi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiQ29va2llc1wiIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIFVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLkNvb2tpZSgpXCIgLz4gdG8gcmV0cmlldmUgY29va2llcyBhbmQgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5Db29raWUoKVwiIC8+IHRvIHNlbmRcbiAgICAgICAgdGhlbS5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6PSByZWNlaXZlLkNvb2tpZShjbGllbnQsIFwibmlja25hbWVcIikgLy8gUmV0cmlldmVzIGNvb2tpZS5cbiAgICAgICAgICAgICAgICBzZW5kLkNvb2tpZShjbGllbnQsIFwibmlja25hbWVcIiwgbmlja25hbWUpICAgICAgLy8gU2VuZHMgaXQgYmFjay5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiU2Vzc2lvbiBJZFwiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuU2Vzc2lvbklkKClcIiAvPiB0byByZXRyaWV2ZSB0aGUgY2xpZW504oCZcyBzZXNzaW9uIGlkLjwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgXyA9IHJlY2VpdmUuU2Vzc2lvbklkKGNsaWVudCkgLy8gUmV0cmlldmVzIHNlc3Npb24gaWQuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8Tm90ZT5cbiAgICAgICAgPHNwYW4+VGhlIHNlc3Npb24gaWQgaXMgcmV0cmlldmVkIGZyb20gdGhlIGNsaWVudOKAmXMgc2Vzc2lvbi1pZCBjb29raWUuPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIElmIHRoZSBjbGllbnQgZG9lc27igJl0IHByb3ZpZGUgc3VjaCBjb29raWUsIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuU2Vzc2lvbklkKClcIiAvPlxuICAgICAgICAgICAgY3JlYXRlcyBhIG5ldyBzZXNzaW9uIGlkIGFuZCBzZW5kcyB0aGUgY29va2llIHRvIHRoZSBjbGllbnQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L05vdGU+XG4gICAgPENhdXRpb24+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgU2luY2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5TZXNzaW9uSWQoKVwiIC8+IG1pZ2h0IHNlbmQgYSBjb29raWUgdG8gdGhlIGNsaWVudCwgaXQgaXMgaW1wb3J0YW50IHRvIHJlbWVtYmVyXG4gICAgICAgICAgICB0aGF0IG9yZGVyIG9mIG9wZXJhdGlvbnMgbWF0dGVycy5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvQ2F1dGlvbj5cbiAgICA8VGl0bGUgdGV4dD1cIlNlc3Npb25cIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlNlc3Npb24oKVwiIC8+IHRvIHJldHJpZXZlIHRoZSBjbGllbnTigJlzIHNlc3Npb24uPC9zcGFuPlxuICAgIDxOb3RlPlRoZSBzZXNzaW9uIGlzIHJldHJpZXZlZCB1c2luZyA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlNlc3Npb25JZCgpXCIgLz4uPC9Ob3RlPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Vzc2lvbiAqc2Vzc2lvbnMuU2Vzc2lvbiAgICAgICAgIC8vIENyZWF0ZXMgYSB6ZXJvIHZhbHVlLlxuICAgICAgICAgICAgICAgIF8gPSByZWNlaXZlLlNlc3Npb24oY2xpZW50LCAmc2Vzc2lvbikgLy8gVW5tYXJzaGFscyB0aGUgY29udGVudCBpbnRvIHNlc3Npb24uXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIlJlZGlyZWN0XCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5SZWRpcmVjdCgpXCIgLz4gdG8gcmVkaXJlY3QgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24uPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBzZW5kLlJlZGlyZWN0KGNsaWVudCwgXCIvbG9naW5cIiwgMzA3KSAvLyBSZWRpcmVjdHMgdG8gL2xvZ2luLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJOYXZpZ2F0ZVwiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuTmF2aWdhdGUoKVwiIC8+IHRvIHJlZGlyZWN0IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIHdpdGggc3RhdHVzIDMwMi48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHNlbmQuTmF2aWdhdGUoY2xpZW50LCBcIi9sb2dpblwiKSAvLyBSZWRpcmVjdHMgdG8gL2xvZ2luIHdpdGggc3RhdHVzIDMwMi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIHsjc25pcHBldCByaWdodFNpZGViYXIoKX1cbiAgICAgICAgPFJpZ2h0U2lkZWJhclxuICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIkJhc2ljc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJTZXJ2ZXJcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiUm91dGVzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlBhdGggRmllbGRzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIk1lc3NhZ2VzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIkhlYWRlcnNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiU3RhdHVzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIk9yZGVyIG9mIE9wZXJhdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiUXVlcmllc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJGb3Jtc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJKc29uXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIkNvb2tpZXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiU2Vzc2lvbiBJZFwiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJTZXNzaW9uXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlJlZGlyZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIk5hdmlnYXRlXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgey9zbmlwcGV0fVxuICAgIHsjc25pcHBldCBmb290ZXIoKX1cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgICAgcHJldmlvdXM9e3sgbGFiZWw6IFwiR2V0IFN0YXJ0ZWRcIiwgaHJlZjogXCIvZ2V0X3N0YXJ0ZWRcIiB9fVxuICAgICAgICAgICAgbmV4dD17eyBsYWJlbDogXCJXZWIgU29ja2V0c1wiLCBocmVmOiBcIi93ZWJfc29ja2V0c1wiIH19XG4gICAgICAgIC8+XG4gICAgey9zbmlwcGV0fVxuPC9QYWdlPlxuIl0sIm5hbWVzIjpbIlBhZ2UiLCIkJGFuY2hvciIsIlJpZ2h0U2lkZWJhciIsIkZvb3RlciIsIlRpdGxlIiwibm9kZSIsInNwYW4iLCIkLnNpYmxpbmciLCJJbmxpbmVDb2RlIiwibm9kZV8xIiwibm9kZV8yIiwibm9kZV8zIiwiTm90ZSIsIm5vZGVfNCIsInNwYW5fMSIsInJvb3RfNCIsIiQwIiwiJC5kZXJpdmVkX3NhZmVfZXF1YWwiLCJyZWJhc2VMaW5rIiwiTGluayIsIm5vZGVfNSIsIm5vZGVfNiIsInNwYW5fMiIsIm5vZGVfNyIsIkNvZGUiLCJub2RlXzgiLCJub2RlXzkiLCJzcGFuXzMiLCJub2RlXzEwIiwibm9kZV8xMSIsInNwYW5fNCIsIm5vZGVfMTIiLCJub2RlXzEzIiwibm9kZV8xNCIsInNwYW5fNSIsIm5vZGVfMTYiLCJzcGFuXzYiLCJub2RlXzE3Iiwibm9kZV8xOCIsIm5vZGVfMTkiLCJzcGFuXzciLCJub2RlXzIwIiwibm9kZV8yMSIsInNwYW5fOCIsIm5vZGVfMjIiLCJub2RlXzIzIiwibm9kZV8yNCIsInNwYW5fOSIsIm5vZGVfMjUiLCJub2RlXzI2Iiwic3Bhbl8xMCIsIm5vZGVfMjciLCJub2RlXzI4Iiwibm9kZV8yOSIsInNwYW5fMTEiLCJub2RlXzMwIiwibm9kZV8zMSIsIkNhdXRpb24iLCJub2RlXzMyIiwibm9kZV8zMyIsInNwYW5fMTIiLCJub2RlXzM0Iiwibm9kZV8zNSIsIm5vZGVfMzYiLCJzcGFuXzEzIiwibm9kZV8zNyIsIm5vZGVfMzgiLCJub2RlXzM5Iiwic3Bhbl8xNCIsIm5vZGVfNDAiLCJub2RlXzQxIiwic3Bhbl8xNSIsIm5vZGVfNDIiLCJub2RlXzQzIiwibm9kZV80NCIsInNwYW5fMTYiLCJub2RlXzQ1Iiwibm9kZV80NiIsIm5vZGVfNDciLCJub2RlXzQ4Iiwibm9kZV80OSIsIlRpcCIsIm5vZGVfNTAiLCJzcGFuXzE3IiwiJC5maXJzdF9jaGlsZCIsImZyYWdtZW50XzUiLCJub2RlXzUxIiwibm9kZV81MiIsInNwYW5fMTgiLCJub2RlXzUzIiwibm9kZV81NCIsIm5vZGVfNTUiLCJub2RlXzU2Iiwibm9kZV81NyIsIm5vZGVfNTgiLCJzcGFuXzE5Iiwibm9kZV81OSIsIm5vZGVfNjAiLCJub2RlXzYxIiwibm9kZV82MiIsIm5vZGVfNjMiLCJzcGFuXzIwIiwibm9kZV82NCIsIm5vZGVfNjUiLCJub2RlXzY2Iiwibm9kZV82NyIsInNwYW5fMjEiLCJub2RlXzY4Iiwibm9kZV82OSIsIm5vZGVfNzAiLCJzcGFuXzIyIiwiZnJhZ21lbnRfNyIsIm5vZGVfNzEiLCJub2RlXzcyIiwic3Bhbl8yMyIsInJvb3RfMTAiLCJub2RlXzczIiwibm9kZV83NCIsInNwYW5fMjQiLCJub2RlXzc1Iiwibm9kZV83NiIsIm5vZGVfNzciLCJub2RlXzc4Iiwibm9kZV83OSIsInNwYW5fMjUiLCJub2RlXzgwIiwibm9kZV84MSIsIm5vZGVfODIiLCJzcGFuXzI2Iiwibm9kZV84MyIsIm5vZGVfODQiXSwibWFwcGluZ3MiOiI7Ozs7O2dWQUFBLGdCQWNDQSxHQUFJQyxHQUFBLGdCQXdkUyxhQUFZQSxHQUFBLENBQ2pCQyxHQUFBRCxFQUFBLFFBRVMsQ0FBQSxNQUFPLEVBQUcsS0FBTSxRQUFRLEVBQ3hCLENBQUEsTUFBTyxFQUFHLEtBQU0sUUFBUSxFQUN4QixDQUFBLE1BQU8sRUFBRyxLQUFNLFFBQVEsRUFDeEIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxhQUFhLEVBQzdCLENBQUEsTUFBTyxFQUFHLEtBQU0sVUFBVSxFQUMxQixDQUFBLE1BQU8sRUFBRyxLQUFNLFNBQVMsRUFDekIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxRQUFRLEVBQ3hCLENBQUEsTUFBTyxFQUFHLEtBQU0scUJBQXFCLEVBQ3JDLENBQUEsTUFBTyxFQUFHLEtBQU0sU0FBUyxFQUN6QixDQUFBLE1BQU8sRUFBRyxLQUFNLE9BQU8sRUFDdkIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxNQUFNLEVBQ3RCLENBQUEsTUFBTyxFQUFHLEtBQU0sU0FBUyxFQUN6QixDQUFBLE1BQU8sRUFBRyxLQUFNLFlBQVksRUFDNUIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxTQUFTLEVBQ3pCLENBQUEsTUFBTyxFQUFHLEtBQU0sVUFBVSxFQUMxQixDQUFBLE1BQU8sRUFBRyxLQUFNLFVBQVUsTUFJOUIsT0FBTUEsR0FBQSxDQUNYRSxHQUFBRixFQUFBLENBQ2UsU0FBQSxDQUFBLE1BQU8sY0FBZSxLQUFNLGNBQWMsRUFDOUMsS0FBQSxDQUFBLE1BQU8sY0FBZSxLQUFNLGNBQWMseUNBaGZ6REcsRUFBS0MsRUFBQSxDQUFBLEtBQUEsUUFBQSxDQUFBLE1BSUxDLEVBQUlDLEVBQUFGLEVBQUEsQ0FBQSxRQUFKQyxDQUFJLEVBQUEsQ0FBQSxFQUVBRSxFQUFVQyxFQUFBLENBQUEsT0FBQSxpQkFBQSxDQUFBLGVBQ1ZELEVBQVVFLEVBQUEsQ0FBQSxPQUFBLGtCQUFBLENBQUEsZ0JBQW1DRixFQUFVRyxHQUFBLENBQUEsT0FBQSx5QkFBQSxDQUFBLFVBSDNETCxFQUFJLENBQUEsRUFXSk0sRUFBSUMsRUFBQSxzQkFDQUMsRUFBSUMsR0FBQSxRQUFKRCxDQUFJLENBQUEsR0FBb0IsSUFBQUUsRUFBQUMsR0FBQSxJQUFBQyxHQUFXLFNBQVMsQ0FBQSxFQUEvQkMsR0FBSUMsRUFBQSxrR0FBakJOLENBQUksa0JBRVJWLEVBQUtpQixFQUFBLENBQUEsS0FBQSxRQUFBLENBQUEsTUFDTEMsRUFBSWYsRUFBQWMsRUFBQSxDQUFBLFNBQUpDLENBQUksQ0FBQSxFQUN5QmQsRUFBVWUsR0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLFVBRHZDRCxFQUFJLENBQUEsRUFJSkUsRUFBQUMsRUFBQTs7Ozs7Ozs7Ozt5QkFjQXJCLEVBQUtzQixFQUFBLENBQUEsS0FBQSxRQUFBLENBQUEsTUFHTEMsRUFBSXBCLEVBQUFtQixFQUFBLENBQUEsU0FBSkMsQ0FBSSxDQUFBLEVBQXlEbkIsRUFBVW9CLEdBQUEsQ0FBQSxPQUFBLGVBQUEsQ0FBQSxVQUF2RUQsRUFBSSxDQUFBLEVBQ0pILEVBQUFLLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBb0JBQyxFQUFJdkIsRUFBQXNCLEVBQUEsQ0FBQSxTQUFKQyxDQUFJLENBQUEsRUFBUXRCLEVBQVV1QixHQUFBLENBQUEsT0FBQSxjQUFBLENBQUEsVUFBdEJELEVBQUksQ0FBQSxFQUNKTixFQUFBUSxFQUFBOzs7Ozs7eUJBVUE1QixFQUFLNkIsRUFBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLE1BQ0xDLEVBQUkzQixFQUFBMEIsRUFBQSxDQUFBLFNBQUpDLENBQUksQ0FBQSxFQUFzRDFCLGFBQW1CLElBQUksQ0FBQSxVQUFqRjBCLEVBQUksQ0FBQSxFQUNKVixFQUFJVyxFQUFBLHNGQUNKQyxFQUFJN0IsRUFBQTRCLEVBQUEsQ0FBQSxTQUFKQyxDQUFJLENBQUEsRUFBeUM1QixFQUFVNkIsR0FBQSxDQUFBLE9BQUEsZ0JBQUEsQ0FBQSxVQUF2REQsRUFBSSxDQUFBLEVBQ0paLEVBQUFjLEVBQUE7Ozs7Ozs7Ozs7O3lCQWVBbEMsRUFBS21DLEVBQUEsQ0FBQSxLQUFBLFVBQUEsQ0FBQSxNQUNMQyxFQUFJakMsRUFBQWdDLEVBQUEsQ0FBQSxTQUFKQyxDQUFJLENBQUEsRUFBTWhDLEVBQVVpQyxHQUFBLENBQUEsT0FBQSxtQkFBQSxDQUFBLFVBQXBCRCxFQUFJLENBQUEsRUFDSmhCLEVBQUFrQixFQUFBOzs7Ozs7Ozs7OztnQkFlQUMsRUFBSXBDLEVBQUFtQyxFQUFBLENBQUEsU0FBSkMsQ0FBSSxDQUFBLEVBQU1uQyxFQUFVb0MsR0FBQSxDQUFBLE9BQUEsZ0JBQUEsQ0FBQSxVQUFwQkQsRUFBSSxDQUFBLEVBQ0puQixFQUFBcUIsRUFBQTs7Ozs7Ozs7Ozs7eUJBZUF6QyxFQUFLMEMsRUFBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLE1BQ0xDLEVBQUl4QyxFQUFBdUMsRUFBQSxDQUFBLFNBQUpDLENBQUksQ0FBQSxFQUFNdkMsRUFBVXdDLEdBQUEsQ0FBQSxPQUFBLGtCQUFBLENBQUEsVUFBcEJELEVBQUksQ0FBQSxFQUNKdkIsRUFBQXlCLEVBQUE7Ozs7Ozs7Ozs7O2dCQWVBQyxFQUFJM0MsRUFBQTBDLEVBQUEsQ0FBQSxTQUFKQyxDQUFJLENBQUEsRUFBTTFDLEVBQVUyQyxHQUFBLENBQUEsT0FBQSxlQUFBLENBQUEsVUFBcEJELEVBQUksQ0FBQSxFQUNKMUIsRUFBQTRCLEVBQUE7Ozs7Ozs7Ozs7Ozs7eUJBaUJBaEQsRUFBS2lELEVBQUEsQ0FBQSxLQUFBLFFBQUEsQ0FBQSxNQUNMQyxFQUFJL0MsRUFBQThDLEVBQUEsQ0FBQSxTQUFKQyxDQUFJLENBQUEsRUFBTTlDLEVBQVUrQyxHQUFBLENBQUEsT0FBQSxlQUFBLENBQUEsVUFBcEJELEVBQUksQ0FBQSxFQUNKOUIsRUFBQWdDLEVBQUE7Ozs7Ozs7Ozs7Ozt5QkFnQkFDLEdBQU9DLEVBQUEsb0RBS1B0RCxFQUFLdUQsRUFBQSxDQUFBLEtBQUEscUJBQUEsQ0FBQSxNQUdMQyxFQUFJckQsRUFBQW9ELEVBQUEsQ0FBQSxRQUFKQyxDQUFJLENBQUEsRUFDMENwRCxFQUFVcUQsRUFBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLGdCQUNickQsRUFBVXNELEdBQUEsQ0FBQSxPQUFBLGdCQUFBLENBQUEsVUFGckRGLEVBQUksQ0FBQSxFQUtKcEMsRUFBQXVDLEVBQUE7Ozs7Ozs7Ozs7OztnQkFnQkFDLEdBQUl6RCxFQUFBd0QsRUFBQSxDQUFBLE9BQUpDLEVBQUksRUFDQXhELEVBQVV5RCxHQUFBLENBQUEsT0FBQSwwQkFBQSxDQUFBLFdBRGRELEdBQUksQ0FBQSxFQUdKeEMsRUFBQTBDLEdBQUE7Ozs7Ozs7MkJBZ0JBMUMsRUFBQTJDLEdBQUE7OztnQkFPQUMsR0FBSTdELEVBQUE0RCxHQUFBLENBQUEsT0FBSkMsRUFBSSxFQUNBNUQsRUFBVTZELEdBQUEsQ0FBQSxPQUFBLGtCQUFBLENBQUEsV0FEZEQsR0FBSSxDQUFBLEVBSUpoRSxFQUFLa0UsR0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLE1BQ0xDLEdBQUloRSxFQUFBK0QsR0FBQSxDQUFBLFNBQUpDLEVBQUksQ0FBQSxFQUFNL0QsRUFBVWdFLEdBQUEsQ0FBQSxPQUFBLGlCQUFBLENBQUEsV0FBcEJELEdBQUksQ0FBQSxFQUNKL0MsRUFBQWlELEdBQUE7Ozs7Ozs7Ozs7Ozs7MkJBaUJBckUsRUFBS3NFLEdBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxNQUNMQyxHQUFJcEUsRUFBQW1FLEdBQUEsQ0FBQSxTQUFKQyxFQUFJLENBQUEsRUFDSW5FLEVBQVVvRSxHQUFBLENBQUEsT0FBQSxnQkFBQSxDQUFBLGlCQUNkcEUsRUFBVXFFLEdBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxpQkFBdUJyRSxFQUFVc0UsR0FBQSxDQUFBLE9BQUEsS0FBQSxDQUFBLFdBRi9DSCxHQUFJLENBQUEsRUFJSm5ELEVBQUF1RCxHQUFBOzs7OzJCQVFBdkQsRUFBQXdELEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFzQkFDLEdBQUdDLEdBQUEsNkJBQ0NDLEVBQUlDLEVBQUFDLENBQUEsUUFBSkYsQ0FBSSxDQUFBLEVBQ21CM0UsRUFBVThFLEVBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxlQUM3QjlFLEVBQVUrRSxFQUFBLENBQUEsT0FBQSxNQUFBLENBQUEsRUFHZCxJQUFBQyxLQUxBTCxFQUFJLENBQUEsUUFLSkssRUFBSSxDQUFBLEVBRUFoRixFQUFVaUYsRUFBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLDJCQUdsQlIsR0FBR1MsR0FBQSx5Q0FFQ2xFLEVBQUFtRSxFQUFBLHdWQVdBbkUsRUFBQW9FLEVBQUE7Ozs7NkJBU0FwRSxFQUFBcUUsRUFBQTs7O3lDQVFKekYsRUFBSzBGLEdBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxNQUNMQyxHQUFJeEYsRUFBQXVGLEdBQUEsQ0FBQSxTQUFKQyxFQUFJLENBQUEsRUFDSXZGLEVBQVV3RixHQUFBLENBQUEsT0FBQSxnQkFBQSxDQUFBLGlCQUNkeEYsRUFBVXlGLEdBQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxXQUZkRixHQUFJLENBQUEsRUFJSnZFLEVBQUEwRSxHQUFBOzs7OzJCQVFBMUUsRUFBQTJFLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFzQkEvRixFQUFLZ0csR0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLE1BQ0xDLEdBQUk5RixFQUFBNkYsR0FBQSxDQUFBLFNBQUpDLEVBQUksQ0FBQSxFQUNJN0YsRUFBVThGLEdBQUEsQ0FBQSxPQUFBLGtCQUFBLENBQUEsaUJBQXVEOUYsRUFBVStGLEdBQUEsQ0FBQSxPQUFBLGVBQUEsQ0FBQSxXQURuRkYsR0FBSSxDQUFBLEVBSUo3RSxFQUFBZ0YsR0FBQTs7Ozs7Ozs7Ozs7OzsyQkFpQkFwRyxFQUFLcUcsR0FBQSxDQUFBLEtBQUEsWUFBQSxDQUFBLE1BQ0xDLEdBQUluRyxFQUFBa0csR0FBQSxDQUFBLFNBQUpDLEVBQUksQ0FBQSxFQUFNbEcsRUFBVW1HLEdBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsV0FBcEJELEdBQUksQ0FBQSxFQUNKbEYsRUFBQW9GLEdBQUE7Ozs7Ozs7Ozs7OzJCQWVBaEcsRUFBSWlHLEdBQUEsNkJBRUFDLEVBQUl2RyxFQUFBNkUsRUFBQTJCLENBQUEsRUFBQSxDQUFBLFFBQUpELENBQUksQ0FBQSxFQUMyQ3RHLEVBQVV3RyxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLDJCQUk3RHZELEdBQU93RCxHQUFBLHNCQUNIQyxFQUFJQyxHQUFBLFFBQUpELENBQUksQ0FBQSxFQUNNMUcsRUFBVTRHLEVBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsTUFEcEJGLENBQUksb0JBS1I5RyxFQUFLaUgsR0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLE1BQ0xDLEdBQUkvRyxFQUFBOEcsR0FBQSxDQUFBLFNBQUpDLEVBQUksQ0FBQSxFQUFNOUcsRUFBVStHLEdBQUEsQ0FBQSxPQUFBLG1CQUFBLENBQUEsV0FBcEJELEdBQUksQ0FBQSxFQUNKMUcsRUFBSTRHLEdBQUEsdUNBQWlDaEgsRUFBVWlILEVBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsMkJBQy9DakcsRUFBQWtHLEdBQUE7Ozs7Ozs7Ozs7OzsyQkFnQkF0SCxFQUFLdUgsR0FBQSxDQUFBLEtBQUEsVUFBQSxDQUFBLE1BQ0xDLEdBQUlySCxFQUFBb0gsR0FBQSxDQUFBLFNBQUpDLEVBQUksQ0FBQSxFQUFNcEgsRUFBVXFILEdBQUEsQ0FBQSxPQUFBLGlCQUFBLENBQUEsV0FBcEJELEdBQUksQ0FBQSxFQUNKcEcsRUFBQXNHLEdBQUE7Ozs7Ozs7Ozs7OzJCQWVBMUgsRUFBSzJILEdBQUEsQ0FBQSxLQUFBLFVBQUEsQ0FBQSxNQUNMQyxHQUFJekgsRUFBQXdILEdBQUEsQ0FBQSxTQUFKQyxFQUFJLENBQUEsRUFBTXhILEVBQVV5SCxHQUFBLENBQUEsT0FBQSxpQkFBQSxDQUFBLFdBQXBCRCxHQUFJLENBQUEsRUFDSnhHLEVBQUEwRyxHQUFBOzs7Ozs7Ozs7Ozt5RUEzY0cifQ==
