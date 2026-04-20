import{p as _r,f as d,a as p,s as e,h as s,b as l,c as wr,g as De,u as Ee}from"./index-B3gjky_M.js";import{a as br,h as Sr,b as h}from"./navbar.js";import{C as _}from"./caution.js";import{C as n}from"./code.js";import{P as xr,T as i,R as kr,F as yr}from"./right_sidebar.js";import{I as r}from"./inline_code.js";import{N as w}from"./note.js";import{T as b}from"./tip.js";var Cr=d("<span>Please <a>report</a> such incidents if you can.</span>"),Rr=d(`<span>The first parameter of <!> indicates how many runtimes should be created and executed
            in parallel when rendering views.</span> <br/> <span>Setting this value too high could lead to unnecessary large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime is more than enough. Modify based on actual performance
            measurements.</span>`,1),Pr=d("<span>If you don't plan to use SSR features then create your render function using <!> instead.</span> <!> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>",1),Tr=d('<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-operations">below</a>.</span>',1),Vr=d("<span>You can also use a <!> tag, it will match the field correctly as if it were a <!> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account <!> formats.</span>",1),Hr=d("<span>Form structs can define slices and files.</span> <!> <span>You can open and read the file.</span> <!> <span>Remember to close your files.</span> <!>",1),Fr=d("<span>The session id is retrieved from the client’s session-id cookie.</span> <span>If the client doesn’t provide such cookie, <!> creates a new session id and sends the cookie to the client.</span>",1),Nr=d(`<span>Since <!> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`),Ur=d("The session is retrieved using <!>.",1),Mr=d(`<!> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around <!> and a frizzante <a href="#messages">client</a> is a wrapper around <!> and <!>.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> <!> <!> <span>Create a new server with <!>, then followup with servers.Start() in order to
        start a server.</span> <!> <!> <!> <!> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting <!>.</span> <!> <span>Where <!> is a function pointer.</span> <!> <!> <span>Route patterns can define dynamic path fields using <!> syntax.</span> <!> <span>Path fields can then be retrieved with <!>.</span> <!> <!> <span>Use <!> to retrieve messages sent by the client.</span> <!> <span>Use <!> to send a message to the client.</span> <!> <!> <span>Use <!> to retrieve header fields sent by the client.</span> <!> <span>Use <!> to send header fields to the client.</span> <!> <!> <span>Use <!> to send the status of the response to the client.</span> <!> <!> <!> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with <!> after you’ve already sent content with <!> is not allowed.</span> <!> <span><!> will fail and the client will receive status 200 instead of 404.</span> <!> <span>The failure is logged to the server’s error logger.</span> <br/> <span>Assuming you’re using the default error logger, you’ll see an error of sorts in your <strong>console</strong></span> <!> <span><!>, meaning the status code has already been sent to the client and
        there’s nothing you can do about it.</span> <!> <span>Use <!> to retrieve query fields.</span> <!> <!> <span>Use <!> to parse incoming content as multipart form or url encoded form when using <!> and <!> http verbs.</span> <!> <!> <!> <!> <!> <span>Use <!> to parse incoming content as json when using POST and PUT http verbs and <!> to send json content.</span> <!> <!> <!> <span>Use <!> to retrieve cookies and <!> to send
        them.</span> <!> <!> <span>Use <!> to retrieve the client’s session id.</span> <!> <!> <!> <!> <span>Use <!> to retrieve the client’s session.</span> <!> <!> <!> <span>Use <!> to redirect to a different location.</span> <!> <!> <span>Use <!> to redirect to a different location with status 302.</span> <!>`,1);function Er(Qe,u){_r(u,!0),xr(Qe,{title:"Basics",get prefix(){return u.prefix},rightSidebar:m=>{kr(m,{items:[{shift:0,text:"Basics"},{shift:0,text:"Server"},{shift:0,text:"Routes"},{shift:0,text:"Path Fields"},{shift:0,text:"Messages"},{shift:0,text:"Headers"},{shift:0,text:"Status"},{shift:0,text:"Order of Operations"},{shift:0,text:"Queries"},{shift:0,text:"Forms"},{shift:0,text:"Json"},{shift:0,text:"Cookies"},{shift:0,text:"Session Id"},{shift:0,text:"Session"},{shift:0,text:"Redirect"},{shift:0,text:"Navigate"}]})},footer:m=>{{let S=Ee(()=>({label:"Get Started",href:h("/get_started",{prefix:u.prefix})})),g=Ee(()=>({label:"Web Sockets",href:h("/web_sockets",{prefix:u.prefix})}));yr(m,{get previous(){return De(S)},get next(){return De(g)}})}},children:(m,S)=>{var g=Mr(),x=p(g);i(x,{text:"Basics"});var k=e(x,8),y=e(s(k),3);r(y,{source:"net/http.Server"});var C=e(y,4);r(C,{source:"net/http.Request"});var Ye=e(C,2);r(Ye,{source:"net/http.ResponseWriter"});var R=e(k,8);w(R,{children:(o,v)=>{var a=Cr(),t=e(s(a));br(t,c=>({...c}),[()=>Sr(h("/issues",{prefix:u.prefix}))]),l(o,a)}});var P=e(R,2);i(P,{text:"Server"});var T=e(P,2),qe=e(s(T));r(qe,{source:"servers.New()"});var V=e(T,2);n(V,{lang:"go",source:`
            package main

            import (
                "main/lib/core/servers"
                "main/lib/core/ssr"
            )

            var server = servers.New() // Creates server.
            var render = ssr.New(1)    // Creates an SSR function.

            func main() {
                server.Render = render // Assigns render function to the server.
                servers.Start(server)  // Starts server.
            }
        `});var H=e(V,2);_(H,{children:(o,v)=>{var a=Rr(),t=p(a),c=e(s(t));r(c,{source:"ssr.New()"}),l(o,a)}});var F=e(H,2);b(F,{children:(o,v)=>{var a=Pr(),t=p(a),c=e(s(t));r(c,{source:"csr.New()"});var f=e(t,2);n(f,{lang:"go",source:`
            package main

            import (
                "main/lib/core/servers"
                "main/lib/core/csr"
            )

            var server = servers.New() // Creates server.
            var render = csr.New()     // Creates CSR function.

            func main() {
                server.Render = render // Assigns render function to the server.
                servers.Start(server)  // Starts server.
            }
        `}),l(o,a)}});var N=e(F,2);i(N,{text:"Routes"});var U=e(N,6),We=e(s(U));r(We,{source:"server.Routes"});var M=e(U,2);n(M,{lang:"go",source:`
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
        `});var $=e(M,2),Ke=e(s($));r(Ke,{source:"welcome.View"});var O=e($,2);n(O,{lang:"go",source:`
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `});var I=e(O,2);i(I,{text:"Path Fields"});var A=e(I,2),Le=e(s(A));r(Le,{source:"{}"});var G=e(A,2);n(G,{lang:"go",source:'routes.Route{Pattern: "GET /{name}", Handler: welcome.View}'});var j=e(G,2),Xe=e(s(j));r(Xe,{source:"receive.Path()"});var z=e(j,2);n(z,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `});var J=e(z,2);i(J,{text:"Messages"});var B=e(J,2),Ze=e(s(B));r(Ze,{source:"receive.Message()"});var D=e(B,2);n(D,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `});var E=e(D,2),er=e(s(E));r(er,{source:"send.Message()"});var Q=e(E,2);n(Q,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `});var Y=e(Q,2);i(Y,{text:"Headers"});var q=e(Y,2),rr=e(s(q));r(rr,{source:"receive.Header()"});var W=e(q,2);n(W,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `});var K=e(W,2),sr=e(s(K));r(sr,{source:"send.Header()"});var L=e(K,2);n(L,{lang:"go",source:`
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
        `});var X=e(L,2);i(X,{text:"Status"});var Z=e(X,2),nr=e(s(Z));r(nr,{source:"send.Status()"});var ee=e(Z,2);n(ee,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `});var re=e(ee,2);_(re,{children:(o,v)=>{var a=Tr();l(o,a)}});var se=e(re,2);i(se,{text:"Order of Operations"});var ne=e(se,6),ae=e(s(ne));r(ae,{source:"send.Status()"});var ar=e(ae,2);r(ar,{source:"send.Message()"});var te=e(ne,2);n(te,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `});var oe=e(te,2),tr=s(oe);r(tr,{source:"send.Status(client, 404)"});var ie=e(oe,2);n(ie,{lang:"http",source:`
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `});var ce=e(ie,8);n(ce,{lang:"log",source:`
            listening for requests at http://127.0.0.1:8080
            status is locked
        `});var le=e(ce,2),or=s(le);r(or,{source:"status is locked"});var de=e(le,2);i(de,{text:"Queries"});var ve=e(de,2),ir=e(s(ve));r(ir,{source:"receive.Query()"});var pe=e(ve,2);n(pe,{lang:"go",source:`
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
        `});var ue=e(pe,2);i(ue,{text:"Forms"});var me=e(ue,2),fe=e(s(me));r(fe,{source:"receive.Form()"});var ge=e(fe,2);r(ge,{source:"POST"});var cr=e(ge,2);r(cr,{source:"GET"});var he=e(me,2);n(he,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `});var _e=e(he,2);n(_e,{lang:"go",source:`
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
        `});var we=e(_e,2);b(we,{children:(o,v)=>{var a=Vr(),t=p(a),c=e(s(t));r(c,{source:"json"});var f=e(c,2);r(f,{source:"form"});var gr=e(t,4),hr=e(s(gr));r(hr,{source:"json"}),l(o,a)}});var be=e(we,2);b(be,{children:(o,v)=>{var a=Hr(),t=e(p(a),2);n(t,{lang:"go",source:'\n                type Form struct {\n                    Name     string               `form:"name"`\n                    Comments []string             `form:"comments"` // slice of strings\n                    File     multipart.FileHeader `form:"file"`     // file handler\n                }\n            '});var c=e(t,4);n(c,{lang:"go",source:`
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `});var f=e(c,4);n(f,{lang:"go",source:`
                defer src.Close()
                defer dst.Close()
            `}),l(o,a)}});var Se=e(be,2);i(Se,{text:"Json"});var xe=e(Se,2),ke=e(s(xe));r(ke,{source:"receive.Json()"});var lr=e(ke,2);r(lr,{source:"send.Json()"});var ye=e(xe,2);n(ye,{lang:"go",source:`
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `});var Ce=e(ye,2);n(Ce,{lang:"go",source:`
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
        `});var Re=e(Ce,2);i(Re,{text:"Cookies"});var Pe=e(Re,2),Te=e(s(Pe));r(Te,{source:"receive.Cookie()"});var dr=e(Te,2);r(dr,{source:"send.Cookie()"});var Ve=e(Pe,2);n(Ve,{lang:"go",source:`
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
        `});var He=e(Ve,2);i(He,{text:"Session Id"});var Fe=e(He,2),vr=e(s(Fe));r(vr,{source:"receive.SessionId()"});var Ne=e(Fe,2);n(Ne,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `});var Ue=e(Ne,2);w(Ue,{children:(o,v)=>{var a=Fr(),t=e(p(a),2),c=e(s(t));r(c,{source:"receive.SessionId()"}),l(o,a)}});var Me=e(Ue,2);_(Me,{children:(o,v)=>{var a=Nr(),t=e(s(a));r(t,{source:"receive.SessionId()"}),l(o,a)}});var $e=e(Me,2);i($e,{text:"Session"});var Oe=e($e,2),pr=e(s(Oe));r(pr,{source:"receive.Session()"});var Ie=e(Oe,2);w(Ie,{children:(o,v)=>{var a=Ur(),t=e(p(a));r(t,{source:"receive.SessionId()"}),l(o,a)}});var Ae=e(Ie,2);n(Ae,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `});var Ge=e(Ae,2);i(Ge,{text:"Redirect"});var je=e(Ge,2),ur=e(s(je));r(ur,{source:"send.Redirect()"});var ze=e(je,2);n(ze,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `});var Je=e(ze,2);i(Je,{text:"Navigate"});var Be=e(Je,2),mr=e(s(Be));r(mr,{source:"send.Navigate()"});var fr=e(Be,2);n(fr,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `}),l(m,g)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),wr()}export{Er as default};
