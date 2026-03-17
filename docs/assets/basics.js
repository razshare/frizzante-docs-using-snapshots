import{f as d,a as u,s as e,e as n,b as l,t as vs}from"./index-CIoHp0Rz.js";import{L as ps}from"./navbar.js";import{C as Ie}from"./caution.js";import{C as r}from"./code.js";import{P as us,T as a,R as ms,F as gs}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{N as f}from"./note.js";import{T as Ge}from"./tip.js";var fs=d("<span>Please <!> such incidents if you can.</span>"),_s=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),hs=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),ws=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),bs=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ss=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),ks=d("The session is retrieved using <!>.",1),xs=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function Ms(je){us(je,{title:"Basics",rightSidebar:p=>{ms(p,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:p=>{gs(p,{previous:{label:"Get Started",href:"/frizzante-docs-using-snapshots/get_started"},next:{label:"Web Sockets",href:"/frizzante-docs-using-snapshots/web_sockets"}})},children:(p,Rs)=>{var _=xs(),h=u(_);a(h,{text:"Basics"});var w=e(h,8),b=e(n(w),3);s(b,{source:"net/http.Server"});var S=e(b,4);s(S,{source:"net/http.Request"});var Ae=e(S,2);s(Ae,{source:"net/http.ResponseWriter"});var k=e(w,8);f(k,{children:(o,v)=>{var t=fs(),i=e(n(t));ps(i,{href:"/frizzante-docs-using-snapshots/issues",children:(c,m)=>{var g=vs("report");l(c,g)},$$slots:{default:!0}}),l(o,t)}});var x=e(k,2);a(x,{text:"Server"});var C=e(x,2),Je=e(n(C));s(Je,{source:"servers.New()"});var y=e(C,2);r(y,{lang:"go",source:`
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
        `});var z=e(M,2);a(z,{text:"Messages"});var O=e(z,2),Ye=e(n(O));s(Ye,{source:"receive.Message()"});var I=e(O,2);r(I,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var G=e(I,2),qe=e(n(G));s(qe,{source:"send.Message()"});var j=e(G,2);r(j,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var A=e(j,2);a(A,{text:"Headers"});var J=e(A,2),Le=e(n(J));s(Le,{source:"receive.Header()"});var D=e(J,2);r(D,{lang:"go",source:`
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
        `});var L=e(q,2);Ie(L,{children:(o,v)=>{var t=_s();l(o,t)}});var W=e(L,2);a(W,{text:"Order of Operations"});var K=e(W,6),X=e(n(K));s(X,{source:"send.Status()"});var Xe=e(X,2);s(Xe,{source:"send.Message()"});var Z=e(K,2);r(Z,{lang:"go",source:`
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
        `});var ue=e(pe,2);Ge(ue,{children:(o,v)=>{var t=hs(),i=u(t),c=e(n(i));s(c,{source:"json"});var m=e(c,2);s(m,{source:"form"});var g=e(i,4),ds=e(n(g));s(ds,{source:"json"}),l(o,t)}});var me=e(ue,2);Ge(me,{children:(o,v)=>{var t=ws(),i=e(u(t),2);r(i,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(i,4);r(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var m=e(c,4);r(m,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,t)}});var ge=e(me,2);a(ge,{text:"Json"});var fe=e(ge,2),_e=e(n(fe));s(_e,{source:"receive.Json()"});var rs=e(_e,2);s(rs,{source:"send.Json()"});var he=e(fe,2);r(he,{lang:"go",source:`
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
        `});var Pe=e(Re,2);f(Pe,{children:(o,v)=>{var t=bs(),i=e(u(t),2),c=e(n(i));s(c,{source:"receive.SessionId()"}),l(o,t)}});var Te=e(Pe,2);Ie(Te,{children:(o,v)=>{var t=Ss(),i=e(n(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Ve=e(Te,2);a(Ve,{text:"Session"});var $e=e(Ve,2),os=e(n($e));s(os,{source:"receive.Session()"});var He=e($e,2);f(He,{children:(o,v)=>{var t=ks(),i=e(u(t));s(i,{source:"receive.SessionId()"}),l(o,t)}});var Fe=e(He,2);r(Fe,{lang:"go",source:`
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
        `});var ze=e(Me,2);a(ze,{text:"Navigate"});var Oe=e(ze,2),cs=e(n(Oe));s(cs,{source:"send.Navigate()"});var ls=e(Oe,2);r(ls,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(p,_)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{Ms as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvdmlld3MvYmFzaWNzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAgIGltcG9ydCBDYXV0aW9uIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY2F1dGlvbi5zdmVsdGVcIlxuICAgIGltcG9ydCBDb2RlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY29kZS5zdmVsdGVcIlxuICAgIGltcG9ydCBGb290ZXIgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgSW5saW5lQ29kZSBmcm9tIFwiJGxpYi9jb21wb25lbnRzL2lubGluZV9jb2RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IExpbmsgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9saW5rcy9saW5rLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IE5vdGUgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9ub3RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFBhZ2UgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9wYWdlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFJpZ2h0U2lkZWJhciBmcm9tIFwiJGxpYi9jb21wb25lbnRzL3JpZ2h0X3NpZGViYXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgVGlwIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGlwLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFRpdGxlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGl0bGUuc3ZlbHRlXCJcbjwvc2NyaXB0PlxuXG48UGFnZSB0aXRsZT1cIkJhc2ljc1wiPlxuICAgIDxUaXRsZSB0ZXh0PVwiQmFzaWNzXCIgLz5cbiAgICA8c3Bhbj4gQWxsIGludGVybmFscyBvZiB0aGUgZnJhbWV3b3JrIGFyZSBleHBvc2VkIGludGVudGlvbmFsbHkuIDwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgRm9yIGV4YW1wbGUgdGhlIGZyaXp6YW50ZSA8YSBocmVmPVwiI3NlcnZlclwiPnNlcnZlcjwvYT4gaXMgYSB3cmFwcGVyIGFyb3VuZFxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJuZXQvaHR0cC5TZXJ2ZXJcIiAvPiBhbmQgYSBmcml6emFudGUgPGEgaHJlZj1cIiNtZXNzYWdlc1wiPmNsaWVudDwvYT4gaXMgYSB3cmFwcGVyIGFyb3VuZFxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJuZXQvaHR0cC5SZXF1ZXN0XCIgLz4gYW5kIDxJbmxpbmVDb2RlIHNvdXJjZT1cIm5ldC9odHRwLlJlc3BvbnNlV3JpdGVyXCIgLz4uXG4gICAgPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxzcGFuPlxuICAgICAgICBZb3UgY2FuIGludGVyYWN0IHdpdGggdGhlc2UgaW50ZXJuYWxzIGFuZCB5b3UgYXJlLCBpbiBmYWN0LCBpbnRlbmRlZCB0byBkbyBzbyB3aGVuZXZlciB0aGUgZnJhbWV3b3JrIGlzXG4gICAgICAgIGluc3VmZmljaWVudCwgeW91J3JlIGhpdHRpbmcgYSBwZXJmb3JtYW5jZSB3YWxsLCBhIGJ1ZyBhbmQgc28gb24uXG4gICAgPC9zcGFuPlxuICAgIDxOb3RlPlxuICAgICAgICA8c3Bhbj5QbGVhc2UgPExpbmsgaHJlZj1cIi9mcml6emFudGUtZG9jcy11c2luZy1zbmFwc2hvdHMvaXNzdWVzXCI+cmVwb3J0PC9MaW5rPiBzdWNoIGluY2lkZW50cyBpZiB5b3UgY2FuLjwvc3Bhbj5cbiAgICA8L05vdGU+XG4gICAgPFRpdGxlIHRleHQ9XCJTZXJ2ZXJcIiAvPlxuICAgIDxzcGFuPlxuICAgICAgICBDcmVhdGUgYSBuZXcgc2VydmVyIHdpdGggPElubGluZUNvZGUgc291cmNlPVwic2VydmVycy5OZXcoKVwiIC8+LCB0aGVuIGZvbGxvd3VwIHdpdGggc2VydmVycy5TdGFydCgpIGluIG9yZGVyIHRvXG4gICAgICAgIHN0YXJ0IGEgc2VydmVyLlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2UgbWFpblxuXG4gICAgICAgICAgICBpbXBvcnQgXCJtYWluL2xpYi9jb3JlL3NlcnZlcnNcIlxuXG4gICAgICAgICAgICB2YXIgc2VydmVyID0gc2VydmVycy5OZXcoKSAgICAgIC8vIENyZWF0ZXMgc2VydmVyLlxuXG4gICAgICAgICAgICBmdW5jIG1haW4oKSB7XG4gICAgICAgICAgICAgICAgZGVmZXIgc2VydmVycy5TdGFydChzZXJ2ZXIpIC8vIFN0YXJ0cyBzZXJ2ZXIuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIlJvdXRlc1wiIC8+XG4gICAgPHNwYW4+RWFjaCBzZXJ2ZXIgZXhwb3NlcyBhIHNsaWNlIG9mIFJvdXRlcyB3aGljaCB5b3UgY2FuIGZyZWVseSBtb2RpZnkuPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxzcGFuPllvdSBjYW4gYWRkIGEgbmV3IHJvdXRlIGJ5IGFwcGVuZGluZyB0byBvciBvdmVyd3JpdGluZyA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZXJ2ZXIuUm91dGVzXCIgLz4uPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSBtYWluXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlcnZlcnNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvcm91dGVzL3dlbGNvbWVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB2YXIgc2VydmVyID0gc2VydmVycy5OZXcoKSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGVzIHNlcnZlci5cblxuICAgICAgICAgICAgZnVuYyBtYWluKCkge1xuICAgICAgICAgICAgICAgIGRlZmVyIHNlcnZlcnMuU3RhcnQoc2VydmVyKSAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnRzIHNlcnZlci5cbiAgICAgICAgICAgICAgICBzZXJ2ZXIuUm91dGVzID0gW11yb3V0ZXMuUm91dGV7ICAgICAgICAgICAgICAgIC8vIE92ZXJ3cml0ZXMgcm91dGVzLlxuICAgICAgICAgICAgICAgICAgICB7UGF0dGVybjogXCJHRVQgL1wiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9LCAvLyBBZGRzIHJvdXRlLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPldoZXJlIDxJbmxpbmVDb2RlIHNvdXJjZT1cIndlbGNvbWUuVmlld1wiIC8+IGlzIGEgZnVuY3Rpb24gcG9pbnRlci48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHt9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIlBhdGggRmllbGRzXCIgLz5cbiAgICA8c3Bhbj5Sb3V0ZSBwYXR0ZXJucyBjYW4gZGVmaW5lIGR5bmFtaWMgcGF0aCBmaWVsZHMgdXNpbmcgPElubGluZUNvZGUgc291cmNlPXtcInt9XCJ9IC8+IHN5bnRheC48L3NwYW4+XG4gICAgPENvZGUgbGFuZz1cImdvXCIgc291cmNlPXtgcm91dGVzLlJvdXRle1BhdHRlcm46IFwiR0VUIC97bmFtZX1cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fWB9IC8+XG4gICAgPHNwYW4+UGF0aCBmaWVsZHMgY2FuIHRoZW4gYmUgcmV0cmlldmVkIHdpdGggPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5QYXRoKClcIiAvPi48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIF8gPSByZWNlaXZlLlBhdGgoY2xpZW50LCBcIm5hbWVcIikgLy8gUmV0cmlldmVzIGZpZWxkIFwibmFtZVwiLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJNZXNzYWdlc1wiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuTWVzc2FnZSgpXCIgLz4gdG8gcmV0cmlldmUgbWVzc2FnZXMgc2VudCBieSB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgXyA9IHJlY2VpdmUuTWVzc2FnZShjbGllbnQpIC8vIFJldHJpZXZlcyBtZXNzYWdlLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuTWVzc2FnZSgpXCIgLz4gdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiSGVsbG8uXCIpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIkhlYWRlcnNcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLkhlYWRlcigpXCIgLz4gdG8gcmV0cmlldmUgaGVhZGVyIGZpZWxkcyBzZW50IGJ5IHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBfID0gcmVjZWl2ZS5IZWFkZXIoY2xpZW50LCBcIkFjY2VwdFwiKSAvLyBSZXRyaWV2ZXMgZmllbGQgXCJBY2NlcHRcIi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLkhlYWRlcigpXCIgLz4gdG8gc2VuZCBoZWFkZXIgZmllbGRzIHRvIHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgYWNjZXB0IDo9IHJlY2VpdmUuSGVhZGVyKGNsaWVudCwgXCJBY2NlcHRcIikgIC8vIFJldHJpZXZlcyBmaWVsZCBcIkFjY2VwdFwiLlxuICAgICAgICAgICAgICAgIHNlbmQuSGVhZGVyKGNsaWVudCwgXCJDb250ZW50LVR5cGVcIiwgYWNjZXB0KSAvLyBTZW5kcyBpdCBiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJTdGF0dXNcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLlN0YXR1cygpXCIgLz4gdG8gc2VuZCB0aGUgc3RhdHVzIG9mIHRoZSByZXNwb25zZSB0byB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgc2VuZC5TdGF0dXMoY2xpZW50LCA0MDQpICAgICAgICAgICAvLyBTZW5kcyBzdGF0dXMgNDA0LlxuICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiTm90IGZvdW5kLlwiKSAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPENhdXRpb24+XG4gICAgICAgIDxzcGFuPlNlbmRpbmcgaGVhZGVyIGZpZWxkcyBvciBzdGF0dXMgYWZ0ZXIgc2VuZGluZyBvdXQgY29udGVudCBpcyBub3QgYWxsb3dlZC48L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3Bhbj5SZWFkIDxhIGhyZWY9XCIjb3JkZXItb2Ytb3ByYXRpb25zXCI+YmVsb3c8L2E+Ljwvc3Bhbj5cbiAgICA8L0NhdXRpb24+XG4gICAgPFRpdGxlIHRleHQ9XCJPcmRlciBvZiBPcGVyYXRpb25zXCIgLz5cbiAgICA8c3Bhbj5PcmRlciBvZiBvcGVyYXRpb25zIG1hdHRlcnMgd2hlbiBzZW5kaW5nIGRhdGEgdG8gdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPGJyIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIEZvciBleGFtcGxlLCBzZW5kaW5nIHRoZSBzdGF0dXMgY29kZSB3aXRoIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuU3RhdHVzKClcIiAvPlxuICAgICAgICBhZnRlciB5b3XigJl2ZSBhbHJlYWR5IHNlbnQgY29udGVudCB3aXRoIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuTWVzc2FnZSgpXCIgLz5cbiAgICAgICAgaXMgbm90IGFsbG93ZWQuXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBzZW5kLk1lc3NhZ2UoY2xpZW50LCBcIkhlbGxvLlwiKSAvLyBTZW5kcyBtZXNzYWdlIChTdWNjZWVkcykuXG4gICAgICAgICAgICAgICAgc2VuZC5TdGF0dXMoY2xpZW50LCA0MDQpICAgICAgIC8vIFNlbmRzIHN0YXR1cyAoRmFpbHMpLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuU3RhdHVzKGNsaWVudCwgNDA0KVwiIC8+IHdpbGwgZmFpbCBhbmQgdGhlIGNsaWVudCB3aWxsIHJlY2VpdmUgc3RhdHVzIDIwMCBpbnN0ZWFkIG9mIDQwNC5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImh0dHBcIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIEhUVFAvMS4xIDIwMCBPS1xuICAgICAgICAgICAgRGF0ZTogU3VuLCAyNSBNYXkgMjAyNSAwMjowMDozNyBHTVRcbiAgICAgICAgICAgIENvbnRlbnQtTGVuZ3RoOiA2XG4gICAgICAgICAgICBDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcblxuICAgICAgICAgICAgSGVsbG8uXG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5UaGUgZmFpbHVyZSBpcyBsb2dnZWQgdG8gdGhlIHNlcnZlcuKAmXMgZXJyb3IgbG9nZ2VyLjwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgQXNzdW1pbmcgeW914oCZcmUgdXNpbmcgdGhlIGRlZmF1bHQgZXJyb3IgbG9nZ2VyLCB5b3XigJlsbCBzZWUgYW4gZXJyb3Igb2Ygc29ydHMgaW4geW91ciA8c3Ryb25nPmNvbnNvbGU8L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImxvZ1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgbGlzdGVuaW5nIGZvciByZXF1ZXN0cyBhdCBodHRwOi8vMTI3LjAuMC4xOjgwODBcbiAgICAgICAgICAgIHN0YXR1cyBpcyBsb2NrZWRcbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPlxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJzdGF0dXMgaXMgbG9ja2VkXCIgLz4sIG1lYW5pbmcgdGhlIHN0YXR1cyBjb2RlIGhhcyBhbHJlYWR5IGJlZW4gc2VudCB0byB0aGUgY2xpZW50IGFuZFxuICAgICAgICB0aGVyZeKAmXMgbm90aGluZyB5b3UgY2FuIGRvIGFib3V0IGl0LlxuICAgIDwvc3Bhbj5cbiAgICA8VGl0bGUgdGV4dD1cIlF1ZXJpZXNcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlF1ZXJ5KClcIiAvPiB0byByZXRyaWV2ZSBxdWVyeSBmaWVsZHMuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgbmFtZSA6PSByZWNlaXZlLlF1ZXJ5KGNsaWVudCwgXCJuYW1lXCIpIC8vIFJldHJpZXZlcyBmaWVsZCBcIm5hbWVcIi5cbiAgICAgICAgICAgICAgICBzZW5kLk1lc3NhZ2UoY2xpZW50LCBcIkhlbGxvIFwiICsgbmFtZSkgLy8gU2VuZHMgbWVzc2FnZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiRm9ybXNcIiAvPlxuICAgIDxzcGFuPlxuICAgICAgICBVc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5Gb3JtKClcIiAvPiB0byBwYXJzZSBpbmNvbWluZyBjb250ZW50IGFzIG11bHRpcGFydCBmb3JtIG9yIHVybCBlbmNvZGVkIGZvcm0gd2hlbiB1c2luZ1xuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJQT1NUXCIgLz4gYW5kIDxJbmxpbmVDb2RlIHNvdXJjZT1cIkdFVFwiIC8+IGh0dHAgdmVyYnMuXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcm91dGVzLlJvdXRle1BhdHRlcm46IFwiUE9TVCAvXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31cbiAgICAgICAgICAgIC8vIG9yXG4gICAgICAgICAgICByb3V0ZXMuUm91dGV7UGF0dGVybjogXCJHRVQgL1wiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB0eXBlIEZvcm0gc3RydWN0IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmluZXMgYSBzdHJ1Y3QgaW4gd2hpY2ggdG9cbiAgICAgICAgICAgICAgICBOYW1lIHN0cmluZyBcXGBmb3JtOlwibmFtZVwiXFxgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGZvcm0gY29udGVudC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSBGb3JtXG4gICAgICAgICAgICAgICAgcmVjZWl2ZS5Gb3JtKGNsaWVudCwgJmZvcm0pICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlcyBmb3JtLlxuICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiSGVsbG8gXCIgKyBmb3JtLk5hbWUpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGlwPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB1c2UgYSA8SW5saW5lQ29kZSBzb3VyY2U9XCJqc29uXCIgLz4gdGFnLCBpdCB3aWxsIG1hdGNoIHRoZSBmaWVsZCBjb3JyZWN0bHkgYXMgaWYgaXQgd2VyZSBhXG4gICAgICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJmb3JtXCIgLz4gdGFnLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFRoaXMgaXMgc28gdGhhdCB5b3UgY2FuIGludGVncmF0ZSB5b3VyIHN0cnVjdHMgbW9yZSBlYXNpbHkgd2l0aCBvdGhlciBsaWJyYXJpZXMgdGhhdCBvbmx5IHRha2UgaW50byBhY2NvdW50XG4gICAgICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJqc29uXCIgLz4gZm9ybWF0cy5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvVGlwPlxuICAgIDxUaXA+XG4gICAgICAgIDxzcGFuPkZvcm0gc3RydWN0cyBjYW4gZGVmaW5lIHNsaWNlcyBhbmQgZmlsZXMuPC9zcGFuPlxuICAgICAgICA8Q29kZVxuICAgICAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgICAgIHR5cGUgRm9ybSBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBOYW1lICAgICBzdHJpbmcgICAgICAgICAgICAgICBcXGBmb3JtOlwibmFtZVwiXFxgXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRzIFtdc3RyaW5nICAgICAgICAgICAgIFxcYGZvcm06XCJjb21tZW50c1wiXFxgIC8vIHNsaWNlIG9mIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgRmlsZSAgICAgbXVsdGlwYXJ0LkZpbGVIZWFkZXIgXFxgZm9ybTpcImZpbGVcIlxcYCAgICAgLy8gZmlsZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+WW91IGNhbiBvcGVuIGFuZCByZWFkIHRoZSBmaWxlLjwvc3Bhbj5cbiAgICAgICAgPENvZGVcbiAgICAgICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgICAgICBzcmMsIF8gOj0gZm9ybS5GaWxlLk9wZW4oKVxuICAgICAgICAgICAgICAgIGRzdCwgXyA6PSBvcy5DcmVhdGUoXCJteS1maWxlLnR4dFwiKVxuICAgICAgICAgICAgICAgIGlvLkNvcHkoc3JjLCBkc3QpXG4gICAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj5SZW1lbWJlciB0byBjbG9zZSB5b3VyIGZpbGVzLjwvc3Bhbj5cbiAgICAgICAgPENvZGVcbiAgICAgICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgICAgICBkZWZlciBzcmMuQ2xvc2UoKVxuICAgICAgICAgICAgICAgIGRlZmVyIGRzdC5DbG9zZSgpXG4gICAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgIDwvVGlwPlxuICAgIDxUaXRsZSB0ZXh0PVwiSnNvblwiIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIFVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLkpzb24oKVwiIC8+IHRvIHBhcnNlIGluY29taW5nIGNvbnRlbnQgYXMganNvbiB3aGVuIHVzaW5nIFBPU1QgYW5kIFBVVCBodHRwIHZlcmJzIGFuZFxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLkpzb24oKVwiIC8+IHRvIHNlbmQganNvbiBjb250ZW50LlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHJvdXRlcy5Sb3V0ZXtQYXR0ZXJuOiBcIlBPU1QgL1wiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9XG4gICAgICAgICAgICAvLyBvclxuICAgICAgICAgICAgcm91dGVzLlJvdXRle1BhdHRlcm46IFwiUFVUIC9cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdHlwZSBHcmVldGluZ0RldGFpbHMgc3RydWN0IHsgICAgICAvLyBEZWZpbmVzIGEgc3RydWN0IGluIHdoaWNoIHRvXG4gICAgICAgICAgICAgICAgTmFtZSBzdHJpbmcgXFxganNvbjpcIm5hbWVcIlxcYCAgICAgIC8vIHN0b3JlIHRoZSBqc29uIGNvbnRlbnQuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHMgR3JlZXRpbmdEZXRhaWxzICAgIC8vIENyZWF0ZXMgYSB6ZXJvIHZhbHVlLlxuICAgICAgICAgICAgICAgIHJlY2VpdmUuSnNvbihjbGllbnQsICZkZXRhaWxzKSAvLyBVbm1hcnNoYWxzIHRoZSBjb250ZW50IGludG8gZGV0YWlscy5cbiAgICAgICAgICAgICAgICBzZW5kLkpzb24oY2xpZW50LCBkZXRhaWxzKSAgICAgLy8gU2VuZHMgY29udGVudCBiYWNrIGFzIGpzb24uXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIkNvb2tpZXNcIiAvPlxuICAgIDxzcGFuPlxuICAgICAgICBVc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5Db29raWUoKVwiIC8+IHRvIHJldHJpZXZlIGNvb2tpZXMgYW5kIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuQ29va2llKClcIiAvPiB0byBzZW5kXG4gICAgICAgIHRoZW0uXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgbmlja25hbWUgOj0gcmVjZWl2ZS5Db29raWUoY2xpZW50LCBcIm5pY2tuYW1lXCIpIC8vIFJldHJpZXZlcyBjb29raWUuXG4gICAgICAgICAgICAgICAgc2VuZC5Db29raWUoY2xpZW50LCBcIm5pY2tuYW1lXCIsIG5pY2tuYW1lKSAgICAgIC8vIFNlbmRzIGl0IGJhY2suXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIlNlc3Npb24gSWRcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlNlc3Npb25JZCgpXCIgLz4gdG8gcmV0cmlldmUgdGhlIGNsaWVudOKAmXMgc2Vzc2lvbiBpZC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIF8gPSByZWNlaXZlLlNlc3Npb25JZChjbGllbnQpIC8vIFJldHJpZXZlcyBzZXNzaW9uIGlkLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPE5vdGU+XG4gICAgICAgIDxzcGFuPlRoZSBzZXNzaW9uIGlkIGlzIHJldHJpZXZlZCBmcm9tIHRoZSBjbGllbnTigJlzIHNlc3Npb24taWQgY29va2llLjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBJZiB0aGUgY2xpZW50IGRvZXNu4oCZdCBwcm92aWRlIHN1Y2ggY29va2llLCA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlNlc3Npb25JZCgpXCIgLz5cbiAgICAgICAgICAgIGNyZWF0ZXMgYSBuZXcgc2Vzc2lvbiBpZCBhbmQgc2VuZHMgdGhlIGNvb2tpZSB0byB0aGUgY2xpZW50LlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9Ob3RlPlxuICAgIDxDYXV0aW9uPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFNpbmNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuU2Vzc2lvbklkKClcIiAvPiBtaWdodCBzZW5kIGEgY29va2llIHRvIHRoZSBjbGllbnQsIGl0IGlzIGltcG9ydGFudCB0byByZW1lbWJlclxuICAgICAgICAgICAgdGhhdCBvcmRlciBvZiBvcGVyYXRpb25zIG1hdHRlcnMuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L0NhdXRpb24+XG4gICAgPFRpdGxlIHRleHQ9XCJTZXNzaW9uXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5TZXNzaW9uKClcIiAvPiB0byByZXRyaWV2ZSB0aGUgY2xpZW504oCZcyBzZXNzaW9uLjwvc3Bhbj5cbiAgICA8Tm90ZT5UaGUgc2Vzc2lvbiBpcyByZXRyaWV2ZWQgdXNpbmcgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5TZXNzaW9uSWQoKVwiIC8+LjwvTm90ZT5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlc3Npb24gKnNlc3Npb25zLlNlc3Npb24gICAgICAgICAvLyBDcmVhdGVzIGEgemVybyB2YWx1ZS5cbiAgICAgICAgICAgICAgICBfID0gcmVjZWl2ZS5TZXNzaW9uKGNsaWVudCwgJnNlc3Npb24pIC8vIFVubWFyc2hhbHMgdGhlIGNvbnRlbnQgaW50byBzZXNzaW9uLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJSZWRpcmVjdFwiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuUmVkaXJlY3QoKVwiIC8+IHRvIHJlZGlyZWN0IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uLjwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgc2VuZC5SZWRpcmVjdChjbGllbnQsIFwiL2xvZ2luXCIsIDMwNykgLy8gUmVkaXJlY3RzIHRvIC9sb2dpbi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiTmF2aWdhdGVcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLk5hdmlnYXRlKClcIiAvPiB0byByZWRpcmVjdCB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiB3aXRoIHN0YXR1cyAzMDIuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBzZW5kLk5hdmlnYXRlKGNsaWVudCwgXCIvbG9naW5cIikgLy8gUmVkaXJlY3RzIHRvIC9sb2dpbiB3aXRoIHN0YXR1cyAzMDIuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICB7I3NuaXBwZXQgcmlnaHRTaWRlYmFyKCl9XG4gICAgICAgIDxSaWdodFNpZGViYXJcbiAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJCYXNpY3NcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiU2VydmVyXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlJvdXRlc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJQYXRoIEZpZWxkc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJNZXNzYWdlc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJIZWFkZXJzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlN0YXR1c1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJPcmRlciBvZiBPcGVyYXRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlF1ZXJpZXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiRm9ybXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiSnNvblwiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJDb29raWVzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlNlc3Npb24gSWRcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiU2Vzc2lvblwiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJSZWRpcmVjdFwiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJOYXZpZ2F0ZVwiIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgIHsvc25pcHBldH1cbiAgICB7I3NuaXBwZXQgZm9vdGVyKCl9XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgIHByZXZpb3VzPXt7IGxhYmVsOiBcIkdldCBTdGFydGVkXCIsIGhyZWY6IFwiL2ZyaXp6YW50ZS1kb2NzLXVzaW5nLXNuYXBzaG90cy9nZXRfc3RhcnRlZFwiIH19XG4gICAgICAgICAgICBuZXh0PXt7IGxhYmVsOiBcIldlYiBTb2NrZXRzXCIsIGhyZWY6IFwiL2ZyaXp6YW50ZS1kb2NzLXVzaW5nLXNuYXBzaG90cy93ZWJfc29ja2V0c1wiIH19XG4gICAgICAgIC8+XG4gICAgey9zbmlwcGV0fVxuPC9QYWdlPlxuIl0sIm5hbWVzIjpbIlBhZ2UiLCIkJGFuY2hvciIsIlJpZ2h0U2lkZWJhciIsIkZvb3RlciIsIlRpdGxlIiwibm9kZSIsInNwYW4iLCIkLnNpYmxpbmciLCJJbmxpbmVDb2RlIiwibm9kZV8xIiwibm9kZV8yIiwibm9kZV8zIiwiTm90ZSIsIm5vZGVfNCIsInNwYW5fMSIsInJvb3RfNCIsIkxpbmsiLCJub2RlXzUiLCJub2RlXzYiLCJzcGFuXzIiLCJub2RlXzciLCJDb2RlIiwibm9kZV84Iiwibm9kZV85Iiwic3Bhbl8zIiwibm9kZV8xMCIsIm5vZGVfMTEiLCJzcGFuXzQiLCJub2RlXzEyIiwibm9kZV8xMyIsIm5vZGVfMTQiLCJzcGFuXzUiLCJub2RlXzE2Iiwic3Bhbl82Iiwibm9kZV8xNyIsIm5vZGVfMTgiLCJub2RlXzE5Iiwic3Bhbl83Iiwibm9kZV8yMCIsIm5vZGVfMjEiLCJzcGFuXzgiLCJub2RlXzIyIiwibm9kZV8yMyIsIm5vZGVfMjQiLCJzcGFuXzkiLCJub2RlXzI1Iiwibm9kZV8yNiIsInNwYW5fMTAiLCJub2RlXzI3Iiwibm9kZV8yOCIsIm5vZGVfMjkiLCJzcGFuXzExIiwibm9kZV8zMCIsIm5vZGVfMzEiLCJDYXV0aW9uIiwibm9kZV8zMiIsIm5vZGVfMzMiLCJzcGFuXzEyIiwibm9kZV8zNCIsIm5vZGVfMzUiLCJub2RlXzM2Iiwic3Bhbl8xMyIsIm5vZGVfMzciLCJub2RlXzM4Iiwibm9kZV8zOSIsInNwYW5fMTQiLCJub2RlXzQwIiwibm9kZV80MSIsInNwYW5fMTUiLCJub2RlXzQyIiwibm9kZV80MyIsIm5vZGVfNDQiLCJzcGFuXzE2Iiwibm9kZV80NSIsIm5vZGVfNDYiLCJub2RlXzQ3Iiwibm9kZV80OCIsIm5vZGVfNDkiLCJUaXAiLCJub2RlXzUwIiwic3Bhbl8xNyIsIiQuZmlyc3RfY2hpbGQiLCJmcmFnbWVudF81Iiwibm9kZV81MSIsIm5vZGVfNTIiLCJzcGFuXzE4Iiwibm9kZV81MyIsIm5vZGVfNTQiLCJub2RlXzU1Iiwibm9kZV81NiIsIm5vZGVfNTciLCJub2RlXzU4Iiwic3Bhbl8xOSIsIm5vZGVfNTkiLCJub2RlXzYwIiwibm9kZV82MSIsIm5vZGVfNjIiLCJub2RlXzYzIiwic3Bhbl8yMCIsIm5vZGVfNjQiLCJub2RlXzY1Iiwibm9kZV82NiIsIm5vZGVfNjciLCJzcGFuXzIxIiwibm9kZV82OCIsIm5vZGVfNjkiLCJub2RlXzcwIiwic3Bhbl8yMiIsImZyYWdtZW50XzciLCJub2RlXzcxIiwibm9kZV83MiIsInNwYW5fMjMiLCJyb290XzEwIiwibm9kZV83MyIsIm5vZGVfNzQiLCJzcGFuXzI0Iiwibm9kZV83NSIsIm5vZGVfNzYiLCJub2RlXzc3Iiwibm9kZV83OCIsIm5vZGVfNzkiLCJzcGFuXzI1Iiwibm9kZV84MCIsIm5vZGVfODEiLCJub2RlXzgyIiwic3Bhbl8yNiIsIm5vZGVfODMiLCJub2RlXzg0Il0sIm1hcHBpbmdzIjoiOzs7Ozs2VUFBQSxDQWFDQSxHQUFJQyxHQUFBLGdCQXdkUyxhQUFZQSxHQUFBLENBQ2pCQyxHQUFBRCxFQUFBLFFBRVMsQ0FBQSxNQUFPLEVBQUcsS0FBTSxRQUFRLEVBQ3hCLENBQUEsTUFBTyxFQUFHLEtBQU0sUUFBUSxFQUN4QixDQUFBLE1BQU8sRUFBRyxLQUFNLFFBQVEsRUFDeEIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxhQUFhLEVBQzdCLENBQUEsTUFBTyxFQUFHLEtBQU0sVUFBVSxFQUMxQixDQUFBLE1BQU8sRUFBRyxLQUFNLFNBQVMsRUFDekIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxRQUFRLEVBQ3hCLENBQUEsTUFBTyxFQUFHLEtBQU0scUJBQXFCLEVBQ3JDLENBQUEsTUFBTyxFQUFHLEtBQU0sU0FBUyxFQUN6QixDQUFBLE1BQU8sRUFBRyxLQUFNLE9BQU8sRUFDdkIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxNQUFNLEVBQ3RCLENBQUEsTUFBTyxFQUFHLEtBQU0sU0FBUyxFQUN6QixDQUFBLE1BQU8sRUFBRyxLQUFNLFlBQVksRUFDNUIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxTQUFTLEVBQ3pCLENBQUEsTUFBTyxFQUFHLEtBQU0sVUFBVSxFQUMxQixDQUFBLE1BQU8sRUFBRyxLQUFNLFVBQVUsTUFJOUIsT0FBTUEsR0FBQSxDQUNYRSxHQUFBRixFQUFBLFdBQ2UsTUFBTyxjQUFlLEtBQU0scURBQ2hDLE1BQU8sY0FBZSxLQUFNLHNGQWhmM0NHLEVBQUtDLEVBQUEs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
