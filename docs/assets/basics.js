import{p as fs,f as d,a as m,s as e,e as n,b as l,c as _s,g as _,d as h,t as hs}from"./index-ZgLDBmk7.js";import{i as ws,L as bs,b as w}from"./navbar.js";import{C as De}from"./caution.js";import{C as r}from"./code.js";import{P as Ss,T as a,R as ks,F as xs}from"./right_sidebar.js";import{I as s}from"./inline_code.js";import{N as b}from"./note.js";import{T as Ee}from"./tip.js";var Cs=d("<span>Please <!> such incidents if you can.</span>"),ys=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>',1),Rs=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Ps=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),$s=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Ts=d(`<span>Since <!> might send a cookie to the client, it is important to remember
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvdmlld3MvYmFzaWNzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAgIGltcG9ydCBDYXV0aW9uIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY2F1dGlvbi5zdmVsdGVcIlxuICAgIGltcG9ydCBDb2RlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY29kZS5zdmVsdGVcIlxuICAgIGltcG9ydCBGb290ZXIgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgSW5saW5lQ29kZSBmcm9tIFwiJGxpYi9jb21wb25lbnRzL2lubGluZV9jb2RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IExpbmsgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9saW5rcy9saW5rLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IE5vdGUgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9ub3RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFBhZ2UgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9wYWdlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFJpZ2h0U2lkZWJhciBmcm9tIFwiJGxpYi9jb21wb25lbnRzL3JpZ2h0X3NpZGViYXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgVGlwIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGlwLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFRpdGxlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGl0bGUuc3ZlbHRlXCJcbiAgICBpbXBvcnQgeyBiYXNlIH0gZnJvbSBcIiRsaWIvc2NyaXB0cy9iYXNlXCJcbjwvc2NyaXB0PlxuXG48UGFnZSB0aXRsZT1cIkJhc2ljc1wiPlxuICAgIDxUaXRsZSB0ZXh0PVwiQmFzaWNzXCIgLz5cbiAgICA8c3Bhbj4gQWxsIGludGVybmFscyBvZiB0aGUgZnJhbWV3b3JrIGFyZSBleHBvc2VkIGludGVudGlvbmFsbHkuIDwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgRm9yIGV4YW1wbGUgdGhlIGZyaXp6YW50ZSA8YSBocmVmPVwiI3NlcnZlclwiPnNlcnZlcjwvYT4gaXMgYSB3cmFwcGVyIGFyb3VuZFxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJuZXQvaHR0cC5TZXJ2ZXJcIiAvPiBhbmQgYSBmcml6emFudGUgPGEgaHJlZj1cIiNtZXNzYWdlc1wiPmNsaWVudDwvYT4gaXMgYSB3cmFwcGVyIGFyb3VuZFxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJuZXQvaHR0cC5SZXF1ZXN0XCIgLz4gYW5kIDxJbmxpbmVDb2RlIHNvdXJjZT1cIm5ldC9odHRwLlJlc3BvbnNlV3JpdGVyXCIgLz4uXG4gICAgPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxzcGFuPlxuICAgICAgICBZb3UgY2FuIGludGVyYWN0IHdpdGggdGhlc2UgaW50ZXJuYWxzIGFuZCB5b3UgYXJlLCBpbiBmYWN0LCBpbnRlbmRlZCB0byBkbyBzbyB3aGVuZXZlciB0aGUgZnJhbWV3b3JrIGlzXG4gICAgICAgIGluc3VmZmljaWVudCwgeW91J3JlIGhpdHRpbmcgYSBwZXJmb3JtYW5jZSB3YWxsLCBhIGJ1ZyBhbmQgc28gb24uXG4gICAgPC9zcGFuPlxuICAgIDxOb3RlPlxuICAgICAgICA8c3Bhbj5QbGVhc2UgPExpbmsgaHJlZj17YmFzZShcIi9pc3N1ZXNcIil9PnJlcG9ydDwvTGluaz4gc3VjaCBpbmNpZGVudHMgaWYgeW91IGNhbi48L3NwYW4+XG4gICAgPC9Ob3RlPlxuICAgIDxUaXRsZSB0ZXh0PVwiU2VydmVyXCIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgQ3JlYXRlIGEgbmV3IHNlcnZlciB3aXRoIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlcnZlcnMuTmV3KClcIiAvPiwgdGhlbiBmb2xsb3d1cCB3aXRoIHNlcnZlcnMuU3RhcnQoKSBpbiBvcmRlciB0b1xuICAgICAgICBzdGFydCBhIHNlcnZlci5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIG1haW5cblxuICAgICAgICAgICAgaW1wb3J0IFwibWFpbi9saWIvY29yZS9zZXJ2ZXJzXCJcblxuICAgICAgICAgICAgdmFyIHNlcnZlciA9IHNlcnZlcnMuTmV3KCkgICAgICAvLyBDcmVhdGVzIHNlcnZlci5cblxuICAgICAgICAgICAgZnVuYyBtYWluKCkge1xuICAgICAgICAgICAgICAgIGRlZmVyIHNlcnZlcnMuU3RhcnQoc2VydmVyKSAvLyBTdGFydHMgc2VydmVyLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJSb3V0ZXNcIiAvPlxuICAgIDxzcGFuPkVhY2ggc2VydmVyIGV4cG9zZXMgYSBzbGljZSBvZiBSb3V0ZXMgd2hpY2ggeW91IGNhbiBmcmVlbHkgbW9kaWZ5Ljwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8c3Bhbj5Zb3UgY2FuIGFkZCBhIG5ldyByb3V0ZSBieSBhcHBlbmRpbmcgdG8gb3Igb3ZlcndyaXRpbmcgPElubGluZUNvZGUgc291cmNlPVwic2VydmVyLlJvdXRlc1wiIC8+Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2UgbWFpblxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZXJ2ZXJzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL3JvdXRlcy93ZWxjb21lXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdmFyIHNlcnZlciA9IHNlcnZlcnMuTmV3KCkgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBzZXJ2ZXIuXG5cbiAgICAgICAgICAgIGZ1bmMgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBkZWZlciBzZXJ2ZXJzLlN0YXJ0KHNlcnZlcikgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgc2VydmVyLlJvdXRlcyA9IFtdcm91dGVzLlJvdXRleyAgICAgICAgICAgICAgICAvLyBPdmVyd3JpdGVzIHJvdXRlcy5cbiAgICAgICAgICAgICAgICAgICAge1BhdHRlcm46IFwiR0VUIC9cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fSwgLy8gQWRkcyByb3V0ZS5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5XaGVyZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJ3ZWxjb21lLlZpZXdcIiAvPiBpcyBhIGZ1bmN0aW9uIHBvaW50ZXIuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7fVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJQYXRoIEZpZWxkc1wiIC8+XG4gICAgPHNwYW4+Um91dGUgcGF0dGVybnMgY2FuIGRlZmluZSBkeW5hbWljIHBhdGggZmllbGRzIHVzaW5nIDxJbmxpbmVDb2RlIHNvdXJjZT17XCJ7fVwifSAvPiBzeW50YXguPC9zcGFuPlxuICAgIDxDb2RlIGxhbmc9XCJnb1wiIHNvdXJjZT17YHJvdXRlcy5Sb3V0ZXtQYXR0ZXJuOiBcIkdFVCAve25hbWV9XCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31gfSAvPlxuICAgIDxzcGFuPlBhdGggZmllbGRzIGNhbiB0aGVuIGJlIHJldHJpZXZlZCB3aXRoIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuUGF0aCgpXCIgLz4uPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBfID0gcmVjZWl2ZS5QYXRoKGNsaWVudCwgXCJuYW1lXCIpIC8vIFJldHJpZXZlcyBmaWVsZCBcIm5hbWVcIi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiTWVzc2FnZXNcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLk1lc3NhZ2UoKVwiIC8+IHRvIHJldHJpZXZlIG1lc3NhZ2VzIHNlbnQgYnkgdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIF8gPSByZWNlaXZlLk1lc3NhZ2UoY2xpZW50KSAvLyBSZXRyaWV2ZXMgbWVzc2FnZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLk1lc3NhZ2UoKVwiIC8+IHRvIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBzZW5kLk1lc3NhZ2UoY2xpZW50LCBcIkhlbGxvLlwiKSAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJIZWFkZXJzXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5IZWFkZXIoKVwiIC8+IHRvIHJldHJpZXZlIGhlYWRlciBmaWVsZHMgc2VudCBieSB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgXyA9IHJlY2VpdmUuSGVhZGVyKGNsaWVudCwgXCJBY2NlcHRcIikgLy8gUmV0cmlldmVzIGZpZWxkIFwiQWNjZXB0XCIuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5IZWFkZXIoKVwiIC8+IHRvIHNlbmQgaGVhZGVyIGZpZWxkcyB0byB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIGFjY2VwdCA6PSByZWNlaXZlLkhlYWRlcihjbGllbnQsIFwiQWNjZXB0XCIpICAvLyBSZXRyaWV2ZXMgZmllbGQgXCJBY2NlcHRcIi5cbiAgICAgICAgICAgICAgICBzZW5kLkhlYWRlcihjbGllbnQsIFwiQ29udGVudC1UeXBlXCIsIGFjY2VwdCkgLy8gU2VuZHMgaXQgYmFjay5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiU3RhdHVzXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5TdGF0dXMoKVwiIC8+IHRvIHNlbmQgdGhlIHN0YXR1cyBvZiB0aGUgcmVzcG9uc2UgdG8gdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHNlbmQuU3RhdHVzKGNsaWVudCwgNDA0KSAgICAgICAgICAgLy8gU2VuZHMgc3RhdHVzIDQwNC5cbiAgICAgICAgICAgICAgICBzZW5kLk1lc3NhZ2UoY2xpZW50LCBcIk5vdCBmb3VuZC5cIikgLy8gU2VuZHMgbWVzc2FnZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxDYXV0aW9uPlxuICAgICAgICA8c3Bhbj5TZW5kaW5nIGhlYWRlciBmaWVsZHMgb3Igc3RhdHVzIGFmdGVyIHNlbmRpbmcgb3V0IGNvbnRlbnQgaXMgbm90IGFsbG93ZWQuPC9zcGFuPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNwYW4+UmVhZCA8YSBocmVmPVwiI29yZGVyLW9mLW9wcmF0aW9uc1wiPmJlbG93PC9hPi48L3NwYW4+XG4gICAgPC9DYXV0aW9uPlxuICAgIDxUaXRsZSB0ZXh0PVwiT3JkZXIgb2YgT3BlcmF0aW9uc1wiIC8+XG4gICAgPHNwYW4+T3JkZXIgb2Ygb3BlcmF0aW9ucyBtYXR0ZXJzIHdoZW4gc2VuZGluZyBkYXRhIHRvIHRoZSBjbGllbnQuPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxzcGFuPlxuICAgICAgICBGb3IgZXhhbXBsZSwgc2VuZGluZyB0aGUgc3RhdHVzIGNvZGUgd2l0aCA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLlN0YXR1cygpXCIgLz5cbiAgICAgICAgYWZ0ZXIgeW914oCZdmUgYWxyZWFkeSBzZW50IGNvbnRlbnQgd2l0aCA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLk1lc3NhZ2UoKVwiIC8+XG4gICAgICAgIGlzIG5vdCBhbGxvd2VkLlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsby5cIikgLy8gU2VuZHMgbWVzc2FnZSAoU3VjY2VlZHMpLlxuICAgICAgICAgICAgICAgIHNlbmQuU3RhdHVzKGNsaWVudCwgNDA0KSAgICAgICAvLyBTZW5kcyBzdGF0dXMgKEZhaWxzKS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxzcGFuPlxuICAgICAgICA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLlN0YXR1cyhjbGllbnQsIDQwNClcIiAvPiB3aWxsIGZhaWwgYW5kIHRoZSBjbGllbnQgd2lsbCByZWNlaXZlIHN0YXR1cyAyMDAgaW5zdGVhZCBvZiA0MDQuXG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJodHRwXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBIVFRQLzEuMSAyMDAgT0tcbiAgICAgICAgICAgIERhdGU6IFN1biwgMjUgTWF5IDIwMjUgMDI6MDA6MzcgR01UXG4gICAgICAgICAgICBDb250ZW50LUxlbmd0aDogNlxuICAgICAgICAgICAgQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XG5cbiAgICAgICAgICAgIEhlbGxvLlxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPHNwYW4+VGhlIGZhaWx1cmUgaXMgbG9nZ2VkIHRvIHRoZSBzZXJ2ZXLigJlzIGVycm9yIGxvZ2dlci48L3NwYW4+XG4gICAgPGJyIC8+XG4gICAgPHNwYW4+XG4gICAgICAgIEFzc3VtaW5nIHlvdeKAmXJlIHVzaW5nIHRoZSBkZWZhdWx0IGVycm9yIGxvZ2dlciwgeW914oCZbGwgc2VlIGFuIGVycm9yIG9mIHNvcnRzIGluIHlvdXIgPHN0cm9uZz5jb25zb2xlPC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJsb2dcIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIGxpc3RlbmluZyBmb3IgcmVxdWVzdHMgYXQgaHR0cDovLzEyNy4wLjAuMTo4MDgwXG4gICAgICAgICAgICBzdGF0dXMgaXMgbG9ja2VkXG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwic3RhdHVzIGlzIGxvY2tlZFwiIC8+LCBtZWFuaW5nIHRoZSBzdGF0dXMgY29kZSBoYXMgYWxyZWFkeSBiZWVuIHNlbnQgdG8gdGhlIGNsaWVudCBhbmRcbiAgICAgICAgdGhlcmXigJlzIG5vdGhpbmcgeW91IGNhbiBkbyBhYm91dCBpdC5cbiAgICA8L3NwYW4+XG4gICAgPFRpdGxlIHRleHQ9XCJRdWVyaWVzXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5RdWVyeSgpXCIgLz4gdG8gcmV0cmlldmUgcXVlcnkgZmllbGRzLjwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIG5hbWUgOj0gcmVjZWl2ZS5RdWVyeShjbGllbnQsIFwibmFtZVwiKSAvLyBSZXRyaWV2ZXMgZmllbGQgXCJuYW1lXCIuXG4gICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsbyBcIiArIG5hbWUpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIkZvcm1zXCIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgVXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuRm9ybSgpXCIgLz4gdG8gcGFyc2UgaW5jb21pbmcgY29udGVudCBhcyBtdWx0aXBhcnQgZm9ybSBvciB1cmwgZW5jb2RlZCBmb3JtIHdoZW4gdXNpbmdcbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwiUE9TVFwiIC8+IGFuZCA8SW5saW5lQ29kZSBzb3VyY2U9XCJHRVRcIiAvPiBodHRwIHZlcmJzLlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHJvdXRlcy5Sb3V0ZXtQYXR0ZXJuOiBcIlBPU1QgL1wiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9XG4gICAgICAgICAgICAvLyBvclxuICAgICAgICAgICAgcm91dGVzLlJvdXRle1BhdHRlcm46IFwiR0VUIC9cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9zZW5kXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdHlwZSBGb3JtIHN0cnVjdCB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZpbmVzIGEgc3RydWN0IGluIHdoaWNoIHRvXG4gICAgICAgICAgICAgICAgTmFtZSBzdHJpbmcgXFxgZm9ybTpcIm5hbWVcIlxcYCAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBmb3JtIGNvbnRlbnQuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gRm9ybVxuICAgICAgICAgICAgICAgIHJlY2VpdmUuRm9ybShjbGllbnQsICZmb3JtKSAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZXMgZm9ybS5cbiAgICAgICAgICAgICAgICBzZW5kLk1lc3NhZ2UoY2xpZW50LCBcIkhlbGxvIFwiICsgZm9ybS5OYW1lKSAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpcD5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gdXNlIGEgPElubGluZUNvZGUgc291cmNlPVwianNvblwiIC8+IHRhZywgaXQgd2lsbCBtYXRjaCB0aGUgZmllbGQgY29ycmVjdGx5IGFzIGlmIGl0IHdlcmUgYVxuICAgICAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwiZm9ybVwiIC8+IHRhZy5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBUaGlzIGlzIHNvIHRoYXQgeW91IGNhbiBpbnRlZ3JhdGUgeW91ciBzdHJ1Y3RzIG1vcmUgZWFzaWx5IHdpdGggb3RoZXIgbGlicmFyaWVzIHRoYXQgb25seSB0YWtlIGludG8gYWNjb3VudFxuICAgICAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwianNvblwiIC8+IGZvcm1hdHMuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L1RpcD5cbiAgICA8VGlwPlxuICAgICAgICA8c3Bhbj5Gb3JtIHN0cnVjdHMgY2FuIGRlZmluZSBzbGljZXMgYW5kIGZpbGVzLjwvc3Bhbj5cbiAgICAgICAgPENvZGVcbiAgICAgICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgICAgICB0eXBlIEZvcm0gc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZSAgICAgc3RyaW5nICAgICAgICAgICAgICAgXFxgZm9ybTpcIm5hbWVcIlxcYFxuICAgICAgICAgICAgICAgICAgICBDb21tZW50cyBbXXN0cmluZyAgICAgICAgICAgICBcXGBmb3JtOlwiY29tbWVudHNcIlxcYCAvLyBzbGljZSBvZiBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAgIEZpbGUgICAgIG11bHRpcGFydC5GaWxlSGVhZGVyIFxcYGZvcm06XCJmaWxlXCJcXGAgICAgIC8vIGZpbGUgaGFuZGxlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuPllvdSBjYW4gb3BlbiBhbmQgcmVhZCB0aGUgZmlsZS48L3NwYW4+XG4gICAgICAgIDxDb2RlXG4gICAgICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICAgICAgc3JjLCBfIDo9IGZvcm0uRmlsZS5PcGVuKClcbiAgICAgICAgICAgICAgICBkc3QsIF8gOj0gb3MuQ3JlYXRlKFwibXktZmlsZS50eHRcIilcbiAgICAgICAgICAgICAgICBpby5Db3B5KHNyYywgZHN0KVxuICAgICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+UmVtZW1iZXIgdG8gY2xvc2UgeW91ciBmaWxlcy48L3NwYW4+XG4gICAgICAgIDxDb2RlXG4gICAgICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICAgICAgZGVmZXIgc3JjLkNsb3NlKClcbiAgICAgICAgICAgICAgICBkZWZlciBkc3QuQ2xvc2UoKVxuICAgICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICA8L1RpcD5cbiAgICA8VGl0bGUgdGV4dD1cIkpzb25cIiAvPlxuICAgIDxzcGFuPlxuICAgICAgICBVc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5Kc29uKClcIiAvPiB0byBwYXJzZSBpbmNvbWluZyBjb250ZW50IGFzIGpzb24gd2hlbiB1c2luZyBQT1NUIGFuZCBQVVQgaHR0cCB2ZXJicyBhbmRcbiAgICAgICAgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5Kc29uKClcIiAvPiB0byBzZW5kIGpzb24gY29udGVudC5cbiAgICA8L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICByb3V0ZXMuUm91dGV7UGF0dGVybjogXCJQT1NUIC9cIiwgSGFuZGxlcjogd2VsY29tZS5WaWV3fVxuICAgICAgICAgICAgLy8gb3JcbiAgICAgICAgICAgIHJvdXRlcy5Sb3V0ZXtQYXR0ZXJuOiBcIlBVVCAvXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHR5cGUgR3JlZXRpbmdEZXRhaWxzIHN0cnVjdCB7ICAgICAgLy8gRGVmaW5lcyBhIHN0cnVjdCBpbiB3aGljaCB0b1xuICAgICAgICAgICAgICAgIE5hbWUgc3RyaW5nIFxcYGpzb246XCJuYW1lXCJcXGAgICAgICAvLyBzdG9yZSB0aGUganNvbiBjb250ZW50LlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzIEdyZWV0aW5nRGV0YWlscyAgICAvLyBDcmVhdGVzIGEgemVybyB2YWx1ZS5cbiAgICAgICAgICAgICAgICByZWNlaXZlLkpzb24oY2xpZW50LCAmZGV0YWlscykgLy8gVW5tYXJzaGFscyB0aGUgY29udGVudCBpbnRvIGRldGFpbHMuXG4gICAgICAgICAgICAgICAgc2VuZC5Kc29uKGNsaWVudCwgZGV0YWlscykgICAgIC8vIFNlbmRzIGNvbnRlbnQgYmFjayBhcyBqc29uLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJDb29raWVzXCIgLz5cbiAgICA8c3Bhbj5cbiAgICAgICAgVXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuQ29va2llKClcIiAvPiB0byByZXRyaWV2ZSBjb29raWVzIGFuZCA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLkNvb2tpZSgpXCIgLz4gdG8gc2VuZFxuICAgICAgICB0aGVtLlxuICAgIDwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDo9IHJlY2VpdmUuQ29va2llKGNsaWVudCwgXCJuaWNrbmFtZVwiKSAvLyBSZXRyaWV2ZXMgY29va2llLlxuICAgICAgICAgICAgICAgIHNlbmQuQ29va2llKGNsaWVudCwgXCJuaWNrbmFtZVwiLCBuaWNrbmFtZSkgICAgICAvLyBTZW5kcyBpdCBiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgPFRpdGxlIHRleHQ9XCJTZXNzaW9uIElkXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5TZXNzaW9uSWQoKVwiIC8+IHRvIHJldHJpZXZlIHRoZSBjbGllbnTigJlzIHNlc3Npb24gaWQuPC9zcGFuPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBfID0gcmVjZWl2ZS5TZXNzaW9uSWQoY2xpZW50KSAvLyBSZXRyaWV2ZXMgc2Vzc2lvbiBpZC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxOb3RlPlxuICAgICAgICA8c3Bhbj5UaGUgc2Vzc2lvbiBpZCBpcyByZXRyaWV2ZWQgZnJvbSB0aGUgY2xpZW504oCZcyBzZXNzaW9uLWlkIGNvb2tpZS48L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgSWYgdGhlIGNsaWVudCBkb2VzbuKAmXQgcHJvdmlkZSBzdWNoIGNvb2tpZSwgPElubGluZUNvZGUgc291cmNlPVwicmVjZWl2ZS5TZXNzaW9uSWQoKVwiIC8+XG4gICAgICAgICAgICBjcmVhdGVzIGEgbmV3IHNlc3Npb24gaWQgYW5kIHNlbmRzIHRoZSBjb29raWUgdG8gdGhlIGNsaWVudC5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvTm90ZT5cbiAgICA8Q2F1dGlvbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBTaW5jZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJyZWNlaXZlLlNlc3Npb25JZCgpXCIgLz4gbWlnaHQgc2VuZCBhIGNvb2tpZSB0byB0aGUgY2xpZW50LCBpdCBpcyBpbXBvcnRhbnQgdG8gcmVtZW1iZXJcbiAgICAgICAgICAgIHRoYXQgb3JkZXIgb2Ygb3BlcmF0aW9ucyBtYXR0ZXJzLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9DYXV0aW9uPlxuICAgIDxUaXRsZSB0ZXh0PVwiU2Vzc2lvblwiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuU2Vzc2lvbigpXCIgLz4gdG8gcmV0cmlldmUgdGhlIGNsaWVudOKAmXMgc2Vzc2lvbi48L3NwYW4+XG4gICAgPE5vdGU+VGhlIHNlc3Npb24gaXMgcmV0cmlldmVkIHVzaW5nIDxJbmxpbmVDb2RlIHNvdXJjZT1cInJlY2VpdmUuU2Vzc2lvbklkKClcIiAvPi48L05vdGU+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3JlY2VpdmVcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXNzaW9uICpzZXNzaW9ucy5TZXNzaW9uICAgICAgICAgLy8gQ3JlYXRlcyBhIHplcm8gdmFsdWUuXG4gICAgICAgICAgICAgICAgXyA9IHJlY2VpdmUuU2Vzc2lvbihjbGllbnQsICZzZXNzaW9uKSAvLyBVbm1hcnNoYWxzIHRoZSBjb250ZW50IGludG8gc2Vzc2lvbi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAvPlxuICAgIDxUaXRsZSB0ZXh0PVwiUmVkaXJlY3RcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLlJlZGlyZWN0KClcIiAvPiB0byByZWRpcmVjdCB0byBhIGRpZmZlcmVudCBsb2NhdGlvbi48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cImdvXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBwYWNrYWdlIHdlbGNvbWVcblxuICAgICAgICAgICAgaW1wb3J0IChcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmdW5jIFZpZXcoY2xpZW50ICpjbGllbnRzLkNsaWVudCkge1xuICAgICAgICAgICAgICAgIHNlbmQuUmVkaXJlY3QoY2xpZW50LCBcIi9sb2dpblwiLCAzMDcpIC8vIFJlZGlyZWN0cyB0byAvbG9naW4uXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8VGl0bGUgdGV4dD1cIk5hdmlnYXRlXCIgLz5cbiAgICA8c3Bhbj5Vc2UgPElubGluZUNvZGUgc291cmNlPVwic2VuZC5OYXZpZ2F0ZSgpXCIgLz4gdG8gcmVkaXJlY3QgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gd2l0aCBzdGF0dXMgMzAyLjwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgc2VuZC5OYXZpZ2F0ZShjbGllbnQsIFwiL2xvZ2luXCIpIC8vIFJlZGlyZWN0cyB0byAvbG9naW4gd2l0aCBzdGF0dXMgMzAyLlxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgIC8+XG4gICAgeyNzbmlwcGV0IHJpZ2h0U2lkZWJhcigpfVxuICAgICAgICA8UmlnaHRTaWRlYmFyXG4gICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiQmFzaWNzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlNlcnZlclwiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJSb3V0ZXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiUGF0aCBGaWVsZHNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiTWVzc2FnZXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiSGVhZGVyc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJTdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiT3JkZXIgb2YgT3BlcmF0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJRdWVyaWVzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIkZvcm1zXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIkpzb25cIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiQ29va2llc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzaGlmdDogMCwgdGV4dDogXCJTZXNzaW9uIElkXCIgfSxcbiAgICAgICAgICAgICAgICB7IHNoaWZ0OiAwLCB0ZXh0OiBcIlNlc3Npb25cIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiUmVkaXJlY3RcIiB9LFxuICAgICAgICAgICAgICAgIHsgc2hpZnQ6IDAsIHRleHQ6IFwiTmF2aWdhdGVcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICB7L3NuaXBwZXR9XG4gICAgeyNzbmlwcGV0IGZvb3RlcigpfVxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBwcmV2aW91cz17eyBsYWJlbDogXCJHZXQgU3RhcnRlZFwiLCBocmVmOiBiYXNlKFwiL2dldF9zdGFydGVkXCIpIH19XG4gICAgICAgICAgICBuZXh0PXt7IGxhYmVsOiBcIldlYiBTb2NrZXRzXCIsIGhyZWY6IGJhc2UoXCIvd2ViX3NvY2tldHNcIikgfX1cbiAgICAgICAgLz5cbiAgICB7L3NuaXBwZXR9XG48L1BhZ2U+XG4iXSwibmFtZXMiOlsiUGFnZSIsIiQkYW5jaG9yIiwiUmlnaHRTaWRlYmFyIiwiJDAiLCIkLmRlcml2ZWRfc2FmZV9lcXVhbCIsImJhc2UiLCIkMSIsIkZvb3RlciIsIlRpdGxlIiwibm9kZSIsInNwYW4iLCIkLnNpYmxpbmciLCJJbmxpbmVDb2RlIiwibm9kZV8xIiwibm9kZV8yIiwibm9kZV8zIiwiTm90ZSIsIm5vZGVfNCIsInNwYW5fMSIsInJvb3RfNCIsIkxpbmsiLCJub2RlXzUiLCJub2RlXzYiLCJzcGFuXzIiLCJub2RlXzciLCJDb2RlIiwibm9kZV84Iiwibm9kZV85Iiwic3Bhbl8zIiwibm9kZV8xMCIsIm5vZGVfMTEiLCJzcGFuXzQiLCJub2RlXzEyIiwibm9kZV8xMyIsIm5vZGVfMTQiLCJzcGFuXzUiLCJub2RlXzE2Iiwic3Bhbl82Iiwibm9kZV8xNyIsIm5vZGVfMTgiLCJub2RlXzE5Iiwic3Bhbl83Iiwibm9kZV8yMCIsIm5vZGVfMjEiLCJzcGFuXzgiLCJub2RlXzIyIiwibm9kZV8yMyIsIm5vZGVfMjQiLCJzcGFuXzkiLCJub2RlXzI1Iiwibm9kZV8yNiIsInNwYW5fMTAiLCJub2RlXzI3Iiwibm9kZV8yOCIsIm5vZGVfMjkiLCJzcGFuXzExIiwibm9kZV8zMCIsIm5vZGVfMzEiLCJDYXV0aW9uIiwibm9kZV8zMiIsIm5vZGVfMzMiLCJzcGFuXzEyIiwibm9kZV8zNCIsIm5vZGVfMzUiLCJub2RlXzM2Iiwic3Bhbl8xMyIsIm5vZGVfMzciLCJub2RlXzM4Iiwibm9kZV8zOSIsInNwYW5fMTQiLCJub2RlXzQwIiwibm9kZV80MSIsInNwYW5fMTUiLCJub2RlXzQyIiwibm9kZV80MyIsIm5vZGVfNDQiLCJzcGFuXzE2Iiwibm9kZV80NSIsIm5vZGVfNDYiLCJub2RlXzQ3Iiwibm9kZV80OCIsIm5vZGVfNDkiLCJUaXAiLCJub2RlXzUwIiwic3Bhbl8xNyIsIiQuZmlyc3RfY2hpbGQiLCJmcmFnbWVudF81Iiwibm9kZV81MSIsIm5vZGVfNTIiLCJzcGFuXzE4Iiwibm9kZV81MyIsIm5vZGVfNTQiLCJub2RlXzU1Iiwibm9kZV81NiIsIm5vZGVfNTciLCJub2RlXzU4Iiwic3Bhbl8xOSIsIm5vZGVfNTkiLCJub2RlXzYwIiwibm9kZV82MSIsIm5vZGVfNjIiLCJub2RlXzYzIiwic3Bhbl8yMCIsIm5vZGVfNjQiLCJub2RlXzY1Iiwibm9kZV82NiIsIm5vZGVfNjciLCJzcGFuXzIxIiwibm9kZV82OCIsIm5vZGVfNjkiLCJub2RlXzcwIiwic3Bhbl8yMiIsImZyYWdtZW50XzciLCJub2RlXzcxIiwibm9kZV83MiIsInNwYW5fMjMiLCJyb290XzEwIiwibm9kZV83MyIsIm5vZGVfNzQiLCJzcGFuXzI0Iiwibm9kZV83NSIsIm5vZGVfNzYiLCJub2RlXzc3Iiwibm9kZV83OCIsIm5vZGVfNzkiLCJzcGFuXzI1Iiwibm9kZV84MCIsIm5vZGVfODEiLCJub2RlXzgyIiwic3Bhbl8yNiIsIm5vZGVfODMiLCJub2RlXzg0Il0sIm1hcHBpbmdzIjoiOzs7OztnVkFBQSxnQkFjQ0EsR0FBSUMsR0FBQSxnQkF3ZFMsYUFBWUEsR0FBQSxDQUNqQkMsR0FBQUQsRUFBQSxRQUVTLENBQUEsTUFBTyxFQUFHLEtBQU0sUUFBUSxFQUN4QixDQUFBLE1BQU8sRUFBRyxLQUFNLFFBQVEsRUFDeEIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxRQUFRLEVBQ3hCLENBQUEsTUFBTyxFQUFHLEtBQU0sYUFBYSxFQUM3QixDQUFBLE1BQU8sRUFBRyxLQUFNLFVBQVUsRUFDMUIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxTQUFTLEVBQ3pCLENBQUEsTUFBTyxFQUFHLEtBQU0sUUFBUSxFQUN4QixDQUFBLE1BQU8sRUFBRyxLQUFNLHFCQUFxQixFQUNyQyxDQUFBLE1BQU8sRUFBRyxLQUFNLFNBQVMsRUFDekIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxPQUFPLEVBQ3ZCLENBQUEsTUFBTyxFQUFHLEtBQU0sTUFBTSxFQUN0QixDQUFBLE1BQU8sRUFBRyxLQUFNLFNBQVMsRUFDekIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxZQUFZLEVBQzVCLENBQUEsTUFBTyxFQUFHLEtBQU0sU0FBUyxFQUN6QixDQUFBLE1BQU8sRUFBRyxLQUFNLFVBQVUsRUFDMUIsQ0FBQSxNQUFPLEVBQUcsS0FBTSxVQUFVLE1BSTlCLE9BQU1BLEdBQUEsRUFFSSxJQUFBRSxFQUFBQyxFQUFBLEtBQUEsQ0FBQSxNQUFPLGNBQWUsS0FBTUMsRUFBSyxjQUFjLENBQUEs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
